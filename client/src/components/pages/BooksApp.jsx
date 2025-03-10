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
  } = useContext(BooksContext);
  const flexDirection =
    hasBooksData || error || isSuccess || isLoading ? "row" : "column";
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
            sm: flexDirection,
            md: flexDirection,
            lg: flexDirection,
          },
          padding: "0.5rem 0 0 0",
        }}
      >
        <Logo show={isSuccess || isLoading || error} />
        {!(isSuccess || isLoading || error) && <Message />}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: isLoading
              ? !hasBooksData
                ? { xs: "auto", sm: "1rem", md: "1rem", lg: "1rem", xl: "1rem" }
                : "1rem"
              : isSuccess
              ? "1rem"
              : error
              ? { xs: "0", sm: "auto", md: "0", lg: "0", xl: "0" }
              : { xs: "auto", sm: "auto" },
          }}
        >
          <Search setSearchQuery={setSearchQuery} />
        </Box>
      </Box>

      {isLoading && !hasBooksData && <Progress />}

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
