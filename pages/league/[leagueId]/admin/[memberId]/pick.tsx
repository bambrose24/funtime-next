import {useWeekForPicksQuery} from '@src/generated/graphql';
import {useRouter} from 'next/router';

export default function AdminPickPage() {
  const router = useRouter();
  const leagueIdParam = router.query['leagueId'];
  const memberIdParam = router.query['memberId'];
  console.log({leagueIdParam, memberIdParam});

  const leagueId = Number(leagueIdParam);
  const memberId = Number(memberIdParam);

  const {data, loading, error} = useWeekForPicksQuery({
    variables: {
      leagueId,
      memberId,
    },
  });

  return <></>;
}