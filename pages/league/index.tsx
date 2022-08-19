import FuntimePage from "../../src/FuntimePage";
import { Typography } from "../../src/components/Typography";
import { Box, Flex } from "@chakra-ui/react";
import { LeagueMembersTable } from "../../src/components/profile/LeagueMembersTable";

export default function Profile(){


  return (
    <FuntimePage>
      <Flex justify="center" overflowX="hidden" overflowY="hidden">
        <Box bg='white' px={2} py={2} borderRadius="10px" minWidth="300px" w={[500, 500, 600]}>
          <Typography.H3 pl={5}> Leaderboard </Typography.H3>
          <LeagueMembersTable/>
        </Box>
      </Flex>
    </FuntimePage>
  )
}