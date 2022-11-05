import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import LoginPage from "@src/components/login/LoginPage";

const Login = () => {
  const router = useRouter();
  const session = useSession();

  console.log("session?", session);
  if (!session) {
    return <LoginPage />;
  }
  router.push("/pick");
  return null;
};

export default Login;
