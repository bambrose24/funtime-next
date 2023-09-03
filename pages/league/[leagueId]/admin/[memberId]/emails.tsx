import {gql} from '@apollo/client';
import {Flex} from '@chakra-ui/react';
import {FuntimePage} from '@src/FuntimePage';
import {useLeagueMemberQuery} from '@src/generated/graphql';
import {MemberEmailsTable} from '@src/modules/admin/league/MemberEmailsTable';
import {Typography} from '@src/modules/Typography';
import {useRouter} from 'next/router';

const _MemberQuery = gql`
  query LeagueMember($memberId: Int!) {
    leagueMember(where: {membership_id: $memberId}) {
      id
      membership_id
      paid
      people {
        id
        username
      }
    }
  }
`;

export default function MemberEmailsPage() {
  const router = useRouter();
  const memberIdString = router.query['memberId'] as string | undefined;
  const leagueIdString = router.query['leagueId'] as string | undefined;
  const {data: member} = useLeagueMemberQuery({
    variables: {memberId: Number(memberIdString)},
    skip: !Number(memberIdString),
  });
  if (!memberIdString || !leagueIdString) {
    return null;
  }

  const memberId = Number(memberIdString);

  return (
    <FuntimePage>
      <Flex w="100%" justify="center">
        <Flex w="100%" direction="column" gap="20px" layerStyle="funtime-card">
          <Typography.H1>{member?.leagueMember?.people?.username} - Emails</Typography.H1>
          <MemberEmailsTable memberId={memberId} />
        </Flex>
      </Flex>
    </FuntimePage>
  );
}
