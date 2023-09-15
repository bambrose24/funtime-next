import {gql} from '@apollo/client';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Select,
  useBreakpointValue,
} from '@chakra-ui/react';
import {
  MessageType,
  useAllTeamsQuery,
  useFindLeagueMembersQuery,
  useLeagueMostRecentlyStartedGameQuery,
  usePicksByWeekQuery,
  useWinnersQuery,
} from '@src/generated/graphql';
import {useLeaguePageMemberViewer} from '@src/hooks/useLeaguePageMemberViewer';
import {env} from '@src/util/config';
import _ from 'lodash';
import {useRouter} from 'next/router';
import {useState} from 'react';
import UserTag from '../profile/UserTag';
import {FuntimeLoading} from '../shared/FuntimeLoading';
import {Typography} from '../Typography';
import {CreateMessage} from './CreateMessage';
import {WeekMessages} from './WeekMessages';
import {WeekPicksGameCards} from './WeekPicksGameCards';
import {WeekPicksTable} from './WeekPicksTable';

type WeekContentProps = {
  leagueId: number;
};

const _LeagueMostRecentlyStartedGameQuery = gql`
  query LeagueMostRecentlyStartedGame($league_id: Int!) {
    league(where: {league_id: $league_id}) {
      id
      mostRecentlyStartedGame {
        id
        gid
        week
        season
        ts
        teams_games_homeToteams {
          id
          abbrev
        }
        teams_games_awayToteams {
          id
          abbrev
        }
      }
    }
  }
`;

export function WeekContent({leagueId}: WeekContentProps) {
  const [simulatedPicks, setSimulatedPicks] = useState<Record<number, number>>({});
  const router = useRouter();

  const weekParam = Number(router.query.week) || undefined;
  const overrideParam = Boolean(router.query.override) ?? false;

  const {data: winners, loading: winnersLoading} = useWinnersQuery({
    variables: {league_id: leagueId},
  });

  const [weekState, setWeekState] = useState<number | undefined>(weekParam);

  const [showMessages, setShowMessages] = useState(false);

  const toggleShowMessages = () => {
    setShowMessages(prev => !prev);
  };

  const {
    data: mostRecentStartedGame,
    loading: mostRecentStartedGameLoading,
  } = useLeagueMostRecentlyStartedGameQuery({
    variables: {
      league_id: leagueId,
    },
  });

  const {data: leagueViewer, loading: leagueViewerLoading} = useLeaguePageMemberViewer();

  const {data: picksData, loading: picksLoading, refetch: refetchPicksByWeek} = usePicksByWeekQuery(
    {
      variables: {
        league_id: leagueId,
        // this is where you'd set the "week" from a dropdown
        ...(weekState ? {week: weekState} : {}),
        // TODO just have this be derived api-side from the user's Role in the league
        ...(env !== 'production' || overrideParam ? {override: true} : {}),
      },
      fetchPolicy: 'cache-and-network',
      pollInterval: 1000 * 60 * 1, // every 1 minute
    }
  );

  const availableWeeksSet = new Set(
    [
      ...(winners?.findManyWeekWinners || []).map(w => w.week),
      picksData?.picksByWeek.week || undefined,
    ]
      .filter(Boolean)
      .map(x => parseInt((x as number)?.toString()))
  );
  const availableWeeks = _.sortBy([...availableWeeksSet]) as number[];

  const {data: people, loading: peopleLoading} = useFindLeagueMembersQuery({
    variables: {
      league_id: leagueId,
    },
  });

  const {data: teams, loading: teamsLoading} = useAllTeamsQuery();

  const Header = useBreakpointValue({base: Typography.H2, lg: Typography.H1}) || Typography.H1;

  if (
    (peopleLoading && !people) ||
    (teamsLoading && !teams) ||
    (winnersLoading && !winners) ||
    (picksLoading && !picksData) ||
    (mostRecentStartedGameLoading && !mostRecentStartedGame) ||
    (leagueViewerLoading && !leagueViewer)
  ) {
    return <FuntimeLoading />;
  }

  if (!people || !teams || !winners || !picksData || !mostRecentStartedGame) {
    return (
      <Box w="100%">
        <Typography.H2>There was an error. Please refresh the page.</Typography.H2>
      </Box>
    );
  }

  const picks = picksData;

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

  const week = weekResponse || mostRecentStartedGame?.league?.mostRecentlyStartedGame?.week;

  if (!picks.picksByWeek.canView || !week) {
    return (
      <Flex justify="center" w="100%">
        <Typography.H1 mt={2} mb={4}>
          You cannot view picks for this week yet. Do you need to make your pick still?
        </Typography.H1>
      </Flex>
    );
  }

  const currentWinners = winners.findManyWeekWinners.filter(winners => winners.week === week);
  const areMultipleWinners = currentWinners && currentWinners.length > 1;

  return (
    <>
      <Box mx="12px">
        <Flex w="100%" justify="center" px={{base: '4px', lg: '24px'}}>
          <HStack spacing="24px" justify="space-between" w="100%" px={{base: '4px', md: '24px'}}>
            <Header mt={2} mb={4} w="100%">
              Week {week}, {season}
            </Header>
            <Flex gap="8px" alignItems="center">
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
              <Button variant="solid" onClick={toggleShowMessages}>
                Chat
              </Button>
            </Flex>
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
        {currentWinners?.length !== undefined &&
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
          toggleMessagesDrawer={() => {
            setShowMessages(prev => !prev);
          }}
        />
      </Box>
      <Drawer
        size="xl"
        isOpen={showMessages}
        placement="right"
        onClose={() => {
          setShowMessages(false);
        }}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Week {week} Messages</DrawerHeader>
          <DrawerBody>
            <WeekMessages data={picksData} />
          </DrawerBody>
          <DrawerFooter borderTop="1px" borderColor="gray.100">
            <CreateMessage
              week={week}
              leagueId={leagueId}
              memberId={leagueViewer?.me?.leagueMember?.membership_id ?? 0}
              messageType={MessageType.WeekComment}
              onComplete={async () => {
                await refetchPicksByWeek();
              }}
            />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default WeekContent;
