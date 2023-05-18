import {Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs} from '@chakra-ui/react';
import {Standings} from '@src/components/season/Standings';
import {StandingsPage} from '@src/components/season/StandingsPage';
import {WeeklyWinners} from '@src/components/season/WeeklyWinners';
import {Typography} from '@src/components/Typography';
import FuntimePage from '@src/FuntimePage';
import {GetStaticProps} from 'next';

function SeasonPage() {
  return (
    <FuntimePage>
      <StandingsPage leagueId={leagueId} />
    </FuntimePage>
  );
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
    revalidate: 60 * 5,
  };
};

export default SeasonPage;
