import {gql, useQuery} from '@apollo/client';
import {Flex, Grid, SimpleGrid, Skeleton, useBreakpointValue} from '@chakra-ui/react';
import {useHomeQuery} from '@src/generated/graphql';
import {useUser} from '@supabase/auth-helpers-react';
import {FuntimeError} from '../shared/FuntimeError';
import {FuntimeLoading} from '../shared/FuntimeLoading';
import {LeagueCard, useLeagueCardDimensions} from './useLeageCardDimensions';
import {LeagueCardContent} from './LeagueCardContent';

const HomeQuery = gql`
  query Home($where: UserWhereUniqueInput!) {
    user(where: $where) {
      leaguemembers(orderBy: {leagues: {season: desc}}) {
        league_id
        membership_id
        leagues {
          league_id
          name
          season
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
        {leagueMemberships?.length ? (
          <>
            {leagueMemberships.map((leagueMember, i) => {
              return (
                <LeagueCardContent
                  league_id={leagueMember.league_id}
                  membership_id={leagueMember.membership_id}
                />
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
