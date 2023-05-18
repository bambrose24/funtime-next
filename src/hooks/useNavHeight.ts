import {useBreakpointValue} from '@chakra-ui/react';

export function useNavHeight() {
  return useBreakpointValue({base: '64px'});
}
