import { ApolloError } from "@apollo/client";
import {
  Box,
  Button,
  Divider,
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
import { Typography } from "@src/components/Typography";
import {
  AllTeamsQuery,
  FindLeagueMembersQuery,
  RegisterMutation,
  useRegisterMutation,
} from "@src/generated/graphql";
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

const RegistrationForm: ReactFCC<{
  previousMembers: FindLeagueMembersQuery;
  teams: AllTeamsQuery;
}> = ({ previousMembers, teams }) => {
  const formValidationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Please choose a username"),
    previousUserId: Yup.string().optional(),
    superbowlWinner: Yup.string()
      .oneOf(
        teams.findManyTeams.map((t) => t.teamid.toString()),
        "Please choose your username"
      )
      .required(),
    superbowlLoser: Yup.string()
      .oneOf(
        teams.findManyTeams.map((t) => t.teamid.toString()),
        "Please choose your username"
      )
      .required(),
    superbowlScore: Yup.number()
      .required()
      .integer()
      .lessThan(150, "Please enter a number below 100"),
  });

  const [register, { data: registerData, loading, error }] =
    useRegisterMutation();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  let previousUsers = useMemo(() => {
    let val = [...previousMembers.findManyLeagueMembers];
    val.sort((a, b) => a.People.username.localeCompare(b.People.username));
    return val;
  }, [previousMembers.findManyLeagueMembers]);

  const teamsMap = useMemo(() => {
    const map = new Map<number, typeof teams["findManyTeams"][number]>();
    teams.findManyTeams.forEach((team) => {
      map.set(team.teamid, team);
    });
    return map;
  }, [teams.findManyTeams]);

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
            superbowlWinner: undefined,
            superbowlLoser: undefined,
            superbowlScore: undefined,
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
                superbowlWinner: parseInt(values.superbowlWinner!),
                superbowlLoser: parseInt(values.superbowlLoser!),
                superbowlScore: parseInt(values.superbowlScore!),
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
                <Divider my={4} borderColor="gray.400" />
                <FormControl>
                  <FormLabel>
                    <Tooltip label="Be sure to pick a winner and loser from both the AFC and NFC.">
                      <>
                        Who will be the Super Bowl <strong>winner</strong>?
                      </>
                    </Tooltip>
                    <Select
                      id="superbowlWinner"
                      name="superbowlWinner"
                      onChange={formik.handleChange}
                      value={formik.values.superbowlWinner}
                      bgColor="gray.100"
                    >
                      <option value={undefined} />
                      <option value={undefined}>-- AFC --</option>
                      {teams.findManyTeams
                        .filter((t) => t.conference === "AFC")
                        .map((t) => {
                          return (
                            <option key={`winner_${t.teamid}`} value={t.teamid}>
                              {t.abbrev}
                            </option>
                          );
                        })}
                      <option value={undefined} />
                      <option value={undefined}>-- NFC --</option>
                      {teams.findManyTeams

                        .filter((t) => t.conference === "NFC")
                        .map((t) => {
                          return (
                            <option key={`winner_${t.teamid}`} value={t.teamid}>
                              {t.abbrev}
                            </option>
                          );
                        })}
                    </Select>
                  </FormLabel>
                </FormControl>
                <FormControl>
                  <FormLabel>
                    <Tooltip label="Be sure to pick a winner and loser from both the AFC and NFC.">
                      <>
                        Who will be the Super Bowl <strong>loser</strong>?
                      </>
                    </Tooltip>
                    <Select
                      id="superbowlLoser"
                      name="superbowlLoser"
                      onChange={formik.handleChange}
                      value={formik.values.superbowlLoser}
                      bgColor="gray.100"
                    >
                      <option value={undefined} />
                      <option value={undefined}>-- AFC --</option>
                      {teams.findManyTeams
                        .filter((t) => t.conference === "AFC")
                        .map((t) => {
                          return (
                            <option key={`winner_${t.teamid}`} value={t.teamid}>
                              {t.abbrev}
                            </option>
                          );
                        })}
                      <option value={undefined} />
                      <option value={undefined}>-- NFC --</option>
                      {teams.findManyTeams
                        .filter((t) => t.conference === "NFC")
                        .map((t) => {
                          return (
                            <option key={`winner_${t.teamid}`} value={t.teamid}>
                              {t.abbrev}
                            </option>
                          );
                        })}
                    </Select>
                  </FormLabel>
                </FormControl>
                <FormControl>
                  <FormLabel>
                    <Tooltip label="Pick a total score for the game. This will be used for the tiebreaker, should there be multiple people who are correct">
                      What will the total score of the Super Bowl be
                    </Tooltip>
                    <Input
                      id="superbowlScore"
                      name="superbowlScore"
                      variant="filled"
                      bgColor="gray.100"
                      onChange={formik.handleChange}
                      value={formik.values.superbowlScore}
                    />
                  </FormLabel>
                </FormControl>
                <Button
                  type="submit"
                  bg={formik.isValid ? "blue.300" : "red.300"}
                  _hover={{ backgroundColor: "blue.500" }}
                  width="full"
                  isLoading={loading}
                  disabled={!formik.isValid}
                >
                  {formik.isValid ? "Register" : "Fix your registration"}
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
