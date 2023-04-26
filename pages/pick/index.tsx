import FuntimePage from '@src/FuntimePage';
import {PicksContent} from '@src/components/pick/PicksContent';
import {GetStaticProps} from 'next';

const PickPage: React.FC = () => {
  return (
    <FuntimePage>
      <PicksContent />
    </FuntimePage>
  );
};

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
    revalidate: 60 * 5,
  };
};

export default PickPage;
