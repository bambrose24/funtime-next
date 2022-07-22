import { Box, Typography } from "@mui/material";
import type { NextPage } from "next";
import FuntimePage from "../src/FuntimePage";

const Home: NextPage = () => {
  return (
    <FuntimePage>
      <Box>
        <Typography variant="h1">Welcome to Funtime 2022!</Typography>
      </Box>
    </FuntimePage>
  );
};

export default Home;
