import {Button, HStack} from "@chakra-ui/react";
import ProfilePicture from "./ProfilePicture";
import { Typography } from "../Typography";
import React from "react";


const UserTag = (props: { user_id: number, username: string, mobileView?: boolean }) => {
  const profile_url = "/profile/" + props.user_id

  return(
    <a href={profile_url}>
      <Button size="sm" borderRadius="25px" border="2px solid" borderColor="gray.200" px={2} zIndex="20" bg="white">
        <HStack width={props.mobileView ? "70px" : "initial"}> 
          <ProfilePicture id={props.user_id} username={props.username} size="xs"/>
          <Typography.Subtitle1 overflow={props.mobileView ? "hidden" : "initial"} textOverflow={props.mobileView ? "ellipsis" : "initial"} pl={0} color="black">{props.username}</Typography.Subtitle1>
        </HStack>
      </Button>
    </a>
  );
}
export default UserTag