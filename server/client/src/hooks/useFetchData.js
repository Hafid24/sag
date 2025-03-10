import { useQuery } from "@tanstack/react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const fetchData = async (searchQuery, sort, pageSize = 5, page = 1) => {
  if (searchQuery === "") return [];

  const sortQuery = sort === "default" ? "" : `&sort=${sort}`;

  const response = await fetch(
    `${API_BASE_URL}?q=${searchQuery}&offset=${
      page * pageSize
    }&limit=${pageSize}${sortQuery}`
  );
  const data = await response.json();

  return data;
};

export const useBooks = (searchQuery, sort, pageSize, page) => {
  return useQuery({
    queryKey: ["books", searchQuery, sort, pageSize, page],
    queryFn: () => fetchData(searchQuery, sort, pageSize, page),
    enabled: !!searchQuery,
    staleTime: 1000 * 60 * 10,
  });
};
