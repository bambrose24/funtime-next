import {Badge, Divider, Flex, HStack, VStack} from '@chakra-ui/react';
import {CardStatRow} from '@src/modules/shared/CardStatRow';
import {Typography} from '@src/modules/Typography';
import {HomeQuery} from '@src/generated/graphql';
import {RankingEntry} from '@src/hooks/useLeagueRankings';
import {getOrdinal} from '@src/util/ordinals';
import {LeagueCardFooter} from '../LeagueCardFooter';

export type InProgressLeagueCardContentProps = {
  member: NonNullable<HomeQuery['me']>['leaguemembers'][number];
  memberRanking: RankingEntry | undefined;
};

export function InProgressLeagueCardContent({
  member,
  memberRanking,
}: InProgressLeagueCardContentProps) {
  return (
    <Flex direction="column" h="100%" justify="space-between">
      <VStack divider={<Divider />} spacing="8px">
        <CardStatRow
          label={`Week Wins`}
          value={
            member.WeekWinners.length && member.WeekWinners.length > 0 ? (
              <>
                <HStack>
                  {member.WeekWinners.map((weekWinner, i) => {
                    return (
                      <Badge key={i} colorScheme="green" variant="subtle">
                        Week {weekWinner.week}
                      </Badge>
                    );
                  })}
                </HStack>
              </>
            ) : (
              <Typography.Subtitle1 fontWeight="bold">None</Typography.Subtitle1>
            )
          }
        />
        <CardStatRow
          label={`League Rank`}
          value={memberRanking?.rank ? getOrdinal(memberRanking.rank) : '--'}
        />
        <CardStatRow
          label={`Number Correct`}
          value={`${member.correctPicks.count ?? 0} / ${(member.correctPicks.count ?? 0) +
            (member.wrongPicks.count ?? 0)}`}
        />
        {/* Idea: put a small graph of standing by week? y axis is 1 -> count of members */}
      </VStack>
    </Flex>
  );
}
