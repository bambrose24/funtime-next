import {Flex, Spinner} from '@chakra-ui/react';

export const FuntimeLoading: React.FC = () => {
  return (
    <Flex w="100%" h="100vh" justify="center" alignItems="center">
      <Spinner />
    </Flex>
  );
};
