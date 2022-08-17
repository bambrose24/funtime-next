import React, {useState} from "react";
import Image from 'next/image';
import {Flex, Spinner} from "@chakra-ui/react";


const ProfilePicture = (props: { id: number; size: string; }) => {
  const [src, setSrc] = useState("/" + props.id + ".jpeg");

  React.useEffect(() => {
    if (props.id) {
      setSrc("/" + props.id + ".jpeg")
    }
  }, [props.id]);

  let h = "35px"
  let w = "35px"
  //set size
  switch(props.size){
    case 'sm':
      h = "25px"
      w = "25px"
      break;
    case 'md':
      h = "50px"
      w = "50px"
      break;
    case 'lg':
      h = "100px"
      w = "100px"
      break;
    default:
      h = "35px"
      w = "35px"
      break;
  }

  // if (!props.id) {
  //   return (
  //     <Flex justify="center" m={8}>
  //       <Spinner />
  //     </Flex>
  //   );
  // }  

  return(
    <div style={{ borderRadius: "50%", overflow: 'hidden', height: h, width: w, margin: 0 }}>
      <Image
        src={src}
        alt="Profile Picture"
        width={100}
        height={100} 
        placeholder = "blur"
        blurDataURL = '/default_profile_pic.jpeg'
        onError={() => setSrc('/default_profile_pic.jpeg')}
        />
    </div>
  );
}
export default ProfilePicture