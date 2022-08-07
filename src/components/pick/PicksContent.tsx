import { Box, Flex, Spinner } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { PicksForm } from "@src/components/pick/PicksForm";
import { Typography } from "@src/components/Typography";
import FuntimePage from "@src/FuntimePage";
import {
  useFindLeagueMembersQuery,
  useGamesByWeekQuery,
} from "@src/generated/graphql";
import { SEASON } from "@src/util/config";
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
