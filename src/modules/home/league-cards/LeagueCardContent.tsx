import {Badge, Box, Flex, Skeleton} from '@chakra-ui/react';
import {HomeQuery, LeagueStatus, MemberRole} from '@src/generated/graphql';
import {useLeagueRankings} from '@src/hooks/useLeagueRankings';
import {Typography} from '../../Typography';
import {InProgressLeagueCardContent} from './in-progress/InProgressLeagueCardContent';
import {LeagueCardFooter} from './LeagueCardFooter';
import {NotStartedLeagueCardContent} from './not-started/NotStartedLeagueCardContent';
import {useLeagueCardDimensions} from './useLeageCardDimensions';

export function LeagueCardContent({league_id, data}: {league_id: number; data: HomeQuery}) {
  const member = data.me?.leaguemembers?.find(member => member.leagues.league_id === league_id);
  const membership_id = member?.membership_id;

  const {width, height} = useLeagueCardDimensions();

  if (!member || !membership_id) {
    return null;
  }

  const league = member.leagues;
  const status = league.status;

  const memberRanking = league.rankings.find(
    ranking => ranking.member.membership_id === membership_id
  );

  return (
    <Flex direction="column" w={width} minH={height} layerStyle="funtime-z1">
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
      <Box pt="16px" />
      {status !== LeagueStatus.NotStarted ? (
        <InProgressLeagueCardContent member={member} memberRanking={memberRanking} />
      ) : (
        <NotStartedLeagueCardContent member={member} />
      )}
      <Box pt="16px" />
      <LeagueCardFooter member={member} />
    </Flex>
  );
}
