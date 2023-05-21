import {HomeQuery, MemberRole} from '@src/generated/graphql';
import {AdminNotStartedLeagueCard} from './AdminNotStartedLeagueCard';
import {RegularNotStartedLeagueCard} from './RegularNotStartedLeagueCard';

export type NotStartedLeagueCardContentProps = {
  member: NonNullable<HomeQuery['user']>['leaguemembers'][number];
};

export function NotStartedLeagueCardContent({member}: NotStartedLeagueCardContentProps) {
  if (member.role === MemberRole.Admin) {
    return <AdminNotStartedLeagueCard member={member} />;
  }
  return <RegularNotStartedLeagueCard member={member} />;
}
