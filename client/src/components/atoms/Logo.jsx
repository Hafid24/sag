import React from "react";
import { Box } from "@mui/material";

const Logo = ({ show }) => {
  const logoStyles = show
    ? {
        width: "120px",
        height: "38px",
        margin: {
          xs: "3rem",
          sm: "auto auto auto 0",
          md: "auto auto auto 0",
          lg: "auto auto auto 0",
        },
      }
    : { width: "180px", height: "57px", marginTop: "3rem" };
  return (
    <Box
      sx={{
        marginBottom: "1rem",
        display: "flex",
        alignItems: "center",
        ...logoStyles,
      }}
    >
      <img
        src="logo.svg"
        alt="Logo"
        onError={(e) => {
          console.error("Image failed to load");
          e.target.style.display = "none";
        }}
      />
    </Box>
  );
};

export default Logo;
