import {Flex} from '@chakra-ui/react';
import {Typography} from '../Typography';

export const FuntimeError: React.FC = () => {
  return (
    <Flex w="100%" mx="24px">
      <Typography.H5>
        Oh no! There was an error. Please refresh the page or reach out to Bob at{' '}
        <a href="mailto:bambrose24@gmail.com">
          <u>bambrose24@gmail.com</u>
        </a>
        .
      </Typography.H5>
    </Flex>
  );
};
