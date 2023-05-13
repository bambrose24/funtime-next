export const leagueTypes = ['pickem'] as const;
export type LeagueType = typeof leagueTypes[number];

export const CREATE_LEAGUE_FORM_STEPS = ['league_info', 'extra_features'] as const;
export type CreateLeagueFormStepType = typeof CREATE_LEAGUE_FORM_STEPS[number];
