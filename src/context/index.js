import React, { createContext, useContext, useState } from "react";

// Create Context
const BooksContext = createContext([]);

// Provider Component
export const AuthProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState(0);

  const sortBooksByPublishYear = (books) => {
    return books.sort((a, b) => {
      const aPublishYear = a.publish_year[a.publish_year.length - 1];
      const bPublishYear = b.publish_year[b.publish_year.length - 1];

      if (sort === 1) {
        return bPublishYear - aPublishYear;
      } else if (sort === -1) {
        return aPublishYear - bPublishYear;
      } else {
        return 0;
      }
    });
  };

  // Example usage
  const sortedBooks = sortBooksByPublishYear(books);
  setBooks(sortedBooks);

  return (
    <AuthContext.Provider value={[books]}>{children}</AuthContext.Provider>
  );
};

// Custom Hook
export const useAuth = () => useContext(BooksContext);
