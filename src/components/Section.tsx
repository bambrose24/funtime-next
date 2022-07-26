import { Box, BoxProps, Flex } from "@chakra-ui/react";

const Section: ReactFCC<Omit<BoxProps, "px" | "py">> = ({
  children,
  ...rest
}) => {
  return (
    <Box px={{ base: 4, lg: 8 }} py={4} {...rest}>
      {children}
    </Box>
  );
};

export default Section;