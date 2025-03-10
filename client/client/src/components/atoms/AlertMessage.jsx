import { Box, Typography } from "@mui/material";

const AlertMessage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        height: "3rem",
        top: "50%",
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          display: "block",
        }}
      >
        Please try again
      </Typography>
      <Typography variant="body1" sx={{ display: "block" }}>
        No books found!
      </Typography>
    </Box>
  );
};

export default AlertMessage;
