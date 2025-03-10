import { Box, TextField, InputAdornment, IconButton } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export default function Search({ onClick, searchQuery }) {
  const [query, setQuery] = useState(searchQuery);

  return (
    <Box
      sx={{
        width: "300px",
      }}
    >
      <TextField
        id="outlined-controlled"
        placeholder="Search…"
        size="small"
        sx={{
          width: "100%",
        }}
        value={query}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            onClick(query);
          }
        }}
        onChange={(e) => setQuery(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <SearchIcon onClick={() => onClick(query)} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
