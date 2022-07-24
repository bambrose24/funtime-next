import { Box, BoxProps } from "@chakra-ui/react";

const Section: ReactFCC<Omit<BoxProps, "px" | "py">> = ({
  children,
  ...rest
}) => {
  return (
    <Box px={{ base: 12, lg: 8 }} py={4} {...rest}>
      {children}
    </Box>
  );
};

export default Section;
