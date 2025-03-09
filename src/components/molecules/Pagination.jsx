import React from "react";
import { Box, TablePagination, Chip } from "@mui/material";

export default function Pagination({
  page,
  rowsPerPage,
  allRowsLength,
  handleChangePage,
  handleChangeRowsPerPage,
}) {
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
          count={Math.ceil(allRowsLength / rowsPerPage)}
          page={page}
          onChange={handleChangePage}
          shape="rounded"
          size="small"
          hideNextButton
          hidePrevButton
          siblingCount={0}
          component="div"
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </Box>
  );
}
