import React, { useMemo } from "react";
import { Box } from "@mui/material";
import Logo from "../atoms/Logo";
import Search from "../molecules/Search";
import Select from "../molecules/Select";

import Table from "../organisms/Table";
const BooksApp = () => {
  console.log(1);
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
          padding: "16px",
        }}
      >
        <Logo />
        <Search />
      </Box>
      <Select />
      <Table />
    </Box>
  );
};

export default BooksApp;
