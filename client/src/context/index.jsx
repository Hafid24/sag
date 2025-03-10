import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from "react";

import { useBooks } from "../hooks/useFetchData";

const BooksContext = createContext([]);

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState("default");
  const [pageSize, setPageSize] = useState(5);
  const [page, setPage] = useState(0);
  const [numFound, setNumFound] = useState(0);

  const { data, isLoading, error, isSuccess } = useBooks(
    searchQuery,
    sort,
    pageSize,
    page
  );

  const hasBooksData = useMemo(
    () => Array.isArray(books) && books.length > 0,
    [books]
  );

  useEffect(() => {
    if (data) {
      setBooks(data.books);
      setNumFound(data.num_found);
    }
  }, [data, isLoading]);

  return (
    <BooksContext.Provider
      value={{
        books,
        isLoading,
        error,
        setSearchQuery,
        setSort,
        setPageSize,
        pageSize,
        setPage,
        page,
        numFound,
        hasBooksData,
        isSuccess,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export default BooksContext;
