import Box from "@mui/material/Box";
import { CircularProgress } from "@mui/material";

const Progress = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      position: "fixed",
      top: "3rem",
      left: 0,
      right: 0,
      bottom: 0,
      alignItems: "center",
    }}
  >
    <CircularProgress />
  </Box>
);

export default Progress;
