import { ApolloError } from "@apollo/client";
import {
  Box,
  Button,
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
import { Form, Formik } from "formik";
import { useMemo, useState } from "react";
import { Typography } from "../../src/components/Typography";
import {
  AllTeamsQuery,
  FindLeagueMembersQuery,
  RegisterMutation,
  useRegisterMutation,
} from "../../src/generated/graphql";
import * as Yup from "yup";

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
              You're registered for 2022! Stay tuned for more updates. You'll
              hear from us before the season starts.
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

type RegistrationFormFields = {
  email: string | undefined;
  username: string | undefined;
  previousUserId: string | undefined;
};

const formValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Please choose a username"),
  previousUserId: Yup.string().optional(),
});

const RegistrationForm: ReactFCC<{
  previousMembers: FindLeagueMembersQuery;
  teams: AllTeamsQuery;
}> = ({ previousMembers, teams }) => {
  const [register, { data: registerData, loading, error }] =
    useRegisterMutation();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  let previousUsers = useMemo(() => {
    let val = [...previousMembers.findManyLeagueMembers];
    val.sort((a, b) => a.People.username.localeCompare(b.People.username));
    return val;
  }, [previousMembers.findManyLeagueMembers]);

  // const teamsMap = useMemo(() => {
  //   const map = new Map<number, Team>();
  //   teams.findManyTeams.forEach((team) => {
  //     map.set(team.teamid, team);
  //   });
  //   return map;
  // }, [teams.findManyTeams]);

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
        <Formik
          initialValues={{
            email: "",
            username: "",
            previousUserId: undefined,
          }}
          validationSchema={formValidationSchema}
          onSubmit={async (values, { resetForm }) => {
            await register({
              variables: {
                username: values.username!,
                email: values.email!,
                previousUserId: values.previousUserId
                  ? parseInt(values.previousUserId)
                  : undefined,
              },
            });
            setIsModalOpen(true);
            if (!error) {
              resetForm();
            }
          }}
        >
          {(formik) => (
            <Form onSubmit={formik.handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                    bgColor="gray.100"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  {formik.errors.email && formik.touched.email ? (
                    <Box color="red">{formik.errors.email}</Box>
                  ) : null}
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="username">2022 Username</FormLabel>
                  <Input
                    id="username"
                    name="username"
                    type="username"
                    variant="filled"
                    bgColor="gray.100"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                  />
                  {formik.errors.username && formik.touched.username ? (
                    <Box color="red">{formik.errors.username}</Box>
                  ) : null}
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
                      bgColor="gray.100"
                    >
                      <option value={undefined} />
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
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default RegistrationForm;
