import {Badge, Box, Button, Divider, Flex, HStack, Skeleton, VStack} from '@chakra-ui/react';
import {CardStatRow} from '@src/components/shared/CardStatRow';
import {HomeQuery, LeagueStatus, MemberRole} from '@src/generated/graphql';
import {useLeagueRankings} from '@src/hooks/useLeagueRankings';
import {getOrdinal} from '@src/util/ordinals';
import Link from 'next/link';
import {Typography} from '../../Typography';
import {InProgressLeagueCardContent} from './in-progress/InProgressLeagueCardContent';
import {NotStartedLeagueCardContent} from './not-started/NotStartedLeagueCardContent';
import {useLeagueCardDimensions} from './useLeageCardDimensions';

export function LeagueCardContent({league_id, data}: {league_id: number; data: HomeQuery}) {
  const member = data.user?.leaguemembers?.find(member => member.leagues.league_id === league_id);
  const membership_id = member?.membership_id;

  const {width, height} = useLeagueCardDimensions();
  const {
    data: leagueRankings,
    loading: leagueRankingsLoading,
    error: leagueRankingsError,
  } = useLeagueRankings({leagueId: league_id});

  if (!member || !membership_id) {
    return null;
  }

  if (leagueRankingsLoading || leagueRankingsError || !leagueRankings) {
    return <Skeleton w={width} h={height} />;
  }

  const league = member.leagues;
  const status = league.status;

  const memberRanking = leagueRankings.find(
    ranking => ranking.member.membership_id === membership_id
  );

  return (
    <Flex direction="column" w={width} h={height} layerStyle="funtime-card">
      <Flex justify="space-between">
        <Flex direction="column" alignItems="start">
          {member.role === MemberRole.Admin ? (
            <Flex justify="start">
              <Badge variant="solid" colorScheme="blue">
                Admin
              </Badge>
            </Flex>
          ) : null}
          <Typography.H3>{league.name}</Typography.H3>
        </Flex>
        <Flex alignItems="start">
          {status === LeagueStatus.Done ? (
            <Badge colorScheme="green" variant="solid">
              Complete
            </Badge>
          ) : status === LeagueStatus.InProgress ? (
            <Badge colorScheme="yellow" variant="solid">
              In Progress
            </Badge>
          ) : (
            <Badge colorScheme="purple" variant="solid">
              Not Started
            </Badge>
          )}
        </Flex>
      </Flex>
      <Box mt="16px" />
      {status !== LeagueStatus.NotStarted ? (
        <InProgressLeagueCardContent member={member} memberRanking={memberRanking} />
      ) : (
        <NotStartedLeagueCardContent member={member} />
      )}
    </Flex>
  );
}
