import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Flex,
} from "@chakra-ui/react";
import {
  useAllTeamsQuery,
  useFindLeagueMembersQuery,
  usePicksByWeekQuery,
} from "@src/generated/graphql";
import { env, LEAGUE_ID } from "@src/util/config";
import { useState } from "react";
import { number } from "yup";
import { FuntimeLoading } from "../shared/FuntimeLoading";
import { Typography } from "../Typography";
import { WeekPicksGameCards } from "./WeekPicksGameCards";
import { WeekPicksTable } from "./WeekPicksTable";

export const WeekContent: React.FC = () => {
  const [simulatedPicks, setSimulatedPicks] = useState<Record<number, number>>(
    {}
  );

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

  const pickTeam = (t: number) => {
    const g = picksData.picksByWeek.games.find(
      (g) => g.home === t || g.away === t
    );
    if (g) {
      if (g.gid in simulatedPicks && simulatedPicks[g.gid] === t) {
        setSimulatedPicks((curr) => {
          const copy = { ...curr };
          delete copy[g.gid];
          return copy;
        });
      } else {
        setSimulatedPicks({ ...simulatedPicks, [g.gid]: t });
      }
    }
  };

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
    <Box mx="12px">
      <Flex justify="center" w="100%">
        <Typography.H1 mt={2} mb={4}>
          Week {week}, {season}
        </Typography.H1>
      </Flex>
      {/* <Alert status="info">
        <AlertIcon />
        <AlertTitle>New feature!</AlertTitle>
        <AlertDescription>
          Click on a team to simulate the winner.
        </AlertDescription>
      </Alert> */}
      <div
        style={{
          top: 0,
          position: "sticky",
          zIndex: 2,
          backgroundColor: "#EDF2F7",
          paddingTop: "16px",
        }}
      >
        <WeekPicksGameCards
          picksData={picksData}
          teams={teams}
          pickTeam={pickTeam}
          simulatedPicks={simulatedPicks}
        />
      </div>
      <WeekPicksTable
        teams={teams}
        people={people}
        picksData={picksData}
        simulatedPicks={simulatedPicks}
      />
    </Box>
  );
};

export default WeekContent;
