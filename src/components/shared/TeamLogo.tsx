import { Image, ImageProps } from "@chakra-ui/react";

export const TeamLogo: React.FC<{ abbrev: string } & Partial<ImageProps>> = ({
  abbrev,
  ...rest
}) => {
  const src = `https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/${abbrev}.svg`;
  return <Image src={src} {...rest} />;
};
