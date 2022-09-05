import React from "react";
import { Box, Flex, Spinner } from "@chakra-ui/react";
import { Typography } from "../Typography";
import { useFindLeagueMembersQuery } from "../../generated/graphql";
import { LEAGUE_ID } from "../../util/config";
import {
  Table,
  Tbody,
  Tr,
  Td,
  Th,
  Thead,
  TableContainer,
  Stat,
  StatArrow,
  Center,
} from "@chakra-ui/react";
import UserTag from "./UserTag";

export const LeagueMembersTable = () => {
  const {
    data: usersData,
    loading: usersLoading,
    error: usersError,
  } = useFindLeagueMembersQuery({ variables: { league_id: LEAGUE_ID } });

  if (usersLoading) {
    return (
      <Flex justify="center" m={8}>
        <Spinner />
      </Flex>
    );
  }

  if (!usersData) {
    return (
      <Box w="100%">
        <Typography.H2>
          There was an error. Please refresh the page.
        </Typography.H2>
      </Box>
    );
  }

  return (
    <TableContainer overflowY="auto" overflowX="auto">
      <Table size="md" variant="simple" fontSize={[14, 16]}>
        <Thead>
          <Tr>
            <Th pl={10} pr={0}>
              Rank
            </Th>
            <Th pr={2} pl={0}>
              User
            </Th>
            <Th pl={0} color="gray" cursor="default">
              Picks Correct
            </Th>
            <Th pl={0} color="gray" cursor="default">
              Wins
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {usersData.leagueMembers.map(({ people: { uid, username } }) => {
            return (
              <>
                <Tr
                  key={uid}
                  transition={"all .3s ease"}
                  _hover={{ bgColor: "gray.50" }}
                >
                  <Td pl={10} pr={0} py={0}>
                    <Stat color="green">
                      1 <StatArrow type="increase" pb={1} />
                    </Stat>
                  </Td>
                  <Td pl={0} pr={2} py={2}>
                    <UserTag user_id={uid} username={username}></UserTag>
                  </Td>
                  <Td pl={0} py={0} color="gray" cursor="default">
                    0
                  </Td>
                  <Td pl={0} py={0} color="gray" cursor="default">
                    0
                  </Td>
                </Tr>
              </>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
