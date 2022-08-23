import React, { useState } from "react";
import Image from "next/image";
import { Box } from "@chakra-ui/react";

type ProfilePictureSize = "sm" | "md" | "lg";

const sizes: Record<ProfilePictureSize, { h: string; w: string }> = {
  sm: { h: "25px", w: "25px" },
  md: { h: "50px", w: "50px" },
  lg: { h: "100px", w: "100px" },
} as const;

const ProfilePicture = ({
  id,
  size,
}: {
  id: number | undefined;
  size: ProfilePictureSize | undefined;
}) => {
  const [src, setSrc] = useState("/profile/" + id + ".jpeg");

  React.useEffect(() => {
    if (id) {
      setSrc("/profile/" + id + ".jpeg");
    }
  }, [id]);

  let h = "35px";
  let w = "35px";
  if (size && size in sizes) {
    h = sizes[size].h;
    w = sizes[size].w;
  }

  return (
    <Box
      style={{
        borderRadius: "50%",
        overflow: "hidden",
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
        onError={() => setSrc("/profile/default_profile_pic.jpeg")}
      />
    </Box>
  );
};
export default ProfilePicture;
