import {Button, HStack} from "@chakra-ui/react";
import ProfilePicture from "./ProfilePicture";
import { Typography } from "../Typography";


const UserTag = (props: { user_id: number, username: string }) => {
  const profile_url = "/profile/" + props.user_id

  return(
    <a href={profile_url}>
      <Button size="sm" borderRadius="25px" border="2px solid" borderColor="gray.200" px={2}>
        <HStack>
          <ProfilePicture id={props.user_id} size="sm"/>
          <Typography.Subtitle1 pl={0} color="black">{props.username}</Typography.Subtitle1>
        </HStack>
      </Button>
    </a>
  );
}
export default UserTag