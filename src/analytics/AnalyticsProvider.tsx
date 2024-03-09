import {useUser} from '@supabase/auth-helpers-react';
// import {Analytics} from '@vercel/analytics/react';
import posthog from 'posthog-js';
import {PostHogProvider} from 'posthog-js/react';
import LogRocket from 'logrocket';
import {ReactNode, useEffect} from 'react';
import {env} from '@src/util/config';

// init posthog
if (typeof window !== 'undefined') {
  // checks that we are client-side
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY ?? '', {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
    loaded: posthog => {
      if (env === 'development') {
        posthog.debug(); // debug mode in development
      }
    },
  });
}

export function AnalyticsProvider({children}: {children: ReactNode}) {
  const user = useUser();

  useEffect(() => {
    if (user && user.email) {
      LogRocket.identify(user.email);
    }
  }, [user]);

  return (
    <PostHogProvider client={posthog}>
      {children}
      {/* Removing because I hit the quota so fast and want other sites on my project to use analytics */}
      {/* <Analytics /> */}
    </PostHogProvider>
  );
}
