import {gql} from '@apollo/client';
import {Flex} from '@chakra-ui/react';
import {FuntimeError} from '@src/components/shared/FuntimeError';
import {FuntimeLoading} from '@src/components/shared/FuntimeLoading';
import {Typography} from '@src/components/Typography';
import {FuntimePage} from '@src/FuntimePage';
import {useEditProfileQuery} from '@src/generated/graphql';
import {useUser} from '@supabase/auth-helpers-react';
import {useRouter} from 'next/router';

const _EditProfileQuery = gql`
  query EditProfile($leagueId: Int!) {
    me {
      id
      username
      leagueMember(league_id: $leagueId) {
        id
        superbowl {
          id
          teams_superbowl_loserToteams {
            id
            teamid
            loc
            name
            abbrev
            conference
          }
          teams_superbowl_winnerToteams {
            id
            teamid
            loc
            name
            abbrev
            conference
          }
        }
        leagues {
          id
          name
        }
      }
    }
  }
`;

export default function EditProfilePage() {
  const router = useRouter();
  const leagueId = router.query['leagueId'] as string;

  const supabaseUser = useUser();

  const {data, loading, error} = useEditProfileQuery({variables: {leagueId: Number(leagueId)}});

  if (loading) {
    return (
      <FuntimePage>
        <FuntimeLoading />
      </FuntimePage>
    );
  }

  if (!data || !data.me || !data.me.leagueMember || error) {
    console.error(
      error || `No data found for EditProfile query and no error. Supabase user: ${supabaseUser}`
    );
    return (
      <FuntimePage>
        <FuntimeError />
      </FuntimePage>
    );
  }

  return (
    <FuntimePage>
      <Flex w="100%" justify="center">
        <Flex direction="column" maxW="3xl" layerStyle="funtime-card">
          <Typography.H2>Edit Profile for {data.me.leagueMember?.leagues.name}</Typography.H2>
        </Flex>
      </Flex>
    </FuntimePage>
  );
}
