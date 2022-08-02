import { Box, Flex, Spinner } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { Typography } from "../../src/components/Typography";
import FuntimePage from "../../src/FuntimePage";
import {
  useGamesBySeasonQuery,
  useGamesByWeekQuery,
} from "../../src/generated/graphql";

interface PickPageProps {
  week: number;
  season: number;
}

const PickPage: React.FC<PickPageProps> = ({ week, season }) => {
  const { data, loading, error } = useGamesByWeekQuery({
    variables: { week, season },
  });

  if (!data && loading) {
    return (
      <Box w="100%">
        <Spinner />
      </Box>
    );
  }
  console.log("data", data);
  return (
    <FuntimePage>
      <Flex justify="center">
        <Box maxWidth="800px" bgColor="white" w="100%">
          <Box textAlign="center">
            <Typography.H2>
              Make Your Picks for Week {week}, {season}
            </Typography.H2>
            {data?.findManyGames.map((g) => {
              return (
                <Typography.H4>
                  {g.Teams_Games_awayToTeams.abbrev} @{" "}
                  {g.Teams_Games_homeToTeams.abbrev}
                </Typography.H4>
              );
            })}
          </Box>
        </Box>
      </Flex>
    </FuntimePage>
  );
};

export const getServerSideProps: GetServerSideProps<
  PickPageProps
> = async () => {
  return { props: { week: 1, season: 2022 } };
};

export default PickPage;
