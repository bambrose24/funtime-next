import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

const H1: ReactFCC = ({ children, ...rest }) => {
  return (
    <Text fontSize="4xl" {...rest}>
      {children}
    </Text>
  );
};

const H2: ReactFCC = ({ children, ...rest }) => {
  return (
    <Text fontSize="3xl" {...rest}>
      {children}
    </Text>
  );
};

const H3: ReactFCC = ({ children, ...rest }) => {
  return (
    <Text fontSize="2xl" {...rest}>
      {children}
    </Text>
  );
};

const H4: ReactFCC = ({ children, ...rest }) => {
  return (
    <Text fontSize="xl" {...rest}>
      {children}
    </Text>
  );
};

export const Body1: ReactFCC = ({ children, ...rest }) => {
  return (
    <Text fontSize="lg" {...rest}>
      {children}
    </Text>
  );
};

const Body2: ReactFCC = ({ children, ...rest }) => {
  return (
    <Text fontSize="md" {...rest}>
      {children}
    </Text>
  );
};

const Subtitle1: ReactFCC = ({ children, ...rest }) => {
  return (
    <Text fontSize="sm" {...rest}>
      {children}
    </Text>
  );
};

const Subtitle2: ReactFCC = ({ children, ...rest }) => {
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
  Body1,
  Body2,
  Subtitle1,
  Subtitle2,
};