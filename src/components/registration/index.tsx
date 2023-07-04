import {gql} from '@apollo/client';
import {Box, Flex} from '@chakra-ui/react';
import {useLeagueRegistrationQuery} from '@src/generated/graphql';

export type RegistrationFormProps = {
  leagueCode: string;
};

const LeagueRegistrationQuery = gql`
  query LeagueRegistration($leagueCode: String!) {
    league(where: {share_code: $leagueCode}) {
      id
      share_code
      name
      status
      reminder_policy
      late_policy
      pick_policy
      scoring_type
      superbowl_competition
      _count {
        leaguemembers
      }
    }
  }
`;

export function LeagueRegistration({leagueCode}: RegistrationFormProps) {
  const {data, loading, error} = useLeagueRegistrationQuery({variables: {leagueCode}});
  return (
    <Flex w="100%" justify="center">
      <Flex maxW="xl" justify="center" bg="blue" minW="xl">
        <Box bg="red">
          {leagueCode} {JSON.stringify(data)}
        </Box>
      </Flex>
    </Flex>
  );
}
