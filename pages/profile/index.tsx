import FuntimePage from "../../src/FuntimePage";
import { Typography } from "../../src/components/Typography";
import { Box, Flex, Spinner, Center } from "@chakra-ui/react";
import { LeagueMembersTable } from "../../src/components/profile/LeagueMembersTable";

export default function Profile(){


  return (
    <FuntimePage>
      <Flex justify="center" overflowX="auto">
        <Box bg='white' px={2} py={5} mt={5} borderRadius="10px" minWidth="400px">
          <Typography.H3 pl={5}> League Members </Typography.H3>
          <LeagueMembersTable/>
        </Box>
      </Flex>
    </FuntimePage>
  )
}