import React, { useContext } from "react";
import { Box } from "@mui/material";
import Logo from "../atoms/Logo";
import Search from "../molecules/Search";
import AlertMessage from "../atoms/AlertMessage";
import Table from "../organisms/Table";
import Message from "../atoms/Message";
import Progress from "../atoms/Progress";

import BooksContext from "../../context";

const BooksApp = () => {
  const {
    books,
    isLoading,
    error,
    setSearchQuery,
    setPageSize,
    pageSize,
    setPage,
    page,
    numFound,
    hasBooksData,
    isSuccess,
    setSort,
  } = useContext(BooksContext);

  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "100%", md: "72rem", lg: "72rem" },
        margin: "0 auto",
        padding: "0 24px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection:
            hasBooksData || isSuccess || isLoading ? "row" : "column",
          padding: "16px",
        }}
      >
        <Logo show={isSuccess || isLoading} />
        {!(isSuccess || isLoading) && <Message />}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Search setSearchQuery={setSearchQuery} />
        </Box>
      </Box>

      {isLoading && <Progress />}

      {((isSuccess && !hasBooksData) || error) && <AlertMessage />}
      <Table
        setSort={setSort}
        isLoading={isLoading}
        show={hasBooksData}
        books={books}
        setPage={setPage}
        setPageSize={setPageSize}
        pageSize={pageSize}
        page={page}
        numFound={numFound}
      />
    </Box>
  );
};

export default BooksApp;
