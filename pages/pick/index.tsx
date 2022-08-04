import { Box, Flex, Spinner } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { PicksForm } from "../../src/components/pick/PicksForm";
import { Typography } from "../../src/components/Typography";
import FuntimePage from "../../src/FuntimePage";
import {
  useFindLeagueMembersQuery,
  useGamesByWeekQuery,
} from "../../src/generated/graphql";
import { LEAGUE_ID, SEASON } from "../../src/util/config";

interface PickPageProps {
  week: number;
  season: number;
}

const PickPage: React.FC<PickPageProps> = ({ week, season }) => {
  const {
    data: gamesData,
    loading: gamesLoading,
    error: gamesError,
  } = useGamesByWeekQuery({
    variables: { week, season },
  });
  const {
    data: usersData,
    loading: usersLoading,
    error: usersError,
  } = useFindLeagueMembersQuery({ variables: { league_id: LEAGUE_ID } });

  if (usersLoading || gamesLoading) {
    return (
      <Box w="100%" flex={1} justifyContent="center" mx={8} my={8}>
        <Spinner />
      </Box>
    );
  }

  if (!usersData || !gamesData) {
    return (
      <Box w="100%">
        <Typography.H2>
          There was an error. Please refresh the page.
        </Typography.H2>
      </Box>
    );
  }

  return (
    <FuntimePage>
      <Flex justify="center">
        <Box maxWidth="800px" bgColor="white" p={4}>
          <Box textAlign="center">
            <Typography.H2>
              Make Your Picks for Week {week}, {season}
            </Typography.H2>
            <Flex w="100%" justify="center" bgColor="white" py={8} px={4}>
              <PicksForm
                games={gamesData?.findManyGames}
                users={usersData.findManyLeagueMembers}
              />
            </Flex>
          </Box>
        </Box>
      </Flex>
    </FuntimePage>
  );
};

export const getServerSideProps: GetServerSideProps<
  PickPageProps
> = async () => {
  return { props: { week: 1, season: SEASON } };
};

export default PickPage;
