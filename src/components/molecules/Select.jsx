import React, { useState, useMemo } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select as S,
} from "@mui/material";
const Select = ({ handleStatusChange }) => {
  const [value, setValue] = useState("");
  console.log(0);
  const options = useMemo(
    () => [
      { label: "Default", value: "default" },
      { label: "Newest", value: "newest" },
      { label: "Oldest", value: "oldest" },
    ],
    []
  );
  if (!options) return <></>;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        padding: "16px",
      }}
    >
      <FormControl sx={{ width: "200px" }} size="small">
        <InputLabel id="sort-select-label">Sort</InputLabel>
        <S
          labelId="sort-select-label"
          id="sort-select"
          value={value}
          label="Sort"
          onChange={handleStatusChange}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </S>
      </FormControl>
    </Box>
  );
};

export default Select;
