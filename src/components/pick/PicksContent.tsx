import { Box, Flex, Spinner } from "@chakra-ui/react";
import { PicksForm } from "@src/components/pick/PicksForm";
import { Typography } from "@src/components/Typography";
import {
  useFindLeagueMembersQuery,
  useGamesByWeekQuery,
} from "@src/generated/graphql";
import { LEAGUE_ID, SEASON } from "@src/util/config";
import { FuntimeError } from "../shared/FuntimeError";
import { FuntimeLoading } from "../shared/FuntimeLoading";

export const PicksContent: React.FC = () => {
  const {
    data: games,
    loading: gamesLoading,
    error: gamesError,
  } = useGamesByWeekQuery({
    variables: {
      season: SEASON,
      week: 1,
    },
  });

  const {
    data: people,
    loading: peopleLoading,
    error: peopleError,
  } = useFindLeagueMembersQuery({
    variables: {
      league_id: LEAGUE_ID,
    },
  });

  if (gamesLoading || peopleLoading) {
    return <FuntimeLoading />;
  }
  if (!games || !people || gamesError || peopleError) {
    return <FuntimeError />;
  }
  const week = games.findManyGames[0].week;
  const season = games.findManyGames[0].season;
  return (
    <Flex justify="center">
      <Box maxWidth="min(100%, 800px)" bgColor="white" p={4}>
        <Box textAlign="center">
          <Typography.H2>
            Make Your Picks for Week {week}, {season}
          </Typography.H2>
          <Flex w="100%" justify="center" bgColor="white" py={8} px={4}>
            <PicksForm
              week={week}
              season={season}
              games={games.findManyGames}
              users={people.findManyLeagueMembers}
            />
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};
