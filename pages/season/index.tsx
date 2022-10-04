import { Box, Flex } from "@chakra-ui/react";
import { LeagueMembersTable } from "@src/components/profile/LeagueMembersTable";
import { Typography } from "@src/components/Typography";
import FuntimePage from "@src/FuntimePage";

const SeasonPage: React.FC = () => {
  return (
    <FuntimePage>
      <Flex justify="center">
        <Typography.H1 my={3}> Leaderboard </Typography.H1>
      </Flex>
      <Flex justify="center" overflowX="hidden" overflowY="hidden">
        <Box
          bg="white"
          px={2}
          py={2}
          borderRadius="10px"
          minWidth="300px"
          w={[500, 500, 600]}
        >
          <LeagueMembersTable />
        </Box>
      </Flex>
    </FuntimePage>
  );
};

export default SeasonPage;
