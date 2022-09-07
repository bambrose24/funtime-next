import { Box, Flex, HStack, VStack } from "@chakra-ui/react";
import {
  AllTeamsQuery,
  MsfGamePlayedStatus,
  PicksByWeekQuery,
} from "@src/generated/graphql";
import moment from "moment-timezone";
import { TeamLogo } from "../shared/TeamLogo";
import { Typography } from "../Typography";

type Props = {
  picksData: PicksByWeekQuery;
  teams: AllTeamsQuery;
};

type TeamIDMapping = Record<number, AllTeamsQuery["teams"][number]>;

export const WeekPicksGameCards: React.FC<Props> = ({ picksData, teams }) => {
  const { games } = picksData.picksByWeek;

  const teamIdMapping = teams.teams.reduce((prev, curr) => {
    prev[curr.teamid] = curr;
    return prev;
  }, {} as TeamIDMapping);

  return (
    <Flex justify="center">
      <HStack spacing="12px" m="12px" overflow="auto" paddingBottom="20px">
        {games.map((g) => {
          return <GameCard game={g} teams={teamIdMapping} />;
        })}
      </HStack>
    </Flex>
  );
};

export const GameCard: React.FC<{
  game: PicksByWeekQuery["picksByWeek"]["games"][number];
  teams: TeamIDMapping;
}> = ({ game, teams }) => {
  const awayTeam = teams[game.away];
  const homeTeam = teams[game.home];

  const awayColor = !game.done
    ? undefined
    : game.winner === game.away
    ? "pickCorrect"
    : "pickWrong";

  const homeColor = !game.done
    ? undefined
    : game.winner === game.home
    ? "pickCorrect"
    : "pickWrong";
  return (
    <Box p="12px" bg="white" minWidth="130px">
      <VStack>
        <Flex justify="space-between" w="100%">
          <HStack>
            <TeamLogo abbrev={awayTeam.abbrev!} height="25px" width="25px" />
            <Typography.Body1 color={awayColor}>
              {awayTeam.abbrev}
            </Typography.Body1>
          </HStack>
          <Typography.Body1 color={awayColor}>
            {game.awayscore}
          </Typography.Body1>
        </Flex>
        <Flex justify="space-between" w="100%">
          <HStack>
            <TeamLogo abbrev={homeTeam.abbrev!} height="25px" width="25px" />
            <Typography.Body1 color={homeColor}>
              {homeTeam.abbrev}
            </Typography.Body1>
          </HStack>
          <Typography.Body1 color={homeColor}>
            {game.homescore}
          </Typography.Body1>
        </Flex>
        <Flex justify="start">
          {game?.liveStatus?.playedStatus === MsfGamePlayedStatus.Completed ? (
            "Final"
          ) : game?.liveStatus?.playedStatus ===
            MsfGamePlayedStatus.CompletedPendingReview ? (
            "Final Pending Review"
          ) : game?.liveStatus?.playedStatus === MsfGamePlayedStatus.Live ? (
            `Q${game?.liveStatus?.currentQuarter} ${moment(
              {
                seconds: game?.liveStatus?.currentQuarterSecondsRemaining || 0,
              },
              "mm:ss"
            ).format()}`
          ) : (
            <Typography.Body2>
              {moment(game.ts).tz("America/New_York").format("lll")}
            </Typography.Body2>
          )}
        </Flex>
      </VStack>
    </Box>
  );
};
