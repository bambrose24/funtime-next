import { Box, Container, Flex } from "@chakra-ui/react";
import { NextPage } from "next";
import { Typography } from "../../src/components/Typography";
import FuntimePage from "../../src/FuntimePage";

const RegisterPage: NextPage = () => {
  return (
    <FuntimePage>
      <Container>
        <Typography.H1>Look at this</Typography.H1>
      </Container>
    </FuntimePage>
  );
};

export default RegisterPage;
