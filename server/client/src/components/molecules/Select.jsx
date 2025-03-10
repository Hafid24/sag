import React, { useState, useMemo, useCallback } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select as S,
} from "@mui/material";
const Select = ({ setSort }) => {
  const [value, setValue] = useState("");
  const handleChange = useCallback(
    (event) => {
      setValue(event.target.value);
      setSort(event.target.value);
    },
    [setSort]
  );
  const options = useMemo(
    () => [
      { label: "Default", value: "default" },
      { label: "Newest", value: "new" },
      { label: "Oldest", value: "old" },
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
          sx={{ textAlign: "left" }}
          labelId="sort-select-label"
          id="sort-select"
          value={value}
          label="Sort"
          onChange={handleChange}
        >
          {options.map((option) => (
            <MenuItem
              sx={{ textAlign: "left" }}
              key={option.value}
              value={option.value}
            >
              {option.label}
            </MenuItem>
          ))}
        </S>
      </FormControl>
    </Box>
  );
};

export default Select;
