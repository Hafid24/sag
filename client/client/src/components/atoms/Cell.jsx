import React from "react";
import { Typography, Box } from "@mui/material";

const Cell = ({ value, header }) => {
  let decodedValue = "";
  try {
    decodedValue = decodeURIComponent(`${value}`.replace(/\\u/g, "%u"));
  } catch (error) {
    decodedValue = value; // Fallback to raw value
  }
  return (
    <Box sx={{ width: "15%", flexShrink: 0 }}>
      <Typography
        variant="body2"
        textAlign="left"
        fontWeight={header ? "bold" : "medium"}
        style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {decodedValue}
      </Typography>
    </Box>
  );
};

export default Cell;
