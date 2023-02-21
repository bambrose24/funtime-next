import FuntimePage from "../../src/FuntimePage";
import { useRouter } from "next/router";
import React from "react";
import { Typography } from "../../src/components/Typography";
import ProfilePicture from "../../src/components/profile/ProfilePicture";
import {
  PeopleWithLeaguesDocument,
  PeopleWithLeaguesQuery,
  useProfileQuery,
} from "../../src/generated/graphql";
import {
  Box,
  Flex,
  Center,
  Stat,
  StatArrow,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { FuntimeLoading } from "@src/components/shared/FuntimeLoading";
import { GetStaticPaths, GetStaticProps } from "next";
import { getApolloClient } from "@src/graphql";
import { useLeagueRankings } from "@src/hooks/useLeagueRankings";
import { LEAGUE_ID } from "@src/util/config";
import { FuntimeError } from "@src/components/shared/FuntimeError";

type IDParam = {
  id: string;
};

type Props = IDParam & { leagueId: number };

// TODO getStaticPaths and load all the users
export const getStaticProps: GetStaticProps<Props, IDParam> = async (
  context
) => {
  // const client = getApolloClient();
  // const data = await client.query<AllPeopleQuery>({ query: AllPeopleDocument });
  const id = context.params?.id || "";
  return {
    props: { id, leagueId: LEAGUE_ID },
    revalidate: 60 * 5,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = getApolloClient();
  const { data } = await client.query<PeopleWithLeaguesQuery>({
    query: PeopleWithLeaguesDocument,
  });

  const uids = data.leagueMembers.map((u) => u.people.uid);

  return {
    paths: uids.slice(0, 10).map((uid) => {
      return {
        params: { id: uid.toString() },
      };
    }),
    fallback: "blocking",
  };
};

export default function Profile({ id, leagueId }: Props) {
  const userId = parseInt(id);

  const { data: rankings, loading: rankingsLoading } = useLeagueRankings({
    leagueId,
  });
  const { data: profile, loading: profileLoading } = useProfileQuery({
    variables: { user_id: userId },
  });

  if (rankingsLoading || profileLoading) {
    return <FuntimeLoading />;
  }

  const user = profile?.user;

  if (!rankings || !profile || !user) {
    return <FuntimeError />;
  }

  const memberId = profile.members.find(
    (members) => members.leagues.league_id === leagueId
  )?.membership_id;

  if (!memberId) {
    return <FuntimeError />;
  }

  const rank = rankings.find((r) => r.member.people.uid === userId);

  const correct =
    profile.picks.find((p) => p.correct === 1 && p.member_id === memberId)
      ?._count?.pickid || 0;
  const wrong =
    profile.picks.find((p) => p.correct === 0 && p.member_id === memberId)
      ?._count?.pickid || 0;

  const ratio =
    correct + wrong > 0 ? (correct / (correct + wrong)).toFixed(2) : 0.0;

  return (
    <FuntimePage>
      <Flex justify="center">
        <Box
          bg="white"
          px={10}
          py={5}
          mt={5}
          borderRadius="25px"
          textAlign="center"
          borderTop="5px solid"
          borderColor="green.600"
        >
          <Center>
            <ProfilePicture
              id={userId}
              username={user.username || ""}
              size="xl"
            />
          </Center>
          <Typography.H4 mt={2}>{user.username}</Typography.H4>
          <TableContainer>
            <Table>
              <Tbody>
                <Tr>
                  <Td>League Rank</Td>
                  <Td>
                    <Stat
                      color={
                        rank?.rank && rank.rank < rankings.length / 2
                          ? "green"
                          : "red"
                      }
                    >
                      {rank?.rank || "---"}
                    </Stat>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Win/Loss Ratio:</Td>
                  <Td>{ratio}</Td>
                </Tr>
                <Tr>
                  <Td>Games Picked:</Td>
                  <Td>{correct + wrong}</Td>
                </Tr>
                <Tr>
                  <Td>Picks Won:</Td>
                  <Td>{correct}</Td>
                </Tr>
                <Tr>
                  <Td>Picks Lost:</Td>
                  <Td>{wrong}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Flex>
    </FuntimePage>
  );
}
