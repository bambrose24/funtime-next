import {
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { Standings } from "@src/components/season/Standings";
import { WeeklyWinners } from "@src/components/season/WeeklyWinners";
import { Typography } from "@src/components/Typography";
import FuntimePage from "@src/FuntimePage";

const SeasonPage: React.FC = () => {
  return (
    <FuntimePage>
      <Flex justify="center" overflowX="hidden" overflowY="hidden">
        <Box
          bg="white"
          px="12px"
          py="12px"
          borderRadius="10px"
          minWidth="300px"
          w={[500, 500, 600]}
        >
          <Typography.H1 my="12px" align="center">
            Leaderboard
          </Typography.H1>
          <Typography.Body2 my="12px">
            Note, leaderboard stats are updated in real time. If a game has
            completed, the standings have updated.
          </Typography.Body2>
          <Tabs>
            <TabList>
              <Tab>Season</Tab>
              <Tab>Weekly Winners</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Standings />
              </TabPanel>
              <TabPanel>
                <WeeklyWinners />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </FuntimePage>
  );
};

export default SeasonPage;
