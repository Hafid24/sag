import React from "react";
import { Typography } from "@mui/material";

const Logo = () => {
  return (
    <Typography
      variant="h6"
      noWrap
      component="div"
      sx={{ display: { xs: "none", sm: "block" }, fontWeight: "bold" }}
    >
      COMPANY LOGO
    </Typography>
  );
};

export default Logo;
