import { Box, Flex } from "@chakra-ui/react";
import {
  useAllTeamsQuery,
  useFindLeagueMembersQuery,
  usePicksByWeekQuery,
} from "@src/generated/graphql";
import { env, LEAGUE_ID } from "@src/util/config";
import { FuntimeLoading } from "../shared/FuntimeLoading";
import { Typography } from "../Typography";
import { WeekPicksGameCards } from "./WeekPicksGameCards";
import { WeekPicksTable } from "./WeekPicksTable";

export const WeekContent: React.FC = () => {
  const {
    data: picksData,
    loading: picksLoading,
    error: picksError,
  } = usePicksByWeekQuery({
    variables: {
      league_id: LEAGUE_ID,
      // this is where you'd set the "week" from a dropdown
      // week: env === "production" ? undefined : 1
      override: env === "production" ? undefined : true,
    },
    pollInterval: 1000 * 60 * 3, // every 3 minutes
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

  const {
    data: teams,
    loading: teamsLoading,
    error: teamsError,
  } = useAllTeamsQuery();

  if ((picksLoading && !picksData) || peopleLoading || teamsLoading) {
    return <FuntimeLoading />;
  }

  if (!picksData || !people || !teams) {
    console.log({ picksError, teamsError, peopleError });
    return (
      <Box w="100%">
        <Typography.H2>
          There was an error. Please refresh the page.
        </Typography.H2>
      </Box>
    );
  }

  const { week, season } = picksData.picksByWeek;

  if (!picksData.picksByWeek.canView) {
    return (
      <Flex justify="center" w="100%">
        <Typography.H1 mt={2} mb={4}>
          Picks are not yet available for Week {week}, {season} because the week
          has not started yet.
        </Typography.H1>
      </Flex>
    );
  }

  return (
    <>
      <Flex justify="center" w="100%">
        <Typography.H1 mt={2} mb={4}>
          Week {week}, {season}
        </Typography.H1>
      </Flex>
      <WeekPicksGameCards picksData={picksData} teams={teams} />
      <WeekPicksTable teams={teams} people={people} picksData={picksData} />
    </>
  );
};

export default WeekContent;
