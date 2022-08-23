import { Box, Flex, Spinner, Center } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import FuntimePage from "@src/FuntimePage";
import {
  FindLeagueMembersDocument,
  FindLeagueMembersQuery,
  GamesByWeekDocument,
  GamesByWeekQuery,
} from "@src/generated/graphql";
import { LEAGUE_ID, SEASON } from "@src/util/config";
import { PicksContent } from "@src/components/pick/PicksContent";
import { client } from "@src/graphql";

export interface PickPageProps {
  games: GamesByWeekQuery;
  people: FindLeagueMembersQuery;
  week: number;
  season: number;
}

const PickPage: React.FC<PickPageProps> = ({ people, games, week, season }) => {
  return (
    <FuntimePage>
      <PicksContent people={people} games={games} week={week} season={season} />
    </FuntimePage>
  );
};

export const getServerSideProps: GetServerSideProps<PickPageProps> = async (
  context
) => {
  const { res } = context;
  res.setHeader("Cache-Control", `s-maxage=60, stale-while-revalidate`);

  const week = 1;
  const season = SEASON;
  const [games, people] = await Promise.all([
    client.query<GamesByWeekQuery>({
      query: GamesByWeekDocument,
      variables: {
        week,
        season,
      },
    }),
    client.query<FindLeagueMembersQuery>({
      query: FindLeagueMembersDocument,
      variables: {
        league_id: LEAGUE_ID,
      },
    }),
  ]);

  const props: PickPageProps = {
    games: games.data,
    people: people.data,
    week,
    season,
  };

  return {
    props,
  };
};

export default PickPage;
