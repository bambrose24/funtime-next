import React from "react";
import { Box, Button, Flex, Spinner, Center } from "@chakra-ui/react";
import { Typography } from "../Typography";
import { useFindLeagueMembersQuery } from "../../generated/graphql";
import { LEAGUE_ID } from "../../util/config";
import {
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import ProfilePicture from "./ProfilePicture";


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

  return(
    <TableContainer overflowY="auto" overflowX="auto">
      <Table size='md' variant="simple" fontSize={[14, 16]}>
        <Tbody>
          {usersData.findManyLeagueMembers.map(({ People: { uid, username } }) => {
            let profile_url = "/profile/" + uid
            return (
              <>
              <Tr key={uid} _hover={{bgColor: "gray.100"}}>
                <Td pr={2} mr={0}><a style={{}} href={profile_url}><ProfilePicture id={uid} size="default"/></a></Td>
                <Td pl={0}><a href={profile_url}><Button size="sm" bg="gray.200" outline="1px solid white" px={4} py={0} borderRadius="25px" color="black">{username}</Button></a></Td>
                <Td pl={0} color="gray" cursor="default">"Your mom's a ho"</Td>
              </Tr>
              <Tr key={uid} _hover={{bgColor: "gray.100"}}>
                <Td pr={2}><a style={{}} href={profile_url}><ProfilePicture id={uid} size="default"/></a></Td>
                <Td pl={0}><a href={profile_url}><Button size="sm" bg="gray.200" outline="1px solid white" px={4} py={0} borderRadius="25px" color="black">{username}</Button></a></Td>
                <Td pl={0} color="gray" cursor="default">"This is gonna be my week"</Td>
              </Tr>
              <Tr key={uid} _hover={{bgColor: "gray.100"}}>
                <Td pr={2}><a style={{}} href={profile_url}><ProfilePicture id={uid} size="default"/></a></Td>
                <Td pl={0}><a href={profile_url}><Button size="sm" bg="gray.200" outline="1px solid white" px={4} py={0} borderRadius="25px" color="black">{username}</Button></a></Td>
                <Td pl={0} color="gray" cursor="default">"It's time for bed"</Td>
              </Tr>
              <Tr key={uid} _hover={{bgColor: "gray.100"}}>
                <Td pr={2}><a style={{}} href={profile_url}><ProfilePicture id={uid} size="default"/></a></Td>
                <Td pl={0}><a href={profile_url}><Button size="sm" bg="gray.200" outline="1px solid white" px={4} py={0} borderRadius="25px" color="black">{username}</Button></a></Td>
                <Td pl={0} color="gray" cursor="default">"Bout to pocket $100"</Td>
              </Tr>
              <Tr key={uid} _hover={{bgColor: "gray.100"}}>
                <Td pr={2}><a style={{}} href={profile_url}><ProfilePicture id={uid} size="default"/></a></Td>
                <Td pl={0}><a href={profile_url}><Button size="sm" bg="gray.200" outline="1px solid white" px={4} py={0} borderRadius="25px" color="black">{username}</Button></a></Td>
                <Td pl={0} color="gray" cursor="default">"Check yourselves"</Td>
              </Tr></>               
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}