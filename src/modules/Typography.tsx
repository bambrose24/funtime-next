import {Text, TextProps} from '@chakra-ui/react';

const H1: ReactFCC<TextProps> = ({children, ...rest}) => {
  return (
    <Text as="h1" fontSize="4xl" {...rest}>
      {children}
    </Text>
  );
};

const H2: ReactFCC<TextProps> = ({children, ...rest}) => {
  return (
    <Text as="h2" fontSize="3xl" {...rest}>
      {children}
    </Text>
  );
};

const H3: ReactFCC<TextProps> = ({children, ...rest}) => {
  return (
    <Text as="h3" fontSize="2xl" {...rest}>
      {children}
    </Text>
  );
};

const H4: ReactFCC<TextProps> = ({children, ...rest}) => {
  return (
    <Text as="h3" fontSize="xl" {...rest}>
      {children}
    </Text>
  );
};

const H5: ReactFCC<TextProps> = ({children, ...rest}) => {
  return (
    <Text fontSize="md" {...rest}>
      {children}
    </Text>
  );
};

export const Body1: ReactFCC<TextProps> = ({children, ...rest}) => {
  return (
    <Text as="p" fontSize="lg" {...rest}>
      {children}
    </Text>
  );
};

const Body2: ReactFCC<TextProps> = ({children, ...rest}) => {
  return (
    <Text as="p" fontSize="md" {...rest}>
      {children}
    </Text>
  );
};

const Subtitle1: ReactFCC<TextProps> = ({children, ...rest}) => {
  return (
    <Text as="p" fontSize="sm" {...rest}>
      {children}
    </Text>
  );
};

const Subtitle2: ReactFCC<TextProps> = ({children, ...rest}) => {
  return (
    <Text fontSize="xs" {...rest}>
      {children}
    </Text>
  );
};

export const Typography = {
  H1,
  H2,
  H3,
  H4,
  H5,
  Body1,
  Body2,
  Subtitle1,
  Subtitle2,
};
