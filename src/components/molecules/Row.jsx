import React from "react";
import { Typography, Box, Divider, Chip } from "@mui/material";

import Cell from "../atoms/Cell";

export default function Row({ row, index, length }) {
  return (
    <React.Fragment key={row.id}>
      <Box sx={{ padding: "12px 16px" }}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Cell value={row.title} />
          <Cell value={row.author} />
          <Cell value={row.publish} />
          <Cell value={row.rate} />
          <Cell value={row.first} />
        </Box>
      </Box>
      {index < length && <Divider />}
    </React.Fragment>
  );
}
