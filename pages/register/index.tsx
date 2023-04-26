import {Flex} from '@chakra-ui/react';
import {GetStaticProps, NextPage} from 'next';
import RegistrationForm from '@src/components/RegistrationForm';
import FuntimePage from '@src/FuntimePage';
import {useAllTeamsQuery, useFindLeagueMembersQuery} from '@src/generated/graphql';
import {FuntimeLoading} from '@src/components/shared/FuntimeLoading';
import {SECONDS_IN_DAY} from '@src/util/constants';

const PREVIOUS_LEAGUE_ID = 6;

const RegisterPage: NextPage = () => {
  const {data: teams} = useAllTeamsQuery();
  const {data: previousMembers} = useFindLeagueMembersQuery({
    variables: {
      league_id: PREVIOUS_LEAGUE_ID,
    },
  });

  if (!teams || !previousMembers) {
    return <FuntimeLoading />;
  }

  return (
    <FuntimePage>
      <Flex justify="center">
        <RegistrationForm previousMembers={previousMembers} teams={teams} />
      </Flex>
    </FuntimePage>
  );
};

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
    revalidate: SECONDS_IN_DAY,
  };
};

export default RegisterPage;
