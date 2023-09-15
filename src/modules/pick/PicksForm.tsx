import {Form, Formik, FormikErrors} from 'formik';
import {GamePick, GamesByWeekQuery, useMakePicksMutation} from '../../generated/graphql';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Radio,
  Select,
  Textarea,
  Tooltip,
  VStack,
} from '@chakra-ui/react';
import {Typography} from '../Typography';
import {TeamLogo} from '../shared/TeamLogo';
import moment from 'moment-timezone';
import {useMemo, useState} from 'react';
import {Defined} from '@src/util/types';

interface PicksFormProps {
  week: number;
  season: number;
  games: GamesByWeekQuery['games'];
  leagueId: number;
  memberId: number | null;
  isImpersonating: boolean;
  username: string;
  existingWinners: Set<number>;
  existingScore: number | undefined;
  onSuccess: () => Promise<void>;
}

interface GameEntry {
  gameId: number;
  random: boolean;
  winner: number | undefined;
}

const MAX_MESSAGE_LENGTH = 300;

export function PicksForm({
  week,
  season,
  games,
  leagueId,
  memberId,
  isImpersonating,
  username,
  existingWinners,
  existingScore,
  onSuccess,
}: PicksFormProps) {
  const [submitPicks, {data, error}] = useMakePicksMutation();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalPicks, setModalPicks] = useState<Array<GamePick>>([]);

  // TODO... query the "viewer" LeagueMember field on a League, and get it from useLeagueQuery

  const gamesNeededToPick = useMemo(() => {
    return games.filter(g => {
      if (isImpersonating) {
        return true;
      }
      return !g.started;
    });
  }, [games, isImpersonating]);

  const neededGameIds = useMemo(() => {
    return new Set(gamesNeededToPick.map(g => g.gid));
  }, [gamesNeededToPick]);

  const tiebreakerGame = games.find(g => g.is_tiebreaker);

  if (!tiebreakerGame) {
    throw new Error(`Cannot find a tiebreaker game for week ${week} ${season}`);
  }
  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex justify="center">
              {!error && data ? (
                <Typography.H2>You are in!</Typography.H2>
              ) : (
                <Typography.H2>Oh no!</Typography.H2>
              )}
            </Flex>
          </ModalHeader>
          <ModalCloseButton onClick={() => setIsModalOpen(false)} />
          <ModalBody>
            {!error && data ? (
              <>
                <Typography.H4>Congrats, {username}!</Typography.H4>
                <Typography.H4 mt={8} mb="8px">
                  Your picks are in for Week {week}, {season}. You should have receieved an email
                  with your picks, but if not, here is the summary. You can come back to this page
                  and alter your picks at any time.
                </Typography.H4>
                <Flex align="center" w="100%">
                  <VStack spacing={3} w="100%">
                    {games.map((game, i) => {
                      const pick = modalPicks.find(p => p.game_id === game.gid);

                      const away = game.teams_games_awayToteams.abbrev;
                      const home = game.teams_games_homeToteams.abbrev;
                      const choseAway = pick?.winner === game.teams_games_awayToteams.teamid;
                      const choseHome = pick?.winner === game.teams_games_homeToteams.teamid;

                      return (
                        <Grid key={i} templateColumns="repeat(12, 1fr)" gap="4px" w="100%">
                          <GridItem colStart={4} colSpan={2}>
                            <Flex
                              justify="center"
                              align="center"
                              p="4px"
                              borderRadius="8px"
                              border={choseAway ? '3px solid' : undefined}
                              borderColor={choseAway ? 'green.400' : undefined}
                            >
                              <Typography.H4>{away}</Typography.H4>
                            </Flex>
                          </GridItem>
                          <GridItem colStart={6} colSpan={2}>
                            <Flex align="center" justify="center">
                              <Typography.H4>@</Typography.H4>
                            </Flex>
                          </GridItem>
                          <GridItem colStart={8} colSpan={2}>
                            <Flex
                              justify="center"
                              align="center"
                              p="4px"
                              borderRadius="8px"
                              border={choseHome ? '3px solid' : undefined}
                              borderColor={choseHome ? 'green.400' : undefined}
                            >
                              <Typography.H4>{home}</Typography.H4>
                            </Flex>
                          </GridItem>
                        </Grid>
                      );
                    })}
                    {modalPicks
                      ?.filter(p => p.score !== undefined)
                      ?.map(p => {
                        const game = games.find(g => g.gid === p.game_id)!;

                        const away = game.teams_games_awayToteams.abbrev;
                        const home = game.teams_games_homeToteams.abbrev;
                        const score = p.score;
                        return (
                          <Grid
                            key={p.game_id}
                            templateColumns="repeat(12, 1fr)"
                            gap="4px"
                            w="100%"
                          >
                            <GridItem colStart={3} colSpan={8}>
                              <Flex justify="center" align="center">
                                <Typography.H5>
                                  {away} @ {home} Total Score: <strong>{score}</strong>
                                </Typography.H5>
                              </Flex>
                            </GridItem>
                          </Grid>
                        );
                      })}
                  </VStack>
                </Flex>
              </>
            ) : (
              <Typography.H4>
                There was an error submitting your picks. Please try again or reach out to Bob at
                bambrose24@gmail.com to get your picks in.
              </Typography.H4>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
      <Formik
        initialValues={{
          games: games.map(
            (g): GameEntry => {
              return {
                gameId: g.gid,
                random: false,
                winner: existingWinners.has(g.teams_games_homeToteams.teamid)
                  ? g.teams_games_homeToteams.teamid
                  : existingWinners.has(g.teams_games_awayToteams.teamid)
                  ? g.teams_games_awayToteams.teamid
                  : undefined,
              };
            }
          ),
          scoreGameId: tiebreakerGame.gid,
          score: existingScore?.toString() ?? '',
          message: '',
        }}
        validateOnMount={true}
        validate={async values => {
          const errors: FormikErrors<any> = {};
          const chosenGameIds = values.games.map(g => g.gameId);
          Array.from(neededGameIds).forEach(gid => {
            if (!chosenGameIds.includes(gid)) {
              errors['games'] = 'Please choose all the required games';
            }
          });
          if (
            !values.score ||
            !Number(values.score) ||
            Number(values.score) <= 0 ||
            Number(values.score) > 200
          ) {
            errors['score'] = 'Please choose a valid score between 1 and 200';
          }

          if (values.message && values.message.length > MAX_MESSAGE_LENGTH) {
            errors[
              'message'
            ] = `The maximum length for messages is ${MAX_MESSAGE_LENGTH} characters. Please shorten your message`;
          }
          return errors;
        }}
        onSubmit={async (values, {resetForm}) => {
          const picks = values.games
            .map(g => {
              if (!g.winner) {
                return undefined;
              }
              const res: GamePick = {
                game_id: g.gameId,
                winner: g.winner,
                is_random: g.random,
                score: values.scoreGameId === g.gameId ? parseInt(values.score) : undefined,
              };
              return res;
            })
            .filter(Defined);
          await submitPicks({
            variables: {
              picks,
              leagueId,
              overrideMemberId: isImpersonating ? memberId : null,
              ...(values.message && values.message.length > 0 ? {message: values.message} : {}),
            },
          });
          setModalPicks(picks);
          onSuccess().then(() => {
            resetForm();
            setIsModalOpen(true);
          });
        }}
      >
        {formik => (
          <Form onSubmit={formik.handleSubmit}>
            <VStack spacing={4} align="flex-start">
              {isImpersonating && (
                <Alert status="info">
                  <AlertIcon />
                  <AlertDescription textAlign="start">
                    You are making picks on behalf of {username} as an admin of the league.
                  </AlertDescription>
                </Alert>
              )}
              <Tooltip
                hasArrow
                placement="top"
                label={
                  isImpersonating
                    ? `You're making picks on behalf of ${username} as an admin of the league`
                    : 'If you want to make picks as a different user, please log in as them'
                }
              >
                <FormControl>
                  <FormLabel>Username</FormLabel>
                  <Select disabled>
                    <option value={undefined}>{username}</option>
                  </Select>
                </FormControl>
              </Tooltip>
              <Button
                width="full"
                variant="solid"
                onClick={() => {
                  const gamePicks: Array<GameEntry> = games
                    .filter(g => !g.started)
                    .map(g => {
                      const winner =
                        Math.random() < 0.5
                          ? g.teams_games_awayToteams.teamid
                          : g.teams_games_homeToteams.teamid;
                      return {
                        gameId: g.gid,
                        winner,
                        random: true,
                      };
                    });
                  const randomizedGids = new Set(gamePicks.map(g => g.gameId));
                  const existingPicks = formik.values.games;
                  const toKeep = existingPicks.filter(g => !randomizedGids.has(g.gameId));
                  formik.setFieldValue('games', [...gamePicks, ...toKeep]);
                }}
              >
                Randomize Picks
              </Button>
              {games.map(game => {
                let formikVal: GameEntry | undefined = formik.values.games.find(
                  g => g.gameId === game.gid
                );
                const isGameEnabled = isImpersonating || !game.started;

                return (
                  <Box
                    key={game.gid}
                    minHeight="90px"
                    width={'100%'}
                    border="1px solid"
                    borderColor="gray.300"
                    backgroundColor={isGameEnabled ? undefined : 'gray.200'}
                    px="12px"
                    py="12px"
                    borderRadius={4}
                    cursor={isGameEnabled ? undefined : 'not-allowed'}
                  >
                    <FormControl>
                      <Grid templateColumns="repeat(12, 1fr)">
                        {!isGameEnabled && (
                          <GridItem colSpan={12} pb="8px">
                            <Flex w="100%" justify="center">
                              <Typography.Subtitle2>The game has started</Typography.Subtitle2>
                            </Flex>
                          </GridItem>
                        )}
                        <GridItem colSpan={6}>
                          <Box
                            _hover={
                              isGameEnabled
                                ? {
                                    cursor: 'pointer',
                                  }
                                : {}
                            }
                            onClick={
                              isGameEnabled
                                ? () => {
                                    if (!formikVal) {
                                      formikVal = {
                                        gameId: game.gid,
                                        winner: game.teams_games_awayToteams.teamid,
                                        random: false,
                                      };
                                    } else {
                                      formikVal.winner = game.teams_games_awayToteams.teamid;
                                      formikVal.random = false;
                                    }
                                    const otherGames = formik.values.games.filter(
                                      g => g.gameId !== game.gid
                                    );
                                    formik.setFieldValue('games', [...otherGames, formikVal]);
                                  }
                                : undefined
                            }
                          >
                            <Grid templateColumns="repeat(12, 1fr)">
                              <GridItem colStart={{base: 1, lg: 4}} colSpan={{base: 4, lg: 4}}>
                                <Flex
                                  height="100%"
                                  align="center"
                                  direction="column"
                                  justify="center"
                                >
                                  <TeamLogo
                                    boxSize="50px"
                                    abbrev={game.teams_games_awayToteams.abbrev!}
                                  />
                                </Flex>
                              </GridItem>

                              <GridItem colStart={{base: 6, lg: 8}} colSpan={{base: 3, lg: 2}}>
                                <Flex
                                  height="100%"
                                  align="center"
                                  direction="column"
                                  justify="center"
                                >
                                  <Radio
                                    disabled={!isGameEnabled}
                                    isChecked={
                                      formikVal?.winner === game.teams_games_awayToteams.teamid
                                    }
                                  />
                                </Flex>
                              </GridItem>
                              <GridItem colStart={{base: 9, lg: 10}} colSpan={{base: 3, lg: 2}}>
                                <Flex
                                  height="100%"
                                  align="center"
                                  direction="column"
                                  justify="center"
                                >
                                  <Typography.Body1>
                                    {game.teams_games_awayToteams.abbrev}
                                  </Typography.Body1>
                                </Flex>
                              </GridItem>
                            </Grid>
                          </Box>
                        </GridItem>
                        <GridItem colSpan={6}>
                          <Box
                            _hover={
                              isGameEnabled
                                ? {
                                    cursor: 'pointer',
                                  }
                                : {}
                            }
                            onClick={
                              isGameEnabled
                                ? () => {
                                    if (!formikVal) {
                                      formikVal = {
                                        gameId: game.gid,
                                        winner: game.teams_games_homeToteams.teamid,
                                        random: false,
                                      };
                                    } else {
                                      formikVal.winner = game.teams_games_homeToteams.teamid;
                                      formikVal.random = false;
                                    }
                                    const otherGames = formik.values.games.filter(
                                      g => g.gameId !== game.gid
                                    );
                                    formik.setFieldValue('games', [...otherGames, formikVal]);
                                  }
                                : undefined
                            }
                          >
                            <Grid templateColumns="repeat(12, 1fr)">
                              <GridItem
                                colSpan={{base: 3, lg: 2}}
                                colStart={{base: 2, lg: 2}}
                                height="100%"
                              >
                                <Flex
                                  height="100%"
                                  align="center"
                                  direction="column"
                                  justify="center"
                                >
                                  <Typography.Body1>
                                    {game.teams_games_homeToteams.abbrev}
                                  </Typography.Body1>
                                </Flex>
                              </GridItem>
                              <GridItem colStart={{base: 5, lg: 4}} colSpan={{base: 3, lg: 2}}>
                                <Flex
                                  height="100%"
                                  align="center"
                                  direction="column"
                                  justify="center"
                                >
                                  <Radio
                                    disabled={!isGameEnabled}
                                    isChecked={
                                      formikVal?.winner === game.teams_games_homeToteams.teamid
                                    }
                                  />
                                </Flex>
                              </GridItem>
                              <GridItem colStart={{base: 9, lg: 6}} colSpan={4}>
                                <Flex
                                  height="100%"
                                  align="center"
                                  direction="column"
                                  justify="center"
                                >
                                  <TeamLogo
                                    boxSize="50px"
                                    abbrev={game.teams_games_homeToteams.abbrev!}
                                  />
                                </Flex>
                              </GridItem>
                            </Grid>
                          </Box>
                        </GridItem>
                        <GridItem
                          colStart={{base: 1, lg: 3}}
                          colSpan={{base: 2, lg: 1}}
                          rowStart={2}
                        >
                          <Flex height="100%" align="center" direction="column" justify="center">
                            <Typography.Subtitle2>{game.awayrecord}</Typography.Subtitle2>
                          </Flex>
                        </GridItem>
                        <GridItem
                          colStart={{base: 11, lg: 10}}
                          colSpan={{base: 2, lg: 1}}
                          rowStart={2}
                        >
                          <Flex height="100%" align="center" direction="column" justify="center">
                            <Typography.Subtitle2>{game.homerecord}</Typography.Subtitle2>
                          </Flex>
                        </GridItem>
                        <GridItem
                          colStart={{base: 3, lg: 4}}
                          colSpan={{base: 8, lg: 6}}
                          rowStart={2}
                        >
                          <Typography.Subtitle2>
                            {moment(game.ts)
                              .tz('America/New_York')
                              .format('MMM D YYYY, h:mm A z')}
                          </Typography.Subtitle2>
                        </GridItem>
                      </Grid>
                    </FormControl>
                  </Box>
                );
              })}
              <FormControl>
                <FormLabel>
                  Total Score of {tiebreakerGame.teams_games_awayToteams.abbrev} @{' '}
                  {tiebreakerGame.teams_games_homeToteams.abbrev}
                </FormLabel>
                <Input
                  id="score"
                  name="score"
                  bgColor="gray.100"
                  value={formik.values.score}
                  onChange={formik.handleChange}
                />
                {formik.errors.score && formik.values.score && (
                  <Typography.Subtitle2 color="red">{formik.errors.score}</Typography.Subtitle2>
                )}
              </FormControl>

              {/* This whole thing needs to be optimized for this to be pleasant */}
              <FormControl isInvalid={Boolean(formik.errors.message)}>
                <FormLabel>Message (will be visible when picks release)</FormLabel>
                <Textarea
                  id="message"
                  placeholder="Predictions? Smack talk? The floor is yours."
                  name="message"
                  height="40px"
                  bgColor="gray.100"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {!formik.errors.message && (
                  <Typography.Subtitle2>
                    {formik.values.message.length} / {MAX_MESSAGE_LENGTH}
                  </Typography.Subtitle2>
                )}
                <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
              </FormControl>

              <Button
                type="submit"
                width="full"
                variant={formik.isValid ? 'funtime-primary' : 'funtime-error'}
                disabled={!formik.isValid}
                isLoading={formik.isSubmitting}
              >
                {formik.isValid
                  ? `Submit Picks`
                  : formik.errors
                  ? `Fix Your Picks`
                  : `Finish Your Picks`}
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </>
  );
}
