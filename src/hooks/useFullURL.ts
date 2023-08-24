import {useRouter} from 'next/router';

export function useFullURL() {
  const router = useRouter();
  return `https://www.play-funtime.com${router.asPath || '/'}`;
}
