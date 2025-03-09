import { Box, TextField, InputAdornment, IconButton } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

export default function Search() {
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
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
