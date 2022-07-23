import { Text, useBreakpointValue } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Typography } from "../src/components/Typography";
import FuntimePage from "../src/FuntimePage";

const Home: NextPage = () => {
  return (
    <FuntimePage>
      <Typography.H3>
        <strong>Welcome to Funtime 2022!</strong>
      </Typography.H3>
      <Typography.Body1>
        We are prepping the site for 2022, stay tuned for updates!
      </Typography.Body1>
    </FuntimePage>
  );
};

export default Home;
