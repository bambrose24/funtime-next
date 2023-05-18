import {useBreakpointValue} from '@chakra-ui/react';

export function useLeagueCardDimensions() {
  const height = '300px';
  const width = useBreakpointValue({base: '100%', lg: '300px'});

  return {height, width};
}
