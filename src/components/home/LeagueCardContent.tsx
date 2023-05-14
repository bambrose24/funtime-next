import {gql} from '@apollo/client';
import {Badge, Box, Divider, Flex, HStack, Skeleton, Stat, VStack} from '@chakra-ui/react';
import {useLeagueContentQuery} from '@src/generated/graphql';
import {useLeagueRankings} from '@src/hooks/useLeagueRankings';
import {getOrdinal} from '@src/util/ordinals';
import {Typography} from '../Typography';
import {useLeagueCardDimensions} from './useLeageCardDimensions';

const LeagueContentQuery = gql`
  query LeagueContent($league_id: Int!, $membership_id: Int!) {
    league(where: {league_id: $league_id}) {
      league_id
      name
      season
      leaguemembers {
        membership_id
      }
    }
    findManyWeekWinners(
      where: {league_id: {equals: $league_id}, membership_id: {equals: $membership_id}}
    ) {
      correct_count
      membership_id
      week
      score_diff
    }
    correctPicks: aggregatePick(
      where: {member_id: {equals: $membership_id}, correct: {equals: 1}}
    ) {
      _count {
        pickid
      }
    }
    wrongPicks: aggregatePick(where: {member_id: {equals: $membership_id}, correct: {equals: 0}}) {
      _count {
        pickid
      }
    }
  }
`;

export function LeagueCardContent({
  league_id,
  membership_id,
}: {
  league_id: number;
  membership_id: number;
}) {
  const {
    data: leagueContent,
    loading: leagueContentLoading,
    error: leagueContentError,
  } = useLeagueContentQuery({variables: {league_id, membership_id}});
  const {width, height} = useLeagueCardDimensions();
  const {
    data: leagueRankings,
    loading: leagueRankingsLoading,
    error: leagueRankingsError,
  } = useLeagueRankings({leagueId: league_id});

  if (
    leagueContentLoading ||
    leagueRankingsLoading ||
    leagueContentError ||
    leagueRankingsError ||
    !leagueContent ||
    !leagueContent.league ||
    !leagueRankings
  ) {
    return <Skeleton w={width} h={height} />;
  }

  const winningWeeks = leagueContent.findManyWeekWinners;
  const league = leagueContent.league;
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
            <Badge colorScheme="blue" variant="solid">
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
      <VStack divider={<Divider />} spacing="8px">
        <Flex w="100%" justify="space-between">
          <Typography.Body2>Week Wins</Typography.Body2>
          {winningWeeks.length && winningWeeks.length > 0 ? (
            <>
              <HStack>
                {winningWeeks.map((weekWinner, i) => {
                  return (
                    <Badge key={i} colorScheme="green" variant="subtle">
                      Week {weekWinner.week}
                    </Badge>
                  );
                })}
              </HStack>
            </>
          ) : (
            <Typography.Subtitle1>None</Typography.Subtitle1>
          )}
        </Flex>
        <Flex w="100%" justify="space-between">
          <Typography.Body2>League Rank</Typography.Body2>
          <Typography.Subtitle1>
            {memberRanking?.rank ? getOrdinal(memberRanking.rank) : '--'}
          </Typography.Subtitle1>
        </Flex>
        <Flex w="100%" justify="space-between">
          <Typography.Body2>Number Correct</Typography.Body2>
          <Typography.Subtitle1>
            {leagueContent.correctPicks._count?.pickid ?? 0} /{' '}
            {(leagueContent.correctPicks._count?.pickid ?? 0) +
              (leagueContent.wrongPicks._count?.pickid ?? 0)}
          </Typography.Subtitle1>
        </Flex>
      </VStack>
    </Flex>
  );
}
