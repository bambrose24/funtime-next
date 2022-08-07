import { Form, Formik } from "formik";
import {
  FindLeagueMembersQuery,
  GamesByWeekQuery,
} from "../../generated/graphql";
import * as Yup from "yup";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Radio,
  Select,
  VStack,
} from "@chakra-ui/react";
import { Typography } from "../Typography";
import { TeamLogo } from "../shared/TeamLogo";
import moment from "moment-timezone";

interface PicksFormProps {
  games: GamesByWeekQuery["findManyGames"];
  users: FindLeagueMembersQuery["findManyLeagueMembers"];
}

interface GameEntry {
  gameId: number;
  random: boolean;
  winner: number | undefined;
}

export const PicksForm: React.FC<PicksFormProps> = ({ games, users }) => {
  const validationSchema = Yup.object().shape({
    user1: Yup.string()
      .oneOf(
        users.map((u) => u.People.uid.toString()),
        "Please choose your username"
      )
      .required(),
    user2: Yup.string()
      .oneOf([Yup.ref("user1"), null], "Your username selections must match")
      .required(),
    games: Yup.array()
      .of(
        Yup.object().shape({
          gameId: Yup.number().required(),
          random: Yup.bool().required(),
          winner: Yup.number().required("Please pick a winner for this game."),
        })
      )
      .length(games.length, "Please select a winner for every game"),
  });
  return (
    <Formik
      initialValues={{
        user1: undefined,
        user2: undefined,
        games: games.map((g): GameEntry => {
          return { gameId: g.gid, random: false, winner: undefined };
        }),
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        console.log("values from submit?", values);
      }}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl>
              <FormLabel>Select your Username</FormLabel>
              <Select
                id="user1"
                name="user1"
                onChange={formik.handleChange}
                value={formik.values.user1}
                bgColor="gray.100"
              >
                <option value={undefined} />
                {users.map(({ People: { uid, username } }) => {
                  return (
                    <option key={uid} value={uid}>
                      {username}
                    </option>
                  );
                })}
              </Select>
            </FormControl>
            <Button
              bg="blue.300"
              _hover={{ backgroundColor: "blue.500" }}
              width="full"
              color="white"
              onClick={() => {
                const gamePicks: Array<GameEntry> = games.map((g) => {
                  const winner =
                    Math.random() < 0.5
                      ? g.Teams_Games_awayToTeams.teamid
                      : g.Teams_Games_homeToTeams.teamid;
                  return {
                    gameId: g.gid,
                    winner,
                    random: true,
                  };
                });
                formik.setFieldValue("games", gamePicks);
              }}
            >
              Randomize Picks
            </Button>
            {games.map((game, index) => {
              const formikVal = formik.values.games[index];
              return (
                <Box
                  height="90px"
                  border="1px solid"
                  borderColor="gray.300"
                  px={4}
                  py={4}
                  borderRadius={4}
                >
                  <FormControl>
                    <Grid templateColumns="repeat(12, 1fr)">
                      <GridItem colSpan={6}>
                        <Box
                          _hover={{
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            formikVal.winner =
                              game.Teams_Games_awayToTeams.teamid;
                            formikVal.random = false;
                            formik.values.games[index] = formikVal;
                            formik.setFieldValue("games", [
                              ...formik.values.games,
                            ]);
                          }}
                        >
                          <Grid templateColumns="repeat(12, 1fr)">
                            <GridItem
                              colStart={{ base: 1, lg: 4 }}
                              colSpan={{ base: 4, lg: 4 }}
                            >
                              <Flex
                                height="100%"
                                align="center"
                                direction="column"
                                justify="center"
                              >
                                <TeamLogo
                                  boxSize="50px"
                                  abbrev={game.Teams_Games_awayToTeams.abbrev!}
                                />
                              </Flex>
                            </GridItem>

                            <GridItem
                              colStart={{ base: 6, lg: 8 }}
                              colSpan={{ base: 3, lg: 2 }}
                            >
                              <Flex
                                height="100%"
                                align="center"
                                direction="column"
                                justify="center"
                              >
                                <Radio
                                  isChecked={
                                    formikVal.winner ===
                                    game.Teams_Games_awayToTeams.teamid
                                  }
                                />
                              </Flex>
                            </GridItem>
                            <GridItem
                              colStart={{ base: 9, lg: 10 }}
                              colSpan={{ base: 3, lg: 2 }}
                            >
                              <Flex
                                height="100%"
                                align="center"
                                direction="column"
                                justify="center"
                              >
                                <Typography.Body1>
                                  {game.Teams_Games_awayToTeams.abbrev}
                                </Typography.Body1>
                              </Flex>
                            </GridItem>
                          </Grid>
                        </Box>
                      </GridItem>
                      <GridItem colSpan={6}>
                        <Box
                          _hover={{
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            formikVal.winner =
                              game.Teams_Games_homeToTeams.teamid;
                            formikVal.random = false;
                            formik.values.games[index] = formikVal;
                            formik.setFieldValue("games", [
                              ...formik.values.games,
                            ]);
                          }}
                        >
                          <Grid templateColumns="repeat(12, 1fr)">
                            <GridItem
                              colSpan={{ base: 3, lg: 2 }}
                              colStart={{ base: 2, lg: 2 }}
                              height="100%"
                            >
                              <Flex
                                height="100%"
                                align="center"
                                direction="column"
                                justify="center"
                              >
                                <Typography.Body1>
                                  {game.Teams_Games_homeToTeams.abbrev}
                                </Typography.Body1>
                              </Flex>
                            </GridItem>
                            <GridItem
                              colStart={{ base: 5, lg: 4 }}
                              colSpan={{ base: 3, lg: 2 }}
                            >
                              <Flex
                                height="100%"
                                align="center"
                                direction="column"
                                justify="center"
                              >
                                <Radio
                                  isChecked={
                                    formikVal.winner ===
                                    game.Teams_Games_homeToTeams.teamid
                                  }
                                />
                              </Flex>
                            </GridItem>
                            <GridItem colStart={{ base: 9, lg: 6 }} colSpan={4}>
                              <Flex
                                height="100%"
                                align="center"
                                direction="column"
                                justify="center"
                              >
                                <TeamLogo
                                  boxSize="50px"
                                  abbrev={game.Teams_Games_homeToTeams.abbrev!}
                                />
                              </Flex>
                            </GridItem>
                          </Grid>
                        </Box>
                      </GridItem>
                      <GridItem
                        colStart={{ base: 1, lg: 3 }}
                        colSpan={{ base: 2, lg: 1 }}
                        rowStart={2}
                      >
                        <Flex
                          height="100%"
                          align="center"
                          direction="column"
                          justify="center"
                        >
                          <Typography.Subtitle2>
                            {game.awayrecord}
                          </Typography.Subtitle2>
                        </Flex>
                      </GridItem>
                      <GridItem
                        colStart={{ base: 11, lg: 10 }}
                        colSpan={{ base: 2, lg: 1 }}
                        rowStart={2}
                      >
                        <Flex
                          height="100%"
                          align="center"
                          direction="column"
                          justify="center"
                        >
                          <Typography.Subtitle2>
                            {game.homerecord}
                          </Typography.Subtitle2>
                        </Flex>
                      </GridItem>
                      <GridItem
                        colStart={{ base: 3, lg: 5 }}
                        colSpan={{ base: 8, lg: 4 }}
                        rowStart={2}
                      >
                        <Typography.Subtitle2>
                          {moment(game.ts)
                            .tz("America/New_York")
                            .format("MMM D YYYY, h:mm A z")}
                        </Typography.Subtitle2>
                      </GridItem>
                    </Grid>
                  </FormControl>
                </Box>
              );
            })}
            <FormControl>
              <FormLabel>Confirm your Username</FormLabel>
              <Select
                id="user2"
                name="user2"
                onChange={formik.handleChange}
                value={formik.values.user2}
                bgColor="gray.100"
              >
                <option value={undefined} />
                {users.map(({ People: { uid, username } }) => {
                  return (
                    <option key={uid} value={uid}>
                      {username}
                    </option>
                  );
                })}
              </Select>
              {formik.errors.user2 && formik.values.user2 && (
                <Typography.Subtitle2 color="red">
                  {formik.errors.user2}
                </Typography.Subtitle2>
              )}
            </FormControl>
            <Button
              type="submit"
              bg="blue.300"
              _hover={{
                backgroundColor: formik.isValid ? "blue.400" : "red.400",
              }}
              width="full"
              disabled={!formik.isValid}
              isLoading={formik.isSubmitting}
              color="white"
              bgColor={formik.isValid ? undefined : "red"}
            >
              {formik.isValid ? `Submit Picks` : `Finish Your Picks`}
            </Button>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};
