import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Flex,
  HStack,
} from "@chakra-ui/react";
import {
  useAllTeamsQuery,
  useFindLeagueMembersQuery,
  usePicksByWeekQuery,
  useWinnersQuery,
} from "@src/generated/graphql";
import { env, LEAGUE_ID } from "@src/util/config";
import { useState } from "react";
import UserTag from "../profile/UserTag";
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

  const { data: winners, loading: winnersLoading } = useWinnersQuery({
    variables: { league_id: LEAGUE_ID },
  });

  const {
    data: teams,
    loading: teamsLoading,
    error: teamsError,
  } = useAllTeamsQuery();

  if (picksLoading || peopleLoading || teamsLoading || winnersLoading) {
    return <FuntimeLoading />;
  }

  if (!picksData || !people || !teams || !winners) {
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

  const currentWinners = winners.weekWinners.find(
    (winners) => winners.week === week
  );
  const areMultipleWinners = currentWinners && currentWinners.member.length > 1;

  return (
    <Box mx="12px">
      <Flex justify="center" w="100%">
        <Typography.H1 mt={2} mb={4}>
          Week {week}, {season}
        </Typography.H1>
      </Flex>
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
      {currentWinners?.member?.length &&
        currentWinners.member.length > 0 &&
        Object.keys(simulatedPicks).length === 0 && (
          <Box p="24px">
            <Alert status="success">
              <AlertIcon />
              <AlertTitle>
                {areMultipleWinners
                  ? `Congrats to the week ${week} winners!`
                  : `Congrats to the week ${week} winner!`}
              </AlertTitle>
              <AlertDescription>
                <HStack>
                  {currentWinners.member.map((winner) => {
                    return (
                      <UserTag
                        key={winner.people.uid}
                        user_id={winner.people.uid}
                        username={winner.people.username}
                      />
                    );
                  })}
                </HStack>
              </AlertDescription>
            </Alert>
          </Box>
        )}
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
