import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Select,
} from "@chakra-ui/react";
import { WineBarSharp } from "@mui/icons-material";
import {
  useAllTeamsQuery,
  useFindLeagueMembersQuery,
  usePicksByWeekLazyQuery,
  usePicksByWeekQuery,
  useWinnersQuery,
} from "@src/generated/graphql";
import client from "@src/graphql";
import { env, LEAGUE_ID } from "@src/util/config";
import _ from "lodash";
import { useEffect, useState } from "react";
import UserTag from "../profile/UserTag";
import { FuntimeLoading } from "../shared/FuntimeLoading";
import { Typography } from "../Typography";
import { WeekPicksGameCards } from "./WeekPicksGameCards";
import { WeekPicksLoader } from "./WeekPicksLoader";
import { WeekPicksTable } from "./WeekPicksTable";

const fetchedWeeks = new Set<number>();

export const WeekContent: React.FC = () => {
  const [simulatedPicks, setSimulatedPicks] = useState<Record<number, number>>(
    {}
  );

  const [week, setWeek] = useState<number | undefined>(undefined);

  const { data: defaultPicksByWeekData, loading: defaultPicksLoading } =
    usePicksByWeekQuery({ variables: { league_id: LEAGUE_ID } });

  const { data: winners, loading: winnersLoading } = useWinnersQuery({
    variables: { league_id: LEAGUE_ID },
  });

  const {
    data: picksData,
    loading: picksLoading,
    error: picksError,
  } = usePicksByWeekQuery({
    variables: {
      league_id: LEAGUE_ID,
      // this is where you'd set the "week" from a dropdown
      ...(week ? { week } : {}),
      ...(env === "production" ? { override: true } : {}),
    },
    pollInterval: 1000 * 60 * 3, // every 3 minutes
  });
  useEffect(() => {
    const weekResponse = picksData?.picksByWeek?.week;
    if (weekResponse && week !== weekResponse) {
      setWeek(weekResponse);
    }
  }, [picksData, week, setWeek]);

  const availableWeeksSet = new Set(
    [
      ...(winners?.weekWinners || []).map((w) => w.week),
      defaultPicksByWeekData?.picksByWeek.week || undefined,
    ]
      .filter(Boolean)
      .map((x) => parseInt((x as number)?.toString()))
  );
  const availableWeeks = _.sortBy([...availableWeeksSet]) as number[];

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

  if (
    picksLoading ||
    peopleLoading ||
    teamsLoading ||
    winnersLoading ||
    defaultPicksLoading
  ) {
    return <FuntimeLoading />;
  }

  if (!picksData || !people || !teams || !winners || !defaultPicksByWeekData) {
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

  const { week: weekResponse, season } = picksData.picksByWeek;

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
      {availableWeeks &&
        availableWeeks.map((week) => (
          <WeekPicksLoader key={week} week={week} />
        ))}
      <Flex w="100%" justify="center" px="24px">
        <HStack spacing="24px">
          <Typography.H1 mt={2} mb={4}>
            Week {week}, {season}
          </Typography.H1>
          <FormControl w="150px" p="8px" bg="white" borderRadius="4px">
            <FormLabel>Week</FormLabel>
            <Select
              value={week}
              onChange={(event) => setWeek(parseInt(event.target.value))}
            >
              {availableWeeks.map((week) => {
                return (
                  <option key={week} value={week.toString()}>
                    {week}
                  </option>
                );
              })}
            </Select>
          </FormControl>
        </HStack>
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
