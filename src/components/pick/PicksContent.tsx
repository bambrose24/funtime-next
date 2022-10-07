import { Box, Flex } from "@chakra-ui/react";
import { PicksForm } from "@src/components/pick/PicksForm";
import { Typography } from "@src/components/Typography";
import {
  useFindLeagueMembersQuery,
  useFirstNotStartedWeekQuery,
} from "@src/generated/graphql";
import { LEAGUE_ID } from "@src/util/config";
import _ from "lodash";
import { useRouter } from "next/router";
import { FuntimeError } from "../shared/FuntimeError";
import { FuntimeLoading } from "../shared/FuntimeLoading";

export const PicksContent: React.FC = () => {
  const router = useRouter();
  const weekParam = router.query["week"];
  const overrideParam = router.query["override"];
  const {
    data: games,
    loading: gamesLoading,
    error: gamesError,
  } = useFirstNotStartedWeekQuery({
    variables: {
      ...(typeof weekParam === "string" ? { week: parseInt(weekParam) } : {}),
      ...(typeof overrideParam === "string" && overrideParam === "true"
        ? { override: true }
        : {}),
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
  const week = games.firstNotStartedWeek.games[0].week;
  const season = games.firstNotStartedWeek.games[0].season;

  const gamesSorted = _([...games.firstNotStartedWeek.games])
    .sortBy("gid")
    .sortBy("ts")
    .value();

  const peopleSorted = _([...people.leagueMembers])
    .orderBy((x) => x.people.username.toUpperCase())
    .value();

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
              games={gamesSorted}
              users={peopleSorted}
            />
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};
