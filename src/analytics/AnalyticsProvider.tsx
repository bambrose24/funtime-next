import { useUser } from "@supabase/auth-helpers-react";
import { Analytics } from "@vercel/analytics/react";
import LogRocket from "logrocket";
import { ReactNode, useEffect } from "react";

export function AnalyticsProvider({ children }: { children: ReactNode }) {
  const user = useUser();

  useEffect(() => {
    if (user && user.email) {
      LogRocket.identify(user.email);
    }
  }, [user]);

  return (
    <>
      {children}
      <Analytics />
    </>
  );
}
