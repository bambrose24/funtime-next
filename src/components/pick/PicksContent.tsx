import { Box, Flex } from "@chakra-ui/react";
import { PicksForm } from "@src/components/pick/PicksForm";
import { Typography } from "@src/components/Typography";
import { PickPageProps } from "pages/pick";

export const PicksContent: React.FC<PickPageProps> = ({
  games,
  people,
  week,
  season,
}) => {
  return (
    <Flex justify="center">
      <Box maxWidth="min(100%, 800px)" bgColor="white" p={4}>
        <Box textAlign="center">
          <Typography.H2>
            Make Your Picks for Week {week}, {season}
          </Typography.H2>
          <Flex w="100%" justify="center" bgColor="white" py={8} px={4}>
            <PicksForm
              games={games.findManyGames}
              users={people.findManyLeagueMembers}
            />
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};
