import { usePicksByWeekQuery } from "@src/generated/graphql";
import { env, LEAGUE_ID } from "@src/util/config";

export const WeekPicksLoader = ({ week, shouldLoad }: { week: number; shouldLoad: boolean; }) => {
  usePicksByWeekQuery({
    variables: {
      league_id: LEAGUE_ID,
      week,
      ...(env === "production" ? { override: true } : {}),
    },
    skip: !shouldLoad
  });
  return null;
};
