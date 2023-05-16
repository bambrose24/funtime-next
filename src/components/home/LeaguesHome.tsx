import {gql} from '@apollo/client';
import {Flex, SimpleGrid, Skeleton, useBreakpointValue} from '@chakra-ui/react';
import {useHomeQuery} from '@src/generated/graphql';
import {useUser} from '@supabase/auth-helpers-react';
import {FuntimeError} from '../shared/FuntimeError';
import {useLeagueCardDimensions} from './useLeageCardDimensions';
import {LeagueCardContent} from './LeagueCardContent';

const HomeQuery = gql`
  query Home($where: UserWhereUniqueInput!) {
    user(where: $where) {
      leaguemembers(orderBy: {leagues: {season: desc}}) {
        membership_id
        leagues {
          league_id
          name
          season
        }
        WeekWinners {
          correct_count
          membership_id
          week
          score_diff
        }
        correctPicks: aggregatePick(where: {correct: {equals: 1}}) {
          count
        }
        wrongPicks: aggregatePick(where: {correct: {equals: 0}}) {
          count
        }
      }
    }
  }
`;

export function LeaguesHome() {
  const user = useUser();
  const {data, error} = useHomeQuery({
    variables: {where: {email: user?.email}},
    skip: !user?.email,
  });

  const firstRowResponsive = {base: 1, sm: 2, md: 3, xl: 4};
  const {height: leagueCardHeight, width: leagueCardWidth} = useLeagueCardDimensions();
  const skeletonsCount = useBreakpointValue(firstRowResponsive);

  if (error) {
    return <FuntimeError />;
  }

  const leagueMemberships = data?.user?.leaguemembers;

  return (
    <Flex w="100%" justify="center" px={{base: '8px', lg: '40px'}}>
      <SimpleGrid w="100%" maxW={{base: '100%'}} columns={firstRowResponsive} gap={6}>
        {data && leagueMemberships?.length ? (
          <>
            {leagueMemberships.map((leagueMember, i) => {
              return (
                <LeagueCardContent key={i} league_id={leagueMember.leagues.league_id} data={data} />
              );
            })}
          </>
        ) : (
          <>
            {[...Array(skeletonsCount)].map((_, i) => {
              return <Skeleton key={i} w={leagueCardWidth} h={leagueCardHeight} />;
            })}
          </>
        )}
      </SimpleGrid>
    </Flex>
  );
}
