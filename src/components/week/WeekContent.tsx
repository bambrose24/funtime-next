import { Box, Flex } from "@chakra-ui/react";
import {
  useAllTeamsQuery,
  useFindLeagueMembersQuery,
  usePicksByWeekQuery,
} from "@src/generated/graphql";
import { LEAGUE_ID } from "@src/util/config";
import { FuntimeLoading } from "../shared/FuntimeLoading";
import { Typography } from "../Typography";
import { WeekPicksGameCards } from "./WeekPicksGameCards";
import { WeekPicksTable } from "./WeekPicksTable";

export const WeekContent: React.FC = () => {
  const { data: picksData, loading: picksLoading } = usePicksByWeekQuery({
    variables: { league_id: LEAGUE_ID, week: 1 },
    pollInterval: 1000 * 60 * 3, // every 3 minutes
  });

  const { data: people, loading: peopleLoading } = useFindLeagueMembersQuery({
    variables: {
      league_id: LEAGUE_ID,
    },
  });

  const { data: teams, loading: teamsLoading } = useAllTeamsQuery();

  if ((picksLoading && !picksData) || peopleLoading || teamsLoading) {
    return <FuntimeLoading />;
  }

  if (!picksData || !people || !teams) {
    return (
      <Box w="100%">
        <Typography.H2>
          There was an error. Please refresh the page.
        </Typography.H2>
      </Box>
    );
  }

  const { week, season } = picksData.picksByWeek;

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
