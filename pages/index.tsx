import { Flex, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Section from "../src/components/Section";
import { Typography } from "../src/components/Typography";
import FuntimePage from "../src/FuntimePage";

const Home: NextPage = () => {
  return (
    <FuntimePage>
      <Section>
        <Flex justify="center">
          <VStack>
            <Typography.H3>Welcome to Funtime 2022!</Typography.H3>
            <Typography.Body1>
              We are prepping the site for 2022, stay tuned for updates!
            </Typography.Body1>
          </VStack>
        </Flex>
      </Section>
    </FuntimePage>
  );
};

export default Home;
