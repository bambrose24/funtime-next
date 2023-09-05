import {Flex} from '@chakra-ui/react';
import {CardStatRow} from '@src/modules/shared/CardStatRow';
import {HomeQuery} from '@src/generated/graphql';

export type RegularNotStartedLeagueCardProps = {
  member: NonNullable<HomeQuery['me']>['leaguemembers'][number];
};

export function RegularNotStartedLeagueCard({member}: RegularNotStartedLeagueCardProps) {
  return (
    <Flex direction="column" w="100%" h="100%" justify="space-between">
      <Flex direction="column">
        <CardStatRow
          label={`Registered Members`}
          value={member.leagues.aggregateLeagueMember.count ?? 0}
        />
      </Flex>
    </Flex>
  );
}
