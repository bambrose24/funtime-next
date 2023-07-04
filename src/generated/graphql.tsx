import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  DateTimeBetterSerialization: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateGame = {
  __typename?: 'AggregateGame';
  _avg?: Maybe<GameAvgAggregate>;
  _count?: Maybe<GameCountAggregate>;
  _max?: Maybe<GameMaxAggregate>;
  _min?: Maybe<GameMinAggregate>;
  _sum?: Maybe<GameSumAggregate>;
};

export type AggregateLeague = {
  __typename?: 'AggregateLeague';
  _avg?: Maybe<LeagueAvgAggregate>;
  _count?: Maybe<LeagueCountAggregate>;
  _max?: Maybe<LeagueMaxAggregate>;
  _min?: Maybe<LeagueMinAggregate>;
  _sum?: Maybe<LeagueSumAggregate>;
};

export type AggregateLeagueMember = {
  __typename?: 'AggregateLeagueMember';
  _avg?: Maybe<LeagueMemberAvgAggregate>;
  _count?: Maybe<LeagueMemberCountAggregate>;
  _max?: Maybe<LeagueMemberMaxAggregate>;
  _min?: Maybe<LeagueMemberMinAggregate>;
  _sum?: Maybe<LeagueMemberSumAggregate>;
};

export type AggregatePick = {
  __typename?: 'AggregatePick';
  _avg?: Maybe<PickAvgAggregate>;
  _count?: Maybe<PickCountAggregate>;
  _max?: Maybe<PickMaxAggregate>;
  _min?: Maybe<PickMinAggregate>;
  _sum?: Maybe<PickSumAggregate>;
};

export type AggregateResponse = {
  __typename?: 'AggregateResponse';
  count: Scalars['Int'];
};

export type AggregateSuperbowl = {
  __typename?: 'AggregateSuperbowl';
  _avg?: Maybe<SuperbowlAvgAggregate>;
  _count?: Maybe<SuperbowlCountAggregate>;
  _max?: Maybe<SuperbowlMaxAggregate>;
  _min?: Maybe<SuperbowlMinAggregate>;
  _sum?: Maybe<SuperbowlSumAggregate>;
};

export type AggregateSuperbowlSquare = {
  __typename?: 'AggregateSuperbowlSquare';
  _avg?: Maybe<SuperbowlSquareAvgAggregate>;
  _count?: Maybe<SuperbowlSquareCountAggregate>;
  _max?: Maybe<SuperbowlSquareMaxAggregate>;
  _min?: Maybe<SuperbowlSquareMinAggregate>;
  _sum?: Maybe<SuperbowlSquareSumAggregate>;
};

export type AggregateTeam = {
  __typename?: 'AggregateTeam';
  _avg?: Maybe<TeamAvgAggregate>;
  _count?: Maybe<TeamCountAggregate>;
  _max?: Maybe<TeamMaxAggregate>;
  _min?: Maybe<TeamMinAggregate>;
  _sum?: Maybe<TeamSumAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
};

export type AggregateWeekWinners = {
  __typename?: 'AggregateWeekWinners';
  _avg?: Maybe<WeekWinnersAvgAggregate>;
  _count?: Maybe<WeekWinnersCountAggregate>;
  _max?: Maybe<WeekWinnersMaxAggregate>;
  _min?: Maybe<WeekWinnersMinAggregate>;
  _sum?: Maybe<WeekWinnersSumAggregate>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolNullableFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableFilter>;
};

export type BoolNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedBoolNullableFilter>;
  _min?: InputMaybe<NestedBoolNullableFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableWithAggregatesFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type CreateLeagueInput = {
  latePolicy: LatePolicy;
  leagueName: Scalars['String'];
  pickPolicy?: InputMaybe<PickPolicy>;
  reminderPolicy?: InputMaybe<ReminderPolicy>;
  scoringType?: InputMaybe<ScoringType>;
  superbowlCompetition: Scalars['Boolean'];
  weeklyTiebreaker: Scalars['Boolean'];
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type EnumLatePolicyNullableFilter = {
  equals?: InputMaybe<LatePolicy>;
  in?: InputMaybe<Array<LatePolicy>>;
  not?: InputMaybe<NestedEnumLatePolicyNullableFilter>;
  notIn?: InputMaybe<Array<LatePolicy>>;
};

export type EnumLatePolicyNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumLatePolicyNullableFilter>;
  _min?: InputMaybe<NestedEnumLatePolicyNullableFilter>;
  equals?: InputMaybe<LatePolicy>;
  in?: InputMaybe<Array<LatePolicy>>;
  not?: InputMaybe<NestedEnumLatePolicyNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<LatePolicy>>;
};

export type EnumMemberRoleNullableFilter = {
  equals?: InputMaybe<MemberRole>;
  in?: InputMaybe<Array<MemberRole>>;
  not?: InputMaybe<NestedEnumMemberRoleNullableFilter>;
  notIn?: InputMaybe<Array<MemberRole>>;
};

export type EnumMemberRoleNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumMemberRoleNullableFilter>;
  _min?: InputMaybe<NestedEnumMemberRoleNullableFilter>;
  equals?: InputMaybe<MemberRole>;
  in?: InputMaybe<Array<MemberRole>>;
  not?: InputMaybe<NestedEnumMemberRoleNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<MemberRole>>;
};

export type EnumPickPolicyNullableFilter = {
  equals?: InputMaybe<PickPolicy>;
  in?: InputMaybe<Array<PickPolicy>>;
  not?: InputMaybe<NestedEnumPickPolicyNullableFilter>;
  notIn?: InputMaybe<Array<PickPolicy>>;
};

export type EnumPickPolicyNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumPickPolicyNullableFilter>;
  _min?: InputMaybe<NestedEnumPickPolicyNullableFilter>;
  equals?: InputMaybe<PickPolicy>;
  in?: InputMaybe<Array<PickPolicy>>;
  not?: InputMaybe<NestedEnumPickPolicyNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<PickPolicy>>;
};

export type EnumReminderPolicyNullableFilter = {
  equals?: InputMaybe<ReminderPolicy>;
  in?: InputMaybe<Array<ReminderPolicy>>;
  not?: InputMaybe<NestedEnumReminderPolicyNullableFilter>;
  notIn?: InputMaybe<Array<ReminderPolicy>>;
};

export type EnumReminderPolicyNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumReminderPolicyNullableFilter>;
  _min?: InputMaybe<NestedEnumReminderPolicyNullableFilter>;
  equals?: InputMaybe<ReminderPolicy>;
  in?: InputMaybe<Array<ReminderPolicy>>;
  not?: InputMaybe<NestedEnumReminderPolicyNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<ReminderPolicy>>;
};

export type EnumScoringTypeNullableFilter = {
  equals?: InputMaybe<ScoringType>;
  in?: InputMaybe<Array<ScoringType>>;
  not?: InputMaybe<NestedEnumScoringTypeNullableFilter>;
  notIn?: InputMaybe<Array<ScoringType>>;
};

export type EnumScoringTypeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumScoringTypeNullableFilter>;
  _min?: InputMaybe<NestedEnumScoringTypeNullableFilter>;
  equals?: InputMaybe<ScoringType>;
  in?: InputMaybe<Array<ScoringType>>;
  not?: InputMaybe<NestedEnumScoringTypeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<ScoringType>>;
};

export type FirstNotStartedWeekResponse = {
  __typename?: 'FirstNotStartedWeekResponse';
  games: Array<Game>;
  season?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
};

export type Game = {
  __typename?: 'Game';
  _count?: Maybe<GameCount>;
  away: Scalars['Int'];
  awayrecord?: Maybe<Scalars['String']>;
  awayscore?: Maybe<Scalars['Int']>;
  current_record?: Maybe<Scalars['String']>;
  done?: Maybe<Scalars['Boolean']>;
  gid: Scalars['Int'];
  home: Scalars['Int'];
  homerecord?: Maybe<Scalars['String']>;
  homescore?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  international?: Maybe<Scalars['Boolean']>;
  is_tiebreaker?: Maybe<Scalars['Boolean']>;
  liveStatus?: Maybe<GameLive>;
  msf_id?: Maybe<Scalars['Int']>;
  picks: Array<Pick>;
  season: Scalars['Int'];
  seconds?: Maybe<Scalars['Int']>;
  teams_games_awayToteams: Team;
  teams_games_homeToteams: Team;
  ts: Scalars['DateTimeBetterSerialization'];
  week: Scalars['Int'];
  winner?: Maybe<Scalars['Int']>;
};


export type GamePicksArgs = {
  cursor?: InputMaybe<PickWhereUniqueInput>;
  distinct?: InputMaybe<Array<PickScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PickOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PickWhereInput>;
};

export type GameAvgAggregate = {
  __typename?: 'GameAvgAggregate';
  away?: Maybe<Scalars['Float']>;
  awayscore?: Maybe<Scalars['Float']>;
  gid?: Maybe<Scalars['Float']>;
  home?: Maybe<Scalars['Float']>;
  homescore?: Maybe<Scalars['Float']>;
  msf_id?: Maybe<Scalars['Float']>;
  season?: Maybe<Scalars['Float']>;
  seconds?: Maybe<Scalars['Float']>;
  week?: Maybe<Scalars['Float']>;
  winner?: Maybe<Scalars['Float']>;
};

export type GameAvgOrderByAggregateInput = {
  away?: InputMaybe<SortOrder>;
  awayscore?: InputMaybe<SortOrder>;
  gid?: InputMaybe<SortOrder>;
  home?: InputMaybe<SortOrder>;
  homescore?: InputMaybe<SortOrder>;
  msf_id?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
  seconds?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
  winner?: InputMaybe<SortOrder>;
};

export type GameCount = {
  __typename?: 'GameCount';
  picks: Scalars['Int'];
};

export type GameCountAggregate = {
  __typename?: 'GameCountAggregate';
  _all: Scalars['Int'];
  away: Scalars['Int'];
  awayrecord: Scalars['Int'];
  awayscore: Scalars['Int'];
  current_record: Scalars['Int'];
  done: Scalars['Int'];
  gid: Scalars['Int'];
  home: Scalars['Int'];
  homerecord: Scalars['Int'];
  homescore: Scalars['Int'];
  international: Scalars['Int'];
  is_tiebreaker: Scalars['Int'];
  msf_id: Scalars['Int'];
  season: Scalars['Int'];
  seconds: Scalars['Int'];
  ts: Scalars['Int'];
  week: Scalars['Int'];
  winner: Scalars['Int'];
};

export type GameCountOrderByAggregateInput = {
  away?: InputMaybe<SortOrder>;
  awayrecord?: InputMaybe<SortOrder>;
  awayscore?: InputMaybe<SortOrder>;
  current_record?: InputMaybe<SortOrder>;
  done?: InputMaybe<SortOrder>;
  gid?: InputMaybe<SortOrder>;
  home?: InputMaybe<SortOrder>;
  homerecord?: InputMaybe<SortOrder>;
  homescore?: InputMaybe<SortOrder>;
  international?: InputMaybe<SortOrder>;
  is_tiebreaker?: InputMaybe<SortOrder>;
  msf_id?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
  seconds?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
  winner?: InputMaybe<SortOrder>;
};

export type GameCreateInput = {
  awayrecord?: InputMaybe<Scalars['String']>;
  awayscore?: InputMaybe<Scalars['Int']>;
  current_record?: InputMaybe<Scalars['String']>;
  done?: InputMaybe<Scalars['Boolean']>;
  homerecord?: InputMaybe<Scalars['String']>;
  homescore?: InputMaybe<Scalars['Int']>;
  international?: InputMaybe<Scalars['Boolean']>;
  is_tiebreaker?: InputMaybe<Scalars['Boolean']>;
  msf_id?: InputMaybe<Scalars['Int']>;
  picks?: InputMaybe<PickCreateNestedManyWithoutGamesInput>;
  season: Scalars['Int'];
  seconds?: InputMaybe<Scalars['Int']>;
  teams_games_awayToteams: TeamCreateNestedOneWithoutGames_Games_AwayToteamsInput;
  teams_games_homeToteams: TeamCreateNestedOneWithoutGames_Games_HomeToteamsInput;
  ts: Scalars['DateTime'];
  week: Scalars['Int'];
  winner?: InputMaybe<Scalars['Int']>;
};

export type GameCreateManyInput = {
  away: Scalars['Int'];
  awayrecord?: InputMaybe<Scalars['String']>;
  awayscore?: InputMaybe<Scalars['Int']>;
  current_record?: InputMaybe<Scalars['String']>;
  done?: InputMaybe<Scalars['Boolean']>;
  gid?: InputMaybe<Scalars['Int']>;
  home: Scalars['Int'];
  homerecord?: InputMaybe<Scalars['String']>;
  homescore?: InputMaybe<Scalars['Int']>;
  international?: InputMaybe<Scalars['Boolean']>;
  is_tiebreaker?: InputMaybe<Scalars['Boolean']>;
  msf_id?: InputMaybe<Scalars['Int']>;
  season: Scalars['Int'];
  seconds?: InputMaybe<Scalars['Int']>;
  ts: Scalars['DateTime'];
  week: Scalars['Int'];
  winner?: InputMaybe<Scalars['Int']>;
};

export type GameCreateManyTeams_Games_AwayToteamsInput = {
  awayrecord?: InputMaybe<Scalars['String']>;
  awayscore?: InputMaybe<Scalars['Int']>;
  current_record?: InputMaybe<Scalars['String']>;
  done?: InputMaybe<Scalars['Boolean']>;
  gid?: InputMaybe<Scalars['Int']>;
  home: Scalars['Int'];
  homerecord?: InputMaybe<Scalars['String']>;
  homescore?: InputMaybe<Scalars['Int']>;
  international?: InputMaybe<Scalars['Boolean']>;
  is_tiebreaker?: InputMaybe<Scalars['Boolean']>;
  msf_id?: InputMaybe<Scalars['Int']>;
  season: Scalars['Int'];
  seconds?: InputMaybe<Scalars['Int']>;
  ts: Scalars['DateTime'];
  week: Scalars['Int'];
  winner?: InputMaybe<Scalars['Int']>;
};

export type GameCreateManyTeams_Games_AwayToteamsInputEnvelope = {
  data: Array<GameCreateManyTeams_Games_AwayToteamsInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type GameCreateManyTeams_Games_HomeToteamsInput = {
  away: Scalars['Int'];
  awayrecord?: InputMaybe<Scalars['String']>;
  awayscore?: InputMaybe<Scalars['Int']>;
  current_record?: InputMaybe<Scalars['String']>;
  done?: InputMaybe<Scalars['Boolean']>;
  gid?: InputMaybe<Scalars['Int']>;
  homerecord?: InputMaybe<Scalars['String']>;
  homescore?: InputMaybe<Scalars['Int']>;
  international?: InputMaybe<Scalars['Boolean']>;
  is_tiebreaker?: InputMaybe<Scalars['Boolean']>;
  msf_id?: InputMaybe<Scalars['Int']>;
  season: Scalars['Int'];
  seconds?: InputMaybe<Scalars['Int']>;
  ts: Scalars['DateTime'];
  week: Scalars['Int'];
  winner?: InputMaybe<Scalars['Int']>;
};

export type GameCreateManyTeams_Games_HomeToteamsInputEnvelope = {
  data: Array<GameCreateManyTeams_Games_HomeToteamsInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type GameCreateNestedManyWithoutTeams_Games_AwayToteamsInput = {
  connect?: InputMaybe<Array<GameWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GameCreateOrConnectWithoutTeams_Games_AwayToteamsInput>>;
  create?: InputMaybe<Array<GameCreateWithoutTeams_Games_AwayToteamsInput>>;
  createMany?: InputMaybe<GameCreateManyTeams_Games_AwayToteamsInputEnvelope>;
};

export type GameCreateNestedManyWithoutTeams_Games_HomeToteamsInput = {
  connect?: InputMaybe<Array<GameWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GameCreateOrConnectWithoutTeams_Games_HomeToteamsInput>>;
  create?: InputMaybe<Array<GameCreateWithoutTeams_Games_HomeToteamsInput>>;
  createMany?: InputMaybe<GameCreateManyTeams_Games_HomeToteamsInputEnvelope>;
};

export type GameCreateNestedOneWithoutPicksInput = {
  connect?: InputMaybe<GameWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GameCreateOrConnectWithoutPicksInput>;
  create?: InputMaybe<GameCreateWithoutPicksInput>;
};

export type GameCreateOrConnectWithoutPicksInput = {
  create: GameCreateWithoutPicksInput;
  where: GameWhereUniqueInput;
};

export type GameCreateOrConnectWithoutTeams_Games_AwayToteamsInput = {
  create: GameCreateWithoutTeams_Games_AwayToteamsInput;
  where: GameWhereUniqueInput;
};

export type GameCreateOrConnectWithoutTeams_Games_HomeToteamsInput = {
  create: GameCreateWithoutTeams_Games_HomeToteamsInput;
  where: GameWhereUniqueInput;
};

export type GameCreateWithoutPicksInput = {
  awayrecord?: InputMaybe<Scalars['String']>;
  awayscore?: InputMaybe<Scalars['Int']>;
  current_record?: InputMaybe<Scalars['String']>;
  done?: InputMaybe<Scalars['Boolean']>;
  homerecord?: InputMaybe<Scalars['String']>;
  homescore?: InputMaybe<Scalars['Int']>;
  international?: InputMaybe<Scalars['Boolean']>;
  is_tiebreaker?: InputMaybe<Scalars['Boolean']>;
  msf_id?: InputMaybe<Scalars['Int']>;
  season: Scalars['Int'];
  seconds?: InputMaybe<Scalars['Int']>;
  teams_games_awayToteams: TeamCreateNestedOneWithoutGames_Games_AwayToteamsInput;
  teams_games_homeToteams: TeamCreateNestedOneWithoutGames_Games_HomeToteamsInput;
  ts: Scalars['DateTime'];
  week: Scalars['Int'];
  winner?: InputMaybe<Scalars['Int']>;
};

export type GameCreateWithoutTeams_Games_AwayToteamsInput = {
  awayrecord?: InputMaybe<Scalars['String']>;
  awayscore?: InputMaybe<Scalars['Int']>;
  current_record?: InputMaybe<Scalars['String']>;
  done?: InputMaybe<Scalars['Boolean']>;
  homerecord?: InputMaybe<Scalars['String']>;
  homescore?: InputMaybe<Scalars['Int']>;
  international?: InputMaybe<Scalars['Boolean']>;
  is_tiebreaker?: InputMaybe<Scalars['Boolean']>;
  msf_id?: InputMaybe<Scalars['Int']>;
  picks?: InputMaybe<PickCreateNestedManyWithoutGamesInput>;
  season: Scalars['Int'];
  seconds?: InputMaybe<Scalars['Int']>;
  teams_games_homeToteams: TeamCreateNestedOneWithoutGames_Games_HomeToteamsInput;
  ts: Scalars['DateTime'];
  week: Scalars['Int'];
  winner?: InputMaybe<Scalars['Int']>;
};

export type GameCreateWithoutTeams_Games_HomeToteamsInput = {
  awayrecord?: InputMaybe<Scalars['String']>;
  awayscore?: InputMaybe<Scalars['Int']>;
  current_record?: InputMaybe<Scalars['String']>;
  done?: InputMaybe<Scalars['Boolean']>;
  homerecord?: InputMaybe<Scalars['String']>;
  homescore?: InputMaybe<Scalars['Int']>;
  international?: InputMaybe<Scalars['Boolean']>;
  is_tiebreaker?: InputMaybe<Scalars['Boolean']>;
  msf_id?: InputMaybe<Scalars['Int']>;
  picks?: InputMaybe<PickCreateNestedManyWithoutGamesInput>;
  season: Scalars['Int'];
  seconds?: InputMaybe<Scalars['Int']>;
  teams_games_awayToteams: TeamCreateNestedOneWithoutGames_Games_AwayToteamsInput;
  ts: Scalars['DateTime'];
  week: Scalars['Int'];
  winner?: InputMaybe<Scalars['Int']>;
};

export type GameGroupBy = {
  __typename?: 'GameGroupBy';
  _avg?: Maybe<GameAvgAggregate>;
  _count?: Maybe<GameCountAggregate>;
  _max?: Maybe<GameMaxAggregate>;
  _min?: Maybe<GameMinAggregate>;
  _sum?: Maybe<GameSumAggregate>;
  away: Scalars['Int'];
  awayrecord?: Maybe<Scalars['String']>;
  awayscore?: Maybe<Scalars['Int']>;
  current_record?: Maybe<Scalars['String']>;
  done?: Maybe<Scalars['Boolean']>;
  gid: Scalars['Int'];
  home: Scalars['Int'];
  homerecord?: Maybe<Scalars['String']>;
  homescore?: Maybe<Scalars['Int']>;
  international?: Maybe<Scalars['Boolean']>;
  is_tiebreaker?: Maybe<Scalars['Boolean']>;
  msf_id?: Maybe<Scalars['Int']>;
  season: Scalars['Int'];
  seconds?: Maybe<Scalars['Int']>;
  ts: Scalars['DateTime'];
  week: Scalars['Int'];
  winner?: Maybe<Scalars['Int']>;
};

export type GameListRelationFilter = {
  every?: InputMaybe<GameWhereInput>;
  none?: InputMaybe<GameWhereInput>;
  some?: InputMaybe<GameWhereInput>;
};

export type GameLive = {
  __typename?: 'GameLive';
  currentQuarter?: Maybe<Scalars['Int']>;
  currentQuarterSecondsRemaining?: Maybe<Scalars['Int']>;
  playedStatus?: Maybe<MsfGamePlayedStatus>;
};

export type GameMaxAggregate = {
  __typename?: 'GameMaxAggregate';
  away?: Maybe<Scalars['Int']>;
  awayrecord?: Maybe<Scalars['String']>;
  awayscore?: Maybe<Scalars['Int']>;
  current_record?: Maybe<Scalars['String']>;
  done?: Maybe<Scalars['Boolean']>;
  gid?: Maybe<Scalars['Int']>;
  home?: Maybe<Scalars['Int']>;
  homerecord?: Maybe<Scalars['String']>;
  homescore?: Maybe<Scalars['Int']>;
  international?: Maybe<Scalars['Boolean']>;
  is_tiebreaker?: Maybe<Scalars['Boolean']>;
  msf_id?: Maybe<Scalars['Int']>;
  season?: Maybe<Scalars['Int']>;
  seconds?: Maybe<Scalars['Int']>;
  ts?: Maybe<Scalars['DateTime']>;
  week?: Maybe<Scalars['Int']>;
  winner?: Maybe<Scalars['Int']>;
};

export type GameMaxOrderByAggregateInput = {
  away?: InputMaybe<SortOrder>;
  awayrecord?: InputMaybe<SortOrder>;
  awayscore?: InputMaybe<SortOrder>;
  current_record?: InputMaybe<SortOrder>;
  done?: InputMaybe<SortOrder>;
  gid?: InputMaybe<SortOrder>;
  home?: InputMaybe<SortOrder>;
  homerecord?: InputMaybe<SortOrder>;
  homescore?: InputMaybe<SortOrder>;
  international?: InputMaybe<SortOrder>;
  is_tiebreaker?: InputMaybe<SortOrder>;
  msf_id?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
  seconds?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
  winner?: InputMaybe<SortOrder>;
};

export type GameMinAggregate = {
  __typename?: 'GameMinAggregate';
  away?: Maybe<Scalars['Int']>;
  awayrecord?: Maybe<Scalars['String']>;
  awayscore?: Maybe<Scalars['Int']>;
  current_record?: Maybe<Scalars['String']>;
  done?: Maybe<Scalars['Boolean']>;
  gid?: Maybe<Scalars['Int']>;
  home?: Maybe<Scalars['Int']>;
  homerecord?: Maybe<Scalars['String']>;
  homescore?: Maybe<Scalars['Int']>;
  international?: Maybe<Scalars['Boolean']>;
  is_tiebreaker?: Maybe<Scalars['Boolean']>;
  msf_id?: Maybe<Scalars['Int']>;
  season?: Maybe<Scalars['Int']>;
  seconds?: Maybe<Scalars['Int']>;
  ts?: Maybe<Scalars['DateTime']>;
  week?: Maybe<Scalars['Int']>;
  winner?: Maybe<Scalars['Int']>;
};

export type GameMinOrderByAggregateInput = {
  away?: InputMaybe<SortOrder>;
  awayrecord?: InputMaybe<SortOrder>;
  awayscore?: InputMaybe<SortOrder>;
  current_record?: InputMaybe<SortOrder>;
  done?: InputMaybe<SortOrder>;
  gid?: InputMaybe<SortOrder>;
  home?: InputMaybe<SortOrder>;
  homerecord?: InputMaybe<SortOrder>;
  homescore?: InputMaybe<SortOrder>;
  international?: InputMaybe<SortOrder>;
  is_tiebreaker?: InputMaybe<SortOrder>;
  msf_id?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
  seconds?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
  winner?: InputMaybe<SortOrder>;
};

export type GameOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type GameOrderByWithAggregationInput = {
  _avg?: InputMaybe<GameAvgOrderByAggregateInput>;
  _count?: InputMaybe<GameCountOrderByAggregateInput>;
  _max?: InputMaybe<GameMaxOrderByAggregateInput>;
  _min?: InputMaybe<GameMinOrderByAggregateInput>;
  _sum?: InputMaybe<GameSumOrderByAggregateInput>;
  away?: InputMaybe<SortOrder>;
  awayrecord?: InputMaybe<SortOrder>;
  awayscore?: InputMaybe<SortOrder>;
  current_record?: InputMaybe<SortOrder>;
  done?: InputMaybe<SortOrder>;
  gid?: InputMaybe<SortOrder>;
  home?: InputMaybe<SortOrder>;
  homerecord?: InputMaybe<SortOrder>;
  homescore?: InputMaybe<SortOrder>;
  international?: InputMaybe<SortOrder>;
  is_tiebreaker?: InputMaybe<SortOrder>;
  msf_id?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
  seconds?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
  winner?: InputMaybe<SortOrder>;
};

export type GameOrderByWithRelationInput = {
  away?: InputMaybe<SortOrder>;
  awayrecord?: InputMaybe<SortOrder>;
  awayscore?: InputMaybe<SortOrder>;
  current_record?: InputMaybe<SortOrder>;
  done?: InputMaybe<SortOrder>;
  gid?: InputMaybe<SortOrder>;
  home?: InputMaybe<SortOrder>;
  homerecord?: InputMaybe<SortOrder>;
  homescore?: InputMaybe<SortOrder>;
  international?: InputMaybe<SortOrder>;
  is_tiebreaker?: InputMaybe<SortOrder>;
  msf_id?: InputMaybe<SortOrder>;
  picks?: InputMaybe<PickOrderByRelationAggregateInput>;
  season?: InputMaybe<SortOrder>;
  seconds?: InputMaybe<SortOrder>;
  teams_games_awayToteams?: InputMaybe<TeamOrderByWithRelationInput>;
  teams_games_homeToteams?: InputMaybe<TeamOrderByWithRelationInput>;
  ts?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
  winner?: InputMaybe<SortOrder>;
};

export type GamePick = {
  game_id: Scalars['Int'];
  is_random: Scalars['Boolean'];
  score?: InputMaybe<Scalars['Int']>;
  winner: Scalars['Int'];
};

export type GameRelationFilter = {
  is?: InputMaybe<GameWhereInput>;
  isNot?: InputMaybe<GameWhereInput>;
};

export enum GameScalarFieldEnum {
  Away = 'away',
  Awayrecord = 'awayrecord',
  Awayscore = 'awayscore',
  CurrentRecord = 'current_record',
  Done = 'done',
  Gid = 'gid',
  Home = 'home',
  Homerecord = 'homerecord',
  Homescore = 'homescore',
  International = 'international',
  IsTiebreaker = 'is_tiebreaker',
  MsfId = 'msf_id',
  Season = 'season',
  Seconds = 'seconds',
  Ts = 'ts',
  Week = 'week',
  Winner = 'winner'
}

export type GameScalarWhereInput = {
  AND?: InputMaybe<Array<GameScalarWhereInput>>;
  NOT?: InputMaybe<Array<GameScalarWhereInput>>;
  OR?: InputMaybe<Array<GameScalarWhereInput>>;
  away?: InputMaybe<IntFilter>;
  awayrecord?: InputMaybe<StringNullableFilter>;
  awayscore?: InputMaybe<IntNullableFilter>;
  current_record?: InputMaybe<StringNullableFilter>;
  done?: InputMaybe<BoolNullableFilter>;
  gid?: InputMaybe<IntFilter>;
  home?: InputMaybe<IntFilter>;
  homerecord?: InputMaybe<StringNullableFilter>;
  homescore?: InputMaybe<IntNullableFilter>;
  international?: InputMaybe<BoolNullableFilter>;
  is_tiebreaker?: InputMaybe<BoolNullableFilter>;
  msf_id?: InputMaybe<IntNullableFilter>;
  season?: InputMaybe<IntFilter>;
  seconds?: InputMaybe<IntNullableFilter>;
  ts?: InputMaybe<DateTimeFilter>;
  week?: InputMaybe<IntFilter>;
  winner?: InputMaybe<IntNullableFilter>;
};

export type GameScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<GameScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<GameScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<GameScalarWhereWithAggregatesInput>>;
  away?: InputMaybe<IntWithAggregatesFilter>;
  awayrecord?: InputMaybe<StringNullableWithAggregatesFilter>;
  awayscore?: InputMaybe<IntNullableWithAggregatesFilter>;
  current_record?: InputMaybe<StringNullableWithAggregatesFilter>;
  done?: InputMaybe<BoolNullableWithAggregatesFilter>;
  gid?: InputMaybe<IntWithAggregatesFilter>;
  home?: InputMaybe<IntWithAggregatesFilter>;
  homerecord?: InputMaybe<StringNullableWithAggregatesFilter>;
  homescore?: InputMaybe<IntNullableWithAggregatesFilter>;
  international?: InputMaybe<BoolNullableWithAggregatesFilter>;
  is_tiebreaker?: InputMaybe<BoolNullableWithAggregatesFilter>;
  msf_id?: InputMaybe<IntNullableWithAggregatesFilter>;
  season?: InputMaybe<IntWithAggregatesFilter>;
  seconds?: InputMaybe<IntNullableWithAggregatesFilter>;
  ts?: InputMaybe<DateTimeWithAggregatesFilter>;
  week?: InputMaybe<IntWithAggregatesFilter>;
  winner?: InputMaybe<IntNullableWithAggregatesFilter>;
};

export type GameSumAggregate = {
  __typename?: 'GameSumAggregate';
  away?: Maybe<Scalars['Int']>;
  awayscore?: Maybe<Scalars['Int']>;
  gid?: Maybe<Scalars['Int']>;
  home?: Maybe<Scalars['Int']>;
  homescore?: Maybe<Scalars['Int']>;
  msf_id?: Maybe<Scalars['Int']>;
  season?: Maybe<Scalars['Int']>;
  seconds?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
  winner?: Maybe<Scalars['Int']>;
};

export type GameSumOrderByAggregateInput = {
  away?: InputMaybe<SortOrder>;
  awayscore?: InputMaybe<SortOrder>;
  gid?: InputMaybe<SortOrder>;
  home?: InputMaybe<SortOrder>;
  homescore?: InputMaybe<SortOrder>;
  msf_id?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
  seconds?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
  winner?: InputMaybe<SortOrder>;
};

export type GameUpdateInput = {
  awayrecord?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  awayscore?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  current_record?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  done?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  homerecord?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  homescore?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  international?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  is_tiebreaker?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  msf_id?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  picks?: InputMaybe<PickUpdateManyWithoutGamesNestedInput>;
  season?: InputMaybe<IntFieldUpdateOperationsInput>;
  seconds?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  teams_games_awayToteams?: InputMaybe<TeamUpdateOneRequiredWithoutGames_Games_AwayToteamsNestedInput>;
  teams_games_homeToteams?: InputMaybe<TeamUpdateOneRequiredWithoutGames_Games_HomeToteamsNestedInput>;
  ts?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  week?: InputMaybe<IntFieldUpdateOperationsInput>;
  winner?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type GameUpdateManyMutationInput = {
  awayrecord?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  awayscore?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  current_record?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  done?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  homerecord?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  homescore?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  international?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  is_tiebreaker?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  msf_id?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  season?: InputMaybe<IntFieldUpdateOperationsInput>;
  seconds?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  ts?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  week?: InputMaybe<IntFieldUpdateOperationsInput>;
  winner?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type GameUpdateManyWithWhereWithoutTeams_Games_AwayToteamsInput = {
  data: GameUpdateManyMutationInput;
  where: GameScalarWhereInput;
};

export type GameUpdateManyWithWhereWithoutTeams_Games_HomeToteamsInput = {
  data: GameUpdateManyMutationInput;
  where: GameScalarWhereInput;
};

export type GameUpdateManyWithoutTeams_Games_AwayToteamsNestedInput = {
  connect?: InputMaybe<Array<GameWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GameCreateOrConnectWithoutTeams_Games_AwayToteamsInput>>;
  create?: InputMaybe<Array<GameCreateWithoutTeams_Games_AwayToteamsInput>>;
  createMany?: InputMaybe<GameCreateManyTeams_Games_AwayToteamsInputEnvelope>;
  delete?: InputMaybe<Array<GameWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<GameScalarWhereInput>>;
  disconnect?: InputMaybe<Array<GameWhereUniqueInput>>;
  set?: InputMaybe<Array<GameWhereUniqueInput>>;
  update?: InputMaybe<Array<GameUpdateWithWhereUniqueWithoutTeams_Games_AwayToteamsInput>>;
  updateMany?: InputMaybe<Array<GameUpdateManyWithWhereWithoutTeams_Games_AwayToteamsInput>>;
  upsert?: InputMaybe<Array<GameUpsertWithWhereUniqueWithoutTeams_Games_AwayToteamsInput>>;
};

export type GameUpdateManyWithoutTeams_Games_HomeToteamsNestedInput = {
  connect?: InputMaybe<Array<GameWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GameCreateOrConnectWithoutTeams_Games_HomeToteamsInput>>;
  create?: InputMaybe<Array<GameCreateWithoutTeams_Games_HomeToteamsInput>>;
  createMany?: InputMaybe<GameCreateManyTeams_Games_HomeToteamsInputEnvelope>;
  delete?: InputMaybe<Array<GameWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<GameScalarWhereInput>>;
  disconnect?: InputMaybe<Array<GameWhereUniqueInput>>;
  set?: InputMaybe<Array<GameWhereUniqueInput>>;
  update?: InputMaybe<Array<GameUpdateWithWhereUniqueWithoutTeams_Games_HomeToteamsInput>>;
  updateMany?: InputMaybe<Array<GameUpdateManyWithWhereWithoutTeams_Games_HomeToteamsInput>>;
  upsert?: InputMaybe<Array<GameUpsertWithWhereUniqueWithoutTeams_Games_HomeToteamsInput>>;
};

export type GameUpdateOneRequiredWithoutPicksNestedInput = {
  connect?: InputMaybe<GameWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GameCreateOrConnectWithoutPicksInput>;
  create?: InputMaybe<GameCreateWithoutPicksInput>;
  update?: InputMaybe<GameUpdateWithoutPicksInput>;
  upsert?: InputMaybe<GameUpsertWithoutPicksInput>;
};

export type GameUpdateWithWhereUniqueWithoutTeams_Games_AwayToteamsInput = {
  data: GameUpdateWithoutTeams_Games_AwayToteamsInput;
  where: GameWhereUniqueInput;
};

export type GameUpdateWithWhereUniqueWithoutTeams_Games_HomeToteamsInput = {
  data: GameUpdateWithoutTeams_Games_HomeToteamsInput;
  where: GameWhereUniqueInput;
};

export type GameUpdateWithoutPicksInput = {
  awayrecord?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  awayscore?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  current_record?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  done?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  homerecord?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  homescore?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  international?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  is_tiebreaker?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  msf_id?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  season?: InputMaybe<IntFieldUpdateOperationsInput>;
  seconds?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  teams_games_awayToteams?: InputMaybe<TeamUpdateOneRequiredWithoutGames_Games_AwayToteamsNestedInput>;
  teams_games_homeToteams?: InputMaybe<TeamUpdateOneRequiredWithoutGames_Games_HomeToteamsNestedInput>;
  ts?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  week?: InputMaybe<IntFieldUpdateOperationsInput>;
  winner?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type GameUpdateWithoutTeams_Games_AwayToteamsInput = {
  awayrecord?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  awayscore?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  current_record?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  done?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  homerecord?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  homescore?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  international?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  is_tiebreaker?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  msf_id?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  picks?: InputMaybe<PickUpdateManyWithoutGamesNestedInput>;
  season?: InputMaybe<IntFieldUpdateOperationsInput>;
  seconds?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  teams_games_homeToteams?: InputMaybe<TeamUpdateOneRequiredWithoutGames_Games_HomeToteamsNestedInput>;
  ts?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  week?: InputMaybe<IntFieldUpdateOperationsInput>;
  winner?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type GameUpdateWithoutTeams_Games_HomeToteamsInput = {
  awayrecord?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  awayscore?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  current_record?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  done?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  homerecord?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  homescore?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  international?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  is_tiebreaker?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  msf_id?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  picks?: InputMaybe<PickUpdateManyWithoutGamesNestedInput>;
  season?: InputMaybe<IntFieldUpdateOperationsInput>;
  seconds?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  teams_games_awayToteams?: InputMaybe<TeamUpdateOneRequiredWithoutGames_Games_AwayToteamsNestedInput>;
  ts?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  week?: InputMaybe<IntFieldUpdateOperationsInput>;
  winner?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type GameUpsertWithWhereUniqueWithoutTeams_Games_AwayToteamsInput = {
  create: GameCreateWithoutTeams_Games_AwayToteamsInput;
  update: GameUpdateWithoutTeams_Games_AwayToteamsInput;
  where: GameWhereUniqueInput;
};

export type GameUpsertWithWhereUniqueWithoutTeams_Games_HomeToteamsInput = {
  create: GameCreateWithoutTeams_Games_HomeToteamsInput;
  update: GameUpdateWithoutTeams_Games_HomeToteamsInput;
  where: GameWhereUniqueInput;
};

export type GameUpsertWithoutPicksInput = {
  create: GameCreateWithoutPicksInput;
  update: GameUpdateWithoutPicksInput;
};

export type GameWhereInput = {
  AND?: InputMaybe<Array<GameWhereInput>>;
  NOT?: InputMaybe<Array<GameWhereInput>>;
  OR?: InputMaybe<Array<GameWhereInput>>;
  away?: InputMaybe<IntFilter>;
  awayrecord?: InputMaybe<StringNullableFilter>;
  awayscore?: InputMaybe<IntNullableFilter>;
  current_record?: InputMaybe<StringNullableFilter>;
  done?: InputMaybe<BoolNullableFilter>;
  gid?: InputMaybe<IntFilter>;
  home?: InputMaybe<IntFilter>;
  homerecord?: InputMaybe<StringNullableFilter>;
  homescore?: InputMaybe<IntNullableFilter>;
  international?: InputMaybe<BoolNullableFilter>;
  is_tiebreaker?: InputMaybe<BoolNullableFilter>;
  msf_id?: InputMaybe<IntNullableFilter>;
  picks?: InputMaybe<PickListRelationFilter>;
  season?: InputMaybe<IntFilter>;
  seconds?: InputMaybe<IntNullableFilter>;
  teams_games_awayToteams?: InputMaybe<TeamRelationFilter>;
  teams_games_homeToteams?: InputMaybe<TeamRelationFilter>;
  ts?: InputMaybe<DateTimeFilter>;
  week?: InputMaybe<IntFilter>;
  winner?: InputMaybe<IntNullableFilter>;
};

export type GameWhereUniqueInput = {
  gid?: InputMaybe<Scalars['Int']>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export enum LatePolicy {
  AllowLateWholeWeek = 'allow_late_whole_week',
  CloseAtFirstGameStart = 'close_at_first_game_start'
}

export type League = {
  __typename?: 'League';
  WeekWinners: Array<WeekWinners>;
  _count?: Maybe<LeagueCount>;
  aggregateLeagueMember: AggregateResponse;
  created_by_user_id: Scalars['Int'];
  created_time: Scalars['DateTimeBetterSerialization'];
  games: Array<Game>;
  id: Scalars['ID'];
  late_policy?: Maybe<LatePolicy>;
  league_id: Scalars['Int'];
  leaguemembers: Array<LeagueMember>;
  name: Scalars['String'];
  people: User;
  pick_policy?: Maybe<PickPolicy>;
  reminder_policy?: Maybe<ReminderPolicy>;
  scoring_type?: Maybe<ScoringType>;
  season: Scalars['Int'];
  share_code?: Maybe<Scalars['String']>;
  status: LeagueStatus;
  superbowl_competition?: Maybe<Scalars['Boolean']>;
};


export type LeagueWeekWinnersArgs = {
  cursor?: InputMaybe<WeekWinnersWhereUniqueInput>;
  distinct?: InputMaybe<Array<WeekWinnersScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<WeekWinnersOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WeekWinnersWhereInput>;
};


export type LeagueAggregateLeagueMemberArgs = {
  where?: InputMaybe<LeagueMemberWhereInput>;
};


export type LeagueGamesArgs = {
  where?: InputMaybe<GameWhereInput>;
};


export type LeagueLeaguemembersArgs = {
  cursor?: InputMaybe<LeagueMemberWhereUniqueInput>;
  distinct?: InputMaybe<Array<LeagueMemberScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LeagueMemberOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LeagueMemberWhereInput>;
};

export type LeagueAvgAggregate = {
  __typename?: 'LeagueAvgAggregate';
  created_by_user_id?: Maybe<Scalars['Float']>;
  league_id?: Maybe<Scalars['Float']>;
  season?: Maybe<Scalars['Float']>;
};

export type LeagueAvgOrderByAggregateInput = {
  created_by_user_id?: InputMaybe<SortOrder>;
  league_id?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
};

export type LeagueCount = {
  __typename?: 'LeagueCount';
  WeekWinners: Scalars['Int'];
  leaguemembers: Scalars['Int'];
};

export type LeagueCountAggregate = {
  __typename?: 'LeagueCountAggregate';
  _all: Scalars['Int'];
  created_by_user_id: Scalars['Int'];
  created_time: Scalars['Int'];
  late_policy: Scalars['Int'];
  league_id: Scalars['Int'];
  name: Scalars['Int'];
  pick_policy: Scalars['Int'];
  reminder_policy: Scalars['Int'];
  scoring_type: Scalars['Int'];
  season: Scalars['Int'];
  share_code: Scalars['Int'];
  superbowl_competition: Scalars['Int'];
};

export type LeagueCountOrderByAggregateInput = {
  created_by_user_id?: InputMaybe<SortOrder>;
  created_time?: InputMaybe<SortOrder>;
  late_policy?: InputMaybe<SortOrder>;
  league_id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  pick_policy?: InputMaybe<SortOrder>;
  reminder_policy?: InputMaybe<SortOrder>;
  scoring_type?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
  share_code?: InputMaybe<SortOrder>;
  superbowl_competition?: InputMaybe<SortOrder>;
};

export type LeagueCreateInput = {
  WeekWinners?: InputMaybe<WeekWinnersCreateNestedManyWithoutLeagueInput>;
  created_time?: InputMaybe<Scalars['DateTime']>;
  late_policy?: InputMaybe<LatePolicy>;
  leaguemembers?: InputMaybe<LeagueMemberCreateNestedManyWithoutLeaguesInput>;
  name: Scalars['String'];
  people: UserCreateNestedOneWithoutLeaguesInput;
  pick_policy?: InputMaybe<PickPolicy>;
  reminder_policy?: InputMaybe<ReminderPolicy>;
  scoring_type?: InputMaybe<ScoringType>;
  season: Scalars['Int'];
  share_code?: InputMaybe<Scalars['String']>;
  superbowl_competition?: InputMaybe<Scalars['Boolean']>;
};

export type LeagueCreateManyInput = {
  created_by_user_id: Scalars['Int'];
  created_time?: InputMaybe<Scalars['DateTime']>;
  late_policy?: InputMaybe<LatePolicy>;
  league_id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  pick_policy?: InputMaybe<PickPolicy>;
  reminder_policy?: InputMaybe<ReminderPolicy>;
  scoring_type?: InputMaybe<ScoringType>;
  season: Scalars['Int'];
  share_code?: InputMaybe<Scalars['String']>;
  superbowl_competition?: InputMaybe<Scalars['Boolean']>;
};

export type LeagueCreateManyPeopleInput = {
  created_time?: InputMaybe<Scalars['DateTime']>;
  late_policy?: InputMaybe<LatePolicy>;
  league_id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  pick_policy?: InputMaybe<PickPolicy>;
  reminder_policy?: InputMaybe<ReminderPolicy>;
  scoring_type?: InputMaybe<ScoringType>;
  season: Scalars['Int'];
  share_code?: InputMaybe<Scalars['String']>;
  superbowl_competition?: InputMaybe<Scalars['Boolean']>;
};

export type LeagueCreateManyPeopleInputEnvelope = {
  data: Array<LeagueCreateManyPeopleInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type LeagueCreateNestedManyWithoutPeopleInput = {
  connect?: InputMaybe<Array<LeagueWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LeagueCreateOrConnectWithoutPeopleInput>>;
  create?: InputMaybe<Array<LeagueCreateWithoutPeopleInput>>;
  createMany?: InputMaybe<LeagueCreateManyPeopleInputEnvelope>;
};

export type LeagueCreateNestedOneWithoutLeaguemembersInput = {
  connect?: InputMaybe<LeagueWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LeagueCreateOrConnectWithoutLeaguemembersInput>;
  create?: InputMaybe<LeagueCreateWithoutLeaguemembersInput>;
};

export type LeagueCreateNestedOneWithoutWeekWinnersInput = {
  connect?: InputMaybe<LeagueWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LeagueCreateOrConnectWithoutWeekWinnersInput>;
  create?: InputMaybe<LeagueCreateWithoutWeekWinnersInput>;
};

export type LeagueCreateOrConnectWithoutLeaguemembersInput = {
  create: LeagueCreateWithoutLeaguemembersInput;
  where: LeagueWhereUniqueInput;
};

export type LeagueCreateOrConnectWithoutPeopleInput = {
  create: LeagueCreateWithoutPeopleInput;
  where: LeagueWhereUniqueInput;
};

export type LeagueCreateOrConnectWithoutWeekWinnersInput = {
  create: LeagueCreateWithoutWeekWinnersInput;
  where: LeagueWhereUniqueInput;
};

export type LeagueCreateWithoutLeaguemembersInput = {
  WeekWinners?: InputMaybe<WeekWinnersCreateNestedManyWithoutLeagueInput>;
  created_time?: InputMaybe<Scalars['DateTime']>;
  late_policy?: InputMaybe<LatePolicy>;
  name: Scalars['String'];
  people: UserCreateNestedOneWithoutLeaguesInput;
  pick_policy?: InputMaybe<PickPolicy>;
  reminder_policy?: InputMaybe<ReminderPolicy>;
  scoring_type?: InputMaybe<ScoringType>;
  season: Scalars['Int'];
  share_code?: InputMaybe<Scalars['String']>;
  superbowl_competition?: InputMaybe<Scalars['Boolean']>;
};

export type LeagueCreateWithoutPeopleInput = {
  WeekWinners?: InputMaybe<WeekWinnersCreateNestedManyWithoutLeagueInput>;
  created_time?: InputMaybe<Scalars['DateTime']>;
  late_policy?: InputMaybe<LatePolicy>;
  leaguemembers?: InputMaybe<LeagueMemberCreateNestedManyWithoutLeaguesInput>;
  name: Scalars['String'];
  pick_policy?: InputMaybe<PickPolicy>;
  reminder_policy?: InputMaybe<ReminderPolicy>;
  scoring_type?: InputMaybe<ScoringType>;
  season: Scalars['Int'];
  share_code?: InputMaybe<Scalars['String']>;
  superbowl_competition?: InputMaybe<Scalars['Boolean']>;
};

export type LeagueCreateWithoutWeekWinnersInput = {
  created_time?: InputMaybe<Scalars['DateTime']>;
  late_policy?: InputMaybe<LatePolicy>;
  leaguemembers?: InputMaybe<LeagueMemberCreateNestedManyWithoutLeaguesInput>;
  name: Scalars['String'];
  people: UserCreateNestedOneWithoutLeaguesInput;
  pick_policy?: InputMaybe<PickPolicy>;
  reminder_policy?: InputMaybe<ReminderPolicy>;
  scoring_type?: InputMaybe<ScoringType>;
  season: Scalars['Int'];
  share_code?: InputMaybe<Scalars['String']>;
  superbowl_competition?: InputMaybe<Scalars['Boolean']>;
};

export type LeagueGroupBy = {
  __typename?: 'LeagueGroupBy';
  _avg?: Maybe<LeagueAvgAggregate>;
  _count?: Maybe<LeagueCountAggregate>;
  _max?: Maybe<LeagueMaxAggregate>;
  _min?: Maybe<LeagueMinAggregate>;
  _sum?: Maybe<LeagueSumAggregate>;
  created_by_user_id: Scalars['Int'];
  created_time: Scalars['DateTime'];
  late_policy?: Maybe<LatePolicy>;
  league_id: Scalars['Int'];
  name: Scalars['String'];
  pick_policy?: Maybe<PickPolicy>;
  reminder_policy?: Maybe<ReminderPolicy>;
  scoring_type?: Maybe<ScoringType>;
  season: Scalars['Int'];
  share_code?: Maybe<Scalars['String']>;
  superbowl_competition?: Maybe<Scalars['Boolean']>;
};

export type LeagueListRelationFilter = {
  every?: InputMaybe<LeagueWhereInput>;
  none?: InputMaybe<LeagueWhereInput>;
  some?: InputMaybe<LeagueWhereInput>;
};

export type LeagueMaxAggregate = {
  __typename?: 'LeagueMaxAggregate';
  created_by_user_id?: Maybe<Scalars['Int']>;
  created_time?: Maybe<Scalars['DateTime']>;
  late_policy?: Maybe<LatePolicy>;
  league_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  pick_policy?: Maybe<PickPolicy>;
  reminder_policy?: Maybe<ReminderPolicy>;
  scoring_type?: Maybe<ScoringType>;
  season?: Maybe<Scalars['Int']>;
  share_code?: Maybe<Scalars['String']>;
  superbowl_competition?: Maybe<Scalars['Boolean']>;
};

export type LeagueMaxOrderByAggregateInput = {
  created_by_user_id?: InputMaybe<SortOrder>;
  created_time?: InputMaybe<SortOrder>;
  late_policy?: InputMaybe<SortOrder>;
  league_id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  pick_policy?: InputMaybe<SortOrder>;
  reminder_policy?: InputMaybe<SortOrder>;
  scoring_type?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
  share_code?: InputMaybe<SortOrder>;
  superbowl_competition?: InputMaybe<SortOrder>;
};

export type LeagueMember = {
  __typename?: 'LeagueMember';
  WeekWinners: Array<WeekWinners>;
  _count?: Maybe<LeagueMemberCount>;
  aggregatePick: AggregateResponse;
  hasPickedNextGame: Scalars['Boolean'];
  id: Scalars['ID'];
  league_id: Scalars['Int'];
  leagues: League;
  membership_id: Scalars['Int'];
  nextGame?: Maybe<Game>;
  people: User;
  picks: Array<Pick>;
  role?: Maybe<MemberRole>;
  superbowl: Array<Superbowl>;
  ts: Scalars['DateTimeBetterSerialization'];
  user_id: Scalars['Int'];
};


export type LeagueMemberWeekWinnersArgs = {
  cursor?: InputMaybe<WeekWinnersWhereUniqueInput>;
  distinct?: InputMaybe<Array<WeekWinnersScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<WeekWinnersOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WeekWinnersWhereInput>;
};


export type LeagueMemberAggregatePickArgs = {
  where?: InputMaybe<PickWhereInput>;
};


export type LeagueMemberPicksArgs = {
  cursor?: InputMaybe<PickWhereUniqueInput>;
  distinct?: InputMaybe<Array<PickScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PickOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PickWhereInput>;
};


export type LeagueMemberSuperbowlArgs = {
  cursor?: InputMaybe<SuperbowlWhereUniqueInput>;
  distinct?: InputMaybe<Array<SuperbowlScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SuperbowlOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SuperbowlWhereInput>;
};

export type LeagueMemberAvgAggregate = {
  __typename?: 'LeagueMemberAvgAggregate';
  league_id?: Maybe<Scalars['Float']>;
  membership_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type LeagueMemberAvgOrderByAggregateInput = {
  league_id?: InputMaybe<SortOrder>;
  membership_id?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type LeagueMemberCount = {
  __typename?: 'LeagueMemberCount';
  WeekWinners: Scalars['Int'];
  picks: Scalars['Int'];
  superbowl: Scalars['Int'];
};

export type LeagueMemberCountAggregate = {
  __typename?: 'LeagueMemberCountAggregate';
  _all: Scalars['Int'];
  league_id: Scalars['Int'];
  membership_id: Scalars['Int'];
  role: Scalars['Int'];
  ts: Scalars['Int'];
  user_id: Scalars['Int'];
};

export type LeagueMemberCountOrderByAggregateInput = {
  league_id?: InputMaybe<SortOrder>;
  membership_id?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type LeagueMemberCreateInput = {
  WeekWinners?: InputMaybe<WeekWinnersCreateNestedManyWithoutMemberInput>;
  leagues: LeagueCreateNestedOneWithoutLeaguemembersInput;
  people: UserCreateNestedOneWithoutLeaguemembersInput;
  picks?: InputMaybe<PickCreateNestedManyWithoutLeaguemembersInput>;
  role?: InputMaybe<MemberRole>;
  superbowl?: InputMaybe<SuperbowlCreateNestedManyWithoutLeaguemembersInput>;
  ts?: InputMaybe<Scalars['DateTime']>;
};

export type LeagueMemberCreateManyInput = {
  league_id: Scalars['Int'];
  membership_id?: InputMaybe<Scalars['Int']>;
  role?: InputMaybe<MemberRole>;
  ts?: InputMaybe<Scalars['DateTime']>;
  user_id: Scalars['Int'];
};

export type LeagueMemberCreateManyLeaguesInput = {
  membership_id?: InputMaybe<Scalars['Int']>;
  role?: InputMaybe<MemberRole>;
  ts?: InputMaybe<Scalars['DateTime']>;
  user_id: Scalars['Int'];
};

export type LeagueMemberCreateManyLeaguesInputEnvelope = {
  data: Array<LeagueMemberCreateManyLeaguesInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type LeagueMemberCreateManyPeopleInput = {
  league_id: Scalars['Int'];
  membership_id?: InputMaybe<Scalars['Int']>;
  role?: InputMaybe<MemberRole>;
  ts?: InputMaybe<Scalars['DateTime']>;
};

export type LeagueMemberCreateManyPeopleInputEnvelope = {
  data: Array<LeagueMemberCreateManyPeopleInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type LeagueMemberCreateNestedManyWithoutLeaguesInput = {
  connect?: InputMaybe<Array<LeagueMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LeagueMemberCreateOrConnectWithoutLeaguesInput>>;
  create?: InputMaybe<Array<LeagueMemberCreateWithoutLeaguesInput>>;
  createMany?: InputMaybe<LeagueMemberCreateManyLeaguesInputEnvelope>;
};

export type LeagueMemberCreateNestedManyWithoutPeopleInput = {
  connect?: InputMaybe<Array<LeagueMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LeagueMemberCreateOrConnectWithoutPeopleInput>>;
  create?: InputMaybe<Array<LeagueMemberCreateWithoutPeopleInput>>;
  createMany?: InputMaybe<LeagueMemberCreateManyPeopleInputEnvelope>;
};

export type LeagueMemberCreateNestedOneWithoutPicksInput = {
  connect?: InputMaybe<LeagueMemberWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LeagueMemberCreateOrConnectWithoutPicksInput>;
  create?: InputMaybe<LeagueMemberCreateWithoutPicksInput>;
};

export type LeagueMemberCreateNestedOneWithoutSuperbowlInput = {
  connect?: InputMaybe<LeagueMemberWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LeagueMemberCreateOrConnectWithoutSuperbowlInput>;
  create?: InputMaybe<LeagueMemberCreateWithoutSuperbowlInput>;
};

export type LeagueMemberCreateNestedOneWithoutWeekWinnersInput = {
  connect?: InputMaybe<LeagueMemberWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LeagueMemberCreateOrConnectWithoutWeekWinnersInput>;
  create?: InputMaybe<LeagueMemberCreateWithoutWeekWinnersInput>;
};

export type LeagueMemberCreateOrConnectWithoutLeaguesInput = {
  create: LeagueMemberCreateWithoutLeaguesInput;
  where: LeagueMemberWhereUniqueInput;
};

export type LeagueMemberCreateOrConnectWithoutPeopleInput = {
  create: LeagueMemberCreateWithoutPeopleInput;
  where: LeagueMemberWhereUniqueInput;
};

export type LeagueMemberCreateOrConnectWithoutPicksInput = {
  create: LeagueMemberCreateWithoutPicksInput;
  where: LeagueMemberWhereUniqueInput;
};

export type LeagueMemberCreateOrConnectWithoutSuperbowlInput = {
  create: LeagueMemberCreateWithoutSuperbowlInput;
  where: LeagueMemberWhereUniqueInput;
};

export type LeagueMemberCreateOrConnectWithoutWeekWinnersInput = {
  create: LeagueMemberCreateWithoutWeekWinnersInput;
  where: LeagueMemberWhereUniqueInput;
};

export type LeagueMemberCreateWithoutLeaguesInput = {
  WeekWinners?: InputMaybe<WeekWinnersCreateNestedManyWithoutMemberInput>;
  people: UserCreateNestedOneWithoutLeaguemembersInput;
  picks?: InputMaybe<PickCreateNestedManyWithoutLeaguemembersInput>;
  role?: InputMaybe<MemberRole>;
  superbowl?: InputMaybe<SuperbowlCreateNestedManyWithoutLeaguemembersInput>;
  ts?: InputMaybe<Scalars['DateTime']>;
};

export type LeagueMemberCreateWithoutPeopleInput = {
  WeekWinners?: InputMaybe<WeekWinnersCreateNestedManyWithoutMemberInput>;
  leagues: LeagueCreateNestedOneWithoutLeaguemembersInput;
  picks?: InputMaybe<PickCreateNestedManyWithoutLeaguemembersInput>;
  role?: InputMaybe<MemberRole>;
  superbowl?: InputMaybe<SuperbowlCreateNestedManyWithoutLeaguemembersInput>;
  ts?: InputMaybe<Scalars['DateTime']>;
};

export type LeagueMemberCreateWithoutPicksInput = {
  WeekWinners?: InputMaybe<WeekWinnersCreateNestedManyWithoutMemberInput>;
  leagues: LeagueCreateNestedOneWithoutLeaguemembersInput;
  people: UserCreateNestedOneWithoutLeaguemembersInput;
  role?: InputMaybe<MemberRole>;
  superbowl?: InputMaybe<SuperbowlCreateNestedManyWithoutLeaguemembersInput>;
  ts?: InputMaybe<Scalars['DateTime']>;
};

export type LeagueMemberCreateWithoutSuperbowlInput = {
  WeekWinners?: InputMaybe<WeekWinnersCreateNestedManyWithoutMemberInput>;
  leagues: LeagueCreateNestedOneWithoutLeaguemembersInput;
  people: UserCreateNestedOneWithoutLeaguemembersInput;
  picks?: InputMaybe<PickCreateNestedManyWithoutLeaguemembersInput>;
  role?: InputMaybe<MemberRole>;
  ts?: InputMaybe<Scalars['DateTime']>;
};

export type LeagueMemberCreateWithoutWeekWinnersInput = {
  leagues: LeagueCreateNestedOneWithoutLeaguemembersInput;
  people: UserCreateNestedOneWithoutLeaguemembersInput;
  picks?: InputMaybe<PickCreateNestedManyWithoutLeaguemembersInput>;
  role?: InputMaybe<MemberRole>;
  superbowl?: InputMaybe<SuperbowlCreateNestedManyWithoutLeaguemembersInput>;
  ts?: InputMaybe<Scalars['DateTime']>;
};

export type LeagueMemberGroupBy = {
  __typename?: 'LeagueMemberGroupBy';
  _avg?: Maybe<LeagueMemberAvgAggregate>;
  _count?: Maybe<LeagueMemberCountAggregate>;
  _max?: Maybe<LeagueMemberMaxAggregate>;
  _min?: Maybe<LeagueMemberMinAggregate>;
  _sum?: Maybe<LeagueMemberSumAggregate>;
  league_id: Scalars['Int'];
  membership_id: Scalars['Int'];
  role?: Maybe<MemberRole>;
  ts: Scalars['DateTime'];
  user_id: Scalars['Int'];
};

export type LeagueMemberListRelationFilter = {
  every?: InputMaybe<LeagueMemberWhereInput>;
  none?: InputMaybe<LeagueMemberWhereInput>;
  some?: InputMaybe<LeagueMemberWhereInput>;
};

export type LeagueMemberMaxAggregate = {
  __typename?: 'LeagueMemberMaxAggregate';
  league_id?: Maybe<Scalars['Int']>;
  membership_id?: Maybe<Scalars['Int']>;
  role?: Maybe<MemberRole>;
  ts?: Maybe<Scalars['DateTime']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type LeagueMemberMaxOrderByAggregateInput = {
  league_id?: InputMaybe<SortOrder>;
  membership_id?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type LeagueMemberMinAggregate = {
  __typename?: 'LeagueMemberMinAggregate';
  league_id?: Maybe<Scalars['Int']>;
  membership_id?: Maybe<Scalars['Int']>;
  role?: Maybe<MemberRole>;
  ts?: Maybe<Scalars['DateTime']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type LeagueMemberMinOrderByAggregateInput = {
  league_id?: InputMaybe<SortOrder>;
  membership_id?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type LeagueMemberOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type LeagueMemberOrderByWithAggregationInput = {
  _avg?: InputMaybe<LeagueMemberAvgOrderByAggregateInput>;
  _count?: InputMaybe<LeagueMemberCountOrderByAggregateInput>;
  _max?: InputMaybe<LeagueMemberMaxOrderByAggregateInput>;
  _min?: InputMaybe<LeagueMemberMinOrderByAggregateInput>;
  _sum?: InputMaybe<LeagueMemberSumOrderByAggregateInput>;
  league_id?: InputMaybe<SortOrder>;
  membership_id?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type LeagueMemberOrderByWithRelationInput = {
  WeekWinners?: InputMaybe<WeekWinnersOrderByRelationAggregateInput>;
  league_id?: InputMaybe<SortOrder>;
  leagues?: InputMaybe<LeagueOrderByWithRelationInput>;
  membership_id?: InputMaybe<SortOrder>;
  people?: InputMaybe<UserOrderByWithRelationInput>;
  picks?: InputMaybe<PickOrderByRelationAggregateInput>;
  role?: InputMaybe<SortOrder>;
  superbowl?: InputMaybe<SuperbowlOrderByRelationAggregateInput>;
  ts?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type LeagueMemberRelationFilter = {
  is?: InputMaybe<LeagueMemberWhereInput>;
  isNot?: InputMaybe<LeagueMemberWhereInput>;
};

export enum LeagueMemberScalarFieldEnum {
  LeagueId = 'league_id',
  MembershipId = 'membership_id',
  Role = 'role',
  Ts = 'ts',
  UserId = 'user_id'
}

export type LeagueMemberScalarWhereInput = {
  AND?: InputMaybe<Array<LeagueMemberScalarWhereInput>>;
  NOT?: InputMaybe<Array<LeagueMemberScalarWhereInput>>;
  OR?: InputMaybe<Array<LeagueMemberScalarWhereInput>>;
  league_id?: InputMaybe<IntFilter>;
  membership_id?: InputMaybe<IntFilter>;
  role?: InputMaybe<EnumMemberRoleNullableFilter>;
  ts?: InputMaybe<DateTimeFilter>;
  user_id?: InputMaybe<IntFilter>;
};

export type LeagueMemberScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<LeagueMemberScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<LeagueMemberScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<LeagueMemberScalarWhereWithAggregatesInput>>;
  league_id?: InputMaybe<IntWithAggregatesFilter>;
  membership_id?: InputMaybe<IntWithAggregatesFilter>;
  role?: InputMaybe<EnumMemberRoleNullableWithAggregatesFilter>;
  ts?: InputMaybe<DateTimeWithAggregatesFilter>;
  user_id?: InputMaybe<IntWithAggregatesFilter>;
};

export type LeagueMemberSumAggregate = {
  __typename?: 'LeagueMemberSumAggregate';
  league_id?: Maybe<Scalars['Int']>;
  membership_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type LeagueMemberSumOrderByAggregateInput = {
  league_id?: InputMaybe<SortOrder>;
  membership_id?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type LeagueMemberUpdateInput = {
  WeekWinners?: InputMaybe<WeekWinnersUpdateManyWithoutMemberNestedInput>;
  leagues?: InputMaybe<LeagueUpdateOneRequiredWithoutLeaguemembersNestedInput>;
  people?: InputMaybe<UserUpdateOneRequiredWithoutLeaguemembersNestedInput>;
  picks?: InputMaybe<PickUpdateManyWithoutLeaguemembersNestedInput>;
  role?: InputMaybe<NullableEnumMemberRoleFieldUpdateOperationsInput>;
  superbowl?: InputMaybe<SuperbowlUpdateManyWithoutLeaguemembersNestedInput>;
  ts?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LeagueMemberUpdateManyMutationInput = {
  role?: InputMaybe<NullableEnumMemberRoleFieldUpdateOperationsInput>;
  ts?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LeagueMemberUpdateManyWithWhereWithoutLeaguesInput = {
  data: LeagueMemberUpdateManyMutationInput;
  where: LeagueMemberScalarWhereInput;
};

export type LeagueMemberUpdateManyWithWhereWithoutPeopleInput = {
  data: LeagueMemberUpdateManyMutationInput;
  where: LeagueMemberScalarWhereInput;
};

export type LeagueMemberUpdateManyWithoutLeaguesNestedInput = {
  connect?: InputMaybe<Array<LeagueMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LeagueMemberCreateOrConnectWithoutLeaguesInput>>;
  create?: InputMaybe<Array<LeagueMemberCreateWithoutLeaguesInput>>;
  createMany?: InputMaybe<LeagueMemberCreateManyLeaguesInputEnvelope>;
  delete?: InputMaybe<Array<LeagueMemberWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<LeagueMemberScalarWhereInput>>;
  disconnect?: InputMaybe<Array<LeagueMemberWhereUniqueInput>>;
  set?: InputMaybe<Array<LeagueMemberWhereUniqueInput>>;
  update?: InputMaybe<Array<LeagueMemberUpdateWithWhereUniqueWithoutLeaguesInput>>;
  updateMany?: InputMaybe<Array<LeagueMemberUpdateManyWithWhereWithoutLeaguesInput>>;
  upsert?: InputMaybe<Array<LeagueMemberUpsertWithWhereUniqueWithoutLeaguesInput>>;
};

export type LeagueMemberUpdateManyWithoutPeopleNestedInput = {
  connect?: InputMaybe<Array<LeagueMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LeagueMemberCreateOrConnectWithoutPeopleInput>>;
  create?: InputMaybe<Array<LeagueMemberCreateWithoutPeopleInput>>;
  createMany?: InputMaybe<LeagueMemberCreateManyPeopleInputEnvelope>;
  delete?: InputMaybe<Array<LeagueMemberWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<LeagueMemberScalarWhereInput>>;
  disconnect?: InputMaybe<Array<LeagueMemberWhereUniqueInput>>;
  set?: InputMaybe<Array<LeagueMemberWhereUniqueInput>>;
  update?: InputMaybe<Array<LeagueMemberUpdateWithWhereUniqueWithoutPeopleInput>>;
  updateMany?: InputMaybe<Array<LeagueMemberUpdateManyWithWhereWithoutPeopleInput>>;
  upsert?: InputMaybe<Array<LeagueMemberUpsertWithWhereUniqueWithoutPeopleInput>>;
};

export type LeagueMemberUpdateOneRequiredWithoutWeekWinnersNestedInput = {
  connect?: InputMaybe<LeagueMemberWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LeagueMemberCreateOrConnectWithoutWeekWinnersInput>;
  create?: InputMaybe<LeagueMemberCreateWithoutWeekWinnersInput>;
  update?: InputMaybe<LeagueMemberUpdateWithoutWeekWinnersInput>;
  upsert?: InputMaybe<LeagueMemberUpsertWithoutWeekWinnersInput>;
};

export type LeagueMemberUpdateOneWithoutPicksNestedInput = {
  connect?: InputMaybe<LeagueMemberWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LeagueMemberCreateOrConnectWithoutPicksInput>;
  create?: InputMaybe<LeagueMemberCreateWithoutPicksInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<LeagueMemberUpdateWithoutPicksInput>;
  upsert?: InputMaybe<LeagueMemberUpsertWithoutPicksInput>;
};

export type LeagueMemberUpdateOneWithoutSuperbowlNestedInput = {
  connect?: InputMaybe<LeagueMemberWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LeagueMemberCreateOrConnectWithoutSuperbowlInput>;
  create?: InputMaybe<LeagueMemberCreateWithoutSuperbowlInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<LeagueMemberUpdateWithoutSuperbowlInput>;
  upsert?: InputMaybe<LeagueMemberUpsertWithoutSuperbowlInput>;
};

export type LeagueMemberUpdateWithWhereUniqueWithoutLeaguesInput = {
  data: LeagueMemberUpdateWithoutLeaguesInput;
  where: LeagueMemberWhereUniqueInput;
};

export type LeagueMemberUpdateWithWhereUniqueWithoutPeopleInput = {
  data: LeagueMemberUpdateWithoutPeopleInput;
  where: LeagueMemberWhereUniqueInput;
};

export type LeagueMemberUpdateWithoutLeaguesInput = {
  WeekWinners?: InputMaybe<WeekWinnersUpdateManyWithoutMemberNestedInput>;
  people?: InputMaybe<UserUpdateOneRequiredWithoutLeaguemembersNestedInput>;
  picks?: InputMaybe<PickUpdateManyWithoutLeaguemembersNestedInput>;
  role?: InputMaybe<NullableEnumMemberRoleFieldUpdateOperationsInput>;
  superbowl?: InputMaybe<SuperbowlUpdateManyWithoutLeaguemembersNestedInput>;
  ts?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LeagueMemberUpdateWithoutPeopleInput = {
  WeekWinners?: InputMaybe<WeekWinnersUpdateManyWithoutMemberNestedInput>;
  leagues?: InputMaybe<LeagueUpdateOneRequiredWithoutLeaguemembersNestedInput>;
  picks?: InputMaybe<PickUpdateManyWithoutLeaguemembersNestedInput>;
  role?: InputMaybe<NullableEnumMemberRoleFieldUpdateOperationsInput>;
  superbowl?: InputMaybe<SuperbowlUpdateManyWithoutLeaguemembersNestedInput>;
  ts?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LeagueMemberUpdateWithoutPicksInput = {
  WeekWinners?: InputMaybe<WeekWinnersUpdateManyWithoutMemberNestedInput>;
  leagues?: InputMaybe<LeagueUpdateOneRequiredWithoutLeaguemembersNestedInput>;
  people?: InputMaybe<UserUpdateOneRequiredWithoutLeaguemembersNestedInput>;
  role?: InputMaybe<NullableEnumMemberRoleFieldUpdateOperationsInput>;
  superbowl?: InputMaybe<SuperbowlUpdateManyWithoutLeaguemembersNestedInput>;
  ts?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LeagueMemberUpdateWithoutSuperbowlInput = {
  WeekWinners?: InputMaybe<WeekWinnersUpdateManyWithoutMemberNestedInput>;
  leagues?: InputMaybe<LeagueUpdateOneRequiredWithoutLeaguemembersNestedInput>;
  people?: InputMaybe<UserUpdateOneRequiredWithoutLeaguemembersNestedInput>;
  picks?: InputMaybe<PickUpdateManyWithoutLeaguemembersNestedInput>;
  role?: InputMaybe<NullableEnumMemberRoleFieldUpdateOperationsInput>;
  ts?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LeagueMemberUpdateWithoutWeekWinnersInput = {
  leagues?: InputMaybe<LeagueUpdateOneRequiredWithoutLeaguemembersNestedInput>;
  people?: InputMaybe<UserUpdateOneRequiredWithoutLeaguemembersNestedInput>;
  picks?: InputMaybe<PickUpdateManyWithoutLeaguemembersNestedInput>;
  role?: InputMaybe<NullableEnumMemberRoleFieldUpdateOperationsInput>;
  superbowl?: InputMaybe<SuperbowlUpdateManyWithoutLeaguemembersNestedInput>;
  ts?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LeagueMemberUpsertWithWhereUniqueWithoutLeaguesInput = {
  create: LeagueMemberCreateWithoutLeaguesInput;
  update: LeagueMemberUpdateWithoutLeaguesInput;
  where: LeagueMemberWhereUniqueInput;
};

export type LeagueMemberUpsertWithWhereUniqueWithoutPeopleInput = {
  create: LeagueMemberCreateWithoutPeopleInput;
  update: LeagueMemberUpdateWithoutPeopleInput;
  where: LeagueMemberWhereUniqueInput;
};

export type LeagueMemberUpsertWithoutPicksInput = {
  create: LeagueMemberCreateWithoutPicksInput;
  update: LeagueMemberUpdateWithoutPicksInput;
};

export type LeagueMemberUpsertWithoutSuperbowlInput = {
  create: LeagueMemberCreateWithoutSuperbowlInput;
  update: LeagueMemberUpdateWithoutSuperbowlInput;
};

export type LeagueMemberUpsertWithoutWeekWinnersInput = {
  create: LeagueMemberCreateWithoutWeekWinnersInput;
  update: LeagueMemberUpdateWithoutWeekWinnersInput;
};

export type LeagueMemberWhereInput = {
  AND?: InputMaybe<Array<LeagueMemberWhereInput>>;
  NOT?: InputMaybe<Array<LeagueMemberWhereInput>>;
  OR?: InputMaybe<Array<LeagueMemberWhereInput>>;
  WeekWinners?: InputMaybe<WeekWinnersListRelationFilter>;
  league_id?: InputMaybe<IntFilter>;
  leagues?: InputMaybe<LeagueRelationFilter>;
  membership_id?: InputMaybe<IntFilter>;
  people?: InputMaybe<UserRelationFilter>;
  picks?: InputMaybe<PickListRelationFilter>;
  role?: InputMaybe<EnumMemberRoleNullableFilter>;
  superbowl?: InputMaybe<SuperbowlListRelationFilter>;
  ts?: InputMaybe<DateTimeFilter>;
  user_id?: InputMaybe<IntFilter>;
};

export type LeagueMemberWhereUniqueInput = {
  membership_id?: InputMaybe<Scalars['Int']>;
};

export type LeagueMinAggregate = {
  __typename?: 'LeagueMinAggregate';
  created_by_user_id?: Maybe<Scalars['Int']>;
  created_time?: Maybe<Scalars['DateTime']>;
  late_policy?: Maybe<LatePolicy>;
  league_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  pick_policy?: Maybe<PickPolicy>;
  reminder_policy?: Maybe<ReminderPolicy>;
  scoring_type?: Maybe<ScoringType>;
  season?: Maybe<Scalars['Int']>;
  share_code?: Maybe<Scalars['String']>;
  superbowl_competition?: Maybe<Scalars['Boolean']>;
};

export type LeagueMinOrderByAggregateInput = {
  created_by_user_id?: InputMaybe<SortOrder>;
  created_time?: InputMaybe<SortOrder>;
  late_policy?: InputMaybe<SortOrder>;
  league_id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  pick_policy?: InputMaybe<SortOrder>;
  reminder_policy?: InputMaybe<SortOrder>;
  scoring_type?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
  share_code?: InputMaybe<SortOrder>;
  superbowl_competition?: InputMaybe<SortOrder>;
};

export type LeagueOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type LeagueOrderByWithAggregationInput = {
  _avg?: InputMaybe<LeagueAvgOrderByAggregateInput>;
  _count?: InputMaybe<LeagueCountOrderByAggregateInput>;
  _max?: InputMaybe<LeagueMaxOrderByAggregateInput>;
  _min?: InputMaybe<LeagueMinOrderByAggregateInput>;
  _sum?: InputMaybe<LeagueSumOrderByAggregateInput>;
  created_by_user_id?: InputMaybe<SortOrder>;
  created_time?: InputMaybe<SortOrder>;
  late_policy?: InputMaybe<SortOrder>;
  league_id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  pick_policy?: InputMaybe<SortOrder>;
  reminder_policy?: InputMaybe<SortOrder>;
  scoring_type?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
  share_code?: InputMaybe<SortOrder>;
  superbowl_competition?: InputMaybe<SortOrder>;
};

export type LeagueOrderByWithRelationInput = {
  WeekWinners?: InputMaybe<WeekWinnersOrderByRelationAggregateInput>;
  created_by_user_id?: InputMaybe<SortOrder>;
  created_time?: InputMaybe<SortOrder>;
  late_policy?: InputMaybe<SortOrder>;
  league_id?: InputMaybe<SortOrder>;
  leaguemembers?: InputMaybe<LeagueMemberOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  people?: InputMaybe<UserOrderByWithRelationInput>;
  pick_policy?: InputMaybe<SortOrder>;
  reminder_policy?: InputMaybe<SortOrder>;
  scoring_type?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
  share_code?: InputMaybe<SortOrder>;
  superbowl_competition?: InputMaybe<SortOrder>;
};

export type LeagueRelationFilter = {
  is?: InputMaybe<LeagueWhereInput>;
  isNot?: InputMaybe<LeagueWhereInput>;
};

export enum LeagueScalarFieldEnum {
  CreatedByUserId = 'created_by_user_id',
  CreatedTime = 'created_time',
  LatePolicy = 'late_policy',
  LeagueId = 'league_id',
  Name = 'name',
  PickPolicy = 'pick_policy',
  ReminderPolicy = 'reminder_policy',
  ScoringType = 'scoring_type',
  Season = 'season',
  ShareCode = 'share_code',
  SuperbowlCompetition = 'superbowl_competition'
}

export type LeagueScalarWhereInput = {
  AND?: InputMaybe<Array<LeagueScalarWhereInput>>;
  NOT?: InputMaybe<Array<LeagueScalarWhereInput>>;
  OR?: InputMaybe<Array<LeagueScalarWhereInput>>;
  created_by_user_id?: InputMaybe<IntFilter>;
  created_time?: InputMaybe<DateTimeFilter>;
  late_policy?: InputMaybe<EnumLatePolicyNullableFilter>;
  league_id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  pick_policy?: InputMaybe<EnumPickPolicyNullableFilter>;
  reminder_policy?: InputMaybe<EnumReminderPolicyNullableFilter>;
  scoring_type?: InputMaybe<EnumScoringTypeNullableFilter>;
  season?: InputMaybe<IntFilter>;
  share_code?: InputMaybe<StringNullableFilter>;
  superbowl_competition?: InputMaybe<BoolNullableFilter>;
};

export type LeagueScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<LeagueScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<LeagueScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<LeagueScalarWhereWithAggregatesInput>>;
  created_by_user_id?: InputMaybe<IntWithAggregatesFilter>;
  created_time?: InputMaybe<DateTimeWithAggregatesFilter>;
  late_policy?: InputMaybe<EnumLatePolicyNullableWithAggregatesFilter>;
  league_id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  pick_policy?: InputMaybe<EnumPickPolicyNullableWithAggregatesFilter>;
  reminder_policy?: InputMaybe<EnumReminderPolicyNullableWithAggregatesFilter>;
  scoring_type?: InputMaybe<EnumScoringTypeNullableWithAggregatesFilter>;
  season?: InputMaybe<IntWithAggregatesFilter>;
  share_code?: InputMaybe<StringNullableWithAggregatesFilter>;
  superbowl_competition?: InputMaybe<BoolNullableWithAggregatesFilter>;
};

export enum LeagueStatus {
  Done = 'DONE',
  InProgress = 'IN_PROGRESS',
  NotStarted = 'NOT_STARTED'
}

export type LeagueSumAggregate = {
  __typename?: 'LeagueSumAggregate';
  created_by_user_id?: Maybe<Scalars['Int']>;
  league_id?: Maybe<Scalars['Int']>;
  season?: Maybe<Scalars['Int']>;
};

export type LeagueSumOrderByAggregateInput = {
  created_by_user_id?: InputMaybe<SortOrder>;
  league_id?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
};

export type LeagueUpdateInput = {
  WeekWinners?: InputMaybe<WeekWinnersUpdateManyWithoutLeagueNestedInput>;
  created_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  late_policy?: InputMaybe<NullableEnumLatePolicyFieldUpdateOperationsInput>;
  leaguemembers?: InputMaybe<LeagueMemberUpdateManyWithoutLeaguesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  people?: InputMaybe<UserUpdateOneRequiredWithoutLeaguesNestedInput>;
  pick_policy?: InputMaybe<NullableEnumPickPolicyFieldUpdateOperationsInput>;
  reminder_policy?: InputMaybe<NullableEnumReminderPolicyFieldUpdateOperationsInput>;
  scoring_type?: InputMaybe<NullableEnumScoringTypeFieldUpdateOperationsInput>;
  season?: InputMaybe<IntFieldUpdateOperationsInput>;
  share_code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  superbowl_competition?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
};

export type LeagueUpdateManyMutationInput = {
  created_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  late_policy?: InputMaybe<NullableEnumLatePolicyFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  pick_policy?: InputMaybe<NullableEnumPickPolicyFieldUpdateOperationsInput>;
  reminder_policy?: InputMaybe<NullableEnumReminderPolicyFieldUpdateOperationsInput>;
  scoring_type?: InputMaybe<NullableEnumScoringTypeFieldUpdateOperationsInput>;
  season?: InputMaybe<IntFieldUpdateOperationsInput>;
  share_code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  superbowl_competition?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
};

export type LeagueUpdateManyWithWhereWithoutPeopleInput = {
  data: LeagueUpdateManyMutationInput;
  where: LeagueScalarWhereInput;
};

export type LeagueUpdateManyWithoutPeopleNestedInput = {
  connect?: InputMaybe<Array<LeagueWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LeagueCreateOrConnectWithoutPeopleInput>>;
  create?: InputMaybe<Array<LeagueCreateWithoutPeopleInput>>;
  createMany?: InputMaybe<LeagueCreateManyPeopleInputEnvelope>;
  delete?: InputMaybe<Array<LeagueWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<LeagueScalarWhereInput>>;
  disconnect?: InputMaybe<Array<LeagueWhereUniqueInput>>;
  set?: InputMaybe<Array<LeagueWhereUniqueInput>>;
  update?: InputMaybe<Array<LeagueUpdateWithWhereUniqueWithoutPeopleInput>>;
  updateMany?: InputMaybe<Array<LeagueUpdateManyWithWhereWithoutPeopleInput>>;
  upsert?: InputMaybe<Array<LeagueUpsertWithWhereUniqueWithoutPeopleInput>>;
};

export type LeagueUpdateOneRequiredWithoutLeaguemembersNestedInput = {
  connect?: InputMaybe<LeagueWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LeagueCreateOrConnectWithoutLeaguemembersInput>;
  create?: InputMaybe<LeagueCreateWithoutLeaguemembersInput>;
  update?: InputMaybe<LeagueUpdateWithoutLeaguemembersInput>;
  upsert?: InputMaybe<LeagueUpsertWithoutLeaguemembersInput>;
};

export type LeagueUpdateOneRequiredWithoutWeekWinnersNestedInput = {
  connect?: InputMaybe<LeagueWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LeagueCreateOrConnectWithoutWeekWinnersInput>;
  create?: InputMaybe<LeagueCreateWithoutWeekWinnersInput>;
  update?: InputMaybe<LeagueUpdateWithoutWeekWinnersInput>;
  upsert?: InputMaybe<LeagueUpsertWithoutWeekWinnersInput>;
};

export type LeagueUpdateWithWhereUniqueWithoutPeopleInput = {
  data: LeagueUpdateWithoutPeopleInput;
  where: LeagueWhereUniqueInput;
};

export type LeagueUpdateWithoutLeaguemembersInput = {
  WeekWinners?: InputMaybe<WeekWinnersUpdateManyWithoutLeagueNestedInput>;
  created_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  late_policy?: InputMaybe<NullableEnumLatePolicyFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  people?: InputMaybe<UserUpdateOneRequiredWithoutLeaguesNestedInput>;
  pick_policy?: InputMaybe<NullableEnumPickPolicyFieldUpdateOperationsInput>;
  reminder_policy?: InputMaybe<NullableEnumReminderPolicyFieldUpdateOperationsInput>;
  scoring_type?: InputMaybe<NullableEnumScoringTypeFieldUpdateOperationsInput>;
  season?: InputMaybe<IntFieldUpdateOperationsInput>;
  share_code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  superbowl_competition?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
};

export type LeagueUpdateWithoutPeopleInput = {
  WeekWinners?: InputMaybe<WeekWinnersUpdateManyWithoutLeagueNestedInput>;
  created_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  late_policy?: InputMaybe<NullableEnumLatePolicyFieldUpdateOperationsInput>;
  leaguemembers?: InputMaybe<LeagueMemberUpdateManyWithoutLeaguesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  pick_policy?: InputMaybe<NullableEnumPickPolicyFieldUpdateOperationsInput>;
  reminder_policy?: InputMaybe<NullableEnumReminderPolicyFieldUpdateOperationsInput>;
  scoring_type?: InputMaybe<NullableEnumScoringTypeFieldUpdateOperationsInput>;
  season?: InputMaybe<IntFieldUpdateOperationsInput>;
  share_code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  superbowl_competition?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
};

export type LeagueUpdateWithoutWeekWinnersInput = {
  created_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  late_policy?: InputMaybe<NullableEnumLatePolicyFieldUpdateOperationsInput>;
  leaguemembers?: InputMaybe<LeagueMemberUpdateManyWithoutLeaguesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  people?: InputMaybe<UserUpdateOneRequiredWithoutLeaguesNestedInput>;
  pick_policy?: InputMaybe<NullableEnumPickPolicyFieldUpdateOperationsInput>;
  reminder_policy?: InputMaybe<NullableEnumReminderPolicyFieldUpdateOperationsInput>;
  scoring_type?: InputMaybe<NullableEnumScoringTypeFieldUpdateOperationsInput>;
  season?: InputMaybe<IntFieldUpdateOperationsInput>;
  share_code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  superbowl_competition?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
};

export type LeagueUpsertWithWhereUniqueWithoutPeopleInput = {
  create: LeagueCreateWithoutPeopleInput;
  update: LeagueUpdateWithoutPeopleInput;
  where: LeagueWhereUniqueInput;
};

export type LeagueUpsertWithoutLeaguemembersInput = {
  create: LeagueCreateWithoutLeaguemembersInput;
  update: LeagueUpdateWithoutLeaguemembersInput;
};

export type LeagueUpsertWithoutWeekWinnersInput = {
  create: LeagueCreateWithoutWeekWinnersInput;
  update: LeagueUpdateWithoutWeekWinnersInput;
};

export type LeagueWhereInput = {
  AND?: InputMaybe<Array<LeagueWhereInput>>;
  NOT?: InputMaybe<Array<LeagueWhereInput>>;
  OR?: InputMaybe<Array<LeagueWhereInput>>;
  WeekWinners?: InputMaybe<WeekWinnersListRelationFilter>;
  created_by_user_id?: InputMaybe<IntFilter>;
  created_time?: InputMaybe<DateTimeFilter>;
  late_policy?: InputMaybe<EnumLatePolicyNullableFilter>;
  league_id?: InputMaybe<IntFilter>;
  leaguemembers?: InputMaybe<LeagueMemberListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  people?: InputMaybe<UserRelationFilter>;
  pick_policy?: InputMaybe<EnumPickPolicyNullableFilter>;
  reminder_policy?: InputMaybe<EnumReminderPolicyNullableFilter>;
  scoring_type?: InputMaybe<EnumScoringTypeNullableFilter>;
  season?: InputMaybe<IntFilter>;
  share_code?: InputMaybe<StringNullableFilter>;
  superbowl_competition?: InputMaybe<BoolNullableFilter>;
};

export type LeagueWhereUniqueInput = {
  league_id?: InputMaybe<Scalars['Int']>;
};

/** Status of the game */
export enum MsfGamePlayedStatus {
  Completed = 'COMPLETED',
  CompletedPendingReview = 'COMPLETED_PENDING_REVIEW',
  Live = 'LIVE',
  Unplayed = 'UNPLAYED'
}

export type MakePicksResponse = {
  __typename?: 'MakePicksResponse';
  success: Scalars['Boolean'];
  user: User;
};

export enum MemberRole {
  Admin = 'admin',
  Player = 'player'
}

export type MostRecentStartedWeekResponse = {
  __typename?: 'MostRecentStartedWeekResponse';
  games: Array<Game>;
  picks: Array<Pick>;
  season?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createLeague: League;
  createManyGame: AffectedRowsOutput;
  createManyLeague: AffectedRowsOutput;
  createManyLeagueMember: AffectedRowsOutput;
  createManyPick: AffectedRowsOutput;
  createManySuperbowl: AffectedRowsOutput;
  createManySuperbowlSquare: AffectedRowsOutput;
  createManyTeam: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createManyWeekWinners: AffectedRowsOutput;
  createOneGame: Game;
  createOneLeague: League;
  createOneLeagueMember: LeagueMember;
  createOnePick: Pick;
  createOneSuperbowl: Superbowl;
  createOneSuperbowlSquare: SuperbowlSquare;
  createOneTeam: Team;
  createOneUser: User;
  createOneWeekWinners: WeekWinners;
  deleteManyGame: AffectedRowsOutput;
  deleteManyLeague: AffectedRowsOutput;
  deleteManyLeagueMember: AffectedRowsOutput;
  deleteManyPick: AffectedRowsOutput;
  deleteManySuperbowl: AffectedRowsOutput;
  deleteManySuperbowlSquare: AffectedRowsOutput;
  deleteManyTeam: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteManyWeekWinners: AffectedRowsOutput;
  deleteOneGame?: Maybe<Game>;
  deleteOneLeague?: Maybe<League>;
  deleteOneLeagueMember?: Maybe<LeagueMember>;
  deleteOnePick?: Maybe<Pick>;
  deleteOneSuperbowl?: Maybe<Superbowl>;
  deleteOneSuperbowlSquare?: Maybe<SuperbowlSquare>;
  deleteOneTeam?: Maybe<Team>;
  deleteOneUser?: Maybe<User>;
  deleteOneWeekWinners?: Maybe<WeekWinners>;
  makePicks: MakePicksResponse;
  register: RegisterResponse;
  updateManyGame: AffectedRowsOutput;
  updateManyLeague: AffectedRowsOutput;
  updateManyLeagueMember: AffectedRowsOutput;
  updateManyPick: AffectedRowsOutput;
  updateManySuperbowl: AffectedRowsOutput;
  updateManySuperbowlSquare: AffectedRowsOutput;
  updateManyTeam: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateManyWeekWinners: AffectedRowsOutput;
  updateOneGame?: Maybe<Game>;
  updateOneLeague?: Maybe<League>;
  updateOneLeagueMember?: Maybe<LeagueMember>;
  updateOnePick?: Maybe<Pick>;
  updateOneSuperbowl?: Maybe<Superbowl>;
  updateOneSuperbowlSquare?: Maybe<SuperbowlSquare>;
  updateOneTeam?: Maybe<Team>;
  updateOneUser?: Maybe<User>;
  updateOneWeekWinners?: Maybe<WeekWinners>;
  upsertOneGame: Game;
  upsertOneLeague: League;
  upsertOneLeagueMember: LeagueMember;
  upsertOnePick: Pick;
  upsertOneSuperbowl: Superbowl;
  upsertOneSuperbowlSquare: SuperbowlSquare;
  upsertOneTeam: Team;
  upsertOneUser: User;
  upsertOneWeekWinners: WeekWinners;
};


export type MutationCreateLeagueArgs = {
  data: CreateLeagueInput;
};


export type MutationCreateManyGameArgs = {
  data: Array<GameCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyLeagueArgs = {
  data: Array<LeagueCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyLeagueMemberArgs = {
  data: Array<LeagueMemberCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyPickArgs = {
  data: Array<PickCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManySuperbowlArgs = {
  data: Array<SuperbowlCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManySuperbowlSquareArgs = {
  data: Array<SuperbowlSquareCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyTeamArgs = {
  data: Array<TeamCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyWeekWinnersArgs = {
  data: Array<WeekWinnersCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateOneGameArgs = {
  data: GameCreateInput;
};


export type MutationCreateOneLeagueArgs = {
  data: LeagueCreateInput;
};


export type MutationCreateOneLeagueMemberArgs = {
  data: LeagueMemberCreateInput;
};


export type MutationCreateOnePickArgs = {
  data: PickCreateInput;
};


export type MutationCreateOneSuperbowlArgs = {
  data: SuperbowlCreateInput;
};


export type MutationCreateOneSuperbowlSquareArgs = {
  data: SuperbowlSquareCreateInput;
};


export type MutationCreateOneTeamArgs = {
  data: TeamCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateOneWeekWinnersArgs = {
  data: WeekWinnersCreateInput;
};


export type MutationDeleteManyGameArgs = {
  where?: InputMaybe<GameWhereInput>;
};


export type MutationDeleteManyLeagueArgs = {
  where?: InputMaybe<LeagueWhereInput>;
};


export type MutationDeleteManyLeagueMemberArgs = {
  where?: InputMaybe<LeagueMemberWhereInput>;
};


export type MutationDeleteManyPickArgs = {
  where?: InputMaybe<PickWhereInput>;
};


export type MutationDeleteManySuperbowlArgs = {
  where?: InputMaybe<SuperbowlWhereInput>;
};


export type MutationDeleteManySuperbowlSquareArgs = {
  where?: InputMaybe<SuperbowlSquareWhereInput>;
};


export type MutationDeleteManyTeamArgs = {
  where?: InputMaybe<TeamWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteManyWeekWinnersArgs = {
  where?: InputMaybe<WeekWinnersWhereInput>;
};


export type MutationDeleteOneGameArgs = {
  where: GameWhereUniqueInput;
};


export type MutationDeleteOneLeagueArgs = {
  where: LeagueWhereUniqueInput;
};


export type MutationDeleteOneLeagueMemberArgs = {
  where: LeagueMemberWhereUniqueInput;
};


export type MutationDeleteOnePickArgs = {
  where: PickWhereUniqueInput;
};


export type MutationDeleteOneSuperbowlArgs = {
  where: SuperbowlWhereUniqueInput;
};


export type MutationDeleteOneSuperbowlSquareArgs = {
  where: SuperbowlSquareWhereUniqueInput;
};


export type MutationDeleteOneTeamArgs = {
  where: TeamWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteOneWeekWinnersArgs = {
  where: WeekWinnersWhereUniqueInput;
};


export type MutationMakePicksArgs = {
  member_id: Scalars['Int'];
  picks: Array<GamePick>;
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  previousUserId?: InputMaybe<Scalars['Int']>;
  superbowlLoser: Scalars['Int'];
  superbowlScore: Scalars['Int'];
  superbowlWinner: Scalars['Int'];
  username: Scalars['String'];
};


export type MutationUpdateManyGameArgs = {
  data: GameUpdateManyMutationInput;
  where?: InputMaybe<GameWhereInput>;
};


export type MutationUpdateManyLeagueArgs = {
  data: LeagueUpdateManyMutationInput;
  where?: InputMaybe<LeagueWhereInput>;
};


export type MutationUpdateManyLeagueMemberArgs = {
  data: LeagueMemberUpdateManyMutationInput;
  where?: InputMaybe<LeagueMemberWhereInput>;
};


export type MutationUpdateManyPickArgs = {
  data: PickUpdateManyMutationInput;
  where?: InputMaybe<PickWhereInput>;
};


export type MutationUpdateManySuperbowlArgs = {
  data: SuperbowlUpdateManyMutationInput;
  where?: InputMaybe<SuperbowlWhereInput>;
};


export type MutationUpdateManySuperbowlSquareArgs = {
  data: SuperbowlSquareUpdateManyMutationInput;
  where?: InputMaybe<SuperbowlSquareWhereInput>;
};


export type MutationUpdateManyTeamArgs = {
  data: TeamUpdateManyMutationInput;
  where?: InputMaybe<TeamWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateManyWeekWinnersArgs = {
  data: WeekWinnersUpdateManyMutationInput;
  where?: InputMaybe<WeekWinnersWhereInput>;
};


export type MutationUpdateOneGameArgs = {
  data: GameUpdateInput;
  where: GameWhereUniqueInput;
};


export type MutationUpdateOneLeagueArgs = {
  data: LeagueUpdateInput;
  where: LeagueWhereUniqueInput;
};


export type MutationUpdateOneLeagueMemberArgs = {
  data: LeagueMemberUpdateInput;
  where: LeagueMemberWhereUniqueInput;
};


export type MutationUpdateOnePickArgs = {
  data: PickUpdateInput;
  where: PickWhereUniqueInput;
};


export type MutationUpdateOneSuperbowlArgs = {
  data: SuperbowlUpdateInput;
  where: SuperbowlWhereUniqueInput;
};


export type MutationUpdateOneSuperbowlSquareArgs = {
  data: SuperbowlSquareUpdateInput;
  where: SuperbowlSquareWhereUniqueInput;
};


export type MutationUpdateOneTeamArgs = {
  data: TeamUpdateInput;
  where: TeamWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateOneWeekWinnersArgs = {
  data: WeekWinnersUpdateInput;
  where: WeekWinnersWhereUniqueInput;
};


export type MutationUpsertOneGameArgs = {
  create: GameCreateInput;
  update: GameUpdateInput;
  where: GameWhereUniqueInput;
};


export type MutationUpsertOneLeagueArgs = {
  create: LeagueCreateInput;
  update: LeagueUpdateInput;
  where: LeagueWhereUniqueInput;
};


export type MutationUpsertOneLeagueMemberArgs = {
  create: LeagueMemberCreateInput;
  update: LeagueMemberUpdateInput;
  where: LeagueMemberWhereUniqueInput;
};


export type MutationUpsertOnePickArgs = {
  create: PickCreateInput;
  update: PickUpdateInput;
  where: PickWhereUniqueInput;
};


export type MutationUpsertOneSuperbowlArgs = {
  create: SuperbowlCreateInput;
  update: SuperbowlUpdateInput;
  where: SuperbowlWhereUniqueInput;
};


export type MutationUpsertOneSuperbowlSquareArgs = {
  create: SuperbowlSquareCreateInput;
  update: SuperbowlSquareUpdateInput;
  where: SuperbowlSquareWhereUniqueInput;
};


export type MutationUpsertOneTeamArgs = {
  create: TeamCreateInput;
  update: TeamUpdateInput;
  where: TeamWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneWeekWinnersArgs = {
  create: WeekWinnersCreateInput;
  update: WeekWinnersUpdateInput;
  where: WeekWinnersWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolNullableFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableFilter>;
};

export type NestedBoolNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedBoolNullableFilter>;
  _min?: InputMaybe<NestedBoolNullableFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableWithAggregatesFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumLatePolicyNullableFilter = {
  equals?: InputMaybe<LatePolicy>;
  in?: InputMaybe<Array<LatePolicy>>;
  not?: InputMaybe<NestedEnumLatePolicyNullableFilter>;
  notIn?: InputMaybe<Array<LatePolicy>>;
};

export type NestedEnumLatePolicyNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumLatePolicyNullableFilter>;
  _min?: InputMaybe<NestedEnumLatePolicyNullableFilter>;
  equals?: InputMaybe<LatePolicy>;
  in?: InputMaybe<Array<LatePolicy>>;
  not?: InputMaybe<NestedEnumLatePolicyNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<LatePolicy>>;
};

export type NestedEnumMemberRoleNullableFilter = {
  equals?: InputMaybe<MemberRole>;
  in?: InputMaybe<Array<MemberRole>>;
  not?: InputMaybe<NestedEnumMemberRoleNullableFilter>;
  notIn?: InputMaybe<Array<MemberRole>>;
};

export type NestedEnumMemberRoleNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumMemberRoleNullableFilter>;
  _min?: InputMaybe<NestedEnumMemberRoleNullableFilter>;
  equals?: InputMaybe<MemberRole>;
  in?: InputMaybe<Array<MemberRole>>;
  not?: InputMaybe<NestedEnumMemberRoleNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<MemberRole>>;
};

export type NestedEnumPickPolicyNullableFilter = {
  equals?: InputMaybe<PickPolicy>;
  in?: InputMaybe<Array<PickPolicy>>;
  not?: InputMaybe<NestedEnumPickPolicyNullableFilter>;
  notIn?: InputMaybe<Array<PickPolicy>>;
};

export type NestedEnumPickPolicyNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumPickPolicyNullableFilter>;
  _min?: InputMaybe<NestedEnumPickPolicyNullableFilter>;
  equals?: InputMaybe<PickPolicy>;
  in?: InputMaybe<Array<PickPolicy>>;
  not?: InputMaybe<NestedEnumPickPolicyNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<PickPolicy>>;
};

export type NestedEnumReminderPolicyNullableFilter = {
  equals?: InputMaybe<ReminderPolicy>;
  in?: InputMaybe<Array<ReminderPolicy>>;
  not?: InputMaybe<NestedEnumReminderPolicyNullableFilter>;
  notIn?: InputMaybe<Array<ReminderPolicy>>;
};

export type NestedEnumReminderPolicyNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumReminderPolicyNullableFilter>;
  _min?: InputMaybe<NestedEnumReminderPolicyNullableFilter>;
  equals?: InputMaybe<ReminderPolicy>;
  in?: InputMaybe<Array<ReminderPolicy>>;
  not?: InputMaybe<NestedEnumReminderPolicyNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<ReminderPolicy>>;
};

export type NestedEnumScoringTypeNullableFilter = {
  equals?: InputMaybe<ScoringType>;
  in?: InputMaybe<Array<ScoringType>>;
  not?: InputMaybe<NestedEnumScoringTypeNullableFilter>;
  notIn?: InputMaybe<Array<ScoringType>>;
};

export type NestedEnumScoringTypeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumScoringTypeNullableFilter>;
  _min?: InputMaybe<NestedEnumScoringTypeNullableFilter>;
  equals?: InputMaybe<ScoringType>;
  in?: InputMaybe<Array<ScoringType>>;
  not?: InputMaybe<NestedEnumScoringTypeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<ScoringType>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableBoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type NullableEnumLatePolicyFieldUpdateOperationsInput = {
  set?: InputMaybe<LatePolicy>;
};

export type NullableEnumMemberRoleFieldUpdateOperationsInput = {
  set?: InputMaybe<MemberRole>;
};

export type NullableEnumPickPolicyFieldUpdateOperationsInput = {
  set?: InputMaybe<PickPolicy>;
};

export type NullableEnumReminderPolicyFieldUpdateOperationsInput = {
  set?: InputMaybe<ReminderPolicy>;
};

export type NullableEnumScoringTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<ScoringType>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Pick = {
  __typename?: 'Pick';
  correct?: Maybe<Scalars['Int']>;
  done?: Maybe<Scalars['Int']>;
  games: Game;
  gid: Scalars['Int'];
  id: Scalars['ID'];
  is_random?: Maybe<Scalars['Boolean']>;
  leaguemembers?: Maybe<LeagueMember>;
  loser?: Maybe<Scalars['Int']>;
  member_id?: Maybe<Scalars['Int']>;
  people: User;
  pickid: Scalars['Int'];
  score?: Maybe<Scalars['Int']>;
  season: Scalars['Int'];
  ts: Scalars['DateTimeBetterSerialization'];
  uid: Scalars['Int'];
  week: Scalars['Int'];
  winner?: Maybe<Scalars['Int']>;
};

export type PickAvgAggregate = {
  __typename?: 'PickAvgAggregate';
  correct?: Maybe<Scalars['Float']>;
  done?: Maybe<Scalars['Float']>;
  gid?: Maybe<Scalars['Float']>;
  loser?: Maybe<Scalars['Float']>;
  member_id?: Maybe<Scalars['Float']>;
  pickid?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
  season?: Maybe<Scalars['Float']>;
  uid?: Maybe<Scalars['Float']>;
  week?: Maybe<Scalars['Float']>;
  winner?: Maybe<Scalars['Float']>;
};

export type PickAvgOrderByAggregateInput = {
  correct?: InputMaybe<SortOrder>;
  done?: InputMaybe<SortOrder>;
  gid?: InputMaybe<SortOrder>;
  loser?: InputMaybe<SortOrder>;
  member_id?: InputMaybe<SortOrder>;
  pickid?: InputMaybe<SortOrder>;
  score?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
  winner?: InputMaybe<SortOrder>;
};

export type PickCountAggregate = {
  __typename?: 'PickCountAggregate';
  _all: Scalars['Int'];
  correct: Scalars['Int'];
  done: Scalars['Int'];
  gid: Scalars['Int'];
  is_random: Scalars['Int'];
  loser: Scalars['Int'];
  member_id: Scalars['Int'];
  pickid: Scalars['Int'];
  score: Scalars['Int'];
  season: Scalars['Int'];
  ts: Scalars['Int'];
  uid: Scalars['Int'];
  week: Scalars['Int'];
  winner: Scalars['Int'];
};

export type PickCountOrderByAggregateInput = {
  correct?: InputMaybe<SortOrder>;
  done?: InputMaybe<SortOrder>;
  gid?: InputMaybe<SortOrder>;
  is_random?: InputMaybe<SortOrder>;
  loser?: InputMaybe<SortOrder>;
  member_id?: InputMaybe<SortOrder>;
  pickid?: InputMaybe<SortOrder>;
  score?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
  winner?: InputMaybe<SortOrder>;
};

export type PickCreateInput = {
  correct?: InputMaybe<Scalars['Int']>;
  done?: InputMaybe<Scalars['Int']>;
  games: GameCreateNestedOneWithoutPicksInput;
  is_random?: InputMaybe<Scalars['Boolean']>;
  leaguemembers?: InputMaybe<LeagueMemberCreateNestedOneWithoutPicksInput>;
  loser?: InputMaybe<Scalars['Int']>;
  people: UserCreateNestedOneWithoutPicksInput;
  score?: InputMaybe<Scalars['Int']>;
  season: Scalars['Int'];
  ts?: InputMaybe<Scalars['DateTime']>;
  week: Scalars['Int'];
  winner?: InputMaybe<Scalars['Int']>;
};

export type PickCreateManyGamesInput = {
  correct?: InputMaybe<Scalars['Int']>;
  done?: InputMaybe<Scalars['Int']>;
  is_random?: InputMaybe<Scalars['Boolean']>;
  loser?: InputMaybe<Scalars['Int']>;
  member_id?: InputMaybe<Scalars['Int']>;
  pickid?: InputMaybe<Scalars['Int']>;
  score?: InputMaybe<Scalars['Int']>;
  season: Scalars['Int'];
  ts?: InputMaybe<Scalars['DateTime']>;
  uid: Scalars['Int'];
  week: Scalars['Int'];
  winner?: InputMaybe<Scalars['Int']>;
};

export type PickCreateManyGamesInputEnvelope = {
  data: Array<PickCreateManyGamesInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PickCreateManyInput = {
  correct?: InputMaybe<Scalars['Int']>;
  done?: InputMaybe<Scalars['Int']>;
  gid: Scalars['Int'];
  is_random?: InputMaybe<Scalars['Boolean']>;
  loser?: InputMaybe<Scalars['Int']>;
  member_id?: InputMaybe<Scalars['Int']>;
  pickid?: InputMaybe<Scalars['Int']>;
  score?: InputMaybe<Scalars['Int']>;
  season: Scalars['Int'];
  ts?: InputMaybe<Scalars['DateTime']>;
  uid: Scalars['Int'];
  week: Scalars['Int'];
  winner?: InputMaybe<Scalars['Int']>;
};

export type PickCreateManyLeaguemembersInput = {
  correct?: InputMaybe<Scalars['Int']>;
  done?: InputMaybe<Scalars['Int']>;
  gid: Scalars['Int'];
  is_random?: InputMaybe<Scalars['Boolean']>;
  loser?: InputMaybe<Scalars['Int']>;
  pickid?: InputMaybe<Scalars['Int']>;
  score?: InputMaybe<Scalars['Int']>;
  season: Scalars['Int'];
  ts?: InputMaybe<Scalars['DateTime']>;
  uid: Scalars['Int'];
  week: Scalars['Int'];
  winner?: InputMaybe<Scalars['Int']>;
};

export type PickCreateManyLeaguemembersInputEnvelope = {
  data: Array<PickCreateManyLeaguemembersInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PickCreateManyPeopleInput = {
  correct?: InputMaybe<Scalars['Int']>;
  done?: InputMaybe<Scalars['Int']>;
  gid: Scalars['Int'];
  is_random?: InputMaybe<Scalars['Boolean']>;
  loser?: InputMaybe<Scalars['Int']>;
  member_id?: InputMaybe<Scalars['Int']>;
  pickid?: InputMaybe<Scalars['Int']>;
  score?: InputMaybe<Scalars['Int']>;
  season: Scalars['Int'];
  ts?: InputMaybe<Scalars['DateTime']>;
  week: Scalars['Int'];
  winner?: InputMaybe<Scalars['Int']>;
};

export type PickCreateManyPeopleInputEnvelope = {
  data: Array<PickCreateManyPeopleInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PickCreateNestedManyWithoutGamesInput = {
  connect?: InputMaybe<Array<PickWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PickCreateOrConnectWithoutGamesInput>>;
  create?: InputMaybe<Array<PickCreateWithoutGamesInput>>;
  createMany?: InputMaybe<PickCreateManyGamesInputEnvelope>;
};

export type PickCreateNestedManyWithoutLeaguemembersInput = {
  connect?: InputMaybe<Array<PickWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PickCreateOrConnectWithoutLeaguemembersInput>>;
  create?: InputMaybe<Array<PickCreateWithoutLeaguemembersInput>>;
  createMany?: InputMaybe<PickCreateManyLeaguemembersInputEnvelope>;
};

export type PickCreateNestedManyWithoutPeopleInput = {
  connect?: InputMaybe<Array<PickWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PickCreateOrConnectWithoutPeopleInput>>;
  create?: InputMaybe<Array<PickCreateWithoutPeopleInput>>;
  createMany?: InputMaybe<PickCreateManyPeopleInputEnvelope>;
};

export type PickCreateOrConnectWithoutGamesInput = {
  create: PickCreateWithoutGamesInput;
  where: PickWhereUniqueInput;
};

export type PickCreateOrConnectWithoutLeaguemembersInput = {
  create: PickCreateWithoutLeaguemembersInput;
  where: PickWhereUniqueInput;
};

export type PickCreateOrConnectWithoutPeopleInput = {
  create: PickCreateWithoutPeopleInput;
  where: PickWhereUniqueInput;
};

export type PickCreateWithoutGamesInput = {
  correct?: InputMaybe<Scalars['Int']>;
  done?: InputMaybe<Scalars['Int']>;
  is_random?: InputMaybe<Scalars['Boolean']>;
  leaguemembers?: InputMaybe<LeagueMemberCreateNestedOneWithoutPicksInput>;
  loser?: InputMaybe<Scalars['Int']>;
  people: UserCreateNestedOneWithoutPicksInput;
  score?: InputMaybe<Scalars['Int']>;
  season: Scalars['Int'];
  ts?: InputMaybe<Scalars['DateTime']>;
  week: Scalars['Int'];
  winner?: InputMaybe<Scalars['Int']>;
};

export type PickCreateWithoutLeaguemembersInput = {
  correct?: InputMaybe<Scalars['Int']>;
  done?: InputMaybe<Scalars['Int']>;
  games: GameCreateNestedOneWithoutPicksInput;
  is_random?: InputMaybe<Scalars['Boolean']>;
  loser?: InputMaybe<Scalars['Int']>;
  people: UserCreateNestedOneWithoutPicksInput;
  score?: InputMaybe<Scalars['Int']>;
  season: Scalars['Int'];
  ts?: InputMaybe<Scalars['DateTime']>;
  week: Scalars['Int'];
  winner?: InputMaybe<Scalars['Int']>;
};

export type PickCreateWithoutPeopleInput = {
  correct?: InputMaybe<Scalars['Int']>;
  done?: InputMaybe<Scalars['Int']>;
  games: GameCreateNestedOneWithoutPicksInput;
  is_random?: InputMaybe<Scalars['Boolean']>;
  leaguemembers?: InputMaybe<LeagueMemberCreateNestedOneWithoutPicksInput>;
  loser?: InputMaybe<Scalars['Int']>;
  score?: InputMaybe<Scalars['Int']>;
  season: Scalars['Int'];
  ts?: InputMaybe<Scalars['DateTime']>;
  week: Scalars['Int'];
  winner?: InputMaybe<Scalars['Int']>;
};

export type PickGroupBy = {
  __typename?: 'PickGroupBy';
  _avg?: Maybe<PickAvgAggregate>;
  _count?: Maybe<PickCountAggregate>;
  _max?: Maybe<PickMaxAggregate>;
  _min?: Maybe<PickMinAggregate>;
  _sum?: Maybe<PickSumAggregate>;
  correct?: Maybe<Scalars['Int']>;
  done?: Maybe<Scalars['Int']>;
  gid: Scalars['Int'];
  is_random?: Maybe<Scalars['Boolean']>;
  loser?: Maybe<Scalars['Int']>;
  member_id?: Maybe<Scalars['Int']>;
  pickid: Scalars['Int'];
  score?: Maybe<Scalars['Int']>;
  season: Scalars['Int'];
  ts: Scalars['DateTime'];
  uid: Scalars['Int'];
  week: Scalars['Int'];
  winner?: Maybe<Scalars['Int']>;
};

export type PickListRelationFilter = {
  every?: InputMaybe<PickWhereInput>;
  none?: InputMaybe<PickWhereInput>;
  some?: InputMaybe<PickWhereInput>;
};

export type PickMaxAggregate = {
  __typename?: 'PickMaxAggregate';
  correct?: Maybe<Scalars['Int']>;
  done?: Maybe<Scalars['Int']>;
  gid?: Maybe<Scalars['Int']>;
  is_random?: Maybe<Scalars['Boolean']>;
  loser?: Maybe<Scalars['Int']>;
  member_id?: Maybe<Scalars['Int']>;
  pickid?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
  season?: Maybe<Scalars['Int']>;
  ts?: Maybe<Scalars['DateTime']>;
  uid?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
  winner?: Maybe<Scalars['Int']>;
};

export type PickMaxOrderByAggregateInput = {
  correct?: InputMaybe<SortOrder>;
  done?: InputMaybe<SortOrder>;
  gid?: InputMaybe<SortOrder>;
  is_random?: InputMaybe<SortOrder>;
  loser?: InputMaybe<SortOrder>;
  member_id?: InputMaybe<SortOrder>;
  pickid?: InputMaybe<SortOrder>;
  score?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
  winner?: InputMaybe<SortOrder>;
};

export type PickMinAggregate = {
  __typename?: 'PickMinAggregate';
  correct?: Maybe<Scalars['Int']>;
  done?: Maybe<Scalars['Int']>;
  gid?: Maybe<Scalars['Int']>;
  is_random?: Maybe<Scalars['Boolean']>;
  loser?: Maybe<Scalars['Int']>;
  member_id?: Maybe<Scalars['Int']>;
  pickid?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
  season?: Maybe<Scalars['Int']>;
  ts?: Maybe<Scalars['DateTime']>;
  uid?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
  winner?: Maybe<Scalars['Int']>;
};

export type PickMinOrderByAggregateInput = {
  correct?: InputMaybe<SortOrder>;
  done?: InputMaybe<SortOrder>;
  gid?: InputMaybe<SortOrder>;
  is_random?: InputMaybe<SortOrder>;
  loser?: InputMaybe<SortOrder>;
  member_id?: InputMaybe<SortOrder>;
  pickid?: InputMaybe<SortOrder>;
  score?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
  winner?: InputMaybe<SortOrder>;
};

export type PickOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PickOrderByWithAggregationInput = {
  _avg?: InputMaybe<PickAvgOrderByAggregateInput>;
  _count?: InputMaybe<PickCountOrderByAggregateInput>;
  _max?: InputMaybe<PickMaxOrderByAggregateInput>;
  _min?: InputMaybe<PickMinOrderByAggregateInput>;
  _sum?: InputMaybe<PickSumOrderByAggregateInput>;
  correct?: InputMaybe<SortOrder>;
  done?: InputMaybe<SortOrder>;
  gid?: InputMaybe<SortOrder>;
  is_random?: InputMaybe<SortOrder>;
  loser?: InputMaybe<SortOrder>;
  member_id?: InputMaybe<SortOrder>;
  pickid?: InputMaybe<SortOrder>;
  score?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
  winner?: InputMaybe<SortOrder>;
};

export type PickOrderByWithRelationInput = {
  correct?: InputMaybe<SortOrder>;
  done?: InputMaybe<SortOrder>;
  games?: InputMaybe<GameOrderByWithRelationInput>;
  gid?: InputMaybe<SortOrder>;
  is_random?: InputMaybe<SortOrder>;
  leaguemembers?: InputMaybe<LeagueMemberOrderByWithRelationInput>;
  loser?: InputMaybe<SortOrder>;
  member_id?: InputMaybe<SortOrder>;
  people?: InputMaybe<UserOrderByWithRelationInput>;
  pickid?: InputMaybe<SortOrder>;
  score?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
  winner?: InputMaybe<SortOrder>;
};

export enum PickPolicy {
  ChooseWinner = 'choose_winner'
}

export enum PickScalarFieldEnum {
  Correct = 'correct',
  Done = 'done',
  Gid = 'gid',
  IsRandom = 'is_random',
  Loser = 'loser',
  MemberId = 'member_id',
  Pickid = 'pickid',
  Score = 'score',
  Season = 'season',
  Ts = 'ts',
  Uid = 'uid',
  Week = 'week',
  Winner = 'winner'
}

export type PickScalarWhereInput = {
  AND?: InputMaybe<Array<PickScalarWhereInput>>;
  NOT?: InputMaybe<Array<PickScalarWhereInput>>;
  OR?: InputMaybe<Array<PickScalarWhereInput>>;
  correct?: InputMaybe<IntNullableFilter>;
  done?: InputMaybe<IntNullableFilter>;
  gid?: InputMaybe<IntFilter>;
  is_random?: InputMaybe<BoolNullableFilter>;
  loser?: InputMaybe<IntNullableFilter>;
  member_id?: InputMaybe<IntNullableFilter>;
  pickid?: InputMaybe<IntFilter>;
  score?: InputMaybe<IntNullableFilter>;
  season?: InputMaybe<IntFilter>;
  ts?: InputMaybe<DateTimeFilter>;
  uid?: InputMaybe<IntFilter>;
  week?: InputMaybe<IntFilter>;
  winner?: InputMaybe<IntNullableFilter>;
};

export type PickScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PickScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PickScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PickScalarWhereWithAggregatesInput>>;
  correct?: InputMaybe<IntNullableWithAggregatesFilter>;
  done?: InputMaybe<IntNullableWithAggregatesFilter>;
  gid?: InputMaybe<IntWithAggregatesFilter>;
  is_random?: InputMaybe<BoolNullableWithAggregatesFilter>;
  loser?: InputMaybe<IntNullableWithAggregatesFilter>;
  member_id?: InputMaybe<IntNullableWithAggregatesFilter>;
  pickid?: InputMaybe<IntWithAggregatesFilter>;
  score?: InputMaybe<IntNullableWithAggregatesFilter>;
  season?: InputMaybe<IntWithAggregatesFilter>;
  ts?: InputMaybe<DateTimeWithAggregatesFilter>;
  uid?: InputMaybe<IntWithAggregatesFilter>;
  week?: InputMaybe<IntWithAggregatesFilter>;
  winner?: InputMaybe<IntNullableWithAggregatesFilter>;
};

export type PickSumAggregate = {
  __typename?: 'PickSumAggregate';
  correct?: Maybe<Scalars['Int']>;
  done?: Maybe<Scalars['Int']>;
  gid?: Maybe<Scalars['Int']>;
  loser?: Maybe<Scalars['Int']>;
  member_id?: Maybe<Scalars['Int']>;
  pickid?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
  season?: Maybe<Scalars['Int']>;
  uid?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
  winner?: Maybe<Scalars['Int']>;
};

export type PickSumOrderByAggregateInput = {
  correct?: InputMaybe<SortOrder>;
  done?: InputMaybe<SortOrder>;
  gid?: InputMaybe<SortOrder>;
  loser?: InputMaybe<SortOrder>;
  member_id?: InputMaybe<SortOrder>;
  pickid?: InputMaybe<SortOrder>;
  score?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
  winner?: InputMaybe<SortOrder>;
};

export type PickUpdateInput = {
  correct?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  done?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  games?: InputMaybe<GameUpdateOneRequiredWithoutPicksNestedInput>;
  is_random?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  leaguemembers?: InputMaybe<LeagueMemberUpdateOneWithoutPicksNestedInput>;
  loser?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  people?: InputMaybe<UserUpdateOneRequiredWithoutPicksNestedInput>;
  score?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  season?: InputMaybe<IntFieldUpdateOperationsInput>;
  ts?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  week?: InputMaybe<IntFieldUpdateOperationsInput>;
  winner?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type PickUpdateManyMutationInput = {
  correct?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  done?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  is_random?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  loser?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  score?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  season?: InputMaybe<IntFieldUpdateOperationsInput>;
  ts?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  week?: InputMaybe<IntFieldUpdateOperationsInput>;
  winner?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type PickUpdateManyWithWhereWithoutGamesInput = {
  data: PickUpdateManyMutationInput;
  where: PickScalarWhereInput;
};

export type PickUpdateManyWithWhereWithoutLeaguemembersInput = {
  data: PickUpdateManyMutationInput;
  where: PickScalarWhereInput;
};

export type PickUpdateManyWithWhereWithoutPeopleInput = {
  data: PickUpdateManyMutationInput;
  where: PickScalarWhereInput;
};

export type PickUpdateManyWithoutGamesNestedInput = {
  connect?: InputMaybe<Array<PickWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PickCreateOrConnectWithoutGamesInput>>;
  create?: InputMaybe<Array<PickCreateWithoutGamesInput>>;
  createMany?: InputMaybe<PickCreateManyGamesInputEnvelope>;
  delete?: InputMaybe<Array<PickWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PickScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PickWhereUniqueInput>>;
  set?: InputMaybe<Array<PickWhereUniqueInput>>;
  update?: InputMaybe<Array<PickUpdateWithWhereUniqueWithoutGamesInput>>;
  updateMany?: InputMaybe<Array<PickUpdateManyWithWhereWithoutGamesInput>>;
  upsert?: InputMaybe<Array<PickUpsertWithWhereUniqueWithoutGamesInput>>;
};

export type PickUpdateManyWithoutLeaguemembersNestedInput = {
  connect?: InputMaybe<Array<PickWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PickCreateOrConnectWithoutLeaguemembersInput>>;
  create?: InputMaybe<Array<PickCreateWithoutLeaguemembersInput>>;
  createMany?: InputMaybe<PickCreateManyLeaguemembersInputEnvelope>;
  delete?: InputMaybe<Array<PickWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PickScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PickWhereUniqueInput>>;
  set?: InputMaybe<Array<PickWhereUniqueInput>>;
  update?: InputMaybe<Array<PickUpdateWithWhereUniqueWithoutLeaguemembersInput>>;
  updateMany?: InputMaybe<Array<PickUpdateManyWithWhereWithoutLeaguemembersInput>>;
  upsert?: InputMaybe<Array<PickUpsertWithWhereUniqueWithoutLeaguemembersInput>>;
};

export type PickUpdateManyWithoutPeopleNestedInput = {
  connect?: InputMaybe<Array<PickWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PickCreateOrConnectWithoutPeopleInput>>;
  create?: InputMaybe<Array<PickCreateWithoutPeopleInput>>;
  createMany?: InputMaybe<PickCreateManyPeopleInputEnvelope>;
  delete?: InputMaybe<Array<PickWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PickScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PickWhereUniqueInput>>;
  set?: InputMaybe<Array<PickWhereUniqueInput>>;
  update?: InputMaybe<Array<PickUpdateWithWhereUniqueWithoutPeopleInput>>;
  updateMany?: InputMaybe<Array<PickUpdateManyWithWhereWithoutPeopleInput>>;
  upsert?: InputMaybe<Array<PickUpsertWithWhereUniqueWithoutPeopleInput>>;
};

export type PickUpdateWithWhereUniqueWithoutGamesInput = {
  data: PickUpdateWithoutGamesInput;
  where: PickWhereUniqueInput;
};

export type PickUpdateWithWhereUniqueWithoutLeaguemembersInput = {
  data: PickUpdateWithoutLeaguemembersInput;
  where: PickWhereUniqueInput;
};

export type PickUpdateWithWhereUniqueWithoutPeopleInput = {
  data: PickUpdateWithoutPeopleInput;
  where: PickWhereUniqueInput;
};

export type PickUpdateWithoutGamesInput = {
  correct?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  done?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  is_random?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  leaguemembers?: InputMaybe<LeagueMemberUpdateOneWithoutPicksNestedInput>;
  loser?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  people?: InputMaybe<UserUpdateOneRequiredWithoutPicksNestedInput>;
  score?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  season?: InputMaybe<IntFieldUpdateOperationsInput>;
  ts?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  week?: InputMaybe<IntFieldUpdateOperationsInput>;
  winner?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type PickUpdateWithoutLeaguemembersInput = {
  correct?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  done?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  games?: InputMaybe<GameUpdateOneRequiredWithoutPicksNestedInput>;
  is_random?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  loser?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  people?: InputMaybe<UserUpdateOneRequiredWithoutPicksNestedInput>;
  score?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  season?: InputMaybe<IntFieldUpdateOperationsInput>;
  ts?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  week?: InputMaybe<IntFieldUpdateOperationsInput>;
  winner?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type PickUpdateWithoutPeopleInput = {
  correct?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  done?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  games?: InputMaybe<GameUpdateOneRequiredWithoutPicksNestedInput>;
  is_random?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  leaguemembers?: InputMaybe<LeagueMemberUpdateOneWithoutPicksNestedInput>;
  loser?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  score?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  season?: InputMaybe<IntFieldUpdateOperationsInput>;
  ts?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  week?: InputMaybe<IntFieldUpdateOperationsInput>;
  winner?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type PickUpsertWithWhereUniqueWithoutGamesInput = {
  create: PickCreateWithoutGamesInput;
  update: PickUpdateWithoutGamesInput;
  where: PickWhereUniqueInput;
};

export type PickUpsertWithWhereUniqueWithoutLeaguemembersInput = {
  create: PickCreateWithoutLeaguemembersInput;
  update: PickUpdateWithoutLeaguemembersInput;
  where: PickWhereUniqueInput;
};

export type PickUpsertWithWhereUniqueWithoutPeopleInput = {
  create: PickCreateWithoutPeopleInput;
  update: PickUpdateWithoutPeopleInput;
  where: PickWhereUniqueInput;
};

export type PickWhereInput = {
  AND?: InputMaybe<Array<PickWhereInput>>;
  NOT?: InputMaybe<Array<PickWhereInput>>;
  OR?: InputMaybe<Array<PickWhereInput>>;
  correct?: InputMaybe<IntNullableFilter>;
  done?: InputMaybe<IntNullableFilter>;
  games?: InputMaybe<GameRelationFilter>;
  gid?: InputMaybe<IntFilter>;
  is_random?: InputMaybe<BoolNullableFilter>;
  leaguemembers?: InputMaybe<LeagueMemberRelationFilter>;
  loser?: InputMaybe<IntNullableFilter>;
  member_id?: InputMaybe<IntNullableFilter>;
  people?: InputMaybe<UserRelationFilter>;
  pickid?: InputMaybe<IntFilter>;
  score?: InputMaybe<IntNullableFilter>;
  season?: InputMaybe<IntFilter>;
  ts?: InputMaybe<DateTimeFilter>;
  uid?: InputMaybe<IntFilter>;
  week?: InputMaybe<IntFilter>;
  winner?: InputMaybe<IntNullableFilter>;
};

export type PickWhereUniqueInput = {
  pickid?: InputMaybe<Scalars['Int']>;
};

export type PicksByWeekResponse = {
  __typename?: 'PicksByWeekResponse';
  canView: Scalars['Boolean'];
  games: Array<Game>;
  picks: Array<Pick>;
  season?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateGame: AggregateGame;
  aggregateLeague: AggregateLeague;
  aggregateLeagueMember: AggregateLeagueMember;
  aggregatePick: AggregatePick;
  aggregateSuperbowl: AggregateSuperbowl;
  aggregateSuperbowlSquare: AggregateSuperbowlSquare;
  aggregateTeam: AggregateTeam;
  aggregateUser: AggregateUser;
  aggregateWeekWinners: AggregateWeekWinners;
  findFirstGame?: Maybe<Game>;
  findFirstGameOrThrow?: Maybe<Game>;
  findFirstLeague?: Maybe<League>;
  findFirstLeagueMember?: Maybe<LeagueMember>;
  findFirstLeagueMemberOrThrow?: Maybe<LeagueMember>;
  findFirstLeagueOrThrow?: Maybe<League>;
  findFirstPick?: Maybe<Pick>;
  findFirstPickOrThrow?: Maybe<Pick>;
  findFirstSuperbowl?: Maybe<Superbowl>;
  findFirstSuperbowlOrThrow?: Maybe<Superbowl>;
  findFirstSuperbowlSquare?: Maybe<SuperbowlSquare>;
  findFirstSuperbowlSquareOrThrow?: Maybe<SuperbowlSquare>;
  findFirstTeam?: Maybe<Team>;
  findFirstTeamOrThrow?: Maybe<Team>;
  findFirstUser?: Maybe<User>;
  findFirstUserOrThrow?: Maybe<User>;
  findFirstWeekWinners?: Maybe<WeekWinners>;
  findFirstWeekWinnersOrThrow?: Maybe<WeekWinners>;
  findManyWeekWinners: Array<WeekWinners>;
  findUniqueWeekWinners?: Maybe<WeekWinners>;
  findUniqueWeekWinnersOrThrow?: Maybe<WeekWinners>;
  firstNotStartedWeek: FirstNotStartedWeekResponse;
  game?: Maybe<Game>;
  games: Array<Game>;
  getGame?: Maybe<Game>;
  getLeague?: Maybe<League>;
  getLeagueMember?: Maybe<LeagueMember>;
  getPick?: Maybe<Pick>;
  getSuperbowl?: Maybe<Superbowl>;
  getSuperbowlSquare?: Maybe<SuperbowlSquare>;
  getTeam?: Maybe<Team>;
  getUser?: Maybe<User>;
  groupByGame: Array<GameGroupBy>;
  groupByLeague: Array<LeagueGroupBy>;
  groupByLeagueMember: Array<LeagueMemberGroupBy>;
  groupByPick: Array<PickGroupBy>;
  groupBySuperbowl: Array<SuperbowlGroupBy>;
  groupBySuperbowlSquare: Array<SuperbowlSquareGroupBy>;
  groupByTeam: Array<TeamGroupBy>;
  groupByUser: Array<UserGroupBy>;
  groupByWeekWinners: Array<WeekWinnersGroupBy>;
  league?: Maybe<League>;
  leagueMember?: Maybe<LeagueMember>;
  leagueMembers: Array<LeagueMember>;
  leagues: Array<League>;
  me?: Maybe<User>;
  mostRecentStartedWeek: MostRecentStartedWeekResponse;
  pick?: Maybe<Pick>;
  picks: Array<Pick>;
  picksByWeek: PicksByWeekResponse;
  superbowl?: Maybe<Superbowl>;
  superbowlSquare?: Maybe<SuperbowlSquare>;
  superbowlSquares: Array<SuperbowlSquare>;
  superbowls: Array<Superbowl>;
  team?: Maybe<Team>;
  teams: Array<Team>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryAggregateGameArgs = {
  cursor?: InputMaybe<GameWhereUniqueInput>;
  orderBy?: InputMaybe<Array<GameOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GameWhereInput>;
};


export type QueryAggregateLeagueArgs = {
  cursor?: InputMaybe<LeagueWhereUniqueInput>;
  orderBy?: InputMaybe<Array<LeagueOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LeagueWhereInput>;
};


export type QueryAggregateLeagueMemberArgs = {
  cursor?: InputMaybe<LeagueMemberWhereUniqueInput>;
  orderBy?: InputMaybe<Array<LeagueMemberOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LeagueMemberWhereInput>;
};


export type QueryAggregatePickArgs = {
  cursor?: InputMaybe<PickWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PickOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PickWhereInput>;
};


export type QueryAggregateSuperbowlArgs = {
  cursor?: InputMaybe<SuperbowlWhereUniqueInput>;
  orderBy?: InputMaybe<Array<SuperbowlOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SuperbowlWhereInput>;
};


export type QueryAggregateSuperbowlSquareArgs = {
  cursor?: InputMaybe<SuperbowlSquareWhereUniqueInput>;
  orderBy?: InputMaybe<Array<SuperbowlSquareOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SuperbowlSquareWhereInput>;
};


export type QueryAggregateTeamArgs = {
  cursor?: InputMaybe<TeamWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TeamOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TeamWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryAggregateWeekWinnersArgs = {
  cursor?: InputMaybe<WeekWinnersWhereUniqueInput>;
  orderBy?: InputMaybe<Array<WeekWinnersOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WeekWinnersWhereInput>;
};


export type QueryFindFirstGameArgs = {
  cursor?: InputMaybe<GameWhereUniqueInput>;
  distinct?: InputMaybe<Array<GameScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GameOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GameWhereInput>;
};


export type QueryFindFirstGameOrThrowArgs = {
  cursor?: InputMaybe<GameWhereUniqueInput>;
  distinct?: InputMaybe<Array<GameScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GameOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GameWhereInput>;
};


export type QueryFindFirstLeagueArgs = {
  cursor?: InputMaybe<LeagueWhereUniqueInput>;
  distinct?: InputMaybe<Array<LeagueScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LeagueOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LeagueWhereInput>;
};


export type QueryFindFirstLeagueMemberArgs = {
  cursor?: InputMaybe<LeagueMemberWhereUniqueInput>;
  distinct?: InputMaybe<Array<LeagueMemberScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LeagueMemberOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LeagueMemberWhereInput>;
};


export type QueryFindFirstLeagueMemberOrThrowArgs = {
  cursor?: InputMaybe<LeagueMemberWhereUniqueInput>;
  distinct?: InputMaybe<Array<LeagueMemberScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LeagueMemberOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LeagueMemberWhereInput>;
};


export type QueryFindFirstLeagueOrThrowArgs = {
  cursor?: InputMaybe<LeagueWhereUniqueInput>;
  distinct?: InputMaybe<Array<LeagueScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LeagueOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LeagueWhereInput>;
};


export type QueryFindFirstPickArgs = {
  cursor?: InputMaybe<PickWhereUniqueInput>;
  distinct?: InputMaybe<Array<PickScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PickOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PickWhereInput>;
};


export type QueryFindFirstPickOrThrowArgs = {
  cursor?: InputMaybe<PickWhereUniqueInput>;
  distinct?: InputMaybe<Array<PickScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PickOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PickWhereInput>;
};


export type QueryFindFirstSuperbowlArgs = {
  cursor?: InputMaybe<SuperbowlWhereUniqueInput>;
  distinct?: InputMaybe<Array<SuperbowlScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SuperbowlOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SuperbowlWhereInput>;
};


export type QueryFindFirstSuperbowlOrThrowArgs = {
  cursor?: InputMaybe<SuperbowlWhereUniqueInput>;
  distinct?: InputMaybe<Array<SuperbowlScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SuperbowlOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SuperbowlWhereInput>;
};


export type QueryFindFirstSuperbowlSquareArgs = {
  cursor?: InputMaybe<SuperbowlSquareWhereUniqueInput>;
  distinct?: InputMaybe<Array<SuperbowlSquareScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SuperbowlSquareOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SuperbowlSquareWhereInput>;
};


export type QueryFindFirstSuperbowlSquareOrThrowArgs = {
  cursor?: InputMaybe<SuperbowlSquareWhereUniqueInput>;
  distinct?: InputMaybe<Array<SuperbowlSquareScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SuperbowlSquareOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SuperbowlSquareWhereInput>;
};


export type QueryFindFirstTeamArgs = {
  cursor?: InputMaybe<TeamWhereUniqueInput>;
  distinct?: InputMaybe<Array<TeamScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TeamOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TeamWhereInput>;
};


export type QueryFindFirstTeamOrThrowArgs = {
  cursor?: InputMaybe<TeamWhereUniqueInput>;
  distinct?: InputMaybe<Array<TeamScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TeamOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TeamWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstUserOrThrowArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstWeekWinnersArgs = {
  cursor?: InputMaybe<WeekWinnersWhereUniqueInput>;
  distinct?: InputMaybe<Array<WeekWinnersScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<WeekWinnersOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WeekWinnersWhereInput>;
};


export type QueryFindFirstWeekWinnersOrThrowArgs = {
  cursor?: InputMaybe<WeekWinnersWhereUniqueInput>;
  distinct?: InputMaybe<Array<WeekWinnersScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<WeekWinnersOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WeekWinnersWhereInput>;
};


export type QueryFindManyWeekWinnersArgs = {
  cursor?: InputMaybe<WeekWinnersWhereUniqueInput>;
  distinct?: InputMaybe<Array<WeekWinnersScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<WeekWinnersOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WeekWinnersWhereInput>;
};


export type QueryFindUniqueWeekWinnersArgs = {
  where: WeekWinnersWhereUniqueInput;
};


export type QueryFindUniqueWeekWinnersOrThrowArgs = {
  where: WeekWinnersWhereUniqueInput;
};


export type QueryFirstNotStartedWeekArgs = {
  override?: InputMaybe<Scalars['Boolean']>;
  week?: InputMaybe<Scalars['Int']>;
};


export type QueryGameArgs = {
  where: GameWhereUniqueInput;
};


export type QueryGamesArgs = {
  cursor?: InputMaybe<GameWhereUniqueInput>;
  distinct?: InputMaybe<Array<GameScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GameOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GameWhereInput>;
};


export type QueryGetGameArgs = {
  where: GameWhereUniqueInput;
};


export type QueryGetLeagueArgs = {
  where: LeagueWhereUniqueInput;
};


export type QueryGetLeagueMemberArgs = {
  where: LeagueMemberWhereUniqueInput;
};


export type QueryGetPickArgs = {
  where: PickWhereUniqueInput;
};


export type QueryGetSuperbowlArgs = {
  where: SuperbowlWhereUniqueInput;
};


export type QueryGetSuperbowlSquareArgs = {
  where: SuperbowlSquareWhereUniqueInput;
};


export type QueryGetTeamArgs = {
  where: TeamWhereUniqueInput;
};


export type QueryGetUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryGroupByGameArgs = {
  by: Array<GameScalarFieldEnum>;
  having?: InputMaybe<GameScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<GameOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GameWhereInput>;
};


export type QueryGroupByLeagueArgs = {
  by: Array<LeagueScalarFieldEnum>;
  having?: InputMaybe<LeagueScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<LeagueOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LeagueWhereInput>;
};


export type QueryGroupByLeagueMemberArgs = {
  by: Array<LeagueMemberScalarFieldEnum>;
  having?: InputMaybe<LeagueMemberScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<LeagueMemberOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LeagueMemberWhereInput>;
};


export type QueryGroupByPickArgs = {
  by: Array<PickScalarFieldEnum>;
  having?: InputMaybe<PickScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PickOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PickWhereInput>;
};


export type QueryGroupBySuperbowlArgs = {
  by: Array<SuperbowlScalarFieldEnum>;
  having?: InputMaybe<SuperbowlScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<SuperbowlOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SuperbowlWhereInput>;
};


export type QueryGroupBySuperbowlSquareArgs = {
  by: Array<SuperbowlSquareScalarFieldEnum>;
  having?: InputMaybe<SuperbowlSquareScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<SuperbowlSquareOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SuperbowlSquareWhereInput>;
};


export type QueryGroupByTeamArgs = {
  by: Array<TeamScalarFieldEnum>;
  having?: InputMaybe<TeamScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TeamOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TeamWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGroupByWeekWinnersArgs = {
  by: Array<WeekWinnersScalarFieldEnum>;
  having?: InputMaybe<WeekWinnersScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<WeekWinnersOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WeekWinnersWhereInput>;
};


export type QueryLeagueArgs = {
  where: LeagueWhereUniqueInput;
};


export type QueryLeagueMemberArgs = {
  where: LeagueMemberWhereUniqueInput;
};


export type QueryLeagueMembersArgs = {
  cursor?: InputMaybe<LeagueMemberWhereUniqueInput>;
  distinct?: InputMaybe<Array<LeagueMemberScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LeagueMemberOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LeagueMemberWhereInput>;
};


export type QueryLeaguesArgs = {
  cursor?: InputMaybe<LeagueWhereUniqueInput>;
  distinct?: InputMaybe<Array<LeagueScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LeagueOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LeagueWhereInput>;
};


export type QueryMostRecentStartedWeekArgs = {
  league_id: Scalars['Int'];
};


export type QueryPickArgs = {
  where: PickWhereUniqueInput;
};


export type QueryPicksArgs = {
  cursor?: InputMaybe<PickWhereUniqueInput>;
  distinct?: InputMaybe<Array<PickScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PickOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PickWhereInput>;
};


export type QueryPicksByWeekArgs = {
  league_id: Scalars['Int'];
  override?: InputMaybe<Scalars['Boolean']>;
  week?: InputMaybe<Scalars['Int']>;
};


export type QuerySuperbowlArgs = {
  where: SuperbowlWhereUniqueInput;
};


export type QuerySuperbowlSquareArgs = {
  where: SuperbowlSquareWhereUniqueInput;
};


export type QuerySuperbowlSquaresArgs = {
  cursor?: InputMaybe<SuperbowlSquareWhereUniqueInput>;
  distinct?: InputMaybe<Array<SuperbowlSquareScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SuperbowlSquareOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SuperbowlSquareWhereInput>;
};


export type QuerySuperbowlsArgs = {
  cursor?: InputMaybe<SuperbowlWhereUniqueInput>;
  distinct?: InputMaybe<Array<SuperbowlScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SuperbowlOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SuperbowlWhereInput>;
};


export type QueryTeamArgs = {
  where: TeamWhereUniqueInput;
};


export type QueryTeamsArgs = {
  cursor?: InputMaybe<TeamWhereUniqueInput>;
  distinct?: InputMaybe<Array<TeamScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TeamOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TeamWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  membership: LeagueMember;
  success: Scalars['Boolean'];
  user: User;
};

export enum ReminderPolicy {
  ThreeHoursBefore = 'three_hours_before'
}

export enum ScoringType {
  GameWinner = 'game_winner'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Superbowl = {
  __typename?: 'Superbowl';
  id: Scalars['ID'];
  leaguemembers?: Maybe<LeagueMember>;
  loser: Scalars['Int'];
  member_id?: Maybe<Scalars['Int']>;
  pickid: Scalars['Int'];
  score: Scalars['Int'];
  season?: Maybe<Scalars['Int']>;
  teams_superbowl_loserToteams: Team;
  teams_superbowl_winnerToteams: Team;
  ts: Scalars['DateTimeBetterSerialization'];
  uid: Scalars['Int'];
  winner: Scalars['Int'];
};

export type SuperbowlAvgAggregate = {
  __typename?: 'SuperbowlAvgAggregate';
  loser?: Maybe<Scalars['Float']>;
  member_id?: Maybe<Scalars['Float']>;
  pickid?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
  season?: Maybe<Scalars['Float']>;
  uid?: Maybe<Scalars['Float']>;
  winner?: Maybe<Scalars['Float']>;
};

export type SuperbowlAvgOrderByAggregateInput = {
  loser?: InputMaybe<SortOrder>;
  member_id?: InputMaybe<SortOrder>;
  pickid?: InputMaybe<SortOrder>;
  score?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
  winner?: InputMaybe<SortOrder>;
};

export type SuperbowlCountAggregate = {
  __typename?: 'SuperbowlCountAggregate';
  _all: Scalars['Int'];
  loser: Scalars['Int'];
  member_id: Scalars['Int'];
  pickid: Scalars['Int'];
  score: Scalars['Int'];
  season: Scalars['Int'];
  ts: Scalars['Int'];
  uid: Scalars['Int'];
  winner: Scalars['Int'];
};

export type SuperbowlCountOrderByAggregateInput = {
  loser?: InputMaybe<SortOrder>;
  member_id?: InputMaybe<SortOrder>;
  pickid?: InputMaybe<SortOrder>;
  score?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
  winner?: InputMaybe<SortOrder>;
};

export type SuperbowlCreateInput = {
  leaguemembers?: InputMaybe<LeagueMemberCreateNestedOneWithoutSuperbowlInput>;
  score: Scalars['Int'];
  season?: InputMaybe<Scalars['Int']>;
  teams_superbowl_loserToteams: TeamCreateNestedOneWithoutSuperbowl_Superbowl_LoserToteamsInput;
  teams_superbowl_winnerToteams: TeamCreateNestedOneWithoutSuperbowl_Superbowl_WinnerToteamsInput;
  ts?: InputMaybe<Scalars['DateTime']>;
  uid: Scalars['Int'];
};

export type SuperbowlCreateManyInput = {
  loser: Scalars['Int'];
  member_id?: InputMaybe<Scalars['Int']>;
  pickid?: InputMaybe<Scalars['Int']>;
  score: Scalars['Int'];
  season?: InputMaybe<Scalars['Int']>;
  ts?: InputMaybe<Scalars['DateTime']>;
  uid: Scalars['Int'];
  winner: Scalars['Int'];
};

export type SuperbowlCreateManyLeaguemembersInput = {
  loser: Scalars['Int'];
  pickid?: InputMaybe<Scalars['Int']>;
  score: Scalars['Int'];
  season?: InputMaybe<Scalars['Int']>;
  ts?: InputMaybe<Scalars['DateTime']>;
  uid: Scalars['Int'];
  winner: Scalars['Int'];
};

export type SuperbowlCreateManyLeaguemembersInputEnvelope = {
  data: Array<SuperbowlCreateManyLeaguemembersInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type SuperbowlCreateManyTeams_Superbowl_LoserToteamsInput = {
  member_id?: InputMaybe<Scalars['Int']>;
  pickid?: InputMaybe<Scalars['Int']>;
  score: Scalars['Int'];
  season?: InputMaybe<Scalars['Int']>;
  ts?: InputMaybe<Scalars['DateTime']>;
  uid: Scalars['Int'];
  winner: Scalars['Int'];
};

export type SuperbowlCreateManyTeams_Superbowl_LoserToteamsInputEnvelope = {
  data: Array<SuperbowlCreateManyTeams_Superbowl_LoserToteamsInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type SuperbowlCreateManyTeams_Superbowl_WinnerToteamsInput = {
  loser: Scalars['Int'];
  member_id?: InputMaybe<Scalars['Int']>;
  pickid?: InputMaybe<Scalars['Int']>;
  score: Scalars['Int'];
  season?: InputMaybe<Scalars['Int']>;
  ts?: InputMaybe<Scalars['DateTime']>;
  uid: Scalars['Int'];
};

export type SuperbowlCreateManyTeams_Superbowl_WinnerToteamsInputEnvelope = {
  data: Array<SuperbowlCreateManyTeams_Superbowl_WinnerToteamsInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type SuperbowlCreateNestedManyWithoutLeaguemembersInput = {
  connect?: InputMaybe<Array<SuperbowlWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SuperbowlCreateOrConnectWithoutLeaguemembersInput>>;
  create?: InputMaybe<Array<SuperbowlCreateWithoutLeaguemembersInput>>;
  createMany?: InputMaybe<SuperbowlCreateManyLeaguemembersInputEnvelope>;
};

export type SuperbowlCreateNestedManyWithoutTeams_Superbowl_LoserToteamsInput = {
  connect?: InputMaybe<Array<SuperbowlWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SuperbowlCreateOrConnectWithoutTeams_Superbowl_LoserToteamsInput>>;
  create?: InputMaybe<Array<SuperbowlCreateWithoutTeams_Superbowl_LoserToteamsInput>>;
  createMany?: InputMaybe<SuperbowlCreateManyTeams_Superbowl_LoserToteamsInputEnvelope>;
};

export type SuperbowlCreateNestedManyWithoutTeams_Superbowl_WinnerToteamsInput = {
  connect?: InputMaybe<Array<SuperbowlWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SuperbowlCreateOrConnectWithoutTeams_Superbowl_WinnerToteamsInput>>;
  create?: InputMaybe<Array<SuperbowlCreateWithoutTeams_Superbowl_WinnerToteamsInput>>;
  createMany?: InputMaybe<SuperbowlCreateManyTeams_Superbowl_WinnerToteamsInputEnvelope>;
};

export type SuperbowlCreateOrConnectWithoutLeaguemembersInput = {
  create: SuperbowlCreateWithoutLeaguemembersInput;
  where: SuperbowlWhereUniqueInput;
};

export type SuperbowlCreateOrConnectWithoutTeams_Superbowl_LoserToteamsInput = {
  create: SuperbowlCreateWithoutTeams_Superbowl_LoserToteamsInput;
  where: SuperbowlWhereUniqueInput;
};

export type SuperbowlCreateOrConnectWithoutTeams_Superbowl_WinnerToteamsInput = {
  create: SuperbowlCreateWithoutTeams_Superbowl_WinnerToteamsInput;
  where: SuperbowlWhereUniqueInput;
};

export type SuperbowlCreateWithoutLeaguemembersInput = {
  score: Scalars['Int'];
  season?: InputMaybe<Scalars['Int']>;
  teams_superbowl_loserToteams: TeamCreateNestedOneWithoutSuperbowl_Superbowl_LoserToteamsInput;
  teams_superbowl_winnerToteams: TeamCreateNestedOneWithoutSuperbowl_Superbowl_WinnerToteamsInput;
  ts?: InputMaybe<Scalars['DateTime']>;
  uid: Scalars['Int'];
};

export type SuperbowlCreateWithoutTeams_Superbowl_LoserToteamsInput = {
  leaguemembers?: InputMaybe<LeagueMemberCreateNestedOneWithoutSuperbowlInput>;
  score: Scalars['Int'];
  season?: InputMaybe<Scalars['Int']>;
  teams_superbowl_winnerToteams: TeamCreateNestedOneWithoutSuperbowl_Superbowl_WinnerToteamsInput;
  ts?: InputMaybe<Scalars['DateTime']>;
  uid: Scalars['Int'];
};

export type SuperbowlCreateWithoutTeams_Superbowl_WinnerToteamsInput = {
  leaguemembers?: InputMaybe<LeagueMemberCreateNestedOneWithoutSuperbowlInput>;
  score: Scalars['Int'];
  season?: InputMaybe<Scalars['Int']>;
  teams_superbowl_loserToteams: TeamCreateNestedOneWithoutSuperbowl_Superbowl_LoserToteamsInput;
  ts?: InputMaybe<Scalars['DateTime']>;
  uid: Scalars['Int'];
};

export type SuperbowlGroupBy = {
  __typename?: 'SuperbowlGroupBy';
  _avg?: Maybe<SuperbowlAvgAggregate>;
  _count?: Maybe<SuperbowlCountAggregate>;
  _max?: Maybe<SuperbowlMaxAggregate>;
  _min?: Maybe<SuperbowlMinAggregate>;
  _sum?: Maybe<SuperbowlSumAggregate>;
  loser: Scalars['Int'];
  member_id?: Maybe<Scalars['Int']>;
  pickid: Scalars['Int'];
  score: Scalars['Int'];
  season?: Maybe<Scalars['Int']>;
  ts?: Maybe<Scalars['DateTime']>;
  uid: Scalars['Int'];
  winner: Scalars['Int'];
};

export type SuperbowlListRelationFilter = {
  every?: InputMaybe<SuperbowlWhereInput>;
  none?: InputMaybe<SuperbowlWhereInput>;
  some?: InputMaybe<SuperbowlWhereInput>;
};

export type SuperbowlMaxAggregate = {
  __typename?: 'SuperbowlMaxAggregate';
  loser?: Maybe<Scalars['Int']>;
  member_id?: Maybe<Scalars['Int']>;
  pickid?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
  season?: Maybe<Scalars['Int']>;
  ts?: Maybe<Scalars['DateTime']>;
  uid?: Maybe<Scalars['Int']>;
  winner?: Maybe<Scalars['Int']>;
};

export type SuperbowlMaxOrderByAggregateInput = {
  loser?: InputMaybe<SortOrder>;
  member_id?: InputMaybe<SortOrder>;
  pickid?: InputMaybe<SortOrder>;
  score?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
  winner?: InputMaybe<SortOrder>;
};

export type SuperbowlMinAggregate = {
  __typename?: 'SuperbowlMinAggregate';
  loser?: Maybe<Scalars['Int']>;
  member_id?: Maybe<Scalars['Int']>;
  pickid?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
  season?: Maybe<Scalars['Int']>;
  ts?: Maybe<Scalars['DateTime']>;
  uid?: Maybe<Scalars['Int']>;
  winner?: Maybe<Scalars['Int']>;
};

export type SuperbowlMinOrderByAggregateInput = {
  loser?: InputMaybe<SortOrder>;
  member_id?: InputMaybe<SortOrder>;
  pickid?: InputMaybe<SortOrder>;
  score?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
  winner?: InputMaybe<SortOrder>;
};

export type SuperbowlOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SuperbowlOrderByWithAggregationInput = {
  _avg?: InputMaybe<SuperbowlAvgOrderByAggregateInput>;
  _count?: InputMaybe<SuperbowlCountOrderByAggregateInput>;
  _max?: InputMaybe<SuperbowlMaxOrderByAggregateInput>;
  _min?: InputMaybe<SuperbowlMinOrderByAggregateInput>;
  _sum?: InputMaybe<SuperbowlSumOrderByAggregateInput>;
  loser?: InputMaybe<SortOrder>;
  member_id?: InputMaybe<SortOrder>;
  pickid?: InputMaybe<SortOrder>;
  score?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
  winner?: InputMaybe<SortOrder>;
};

export type SuperbowlOrderByWithRelationInput = {
  leaguemembers?: InputMaybe<LeagueMemberOrderByWithRelationInput>;
  loser?: InputMaybe<SortOrder>;
  member_id?: InputMaybe<SortOrder>;
  pickid?: InputMaybe<SortOrder>;
  score?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
  teams_superbowl_loserToteams?: InputMaybe<TeamOrderByWithRelationInput>;
  teams_superbowl_winnerToteams?: InputMaybe<TeamOrderByWithRelationInput>;
  ts?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
  winner?: InputMaybe<SortOrder>;
};

export enum SuperbowlScalarFieldEnum {
  Loser = 'loser',
  MemberId = 'member_id',
  Pickid = 'pickid',
  Score = 'score',
  Season = 'season',
  Ts = 'ts',
  Uid = 'uid',
  Winner = 'winner'
}

export type SuperbowlScalarWhereInput = {
  AND?: InputMaybe<Array<SuperbowlScalarWhereInput>>;
  NOT?: InputMaybe<Array<SuperbowlScalarWhereInput>>;
  OR?: InputMaybe<Array<SuperbowlScalarWhereInput>>;
  loser?: InputMaybe<IntFilter>;
  member_id?: InputMaybe<IntNullableFilter>;
  pickid?: InputMaybe<IntFilter>;
  score?: InputMaybe<IntFilter>;
  season?: InputMaybe<IntNullableFilter>;
  ts?: InputMaybe<DateTimeNullableFilter>;
  uid?: InputMaybe<IntFilter>;
  winner?: InputMaybe<IntFilter>;
};

export type SuperbowlScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SuperbowlScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SuperbowlScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SuperbowlScalarWhereWithAggregatesInput>>;
  loser?: InputMaybe<IntWithAggregatesFilter>;
  member_id?: InputMaybe<IntNullableWithAggregatesFilter>;
  pickid?: InputMaybe<IntWithAggregatesFilter>;
  score?: InputMaybe<IntWithAggregatesFilter>;
  season?: InputMaybe<IntNullableWithAggregatesFilter>;
  ts?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  uid?: InputMaybe<IntWithAggregatesFilter>;
  winner?: InputMaybe<IntWithAggregatesFilter>;
};

export type SuperbowlSquare = {
  __typename?: 'SuperbowlSquare';
  afc_score_index: Scalars['Int'];
  correct: Scalars['Boolean'];
  id: Scalars['ID'];
  league_id: Scalars['Int'];
  nfc_score_index: Scalars['Int'];
  square_id: Scalars['Int'];
  ts: Scalars['DateTimeBetterSerialization'];
  uid: Scalars['Int'];
};

export type SuperbowlSquareAvgAggregate = {
  __typename?: 'SuperbowlSquareAvgAggregate';
  afc_score_index?: Maybe<Scalars['Float']>;
  league_id?: Maybe<Scalars['Float']>;
  nfc_score_index?: Maybe<Scalars['Float']>;
  square_id?: Maybe<Scalars['Float']>;
  uid?: Maybe<Scalars['Float']>;
};

export type SuperbowlSquareAvgOrderByAggregateInput = {
  afc_score_index?: InputMaybe<SortOrder>;
  league_id?: InputMaybe<SortOrder>;
  nfc_score_index?: InputMaybe<SortOrder>;
  square_id?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
};

export type SuperbowlSquareCountAggregate = {
  __typename?: 'SuperbowlSquareCountAggregate';
  _all: Scalars['Int'];
  afc_score_index: Scalars['Int'];
  correct: Scalars['Int'];
  league_id: Scalars['Int'];
  nfc_score_index: Scalars['Int'];
  square_id: Scalars['Int'];
  ts: Scalars['Int'];
  uid: Scalars['Int'];
};

export type SuperbowlSquareCountOrderByAggregateInput = {
  afc_score_index?: InputMaybe<SortOrder>;
  correct?: InputMaybe<SortOrder>;
  league_id?: InputMaybe<SortOrder>;
  nfc_score_index?: InputMaybe<SortOrder>;
  square_id?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
};

export type SuperbowlSquareCreateInput = {
  afc_score_index: Scalars['Int'];
  correct: Scalars['Boolean'];
  league_id: Scalars['Int'];
  nfc_score_index: Scalars['Int'];
  ts?: InputMaybe<Scalars['DateTime']>;
  uid: Scalars['Int'];
};

export type SuperbowlSquareCreateManyInput = {
  afc_score_index: Scalars['Int'];
  correct: Scalars['Boolean'];
  league_id: Scalars['Int'];
  nfc_score_index: Scalars['Int'];
  square_id?: InputMaybe<Scalars['Int']>;
  ts?: InputMaybe<Scalars['DateTime']>;
  uid: Scalars['Int'];
};

export type SuperbowlSquareGroupBy = {
  __typename?: 'SuperbowlSquareGroupBy';
  _avg?: Maybe<SuperbowlSquareAvgAggregate>;
  _count?: Maybe<SuperbowlSquareCountAggregate>;
  _max?: Maybe<SuperbowlSquareMaxAggregate>;
  _min?: Maybe<SuperbowlSquareMinAggregate>;
  _sum?: Maybe<SuperbowlSquareSumAggregate>;
  afc_score_index: Scalars['Int'];
  correct: Scalars['Boolean'];
  league_id: Scalars['Int'];
  nfc_score_index: Scalars['Int'];
  square_id: Scalars['Int'];
  ts: Scalars['DateTime'];
  uid: Scalars['Int'];
};

export type SuperbowlSquareMaxAggregate = {
  __typename?: 'SuperbowlSquareMaxAggregate';
  afc_score_index?: Maybe<Scalars['Int']>;
  correct?: Maybe<Scalars['Boolean']>;
  league_id?: Maybe<Scalars['Int']>;
  nfc_score_index?: Maybe<Scalars['Int']>;
  square_id?: Maybe<Scalars['Int']>;
  ts?: Maybe<Scalars['DateTime']>;
  uid?: Maybe<Scalars['Int']>;
};

export type SuperbowlSquareMaxOrderByAggregateInput = {
  afc_score_index?: InputMaybe<SortOrder>;
  correct?: InputMaybe<SortOrder>;
  league_id?: InputMaybe<SortOrder>;
  nfc_score_index?: InputMaybe<SortOrder>;
  square_id?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
};

export type SuperbowlSquareMinAggregate = {
  __typename?: 'SuperbowlSquareMinAggregate';
  afc_score_index?: Maybe<Scalars['Int']>;
  correct?: Maybe<Scalars['Boolean']>;
  league_id?: Maybe<Scalars['Int']>;
  nfc_score_index?: Maybe<Scalars['Int']>;
  square_id?: Maybe<Scalars['Int']>;
  ts?: Maybe<Scalars['DateTime']>;
  uid?: Maybe<Scalars['Int']>;
};

export type SuperbowlSquareMinOrderByAggregateInput = {
  afc_score_index?: InputMaybe<SortOrder>;
  correct?: InputMaybe<SortOrder>;
  league_id?: InputMaybe<SortOrder>;
  nfc_score_index?: InputMaybe<SortOrder>;
  square_id?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
};

export type SuperbowlSquareOrderByWithAggregationInput = {
  _avg?: InputMaybe<SuperbowlSquareAvgOrderByAggregateInput>;
  _count?: InputMaybe<SuperbowlSquareCountOrderByAggregateInput>;
  _max?: InputMaybe<SuperbowlSquareMaxOrderByAggregateInput>;
  _min?: InputMaybe<SuperbowlSquareMinOrderByAggregateInput>;
  _sum?: InputMaybe<SuperbowlSquareSumOrderByAggregateInput>;
  afc_score_index?: InputMaybe<SortOrder>;
  correct?: InputMaybe<SortOrder>;
  league_id?: InputMaybe<SortOrder>;
  nfc_score_index?: InputMaybe<SortOrder>;
  square_id?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
};

export type SuperbowlSquareOrderByWithRelationInput = {
  afc_score_index?: InputMaybe<SortOrder>;
  correct?: InputMaybe<SortOrder>;
  league_id?: InputMaybe<SortOrder>;
  nfc_score_index?: InputMaybe<SortOrder>;
  square_id?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
};

export enum SuperbowlSquareScalarFieldEnum {
  AfcScoreIndex = 'afc_score_index',
  Correct = 'correct',
  LeagueId = 'league_id',
  NfcScoreIndex = 'nfc_score_index',
  SquareId = 'square_id',
  Ts = 'ts',
  Uid = 'uid'
}

export type SuperbowlSquareScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SuperbowlSquareScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SuperbowlSquareScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SuperbowlSquareScalarWhereWithAggregatesInput>>;
  afc_score_index?: InputMaybe<IntWithAggregatesFilter>;
  correct?: InputMaybe<BoolWithAggregatesFilter>;
  league_id?: InputMaybe<IntWithAggregatesFilter>;
  nfc_score_index?: InputMaybe<IntWithAggregatesFilter>;
  square_id?: InputMaybe<IntWithAggregatesFilter>;
  ts?: InputMaybe<DateTimeWithAggregatesFilter>;
  uid?: InputMaybe<IntWithAggregatesFilter>;
};

export type SuperbowlSquareSumAggregate = {
  __typename?: 'SuperbowlSquareSumAggregate';
  afc_score_index?: Maybe<Scalars['Int']>;
  league_id?: Maybe<Scalars['Int']>;
  nfc_score_index?: Maybe<Scalars['Int']>;
  square_id?: Maybe<Scalars['Int']>;
  uid?: Maybe<Scalars['Int']>;
};

export type SuperbowlSquareSumOrderByAggregateInput = {
  afc_score_index?: InputMaybe<SortOrder>;
  league_id?: InputMaybe<SortOrder>;
  nfc_score_index?: InputMaybe<SortOrder>;
  square_id?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
};

export type SuperbowlSquareUpdateInput = {
  afc_score_index?: InputMaybe<IntFieldUpdateOperationsInput>;
  correct?: InputMaybe<BoolFieldUpdateOperationsInput>;
  league_id?: InputMaybe<IntFieldUpdateOperationsInput>;
  nfc_score_index?: InputMaybe<IntFieldUpdateOperationsInput>;
  ts?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  uid?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SuperbowlSquareUpdateManyMutationInput = {
  afc_score_index?: InputMaybe<IntFieldUpdateOperationsInput>;
  correct?: InputMaybe<BoolFieldUpdateOperationsInput>;
  league_id?: InputMaybe<IntFieldUpdateOperationsInput>;
  nfc_score_index?: InputMaybe<IntFieldUpdateOperationsInput>;
  ts?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  uid?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SuperbowlSquareWhereInput = {
  AND?: InputMaybe<Array<SuperbowlSquareWhereInput>>;
  NOT?: InputMaybe<Array<SuperbowlSquareWhereInput>>;
  OR?: InputMaybe<Array<SuperbowlSquareWhereInput>>;
  afc_score_index?: InputMaybe<IntFilter>;
  correct?: InputMaybe<BoolFilter>;
  league_id?: InputMaybe<IntFilter>;
  nfc_score_index?: InputMaybe<IntFilter>;
  square_id?: InputMaybe<IntFilter>;
  ts?: InputMaybe<DateTimeFilter>;
  uid?: InputMaybe<IntFilter>;
};

export type SuperbowlSquareWhereUniqueInput = {
  square_id?: InputMaybe<Scalars['Int']>;
};

export type SuperbowlSumAggregate = {
  __typename?: 'SuperbowlSumAggregate';
  loser?: Maybe<Scalars['Int']>;
  member_id?: Maybe<Scalars['Int']>;
  pickid?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
  season?: Maybe<Scalars['Int']>;
  uid?: Maybe<Scalars['Int']>;
  winner?: Maybe<Scalars['Int']>;
};

export type SuperbowlSumOrderByAggregateInput = {
  loser?: InputMaybe<SortOrder>;
  member_id?: InputMaybe<SortOrder>;
  pickid?: InputMaybe<SortOrder>;
  score?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
  winner?: InputMaybe<SortOrder>;
};

export type SuperbowlUpdateInput = {
  leaguemembers?: InputMaybe<LeagueMemberUpdateOneWithoutSuperbowlNestedInput>;
  score?: InputMaybe<IntFieldUpdateOperationsInput>;
  season?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  teams_superbowl_loserToteams?: InputMaybe<TeamUpdateOneRequiredWithoutSuperbowl_Superbowl_LoserToteamsNestedInput>;
  teams_superbowl_winnerToteams?: InputMaybe<TeamUpdateOneRequiredWithoutSuperbowl_Superbowl_WinnerToteamsNestedInput>;
  ts?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  uid?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SuperbowlUpdateManyMutationInput = {
  score?: InputMaybe<IntFieldUpdateOperationsInput>;
  season?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  ts?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  uid?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SuperbowlUpdateManyWithWhereWithoutLeaguemembersInput = {
  data: SuperbowlUpdateManyMutationInput;
  where: SuperbowlScalarWhereInput;
};

export type SuperbowlUpdateManyWithWhereWithoutTeams_Superbowl_LoserToteamsInput = {
  data: SuperbowlUpdateManyMutationInput;
  where: SuperbowlScalarWhereInput;
};

export type SuperbowlUpdateManyWithWhereWithoutTeams_Superbowl_WinnerToteamsInput = {
  data: SuperbowlUpdateManyMutationInput;
  where: SuperbowlScalarWhereInput;
};

export type SuperbowlUpdateManyWithoutLeaguemembersNestedInput = {
  connect?: InputMaybe<Array<SuperbowlWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SuperbowlCreateOrConnectWithoutLeaguemembersInput>>;
  create?: InputMaybe<Array<SuperbowlCreateWithoutLeaguemembersInput>>;
  createMany?: InputMaybe<SuperbowlCreateManyLeaguemembersInputEnvelope>;
  delete?: InputMaybe<Array<SuperbowlWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SuperbowlScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SuperbowlWhereUniqueInput>>;
  set?: InputMaybe<Array<SuperbowlWhereUniqueInput>>;
  update?: InputMaybe<Array<SuperbowlUpdateWithWhereUniqueWithoutLeaguemembersInput>>;
  updateMany?: InputMaybe<Array<SuperbowlUpdateManyWithWhereWithoutLeaguemembersInput>>;
  upsert?: InputMaybe<Array<SuperbowlUpsertWithWhereUniqueWithoutLeaguemembersInput>>;
};

export type SuperbowlUpdateManyWithoutTeams_Superbowl_LoserToteamsNestedInput = {
  connect?: InputMaybe<Array<SuperbowlWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SuperbowlCreateOrConnectWithoutTeams_Superbowl_LoserToteamsInput>>;
  create?: InputMaybe<Array<SuperbowlCreateWithoutTeams_Superbowl_LoserToteamsInput>>;
  createMany?: InputMaybe<SuperbowlCreateManyTeams_Superbowl_LoserToteamsInputEnvelope>;
  delete?: InputMaybe<Array<SuperbowlWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SuperbowlScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SuperbowlWhereUniqueInput>>;
  set?: InputMaybe<Array<SuperbowlWhereUniqueInput>>;
  update?: InputMaybe<Array<SuperbowlUpdateWithWhereUniqueWithoutTeams_Superbowl_LoserToteamsInput>>;
  updateMany?: InputMaybe<Array<SuperbowlUpdateManyWithWhereWithoutTeams_Superbowl_LoserToteamsInput>>;
  upsert?: InputMaybe<Array<SuperbowlUpsertWithWhereUniqueWithoutTeams_Superbowl_LoserToteamsInput>>;
};

export type SuperbowlUpdateManyWithoutTeams_Superbowl_WinnerToteamsNestedInput = {
  connect?: InputMaybe<Array<SuperbowlWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SuperbowlCreateOrConnectWithoutTeams_Superbowl_WinnerToteamsInput>>;
  create?: InputMaybe<Array<SuperbowlCreateWithoutTeams_Superbowl_WinnerToteamsInput>>;
  createMany?: InputMaybe<SuperbowlCreateManyTeams_Superbowl_WinnerToteamsInputEnvelope>;
  delete?: InputMaybe<Array<SuperbowlWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SuperbowlScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SuperbowlWhereUniqueInput>>;
  set?: InputMaybe<Array<SuperbowlWhereUniqueInput>>;
  update?: InputMaybe<Array<SuperbowlUpdateWithWhereUniqueWithoutTeams_Superbowl_WinnerToteamsInput>>;
  updateMany?: InputMaybe<Array<SuperbowlUpdateManyWithWhereWithoutTeams_Superbowl_WinnerToteamsInput>>;
  upsert?: InputMaybe<Array<SuperbowlUpsertWithWhereUniqueWithoutTeams_Superbowl_WinnerToteamsInput>>;
};

export type SuperbowlUpdateWithWhereUniqueWithoutLeaguemembersInput = {
  data: SuperbowlUpdateWithoutLeaguemembersInput;
  where: SuperbowlWhereUniqueInput;
};

export type SuperbowlUpdateWithWhereUniqueWithoutTeams_Superbowl_LoserToteamsInput = {
  data: SuperbowlUpdateWithoutTeams_Superbowl_LoserToteamsInput;
  where: SuperbowlWhereUniqueInput;
};

export type SuperbowlUpdateWithWhereUniqueWithoutTeams_Superbowl_WinnerToteamsInput = {
  data: SuperbowlUpdateWithoutTeams_Superbowl_WinnerToteamsInput;
  where: SuperbowlWhereUniqueInput;
};

export type SuperbowlUpdateWithoutLeaguemembersInput = {
  score?: InputMaybe<IntFieldUpdateOperationsInput>;
  season?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  teams_superbowl_loserToteams?: InputMaybe<TeamUpdateOneRequiredWithoutSuperbowl_Superbowl_LoserToteamsNestedInput>;
  teams_superbowl_winnerToteams?: InputMaybe<TeamUpdateOneRequiredWithoutSuperbowl_Superbowl_WinnerToteamsNestedInput>;
  ts?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  uid?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SuperbowlUpdateWithoutTeams_Superbowl_LoserToteamsInput = {
  leaguemembers?: InputMaybe<LeagueMemberUpdateOneWithoutSuperbowlNestedInput>;
  score?: InputMaybe<IntFieldUpdateOperationsInput>;
  season?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  teams_superbowl_winnerToteams?: InputMaybe<TeamUpdateOneRequiredWithoutSuperbowl_Superbowl_WinnerToteamsNestedInput>;
  ts?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  uid?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SuperbowlUpdateWithoutTeams_Superbowl_WinnerToteamsInput = {
  leaguemembers?: InputMaybe<LeagueMemberUpdateOneWithoutSuperbowlNestedInput>;
  score?: InputMaybe<IntFieldUpdateOperationsInput>;
  season?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  teams_superbowl_loserToteams?: InputMaybe<TeamUpdateOneRequiredWithoutSuperbowl_Superbowl_LoserToteamsNestedInput>;
  ts?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  uid?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SuperbowlUpsertWithWhereUniqueWithoutLeaguemembersInput = {
  create: SuperbowlCreateWithoutLeaguemembersInput;
  update: SuperbowlUpdateWithoutLeaguemembersInput;
  where: SuperbowlWhereUniqueInput;
};

export type SuperbowlUpsertWithWhereUniqueWithoutTeams_Superbowl_LoserToteamsInput = {
  create: SuperbowlCreateWithoutTeams_Superbowl_LoserToteamsInput;
  update: SuperbowlUpdateWithoutTeams_Superbowl_LoserToteamsInput;
  where: SuperbowlWhereUniqueInput;
};

export type SuperbowlUpsertWithWhereUniqueWithoutTeams_Superbowl_WinnerToteamsInput = {
  create: SuperbowlCreateWithoutTeams_Superbowl_WinnerToteamsInput;
  update: SuperbowlUpdateWithoutTeams_Superbowl_WinnerToteamsInput;
  where: SuperbowlWhereUniqueInput;
};

export type SuperbowlWhereInput = {
  AND?: InputMaybe<Array<SuperbowlWhereInput>>;
  NOT?: InputMaybe<Array<SuperbowlWhereInput>>;
  OR?: InputMaybe<Array<SuperbowlWhereInput>>;
  leaguemembers?: InputMaybe<LeagueMemberRelationFilter>;
  loser?: InputMaybe<IntFilter>;
  member_id?: InputMaybe<IntNullableFilter>;
  pickid?: InputMaybe<IntFilter>;
  score?: InputMaybe<IntFilter>;
  season?: InputMaybe<IntNullableFilter>;
  teams_superbowl_loserToteams?: InputMaybe<TeamRelationFilter>;
  teams_superbowl_winnerToteams?: InputMaybe<TeamRelationFilter>;
  ts?: InputMaybe<DateTimeNullableFilter>;
  uid?: InputMaybe<IntFilter>;
  winner?: InputMaybe<IntFilter>;
};

export type SuperbowlWhereUniqueInput = {
  pickid?: InputMaybe<Scalars['Int']>;
};

export type Team = {
  __typename?: 'Team';
  _count?: Maybe<TeamCount>;
  abbrev?: Maybe<Scalars['String']>;
  conference?: Maybe<Scalars['String']>;
  games_games_awayToteams: Array<Game>;
  games_games_homeToteams: Array<Game>;
  id: Scalars['ID'];
  loc: Scalars['String'];
  name: Scalars['String'];
  superbowl_superbowl_loserToteams: Array<Superbowl>;
  superbowl_superbowl_winnerToteams: Array<Superbowl>;
  teamid: Scalars['Int'];
};


export type TeamGames_Games_AwayToteamsArgs = {
  cursor?: InputMaybe<GameWhereUniqueInput>;
  distinct?: InputMaybe<Array<GameScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GameOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GameWhereInput>;
};


export type TeamGames_Games_HomeToteamsArgs = {
  cursor?: InputMaybe<GameWhereUniqueInput>;
  distinct?: InputMaybe<Array<GameScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GameOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GameWhereInput>;
};


export type TeamSuperbowl_Superbowl_LoserToteamsArgs = {
  cursor?: InputMaybe<SuperbowlWhereUniqueInput>;
  distinct?: InputMaybe<Array<SuperbowlScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SuperbowlOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SuperbowlWhereInput>;
};


export type TeamSuperbowl_Superbowl_WinnerToteamsArgs = {
  cursor?: InputMaybe<SuperbowlWhereUniqueInput>;
  distinct?: InputMaybe<Array<SuperbowlScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SuperbowlOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SuperbowlWhereInput>;
};

export type TeamAvgAggregate = {
  __typename?: 'TeamAvgAggregate';
  teamid?: Maybe<Scalars['Float']>;
};

export type TeamAvgOrderByAggregateInput = {
  teamid?: InputMaybe<SortOrder>;
};

export type TeamCount = {
  __typename?: 'TeamCount';
  games_games_awayToteams: Scalars['Int'];
  games_games_homeToteams: Scalars['Int'];
  superbowl_superbowl_loserToteams: Scalars['Int'];
  superbowl_superbowl_winnerToteams: Scalars['Int'];
};

export type TeamCountAggregate = {
  __typename?: 'TeamCountAggregate';
  _all: Scalars['Int'];
  abbrev: Scalars['Int'];
  conference: Scalars['Int'];
  loc: Scalars['Int'];
  name: Scalars['Int'];
  teamid: Scalars['Int'];
};

export type TeamCountOrderByAggregateInput = {
  abbrev?: InputMaybe<SortOrder>;
  conference?: InputMaybe<SortOrder>;
  loc?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  teamid?: InputMaybe<SortOrder>;
};

export type TeamCreateInput = {
  abbrev?: InputMaybe<Scalars['String']>;
  conference?: InputMaybe<Scalars['String']>;
  games_games_awayToteams?: InputMaybe<GameCreateNestedManyWithoutTeams_Games_AwayToteamsInput>;
  games_games_homeToteams?: InputMaybe<GameCreateNestedManyWithoutTeams_Games_HomeToteamsInput>;
  loc: Scalars['String'];
  name: Scalars['String'];
  superbowl_superbowl_loserToteams?: InputMaybe<SuperbowlCreateNestedManyWithoutTeams_Superbowl_LoserToteamsInput>;
  superbowl_superbowl_winnerToteams?: InputMaybe<SuperbowlCreateNestedManyWithoutTeams_Superbowl_WinnerToteamsInput>;
};

export type TeamCreateManyInput = {
  abbrev?: InputMaybe<Scalars['String']>;
  conference?: InputMaybe<Scalars['String']>;
  loc: Scalars['String'];
  name: Scalars['String'];
  teamid?: InputMaybe<Scalars['Int']>;
};

export type TeamCreateNestedOneWithoutGames_Games_AwayToteamsInput = {
  connect?: InputMaybe<TeamWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TeamCreateOrConnectWithoutGames_Games_AwayToteamsInput>;
  create?: InputMaybe<TeamCreateWithoutGames_Games_AwayToteamsInput>;
};

export type TeamCreateNestedOneWithoutGames_Games_HomeToteamsInput = {
  connect?: InputMaybe<TeamWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TeamCreateOrConnectWithoutGames_Games_HomeToteamsInput>;
  create?: InputMaybe<TeamCreateWithoutGames_Games_HomeToteamsInput>;
};

export type TeamCreateNestedOneWithoutSuperbowl_Superbowl_LoserToteamsInput = {
  connect?: InputMaybe<TeamWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TeamCreateOrConnectWithoutSuperbowl_Superbowl_LoserToteamsInput>;
  create?: InputMaybe<TeamCreateWithoutSuperbowl_Superbowl_LoserToteamsInput>;
};

export type TeamCreateNestedOneWithoutSuperbowl_Superbowl_WinnerToteamsInput = {
  connect?: InputMaybe<TeamWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TeamCreateOrConnectWithoutSuperbowl_Superbowl_WinnerToteamsInput>;
  create?: InputMaybe<TeamCreateWithoutSuperbowl_Superbowl_WinnerToteamsInput>;
};

export type TeamCreateOrConnectWithoutGames_Games_AwayToteamsInput = {
  create: TeamCreateWithoutGames_Games_AwayToteamsInput;
  where: TeamWhereUniqueInput;
};

export type TeamCreateOrConnectWithoutGames_Games_HomeToteamsInput = {
  create: TeamCreateWithoutGames_Games_HomeToteamsInput;
  where: TeamWhereUniqueInput;
};

export type TeamCreateOrConnectWithoutSuperbowl_Superbowl_LoserToteamsInput = {
  create: TeamCreateWithoutSuperbowl_Superbowl_LoserToteamsInput;
  where: TeamWhereUniqueInput;
};

export type TeamCreateOrConnectWithoutSuperbowl_Superbowl_WinnerToteamsInput = {
  create: TeamCreateWithoutSuperbowl_Superbowl_WinnerToteamsInput;
  where: TeamWhereUniqueInput;
};

export type TeamCreateWithoutGames_Games_AwayToteamsInput = {
  abbrev?: InputMaybe<Scalars['String']>;
  conference?: InputMaybe<Scalars['String']>;
  games_games_homeToteams?: InputMaybe<GameCreateNestedManyWithoutTeams_Games_HomeToteamsInput>;
  loc: Scalars['String'];
  name: Scalars['String'];
  superbowl_superbowl_loserToteams?: InputMaybe<SuperbowlCreateNestedManyWithoutTeams_Superbowl_LoserToteamsInput>;
  superbowl_superbowl_winnerToteams?: InputMaybe<SuperbowlCreateNestedManyWithoutTeams_Superbowl_WinnerToteamsInput>;
};

export type TeamCreateWithoutGames_Games_HomeToteamsInput = {
  abbrev?: InputMaybe<Scalars['String']>;
  conference?: InputMaybe<Scalars['String']>;
  games_games_awayToteams?: InputMaybe<GameCreateNestedManyWithoutTeams_Games_AwayToteamsInput>;
  loc: Scalars['String'];
  name: Scalars['String'];
  superbowl_superbowl_loserToteams?: InputMaybe<SuperbowlCreateNestedManyWithoutTeams_Superbowl_LoserToteamsInput>;
  superbowl_superbowl_winnerToteams?: InputMaybe<SuperbowlCreateNestedManyWithoutTeams_Superbowl_WinnerToteamsInput>;
};

export type TeamCreateWithoutSuperbowl_Superbowl_LoserToteamsInput = {
  abbrev?: InputMaybe<Scalars['String']>;
  conference?: InputMaybe<Scalars['String']>;
  games_games_awayToteams?: InputMaybe<GameCreateNestedManyWithoutTeams_Games_AwayToteamsInput>;
  games_games_homeToteams?: InputMaybe<GameCreateNestedManyWithoutTeams_Games_HomeToteamsInput>;
  loc: Scalars['String'];
  name: Scalars['String'];
  superbowl_superbowl_winnerToteams?: InputMaybe<SuperbowlCreateNestedManyWithoutTeams_Superbowl_WinnerToteamsInput>;
};

export type TeamCreateWithoutSuperbowl_Superbowl_WinnerToteamsInput = {
  abbrev?: InputMaybe<Scalars['String']>;
  conference?: InputMaybe<Scalars['String']>;
  games_games_awayToteams?: InputMaybe<GameCreateNestedManyWithoutTeams_Games_AwayToteamsInput>;
  games_games_homeToteams?: InputMaybe<GameCreateNestedManyWithoutTeams_Games_HomeToteamsInput>;
  loc: Scalars['String'];
  name: Scalars['String'];
  superbowl_superbowl_loserToteams?: InputMaybe<SuperbowlCreateNestedManyWithoutTeams_Superbowl_LoserToteamsInput>;
};

export type TeamGroupBy = {
  __typename?: 'TeamGroupBy';
  _avg?: Maybe<TeamAvgAggregate>;
  _count?: Maybe<TeamCountAggregate>;
  _max?: Maybe<TeamMaxAggregate>;
  _min?: Maybe<TeamMinAggregate>;
  _sum?: Maybe<TeamSumAggregate>;
  abbrev?: Maybe<Scalars['String']>;
  conference?: Maybe<Scalars['String']>;
  loc: Scalars['String'];
  name: Scalars['String'];
  teamid: Scalars['Int'];
};

export type TeamMaxAggregate = {
  __typename?: 'TeamMaxAggregate';
  abbrev?: Maybe<Scalars['String']>;
  conference?: Maybe<Scalars['String']>;
  loc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  teamid?: Maybe<Scalars['Int']>;
};

export type TeamMaxOrderByAggregateInput = {
  abbrev?: InputMaybe<SortOrder>;
  conference?: InputMaybe<SortOrder>;
  loc?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  teamid?: InputMaybe<SortOrder>;
};

export type TeamMinAggregate = {
  __typename?: 'TeamMinAggregate';
  abbrev?: Maybe<Scalars['String']>;
  conference?: Maybe<Scalars['String']>;
  loc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  teamid?: Maybe<Scalars['Int']>;
};

export type TeamMinOrderByAggregateInput = {
  abbrev?: InputMaybe<SortOrder>;
  conference?: InputMaybe<SortOrder>;
  loc?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  teamid?: InputMaybe<SortOrder>;
};

export type TeamOrderByWithAggregationInput = {
  _avg?: InputMaybe<TeamAvgOrderByAggregateInput>;
  _count?: InputMaybe<TeamCountOrderByAggregateInput>;
  _max?: InputMaybe<TeamMaxOrderByAggregateInput>;
  _min?: InputMaybe<TeamMinOrderByAggregateInput>;
  _sum?: InputMaybe<TeamSumOrderByAggregateInput>;
  abbrev?: InputMaybe<SortOrder>;
  conference?: InputMaybe<SortOrder>;
  loc?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  teamid?: InputMaybe<SortOrder>;
};

export type TeamOrderByWithRelationInput = {
  abbrev?: InputMaybe<SortOrder>;
  conference?: InputMaybe<SortOrder>;
  games_games_awayToteams?: InputMaybe<GameOrderByRelationAggregateInput>;
  games_games_homeToteams?: InputMaybe<GameOrderByRelationAggregateInput>;
  loc?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  superbowl_superbowl_loserToteams?: InputMaybe<SuperbowlOrderByRelationAggregateInput>;
  superbowl_superbowl_winnerToteams?: InputMaybe<SuperbowlOrderByRelationAggregateInput>;
  teamid?: InputMaybe<SortOrder>;
};

export type TeamRelationFilter = {
  is?: InputMaybe<TeamWhereInput>;
  isNot?: InputMaybe<TeamWhereInput>;
};

export enum TeamScalarFieldEnum {
  Abbrev = 'abbrev',
  Conference = 'conference',
  Loc = 'loc',
  Name = 'name',
  Teamid = 'teamid'
}

export type TeamScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TeamScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TeamScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TeamScalarWhereWithAggregatesInput>>;
  abbrev?: InputMaybe<StringNullableWithAggregatesFilter>;
  conference?: InputMaybe<StringNullableWithAggregatesFilter>;
  loc?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  teamid?: InputMaybe<IntWithAggregatesFilter>;
};

export type TeamSumAggregate = {
  __typename?: 'TeamSumAggregate';
  teamid?: Maybe<Scalars['Int']>;
};

export type TeamSumOrderByAggregateInput = {
  teamid?: InputMaybe<SortOrder>;
};

export type TeamUpdateInput = {
  abbrev?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  conference?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  games_games_awayToteams?: InputMaybe<GameUpdateManyWithoutTeams_Games_AwayToteamsNestedInput>;
  games_games_homeToteams?: InputMaybe<GameUpdateManyWithoutTeams_Games_HomeToteamsNestedInput>;
  loc?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  superbowl_superbowl_loserToteams?: InputMaybe<SuperbowlUpdateManyWithoutTeams_Superbowl_LoserToteamsNestedInput>;
  superbowl_superbowl_winnerToteams?: InputMaybe<SuperbowlUpdateManyWithoutTeams_Superbowl_WinnerToteamsNestedInput>;
};

export type TeamUpdateManyMutationInput = {
  abbrev?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  conference?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  loc?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TeamUpdateOneRequiredWithoutGames_Games_AwayToteamsNestedInput = {
  connect?: InputMaybe<TeamWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TeamCreateOrConnectWithoutGames_Games_AwayToteamsInput>;
  create?: InputMaybe<TeamCreateWithoutGames_Games_AwayToteamsInput>;
  update?: InputMaybe<TeamUpdateWithoutGames_Games_AwayToteamsInput>;
  upsert?: InputMaybe<TeamUpsertWithoutGames_Games_AwayToteamsInput>;
};

export type TeamUpdateOneRequiredWithoutGames_Games_HomeToteamsNestedInput = {
  connect?: InputMaybe<TeamWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TeamCreateOrConnectWithoutGames_Games_HomeToteamsInput>;
  create?: InputMaybe<TeamCreateWithoutGames_Games_HomeToteamsInput>;
  update?: InputMaybe<TeamUpdateWithoutGames_Games_HomeToteamsInput>;
  upsert?: InputMaybe<TeamUpsertWithoutGames_Games_HomeToteamsInput>;
};

export type TeamUpdateOneRequiredWithoutSuperbowl_Superbowl_LoserToteamsNestedInput = {
  connect?: InputMaybe<TeamWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TeamCreateOrConnectWithoutSuperbowl_Superbowl_LoserToteamsInput>;
  create?: InputMaybe<TeamCreateWithoutSuperbowl_Superbowl_LoserToteamsInput>;
  update?: InputMaybe<TeamUpdateWithoutSuperbowl_Superbowl_LoserToteamsInput>;
  upsert?: InputMaybe<TeamUpsertWithoutSuperbowl_Superbowl_LoserToteamsInput>;
};

export type TeamUpdateOneRequiredWithoutSuperbowl_Superbowl_WinnerToteamsNestedInput = {
  connect?: InputMaybe<TeamWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TeamCreateOrConnectWithoutSuperbowl_Superbowl_WinnerToteamsInput>;
  create?: InputMaybe<TeamCreateWithoutSuperbowl_Superbowl_WinnerToteamsInput>;
  update?: InputMaybe<TeamUpdateWithoutSuperbowl_Superbowl_WinnerToteamsInput>;
  upsert?: InputMaybe<TeamUpsertWithoutSuperbowl_Superbowl_WinnerToteamsInput>;
};

export type TeamUpdateWithoutGames_Games_AwayToteamsInput = {
  abbrev?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  conference?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  games_games_homeToteams?: InputMaybe<GameUpdateManyWithoutTeams_Games_HomeToteamsNestedInput>;
  loc?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  superbowl_superbowl_loserToteams?: InputMaybe<SuperbowlUpdateManyWithoutTeams_Superbowl_LoserToteamsNestedInput>;
  superbowl_superbowl_winnerToteams?: InputMaybe<SuperbowlUpdateManyWithoutTeams_Superbowl_WinnerToteamsNestedInput>;
};

export type TeamUpdateWithoutGames_Games_HomeToteamsInput = {
  abbrev?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  conference?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  games_games_awayToteams?: InputMaybe<GameUpdateManyWithoutTeams_Games_AwayToteamsNestedInput>;
  loc?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  superbowl_superbowl_loserToteams?: InputMaybe<SuperbowlUpdateManyWithoutTeams_Superbowl_LoserToteamsNestedInput>;
  superbowl_superbowl_winnerToteams?: InputMaybe<SuperbowlUpdateManyWithoutTeams_Superbowl_WinnerToteamsNestedInput>;
};

export type TeamUpdateWithoutSuperbowl_Superbowl_LoserToteamsInput = {
  abbrev?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  conference?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  games_games_awayToteams?: InputMaybe<GameUpdateManyWithoutTeams_Games_AwayToteamsNestedInput>;
  games_games_homeToteams?: InputMaybe<GameUpdateManyWithoutTeams_Games_HomeToteamsNestedInput>;
  loc?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  superbowl_superbowl_winnerToteams?: InputMaybe<SuperbowlUpdateManyWithoutTeams_Superbowl_WinnerToteamsNestedInput>;
};

export type TeamUpdateWithoutSuperbowl_Superbowl_WinnerToteamsInput = {
  abbrev?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  conference?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  games_games_awayToteams?: InputMaybe<GameUpdateManyWithoutTeams_Games_AwayToteamsNestedInput>;
  games_games_homeToteams?: InputMaybe<GameUpdateManyWithoutTeams_Games_HomeToteamsNestedInput>;
  loc?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  superbowl_superbowl_loserToteams?: InputMaybe<SuperbowlUpdateManyWithoutTeams_Superbowl_LoserToteamsNestedInput>;
};

export type TeamUpsertWithoutGames_Games_AwayToteamsInput = {
  create: TeamCreateWithoutGames_Games_AwayToteamsInput;
  update: TeamUpdateWithoutGames_Games_AwayToteamsInput;
};

export type TeamUpsertWithoutGames_Games_HomeToteamsInput = {
  create: TeamCreateWithoutGames_Games_HomeToteamsInput;
  update: TeamUpdateWithoutGames_Games_HomeToteamsInput;
};

export type TeamUpsertWithoutSuperbowl_Superbowl_LoserToteamsInput = {
  create: TeamCreateWithoutSuperbowl_Superbowl_LoserToteamsInput;
  update: TeamUpdateWithoutSuperbowl_Superbowl_LoserToteamsInput;
};

export type TeamUpsertWithoutSuperbowl_Superbowl_WinnerToteamsInput = {
  create: TeamCreateWithoutSuperbowl_Superbowl_WinnerToteamsInput;
  update: TeamUpdateWithoutSuperbowl_Superbowl_WinnerToteamsInput;
};

export type TeamWhereInput = {
  AND?: InputMaybe<Array<TeamWhereInput>>;
  NOT?: InputMaybe<Array<TeamWhereInput>>;
  OR?: InputMaybe<Array<TeamWhereInput>>;
  abbrev?: InputMaybe<StringNullableFilter>;
  conference?: InputMaybe<StringNullableFilter>;
  games_games_awayToteams?: InputMaybe<GameListRelationFilter>;
  games_games_homeToteams?: InputMaybe<GameListRelationFilter>;
  loc?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  superbowl_superbowl_loserToteams?: InputMaybe<SuperbowlListRelationFilter>;
  superbowl_superbowl_winnerToteams?: InputMaybe<SuperbowlListRelationFilter>;
  teamid?: InputMaybe<IntFilter>;
};

export type TeamWhereUniqueInput = {
  teamid?: InputMaybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  email: Scalars['String'];
  email2?: Maybe<Scalars['String']>;
  fname: Scalars['String'];
  google_email?: Maybe<Scalars['String']>;
  google_photo_url?: Maybe<Scalars['String']>;
  google_userid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  leaguemembers: Array<LeagueMember>;
  leagues: Array<League>;
  lname: Scalars['String'];
  picks: Array<Pick>;
  season: Scalars['Int'];
  uid: Scalars['Int'];
  username: Scalars['String'];
};


export type UserLeaguemembersArgs = {
  cursor?: InputMaybe<LeagueMemberWhereUniqueInput>;
  distinct?: InputMaybe<Array<LeagueMemberScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LeagueMemberOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LeagueMemberWhereInput>;
};


export type UserLeaguesArgs = {
  cursor?: InputMaybe<LeagueWhereUniqueInput>;
  distinct?: InputMaybe<Array<LeagueScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LeagueOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LeagueWhereInput>;
};


export type UserPicksArgs = {
  cursor?: InputMaybe<PickWhereUniqueInput>;
  distinct?: InputMaybe<Array<PickScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PickOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PickWhereInput>;
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  season?: Maybe<Scalars['Float']>;
  uid?: Maybe<Scalars['Float']>;
};

export type UserAvgOrderByAggregateInput = {
  season?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
};

export type UserCount = {
  __typename?: 'UserCount';
  leaguemembers: Scalars['Int'];
  leagues: Scalars['Int'];
  picks: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  email: Scalars['Int'];
  email2: Scalars['Int'];
  fname: Scalars['Int'];
  google_email: Scalars['Int'];
  google_photo_url: Scalars['Int'];
  google_userid: Scalars['Int'];
  lname: Scalars['Int'];
  season: Scalars['Int'];
  uid: Scalars['Int'];
  username: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  email2?: InputMaybe<SortOrder>;
  fname?: InputMaybe<SortOrder>;
  google_email?: InputMaybe<SortOrder>;
  google_photo_url?: InputMaybe<SortOrder>;
  google_userid?: InputMaybe<SortOrder>;
  lname?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  email: Scalars['String'];
  email2?: InputMaybe<Scalars['String']>;
  fname: Scalars['String'];
  google_email?: InputMaybe<Scalars['String']>;
  google_photo_url?: InputMaybe<Scalars['String']>;
  google_userid?: InputMaybe<Scalars['String']>;
  leaguemembers?: InputMaybe<LeagueMemberCreateNestedManyWithoutPeopleInput>;
  leagues?: InputMaybe<LeagueCreateNestedManyWithoutPeopleInput>;
  lname: Scalars['String'];
  picks?: InputMaybe<PickCreateNestedManyWithoutPeopleInput>;
  season: Scalars['Int'];
  username: Scalars['String'];
};

export type UserCreateManyInput = {
  email: Scalars['String'];
  email2?: InputMaybe<Scalars['String']>;
  fname: Scalars['String'];
  google_email?: InputMaybe<Scalars['String']>;
  google_photo_url?: InputMaybe<Scalars['String']>;
  google_userid?: InputMaybe<Scalars['String']>;
  lname: Scalars['String'];
  season: Scalars['Int'];
  uid?: InputMaybe<Scalars['Int']>;
  username: Scalars['String'];
};

export type UserCreateNestedOneWithoutLeaguemembersInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutLeaguemembersInput>;
  create?: InputMaybe<UserCreateWithoutLeaguemembersInput>;
};

export type UserCreateNestedOneWithoutLeaguesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutLeaguesInput>;
  create?: InputMaybe<UserCreateWithoutLeaguesInput>;
};

export type UserCreateNestedOneWithoutPicksInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPicksInput>;
  create?: InputMaybe<UserCreateWithoutPicksInput>;
};

export type UserCreateOrConnectWithoutLeaguemembersInput = {
  create: UserCreateWithoutLeaguemembersInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutLeaguesInput = {
  create: UserCreateWithoutLeaguesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutPicksInput = {
  create: UserCreateWithoutPicksInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutLeaguemembersInput = {
  email: Scalars['String'];
  email2?: InputMaybe<Scalars['String']>;
  fname: Scalars['String'];
  google_email?: InputMaybe<Scalars['String']>;
  google_photo_url?: InputMaybe<Scalars['String']>;
  google_userid?: InputMaybe<Scalars['String']>;
  leagues?: InputMaybe<LeagueCreateNestedManyWithoutPeopleInput>;
  lname: Scalars['String'];
  picks?: InputMaybe<PickCreateNestedManyWithoutPeopleInput>;
  season: Scalars['Int'];
  username: Scalars['String'];
};

export type UserCreateWithoutLeaguesInput = {
  email: Scalars['String'];
  email2?: InputMaybe<Scalars['String']>;
  fname: Scalars['String'];
  google_email?: InputMaybe<Scalars['String']>;
  google_photo_url?: InputMaybe<Scalars['String']>;
  google_userid?: InputMaybe<Scalars['String']>;
  leaguemembers?: InputMaybe<LeagueMemberCreateNestedManyWithoutPeopleInput>;
  lname: Scalars['String'];
  picks?: InputMaybe<PickCreateNestedManyWithoutPeopleInput>;
  season: Scalars['Int'];
  username: Scalars['String'];
};

export type UserCreateWithoutPicksInput = {
  email: Scalars['String'];
  email2?: InputMaybe<Scalars['String']>;
  fname: Scalars['String'];
  google_email?: InputMaybe<Scalars['String']>;
  google_photo_url?: InputMaybe<Scalars['String']>;
  google_userid?: InputMaybe<Scalars['String']>;
  leaguemembers?: InputMaybe<LeagueMemberCreateNestedManyWithoutPeopleInput>;
  leagues?: InputMaybe<LeagueCreateNestedManyWithoutPeopleInput>;
  lname: Scalars['String'];
  season: Scalars['Int'];
  username: Scalars['String'];
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
  email: Scalars['String'];
  email2?: Maybe<Scalars['String']>;
  fname: Scalars['String'];
  google_email?: Maybe<Scalars['String']>;
  google_photo_url?: Maybe<Scalars['String']>;
  google_userid?: Maybe<Scalars['String']>;
  lname: Scalars['String'];
  season: Scalars['Int'];
  uid: Scalars['Int'];
  username: Scalars['String'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  email?: Maybe<Scalars['String']>;
  email2?: Maybe<Scalars['String']>;
  fname?: Maybe<Scalars['String']>;
  google_email?: Maybe<Scalars['String']>;
  google_photo_url?: Maybe<Scalars['String']>;
  google_userid?: Maybe<Scalars['String']>;
  lname?: Maybe<Scalars['String']>;
  season?: Maybe<Scalars['Int']>;
  uid?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
};

export type UserMaxOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  email2?: InputMaybe<SortOrder>;
  fname?: InputMaybe<SortOrder>;
  google_email?: InputMaybe<SortOrder>;
  google_photo_url?: InputMaybe<SortOrder>;
  google_userid?: InputMaybe<SortOrder>;
  lname?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  email?: Maybe<Scalars['String']>;
  email2?: Maybe<Scalars['String']>;
  fname?: Maybe<Scalars['String']>;
  google_email?: Maybe<Scalars['String']>;
  google_photo_url?: Maybe<Scalars['String']>;
  google_userid?: Maybe<Scalars['String']>;
  lname?: Maybe<Scalars['String']>;
  season?: Maybe<Scalars['Int']>;
  uid?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
};

export type UserMinOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  email2?: InputMaybe<SortOrder>;
  fname?: InputMaybe<SortOrder>;
  google_email?: InputMaybe<SortOrder>;
  google_photo_url?: InputMaybe<SortOrder>;
  google_userid?: InputMaybe<SortOrder>;
  lname?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserSumOrderByAggregateInput>;
  email?: InputMaybe<SortOrder>;
  email2?: InputMaybe<SortOrder>;
  fname?: InputMaybe<SortOrder>;
  google_email?: InputMaybe<SortOrder>;
  google_photo_url?: InputMaybe<SortOrder>;
  google_userid?: InputMaybe<SortOrder>;
  lname?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  email?: InputMaybe<SortOrder>;
  email2?: InputMaybe<SortOrder>;
  fname?: InputMaybe<SortOrder>;
  google_email?: InputMaybe<SortOrder>;
  google_photo_url?: InputMaybe<SortOrder>;
  google_userid?: InputMaybe<SortOrder>;
  leaguemembers?: InputMaybe<LeagueMemberOrderByRelationAggregateInput>;
  leagues?: InputMaybe<LeagueOrderByRelationAggregateInput>;
  lname?: InputMaybe<SortOrder>;
  picks?: InputMaybe<PickOrderByRelationAggregateInput>;
  season?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  Email = 'email',
  Email2 = 'email2',
  Fname = 'fname',
  GoogleEmail = 'google_email',
  GooglePhotoUrl = 'google_photo_url',
  GoogleUserid = 'google_userid',
  Lname = 'lname',
  Season = 'season',
  Uid = 'uid',
  Username = 'username'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  email2?: InputMaybe<StringNullableWithAggregatesFilter>;
  fname?: InputMaybe<StringWithAggregatesFilter>;
  google_email?: InputMaybe<StringNullableWithAggregatesFilter>;
  google_photo_url?: InputMaybe<StringNullableWithAggregatesFilter>;
  google_userid?: InputMaybe<StringNullableWithAggregatesFilter>;
  lname?: InputMaybe<StringWithAggregatesFilter>;
  season?: InputMaybe<IntWithAggregatesFilter>;
  uid?: InputMaybe<IntWithAggregatesFilter>;
  username?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  season?: Maybe<Scalars['Int']>;
  uid?: Maybe<Scalars['Int']>;
};

export type UserSumOrderByAggregateInput = {
  season?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
};

export type UserUpdateInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  email2?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fname?: InputMaybe<StringFieldUpdateOperationsInput>;
  google_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  google_photo_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  google_userid?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  leaguemembers?: InputMaybe<LeagueMemberUpdateManyWithoutPeopleNestedInput>;
  leagues?: InputMaybe<LeagueUpdateManyWithoutPeopleNestedInput>;
  lname?: InputMaybe<StringFieldUpdateOperationsInput>;
  picks?: InputMaybe<PickUpdateManyWithoutPeopleNestedInput>;
  season?: InputMaybe<IntFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  email2?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fname?: InputMaybe<StringFieldUpdateOperationsInput>;
  google_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  google_photo_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  google_userid?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lname?: InputMaybe<StringFieldUpdateOperationsInput>;
  season?: InputMaybe<IntFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutLeaguemembersNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutLeaguemembersInput>;
  create?: InputMaybe<UserCreateWithoutLeaguemembersInput>;
  update?: InputMaybe<UserUpdateWithoutLeaguemembersInput>;
  upsert?: InputMaybe<UserUpsertWithoutLeaguemembersInput>;
};

export type UserUpdateOneRequiredWithoutLeaguesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutLeaguesInput>;
  create?: InputMaybe<UserCreateWithoutLeaguesInput>;
  update?: InputMaybe<UserUpdateWithoutLeaguesInput>;
  upsert?: InputMaybe<UserUpsertWithoutLeaguesInput>;
};

export type UserUpdateOneRequiredWithoutPicksNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPicksInput>;
  create?: InputMaybe<UserCreateWithoutPicksInput>;
  update?: InputMaybe<UserUpdateWithoutPicksInput>;
  upsert?: InputMaybe<UserUpsertWithoutPicksInput>;
};

export type UserUpdateWithoutLeaguemembersInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  email2?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fname?: InputMaybe<StringFieldUpdateOperationsInput>;
  google_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  google_photo_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  google_userid?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  leagues?: InputMaybe<LeagueUpdateManyWithoutPeopleNestedInput>;
  lname?: InputMaybe<StringFieldUpdateOperationsInput>;
  picks?: InputMaybe<PickUpdateManyWithoutPeopleNestedInput>;
  season?: InputMaybe<IntFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutLeaguesInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  email2?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fname?: InputMaybe<StringFieldUpdateOperationsInput>;
  google_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  google_photo_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  google_userid?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  leaguemembers?: InputMaybe<LeagueMemberUpdateManyWithoutPeopleNestedInput>;
  lname?: InputMaybe<StringFieldUpdateOperationsInput>;
  picks?: InputMaybe<PickUpdateManyWithoutPeopleNestedInput>;
  season?: InputMaybe<IntFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutPicksInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  email2?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fname?: InputMaybe<StringFieldUpdateOperationsInput>;
  google_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  google_photo_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  google_userid?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  leaguemembers?: InputMaybe<LeagueMemberUpdateManyWithoutPeopleNestedInput>;
  leagues?: InputMaybe<LeagueUpdateManyWithoutPeopleNestedInput>;
  lname?: InputMaybe<StringFieldUpdateOperationsInput>;
  season?: InputMaybe<IntFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutLeaguemembersInput = {
  create: UserCreateWithoutLeaguemembersInput;
  update: UserUpdateWithoutLeaguemembersInput;
};

export type UserUpsertWithoutLeaguesInput = {
  create: UserCreateWithoutLeaguesInput;
  update: UserUpdateWithoutLeaguesInput;
};

export type UserUpsertWithoutPicksInput = {
  create: UserCreateWithoutPicksInput;
  update: UserUpdateWithoutPicksInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  email?: InputMaybe<StringFilter>;
  email2?: InputMaybe<StringNullableFilter>;
  fname?: InputMaybe<StringFilter>;
  google_email?: InputMaybe<StringNullableFilter>;
  google_photo_url?: InputMaybe<StringNullableFilter>;
  google_userid?: InputMaybe<StringNullableFilter>;
  leaguemembers?: InputMaybe<LeagueMemberListRelationFilter>;
  leagues?: InputMaybe<LeagueListRelationFilter>;
  lname?: InputMaybe<StringFilter>;
  picks?: InputMaybe<PickListRelationFilter>;
  season?: InputMaybe<IntFilter>;
  uid?: InputMaybe<IntFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['Int']>;
};

export type WeekWinners = {
  __typename?: 'WeekWinners';
  correct_count: Scalars['Int'];
  id: Scalars['Int'];
  league: League;
  league_id: Scalars['Int'];
  member: LeagueMember;
  membership_id: Scalars['Int'];
  score_diff: Scalars['Int'];
  week: Scalars['Int'];
};

export type WeekWinnersAvgAggregate = {
  __typename?: 'WeekWinnersAvgAggregate';
  correct_count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  league_id?: Maybe<Scalars['Float']>;
  membership_id?: Maybe<Scalars['Float']>;
  score_diff?: Maybe<Scalars['Float']>;
  week?: Maybe<Scalars['Float']>;
};

export type WeekWinnersAvgOrderByAggregateInput = {
  correct_count?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  league_id?: InputMaybe<SortOrder>;
  membership_id?: InputMaybe<SortOrder>;
  score_diff?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
};

export type WeekWinnersCountAggregate = {
  __typename?: 'WeekWinnersCountAggregate';
  _all: Scalars['Int'];
  correct_count: Scalars['Int'];
  id: Scalars['Int'];
  league_id: Scalars['Int'];
  membership_id: Scalars['Int'];
  score_diff: Scalars['Int'];
  week: Scalars['Int'];
};

export type WeekWinnersCountOrderByAggregateInput = {
  correct_count?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  league_id?: InputMaybe<SortOrder>;
  membership_id?: InputMaybe<SortOrder>;
  score_diff?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
};

export type WeekWinnersCreateInput = {
  correct_count: Scalars['Int'];
  league: LeagueCreateNestedOneWithoutWeekWinnersInput;
  member: LeagueMemberCreateNestedOneWithoutWeekWinnersInput;
  score_diff: Scalars['Int'];
  week: Scalars['Int'];
};

export type WeekWinnersCreateManyInput = {
  correct_count: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  league_id: Scalars['Int'];
  membership_id: Scalars['Int'];
  score_diff: Scalars['Int'];
  week: Scalars['Int'];
};

export type WeekWinnersCreateManyLeagueInput = {
  correct_count: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  membership_id: Scalars['Int'];
  score_diff: Scalars['Int'];
  week: Scalars['Int'];
};

export type WeekWinnersCreateManyLeagueInputEnvelope = {
  data: Array<WeekWinnersCreateManyLeagueInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type WeekWinnersCreateManyMemberInput = {
  correct_count: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  league_id: Scalars['Int'];
  score_diff: Scalars['Int'];
  week: Scalars['Int'];
};

export type WeekWinnersCreateManyMemberInputEnvelope = {
  data: Array<WeekWinnersCreateManyMemberInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type WeekWinnersCreateNestedManyWithoutLeagueInput = {
  connect?: InputMaybe<Array<WeekWinnersWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<WeekWinnersCreateOrConnectWithoutLeagueInput>>;
  create?: InputMaybe<Array<WeekWinnersCreateWithoutLeagueInput>>;
  createMany?: InputMaybe<WeekWinnersCreateManyLeagueInputEnvelope>;
};

export type WeekWinnersCreateNestedManyWithoutMemberInput = {
  connect?: InputMaybe<Array<WeekWinnersWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<WeekWinnersCreateOrConnectWithoutMemberInput>>;
  create?: InputMaybe<Array<WeekWinnersCreateWithoutMemberInput>>;
  createMany?: InputMaybe<WeekWinnersCreateManyMemberInputEnvelope>;
};

export type WeekWinnersCreateOrConnectWithoutLeagueInput = {
  create: WeekWinnersCreateWithoutLeagueInput;
  where: WeekWinnersWhereUniqueInput;
};

export type WeekWinnersCreateOrConnectWithoutMemberInput = {
  create: WeekWinnersCreateWithoutMemberInput;
  where: WeekWinnersWhereUniqueInput;
};

export type WeekWinnersCreateWithoutLeagueInput = {
  correct_count: Scalars['Int'];
  member: LeagueMemberCreateNestedOneWithoutWeekWinnersInput;
  score_diff: Scalars['Int'];
  week: Scalars['Int'];
};

export type WeekWinnersCreateWithoutMemberInput = {
  correct_count: Scalars['Int'];
  league: LeagueCreateNestedOneWithoutWeekWinnersInput;
  score_diff: Scalars['Int'];
  week: Scalars['Int'];
};

export type WeekWinnersGroupBy = {
  __typename?: 'WeekWinnersGroupBy';
  _avg?: Maybe<WeekWinnersAvgAggregate>;
  _count?: Maybe<WeekWinnersCountAggregate>;
  _max?: Maybe<WeekWinnersMaxAggregate>;
  _min?: Maybe<WeekWinnersMinAggregate>;
  _sum?: Maybe<WeekWinnersSumAggregate>;
  correct_count: Scalars['Int'];
  id: Scalars['Int'];
  league_id: Scalars['Int'];
  membership_id: Scalars['Int'];
  score_diff: Scalars['Int'];
  week: Scalars['Int'];
};

export type WeekWinnersListRelationFilter = {
  every?: InputMaybe<WeekWinnersWhereInput>;
  none?: InputMaybe<WeekWinnersWhereInput>;
  some?: InputMaybe<WeekWinnersWhereInput>;
};

export type WeekWinnersMaxAggregate = {
  __typename?: 'WeekWinnersMaxAggregate';
  correct_count?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  league_id?: Maybe<Scalars['Int']>;
  membership_id?: Maybe<Scalars['Int']>;
  score_diff?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
};

export type WeekWinnersMaxOrderByAggregateInput = {
  correct_count?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  league_id?: InputMaybe<SortOrder>;
  membership_id?: InputMaybe<SortOrder>;
  score_diff?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
};

export type WeekWinnersMinAggregate = {
  __typename?: 'WeekWinnersMinAggregate';
  correct_count?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  league_id?: Maybe<Scalars['Int']>;
  membership_id?: Maybe<Scalars['Int']>;
  score_diff?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
};

export type WeekWinnersMinOrderByAggregateInput = {
  correct_count?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  league_id?: InputMaybe<SortOrder>;
  membership_id?: InputMaybe<SortOrder>;
  score_diff?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
};

export type WeekWinnersOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type WeekWinnersOrderByWithAggregationInput = {
  _avg?: InputMaybe<WeekWinnersAvgOrderByAggregateInput>;
  _count?: InputMaybe<WeekWinnersCountOrderByAggregateInput>;
  _max?: InputMaybe<WeekWinnersMaxOrderByAggregateInput>;
  _min?: InputMaybe<WeekWinnersMinOrderByAggregateInput>;
  _sum?: InputMaybe<WeekWinnersSumOrderByAggregateInput>;
  correct_count?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  league_id?: InputMaybe<SortOrder>;
  membership_id?: InputMaybe<SortOrder>;
  score_diff?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
};

export type WeekWinnersOrderByWithRelationInput = {
  correct_count?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  league?: InputMaybe<LeagueOrderByWithRelationInput>;
  league_id?: InputMaybe<SortOrder>;
  member?: InputMaybe<LeagueMemberOrderByWithRelationInput>;
  membership_id?: InputMaybe<SortOrder>;
  score_diff?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
};

export enum WeekWinnersScalarFieldEnum {
  CorrectCount = 'correct_count',
  Id = 'id',
  LeagueId = 'league_id',
  MembershipId = 'membership_id',
  ScoreDiff = 'score_diff',
  Week = 'week'
}

export type WeekWinnersScalarWhereInput = {
  AND?: InputMaybe<Array<WeekWinnersScalarWhereInput>>;
  NOT?: InputMaybe<Array<WeekWinnersScalarWhereInput>>;
  OR?: InputMaybe<Array<WeekWinnersScalarWhereInput>>;
  correct_count?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  league_id?: InputMaybe<IntFilter>;
  membership_id?: InputMaybe<IntFilter>;
  score_diff?: InputMaybe<IntFilter>;
  week?: InputMaybe<IntFilter>;
};

export type WeekWinnersScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<WeekWinnersScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<WeekWinnersScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<WeekWinnersScalarWhereWithAggregatesInput>>;
  correct_count?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  league_id?: InputMaybe<IntWithAggregatesFilter>;
  membership_id?: InputMaybe<IntWithAggregatesFilter>;
  score_diff?: InputMaybe<IntWithAggregatesFilter>;
  week?: InputMaybe<IntWithAggregatesFilter>;
};

export type WeekWinnersSumAggregate = {
  __typename?: 'WeekWinnersSumAggregate';
  correct_count?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  league_id?: Maybe<Scalars['Int']>;
  membership_id?: Maybe<Scalars['Int']>;
  score_diff?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
};

export type WeekWinnersSumOrderByAggregateInput = {
  correct_count?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  league_id?: InputMaybe<SortOrder>;
  membership_id?: InputMaybe<SortOrder>;
  score_diff?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
};

export type WeekWinnersUpdateInput = {
  correct_count?: InputMaybe<IntFieldUpdateOperationsInput>;
  league?: InputMaybe<LeagueUpdateOneRequiredWithoutWeekWinnersNestedInput>;
  member?: InputMaybe<LeagueMemberUpdateOneRequiredWithoutWeekWinnersNestedInput>;
  score_diff?: InputMaybe<IntFieldUpdateOperationsInput>;
  week?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type WeekWinnersUpdateManyMutationInput = {
  correct_count?: InputMaybe<IntFieldUpdateOperationsInput>;
  score_diff?: InputMaybe<IntFieldUpdateOperationsInput>;
  week?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type WeekWinnersUpdateManyWithWhereWithoutLeagueInput = {
  data: WeekWinnersUpdateManyMutationInput;
  where: WeekWinnersScalarWhereInput;
};

export type WeekWinnersUpdateManyWithWhereWithoutMemberInput = {
  data: WeekWinnersUpdateManyMutationInput;
  where: WeekWinnersScalarWhereInput;
};

export type WeekWinnersUpdateManyWithoutLeagueNestedInput = {
  connect?: InputMaybe<Array<WeekWinnersWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<WeekWinnersCreateOrConnectWithoutLeagueInput>>;
  create?: InputMaybe<Array<WeekWinnersCreateWithoutLeagueInput>>;
  createMany?: InputMaybe<WeekWinnersCreateManyLeagueInputEnvelope>;
  delete?: InputMaybe<Array<WeekWinnersWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<WeekWinnersScalarWhereInput>>;
  disconnect?: InputMaybe<Array<WeekWinnersWhereUniqueInput>>;
  set?: InputMaybe<Array<WeekWinnersWhereUniqueInput>>;
  update?: InputMaybe<Array<WeekWinnersUpdateWithWhereUniqueWithoutLeagueInput>>;
  updateMany?: InputMaybe<Array<WeekWinnersUpdateManyWithWhereWithoutLeagueInput>>;
  upsert?: InputMaybe<Array<WeekWinnersUpsertWithWhereUniqueWithoutLeagueInput>>;
};

export type WeekWinnersUpdateManyWithoutMemberNestedInput = {
  connect?: InputMaybe<Array<WeekWinnersWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<WeekWinnersCreateOrConnectWithoutMemberInput>>;
  create?: InputMaybe<Array<WeekWinnersCreateWithoutMemberInput>>;
  createMany?: InputMaybe<WeekWinnersCreateManyMemberInputEnvelope>;
  delete?: InputMaybe<Array<WeekWinnersWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<WeekWinnersScalarWhereInput>>;
  disconnect?: InputMaybe<Array<WeekWinnersWhereUniqueInput>>;
  set?: InputMaybe<Array<WeekWinnersWhereUniqueInput>>;
  update?: InputMaybe<Array<WeekWinnersUpdateWithWhereUniqueWithoutMemberInput>>;
  updateMany?: InputMaybe<Array<WeekWinnersUpdateManyWithWhereWithoutMemberInput>>;
  upsert?: InputMaybe<Array<WeekWinnersUpsertWithWhereUniqueWithoutMemberInput>>;
};

export type WeekWinnersUpdateWithWhereUniqueWithoutLeagueInput = {
  data: WeekWinnersUpdateWithoutLeagueInput;
  where: WeekWinnersWhereUniqueInput;
};

export type WeekWinnersUpdateWithWhereUniqueWithoutMemberInput = {
  data: WeekWinnersUpdateWithoutMemberInput;
  where: WeekWinnersWhereUniqueInput;
};

export type WeekWinnersUpdateWithoutLeagueInput = {
  correct_count?: InputMaybe<IntFieldUpdateOperationsInput>;
  member?: InputMaybe<LeagueMemberUpdateOneRequiredWithoutWeekWinnersNestedInput>;
  score_diff?: InputMaybe<IntFieldUpdateOperationsInput>;
  week?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type WeekWinnersUpdateWithoutMemberInput = {
  correct_count?: InputMaybe<IntFieldUpdateOperationsInput>;
  league?: InputMaybe<LeagueUpdateOneRequiredWithoutWeekWinnersNestedInput>;
  score_diff?: InputMaybe<IntFieldUpdateOperationsInput>;
  week?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type WeekWinnersUpsertWithWhereUniqueWithoutLeagueInput = {
  create: WeekWinnersCreateWithoutLeagueInput;
  update: WeekWinnersUpdateWithoutLeagueInput;
  where: WeekWinnersWhereUniqueInput;
};

export type WeekWinnersUpsertWithWhereUniqueWithoutMemberInput = {
  create: WeekWinnersCreateWithoutMemberInput;
  update: WeekWinnersUpdateWithoutMemberInput;
  where: WeekWinnersWhereUniqueInput;
};

export type WeekWinnersWhereInput = {
  AND?: InputMaybe<Array<WeekWinnersWhereInput>>;
  NOT?: InputMaybe<Array<WeekWinnersWhereInput>>;
  OR?: InputMaybe<Array<WeekWinnersWhereInput>>;
  correct_count?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  league?: InputMaybe<LeagueRelationFilter>;
  league_id?: InputMaybe<IntFilter>;
  member?: InputMaybe<LeagueMemberRelationFilter>;
  membership_id?: InputMaybe<IntFilter>;
  score_diff?: InputMaybe<IntFilter>;
  week?: InputMaybe<IntFilter>;
};

export type WeekWinnersWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type AllLeaguesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllLeaguesQuery = { __typename?: 'Query', leagues: Array<{ __typename?: 'League', league_id: number }> };

export type CreateLeagueMutationVariables = Exact<{
  data: CreateLeagueInput;
}>;


export type CreateLeagueMutation = { __typename?: 'Mutation', createLeague: { __typename?: 'League', id: string, league_id: number, late_policy?: LatePolicy | null, pick_policy?: PickPolicy | null, reminder_policy?: ReminderPolicy | null, superbowl_competition?: boolean | null, scoring_type?: ScoringType | null, name: string, share_code?: string | null } };

export type HomeQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type HomeQuery = { __typename?: 'Query', user?: { __typename?: 'User', leaguemembers: Array<{ __typename?: 'LeagueMember', membership_id: number, role?: MemberRole | null, hasPickedNextGame: boolean, nextGame?: { __typename?: 'Game', week: number, ts: any } | null, leagues: { __typename?: 'League', league_id: number, name: string, season: number, status: LeagueStatus, share_code?: string | null, aggregateLeagueMember: { __typename?: 'AggregateResponse', count: number } }, WeekWinners: Array<{ __typename?: 'WeekWinners', correct_count: number, membership_id: number, week: number, score_diff: number }>, correctPicks: { __typename?: 'AggregateResponse', count: number }, wrongPicks: { __typename?: 'AggregateResponse', count: number } }> } | null };

export type MyLeaguesQueryVariables = Exact<{ [key: string]: never; }>;


export type MyLeaguesQuery = { __typename?: 'Query', me?: { __typename?: 'User', leaguemembers: Array<{ __typename?: 'LeagueMember', leagues: { __typename?: 'League', league_id: number, name: string } }> } | null };

export type LeagueNameQueryVariables = Exact<{
  leagueId: Scalars['Int'];
}>;


export type LeagueNameQuery = { __typename?: 'Query', league?: { __typename?: 'League', name: string } | null };

export type SeasonCorrectPicksQueryVariables = Exact<{
  league_id: Scalars['Int'];
}>;


export type SeasonCorrectPicksQuery = { __typename?: 'Query', groupByPick: Array<{ __typename?: 'PickGroupBy', member_id?: number | null, _count?: { __typename?: 'PickCountAggregate', correct: number } | null }> };

export type FirstNotStartedWeekQueryVariables = Exact<{
  override?: InputMaybe<Scalars['Boolean']>;
  week?: InputMaybe<Scalars['Int']>;
}>;


export type FirstNotStartedWeekQuery = { __typename?: 'Query', firstNotStartedWeek: { __typename?: 'FirstNotStartedWeekResponse', week?: number | null, season?: number | null, games: Array<{ __typename?: 'Game', gid: number, week: number, season: number, awayscore?: number | null, homescore?: number | null, ts: any, done?: boolean | null, homerecord?: string | null, awayrecord?: string | null, winner?: number | null, is_tiebreaker?: boolean | null, teams_games_awayToteams: { __typename?: 'Team', teamid: number, abbrev?: string | null }, teams_games_homeToteams: { __typename?: 'Team', teamid: number, abbrev?: string | null } }> } };

export type GamesByLeagueQueryVariables = Exact<{
  leagueId: Scalars['Int'];
  where?: InputMaybe<GameWhereInput>;
}>;


export type GamesByLeagueQuery = { __typename?: 'Query', league?: { __typename?: 'League', games: Array<{ __typename?: 'Game', id: string, gid: number, awayscore?: number | null, homescore?: number | null, ts: any, done?: boolean | null, winner?: number | null, is_tiebreaker?: boolean | null, teams_games_awayToteams: { __typename?: 'Team', id: string, teamid: number, abbrev?: string | null }, teams_games_homeToteams: { __typename?: 'Team', id: string, teamid: number, abbrev?: string | null } }> } | null };

export type GamesBySeasonQueryVariables = Exact<{
  season: Scalars['Int'];
}>;


export type GamesBySeasonQuery = { __typename?: 'Query', games: Array<{ __typename?: 'Game', id: string, gid: number, awayscore?: number | null, homescore?: number | null, ts: any, done?: boolean | null, winner?: number | null, is_tiebreaker?: boolean | null, teams_games_awayToteams: { __typename?: 'Team', id: string, teamid: number, abbrev?: string | null }, teams_games_homeToteams: { __typename?: 'Team', id: string, teamid: number, abbrev?: string | null } }> };

export type GamesByWeekQueryVariables = Exact<{
  season: Scalars['Int'];
  week: Scalars['Int'];
}>;


export type GamesByWeekQuery = { __typename?: 'Query', games: Array<{ __typename?: 'Game', id: string, gid: number, week: number, season: number, awayscore?: number | null, homescore?: number | null, ts: any, done?: boolean | null, homerecord?: string | null, awayrecord?: string | null, winner?: number | null, is_tiebreaker?: boolean | null, teams_games_awayToteams: { __typename?: 'Team', id: string, teamid: number, abbrev?: string | null }, teams_games_homeToteams: { __typename?: 'Team', id: string, teamid: number, abbrev?: string | null } }> };

export type FindLeagueMembersQueryVariables = Exact<{
  league_id: Scalars['Int'];
}>;


export type FindLeagueMembersQuery = { __typename?: 'Query', leagueMembers: Array<{ __typename?: 'LeagueMember', id: string, membership_id: number, people: { __typename?: 'User', id: string, uid: number, username: string, email: string }, leagues: { __typename?: 'League', id: string, name: string } }> };

export type MakePicksMutationVariables = Exact<{
  picks: Array<GamePick> | GamePick;
  member_id: Scalars['Int'];
}>;


export type MakePicksMutation = { __typename?: 'Mutation', makePicks: { __typename?: 'MakePicksResponse', user: { __typename?: 'User', id: string, username: string, email: string } } };

export type PeopleWithLeaguesQueryVariables = Exact<{ [key: string]: never; }>;


export type PeopleWithLeaguesQuery = { __typename?: 'Query', leagueMembers: Array<{ __typename?: 'LeagueMember', id: string, league_id: number, membership_id: number, people: { __typename?: 'User', id: string, uid: number, username: string } }> };

export type PicksByWeekQueryVariables = Exact<{
  league_id: Scalars['Int'];
  week?: InputMaybe<Scalars['Int']>;
  override?: InputMaybe<Scalars['Boolean']>;
}>;


export type PicksByWeekQuery = { __typename?: 'Query', picksByWeek: { __typename?: 'PicksByWeekResponse', week?: number | null, season?: number | null, canView: boolean, games: Array<{ __typename?: 'Game', id: string, gid: number, ts: any, done?: boolean | null, home: number, away: number, winner?: number | null, homerecord?: string | null, awayrecord?: string | null, homescore?: number | null, awayscore?: number | null, liveStatus?: { __typename?: 'GameLive', currentQuarter?: number | null, currentQuarterSecondsRemaining?: number | null, playedStatus?: MsfGamePlayedStatus | null } | null, teams_games_homeToteams: { __typename?: 'Team', id: string, teamid: number, abbrev?: string | null }, teams_games_awayToteams: { __typename?: 'Team', id: string, abbrev?: string | null, teamid: number } }>, picks: Array<{ __typename?: 'Pick', id: string, gid: number, pickid: number, member_id?: number | null, winner?: number | null, correct?: number | null, score?: number | null }> } };

export type ProfileQueryVariables = Exact<{
  user_id: Scalars['Int'];
}>;


export type ProfileQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, uid: number, username: string } | null, picks: Array<{ __typename?: 'PickGroupBy', correct?: number | null, member_id?: number | null, _count?: { __typename?: 'PickCountAggregate', pickid: number } | null }>, members: Array<{ __typename?: 'LeagueMember', id: string, membership_id: number, leagues: { __typename?: 'League', id: string, name: string, league_id: number } }> };

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  previousUserId?: InputMaybe<Scalars['Int']>;
  superbowlWinner: Scalars['Int'];
  superbowlLoser: Scalars['Int'];
  superbowlScore: Scalars['Int'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'RegisterResponse', success: boolean, user: { __typename?: 'User', id: string, username: string, uid: number }, membership: { __typename?: 'LeagueMember', id: string, league_id: number, leagues: { __typename?: 'League', id: string, name: string } } } };

export type SuperbowlPicksQueryVariables = Exact<{
  league_id: Scalars['Int'];
}>;


export type SuperbowlPicksQuery = { __typename?: 'Query', superbowls: Array<{ __typename?: 'Superbowl', id: string, uid: number, score: number, leaguemembers?: { __typename?: 'LeagueMember', id: string, membership_id: number, people: { __typename?: 'User', id: string, username: string } } | null, teams_superbowl_winnerToteams: { __typename?: 'Team', id: string, abbrev?: string | null, teamid: number }, teams_superbowl_loserToteams: { __typename?: 'Team', id: string, abbrev?: string | null, teamid: number } }> };

export type AllTeamsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTeamsQuery = { __typename?: 'Query', teams: Array<{ __typename?: 'Team', id: string, teamid: number, abbrev?: string | null, loc: string, name: string, conference?: string | null }> };

export type WinnersQueryVariables = Exact<{
  league_id: Scalars['Int'];
}>;


export type WinnersQuery = { __typename?: 'Query', findManyWeekWinners: Array<{ __typename?: 'WeekWinners', id: number, week: number, correct_count: number, member: { __typename?: 'LeagueMember', id: string, people: { __typename?: 'User', id: string, uid: number, username: string } } }> };


export const AllLeaguesDocument = gql`
    query AllLeagues {
  leagues {
    league_id
  }
}
    `;

/**
 * __useAllLeaguesQuery__
 *
 * To run a query within a React component, call `useAllLeaguesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllLeaguesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllLeaguesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllLeaguesQuery(baseOptions?: Apollo.QueryHookOptions<AllLeaguesQuery, AllLeaguesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllLeaguesQuery, AllLeaguesQueryVariables>(AllLeaguesDocument, options);
      }
export function useAllLeaguesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllLeaguesQuery, AllLeaguesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllLeaguesQuery, AllLeaguesQueryVariables>(AllLeaguesDocument, options);
        }
export type AllLeaguesQueryHookResult = ReturnType<typeof useAllLeaguesQuery>;
export type AllLeaguesLazyQueryHookResult = ReturnType<typeof useAllLeaguesLazyQuery>;
export type AllLeaguesQueryResult = Apollo.QueryResult<AllLeaguesQuery, AllLeaguesQueryVariables>;
export const CreateLeagueDocument = gql`
    mutation CreateLeague($data: CreateLeagueInput!) {
  createLeague(data: $data) {
    id
    league_id
    late_policy
    pick_policy
    reminder_policy
    superbowl_competition
    scoring_type
    name
    share_code
  }
}
    `;
export type CreateLeagueMutationFn = Apollo.MutationFunction<CreateLeagueMutation, CreateLeagueMutationVariables>;

/**
 * __useCreateLeagueMutation__
 *
 * To run a mutation, you first call `useCreateLeagueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLeagueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLeagueMutation, { data, loading, error }] = useCreateLeagueMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateLeagueMutation(baseOptions?: Apollo.MutationHookOptions<CreateLeagueMutation, CreateLeagueMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateLeagueMutation, CreateLeagueMutationVariables>(CreateLeagueDocument, options);
      }
export type CreateLeagueMutationHookResult = ReturnType<typeof useCreateLeagueMutation>;
export type CreateLeagueMutationResult = Apollo.MutationResult<CreateLeagueMutation>;
export type CreateLeagueMutationOptions = Apollo.BaseMutationOptions<CreateLeagueMutation, CreateLeagueMutationVariables>;
export const HomeDocument = gql`
    query Home($where: UserWhereUniqueInput!) {
  user(where: $where) {
    leaguemembers(orderBy: {leagues: {season: desc}}) {
      membership_id
      role
      nextGame {
        week
        ts
      }
      hasPickedNextGame
      leagues {
        league_id
        name
        season
        status
        share_code
        aggregateLeagueMember {
          count
        }
      }
      WeekWinners {
        correct_count
        membership_id
        week
        score_diff
      }
      correctPicks: aggregatePick(where: {correct: {equals: 1}}) {
        count
      }
      wrongPicks: aggregatePick(where: {correct: {equals: 0}}) {
        count
      }
    }
  }
}
    `;

/**
 * __useHomeQuery__
 *
 * To run a query within a React component, call `useHomeQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useHomeQuery(baseOptions: Apollo.QueryHookOptions<HomeQuery, HomeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HomeQuery, HomeQueryVariables>(HomeDocument, options);
      }
export function useHomeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomeQuery, HomeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HomeQuery, HomeQueryVariables>(HomeDocument, options);
        }
export type HomeQueryHookResult = ReturnType<typeof useHomeQuery>;
export type HomeLazyQueryHookResult = ReturnType<typeof useHomeLazyQuery>;
export type HomeQueryResult = Apollo.QueryResult<HomeQuery, HomeQueryVariables>;
export const MyLeaguesDocument = gql`
    query MyLeagues {
  me {
    leaguemembers(orderBy: {leagues: {season: desc}}) {
      leagues {
        league_id
        name
      }
    }
  }
}
    `;

/**
 * __useMyLeaguesQuery__
 *
 * To run a query within a React component, call `useMyLeaguesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyLeaguesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyLeaguesQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyLeaguesQuery(baseOptions?: Apollo.QueryHookOptions<MyLeaguesQuery, MyLeaguesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyLeaguesQuery, MyLeaguesQueryVariables>(MyLeaguesDocument, options);
      }
export function useMyLeaguesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyLeaguesQuery, MyLeaguesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyLeaguesQuery, MyLeaguesQueryVariables>(MyLeaguesDocument, options);
        }
export type MyLeaguesQueryHookResult = ReturnType<typeof useMyLeaguesQuery>;
export type MyLeaguesLazyQueryHookResult = ReturnType<typeof useMyLeaguesLazyQuery>;
export type MyLeaguesQueryResult = Apollo.QueryResult<MyLeaguesQuery, MyLeaguesQueryVariables>;
export const LeagueNameDocument = gql`
    query LeagueName($leagueId: Int!) {
  league(where: {league_id: $leagueId}) {
    name
  }
}
    `;

/**
 * __useLeagueNameQuery__
 *
 * To run a query within a React component, call `useLeagueNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useLeagueNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLeagueNameQuery({
 *   variables: {
 *      leagueId: // value for 'leagueId'
 *   },
 * });
 */
export function useLeagueNameQuery(baseOptions: Apollo.QueryHookOptions<LeagueNameQuery, LeagueNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LeagueNameQuery, LeagueNameQueryVariables>(LeagueNameDocument, options);
      }
export function useLeagueNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LeagueNameQuery, LeagueNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LeagueNameQuery, LeagueNameQueryVariables>(LeagueNameDocument, options);
        }
export type LeagueNameQueryHookResult = ReturnType<typeof useLeagueNameQuery>;
export type LeagueNameLazyQueryHookResult = ReturnType<typeof useLeagueNameLazyQuery>;
export type LeagueNameQueryResult = Apollo.QueryResult<LeagueNameQuery, LeagueNameQueryVariables>;
export const SeasonCorrectPicksDocument = gql`
    query SeasonCorrectPicks($league_id: Int!) {
  groupByPick(
    by: [member_id]
    where: {correct: {equals: 1}, leaguemembers: {is: {league_id: {equals: $league_id}}}}
  ) {
    member_id
    _count {
      correct
    }
  }
}
    `;

/**
 * __useSeasonCorrectPicksQuery__
 *
 * To run a query within a React component, call `useSeasonCorrectPicksQuery` and pass it any options that fit your needs.
 * When your component renders, `useSeasonCorrectPicksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSeasonCorrectPicksQuery({
 *   variables: {
 *      league_id: // value for 'league_id'
 *   },
 * });
 */
export function useSeasonCorrectPicksQuery(baseOptions: Apollo.QueryHookOptions<SeasonCorrectPicksQuery, SeasonCorrectPicksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SeasonCorrectPicksQuery, SeasonCorrectPicksQueryVariables>(SeasonCorrectPicksDocument, options);
      }
export function useSeasonCorrectPicksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SeasonCorrectPicksQuery, SeasonCorrectPicksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SeasonCorrectPicksQuery, SeasonCorrectPicksQueryVariables>(SeasonCorrectPicksDocument, options);
        }
export type SeasonCorrectPicksQueryHookResult = ReturnType<typeof useSeasonCorrectPicksQuery>;
export type SeasonCorrectPicksLazyQueryHookResult = ReturnType<typeof useSeasonCorrectPicksLazyQuery>;
export type SeasonCorrectPicksQueryResult = Apollo.QueryResult<SeasonCorrectPicksQuery, SeasonCorrectPicksQueryVariables>;
export const FirstNotStartedWeekDocument = gql`
    query FirstNotStartedWeek($override: Boolean, $week: Int) {
  firstNotStartedWeek(override: $override, week: $week) {
    week
    season
    games {
      gid
      week
      season
      awayscore
      homescore
      ts
      done
      homerecord
      awayrecord
      winner
      is_tiebreaker
      teams_games_awayToteams {
        teamid
        abbrev
      }
      teams_games_homeToteams {
        teamid
        abbrev
      }
    }
  }
}
    `;

/**
 * __useFirstNotStartedWeekQuery__
 *
 * To run a query within a React component, call `useFirstNotStartedWeekQuery` and pass it any options that fit your needs.
 * When your component renders, `useFirstNotStartedWeekQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFirstNotStartedWeekQuery({
 *   variables: {
 *      override: // value for 'override'
 *      week: // value for 'week'
 *   },
 * });
 */
export function useFirstNotStartedWeekQuery(baseOptions?: Apollo.QueryHookOptions<FirstNotStartedWeekQuery, FirstNotStartedWeekQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FirstNotStartedWeekQuery, FirstNotStartedWeekQueryVariables>(FirstNotStartedWeekDocument, options);
      }
export function useFirstNotStartedWeekLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FirstNotStartedWeekQuery, FirstNotStartedWeekQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FirstNotStartedWeekQuery, FirstNotStartedWeekQueryVariables>(FirstNotStartedWeekDocument, options);
        }
export type FirstNotStartedWeekQueryHookResult = ReturnType<typeof useFirstNotStartedWeekQuery>;
export type FirstNotStartedWeekLazyQueryHookResult = ReturnType<typeof useFirstNotStartedWeekLazyQuery>;
export type FirstNotStartedWeekQueryResult = Apollo.QueryResult<FirstNotStartedWeekQuery, FirstNotStartedWeekQueryVariables>;
export const GamesByLeagueDocument = gql`
    query GamesByLeague($leagueId: Int!, $where: GameWhereInput) {
  league(where: {league_id: $leagueId}) {
    games(where: $where) {
      id
      gid
      awayscore
      homescore
      ts
      done
      winner
      is_tiebreaker
      teams_games_awayToteams {
        id
        teamid
        abbrev
      }
      teams_games_homeToteams {
        id
        teamid
        abbrev
      }
    }
  }
}
    `;

/**
 * __useGamesByLeagueQuery__
 *
 * To run a query within a React component, call `useGamesByLeagueQuery` and pass it any options that fit your needs.
 * When your component renders, `useGamesByLeagueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGamesByLeagueQuery({
 *   variables: {
 *      leagueId: // value for 'leagueId'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGamesByLeagueQuery(baseOptions: Apollo.QueryHookOptions<GamesByLeagueQuery, GamesByLeagueQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GamesByLeagueQuery, GamesByLeagueQueryVariables>(GamesByLeagueDocument, options);
      }
export function useGamesByLeagueLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GamesByLeagueQuery, GamesByLeagueQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GamesByLeagueQuery, GamesByLeagueQueryVariables>(GamesByLeagueDocument, options);
        }
export type GamesByLeagueQueryHookResult = ReturnType<typeof useGamesByLeagueQuery>;
export type GamesByLeagueLazyQueryHookResult = ReturnType<typeof useGamesByLeagueLazyQuery>;
export type GamesByLeagueQueryResult = Apollo.QueryResult<GamesByLeagueQuery, GamesByLeagueQueryVariables>;
export const GamesBySeasonDocument = gql`
    query GamesBySeason($season: Int!) {
  games(where: {season: {equals: $season}}) {
    id
    gid
    awayscore
    homescore
    ts
    done
    winner
    is_tiebreaker
    teams_games_awayToteams {
      id
      teamid
      abbrev
    }
    teams_games_homeToteams {
      id
      teamid
      abbrev
    }
  }
}
    `;

/**
 * __useGamesBySeasonQuery__
 *
 * To run a query within a React component, call `useGamesBySeasonQuery` and pass it any options that fit your needs.
 * When your component renders, `useGamesBySeasonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGamesBySeasonQuery({
 *   variables: {
 *      season: // value for 'season'
 *   },
 * });
 */
export function useGamesBySeasonQuery(baseOptions: Apollo.QueryHookOptions<GamesBySeasonQuery, GamesBySeasonQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GamesBySeasonQuery, GamesBySeasonQueryVariables>(GamesBySeasonDocument, options);
      }
export function useGamesBySeasonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GamesBySeasonQuery, GamesBySeasonQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GamesBySeasonQuery, GamesBySeasonQueryVariables>(GamesBySeasonDocument, options);
        }
export type GamesBySeasonQueryHookResult = ReturnType<typeof useGamesBySeasonQuery>;
export type GamesBySeasonLazyQueryHookResult = ReturnType<typeof useGamesBySeasonLazyQuery>;
export type GamesBySeasonQueryResult = Apollo.QueryResult<GamesBySeasonQuery, GamesBySeasonQueryVariables>;
export const GamesByWeekDocument = gql`
    query GamesByWeek($season: Int!, $week: Int!) {
  games(where: {season: {equals: $season}, week: {equals: $week}}) {
    id
    gid
    week
    season
    awayscore
    homescore
    ts
    done
    homerecord
    awayrecord
    winner
    is_tiebreaker
    teams_games_awayToteams {
      id
      teamid
      abbrev
    }
    teams_games_homeToteams {
      id
      teamid
      abbrev
    }
  }
}
    `;

/**
 * __useGamesByWeekQuery__
 *
 * To run a query within a React component, call `useGamesByWeekQuery` and pass it any options that fit your needs.
 * When your component renders, `useGamesByWeekQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGamesByWeekQuery({
 *   variables: {
 *      season: // value for 'season'
 *      week: // value for 'week'
 *   },
 * });
 */
export function useGamesByWeekQuery(baseOptions: Apollo.QueryHookOptions<GamesByWeekQuery, GamesByWeekQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GamesByWeekQuery, GamesByWeekQueryVariables>(GamesByWeekDocument, options);
      }
export function useGamesByWeekLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GamesByWeekQuery, GamesByWeekQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GamesByWeekQuery, GamesByWeekQueryVariables>(GamesByWeekDocument, options);
        }
export type GamesByWeekQueryHookResult = ReturnType<typeof useGamesByWeekQuery>;
export type GamesByWeekLazyQueryHookResult = ReturnType<typeof useGamesByWeekLazyQuery>;
export type GamesByWeekQueryResult = Apollo.QueryResult<GamesByWeekQuery, GamesByWeekQueryVariables>;
export const FindLeagueMembersDocument = gql`
    query FindLeagueMembers($league_id: Int!) {
  leagueMembers(
    where: {league_id: {equals: $league_id}}
    orderBy: {people: {username: asc}}
  ) {
    id
    membership_id
    people {
      id
      uid
      username
      email
    }
    leagues {
      id
      name
    }
  }
}
    `;

/**
 * __useFindLeagueMembersQuery__
 *
 * To run a query within a React component, call `useFindLeagueMembersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindLeagueMembersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindLeagueMembersQuery({
 *   variables: {
 *      league_id: // value for 'league_id'
 *   },
 * });
 */
export function useFindLeagueMembersQuery(baseOptions: Apollo.QueryHookOptions<FindLeagueMembersQuery, FindLeagueMembersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindLeagueMembersQuery, FindLeagueMembersQueryVariables>(FindLeagueMembersDocument, options);
      }
export function useFindLeagueMembersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindLeagueMembersQuery, FindLeagueMembersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindLeagueMembersQuery, FindLeagueMembersQueryVariables>(FindLeagueMembersDocument, options);
        }
export type FindLeagueMembersQueryHookResult = ReturnType<typeof useFindLeagueMembersQuery>;
export type FindLeagueMembersLazyQueryHookResult = ReturnType<typeof useFindLeagueMembersLazyQuery>;
export type FindLeagueMembersQueryResult = Apollo.QueryResult<FindLeagueMembersQuery, FindLeagueMembersQueryVariables>;
export const MakePicksDocument = gql`
    mutation MakePicks($picks: [GamePick!]!, $member_id: Int!) {
  makePicks(picks: $picks, member_id: $member_id) {
    user {
      id
      username
      email
    }
  }
}
    `;
export type MakePicksMutationFn = Apollo.MutationFunction<MakePicksMutation, MakePicksMutationVariables>;

/**
 * __useMakePicksMutation__
 *
 * To run a mutation, you first call `useMakePicksMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMakePicksMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [makePicksMutation, { data, loading, error }] = useMakePicksMutation({
 *   variables: {
 *      picks: // value for 'picks'
 *      member_id: // value for 'member_id'
 *   },
 * });
 */
export function useMakePicksMutation(baseOptions?: Apollo.MutationHookOptions<MakePicksMutation, MakePicksMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MakePicksMutation, MakePicksMutationVariables>(MakePicksDocument, options);
      }
export type MakePicksMutationHookResult = ReturnType<typeof useMakePicksMutation>;
export type MakePicksMutationResult = Apollo.MutationResult<MakePicksMutation>;
export type MakePicksMutationOptions = Apollo.BaseMutationOptions<MakePicksMutation, MakePicksMutationVariables>;
export const PeopleWithLeaguesDocument = gql`
    query PeopleWithLeagues {
  leagueMembers {
    id
    league_id
    membership_id
    people {
      id
      uid
      username
    }
  }
}
    `;

/**
 * __usePeopleWithLeaguesQuery__
 *
 * To run a query within a React component, call `usePeopleWithLeaguesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePeopleWithLeaguesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePeopleWithLeaguesQuery({
 *   variables: {
 *   },
 * });
 */
export function usePeopleWithLeaguesQuery(baseOptions?: Apollo.QueryHookOptions<PeopleWithLeaguesQuery, PeopleWithLeaguesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PeopleWithLeaguesQuery, PeopleWithLeaguesQueryVariables>(PeopleWithLeaguesDocument, options);
      }
export function usePeopleWithLeaguesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PeopleWithLeaguesQuery, PeopleWithLeaguesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PeopleWithLeaguesQuery, PeopleWithLeaguesQueryVariables>(PeopleWithLeaguesDocument, options);
        }
export type PeopleWithLeaguesQueryHookResult = ReturnType<typeof usePeopleWithLeaguesQuery>;
export type PeopleWithLeaguesLazyQueryHookResult = ReturnType<typeof usePeopleWithLeaguesLazyQuery>;
export type PeopleWithLeaguesQueryResult = Apollo.QueryResult<PeopleWithLeaguesQuery, PeopleWithLeaguesQueryVariables>;
export const PicksByWeekDocument = gql`
    query PicksByWeek($league_id: Int!, $week: Int, $override: Boolean) {
  picksByWeek(league_id: $league_id, week: $week, override: $override) {
    week
    season
    canView
    games {
      id
      gid
      ts
      done
      home
      away
      winner
      liveStatus {
        currentQuarter
        currentQuarterSecondsRemaining
        playedStatus
      }
      homerecord
      awayrecord
      homescore
      awayscore
      teams_games_homeToteams {
        id
        teamid
        abbrev
      }
      teams_games_awayToteams {
        id
        abbrev
        teamid
      }
    }
    picks {
      id
      gid
      pickid
      member_id
      winner
      correct
      score
    }
  }
}
    `;

/**
 * __usePicksByWeekQuery__
 *
 * To run a query within a React component, call `usePicksByWeekQuery` and pass it any options that fit your needs.
 * When your component renders, `usePicksByWeekQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePicksByWeekQuery({
 *   variables: {
 *      league_id: // value for 'league_id'
 *      week: // value for 'week'
 *      override: // value for 'override'
 *   },
 * });
 */
export function usePicksByWeekQuery(baseOptions: Apollo.QueryHookOptions<PicksByWeekQuery, PicksByWeekQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PicksByWeekQuery, PicksByWeekQueryVariables>(PicksByWeekDocument, options);
      }
export function usePicksByWeekLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PicksByWeekQuery, PicksByWeekQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PicksByWeekQuery, PicksByWeekQueryVariables>(PicksByWeekDocument, options);
        }
export type PicksByWeekQueryHookResult = ReturnType<typeof usePicksByWeekQuery>;
export type PicksByWeekLazyQueryHookResult = ReturnType<typeof usePicksByWeekLazyQuery>;
export type PicksByWeekQueryResult = Apollo.QueryResult<PicksByWeekQuery, PicksByWeekQueryVariables>;
export const ProfileDocument = gql`
    query Profile($user_id: Int!) {
  user: user(where: {uid: $user_id}) {
    id
    uid
    username
  }
  picks: groupByPick(by: [member_id, correct], where: {uid: {equals: $user_id}}) {
    correct
    member_id
    _count {
      pickid
    }
  }
  members: leagueMembers(where: {user_id: {equals: $user_id}}) {
    id
    membership_id
    leagues {
      id
      name
      league_id
    }
  }
}
    `;

/**
 * __useProfileQuery__
 *
 * To run a query within a React component, call `useProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useProfileQuery(baseOptions: Apollo.QueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
      }
export function useProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
        }
export type ProfileQueryHookResult = ReturnType<typeof useProfileQuery>;
export type ProfileLazyQueryHookResult = ReturnType<typeof useProfileLazyQuery>;
export type ProfileQueryResult = Apollo.QueryResult<ProfileQuery, ProfileQueryVariables>;
export const RegisterDocument = gql`
    mutation Register($username: String!, $email: String!, $previousUserId: Int, $superbowlWinner: Int!, $superbowlLoser: Int!, $superbowlScore: Int!) {
  register(
    username: $username
    email: $email
    previousUserId: $previousUserId
    superbowlWinner: $superbowlWinner
    superbowlLoser: $superbowlLoser
    superbowlScore: $superbowlScore
  ) {
    success
    user {
      id
      username
      uid
    }
    membership {
      id
      league_id
      leagues {
        id
        name
      }
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      previousUserId: // value for 'previousUserId'
 *      superbowlWinner: // value for 'superbowlWinner'
 *      superbowlLoser: // value for 'superbowlLoser'
 *      superbowlScore: // value for 'superbowlScore'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const SuperbowlPicksDocument = gql`
    query SuperbowlPicks($league_id: Int!) {
  superbowls(where: {leaguemembers: {is: {league_id: {equals: $league_id}}}}) {
    id
    uid
    leaguemembers {
      id
      membership_id
      people {
        id
        username
      }
    }
    score
    teams_superbowl_winnerToteams {
      id
      abbrev
      teamid
    }
    teams_superbowl_loserToteams {
      id
      abbrev
      teamid
    }
  }
}
    `;

/**
 * __useSuperbowlPicksQuery__
 *
 * To run a query within a React component, call `useSuperbowlPicksQuery` and pass it any options that fit your needs.
 * When your component renders, `useSuperbowlPicksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSuperbowlPicksQuery({
 *   variables: {
 *      league_id: // value for 'league_id'
 *   },
 * });
 */
export function useSuperbowlPicksQuery(baseOptions: Apollo.QueryHookOptions<SuperbowlPicksQuery, SuperbowlPicksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SuperbowlPicksQuery, SuperbowlPicksQueryVariables>(SuperbowlPicksDocument, options);
      }
export function useSuperbowlPicksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SuperbowlPicksQuery, SuperbowlPicksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SuperbowlPicksQuery, SuperbowlPicksQueryVariables>(SuperbowlPicksDocument, options);
        }
export type SuperbowlPicksQueryHookResult = ReturnType<typeof useSuperbowlPicksQuery>;
export type SuperbowlPicksLazyQueryHookResult = ReturnType<typeof useSuperbowlPicksLazyQuery>;
export type SuperbowlPicksQueryResult = Apollo.QueryResult<SuperbowlPicksQuery, SuperbowlPicksQueryVariables>;
export const AllTeamsDocument = gql`
    query AllTeams {
  teams(where: {teamid: {gt: 0}}) {
    id
    teamid
    abbrev
    loc
    name
    conference
  }
}
    `;

/**
 * __useAllTeamsQuery__
 *
 * To run a query within a React component, call `useAllTeamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTeamsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTeamsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllTeamsQuery(baseOptions?: Apollo.QueryHookOptions<AllTeamsQuery, AllTeamsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllTeamsQuery, AllTeamsQueryVariables>(AllTeamsDocument, options);
      }
export function useAllTeamsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllTeamsQuery, AllTeamsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllTeamsQuery, AllTeamsQueryVariables>(AllTeamsDocument, options);
        }
export type AllTeamsQueryHookResult = ReturnType<typeof useAllTeamsQuery>;
export type AllTeamsLazyQueryHookResult = ReturnType<typeof useAllTeamsLazyQuery>;
export type AllTeamsQueryResult = Apollo.QueryResult<AllTeamsQuery, AllTeamsQueryVariables>;
export const WinnersDocument = gql`
    query Winners($league_id: Int!) {
  findManyWeekWinners(where: {league_id: {equals: $league_id}}) {
    id
    week
    correct_count
    member {
      id
      people {
        id
        uid
        username
      }
    }
  }
}
    `;

/**
 * __useWinnersQuery__
 *
 * To run a query within a React component, call `useWinnersQuery` and pass it any options that fit your needs.
 * When your component renders, `useWinnersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWinnersQuery({
 *   variables: {
 *      league_id: // value for 'league_id'
 *   },
 * });
 */
export function useWinnersQuery(baseOptions: Apollo.QueryHookOptions<WinnersQuery, WinnersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WinnersQuery, WinnersQueryVariables>(WinnersDocument, options);
      }
export function useWinnersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WinnersQuery, WinnersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WinnersQuery, WinnersQueryVariables>(WinnersDocument, options);
        }
export type WinnersQueryHookResult = ReturnType<typeof useWinnersQuery>;
export type WinnersLazyQueryHookResult = ReturnType<typeof useWinnersLazyQuery>;
export type WinnersQueryResult = Apollo.QueryResult<WinnersQuery, WinnersQueryVariables>;