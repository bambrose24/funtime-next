import FuntimePage from "@src/FuntimePage";
import WeekContent from "@src/components/week/WeekContent";
import { GetStaticProps } from "next";

const WeekPage: React.FC = () => {
  return (
    <FuntimePage>
      <WeekContent />
    </FuntimePage>
  );
};

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
    revalidate: 60,
  };
};

export default WeekPage;
