import {
  Box,
  Flex,
  Stat,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useSuperbowlPicksQuery } from "@src/generated/graphql";
import { LEAGUE_ID } from "@src/util/config";
import _ from "lodash";
import UserTag from "../profile/UserTag";
import { FuntimeError } from "../shared/FuntimeError";
import { FuntimeLoading } from "../shared/FuntimeLoading";
import { Typography } from "../Typography";

const SuperbowlContent = () => {
  const { data, loading, error } = useSuperbowlPicksQuery({
    variables: { league_id: LEAGUE_ID },
  });
  if (loading) {
    return <FuntimeLoading />;
  }
  if (error || !data) {
    return <FuntimeError />;
  }
  const superbowls = _.sortBy(
    data.superbowls,
    (x) => x.leaguemembers?.people.username
  );
  return (
    <Flex w="100%" justify="center">
      <Box maxW="700px" bg="white" borderRadius="4px">
        <Typography.H2 mb="16px" align="center">
          Super Bowl Picks
        </Typography.H2>
        <TableContainer overflowY="auto" overflowX="auto">
          <Table size="md" variant="simple" fontSize={[14, 16]}>
            <Thead>
              <Tr>
                <Th pl={6} pr={0}>
                  User
                </Th>
                <Th pr={2} pl={6}>
                  Winner
                </Th>
                <Th>Loser</Th>
                <Th>Total Score</Th>
              </Tr>
            </Thead>
            <Tbody>
              {superbowls.map((pick) => {
                return (
                  <>
                    <Tr
                      key={pick.leaguemembers?.membership_id!}
                      transition={"all .3s ease"}
                      _hover={{ bgColor: "gray.50" }}
                    >
                      <Td pr={2}>
                        <UserTag
                          user_id={pick.uid}
                          username={pick.leaguemembers?.people.username!}
                        />
                      </Td>
                      <Td pl={6}>
                        {pick.teams_superbowl_winnerToteams.abbrev}
                      </Td>
                      <Td pl={6}>{pick.teams_superbowl_loserToteams.abbrev}</Td>
                      <Td>{pick.score}</Td>
                    </Tr>
                  </>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Flex>
  );
};
export default SuperbowlContent;
