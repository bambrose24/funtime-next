import SuperbowlContent from '@src/components/superbowl/SuperbowlContent';
import FuntimePage from '@src/FuntimePage';
import {SECONDS_IN_DAY} from '@src/util/constants';
import {GetStaticProps} from 'next';

const SuperbowlPage = () => {
  return (
    <FuntimePage>
      <SuperbowlContent />
    </FuntimePage>
  );
};

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
    revalidate: SECONDS_IN_DAY,
  };
};

export default SuperbowlPage;
