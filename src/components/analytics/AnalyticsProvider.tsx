import { useUser } from "@supabase/auth-helpers-react";
import LogRocket from "logrocket";
import { ReactNode, useEffect } from "react";

export function AnalyticsProvider({ children }: { children: ReactNode }) {
  const user = useUser();

  useEffect(() => {
    if (user) {
      LogRocket.identify(user.id, {
        ...(user.email ? { email: user.email } : {}),
      });
    }
  }, [user]);

  return <>{children}</>;
}
