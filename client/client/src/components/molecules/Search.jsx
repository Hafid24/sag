import { Box, TextField, InputAdornment, IconButton } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export default function Search({ setSearchQuery }) {
  const [query, setQuery] = useState("");
  return (
    <Box
      sx={{
        width: "300px",
      }}
    >
      <TextField
        id="outlined-controlled"
        label="Search"
        placeholder="Search…"
        size="small"
        sx={{
          width: "100%",
        }}
        onChange={(e) => setQuery(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <SearchIcon onClick={() => setSearchQuery(query)} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
