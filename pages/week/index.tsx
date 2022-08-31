import { Flex } from "@chakra-ui/react";
import { Typography } from "@src/components/Typography";
import FuntimePage from "@src/FuntimePage";

const WeekPage: React.FC = () => {
  return (
    <FuntimePage>
      <Flex w="100%" align="center">
        <Flex w="100%" maxWidth="1000px" align="center" justify="center">
          <Typography.H2>
            All weekly picks will be available here once the first week starts.
          </Typography.H2>
        </Flex>
      </Flex>
    </FuntimePage>
  );
};

export default WeekPage;
