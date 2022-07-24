import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import { useScreenSize } from "../util/responsive";
import Section from "./Section";
import { Typography } from "./Typography";

const MobileNav: React.FC = () => {
  return <DesktopNav />;
};

const DesktopNav: React.FC = () => {
  return (
    <Box w="100%" height="24px">
      <Flex justify="space-between">
        <Typography.H4>
          <strong>Funtime</strong>
        </Typography.H4>
      </Flex>
    </Box>
  );
};

export const Nav: React.FC = () => {
  const screenSize = useScreenSize();
  return (
    <Section layerStyle="dark" bgColor="blue.400">
      {screenSize === "mobile" ? <MobileNav /> : <DesktopNav />}
    </Section>
  );
};
