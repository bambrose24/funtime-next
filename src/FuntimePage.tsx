import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Nav } from "./components/nav/Nav";

const FuntimePage: React.FC<{ children: ReactNode }> = ({ children }) => {
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
