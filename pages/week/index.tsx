import FuntimePage from "@src/FuntimePage";
import { Typography } from "@src/components/Typography";
import { Flex } from "@chakra-ui/react";
import WeekContent from "@src/components/week/WeekContent";
import { env } from "@src/util/config";

const WeekPage: React.FC = () => {
  if (env === "production" && false) {
    return (
      <FuntimePage>
        <Flex w="100%" align="center">
          <Flex w="100%" maxWidth="1000px" align="center" justify="center">
            <Typography.H2>
              All weekly picks will be available here once the first week
              starts.
            </Typography.H2>
          </Flex>
        </Flex>
      </FuntimePage>
    );
  }

  return (
    <FuntimePage>
      <WeekContent />
    </FuntimePage>
  );
};

export default WeekPage;
