import {gql} from '@apollo/client';
import {Button} from '@chakra-ui/react';
import {useDownloadLeaguePlayersQuery} from '@src/generated/graphql';
import {useMemo} from 'react';
import {CSVLink} from 'react-csv';

const _DownloadLeaguePlayersButton = gql`
  query DownloadLeaguePlayers($leagueId: Int!) {
    league(where: {league_id: $leagueId}) {
      id
      name
      memberpeople {
        id
        member {
          id
          paid
        }
        user {
          id
          username
          email
        }
      }
    }
  }
`;

export function DownloadLeaguePlayersButton({leagueId}: {leagueId: number}) {
  const {data, loading, error} = useDownloadLeaguePlayersQuery({variables: {leagueId}});
  const csvData = useMemo(() => {
    return [
      ['username', 'email'],
      ...(data?.league?.memberpeople.map(m => {
        return [m.user.username, m.user.email];
      }) ?? []),
    ];
  }, [data]);
  const leagueFileName = data?.league?.name?.toLowerCase()?.replaceAll(' ', '-');
  return (
    <Button variant="outline" disabled={loading || !csvData || !!error} isLoading={loading}>
      <CSVLink
        data={csvData}
        filename={leagueFileName ? `${leagueFileName}-players.csv` : `league-players.csv`}
      >
        Download Players
      </CSVLink>
    </Button>
  );
}
