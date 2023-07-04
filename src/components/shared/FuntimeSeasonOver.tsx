import {Flex} from '@chakra-ui/react';
import Link from 'next/link';
import {Typography} from '../Typography';

export const FuntimeSeasonOver = () => {
  return (
    <Flex direction="column" mx="24px" justify="center" textAlign="center">
      <Typography.H3>The season is over! Thanks for playing.</Typography.H3>
      <Typography.H5>
        Stay tuned for next year! You can still check out the{' '}
        <Link href="/season">
          <u>standings</u>
        </Link>{' '}
        and{' '}
        <Link href="/superbowl">
          <u>superbowl</u>
        </Link>{' '}
        pages.
      </Typography.H5>
    </Flex>
  );
};
