import React from "react";
import { Box } from "@mui/material";
import Logo from "../atoms/Logo";
import Search from "../molecules/Search";
import { useNavigate, Navigate } from "react-router-dom";
import Message from "../atoms/Message";
import Progress from "../atoms/Progress";

const Home = ({ props }) => {
  const { isLoading, setSearchQuery, searchQuery } = props;

  const navigate = useNavigate();

  const navigateToTable = (query) => {
    setSearchQuery(query);
    navigate("/table");
  };

  return (
    <Box
      sx={{
        width: { xs: "100vw", sm: "100vw", md: "100vw" },
        maxWidth: { sm: "90%%", md: "60rem", lg: "60rem" },
        minWidth: { md: "50rem" },
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
          padding: "0.5rem 0 0 0",
        }}
      >
        <Logo show={true} />
        <Message show={true} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: "auto",

            marginRight: "auto",
          }}
        >
          <Search onClick={navigateToTable} searchQuery={searchQuery} />
        </Box>
      </Box>

      {isLoading && <Progress />}
    </Box>
  );
};

export default Home;
