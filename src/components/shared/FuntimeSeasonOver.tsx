import {Flex} from '@chakra-ui/react';
import {Typography} from '../Typography';

export const FuntimeSeasonOver = () => {
  return (
    <Flex direction="column" mx="24px" justify="center" textAlign="center">
      <Typography.H3>The season is over! Thanks for playing.</Typography.H3>
      <Typography.H5>
        Stay tuned for next year! You can still check out the{' '}
        <a href="/season">
          <u>standings</u>
        </a>{' '}
        and{' '}
        <a href="/superbowl">
          <u>superbowl</u>
        </a>{' '}
        pages.
      </Typography.H5>
    </Flex>
  );
};
