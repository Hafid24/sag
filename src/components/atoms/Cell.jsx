import React from "react";
import { Typography, Box } from "@mui/material";

const Cell = ({ value, header }) => {
  return (
    <Box sx={{ width: "15%", flexShrink: 0 }}>
      <Typography
        variant="body2"
        textAlign="left"
        fontWeight={header ? "bold" : "medium"}
      >
        {value}
      </Typography>
    </Box>
  );
};

export default Cell;
