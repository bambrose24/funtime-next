import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import LoginPage from "@src/components/login/LoginPage";
import { useEffect } from "react";

const Login = () => {
  const router = useRouter();
  const session = useSession();
  useEffect(() => {
    if (session) {
      if ("redirect_to" in router.query) {
        const redirectTo = router.query["redirect_to"];
        router.push({ pathname: redirectTo as string });
      } else {
        router.push("/pick");
      }
    }
  }, [router, session]);

  if (!session) {
    return <LoginPage />;
  }

  return null;
};

export default Login;
