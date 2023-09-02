import React, {useState} from 'react';
import Image from 'next/image';
import {Box, Avatar} from '@chakra-ui/react';

type ProfilePictureSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const sizes: Record<ProfilePictureSize, {h: string; w: string}> = {
  xs: {h: '25px', w: '25px'},
  sm: {h: '35px', w: '35px'},
  md: {h: '50px', w: '50px'},
  lg: {h: '75px', w: '75px'},
  xl: {h: '100px', w: '100px'},
} as const;

const ProfilePicture = ({
  id,
  size,
  username,
}: {
  id: number | undefined;
  size: ProfilePictureSize | undefined;
  username: string | undefined;
}) => {
  const [src, setSrc] = useState('/profile/' + id + '.jpeg');

  React.useEffect(() => {
    if (id) {
      setSrc('/profile/' + id + '.jpeg');
    }
  }, [id]);

  let h = '35px';
  let w = '35px';
  if (size && size in sizes) {
    h = sizes[size].h;
    w = sizes[size].w;
  }

  //If in the future we want to return to the next.js image implementation
  if (false) {
    return (
      <Box
        style={{
          borderRadius: '50%',
          overflow: 'hidden',
          height: h,
          width: w,
          margin: 0,
        }}
      >
        <Image
          src={src}
          alt="Profile Picture"
          width={100}
          height={100}
          placeholder="blur"
          blurDataURL="/profile/default_profile_pic.jpeg"
          onError={() => setSrc('/profile/default_profile_pic.jpeg')}
        />
      </Box>
    );
  } else {
    return <Avatar size={size} name={username} src={src} />;
  }
};
export default ProfilePicture;
