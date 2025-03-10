import { useQuery } from "@tanstack/react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const ratingCache = new Map(); // Cache to store book ratings

const fetchBookRating = async (key) => {
  if (ratingCache.has(key)) {
    return ratingCache.get(key); // Return cached rating
  }

  try {
    const response = await fetch(`/api${key}/ratings.json`);
    if (!response.ok) throw new Error("Failed to fetch rating");
    const ratingData = await response.json();
    const averageRating = ratingData?.summary?.average || 0;

    ratingCache.set(key, averageRating);
    return averageRating;
  } catch {
    return 0;
  }
};

const fetchData = async (searchQuery, sort, pageSize = 5, page = 1) => {
  if (searchQuery === "") return [];

  const sortQuery = sort === "default" ? "" : `&sort=${sort}`;

  const response = await fetch(
    `${API_BASE_URL}?q=${searchQuery}&offset=${
      page * pageSize
    }&limit=${pageSize}${sortQuery}&fields=key,title,author_name,publish_year,first_sentence`
  );
  const data = await response.json();

  const seenBooks = new Set();
  const uniqueBooks = data.docs.filter((book) => {
    const key = `${book.title}_${book.author_name.join(", ")}`;
    if (seenBooks.has(key)) return false;
    seenBooks.add(key);
    return true;
  });
  data.docs = uniqueBooks;

  const booksWithRatings = await Promise.allSettled(
    data.docs.map(async (book) => ({
      ...book,
      rating: await fetchBookRating(book.key),
    }))
  );

  return {
    books: booksWithRatings
      .filter((result) => result.status === "fulfilled")
      .map((result) => result.value),
    num_found: data.numFound,
  };
};

export const useBooks = (searchQuery, sort, pageSize, page) => {
  return useQuery({
    queryKey: ["books", searchQuery, sort, pageSize, page],
    queryFn: () => fetchData(searchQuery, sort, pageSize, page),
    enabled: !!searchQuery,
    staleTime: 1000 * 60 * 10,
  });
};
