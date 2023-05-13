import {gql} from '@apollo/client';
import {Box, Flex, Skeleton} from '@chakra-ui/react';
import {useLeagueContentQuery} from '@src/generated/graphql';
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
  }
`;

export function LeagueCardContent({
  league_id,
  membership_id,
}: {
  league_id: number;
  membership_id: number;
}) {
  const {data, loading, error} = useLeagueContentQuery({variables: {league_id, membership_id}});
  const {width, height} = useLeagueCardDimensions();

  if (loading || error || !data || !data.league) {
    return <Skeleton w={width} h={height} />;
  }

  const winningWeeks = data.findManyWeekWinners;
  const league = data.league;

  return (
    <Flex direction="column" w={width} h={height} layerStyle="funtime-card">
      <Typography.H2>{league.name}</Typography.H2>
      <Box mt="16x" />
      <Typography.Body1>
        {winningWeeks.length ? `You won ${winningWeeks.length}.` : `You didn't win any weeks.`}
      </Typography.Body1>
    </Flex>
  );
}
