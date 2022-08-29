import { Flex } from "@chakra-ui/react";
import { Typography } from "@src/components/Typography";
import FuntimePage from "@src/FuntimePage";

const SeasonPage: React.FC = () => {
  return (
    <FuntimePage>
      <Flex w="100%" align="center">
        <Flex w="100%" maxWidth="1000px" align="center" justify="center">
          <Typography.H2>Coming soon!</Typography.H2>
        </Flex>
      </Flex>
    </FuntimePage>
  );
};

export default SeasonPage;
