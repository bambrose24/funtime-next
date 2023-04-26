import {Image, ImageProps} from '@chakra-ui/react';

export const TeamLogo: React.FC<{abbrev: string} & Partial<ImageProps>> = ({abbrev, ...rest}) => {
  const src = `https://a.espncdn.com/i/teamlogos/nfl/500/${abbrev}.png`;
  return <Image src={src} {...rest} />;
};
