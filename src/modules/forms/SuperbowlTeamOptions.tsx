import {useAllTeamsQuery} from '@src/generated/graphql';

export function SuperbowlTeamOptions() {
  const {data} = useAllTeamsQuery();
  if (!data) return null;
  return (
    <>
      <option value={undefined}>-- AFC --</option>
      {data.teams
        .filter(t => t.conference === 'AFC')
        .map(t => {
          return (
            <option key={t.teamid} value={t.teamid}>
              {t.loc} {t.name}
            </option>
          );
        })}
      <option value={undefined} />
      <option value={undefined}>-- NFC --</option>
      {data.teams
        .filter(t => t.conference === 'NFC')
        .map(t => {
          return (
            <option key={t.teamid} value={t.teamid}>
              {t.loc} {t.name}
            </option>
          );
        })}
    </>
  );
}
