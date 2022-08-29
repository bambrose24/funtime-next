import { Typography } from "@src/components/Typography";
import {
  Box,
  Flex,
  Spinner,
  Table,
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import { usePicksByWeekQuery } from "@src/generated/graphql";
import { SetStateAction, useState } from "react";
import { LEAGUE_ID } from "@src/util/config";
import UserTag from "@src/components/profile/UserTag";

export const WeekPicksTable: React.FC = () => {
  const [selectedRow, setSelectedRow] = useState<number | undefined>(undefined);

  const {
    data: picksData,
    loading: picksLoading,
    error: picksError,
  } = usePicksByWeekQuery();

  if (picksLoading) {
    return (
      <Flex justify="center" m={8}>
        <Spinner />
      </Flex>
    );
  }

  if (!picksData) {
    return (
      <Box w="100%">
        <Typography.H2>
          There was an error. Please refresh the page.
        </Typography.H2>
      </Box>
    );
  }
  console.log(picksData.picksByWeek);

  function selectRow(userRowId: number) {
    userRowId === selectedRow
      ? setSelectedRow(undefined)
      : setSelectedRow(userRowId);
  }

  let i: number;
  return (
    <Flex justify="center">
      {/* <Box overflowY="auto" overflowX="auto" minWidth="300px" w={[500, 600, 1000, 1500]} h={500} bg='white' px={2} py={2} borderRadius="10px" > */}
      <Box
        bg="white"
        borderRadius="10px"
        minWidth="300px"
        w={[500, 600, 1000, 1800]}
        h={[750, 800]}
        overflow="auto"
      >
        {/* <Typography.H3 pl={5}> Picks f or Week 1 </Typography.H3> */}
        <TableContainer overflowY="unset" overflowX="unset">
          <Table size="md" fontSize={[14, 16]} variant="unstyled">
            <Thead>
              <Tr>
                <Th bg="white">User</Th>
                {picksData.picksByWeek.games.map(({ gid }) => {
                  return (
                    <Th
                      position="sticky"
                      top="0"
                      z-index="10"
                      opacity=".9"
                      bg="white"
                    >
                      {gid}
                    </Th>
                  );
                })}
              </Tr>
            </Thead>
            <Tbody>
              {picksData.picksByWeek.picks.map(({ pickid }) => {
                i = 0;
                return (
                  <>
                    <Tr
                      key={pickid}
                      transition={"all .1s linear"}
                      _hover={{ bgColor: "gray.100" }}
                      onClick={() => selectRow(pickid)}
                      borderY={pickid == selectedRow ? "2px solid white" : ""}
                      bgColor={pickid == selectedRow ? "white" : ""}
                      boxShadow={
                        pickid == selectedRow ? "2px 2px 10px gray" : ""
                      }
                    >
                      <Td py={1}>
                        <UserTag user_id={263} username={"Bobby A."}></UserTag>
                      </Td>
                      {picksData.picksByWeek.games.map(({ gid }) => {
                        i += 1;
                        return (
                          <Td
                            cursor="default"
                            bg={
                              Math.floor(Math.random() * 2)
                                ? "rgba(51, 170, 51, .5)"
                                : "rgba(252, 0, 0, .6)"
                            }
                          >
                            pick {i}
                          </Td>
                        );
                      })}
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
