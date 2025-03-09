import { Box, Paper, Divider } from "@mui/material";

import Cell from "../atoms/Cell";

export default function HeaderRow() {
  return (
    <Box sx={{ padding: "16px" }}>
      <Paper
        elevation={0}
        variant="body1"
        sx={{
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            padding: "12px 16px",
            display: "flex",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Cell header={true} value="Title" />
            <Cell header={true} value="Author" />
            <Cell header={true} value="Publish year" />
            <Cell header={true} value="Rating" />
            <Cell header={true} value="First sentece" />
          </Box>
        </Box>
        <Divider />
      </Paper>
    </Box>
  );
}
