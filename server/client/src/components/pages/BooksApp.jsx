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
    hasBooksData || error || isSuccess || isLoading ? "row" : "column";
  return (
    <Box
      sx={{
        width: { xs: "100vw", sm: "100vw", md: "100vw" },
        maxWidth: { sm: "90%%", md: "65%", lg: "65%" },
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
            sm: flexDirection,
            md: flexDirection,
            lg: flexDirection,
          },
          padding: { xs: "0rem", sm: "0.5rem", md: "0.5rem", lg: "0.5rem" },
        }}
      >
        <Logo show={isSuccess || isLoading || error} />
        {!(isSuccess || isLoading || error) && <Message />}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: {
              xs: isSuccess ? "1rem" : "auto",
              sm: "auto",
              md: "auto",
              lg: "auto",
              xl: "auto",
            },
          }}
        >
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
