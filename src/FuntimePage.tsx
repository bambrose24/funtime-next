import { Box, Divider, HStack, useColorMode } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Nav } from "./components/nav/Nav";

const FuntimePage: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { colorMode } = useColorMode();
  console.log("color mode", colorMode);
  return (
    <Box bgColor="gray.100">
      <Nav />
      <Box minHeight="100vh" py={4}>
        {children}
      </Box>
    </Box>
  );
};

export default FuntimePage;
