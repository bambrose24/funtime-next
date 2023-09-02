import {Flex, Spinner} from '@chakra-ui/react';
import {useFullHeightWithoutNav} from '@src/hooks/useFullHeightWithoutNav';

export const FuntimeLoading: React.FC = () => {
  const bodyHeight = useFullHeightWithoutNav();
  return (
    <Flex w="100%" h={bodyHeight} justify="center" alignItems="center">
      <Spinner />
    </Flex>
  );
};
