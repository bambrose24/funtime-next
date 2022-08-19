import { Flex, Box, VStack, Image } from "@chakra-ui/react";
import type { NextPage } from "next";
import Section from "../src/components/Section";
import { Typography } from "../src/components/Typography";
import FuntimePage from "../src/FuntimePage";

const Home: NextPage = () => {
  return (
    <FuntimePage>
      <Section>
        <Flex justify="center">
          <Box px={8} py={6} bgColor="white" rounded="lg" border="solid 2px" borderColor="blue.600" boxShadow="1px 0px 20px lightgray">
            <VStack>
            <Image src="/favicon.ico" width={50}/>
              <Typography.H3>Welcome to <Image pb={2} src="/logo/funtime_full_logo_blue.png" width={100} verticalAlign="middle" display="inline-block"/> 2022!</Typography.H3>
              <Typography.Body1>
                We are prepping the site for 2022, stay tuned for updates!
              </Typography.Body1>
            </VStack>
          </Box>
        </Flex>
      </Section>
    </FuntimePage>
  );
};

export default Home;
