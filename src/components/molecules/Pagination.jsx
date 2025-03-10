import React from "react";
import { Box, TablePagination, Chip } from "@mui/material";

export default function Pagination({
  page,
  pageSize,
  numFound,
  setPage,
  setPageSize,
}) {
  console.log(page);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "8px 16px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <TablePagination
          count={Math.ceil(numFound / pageSize)}
          page={page}
          shape="rounded"
          size="small"
          hideNextButton
          hidePrevButton
          siblingCount={0}
          component="div"
          onPageChange={(event, newPage) => setPage(newPage)}
          rowsPerPage={pageSize}
          rowsPerPageOptions={[5, 10, 15]}
          onRowsPerPageChange={(e) => setPageSize(e.target.value)}
        />
      </Box>
    </Box>
  );
}
