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
  useBreakpointValue,
} from '@chakra-ui/react';
import {
  useAllTeamsQuery,
  useFindLeagueMembersQuery,
  usePicksByWeekQuery,
  useWinnersQuery,
} from '@src/generated/graphql';
import {env, LEAGUE_ID} from '@src/util/config';
import _ from 'lodash';
import {useEffect, useState} from 'react';
import UserTag from '../profile/UserTag';
import {FuntimeLoading} from '../shared/FuntimeLoading';
import {Typography} from '../Typography';
import {WeekPicksGameCards} from './WeekPicksGameCards';
import {WeekPicksTable} from './WeekPicksTable';

const fetchedWeeks = new Set<number>();

export const WeekContent: React.FC = () => {
  const [simulatedPicks, setSimulatedPicks] = useState<Record<number, number>>({});

  const [weekState, setWeekState] = useState<number | undefined>(undefined);

  const {data: defaultPicksByWeekData, loading: defaultPicksLoading} = usePicksByWeekQuery({
    variables: {league_id: LEAGUE_ID},
  });

  const {data: winners, loading: winnersLoading} = useWinnersQuery({
    variables: {league_id: LEAGUE_ID},
  });

  const {data: picksData, loading: picksLoading} = usePicksByWeekQuery({
    variables: {
      league_id: LEAGUE_ID,
      // this is where you'd set the "week" from a dropdown
      ...(weekState ? {week: weekState} : {}),
      ...(env === 'production' ? {override: true} : {}),
    },
    skip: weekState === undefined,
    pollInterval: 1000 * 60 * 3, // every 3 minutes
  });

  useEffect(() => {
    const weekResponse = picksData?.picksByWeek?.week;
    if (weekResponse && weekState !== weekResponse) {
      setWeekState(weekResponse);
    }
  }, [picksData, weekState, setWeekState]);

  const availableWeeksSet = new Set(
    [
      ...(winners?.findManyWeekWinners || []).map(w => w.week),
      defaultPicksByWeekData?.picksByWeek.week || undefined,
    ]
      .filter(Boolean)
      .map(x => parseInt((x as number)?.toString()))
  );
  const availableWeeks = _.sortBy([...availableWeeksSet]) as number[];

  const {data: people, loading: peopleLoading} = useFindLeagueMembersQuery({
    variables: {
      league_id: LEAGUE_ID,
    },
  });

  const {data: teams, loading: teamsLoading} = useAllTeamsQuery();

  const Header = useBreakpointValue({base: Typography.H2, lg: Typography.H1}) || Typography.H1;

  if (picksLoading || peopleLoading || teamsLoading || winnersLoading || defaultPicksLoading) {
    return <FuntimeLoading />;
  }

  if (!people || !teams || !winners || !defaultPicksByWeekData) {
    return (
      <Box w="100%">
        <Typography.H2>There was an error. Please refresh the page.</Typography.H2>
      </Box>
    );
  }

  const picks = picksData || defaultPicksByWeekData;

  const pickTeam = (t: number) => {
    const g = picks.picksByWeek.games.find(g => g.home === t || g.away === t);
    if (g) {
      if (g.gid in simulatedPicks && simulatedPicks[g.gid] === t) {
        setSimulatedPicks(curr => {
          const copy = {...curr};
          delete copy[g.gid];
          return copy;
        });
      } else {
        setSimulatedPicks({...simulatedPicks, [g.gid]: t});
      }
    }
  };

  const {week: weekResponse, season} = picks.picksByWeek;

  if (!picks.picksByWeek.canView) {
    return (
      <Flex justify="center" w="100%">
        <Typography.H1 mt={2} mb={4}>
          Picks are not yet available for Week {weekState}, {season} because the week has not
          started yet.
        </Typography.H1>
      </Flex>
    );
  }

  const week = weekResponse || weekState;

  const currentWinners = winners.findManyWeekWinners.filter(winners => winners.week === week);
  const areMultipleWinners = currentWinners && currentWinners.length > 1;

  return (
    <Box mx="12px">
      <Flex w="100%" justify="center" px={{base: '4px', lg: '24px'}}>
        <HStack spacing="24px" w="100%" px={{base: '4px', md: '24px'}}>
          <Header mt={2} mb={4} w="100%">
            Week {week}, {season}
          </Header>
          <FormControl w="150px" p="8px" bg="white" borderRadius="4px">
            <FormLabel>Week</FormLabel>
            <Select value={week} onChange={event => setWeekState(parseInt(event.target.value))}>
              {availableWeeks.map(week => {
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
          position: 'sticky',
          zIndex: 2,
          backgroundColor: '#EDF2F7',
          paddingTop: '16px',
        }}
      >
        <WeekPicksGameCards
          picksData={picks}
          teams={teams}
          pickTeam={pickTeam}
          simulatedPicks={simulatedPicks}
        />
      </div>
      {currentWinners?.length &&
        currentWinners.length > 0 &&
        Object.keys(simulatedPicks).length === 0 && (
          <Box px={{base: '2px', lg: '24px'}} py="16px">
            <Alert status="success">
              <AlertIcon />
              <AlertTitle>
                {areMultipleWinners
                  ? `Congrats to the week ${week} winners!`
                  : `Congrats to the week ${week} winner!`}
              </AlertTitle>
              <AlertDescription>
                <HStack>
                  {currentWinners.map(winner => {
                    return (
                      <UserTag
                        key={winner.member.people.uid}
                        user_id={winner.member.people.uid}
                        username={winner.member.people.username}
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
        picksData={picks}
        simulatedPicks={simulatedPicks}
      />
    </Box>
  );
};

export default WeekContent;
