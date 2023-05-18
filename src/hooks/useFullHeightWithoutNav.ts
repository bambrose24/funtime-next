import {useNavHeight} from './useNavHeight';

export function useFullHeightWithoutNav() {
  const navHeight = useNavHeight();
  return `calc(100vh - ${navHeight}px)`;
}
