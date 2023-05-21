import {Flex} from '@chakra-ui/react';
import {ReactNode} from 'react';
import {Typography} from '../Typography';

export type CardStatRowProps = {
  label: string;
  value: ReactNode;
};

export function CardStatRow({label, value}: CardStatRowProps) {
  return (
    <Flex w="100%" justify="space-between">
      <Typography.Body2>{label}</Typography.Body2>
      {typeof value === 'string' ? (
        <Typography.Subtitle1 fontWeight="bold">{value}</Typography.Subtitle1>
      ) : (
        value
      )}
    </Flex>
  );
}
