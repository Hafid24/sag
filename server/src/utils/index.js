async function fetchBooksData(baseUrl, query) {
  const response = await fetch(`${baseUrl}/proxy${query}`);
  if (!response.ok) throw new Error("Failed to fetch books data");
  return response.json();
}

function filterUniqueBooks(books) {
  const seenBooks = new Set();
  return books.filter((book) => {
    if (!book.author_name) return false;
    const key = `${book.title}_${book.author_name.join(", ")}`;
    if (seenBooks.has(key)) return false;
    seenBooks.add(key);
    return true;
  });
}

async function addRatingsToBooks(baseUrl, books) {
  const booksWithRatings = await Promise.allSettled(
    books.map(async (book) => ({
      ...book,
      rating: await fetchBookRating(baseUrl, book.key),
    }))
  );

  return booksWithRatings
    .filter((result) => result.status === "fulfilled")
    .map((result) => result.value);
}

const fetchBookRating = async (baseUrl, key) => {
  try {
    const response = await fetch(`${baseUrl}/proxy${key}/ratings.json`);
    if (!response.ok) throw new Error("Failed to fetch rating");
    const ratingData = await response.json();
    const averageRating = ratingData?.summary?.average || 0;

    return averageRating;
  } catch (err) {
    console.error("Error fetching rating:", err);
    return 0;
  }
};
module.exports = {
  fetchBooksData,
  filterUniqueBooks,
  addRatingsToBooks,
};
