import { useEffect } from "react";
import FuntimePage from "../../src/FuntimePage";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Typography } from "../../src/components/Typography";
import ProfilePicture from "../../src/components/profile/ProfilePicture";
import { useFindLeagueMembersQuery } from "../../src/generated/graphql";
import { LEAGUE_ID } from "../../src/util/config";
import {
  Box,
  Flex,
  Button,
  Center,
  Spinner,
  Stat,
  StatArrow,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
} from "@chakra-ui/react";

export default function Profile() {
  //Set up for querying the router for the user_id
  const router = useRouter();
  const [userId, setUserId] = useState<number | undefined>(
    typeof router.query.id === "string" ? parseInt(router.query.id) : undefined
  );

  //update user ID once we have access to the router query
  useEffect(() => {
    if (router.isReady && router.query.id) {
      setUserId(
        typeof router.query.id === "string"
          ? parseInt(router.query.id)
          : undefined
      );
    }
  }, [router.isReady]);

  useEffect(() => {
    if (router.isReady && !userId) {
      router.back();
    }
  }, [router.isReady]);

  if (!userId) {
    return null;
  }

  const {
    data: userData,
    loading: userLoading,
    error: userError,
  } = useFindLeagueMembersQuery({ variables: { league_id: LEAGUE_ID } });

  if (userLoading) {
    return (
      <FuntimePage>
        <Flex justify="center" m={8}>
          <Spinner />
        </Flex>
      </FuntimePage>
    );
  }

  if (!userData || userError) {
    return (
      <Box w="100%">
        <Typography.H2>
          There was an error. Please refresh the page.
        </Typography.H2>
      </Box>
    );
  }

  //find the user from the league members query
  const user = userData.findManyLeagueMembers.find(
    (user) => user.People.uid === userId
  );

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
            <ProfilePicture id={userId} size="lg"></ProfilePicture>
          </Center>
          {/* commented out query map and personalization features like edit profile and bio */}
          {/* {userData.findManyPeople.map(({People: { username, fname, lname }, Picks: { correct } }) => { */}
          <Typography.H4 mt={2}> {user!.People.username} </Typography.H4>
          {/* })} */}
          {/* <Typography.Body2 maxWidth="300px" color="gray" mb={2}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Typography.Body2> */}
          {/* <Button size="sm">Edit Profile</Button> */}

          <TableContainer>
            <Table>
              <Tbody>
                <Tr>
                  <Td>League Rank</Td>
                  <Td>
                    <Stat color="green">
                      5 <StatArrow type="increase" pb={1} />
                    </Stat>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Win/Loss Ratio:</Td>
                  <Td>
                    <Stat color="red">
                      {" "}
                      3.35 <StatArrow type="decrease" pb={1} />
                    </Stat>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Games Picked:</Td>
                  <Td>100</Td>
                </Tr>
                <Tr>
                  <Td>Picks Won:</Td>
                  <Td>77</Td>
                </Tr>
                <Tr>
                  <Td>Picks Lost:</Td>
                  <Td>23</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Flex>
    </FuntimePage>
  );
}
