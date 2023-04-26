import {Flex, Spinner} from '@chakra-ui/react';

export const FuntimeLoading: React.FC = () => {
  return (
    <Flex w="100%" justify="center">
      <Spinner />
    </Flex>
  );
};
