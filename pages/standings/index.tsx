import {StandingsPage} from '@src/components/season/StandingsPage';
import FuntimePage from '@src/FuntimePage';
import {GetStaticProps} from 'next';

function SeasonPage() {
  return (
    <FuntimePage>
      <StandingsPage />
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
