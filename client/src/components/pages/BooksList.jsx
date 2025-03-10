import React from "react";
import { Box } from "@mui/material";
import Logo from "../atoms/Logo";
import Search from "../molecules/Search";
import AlertMessage from "../atoms/AlertMessage";
import Table from "../organisms/Table";
import Progress from "../atoms/Progress";

const BooksApp = ({ props }) => {
  const {
    books,
    isLoading,
    setSearchQuery,
    setPageSize,
    pageSize,
    setPage,
    page,
    error,
    numFound,
    hasBooksData,

    isSuccess,
    setSort,
    searchQuery,
  } = props;

  return (
    <Box
      sx={{
        width: { xs: "100vw", sm: "100vw", md: "100vw" },
        maxWidth: { sm: "90%%", md: "60rem", lg: "60rem" },
        minWidth: { md: "50rem" },
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
            sm: "row",
            md: "row",
            lg: "row",
          },
          padding: "0.5rem 0 0 0",
        }}
      >
        <Logo show={false} />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "1rem",
          }}
        >
          <Search onClick={setSearchQuery} searchQuery={searchQuery} />
        </Box>
      </Box>

      {isLoading && !hasBooksData && <Progress />}

      {((isSuccess && !hasBooksData) || error) && <AlertMessage />}
      <Table
        setSort={setSort}
        isLoading={isLoading}
        show={hasBooksData || error}
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
