import {gql} from '@apollo/client';
import {useLeaguePageMemberViewerQuery} from '@src/generated/graphql';
import {useRouter} from 'next/router';

const _LeaguePageMemberView = gql`
  query LeaguePageMemberViewer($leagueId: Int!) {
    me {
      id
      leagueMember(league_id: $leagueId) {
        id
        membership_id
        league_id
      }
    }
  }
`;

export function useLeaguePageMemberViewer() {
  const router = useRouter();
  const leagueId = Number(router.query['leagueId']);
  return useLeaguePageMemberViewerQuery({
    variables: {
      leagueId,
    },
    skip: !leagueId,
  });
}
