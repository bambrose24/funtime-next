import {Badge, Box, Button, Divider, Flex, HStack, Skeleton, VStack} from '@chakra-ui/react';
import {HomeQuery} from '@src/generated/graphql';
import {useLeagueRankings} from '@src/hooks/useLeagueRankings';
import {getOrdinal} from '@src/util/ordinals';
import Link from 'next/link';
import {Typography} from '../Typography';
import {useLeagueCardDimensions} from './useLeageCardDimensions';

export function LeagueCardContent({league_id, data}: {league_id: number; data: HomeQuery}) {
  const member = data.user?.leaguemembers?.find(member => member.leagues.league_id === league_id);
  const membership_id = member?.membership_id;

  const {width, height} = useLeagueCardDimensions();
  const {
    data: leagueRankings,
    loading: leagueRankingsLoading,
    error: leagueRankingsError,
  } = useLeagueRankings({leagueId: league_id});

  if (!member || !membership_id) {
    return null;
  }

  if (leagueRankingsLoading || leagueRankingsError || !leagueRankings) {
    return <Skeleton w={width} h={height} />;
  }

  const league = member.leagues;
  const isLeagueDone = league.season < 2023;

  const memberRanking = leagueRankings.find(
    ranking => ranking.member.membership_id === membership_id
  );

  return (
    <Flex direction="column" w={width} h={height} layerStyle="funtime-card">
      <Flex justify="space-between">
        <Typography.H3>{league.name}</Typography.H3>
        <Flex alignItems="center">
          {isLeagueDone ? (
            <Badge colorScheme="green" variant="solid">
              Complete
            </Badge>
          ) : (
            <Badge colorScheme="yellow" variant="solid">
              In Progress
            </Badge>
          )}
        </Flex>
      </Flex>
      <Box mt="16px" />
      <Flex direction="column" h="100%" justify="space-between">
        <VStack divider={<Divider />} spacing="8px">
          <Flex w="100%" justify="space-between">
            <Typography.Body2>Week Wins</Typography.Body2>
            {member.WeekWinners.length && member.WeekWinners.length > 0 ? (
              <>
                <HStack>
                  {member.WeekWinners.map((weekWinner, i) => {
                    return (
                      <Badge key={i} colorScheme="green" variant="subtle">
                        Week {weekWinner.week}
                      </Badge>
                    );
                  })}
                </HStack>
              </>
            ) : (
              <Typography.Subtitle1 fontWeight="bold">None</Typography.Subtitle1>
            )}
          </Flex>
          <Flex w="100%" justify="space-between">
            <Typography.Body2>League Rank</Typography.Body2>
            <Typography.Subtitle1 fontWeight="bold">
              {memberRanking?.rank ? getOrdinal(memberRanking.rank) : '--'}
            </Typography.Subtitle1>
          </Flex>
          <Flex w="100%" justify="space-between">
            <Typography.Body2>Number Correct</Typography.Body2>
            <Typography.Subtitle1 fontWeight="bold">
              {member.correctPicks.count ?? 0} /{' '}
              {(member.correctPicks.count ?? 0) + (member.wrongPicks.count ?? 0)}
            </Typography.Subtitle1>
          </Flex>
          {/* Idea: put a small graph of standing by week? y axis is 1 -> count of members */}
        </VStack>
        <Flex w="100%" justify="space-between">
          <Box />
          <Link href={`/season/${league.league_id}`}>
            <Button variant="outline">Standings</Button>
          </Link>
          {/* <Button variant="solid">
            Play Again
          </Button> */}
        </Flex>
      </Flex>
    </Flex>
  );
}
