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

  const flexDirection =
    hasBooksData || isSuccess || isLoading ? "row" : "column";
  return (
    <Box
      sx={{
        maxWidth: { md: "65%", lg: "65%", xl: "65%" },
        width: { xs: "100vw", sm: "100vw" },
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: flexDirection,
            lg: flexDirection,
          },
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
