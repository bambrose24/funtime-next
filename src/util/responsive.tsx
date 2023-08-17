import {useBreakpointValue} from '@chakra-ui/react';

export type ScreenSize = 'mobile' | 'desktop';

export function useScreenSize(): ScreenSize {
  return useBreakpointValue<ScreenSize>({base: 'mobile', lg: 'desktop'}, 'mobile') ?? 'mobile';
}
