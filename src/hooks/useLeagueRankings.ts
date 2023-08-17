import {
  FindLeagueMembersQuery,
  SeasonCorrectPicksQuery,
  useFindLeagueMembersQuery,
  useSeasonCorrectPicksQuery,
} from '@src/generated/graphql';
import _ from 'lodash';
import {useMemo} from 'react';

export type RankingEntry = {
  member: FindLeagueMembersQuery['leagueMembers'][0];
  num_correct: number;
  rank: number;
};

export function useLeagueRankings({leagueId}: {leagueId: number}) {
  const {data: usersData, loading: usersLoading, error: usersError} = useFindLeagueMembersQuery({
    variables: {league_id: leagueId},
  });

  const {
    data: correctPicksData,
    loading: correctPicksLoading,
    error: correctPicksError,
  } = useSeasonCorrectPicksQuery({variables: {league_id: leagueId}});

  const data = useMemo(() => {
    if (!usersData || !correctPicksData) {
      return [];
    }
    return sortedRanks(usersData, correctPicksData);
  }, [usersData, correctPicksData]);

  if (!usersData || !correctPicksData) {
    return {
      data,
      loading: usersLoading || correctPicksLoading,
      error: usersError || correctPicksError,
    };
  }

  return {
    data,
    loading: usersLoading || correctPicksLoading,
    error: usersError || correctPicksError,
  };
}

function sortedRanks(
  leagueMembers: FindLeagueMembersQuery,
  correctPicksData: SeasonCorrectPicksQuery
): Array<RankingEntry> {
  const memberIdToMember = _.keyBy(leagueMembers.leagueMembers, m => m.membership_id);

  const sortedResult = _(correctPicksData.leagueMembers)
    .sortBy(x => x.people.username)
    .sortBy(x => -1 * x.aggregatePick.count)
    .value();

  let rankingTracker = 1;
  let prev = 0;
  return sortedResult.map((current, i) => {
    const correct = current.aggregatePick.count ?? 0;
    if (i === 0) {
      prev = correct;
    } else if (correct !== prev) {
      prev = correct;
      rankingTracker = i + 1;
    }
    prev = correct;
    return {
      member: memberIdToMember[current.membership_id],
      num_correct: correct,
      rank: rankingTracker,
    };
  });
}
