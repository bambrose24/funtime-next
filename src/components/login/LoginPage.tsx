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
            We are building out login. This feature will be required next year
            but is in testing for now.
          </Typography.Body1>
          <Typography.Body1 mt="20px">
            Use the flow to create an account now. Please use your email that we
            have on file.
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
