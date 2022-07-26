import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Spinner,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { NextPage } from "next";
import { useMemo } from "react";
import FuntimePage from "../../src/FuntimePage";
import { useFindLeagueMembersQuery } from "../../src/generated/graphql";

const RegisterPage: NextPage = () => {
  return (
    <FuntimePage>
      <Flex justify="center">
        <RegistrationForm />
      </Flex>
    </FuntimePage>
  );
};

const PREVIOUS_LEAGUE_ID = 6;

const RegistrationForm: React.FC = () => {
  const { data, loading, error } = useFindLeagueMembersQuery({
    variables: { league_id: 6 },
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      previousUserId: undefined,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  let previousUsers = useMemo(() => {
    let val = [...(data?.findManyLeagueMembers ?? [])];
    val.sort((a, b) => a.People.username.localeCompare(b.People.username));
    return val;
  }, data?.findManyLeagueMembers);

  if (!data || loading) {
    return (
      <Box m={4}>
        <Spinner />
      </Box>
    );
  }

  if (error) {
    return <Box>Please refresh the page</Box>;
  }

  return (
    <Box my={8} bg="white" width="480px" p={4}>
      <form onSubmit={formik.handleSubmit}>
        <VStack spacing={4} align="flex-start">
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              name="email"
              type="email"
              variant="filled"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="username">2022 Username</FormLabel>
            <Input
              id="username"
              name="username"
              type="username"
              variant="filled"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
          </FormControl>
          <FormControl>
            <FormLabel>
              <Tooltip label="If you played last year, pick your username. This will connect your user to the one from last year.">
                If you played in 2021, your Username from last year
              </Tooltip>
              <Select
                id="previousUserId"
                name="previousUserId"
                onChange={formik.handleChange}
                value={formik.values.previousUserId}
              >
                <option value={undefined}></option>
                {previousUsers.map(({ People: { uid, username } }) => {
                  return <option value={uid}>{username}</option>;
                })}
              </Select>
            </FormLabel>
          </FormControl>
          <Button
            type="submit"
            bg="blue.300"
            _hover={{ backgroundColor: "blue.500" }}
            width="full"
          >
            Register
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default RegisterPage;
