import { Auth } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Box, Divider, Flex } from "@chakra-ui/react";
import FuntimePage from "@src/FuntimePage";
import { useAuthTheme } from "./util";
import { Typography } from "../Typography";

const LoginPage = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  const authTheme = useAuthTheme();

  return (
    <FuntimePage>
      <Flex justify="center" w="100%">
        <Box w={{ base: "80vw", md: "400px" }}>
          <Typography.H1>Login (EXPERIMENTAL)</Typography.H1>
          <Typography.Body1 mt="20px">
            Soon, you will be able to log in to Funtime for more interesting
            features. For now, you don't get any features for registering, but
            there will be some interesting ones soon
          </Typography.Body1>
          <Typography.Body1 mt="20px">
            Use the flow to create an account now if you want. Please use your
            email that we have on file.
          </Typography.Body1>
          <Divider my="20px" />
          <Auth
            // providers={["google", "facebook", "apple"]}
            supabaseClient={supabase}
            appearance={{ theme: authTheme }}
            magicLink
          />
        </Box>
      </Flex>
    </FuntimePage>
  );
};
export default LoginPage;
