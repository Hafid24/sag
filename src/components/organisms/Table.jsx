import React from "react";
import { Box, Paper, Divider } from "@mui/material";

import HeaderRow from "./HeaderRow";
import Pagination from "../molecules/Pagination";
import Row from "../molecules/Row";
import Select from "../molecules/Select";
import Progress from "../atoms/Progress";

const Table = ({
  books,
  setPageSize,
  setPage,
  page,
  pageSize,
  numFound,
  show,
  isLoading,
  setSort,
}) => {
  if (!show) return null;

  return (
    <Box sx={{ filter: isLoading ? "blur(2px)" : "none" }}>
      {isLoading && <Progress />}
      <Select setSort={setSort} />

      <Box sx={{ padding: "16px" }}>
        <Paper elevation={0} sx={{ overflow: "hidden" }}>
          <HeaderRow />
          <Divider />
          {books.map((row, index) => (
            <Row key={row.key} row={row} index={index} length={pageSize} />
          ))}
          <Pagination
            page={page}
            pageSize={pageSize}
            numFound={numFound}
            setPage={setPage}
            setPageSize={setPageSize}
          />
        </Paper>
      </Box>
    </Box>
  );
};

export default Table;
