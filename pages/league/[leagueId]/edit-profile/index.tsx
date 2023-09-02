import {gql} from '@apollo/client';
import {Box, Button, Divider, Flex, Stack, Tooltip} from '@chakra-ui/react';
import {FuntimeError} from '@src/modules/shared/FuntimeError';
import {FuntimeLoading} from '@src/modules/shared/FuntimeLoading';
import {Typography} from '@src/modules/Typography';
import {FuntimePage} from '@src/FuntimePage';
import {
  LeagueStatus,
  useAllTeamsQuery,
  useEditProfileQuery,
  useSuperbowlPickQuery,
} from '@src/generated/graphql';
import {useUser} from '@supabase/auth-helpers-react';
import {useRouter} from 'next/router';
import {useState} from 'react';
import {SuperbowlSettingsModal} from '@src/modules/edit-profile/superbowl/SuperbowlSettingsModal';

const _EditProfileQuery = gql`
  query EditProfile($leagueId: Int!) {
    me {
      id
      username
      leagueMember(league_id: $leagueId) {
        id
        superbowl {
          id
          pickid
          score
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
          status
        }
      }
    }
  }
`;

export default function EditProfilePage() {
  const router = useRouter();
  const leagueId = router.query['leagueId'] as string;

  const [superbowlSettingsModalOpen, setSuperbowlSettingsModalOpen] = useState(false);

  // preload teams
  useAllTeamsQuery();

  const supabaseUser = useUser();

  const {data, loading, error} = useEditProfileQuery({
    variables: {leagueId: Number(leagueId)},
    skip: !leagueId,
  });

  const superbowlPick = data?.me?.leagueMember?.superbowl?.[0];
  const superbowlPickId = superbowlPick?.pickid;
  const league = data?.me?.leagueMember?.leagues;

  // preload the superbowl pick
  useSuperbowlPickQuery({
    variables: {
      superbowlPickId: superbowlPickId ?? 0,
    },
    skip: !superbowlPickId,
  });

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

  const disableEditButton = !league || league.status !== LeagueStatus.NotStarted;

  return (
    <FuntimePage>
      <Flex w="100%" justify="center">
        <Flex w={{base: '100%', md: 'xl'}} direction="column" layerStyle="funtime-card">
          <Typography.H2>Edit Profile for {data.me.leagueMember?.leagues.name}</Typography.H2>
          <Box pt="32px" />
          <Stack direction="column" divider={<Divider />} spacing="20px">
            {superbowlPick && (
              <Flex justify="space-between" gap="20px">
                <Flex direction="column" alignItems="start" w="100%">
                  <Box>
                    <Typography.Body2 fontWeight="bold">Super Bowl Pick</Typography.Body2>
                  </Box>
                  <Box>
                    <Typography.Body1>
                      {superbowlPick.teams_superbowl_winnerToteams.abbrev} over{' '}
                      {superbowlPick.teams_superbowl_loserToteams.abbrev} (score{' '}
                      {superbowlPick.score})
                    </Typography.Body1>
                  </Box>
                </Flex>
                <Flex alignItems="center">
                  <Tooltip
                    isDisabled={!disableEditButton}
                    label="The season has started, you cannot edit your Super Bowl pick anymore"
                  >
                    <Button
                      variant="outline"
                      disabled={!league || league.status !== LeagueStatus.NotStarted}
                      onClick={() => {
                        setSuperbowlSettingsModalOpen(true);
                      }}
                    >
                      Edit
                    </Button>
                  </Tooltip>
                </Flex>
              </Flex>
            )}
          </Stack>
        </Flex>
      </Flex>
      {superbowlPick && (
        <SuperbowlSettingsModal
          modal={{
            isOpen: superbowlSettingsModalOpen,
            onClose: () => {
              setSuperbowlSettingsModalOpen(false);
            },
          }}
          superbowlPickId={superbowlPick.pickid}
        />
      )}
    </FuntimePage>
  );
}
