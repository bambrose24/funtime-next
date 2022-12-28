import { usePicksByWeekQuery } from "@src/generated/graphql";
import { env, LEAGUE_ID } from "@src/util/config";

export const WeekPicksLoader = ({ week }: { week: number }) => {
  usePicksByWeekQuery({
    variables: {
      league_id: LEAGUE_ID,
      week,
      ...(env === "production" ? { override: true } : {}),
    },
  });
  return null;
};
