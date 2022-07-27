import { ApolloError } from "@apollo/client";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { GetServerSideProps, NextPage } from "next";
import { useMemo, useState } from "react";
import { Typography } from "../../src/components/Typography";
import FuntimePage from "../../src/FuntimePage";
import {
  FindLeagueMembersDocument,
  FindLeagueMembersQuery,
  FindLeagueMembersQueryResult,
  RegisterMutation,
  useRegisterMutation,
} from "../../src/generated/graphql";
import { client } from "../../src/graphql";

const RegisterPage: NextPage<{ data: FindLeagueMembersQuery }> = ({ data }) => {
  return (
    <FuntimePage>
      <Flex justify="center">
        <RegistrationForm data={data} />
      </Flex>
    </FuntimePage>
  );
};

const PREVIOUS_LEAGUE_ID = 6;

const RegistrationResponseModal: ReactFCC<{
  isOpen: boolean;
  onClose: () => void;
  data: RegisterMutation | null | undefined;
  loading: boolean;
  error: ApolloError | undefined;
}> = ({ isOpen, onClose, data, loading, error }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{!error ? `Welcome!` : `Please retry`}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {!error ? (
            <Typography.H4>
              You're registered for 2022! Stay tuned for an email when Week 1
              Picks open up.
            </Typography.H4>
          ) : (
            <Typography.H4>
              Oh no, there was a problem registering. Please refresh the page
              and try again, or reach out to Bob at bambrose24@gmail.com for
              help.
            </Typography.H4>
          )}
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const RegistrationForm: ReactFCC<{ data: FindLeagueMembersQuery }> = ({
  data,
}) => {
  const [register, { data: registerData, loading, error }] =
    useRegisterMutation();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      previousUserId: undefined,
    },
    onSubmit: async (values) => {
      await register({
        variables: {
          username: values.username,
          email: values.email,
          previousUserId: values.previousUserId
            ? parseInt(values.previousUserId)
            : undefined,
        },
      });
      setIsModalOpen(true);
      if (!error) {
        formik.resetForm();
      }
    },
  });

  let previousUsers = useMemo(() => {
    let val = [...(data?.findManyLeagueMembers ?? [])];
    val.sort((a, b) => a.People.username.localeCompare(b.People.username));
    return val;
  }, data?.findManyLeagueMembers);

  return (
    <>
      <RegistrationResponseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={registerData}
        loading={loading}
        error={error}
      />
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
                    return (
                      <option key={uid} value={uid}>
                        {username}
                      </option>
                    );
                  })}
                </Select>
              </FormLabel>
            </FormControl>
            <Button
              type="submit"
              bg="blue.300"
              _hover={{ backgroundColor: "blue.500" }}
              width="full"
              isLoading={loading}
            >
              Register
            </Button>
          </VStack>
        </form>
      </Box>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const result = await client.query<FindLeagueMembersQueryResult>({
    query: FindLeagueMembersDocument,
    variables: {
      league_id: PREVIOUS_LEAGUE_ID,
    },
  });

  return {
    props: { data: result.data }, // will be passed to the page component as props
  };
};

export default RegisterPage;
