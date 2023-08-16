import {useRouter} from 'next/router';

export default function LeagueStandings() {
  const router = useRouter();
  const leagueId = router.query.leagueId as string;
}
