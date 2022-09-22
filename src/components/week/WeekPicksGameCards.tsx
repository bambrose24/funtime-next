import { Box, Flex, HStack, Theme, VStack } from "@chakra-ui/react";
import {
  AllTeamsQuery,
  MsfGamePlayedStatus,
  PicksByWeekQuery,
} from "@src/generated/graphql";
import _ from "lodash";
import moment from "moment-timezone";
import { TeamLogo } from "../shared/TeamLogo";
import { Typography } from "../Typography";

type Props = {
  picksData: PicksByWeekQuery;
  teams: AllTeamsQuery;
  pickTeam: (t: number) => void;
  simulatedPicks: Record<number, number>;
};

type TeamIDMapping = Record<number, AllTeamsQuery["teams"][number]>;

export const WeekPicksGameCards: React.FC<Props> = ({
  picksData,
  teams,
  pickTeam,
  simulatedPicks,
}) => {
  const gamesSorted = _(picksData.picksByWeek.games)
    .sortBy("ts")
    .sortBy("gid")
    .value();

  const teamIdMapping = teams.teams.reduce((prev, curr) => {
    prev[curr.teamid] = curr;
    return prev;
  }, {} as TeamIDMapping);

  return (
    <Flex justify="center">
      <HStack spacing="12px" m="12px" overflow="auto" paddingBottom="20px">
        {gamesSorted.map((g) => {
          return (
            <GameCard
              g={g}
              teams={teamIdMapping}
              pickTeam={pickTeam}
              simulatedPicks={simulatedPicks}
            />
          );
        })}
      </HStack>
    </Flex>
  );
};

type Game = PicksByWeekQuery["picksByWeek"]["games"][number];

export const GameCard: React.FC<{
  g: Game;
  teams: TeamIDMapping;
  pickTeam: (t: number) => void;
  simulatedPicks: Record<number, number>;
}> = ({ g, teams, pickTeam, simulatedPicks }) => {
  const awayTeam = teams[g.away];
  const homeTeam = teams[g.home];

  const game = {
    // can override fields here for testing if wanted
    ...g,
  };

  const getColors = (
    game: Game,
    team: number,
    simulatedWinner: number | undefined
  ): [string | undefined, string | undefined] => {
    if (simulatedWinner) {
      if (simulatedWinner === team) {
        return [undefined, "green.300"];
      } else {
        return [undefined, "red.300"];
      }
    }
    if (game.winner === team) {
      return ["pickCorrect", undefined];
    }
    if (game.done && !game.winner) {
      return ["yellow.400", undefined];
    }
    if (game.done) {
      return ["pickWrong", undefined];
    }
    return [undefined, undefined];
  };

  const [awayColor, awayBgColor] = getColors(
    game,
    game.away,
    simulatedPicks[game.gid]
  );

  const [homeColor, homeBgColor] = getColors(
    game,
    game.home,
    simulatedPicks[game.gid]
  );

  // const awayColor = !game.done
  //   ? undefined
  //   : !game.winner
  //   ? "yellow.400"
  //   : game.winner === game.away
  //   ? "pickCorrect"
  //   : "pickWrong";

  // const homeColor = !game.done
  //   ? undefined
  //   : !game.winner
  //   ? "yellow.400"
  //   : game.winner === game.home
  //   ? "pickCorrect"
  //   : "pickWrong";
  return (
    <Box p="12px" bg="white" minWidth="130px" height="150px">
      <VStack>
        <Flex justify="space-between" w="100%">
          <HStack>
            <TeamLogo abbrev={awayTeam.abbrev!} height="25px" width="25px" />
            <Box
              p="4px"
              borderRadius="4px"
              bg={awayBgColor}
              _hover={{
                cursor: "pointer",
                bg: awayBgColor ? undefined : "gray.200",
              }}
              onClick={() => pickTeam(awayTeam.teamid)}
            >
              <Typography.Body1 fontWeight="500" color={awayColor}>
                {awayTeam.abbrev}
              </Typography.Body1>
            </Box>
          </HStack>
          <Typography.Body1 fontWeight="500">{game.awayscore}</Typography.Body1>
        </Flex>
        <Flex justify="space-between" w="100%">
          <HStack>
            <TeamLogo abbrev={homeTeam.abbrev!} height="25px" width="25px" />
            <Box
              p="4px"
              borderRadius="4px"
              bg={homeBgColor}
              _hover={{
                cursor: "pointer",
                bg: homeBgColor ? undefined : "gray.200",
              }}
              onClick={() => pickTeam(homeTeam.teamid)}
            >
              <Typography.Body1 fontWeight="500" color={homeColor}>
                {homeTeam.abbrev}
              </Typography.Body1>
            </Box>
          </HStack>
          <Typography.Body1 fontWeight="500">{game.homescore}</Typography.Body1>
        </Flex>
        <Flex justify="start" w="100%">
          <GameLiveState game={game} />
        </Flex>
      </VStack>
    </Box>
  );
};

const GameLiveState: React.FC<{
  game: PicksByWeekQuery["picksByWeek"]["games"][number];
}> = ({ game }) => {
  if (game.done) {
    return <Typography.Body2>Final</Typography.Body2>;
  }

  if (!game.liveStatus) {
    return <GameTS ts={game.ts} />;
  }

  const status = game.liveStatus.playedStatus;
  if (status) {
    switch (status) {
      case MsfGamePlayedStatus.Completed:
        return <Typography.Body2>Final</Typography.Body2>;
      case MsfGamePlayedStatus.CompletedPendingReview:
        return <Typography.Body2>Final Pending Review</Typography.Body2>;
      case MsfGamePlayedStatus.Live:
        const quarter = game.liveStatus.currentQuarter;
        const secondsRemaining = game.liveStatus.currentQuarterSecondsRemaining;
        if (!secondsRemaining) {
          return <Typography.Body2>In Progress</Typography.Body2>;
        }
        const minutes = Math.floor(secondsRemaining / 60);
        const seconds = secondsRemaining - minutes * 60;

        const minutesStr = minutes.toLocaleString("en-US", {
          minimumIntegerDigits: minutes < 10 && minutes !== 0 ? 1 : 2,
          useGrouping: false,
        });

        const secondsStr = seconds.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        });
        return (
          <Typography.Body2>
            Q{quarter} {minutesStr}:{secondsStr}
          </Typography.Body2>
        );
    }
  }
  return <GameTS ts={game.ts} />;
};

const GameTS: React.FC<{ ts: any }> = ({ ts }) => {
  return (
    <Typography.Body2>
      {moment(ts).tz("America/New_York").format("lll")}
    </Typography.Body2>
  );
};
