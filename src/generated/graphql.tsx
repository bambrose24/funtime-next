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
  BigInt: any;
  DateTime: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateGames = {
  __typename?: 'AggregateGames';
  _avg?: Maybe<GamesAvgAggregate>;
  _count?: Maybe<GamesCountAggregate>;
  _max?: Maybe<GamesMaxAggregate>;
  _min?: Maybe<GamesMinAggregate>;
  _sum?: Maybe<GamesSumAggregate>;
};

export type AggregateLeagueMembers = {
  __typename?: 'AggregateLeagueMembers';
  _avg?: Maybe<LeagueMembersAvgAggregate>;
  _count?: Maybe<LeagueMembersCountAggregate>;
  _max?: Maybe<LeagueMembersMaxAggregate>;
  _min?: Maybe<LeagueMembersMinAggregate>;
  _sum?: Maybe<LeagueMembersSumAggregate>;
};

export type AggregateLeagues = {
  __typename?: 'AggregateLeagues';
  _avg?: Maybe<LeaguesAvgAggregate>;
  _count?: Maybe<LeaguesCountAggregate>;
  _max?: Maybe<LeaguesMaxAggregate>;
  _min?: Maybe<LeaguesMinAggregate>;
  _sum?: Maybe<LeaguesSumAggregate>;
};

export type AggregatePeople = {
  __typename?: 'AggregatePeople';
  _avg?: Maybe<PeopleAvgAggregate>;
  _count?: Maybe<PeopleCountAggregate>;
  _max?: Maybe<PeopleMaxAggregate>;
  _min?: Maybe<PeopleMinAggregate>;
  _sum?: Maybe<PeopleSumAggregate>;
};

export type AggregatePicks = {
  __typename?: 'AggregatePicks';
  _avg?: Maybe<PicksAvgAggregate>;
  _count?: Maybe<PicksCountAggregate>;
  _max?: Maybe<PicksMaxAggregate>;
  _min?: Maybe<PicksMinAggregate>;
  _sum?: Maybe<PicksSumAggregate>;
};

export type AggregateSuperbowl = {
  __typename?: 'AggregateSuperbowl';
  _avg?: Maybe<SuperbowlAvgAggregate>;
  _count?: Maybe<SuperbowlCountAggregate>;
  _max?: Maybe<SuperbowlMaxAggregate>;
  _min?: Maybe<SuperbowlMinAggregate>;
  _sum?: Maybe<SuperbowlSumAggregate>;
};

export type AggregateSuperbowlSquares = {
  __typename?: 'AggregateSuperbowlSquares';
  _avg?: Maybe<SuperbowlSquaresAvgAggregate>;
  _count?: Maybe<SuperbowlSquaresCountAggregate>;
  _max?: Maybe<SuperbowlSquaresMaxAggregate>;
  _min?: Maybe<SuperbowlSquaresMinAggregate>;
  _sum?: Maybe<SuperbowlSquaresSumAggregate>;
};

export type AggregateTeams = {
  __typename?: 'AggregateTeams';
  _avg?: Maybe<TeamsAvgAggregate>;
  _count?: Maybe<TeamsCountAggregate>;
  _max?: Maybe<TeamsMaxAggregate>;
  _min?: Maybe<TeamsMinAggregate>;
  _sum?: Maybe<TeamsSumAggregate>;
};

export type BigIntNullableFilter = {
  equals?: InputMaybe<Scalars['BigInt']>;
  gt?: InputMaybe<Scalars['BigInt']>;
  gte?: InputMaybe<Scalars['BigInt']>;
  in?: InputMaybe<Array<Scalars['BigInt']>>;
  lt?: InputMaybe<Scalars['BigInt']>;
  lte?: InputMaybe<Scalars['BigInt']>;
  not?: InputMaybe<NestedBigIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type BigIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedBigIntNullableFilter>;
  _min?: InputMaybe<NestedBigIntNullableFilter>;
  _sum?: InputMaybe<NestedBigIntNullableFilter>;
  equals?: InputMaybe<Scalars['BigInt']>;
  gt?: InputMaybe<Scalars['BigInt']>;
  gte?: InputMaybe<Scalars['BigInt']>;
  in?: InputMaybe<Array<Scalars['BigInt']>>;
  lt?: InputMaybe<Scalars['BigInt']>;
  lte?: InputMaybe<Scalars['BigInt']>;
  not?: InputMaybe<NestedBigIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']>>;
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

export type GamePick = {
  game_id: Scalars['Int'];
  is_random: Scalars['Boolean'];
  score?: InputMaybe<Scalars['Int']>;
  winner: Scalars['Int'];
};

export type Games = {
  __typename?: 'Games';
  Picks: Array<Picks>;
  Teams_Games_awayToTeams: Teams;
  Teams_Games_homeToTeams: Teams;
  _count?: Maybe<GamesCount>;
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
  season: Scalars['Int'];
  seconds?: Maybe<Scalars['BigInt']>;
  ts: Scalars['DateTime'];
  week: Scalars['Int'];
  winner?: Maybe<Scalars['Int']>;
};


export type GamesPicksArgs = {
  cursor?: InputMaybe<PicksWhereUniqueInput>;
  distinct?: InputMaybe<Array<PicksScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PicksOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PicksWhereInput>;
};

export type GamesAvgAggregate = {
  __typename?: 'GamesAvgAggregate';
  away?: Maybe<Scalars['Float']>;
  awayscore?: Maybe<Scalars['Float']>;
  gid?: Maybe<Scalars['Float']>;
  home?: Maybe<Scalars['Float']>;
  homescore?: Maybe<Scalars['Float']>;
  season?: Maybe<Scalars['Float']>;
  seconds?: Maybe<Scalars['Float']>;
  week?: Maybe<Scalars['Float']>;
  winner?: Maybe<Scalars['Float']>;
};

export type GamesAvgOrderByAggregateInput = {
  away?: InputMaybe<SortOrder>;
  awayscore?: InputMaybe<SortOrder>;
  gid?: InputMaybe<SortOrder>;
  home?: InputMaybe<SortOrder>;
  homescore?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
  seconds?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
  winner?: InputMaybe<SortOrder>;
};

export type GamesCount = {
  __typename?: 'GamesCount';
  Picks: Scalars['Int'];
};

export type GamesCountAggregate = {
  __typename?: 'GamesCountAggregate';
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
  season: Scalars['Int'];
  seconds: Scalars['Int'];
  ts: Scalars['Int'];
  week: Scalars['Int'];
  winner: Scalars['Int'];
};

export type GamesCountOrderByAggregateInput = {
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
  season?: InputMaybe<SortOrder>;
  seconds?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
  winner?: InputMaybe<SortOrder>;
};

export type GamesCreateInput = {
  Picks?: InputMaybe<PicksCreateNestedManyWithoutGamesInput>;
  Teams_Games_awayToTeams: TeamsCreateNestedOneWithoutGames_Games_AwayToTeamsInput;
  Teams_Games_homeToTeams: TeamsCreateNestedOneWithoutGames_Games_HomeToTeamsInput;
  awayrecord?: InputMaybe<Scalars['String']>;
  awayscore?: InputMaybe<Scalars['Int']>;
  current_record?: InputMaybe<Scalars['String']>;
  done?: InputMaybe<Scalars['Boolean']>;
  homerecord?: InputMaybe<Scalars['String']>;
  homescore?: InputMaybe<Scalars['Int']>;
  international?: InputMaybe<Scalars['Boolean']>;
  is_tiebreaker?: InputMaybe<Scalars['Boolean']>;
  season: Scalars['Int'];
  seconds?: InputMaybe<Scalars['BigInt']>;
  ts: Scalars['DateTime'];
  week: Scalars['Int'];
  winner?: InputMaybe<Scalars['Int']>;
};

export type GamesCreateManyInput = {
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
  season: Scalars['Int'];
  seconds?: InputMaybe<Scalars['BigInt']>;
  ts: Scalars['DateTime'];
  week: Scalars['Int'];
  winner?: InputMaybe<Scalars['Int']>;
};

export type GamesCreateManyTeams_Games_AwayToTeamsInput = {
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
  season: Scalars['Int'];
  seconds?: InputMaybe<Scalars['BigInt']>;
  ts: Scalars['DateTime'];
  week: Scalars['Int'];
  winner?: InputMaybe<Scalars['Int']>;
};

export type GamesCreateManyTeams_Games_AwayToTeamsInputEnvelope = {
  data: Array<GamesCreateManyTeams_Games_AwayToTeamsInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type GamesCreateManyTeams_Games_HomeToTeamsInput = {
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
  season: Scalars['Int'];
  seconds?: InputMaybe<Scalars['BigInt']>;
  ts: Scalars['DateTime'];
  week: Scalars['Int'];
  winner?: InputMaybe<Scalars['Int']>;
};

export type GamesCreateManyTeams_Games_HomeToTeamsInputEnvelope = {
  data: Array<GamesCreateManyTeams_Games_HomeToTeamsInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type GamesCreateNestedManyWithoutTeams_Games_AwayToTeamsInput = {
  connect?: InputMaybe<Array<GamesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GamesCreateOrConnectWithoutTeams_Games_AwayToTeamsInput>>;
  create?: InputMaybe<Array<GamesCreateWithoutTeams_Games_AwayToTeamsInput>>;
  createMany?: InputMaybe<GamesCreateManyTeams_Games_AwayToTeamsInputEnvelope>;
};

export type GamesCreateNestedManyWithoutTeams_Games_HomeToTeamsInput = {
  connect?: InputMaybe<Array<GamesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GamesCreateOrConnectWithoutTeams_Games_HomeToTeamsInput>>;
  create?: InputMaybe<Array<GamesCreateWithoutTeams_Games_HomeToTeamsInput>>;
  createMany?: InputMaybe<GamesCreateManyTeams_Games_HomeToTeamsInputEnvelope>;
};

export type GamesCreateNestedOneWithoutPicksInput = {
  connect?: InputMaybe<GamesWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GamesCreateOrConnectWithoutPicksInput>;
  create?: InputMaybe<GamesCreateWithoutPicksInput>;
};

export type GamesCreateOrConnectWithoutPicksInput = {
  create: GamesCreateWithoutPicksInput;
  where: GamesWhereUniqueInput;
};

export type GamesCreateOrConnectWithoutTeams_Games_AwayToTeamsInput = {
  create: GamesCreateWithoutTeams_Games_AwayToTeamsInput;
  where: GamesWhereUniqueInput;
};

export type GamesCreateOrConnectWithoutTeams_Games_HomeToTeamsInput = {
  create: GamesCreateWithoutTeams_Games_HomeToTeamsInput;
  where: GamesWhereUniqueInput;
};

export type GamesCreateWithoutPicksInput = {
  Teams_Games_awayToTeams: TeamsCreateNestedOneWithoutGames_Games_AwayToTeamsInput;
  Teams_Games_homeToTeams: TeamsCreateNestedOneWithoutGames_Games_HomeToTeamsInput;
  awayrecord?: InputMaybe<Scalars['String']>;
  awayscore?: InputMaybe<Scalars['Int']>;
  current_record?: InputMaybe<Scalars['String']>;
  done?: InputMaybe<Scalars['Boolean']>;
  homerecord?: InputMaybe<Scalars['String']>;
  homescore?: InputMaybe<Scalars['Int']>;
  international?: InputMaybe<Scalars['Boolean']>;
  is_tiebreaker?: InputMaybe<Scalars['Boolean']>;
  season: Scalars['Int'];
  seconds?: InputMaybe<Scalars['BigInt']>;
  ts: Scalars['DateTime'];
  week: Scalars['Int'];
  winner?: InputMaybe<Scalars['Int']>;
};

export type GamesCreateWithoutTeams_Games_AwayToTeamsInput = {
  Picks?: InputMaybe<PicksCreateNestedManyWithoutGamesInput>;
  Teams_Games_homeToTeams: TeamsCreateNestedOneWithoutGames_Games_HomeToTeamsInput;
  awayrecord?: InputMaybe<Scalars['String']>;
  awayscore?: InputMaybe<Scalars['Int']>;
  current_record?: InputMaybe<Scalars['String']>;
  done?: InputMaybe<Scalars['Boolean']>;
  homerecord?: InputMaybe<Scalars['String']>;
  homescore?: InputMaybe<Scalars['Int']>;
  international?: InputMaybe<Scalars['Boolean']>;
  is_tiebreaker?: InputMaybe<Scalars['Boolean']>;
  season: Scalars['Int'];
  seconds?: InputMaybe<Scalars['BigInt']>;
  ts: Scalars['DateTime'];
  week: Scalars['Int'];
  winner?: InputMaybe<Scalars['Int']>;
};

export type GamesCreateWithoutTeams_Games_HomeToTeamsInput = {
  Picks?: InputMaybe<PicksCreateNestedManyWithoutGamesInput>;
  Teams_Games_awayToTeams: TeamsCreateNestedOneWithoutGames_Games_AwayToTeamsInput;
  awayrecord?: InputMaybe<Scalars['String']>;
  awayscore?: InputMaybe<Scalars['Int']>;
  current_record?: InputMaybe<Scalars['String']>;
  done?: InputMaybe<Scalars['Boolean']>;
  homerecord?: InputMaybe<Scalars['String']>;
  homescore?: InputMaybe<Scalars['Int']>;
  international?: InputMaybe<Scalars['Boolean']>;
  is_tiebreaker?: InputMaybe<Scalars['Boolean']>;
  season: Scalars['Int'];
  seconds?: InputMaybe<Scalars['BigInt']>;
  ts: Scalars['DateTime'];
  week: Scalars['Int'];
  winner?: InputMaybe<Scalars['Int']>;
};

export type GamesGroupBy = {
  __typename?: 'GamesGroupBy';
  _avg?: Maybe<GamesAvgAggregate>;
  _count?: Maybe<GamesCountAggregate>;
  _max?: Maybe<GamesMaxAggregate>;
  _min?: Maybe<GamesMinAggregate>;
  _sum?: Maybe<GamesSumAggregate>;
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
  season: Scalars['Int'];
  seconds?: Maybe<Scalars['BigInt']>;
  ts: Scalars['DateTime'];
  week: Scalars['Int'];
  winner?: Maybe<Scalars['Int']>;
};

export type GamesListRelationFilter = {
  every?: InputMaybe<GamesWhereInput>;
  none?: InputMaybe<GamesWhereInput>;
  some?: InputMaybe<GamesWhereInput>;
};

export type GamesMaxAggregate = {
  __typename?: 'GamesMaxAggregate';
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
  season?: Maybe<Scalars['Int']>;
  seconds?: Maybe<Scalars['BigInt']>;
  ts?: Maybe<Scalars['DateTime']>;
  week?: Maybe<Scalars['Int']>;
  winner?: Maybe<Scalars['Int']>;
};

export type GamesMaxOrderByAggregateInput = {
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
  season?: InputMaybe<SortOrder>;
  seconds?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
  winner?: InputMaybe<SortOrder>;
};

export type GamesMinAggregate = {
  __typename?: 'GamesMinAggregate';
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
  season?: Maybe<Scalars['Int']>;
  seconds?: Maybe<Scalars['BigInt']>;
  ts?: Maybe<Scalars['DateTime']>;
  week?: Maybe<Scalars['Int']>;
  winner?: Maybe<Scalars['Int']>;
};

export type GamesMinOrderByAggregateInput = {
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
  season?: InputMaybe<SortOrder>;
  seconds?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
  winner?: InputMaybe<SortOrder>;
};

export type GamesOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type GamesOrderByWithAggregationInput = {
  _avg?: InputMaybe<GamesAvgOrderByAggregateInput>;
  _count?: InputMaybe<GamesCountOrderByAggregateInput>;
  _max?: InputMaybe<GamesMaxOrderByAggregateInput>;
  _min?: InputMaybe<GamesMinOrderByAggregateInput>;
  _sum?: InputMaybe<GamesSumOrderByAggregateInput>;
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
  season?: InputMaybe<SortOrder>;
  seconds?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
  winner?: InputMaybe<SortOrder>;
};

export type GamesOrderByWithRelationInput = {
  Picks?: InputMaybe<PicksOrderByRelationAggregateInput>;
  Teams_Games_awayToTeams?: InputMaybe<TeamsOrderByWithRelationInput>;
  Teams_Games_homeToTeams?: InputMaybe<TeamsOrderByWithRelationInput>;
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
  season?: InputMaybe<SortOrder>;
  seconds?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
  winner?: InputMaybe<SortOrder>;
};

export type GamesRelationFilter = {
  is?: InputMaybe<GamesWhereInput>;
  isNot?: InputMaybe<GamesWhereInput>;
};

export enum GamesScalarFieldEnum {
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
  Season = 'season',
  Seconds = 'seconds',
  Ts = 'ts',
  Week = 'week',
  Winner = 'winner'
}

export type GamesScalarWhereInput = {
  AND?: InputMaybe<Array<GamesScalarWhereInput>>;
  NOT?: InputMaybe<Array<GamesScalarWhereInput>>;
  OR?: InputMaybe<Array<GamesScalarWhereInput>>;
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
  season?: InputMaybe<IntFilter>;
  seconds?: InputMaybe<BigIntNullableFilter>;
  ts?: InputMaybe<DateTimeFilter>;
  week?: InputMaybe<IntFilter>;
  winner?: InputMaybe<IntNullableFilter>;
};

export type GamesScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<GamesScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<GamesScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<GamesScalarWhereWithAggregatesInput>>;
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
  season?: InputMaybe<IntWithAggregatesFilter>;
  seconds?: InputMaybe<BigIntNullableWithAggregatesFilter>;
  ts?: InputMaybe<DateTimeWithAggregatesFilter>;
  week?: InputMaybe<IntWithAggregatesFilter>;
  winner?: InputMaybe<IntNullableWithAggregatesFilter>;
};

export type GamesSumAggregate = {
  __typename?: 'GamesSumAggregate';
  away?: Maybe<Scalars['Int']>;
  awayscore?: Maybe<Scalars['Int']>;
  gid?: Maybe<Scalars['Int']>;
  home?: Maybe<Scalars['Int']>;
  homescore?: Maybe<Scalars['Int']>;
  season?: Maybe<Scalars['Int']>;
  seconds?: Maybe<Scalars['BigInt']>;
  week?: Maybe<Scalars['Int']>;
  winner?: Maybe<Scalars['Int']>;
};

export type GamesSumOrderByAggregateInput = {
  away?: InputMaybe<SortOrder>;
  awayscore?: InputMaybe<SortOrder>;
  gid?: InputMaybe<SortOrder>;
  home?: InputMaybe<SortOrder>;
  homescore?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
  seconds?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
  winner?: InputMaybe<SortOrder>;
};

export type GamesUpdateInput = {
  Picks?: InputMaybe<PicksUpdateManyWithoutGamesNestedInput>;
  Teams_Games_awayToTeams?: InputMaybe<TeamsUpdateOneRequiredWithoutGames_Games_AwayToTeamsNestedInput>;
  Teams_Games_homeToTeams?: InputMaybe<TeamsUpdateOneRequiredWithoutGames_Games_HomeToTeamsNestedInput>;
  awayrecord?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  awayscore?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  current_record?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  done?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  homerecord?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  homescore?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  international?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  is_tiebreaker?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  season?: InputMaybe<IntFieldUpdateOperationsInput>;
  seconds?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>;
  ts?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  week?: InputMaybe<IntFieldUpdateOperationsInput>;
  winner?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type GamesUpdateManyMutationInput = {
  awayrecord?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  awayscore?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  current_record?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  done?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  homerecord?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  homescore?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  international?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  is_tiebreaker?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  season?: InputMaybe<IntFieldUpdateOperationsInput>;
  seconds?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>;
  ts?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  week?: InputMaybe<IntFieldUpdateOperationsInput>;
  winner?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type GamesUpdateManyWithWhereWithoutTeams_Games_AwayToTeamsInput = {
  data: GamesUpdateManyMutationInput;
  where: GamesScalarWhereInput;
};

export type GamesUpdateManyWithWhereWithoutTeams_Games_HomeToTeamsInput = {
  data: GamesUpdateManyMutationInput;
  where: GamesScalarWhereInput;
};

export type GamesUpdateManyWithoutTeams_Games_AwayToTeamsNestedInput = {
  connect?: InputMaybe<Array<GamesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GamesCreateOrConnectWithoutTeams_Games_AwayToTeamsInput>>;
  create?: InputMaybe<Array<GamesCreateWithoutTeams_Games_AwayToTeamsInput>>;
  createMany?: InputMaybe<GamesCreateManyTeams_Games_AwayToTeamsInputEnvelope>;
  delete?: InputMaybe<Array<GamesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<GamesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<GamesWhereUniqueInput>>;
  set?: InputMaybe<Array<GamesWhereUniqueInput>>;
  update?: InputMaybe<Array<GamesUpdateWithWhereUniqueWithoutTeams_Games_AwayToTeamsInput>>;
  updateMany?: InputMaybe<Array<GamesUpdateManyWithWhereWithoutTeams_Games_AwayToTeamsInput>>;
  upsert?: InputMaybe<Array<GamesUpsertWithWhereUniqueWithoutTeams_Games_AwayToTeamsInput>>;
};

export type GamesUpdateManyWithoutTeams_Games_HomeToTeamsNestedInput = {
  connect?: InputMaybe<Array<GamesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GamesCreateOrConnectWithoutTeams_Games_HomeToTeamsInput>>;
  create?: InputMaybe<Array<GamesCreateWithoutTeams_Games_HomeToTeamsInput>>;
  createMany?: InputMaybe<GamesCreateManyTeams_Games_HomeToTeamsInputEnvelope>;
  delete?: InputMaybe<Array<GamesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<GamesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<GamesWhereUniqueInput>>;
  set?: InputMaybe<Array<GamesWhereUniqueInput>>;
  update?: InputMaybe<Array<GamesUpdateWithWhereUniqueWithoutTeams_Games_HomeToTeamsInput>>;
  updateMany?: InputMaybe<Array<GamesUpdateManyWithWhereWithoutTeams_Games_HomeToTeamsInput>>;
  upsert?: InputMaybe<Array<GamesUpsertWithWhereUniqueWithoutTeams_Games_HomeToTeamsInput>>;
};

export type GamesUpdateOneRequiredWithoutPicksNestedInput = {
  connect?: InputMaybe<GamesWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GamesCreateOrConnectWithoutPicksInput>;
  create?: InputMaybe<GamesCreateWithoutPicksInput>;
  update?: InputMaybe<GamesUpdateWithoutPicksInput>;
  upsert?: InputMaybe<GamesUpsertWithoutPicksInput>;
};

export type GamesUpdateWithWhereUniqueWithoutTeams_Games_AwayToTeamsInput = {
  data: GamesUpdateWithoutTeams_Games_AwayToTeamsInput;
  where: GamesWhereUniqueInput;
};

export type GamesUpdateWithWhereUniqueWithoutTeams_Games_HomeToTeamsInput = {
  data: GamesUpdateWithoutTeams_Games_HomeToTeamsInput;
  where: GamesWhereUniqueInput;
};

export type GamesUpdateWithoutPicksInput = {
  Teams_Games_awayToTeams?: InputMaybe<TeamsUpdateOneRequiredWithoutGames_Games_AwayToTeamsNestedInput>;
  Teams_Games_homeToTeams?: InputMaybe<TeamsUpdateOneRequiredWithoutGames_Games_HomeToTeamsNestedInput>;
  awayrecord?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  awayscore?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  current_record?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  done?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  homerecord?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  homescore?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  international?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  is_tiebreaker?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  season?: InputMaybe<IntFieldUpdateOperationsInput>;
  seconds?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>;
  ts?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  week?: InputMaybe<IntFieldUpdateOperationsInput>;
  winner?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type GamesUpdateWithoutTeams_Games_AwayToTeamsInput = {
  Picks?: InputMaybe<PicksUpdateManyWithoutGamesNestedInput>;
  Teams_Games_homeToTeams?: InputMaybe<TeamsUpdateOneRequiredWithoutGames_Games_HomeToTeamsNestedInput>;
  awayrecord?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  awayscore?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  current_record?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  done?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  homerecord?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  homescore?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  international?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  is_tiebreaker?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  season?: InputMaybe<IntFieldUpdateOperationsInput>;
  seconds?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>;
  ts?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  week?: InputMaybe<IntFieldUpdateOperationsInput>;
  winner?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type GamesUpdateWithoutTeams_Games_HomeToTeamsInput = {
  Picks?: InputMaybe<PicksUpdateManyWithoutGamesNestedInput>;
  Teams_Games_awayToTeams?: InputMaybe<TeamsUpdateOneRequiredWithoutGames_Games_AwayToTeamsNestedInput>;
  awayrecord?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  awayscore?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  current_record?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  done?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  homerecord?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  homescore?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  international?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  is_tiebreaker?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  season?: InputMaybe<IntFieldUpdateOperationsInput>;
  seconds?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>;
  ts?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  week?: InputMaybe<IntFieldUpdateOperationsInput>;
  winner?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type GamesUpsertWithWhereUniqueWithoutTeams_Games_AwayToTeamsInput = {
  create: GamesCreateWithoutTeams_Games_AwayToTeamsInput;
  update: GamesUpdateWithoutTeams_Games_AwayToTeamsInput;
  where: GamesWhereUniqueInput;
};

export type GamesUpsertWithWhereUniqueWithoutTeams_Games_HomeToTeamsInput = {
  create: GamesCreateWithoutTeams_Games_HomeToTeamsInput;
  update: GamesUpdateWithoutTeams_Games_HomeToTeamsInput;
  where: GamesWhereUniqueInput;
};

export type GamesUpsertWithoutPicksInput = {
  create: GamesCreateWithoutPicksInput;
  update: GamesUpdateWithoutPicksInput;
};

export type GamesWhereInput = {
  AND?: InputMaybe<Array<GamesWhereInput>>;
  NOT?: InputMaybe<Array<GamesWhereInput>>;
  OR?: InputMaybe<Array<GamesWhereInput>>;
  Picks?: InputMaybe<PicksListRelationFilter>;
  Teams_Games_awayToTeams?: InputMaybe<TeamsRelationFilter>;
  Teams_Games_homeToTeams?: InputMaybe<TeamsRelationFilter>;
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
  season?: InputMaybe<IntFilter>;
  seconds?: InputMaybe<BigIntNullableFilter>;
  ts?: InputMaybe<DateTimeFilter>;
  week?: InputMaybe<IntFilter>;
  winner?: InputMaybe<IntNullableFilter>;
};

export type GamesWhereUniqueInput = {
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

export type LeagueMembers = {
  __typename?: 'LeagueMembers';
  Leagues: Leagues;
  People: People;
  Picks: Array<Picks>;
  _count?: Maybe<LeagueMembersCount>;
  league_id: Scalars['Int'];
  membership_id: Scalars['Int'];
  role: Scalars['String'];
  ts: Scalars['DateTime'];
  user_id: Scalars['Int'];
};


export type LeagueMembersPicksArgs = {
  cursor?: InputMaybe<PicksWhereUniqueInput>;
  distinct?: InputMaybe<Array<PicksScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PicksOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PicksWhereInput>;
};

export type LeagueMembersAvgAggregate = {
  __typename?: 'LeagueMembersAvgAggregate';
  league_id?: Maybe<Scalars['Float']>;
  membership_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type LeagueMembersAvgOrderByAggregateInput = {
  league_id?: InputMaybe<SortOrder>;
  membership_id?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type LeagueMembersCount = {
  __typename?: 'LeagueMembersCount';
  Picks: Scalars['Int'];
};

export type LeagueMembersCountAggregate = {
  __typename?: 'LeagueMembersCountAggregate';
  _all: Scalars['Int'];
  league_id: Scalars['Int'];
  membership_id: Scalars['Int'];
  role: Scalars['Int'];
  ts: Scalars['Int'];
  user_id: Scalars['Int'];
};

export type LeagueMembersCountOrderByAggregateInput = {
  league_id?: InputMaybe<SortOrder>;
  membership_id?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type LeagueMembersCreateInput = {
  Leagues: LeaguesCreateNestedOneWithoutLeagueMembersInput;
  People: PeopleCreateNestedOneWithoutLeagueMembersInput;
  Picks?: InputMaybe<PicksCreateNestedManyWithoutLeagueMembersInput>;
  role: Scalars['String'];
  ts?: InputMaybe<Scalars['DateTime']>;
};

export type LeagueMembersCreateManyInput = {
  league_id: Scalars['Int'];
  membership_id?: InputMaybe<Scalars['Int']>;
  role: Scalars['String'];
  ts?: InputMaybe<Scalars['DateTime']>;
  user_id: Scalars['Int'];
};

export type LeagueMembersCreateManyLeaguesInput = {
  membership_id?: InputMaybe<Scalars['Int']>;
  role: Scalars['String'];
  ts?: InputMaybe<Scalars['DateTime']>;
  user_id: Scalars['Int'];
};

export type LeagueMembersCreateManyLeaguesInputEnvelope = {
  data: Array<LeagueMembersCreateManyLeaguesInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type LeagueMembersCreateManyPeopleInput = {
  league_id: Scalars['Int'];
  membership_id?: InputMaybe<Scalars['Int']>;
  role: Scalars['String'];
  ts?: InputMaybe<Scalars['DateTime']>;
};

export type LeagueMembersCreateManyPeopleInputEnvelope = {
  data: Array<LeagueMembersCreateManyPeopleInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type LeagueMembersCreateNestedManyWithoutLeaguesInput = {
  connect?: InputMaybe<Array<LeagueMembersWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LeagueMembersCreateOrConnectWithoutLeaguesInput>>;
  create?: InputMaybe<Array<LeagueMembersCreateWithoutLeaguesInput>>;
  createMany?: InputMaybe<LeagueMembersCreateManyLeaguesInputEnvelope>;
};

export type LeagueMembersCreateNestedManyWithoutPeopleInput = {
  connect?: InputMaybe<Array<LeagueMembersWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LeagueMembersCreateOrConnectWithoutPeopleInput>>;
  create?: InputMaybe<Array<LeagueMembersCreateWithoutPeopleInput>>;
  createMany?: InputMaybe<LeagueMembersCreateManyPeopleInputEnvelope>;
};

export type LeagueMembersCreateNestedOneWithoutPicksInput = {
  connect?: InputMaybe<LeagueMembersWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LeagueMembersCreateOrConnectWithoutPicksInput>;
  create?: InputMaybe<LeagueMembersCreateWithoutPicksInput>;
};

export type LeagueMembersCreateOrConnectWithoutLeaguesInput = {
  create: LeagueMembersCreateWithoutLeaguesInput;
  where: LeagueMembersWhereUniqueInput;
};

export type LeagueMembersCreateOrConnectWithoutPeopleInput = {
  create: LeagueMembersCreateWithoutPeopleInput;
  where: LeagueMembersWhereUniqueInput;
};

export type LeagueMembersCreateOrConnectWithoutPicksInput = {
  create: LeagueMembersCreateWithoutPicksInput;
  where: LeagueMembersWhereUniqueInput;
};

export type LeagueMembersCreateWithoutLeaguesInput = {
  People: PeopleCreateNestedOneWithoutLeagueMembersInput;
  Picks?: InputMaybe<PicksCreateNestedManyWithoutLeagueMembersInput>;
  role: Scalars['String'];
  ts?: InputMaybe<Scalars['DateTime']>;
};

export type LeagueMembersCreateWithoutPeopleInput = {
  Leagues: LeaguesCreateNestedOneWithoutLeagueMembersInput;
  Picks?: InputMaybe<PicksCreateNestedManyWithoutLeagueMembersInput>;
  role: Scalars['String'];
  ts?: InputMaybe<Scalars['DateTime']>;
};

export type LeagueMembersCreateWithoutPicksInput = {
  Leagues: LeaguesCreateNestedOneWithoutLeagueMembersInput;
  People: PeopleCreateNestedOneWithoutLeagueMembersInput;
  role: Scalars['String'];
  ts?: InputMaybe<Scalars['DateTime']>;
};

export type LeagueMembersGroupBy = {
  __typename?: 'LeagueMembersGroupBy';
  _avg?: Maybe<LeagueMembersAvgAggregate>;
  _count?: Maybe<LeagueMembersCountAggregate>;
  _max?: Maybe<LeagueMembersMaxAggregate>;
  _min?: Maybe<LeagueMembersMinAggregate>;
  _sum?: Maybe<LeagueMembersSumAggregate>;
  league_id: Scalars['Int'];
  membership_id: Scalars['Int'];
  role: Scalars['String'];
  ts: Scalars['DateTime'];
  user_id: Scalars['Int'];
};

export type LeagueMembersListRelationFilter = {
  every?: InputMaybe<LeagueMembersWhereInput>;
  none?: InputMaybe<LeagueMembersWhereInput>;
  some?: InputMaybe<LeagueMembersWhereInput>;
};

export type LeagueMembersMaxAggregate = {
  __typename?: 'LeagueMembersMaxAggregate';
  league_id?: Maybe<Scalars['Int']>;
  membership_id?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['String']>;
  ts?: Maybe<Scalars['DateTime']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type LeagueMembersMaxOrderByAggregateInput = {
  league_id?: InputMaybe<SortOrder>;
  membership_id?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type LeagueMembersMinAggregate = {
  __typename?: 'LeagueMembersMinAggregate';
  league_id?: Maybe<Scalars['Int']>;
  membership_id?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['String']>;
  ts?: Maybe<Scalars['DateTime']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type LeagueMembersMinOrderByAggregateInput = {
  league_id?: InputMaybe<SortOrder>;
  membership_id?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type LeagueMembersOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type LeagueMembersOrderByWithAggregationInput = {
  _avg?: InputMaybe<LeagueMembersAvgOrderByAggregateInput>;
  _count?: InputMaybe<LeagueMembersCountOrderByAggregateInput>;
  _max?: InputMaybe<LeagueMembersMaxOrderByAggregateInput>;
  _min?: InputMaybe<LeagueMembersMinOrderByAggregateInput>;
  _sum?: InputMaybe<LeagueMembersSumOrderByAggregateInput>;
  league_id?: InputMaybe<SortOrder>;
  membership_id?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type LeagueMembersOrderByWithRelationInput = {
  Leagues?: InputMaybe<LeaguesOrderByWithRelationInput>;
  People?: InputMaybe<PeopleOrderByWithRelationInput>;
  Picks?: InputMaybe<PicksOrderByRelationAggregateInput>;
  league_id?: InputMaybe<SortOrder>;
  membership_id?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type LeagueMembersRelationFilter = {
  is?: InputMaybe<LeagueMembersWhereInput>;
  isNot?: InputMaybe<LeagueMembersWhereInput>;
};

export enum LeagueMembersScalarFieldEnum {
  LeagueId = 'league_id',
  MembershipId = 'membership_id',
  Role = 'role',
  Ts = 'ts',
  UserId = 'user_id'
}

export type LeagueMembersScalarWhereInput = {
  AND?: InputMaybe<Array<LeagueMembersScalarWhereInput>>;
  NOT?: InputMaybe<Array<LeagueMembersScalarWhereInput>>;
  OR?: InputMaybe<Array<LeagueMembersScalarWhereInput>>;
  league_id?: InputMaybe<IntFilter>;
  membership_id?: InputMaybe<IntFilter>;
  role?: InputMaybe<StringFilter>;
  ts?: InputMaybe<DateTimeFilter>;
  user_id?: InputMaybe<IntFilter>;
};

export type LeagueMembersScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<LeagueMembersScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<LeagueMembersScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<LeagueMembersScalarWhereWithAggregatesInput>>;
  league_id?: InputMaybe<IntWithAggregatesFilter>;
  membership_id?: InputMaybe<IntWithAggregatesFilter>;
  role?: InputMaybe<StringWithAggregatesFilter>;
  ts?: InputMaybe<DateTimeWithAggregatesFilter>;
  user_id?: InputMaybe<IntWithAggregatesFilter>;
};

export type LeagueMembersSumAggregate = {
  __typename?: 'LeagueMembersSumAggregate';
  league_id?: Maybe<Scalars['Int']>;
  membership_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type LeagueMembersSumOrderByAggregateInput = {
  league_id?: InputMaybe<SortOrder>;
  membership_id?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type LeagueMembersUpdateInput = {
  Leagues?: InputMaybe<LeaguesUpdateOneRequiredWithoutLeagueMembersNestedInput>;
  People?: InputMaybe<PeopleUpdateOneRequiredWithoutLeagueMembersNestedInput>;
  Picks?: InputMaybe<PicksUpdateManyWithoutLeagueMembersNestedInput>;
  role?: InputMaybe<StringFieldUpdateOperationsInput>;
  ts?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LeagueMembersUpdateManyMutationInput = {
  role?: InputMaybe<StringFieldUpdateOperationsInput>;
  ts?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LeagueMembersUpdateManyWithWhereWithoutLeaguesInput = {
  data: LeagueMembersUpdateManyMutationInput;
  where: LeagueMembersScalarWhereInput;
};

export type LeagueMembersUpdateManyWithWhereWithoutPeopleInput = {
  data: LeagueMembersUpdateManyMutationInput;
  where: LeagueMembersScalarWhereInput;
};

export type LeagueMembersUpdateManyWithoutLeaguesNestedInput = {
  connect?: InputMaybe<Array<LeagueMembersWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LeagueMembersCreateOrConnectWithoutLeaguesInput>>;
  create?: InputMaybe<Array<LeagueMembersCreateWithoutLeaguesInput>>;
  createMany?: InputMaybe<LeagueMembersCreateManyLeaguesInputEnvelope>;
  delete?: InputMaybe<Array<LeagueMembersWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<LeagueMembersScalarWhereInput>>;
  disconnect?: InputMaybe<Array<LeagueMembersWhereUniqueInput>>;
  set?: InputMaybe<Array<LeagueMembersWhereUniqueInput>>;
  update?: InputMaybe<Array<LeagueMembersUpdateWithWhereUniqueWithoutLeaguesInput>>;
  updateMany?: InputMaybe<Array<LeagueMembersUpdateManyWithWhereWithoutLeaguesInput>>;
  upsert?: InputMaybe<Array<LeagueMembersUpsertWithWhereUniqueWithoutLeaguesInput>>;
};

export type LeagueMembersUpdateManyWithoutPeopleNestedInput = {
  connect?: InputMaybe<Array<LeagueMembersWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LeagueMembersCreateOrConnectWithoutPeopleInput>>;
  create?: InputMaybe<Array<LeagueMembersCreateWithoutPeopleInput>>;
  createMany?: InputMaybe<LeagueMembersCreateManyPeopleInputEnvelope>;
  delete?: InputMaybe<Array<LeagueMembersWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<LeagueMembersScalarWhereInput>>;
  disconnect?: InputMaybe<Array<LeagueMembersWhereUniqueInput>>;
  set?: InputMaybe<Array<LeagueMembersWhereUniqueInput>>;
  update?: InputMaybe<Array<LeagueMembersUpdateWithWhereUniqueWithoutPeopleInput>>;
  updateMany?: InputMaybe<Array<LeagueMembersUpdateManyWithWhereWithoutPeopleInput>>;
  upsert?: InputMaybe<Array<LeagueMembersUpsertWithWhereUniqueWithoutPeopleInput>>;
};

export type LeagueMembersUpdateOneWithoutPicksNestedInput = {
  connect?: InputMaybe<LeagueMembersWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LeagueMembersCreateOrConnectWithoutPicksInput>;
  create?: InputMaybe<LeagueMembersCreateWithoutPicksInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<LeagueMembersUpdateWithoutPicksInput>;
  upsert?: InputMaybe<LeagueMembersUpsertWithoutPicksInput>;
};

export type LeagueMembersUpdateWithWhereUniqueWithoutLeaguesInput = {
  data: LeagueMembersUpdateWithoutLeaguesInput;
  where: LeagueMembersWhereUniqueInput;
};

export type LeagueMembersUpdateWithWhereUniqueWithoutPeopleInput = {
  data: LeagueMembersUpdateWithoutPeopleInput;
  where: LeagueMembersWhereUniqueInput;
};

export type LeagueMembersUpdateWithoutLeaguesInput = {
  People?: InputMaybe<PeopleUpdateOneRequiredWithoutLeagueMembersNestedInput>;
  Picks?: InputMaybe<PicksUpdateManyWithoutLeagueMembersNestedInput>;
  role?: InputMaybe<StringFieldUpdateOperationsInput>;
  ts?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LeagueMembersUpdateWithoutPeopleInput = {
  Leagues?: InputMaybe<LeaguesUpdateOneRequiredWithoutLeagueMembersNestedInput>;
  Picks?: InputMaybe<PicksUpdateManyWithoutLeagueMembersNestedInput>;
  role?: InputMaybe<StringFieldUpdateOperationsInput>;
  ts?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LeagueMembersUpdateWithoutPicksInput = {
  Leagues?: InputMaybe<LeaguesUpdateOneRequiredWithoutLeagueMembersNestedInput>;
  People?: InputMaybe<PeopleUpdateOneRequiredWithoutLeagueMembersNestedInput>;
  role?: InputMaybe<StringFieldUpdateOperationsInput>;
  ts?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LeagueMembersUpsertWithWhereUniqueWithoutLeaguesInput = {
  create: LeagueMembersCreateWithoutLeaguesInput;
  update: LeagueMembersUpdateWithoutLeaguesInput;
  where: LeagueMembersWhereUniqueInput;
};

export type LeagueMembersUpsertWithWhereUniqueWithoutPeopleInput = {
  create: LeagueMembersCreateWithoutPeopleInput;
  update: LeagueMembersUpdateWithoutPeopleInput;
  where: LeagueMembersWhereUniqueInput;
};

export type LeagueMembersUpsertWithoutPicksInput = {
  create: LeagueMembersCreateWithoutPicksInput;
  update: LeagueMembersUpdateWithoutPicksInput;
};

export type LeagueMembersWhereInput = {
  AND?: InputMaybe<Array<LeagueMembersWhereInput>>;
  Leagues?: InputMaybe<LeaguesRelationFilter>;
  NOT?: InputMaybe<Array<LeagueMembersWhereInput>>;
  OR?: InputMaybe<Array<LeagueMembersWhereInput>>;
  People?: InputMaybe<PeopleRelationFilter>;
  Picks?: InputMaybe<PicksListRelationFilter>;
  league_id?: InputMaybe<IntFilter>;
  membership_id?: InputMaybe<IntFilter>;
  role?: InputMaybe<StringFilter>;
  ts?: InputMaybe<DateTimeFilter>;
  user_id?: InputMaybe<IntFilter>;
};

export type LeagueMembersWhereUniqueInput = {
  membership_id?: InputMaybe<Scalars['Int']>;
};

export type Leagues = {
  __typename?: 'Leagues';
  LeagueMembers: Array<LeagueMembers>;
  People: People;
  _count?: Maybe<LeaguesCount>;
  created_by_user_id: Scalars['Int'];
  created_time: Scalars['DateTime'];
  late_policy?: Maybe<Scalars['String']>;
  league_id: Scalars['Int'];
  name: Scalars['String'];
  reminder_policy?: Maybe<Scalars['String']>;
  scoring_type?: Maybe<Scalars['String']>;
  season?: Maybe<Scalars['Int']>;
};


export type LeaguesLeagueMembersArgs = {
  cursor?: InputMaybe<LeagueMembersWhereUniqueInput>;
  distinct?: InputMaybe<Array<LeagueMembersScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LeagueMembersOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LeagueMembersWhereInput>;
};

export type LeaguesAvgAggregate = {
  __typename?: 'LeaguesAvgAggregate';
  created_by_user_id?: Maybe<Scalars['Float']>;
  league_id?: Maybe<Scalars['Float']>;
  season?: Maybe<Scalars['Float']>;
};

export type LeaguesAvgOrderByAggregateInput = {
  created_by_user_id?: InputMaybe<SortOrder>;
  league_id?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
};

export type LeaguesCount = {
  __typename?: 'LeaguesCount';
  LeagueMembers: Scalars['Int'];
};

export type LeaguesCountAggregate = {
  __typename?: 'LeaguesCountAggregate';
  _all: Scalars['Int'];
  created_by_user_id: Scalars['Int'];
  created_time: Scalars['Int'];
  late_policy: Scalars['Int'];
  league_id: Scalars['Int'];
  name: Scalars['Int'];
  reminder_policy: Scalars['Int'];
  scoring_type: Scalars['Int'];
  season: Scalars['Int'];
};

export type LeaguesCountOrderByAggregateInput = {
  created_by_user_id?: InputMaybe<SortOrder>;
  created_time?: InputMaybe<SortOrder>;
  late_policy?: InputMaybe<SortOrder>;
  league_id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  reminder_policy?: InputMaybe<SortOrder>;
  scoring_type?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
};

export type LeaguesCreateInput = {
  LeagueMembers?: InputMaybe<LeagueMembersCreateNestedManyWithoutLeaguesInput>;
  People: PeopleCreateNestedOneWithoutLeaguesInput;
  created_time?: InputMaybe<Scalars['DateTime']>;
  late_policy?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  reminder_policy?: InputMaybe<Scalars['String']>;
  scoring_type?: InputMaybe<Scalars['String']>;
  season?: InputMaybe<Scalars['Int']>;
};

export type LeaguesCreateManyInput = {
  created_by_user_id: Scalars['Int'];
  created_time?: InputMaybe<Scalars['DateTime']>;
  late_policy?: InputMaybe<Scalars['String']>;
  league_id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  reminder_policy?: InputMaybe<Scalars['String']>;
  scoring_type?: InputMaybe<Scalars['String']>;
  season?: InputMaybe<Scalars['Int']>;
};

export type LeaguesCreateManyPeopleInput = {
  created_time?: InputMaybe<Scalars['DateTime']>;
  late_policy?: InputMaybe<Scalars['String']>;
  league_id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  reminder_policy?: InputMaybe<Scalars['String']>;
  scoring_type?: InputMaybe<Scalars['String']>;
  season?: InputMaybe<Scalars['Int']>;
};

export type LeaguesCreateManyPeopleInputEnvelope = {
  data: Array<LeaguesCreateManyPeopleInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type LeaguesCreateNestedManyWithoutPeopleInput = {
  connect?: InputMaybe<Array<LeaguesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LeaguesCreateOrConnectWithoutPeopleInput>>;
  create?: InputMaybe<Array<LeaguesCreateWithoutPeopleInput>>;
  createMany?: InputMaybe<LeaguesCreateManyPeopleInputEnvelope>;
};

export type LeaguesCreateNestedOneWithoutLeagueMembersInput = {
  connect?: InputMaybe<LeaguesWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LeaguesCreateOrConnectWithoutLeagueMembersInput>;
  create?: InputMaybe<LeaguesCreateWithoutLeagueMembersInput>;
};

export type LeaguesCreateOrConnectWithoutLeagueMembersInput = {
  create: LeaguesCreateWithoutLeagueMembersInput;
  where: LeaguesWhereUniqueInput;
};

export type LeaguesCreateOrConnectWithoutPeopleInput = {
  create: LeaguesCreateWithoutPeopleInput;
  where: LeaguesWhereUniqueInput;
};

export type LeaguesCreateWithoutLeagueMembersInput = {
  People: PeopleCreateNestedOneWithoutLeaguesInput;
  created_time?: InputMaybe<Scalars['DateTime']>;
  late_policy?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  reminder_policy?: InputMaybe<Scalars['String']>;
  scoring_type?: InputMaybe<Scalars['String']>;
  season?: InputMaybe<Scalars['Int']>;
};

export type LeaguesCreateWithoutPeopleInput = {
  LeagueMembers?: InputMaybe<LeagueMembersCreateNestedManyWithoutLeaguesInput>;
  created_time?: InputMaybe<Scalars['DateTime']>;
  late_policy?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  reminder_policy?: InputMaybe<Scalars['String']>;
  scoring_type?: InputMaybe<Scalars['String']>;
  season?: InputMaybe<Scalars['Int']>;
};

export type LeaguesGroupBy = {
  __typename?: 'LeaguesGroupBy';
  _avg?: Maybe<LeaguesAvgAggregate>;
  _count?: Maybe<LeaguesCountAggregate>;
  _max?: Maybe<LeaguesMaxAggregate>;
  _min?: Maybe<LeaguesMinAggregate>;
  _sum?: Maybe<LeaguesSumAggregate>;
  created_by_user_id: Scalars['Int'];
  created_time: Scalars['DateTime'];
  late_policy?: Maybe<Scalars['String']>;
  league_id: Scalars['Int'];
  name: Scalars['String'];
  reminder_policy?: Maybe<Scalars['String']>;
  scoring_type?: Maybe<Scalars['String']>;
  season?: Maybe<Scalars['Int']>;
};

export type LeaguesListRelationFilter = {
  every?: InputMaybe<LeaguesWhereInput>;
  none?: InputMaybe<LeaguesWhereInput>;
  some?: InputMaybe<LeaguesWhereInput>;
};

export type LeaguesMaxAggregate = {
  __typename?: 'LeaguesMaxAggregate';
  created_by_user_id?: Maybe<Scalars['Int']>;
  created_time?: Maybe<Scalars['DateTime']>;
  late_policy?: Maybe<Scalars['String']>;
  league_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  reminder_policy?: Maybe<Scalars['String']>;
  scoring_type?: Maybe<Scalars['String']>;
  season?: Maybe<Scalars['Int']>;
};

export type LeaguesMaxOrderByAggregateInput = {
  created_by_user_id?: InputMaybe<SortOrder>;
  created_time?: InputMaybe<SortOrder>;
  late_policy?: InputMaybe<SortOrder>;
  league_id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  reminder_policy?: InputMaybe<SortOrder>;
  scoring_type?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
};

export type LeaguesMinAggregate = {
  __typename?: 'LeaguesMinAggregate';
  created_by_user_id?: Maybe<Scalars['Int']>;
  created_time?: Maybe<Scalars['DateTime']>;
  late_policy?: Maybe<Scalars['String']>;
  league_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  reminder_policy?: Maybe<Scalars['String']>;
  scoring_type?: Maybe<Scalars['String']>;
  season?: Maybe<Scalars['Int']>;
};

export type LeaguesMinOrderByAggregateInput = {
  created_by_user_id?: InputMaybe<SortOrder>;
  created_time?: InputMaybe<SortOrder>;
  late_policy?: InputMaybe<SortOrder>;
  league_id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  reminder_policy?: InputMaybe<SortOrder>;
  scoring_type?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
};

export type LeaguesOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type LeaguesOrderByWithAggregationInput = {
  _avg?: InputMaybe<LeaguesAvgOrderByAggregateInput>;
  _count?: InputMaybe<LeaguesCountOrderByAggregateInput>;
  _max?: InputMaybe<LeaguesMaxOrderByAggregateInput>;
  _min?: InputMaybe<LeaguesMinOrderByAggregateInput>;
  _sum?: InputMaybe<LeaguesSumOrderByAggregateInput>;
  created_by_user_id?: InputMaybe<SortOrder>;
  created_time?: InputMaybe<SortOrder>;
  late_policy?: InputMaybe<SortOrder>;
  league_id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  reminder_policy?: InputMaybe<SortOrder>;
  scoring_type?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
};

export type LeaguesOrderByWithRelationInput = {
  LeagueMembers?: InputMaybe<LeagueMembersOrderByRelationAggregateInput>;
  People?: InputMaybe<PeopleOrderByWithRelationInput>;
  created_by_user_id?: InputMaybe<SortOrder>;
  created_time?: InputMaybe<SortOrder>;
  late_policy?: InputMaybe<SortOrder>;
  league_id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  reminder_policy?: InputMaybe<SortOrder>;
  scoring_type?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
};

export type LeaguesRelationFilter = {
  is?: InputMaybe<LeaguesWhereInput>;
  isNot?: InputMaybe<LeaguesWhereInput>;
};

export enum LeaguesScalarFieldEnum {
  CreatedByUserId = 'created_by_user_id',
  CreatedTime = 'created_time',
  LatePolicy = 'late_policy',
  LeagueId = 'league_id',
  Name = 'name',
  ReminderPolicy = 'reminder_policy',
  ScoringType = 'scoring_type',
  Season = 'season'
}

export type LeaguesScalarWhereInput = {
  AND?: InputMaybe<Array<LeaguesScalarWhereInput>>;
  NOT?: InputMaybe<Array<LeaguesScalarWhereInput>>;
  OR?: InputMaybe<Array<LeaguesScalarWhereInput>>;
  created_by_user_id?: InputMaybe<IntFilter>;
  created_time?: InputMaybe<DateTimeFilter>;
  late_policy?: InputMaybe<StringNullableFilter>;
  league_id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  reminder_policy?: InputMaybe<StringNullableFilter>;
  scoring_type?: InputMaybe<StringNullableFilter>;
  season?: InputMaybe<IntNullableFilter>;
};

export type LeaguesScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<LeaguesScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<LeaguesScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<LeaguesScalarWhereWithAggregatesInput>>;
  created_by_user_id?: InputMaybe<IntWithAggregatesFilter>;
  created_time?: InputMaybe<DateTimeWithAggregatesFilter>;
  late_policy?: InputMaybe<StringNullableWithAggregatesFilter>;
  league_id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  reminder_policy?: InputMaybe<StringNullableWithAggregatesFilter>;
  scoring_type?: InputMaybe<StringNullableWithAggregatesFilter>;
  season?: InputMaybe<IntNullableWithAggregatesFilter>;
};

export type LeaguesSumAggregate = {
  __typename?: 'LeaguesSumAggregate';
  created_by_user_id?: Maybe<Scalars['Int']>;
  league_id?: Maybe<Scalars['Int']>;
  season?: Maybe<Scalars['Int']>;
};

export type LeaguesSumOrderByAggregateInput = {
  created_by_user_id?: InputMaybe<SortOrder>;
  league_id?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
};

export type LeaguesUpdateInput = {
  LeagueMembers?: InputMaybe<LeagueMembersUpdateManyWithoutLeaguesNestedInput>;
  People?: InputMaybe<PeopleUpdateOneRequiredWithoutLeaguesNestedInput>;
  created_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  late_policy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  reminder_policy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scoring_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  season?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type LeaguesUpdateManyMutationInput = {
  created_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  late_policy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  reminder_policy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scoring_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  season?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type LeaguesUpdateManyWithWhereWithoutPeopleInput = {
  data: LeaguesUpdateManyMutationInput;
  where: LeaguesScalarWhereInput;
};

export type LeaguesUpdateManyWithoutPeopleNestedInput = {
  connect?: InputMaybe<Array<LeaguesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LeaguesCreateOrConnectWithoutPeopleInput>>;
  create?: InputMaybe<Array<LeaguesCreateWithoutPeopleInput>>;
  createMany?: InputMaybe<LeaguesCreateManyPeopleInputEnvelope>;
  delete?: InputMaybe<Array<LeaguesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<LeaguesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<LeaguesWhereUniqueInput>>;
  set?: InputMaybe<Array<LeaguesWhereUniqueInput>>;
  update?: InputMaybe<Array<LeaguesUpdateWithWhereUniqueWithoutPeopleInput>>;
  updateMany?: InputMaybe<Array<LeaguesUpdateManyWithWhereWithoutPeopleInput>>;
  upsert?: InputMaybe<Array<LeaguesUpsertWithWhereUniqueWithoutPeopleInput>>;
};

export type LeaguesUpdateOneRequiredWithoutLeagueMembersNestedInput = {
  connect?: InputMaybe<LeaguesWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LeaguesCreateOrConnectWithoutLeagueMembersInput>;
  create?: InputMaybe<LeaguesCreateWithoutLeagueMembersInput>;
  update?: InputMaybe<LeaguesUpdateWithoutLeagueMembersInput>;
  upsert?: InputMaybe<LeaguesUpsertWithoutLeagueMembersInput>;
};

export type LeaguesUpdateWithWhereUniqueWithoutPeopleInput = {
  data: LeaguesUpdateWithoutPeopleInput;
  where: LeaguesWhereUniqueInput;
};

export type LeaguesUpdateWithoutLeagueMembersInput = {
  People?: InputMaybe<PeopleUpdateOneRequiredWithoutLeaguesNestedInput>;
  created_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  late_policy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  reminder_policy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scoring_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  season?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type LeaguesUpdateWithoutPeopleInput = {
  LeagueMembers?: InputMaybe<LeagueMembersUpdateManyWithoutLeaguesNestedInput>;
  created_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  late_policy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  reminder_policy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scoring_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  season?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type LeaguesUpsertWithWhereUniqueWithoutPeopleInput = {
  create: LeaguesCreateWithoutPeopleInput;
  update: LeaguesUpdateWithoutPeopleInput;
  where: LeaguesWhereUniqueInput;
};

export type LeaguesUpsertWithoutLeagueMembersInput = {
  create: LeaguesCreateWithoutLeagueMembersInput;
  update: LeaguesUpdateWithoutLeagueMembersInput;
};

export type LeaguesWhereInput = {
  AND?: InputMaybe<Array<LeaguesWhereInput>>;
  LeagueMembers?: InputMaybe<LeagueMembersListRelationFilter>;
  NOT?: InputMaybe<Array<LeaguesWhereInput>>;
  OR?: InputMaybe<Array<LeaguesWhereInput>>;
  People?: InputMaybe<PeopleRelationFilter>;
  created_by_user_id?: InputMaybe<IntFilter>;
  created_time?: InputMaybe<DateTimeFilter>;
  late_policy?: InputMaybe<StringNullableFilter>;
  league_id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  reminder_policy?: InputMaybe<StringNullableFilter>;
  scoring_type?: InputMaybe<StringNullableFilter>;
  season?: InputMaybe<IntNullableFilter>;
};

export type LeaguesWhereUniqueInput = {
  league_id?: InputMaybe<Scalars['Int']>;
};

export type MakePicksResponse = {
  __typename?: 'MakePicksResponse';
  success: Scalars['Boolean'];
  user: People;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyGames: AffectedRowsOutput;
  createManyLeagueMembers: AffectedRowsOutput;
  createManyLeagues: AffectedRowsOutput;
  createManyPeople: AffectedRowsOutput;
  createManyPicks: AffectedRowsOutput;
  createManySuperbowl: AffectedRowsOutput;
  createManySuperbowlSquares: AffectedRowsOutput;
  createManyTeams: AffectedRowsOutput;
  createOneGames: Games;
  createOneLeagueMembers: LeagueMembers;
  createOneLeagues: Leagues;
  createOnePeople: People;
  createOnePicks: Picks;
  createOneSuperbowl: Superbowl;
  createOneSuperbowlSquares: SuperbowlSquares;
  createOneTeams: Teams;
  deleteManyGames: AffectedRowsOutput;
  deleteManyLeagueMembers: AffectedRowsOutput;
  deleteManyLeagues: AffectedRowsOutput;
  deleteManyPeople: AffectedRowsOutput;
  deleteManyPicks: AffectedRowsOutput;
  deleteManySuperbowl: AffectedRowsOutput;
  deleteManySuperbowlSquares: AffectedRowsOutput;
  deleteManyTeams: AffectedRowsOutput;
  deleteOneGames?: Maybe<Games>;
  deleteOneLeagueMembers?: Maybe<LeagueMembers>;
  deleteOneLeagues?: Maybe<Leagues>;
  deleteOnePeople?: Maybe<People>;
  deleteOnePicks?: Maybe<Picks>;
  deleteOneSuperbowl?: Maybe<Superbowl>;
  deleteOneSuperbowlSquares?: Maybe<SuperbowlSquares>;
  deleteOneTeams?: Maybe<Teams>;
  makePicks: MakePicksResponse;
  register: RegisterResponse;
  updateManyGames: AffectedRowsOutput;
  updateManyLeagueMembers: AffectedRowsOutput;
  updateManyLeagues: AffectedRowsOutput;
  updateManyPeople: AffectedRowsOutput;
  updateManyPicks: AffectedRowsOutput;
  updateManySuperbowl: AffectedRowsOutput;
  updateManySuperbowlSquares: AffectedRowsOutput;
  updateManyTeams: AffectedRowsOutput;
  updateOneGames?: Maybe<Games>;
  updateOneLeagueMembers?: Maybe<LeagueMembers>;
  updateOneLeagues?: Maybe<Leagues>;
  updateOnePeople?: Maybe<People>;
  updateOnePicks?: Maybe<Picks>;
  updateOneSuperbowl?: Maybe<Superbowl>;
  updateOneSuperbowlSquares?: Maybe<SuperbowlSquares>;
  updateOneTeams?: Maybe<Teams>;
  upsertOneGames: Games;
  upsertOneLeagueMembers: LeagueMembers;
  upsertOneLeagues: Leagues;
  upsertOnePeople: People;
  upsertOnePicks: Picks;
  upsertOneSuperbowl: Superbowl;
  upsertOneSuperbowlSquares: SuperbowlSquares;
  upsertOneTeams: Teams;
};


export type MutationCreateManyGamesArgs = {
  data: Array<GamesCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyLeagueMembersArgs = {
  data: Array<LeagueMembersCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyLeaguesArgs = {
  data: Array<LeaguesCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyPeopleArgs = {
  data: Array<PeopleCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyPicksArgs = {
  data: Array<PicksCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManySuperbowlArgs = {
  data: Array<SuperbowlCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManySuperbowlSquaresArgs = {
  data: Array<SuperbowlSquaresCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyTeamsArgs = {
  data: Array<TeamsCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateOneGamesArgs = {
  data: GamesCreateInput;
};


export type MutationCreateOneLeagueMembersArgs = {
  data: LeagueMembersCreateInput;
};


export type MutationCreateOneLeaguesArgs = {
  data: LeaguesCreateInput;
};


export type MutationCreateOnePeopleArgs = {
  data: PeopleCreateInput;
};


export type MutationCreateOnePicksArgs = {
  data: PicksCreateInput;
};


export type MutationCreateOneSuperbowlArgs = {
  data: SuperbowlCreateInput;
};


export type MutationCreateOneSuperbowlSquaresArgs = {
  data: SuperbowlSquaresCreateInput;
};


export type MutationCreateOneTeamsArgs = {
  data: TeamsCreateInput;
};


export type MutationDeleteManyGamesArgs = {
  where?: InputMaybe<GamesWhereInput>;
};


export type MutationDeleteManyLeagueMembersArgs = {
  where?: InputMaybe<LeagueMembersWhereInput>;
};


export type MutationDeleteManyLeaguesArgs = {
  where?: InputMaybe<LeaguesWhereInput>;
};


export type MutationDeleteManyPeopleArgs = {
  where?: InputMaybe<PeopleWhereInput>;
};


export type MutationDeleteManyPicksArgs = {
  where?: InputMaybe<PicksWhereInput>;
};


export type MutationDeleteManySuperbowlArgs = {
  where?: InputMaybe<SuperbowlWhereInput>;
};


export type MutationDeleteManySuperbowlSquaresArgs = {
  where?: InputMaybe<SuperbowlSquaresWhereInput>;
};


export type MutationDeleteManyTeamsArgs = {
  where?: InputMaybe<TeamsWhereInput>;
};


export type MutationDeleteOneGamesArgs = {
  where: GamesWhereUniqueInput;
};


export type MutationDeleteOneLeagueMembersArgs = {
  where: LeagueMembersWhereUniqueInput;
};


export type MutationDeleteOneLeaguesArgs = {
  where: LeaguesWhereUniqueInput;
};


export type MutationDeleteOnePeopleArgs = {
  where: PeopleWhereUniqueInput;
};


export type MutationDeleteOnePicksArgs = {
  where: PicksWhereUniqueInput;
};


export type MutationDeleteOneSuperbowlArgs = {
  where: SuperbowlWhereUniqueInput;
};


export type MutationDeleteOneSuperbowlSquaresArgs = {
  where: SuperbowlSquaresWhereUniqueInput;
};


export type MutationDeleteOneTeamsArgs = {
  where: TeamsWhereUniqueInput;
};


export type MutationMakePicksArgs = {
  member_id: Scalars['Int'];
  picks: Array<GamePick>;
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  previousUserId?: InputMaybe<Scalars['Int']>;
  username: Scalars['String'];
};


export type MutationUpdateManyGamesArgs = {
  data: GamesUpdateManyMutationInput;
  where?: InputMaybe<GamesWhereInput>;
};


export type MutationUpdateManyLeagueMembersArgs = {
  data: LeagueMembersUpdateManyMutationInput;
  where?: InputMaybe<LeagueMembersWhereInput>;
};


export type MutationUpdateManyLeaguesArgs = {
  data: LeaguesUpdateManyMutationInput;
  where?: InputMaybe<LeaguesWhereInput>;
};


export type MutationUpdateManyPeopleArgs = {
  data: PeopleUpdateManyMutationInput;
  where?: InputMaybe<PeopleWhereInput>;
};


export type MutationUpdateManyPicksArgs = {
  data: PicksUpdateManyMutationInput;
  where?: InputMaybe<PicksWhereInput>;
};


export type MutationUpdateManySuperbowlArgs = {
  data: SuperbowlUpdateManyMutationInput;
  where?: InputMaybe<SuperbowlWhereInput>;
};


export type MutationUpdateManySuperbowlSquaresArgs = {
  data: SuperbowlSquaresUpdateManyMutationInput;
  where?: InputMaybe<SuperbowlSquaresWhereInput>;
};


export type MutationUpdateManyTeamsArgs = {
  data: TeamsUpdateManyMutationInput;
  where?: InputMaybe<TeamsWhereInput>;
};


export type MutationUpdateOneGamesArgs = {
  data: GamesUpdateInput;
  where: GamesWhereUniqueInput;
};


export type MutationUpdateOneLeagueMembersArgs = {
  data: LeagueMembersUpdateInput;
  where: LeagueMembersWhereUniqueInput;
};


export type MutationUpdateOneLeaguesArgs = {
  data: LeaguesUpdateInput;
  where: LeaguesWhereUniqueInput;
};


export type MutationUpdateOnePeopleArgs = {
  data: PeopleUpdateInput;
  where: PeopleWhereUniqueInput;
};


export type MutationUpdateOnePicksArgs = {
  data: PicksUpdateInput;
  where: PicksWhereUniqueInput;
};


export type MutationUpdateOneSuperbowlArgs = {
  data: SuperbowlUpdateInput;
  where: SuperbowlWhereUniqueInput;
};


export type MutationUpdateOneSuperbowlSquaresArgs = {
  data: SuperbowlSquaresUpdateInput;
  where: SuperbowlSquaresWhereUniqueInput;
};


export type MutationUpdateOneTeamsArgs = {
  data: TeamsUpdateInput;
  where: TeamsWhereUniqueInput;
};


export type MutationUpsertOneGamesArgs = {
  create: GamesCreateInput;
  update: GamesUpdateInput;
  where: GamesWhereUniqueInput;
};


export type MutationUpsertOneLeagueMembersArgs = {
  create: LeagueMembersCreateInput;
  update: LeagueMembersUpdateInput;
  where: LeagueMembersWhereUniqueInput;
};


export type MutationUpsertOneLeaguesArgs = {
  create: LeaguesCreateInput;
  update: LeaguesUpdateInput;
  where: LeaguesWhereUniqueInput;
};


export type MutationUpsertOnePeopleArgs = {
  create: PeopleCreateInput;
  update: PeopleUpdateInput;
  where: PeopleWhereUniqueInput;
};


export type MutationUpsertOnePicksArgs = {
  create: PicksCreateInput;
  update: PicksUpdateInput;
  where: PicksWhereUniqueInput;
};


export type MutationUpsertOneSuperbowlArgs = {
  create: SuperbowlCreateInput;
  update: SuperbowlUpdateInput;
  where: SuperbowlWhereUniqueInput;
};


export type MutationUpsertOneSuperbowlSquaresArgs = {
  create: SuperbowlSquaresCreateInput;
  update: SuperbowlSquaresUpdateInput;
  where: SuperbowlSquaresWhereUniqueInput;
};


export type MutationUpsertOneTeamsArgs = {
  create: TeamsCreateInput;
  update: TeamsUpdateInput;
  where: TeamsWhereUniqueInput;
};

export type NestedBigIntNullableFilter = {
  equals?: InputMaybe<Scalars['BigInt']>;
  gt?: InputMaybe<Scalars['BigInt']>;
  gte?: InputMaybe<Scalars['BigInt']>;
  in?: InputMaybe<Array<Scalars['BigInt']>>;
  lt?: InputMaybe<Scalars['BigInt']>;
  lte?: InputMaybe<Scalars['BigInt']>;
  not?: InputMaybe<NestedBigIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type NestedBigIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedBigIntNullableFilter>;
  _min?: InputMaybe<NestedBigIntNullableFilter>;
  _sum?: InputMaybe<NestedBigIntNullableFilter>;
  equals?: InputMaybe<Scalars['BigInt']>;
  gt?: InputMaybe<Scalars['BigInt']>;
  gte?: InputMaybe<Scalars['BigInt']>;
  in?: InputMaybe<Array<Scalars['BigInt']>>;
  lt?: InputMaybe<Scalars['BigInt']>;
  lte?: InputMaybe<Scalars['BigInt']>;
  not?: InputMaybe<NestedBigIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']>>;
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

export type NullableBigIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['BigInt']>;
  divide?: InputMaybe<Scalars['BigInt']>;
  increment?: InputMaybe<Scalars['BigInt']>;
  multiply?: InputMaybe<Scalars['BigInt']>;
  set?: InputMaybe<Scalars['BigInt']>;
};

export type NullableBoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
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

export type People = {
  __typename?: 'People';
  LeagueMembers: Array<LeagueMembers>;
  Leagues: Array<Leagues>;
  Picks: Array<Picks>;
  _count?: Maybe<PeopleCount>;
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


export type PeopleLeagueMembersArgs = {
  cursor?: InputMaybe<LeagueMembersWhereUniqueInput>;
  distinct?: InputMaybe<Array<LeagueMembersScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LeagueMembersOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LeagueMembersWhereInput>;
};


export type PeopleLeaguesArgs = {
  cursor?: InputMaybe<LeaguesWhereUniqueInput>;
  distinct?: InputMaybe<Array<LeaguesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LeaguesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LeaguesWhereInput>;
};


export type PeoplePicksArgs = {
  cursor?: InputMaybe<PicksWhereUniqueInput>;
  distinct?: InputMaybe<Array<PicksScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PicksOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PicksWhereInput>;
};

export type PeopleAvgAggregate = {
  __typename?: 'PeopleAvgAggregate';
  season?: Maybe<Scalars['Float']>;
  uid?: Maybe<Scalars['Float']>;
};

export type PeopleAvgOrderByAggregateInput = {
  season?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
};

export type PeopleCount = {
  __typename?: 'PeopleCount';
  LeagueMembers: Scalars['Int'];
  Leagues: Scalars['Int'];
  Picks: Scalars['Int'];
};

export type PeopleCountAggregate = {
  __typename?: 'PeopleCountAggregate';
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

export type PeopleCountOrderByAggregateInput = {
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

export type PeopleCreateInput = {
  LeagueMembers?: InputMaybe<LeagueMembersCreateNestedManyWithoutPeopleInput>;
  Leagues?: InputMaybe<LeaguesCreateNestedManyWithoutPeopleInput>;
  Picks?: InputMaybe<PicksCreateNestedManyWithoutPeopleInput>;
  email: Scalars['String'];
  email2?: InputMaybe<Scalars['String']>;
  fname: Scalars['String'];
  google_email?: InputMaybe<Scalars['String']>;
  google_photo_url?: InputMaybe<Scalars['String']>;
  google_userid?: InputMaybe<Scalars['String']>;
  lname: Scalars['String'];
  season: Scalars['Int'];
  username: Scalars['String'];
};

export type PeopleCreateManyInput = {
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

export type PeopleCreateNestedOneWithoutLeagueMembersInput = {
  connect?: InputMaybe<PeopleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PeopleCreateOrConnectWithoutLeagueMembersInput>;
  create?: InputMaybe<PeopleCreateWithoutLeagueMembersInput>;
};

export type PeopleCreateNestedOneWithoutLeaguesInput = {
  connect?: InputMaybe<PeopleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PeopleCreateOrConnectWithoutLeaguesInput>;
  create?: InputMaybe<PeopleCreateWithoutLeaguesInput>;
};

export type PeopleCreateNestedOneWithoutPicksInput = {
  connect?: InputMaybe<PeopleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PeopleCreateOrConnectWithoutPicksInput>;
  create?: InputMaybe<PeopleCreateWithoutPicksInput>;
};

export type PeopleCreateOrConnectWithoutLeagueMembersInput = {
  create: PeopleCreateWithoutLeagueMembersInput;
  where: PeopleWhereUniqueInput;
};

export type PeopleCreateOrConnectWithoutLeaguesInput = {
  create: PeopleCreateWithoutLeaguesInput;
  where: PeopleWhereUniqueInput;
};

export type PeopleCreateOrConnectWithoutPicksInput = {
  create: PeopleCreateWithoutPicksInput;
  where: PeopleWhereUniqueInput;
};

export type PeopleCreateWithoutLeagueMembersInput = {
  Leagues?: InputMaybe<LeaguesCreateNestedManyWithoutPeopleInput>;
  Picks?: InputMaybe<PicksCreateNestedManyWithoutPeopleInput>;
  email: Scalars['String'];
  email2?: InputMaybe<Scalars['String']>;
  fname: Scalars['String'];
  google_email?: InputMaybe<Scalars['String']>;
  google_photo_url?: InputMaybe<Scalars['String']>;
  google_userid?: InputMaybe<Scalars['String']>;
  lname: Scalars['String'];
  season: Scalars['Int'];
  username: Scalars['String'];
};

export type PeopleCreateWithoutLeaguesInput = {
  LeagueMembers?: InputMaybe<LeagueMembersCreateNestedManyWithoutPeopleInput>;
  Picks?: InputMaybe<PicksCreateNestedManyWithoutPeopleInput>;
  email: Scalars['String'];
  email2?: InputMaybe<Scalars['String']>;
  fname: Scalars['String'];
  google_email?: InputMaybe<Scalars['String']>;
  google_photo_url?: InputMaybe<Scalars['String']>;
  google_userid?: InputMaybe<Scalars['String']>;
  lname: Scalars['String'];
  season: Scalars['Int'];
  username: Scalars['String'];
};

export type PeopleCreateWithoutPicksInput = {
  LeagueMembers?: InputMaybe<LeagueMembersCreateNestedManyWithoutPeopleInput>;
  Leagues?: InputMaybe<LeaguesCreateNestedManyWithoutPeopleInput>;
  email: Scalars['String'];
  email2?: InputMaybe<Scalars['String']>;
  fname: Scalars['String'];
  google_email?: InputMaybe<Scalars['String']>;
  google_photo_url?: InputMaybe<Scalars['String']>;
  google_userid?: InputMaybe<Scalars['String']>;
  lname: Scalars['String'];
  season: Scalars['Int'];
  username: Scalars['String'];
};

export type PeopleGroupBy = {
  __typename?: 'PeopleGroupBy';
  _avg?: Maybe<PeopleAvgAggregate>;
  _count?: Maybe<PeopleCountAggregate>;
  _max?: Maybe<PeopleMaxAggregate>;
  _min?: Maybe<PeopleMinAggregate>;
  _sum?: Maybe<PeopleSumAggregate>;
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

export type PeopleMaxAggregate = {
  __typename?: 'PeopleMaxAggregate';
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

export type PeopleMaxOrderByAggregateInput = {
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

export type PeopleMinAggregate = {
  __typename?: 'PeopleMinAggregate';
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

export type PeopleMinOrderByAggregateInput = {
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

export type PeopleOrderByWithAggregationInput = {
  _avg?: InputMaybe<PeopleAvgOrderByAggregateInput>;
  _count?: InputMaybe<PeopleCountOrderByAggregateInput>;
  _max?: InputMaybe<PeopleMaxOrderByAggregateInput>;
  _min?: InputMaybe<PeopleMinOrderByAggregateInput>;
  _sum?: InputMaybe<PeopleSumOrderByAggregateInput>;
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

export type PeopleOrderByWithRelationInput = {
  LeagueMembers?: InputMaybe<LeagueMembersOrderByRelationAggregateInput>;
  Leagues?: InputMaybe<LeaguesOrderByRelationAggregateInput>;
  Picks?: InputMaybe<PicksOrderByRelationAggregateInput>;
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

export type PeopleRelationFilter = {
  is?: InputMaybe<PeopleWhereInput>;
  isNot?: InputMaybe<PeopleWhereInput>;
};

export enum PeopleScalarFieldEnum {
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

export type PeopleScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PeopleScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PeopleScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PeopleScalarWhereWithAggregatesInput>>;
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

export type PeopleSumAggregate = {
  __typename?: 'PeopleSumAggregate';
  season?: Maybe<Scalars['Int']>;
  uid?: Maybe<Scalars['Int']>;
};

export type PeopleSumOrderByAggregateInput = {
  season?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
};

export type PeopleUpdateInput = {
  LeagueMembers?: InputMaybe<LeagueMembersUpdateManyWithoutPeopleNestedInput>;
  Leagues?: InputMaybe<LeaguesUpdateManyWithoutPeopleNestedInput>;
  Picks?: InputMaybe<PicksUpdateManyWithoutPeopleNestedInput>;
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

export type PeopleUpdateManyMutationInput = {
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

export type PeopleUpdateOneRequiredWithoutLeagueMembersNestedInput = {
  connect?: InputMaybe<PeopleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PeopleCreateOrConnectWithoutLeagueMembersInput>;
  create?: InputMaybe<PeopleCreateWithoutLeagueMembersInput>;
  update?: InputMaybe<PeopleUpdateWithoutLeagueMembersInput>;
  upsert?: InputMaybe<PeopleUpsertWithoutLeagueMembersInput>;
};

export type PeopleUpdateOneRequiredWithoutLeaguesNestedInput = {
  connect?: InputMaybe<PeopleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PeopleCreateOrConnectWithoutLeaguesInput>;
  create?: InputMaybe<PeopleCreateWithoutLeaguesInput>;
  update?: InputMaybe<PeopleUpdateWithoutLeaguesInput>;
  upsert?: InputMaybe<PeopleUpsertWithoutLeaguesInput>;
};

export type PeopleUpdateOneRequiredWithoutPicksNestedInput = {
  connect?: InputMaybe<PeopleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PeopleCreateOrConnectWithoutPicksInput>;
  create?: InputMaybe<PeopleCreateWithoutPicksInput>;
  update?: InputMaybe<PeopleUpdateWithoutPicksInput>;
  upsert?: InputMaybe<PeopleUpsertWithoutPicksInput>;
};

export type PeopleUpdateWithoutLeagueMembersInput = {
  Leagues?: InputMaybe<LeaguesUpdateManyWithoutPeopleNestedInput>;
  Picks?: InputMaybe<PicksUpdateManyWithoutPeopleNestedInput>;
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

export type PeopleUpdateWithoutLeaguesInput = {
  LeagueMembers?: InputMaybe<LeagueMembersUpdateManyWithoutPeopleNestedInput>;
  Picks?: InputMaybe<PicksUpdateManyWithoutPeopleNestedInput>;
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

export type PeopleUpdateWithoutPicksInput = {
  LeagueMembers?: InputMaybe<LeagueMembersUpdateManyWithoutPeopleNestedInput>;
  Leagues?: InputMaybe<LeaguesUpdateManyWithoutPeopleNestedInput>;
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

export type PeopleUpsertWithoutLeagueMembersInput = {
  create: PeopleCreateWithoutLeagueMembersInput;
  update: PeopleUpdateWithoutLeagueMembersInput;
};

export type PeopleUpsertWithoutLeaguesInput = {
  create: PeopleCreateWithoutLeaguesInput;
  update: PeopleUpdateWithoutLeaguesInput;
};

export type PeopleUpsertWithoutPicksInput = {
  create: PeopleCreateWithoutPicksInput;
  update: PeopleUpdateWithoutPicksInput;
};

export type PeopleWhereInput = {
  AND?: InputMaybe<Array<PeopleWhereInput>>;
  LeagueMembers?: InputMaybe<LeagueMembersListRelationFilter>;
  Leagues?: InputMaybe<LeaguesListRelationFilter>;
  NOT?: InputMaybe<Array<PeopleWhereInput>>;
  OR?: InputMaybe<Array<PeopleWhereInput>>;
  Picks?: InputMaybe<PicksListRelationFilter>;
  email?: InputMaybe<StringFilter>;
  email2?: InputMaybe<StringNullableFilter>;
  fname?: InputMaybe<StringFilter>;
  google_email?: InputMaybe<StringNullableFilter>;
  google_photo_url?: InputMaybe<StringNullableFilter>;
  google_userid?: InputMaybe<StringNullableFilter>;
  lname?: InputMaybe<StringFilter>;
  season?: InputMaybe<IntFilter>;
  uid?: InputMaybe<IntFilter>;
  username?: InputMaybe<StringFilter>;
};

export type PeopleWhereUniqueInput = {
  uid?: InputMaybe<Scalars['Int']>;
};

export type Picks = {
  __typename?: 'Picks';
  Games: Games;
  LeagueMembers?: Maybe<LeagueMembers>;
  People: People;
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

export type PicksAvgAggregate = {
  __typename?: 'PicksAvgAggregate';
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

export type PicksAvgOrderByAggregateInput = {
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

export type PicksCountAggregate = {
  __typename?: 'PicksCountAggregate';
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

export type PicksCountOrderByAggregateInput = {
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

export type PicksCreateInput = {
  Games: GamesCreateNestedOneWithoutPicksInput;
  LeagueMembers?: InputMaybe<LeagueMembersCreateNestedOneWithoutPicksInput>;
  People: PeopleCreateNestedOneWithoutPicksInput;
  correct?: InputMaybe<Scalars['Int']>;
  done?: InputMaybe<Scalars['Int']>;
  is_random?: InputMaybe<Scalars['Boolean']>;
  loser?: InputMaybe<Scalars['Int']>;
  score?: InputMaybe<Scalars['Int']>;
  season: Scalars['Int'];
  ts?: InputMaybe<Scalars['DateTime']>;
  week: Scalars['Int'];
  winner?: InputMaybe<Scalars['Int']>;
};

export type PicksCreateManyGamesInput = {
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

export type PicksCreateManyGamesInputEnvelope = {
  data: Array<PicksCreateManyGamesInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PicksCreateManyInput = {
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

export type PicksCreateManyLeagueMembersInput = {
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

export type PicksCreateManyLeagueMembersInputEnvelope = {
  data: Array<PicksCreateManyLeagueMembersInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PicksCreateManyPeopleInput = {
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

export type PicksCreateManyPeopleInputEnvelope = {
  data: Array<PicksCreateManyPeopleInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PicksCreateNestedManyWithoutGamesInput = {
  connect?: InputMaybe<Array<PicksWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PicksCreateOrConnectWithoutGamesInput>>;
  create?: InputMaybe<Array<PicksCreateWithoutGamesInput>>;
  createMany?: InputMaybe<PicksCreateManyGamesInputEnvelope>;
};

export type PicksCreateNestedManyWithoutLeagueMembersInput = {
  connect?: InputMaybe<Array<PicksWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PicksCreateOrConnectWithoutLeagueMembersInput>>;
  create?: InputMaybe<Array<PicksCreateWithoutLeagueMembersInput>>;
  createMany?: InputMaybe<PicksCreateManyLeagueMembersInputEnvelope>;
};

export type PicksCreateNestedManyWithoutPeopleInput = {
  connect?: InputMaybe<Array<PicksWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PicksCreateOrConnectWithoutPeopleInput>>;
  create?: InputMaybe<Array<PicksCreateWithoutPeopleInput>>;
  createMany?: InputMaybe<PicksCreateManyPeopleInputEnvelope>;
};

export type PicksCreateOrConnectWithoutGamesInput = {
  create: PicksCreateWithoutGamesInput;
  where: PicksWhereUniqueInput;
};

export type PicksCreateOrConnectWithoutLeagueMembersInput = {
  create: PicksCreateWithoutLeagueMembersInput;
  where: PicksWhereUniqueInput;
};

export type PicksCreateOrConnectWithoutPeopleInput = {
  create: PicksCreateWithoutPeopleInput;
  where: PicksWhereUniqueInput;
};

export type PicksCreateWithoutGamesInput = {
  LeagueMembers?: InputMaybe<LeagueMembersCreateNestedOneWithoutPicksInput>;
  People: PeopleCreateNestedOneWithoutPicksInput;
  correct?: InputMaybe<Scalars['Int']>;
  done?: InputMaybe<Scalars['Int']>;
  is_random?: InputMaybe<Scalars['Boolean']>;
  loser?: InputMaybe<Scalars['Int']>;
  score?: InputMaybe<Scalars['Int']>;
  season: Scalars['Int'];
  ts?: InputMaybe<Scalars['DateTime']>;
  week: Scalars['Int'];
  winner?: InputMaybe<Scalars['Int']>;
};

export type PicksCreateWithoutLeagueMembersInput = {
  Games: GamesCreateNestedOneWithoutPicksInput;
  People: PeopleCreateNestedOneWithoutPicksInput;
  correct?: InputMaybe<Scalars['Int']>;
  done?: InputMaybe<Scalars['Int']>;
  is_random?: InputMaybe<Scalars['Boolean']>;
  loser?: InputMaybe<Scalars['Int']>;
  score?: InputMaybe<Scalars['Int']>;
  season: Scalars['Int'];
  ts?: InputMaybe<Scalars['DateTime']>;
  week: Scalars['Int'];
  winner?: InputMaybe<Scalars['Int']>;
};

export type PicksCreateWithoutPeopleInput = {
  Games: GamesCreateNestedOneWithoutPicksInput;
  LeagueMembers?: InputMaybe<LeagueMembersCreateNestedOneWithoutPicksInput>;
  correct?: InputMaybe<Scalars['Int']>;
  done?: InputMaybe<Scalars['Int']>;
  is_random?: InputMaybe<Scalars['Boolean']>;
  loser?: InputMaybe<Scalars['Int']>;
  score?: InputMaybe<Scalars['Int']>;
  season: Scalars['Int'];
  ts?: InputMaybe<Scalars['DateTime']>;
  week: Scalars['Int'];
  winner?: InputMaybe<Scalars['Int']>;
};

export type PicksGroupBy = {
  __typename?: 'PicksGroupBy';
  _avg?: Maybe<PicksAvgAggregate>;
  _count?: Maybe<PicksCountAggregate>;
  _max?: Maybe<PicksMaxAggregate>;
  _min?: Maybe<PicksMinAggregate>;
  _sum?: Maybe<PicksSumAggregate>;
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

export type PicksListRelationFilter = {
  every?: InputMaybe<PicksWhereInput>;
  none?: InputMaybe<PicksWhereInput>;
  some?: InputMaybe<PicksWhereInput>;
};

export type PicksMaxAggregate = {
  __typename?: 'PicksMaxAggregate';
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

export type PicksMaxOrderByAggregateInput = {
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

export type PicksMinAggregate = {
  __typename?: 'PicksMinAggregate';
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

export type PicksMinOrderByAggregateInput = {
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

export type PicksOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PicksOrderByWithAggregationInput = {
  _avg?: InputMaybe<PicksAvgOrderByAggregateInput>;
  _count?: InputMaybe<PicksCountOrderByAggregateInput>;
  _max?: InputMaybe<PicksMaxOrderByAggregateInput>;
  _min?: InputMaybe<PicksMinOrderByAggregateInput>;
  _sum?: InputMaybe<PicksSumOrderByAggregateInput>;
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

export type PicksOrderByWithRelationInput = {
  Games?: InputMaybe<GamesOrderByWithRelationInput>;
  LeagueMembers?: InputMaybe<LeagueMembersOrderByWithRelationInput>;
  People?: InputMaybe<PeopleOrderByWithRelationInput>;
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

export enum PicksScalarFieldEnum {
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

export type PicksScalarWhereInput = {
  AND?: InputMaybe<Array<PicksScalarWhereInput>>;
  NOT?: InputMaybe<Array<PicksScalarWhereInput>>;
  OR?: InputMaybe<Array<PicksScalarWhereInput>>;
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

export type PicksScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PicksScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PicksScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PicksScalarWhereWithAggregatesInput>>;
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

export type PicksSumAggregate = {
  __typename?: 'PicksSumAggregate';
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

export type PicksSumOrderByAggregateInput = {
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

export type PicksUpdateInput = {
  Games?: InputMaybe<GamesUpdateOneRequiredWithoutPicksNestedInput>;
  LeagueMembers?: InputMaybe<LeagueMembersUpdateOneWithoutPicksNestedInput>;
  People?: InputMaybe<PeopleUpdateOneRequiredWithoutPicksNestedInput>;
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

export type PicksUpdateManyMutationInput = {
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

export type PicksUpdateManyWithWhereWithoutGamesInput = {
  data: PicksUpdateManyMutationInput;
  where: PicksScalarWhereInput;
};

export type PicksUpdateManyWithWhereWithoutLeagueMembersInput = {
  data: PicksUpdateManyMutationInput;
  where: PicksScalarWhereInput;
};

export type PicksUpdateManyWithWhereWithoutPeopleInput = {
  data: PicksUpdateManyMutationInput;
  where: PicksScalarWhereInput;
};

export type PicksUpdateManyWithoutGamesNestedInput = {
  connect?: InputMaybe<Array<PicksWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PicksCreateOrConnectWithoutGamesInput>>;
  create?: InputMaybe<Array<PicksCreateWithoutGamesInput>>;
  createMany?: InputMaybe<PicksCreateManyGamesInputEnvelope>;
  delete?: InputMaybe<Array<PicksWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PicksScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PicksWhereUniqueInput>>;
  set?: InputMaybe<Array<PicksWhereUniqueInput>>;
  update?: InputMaybe<Array<PicksUpdateWithWhereUniqueWithoutGamesInput>>;
  updateMany?: InputMaybe<Array<PicksUpdateManyWithWhereWithoutGamesInput>>;
  upsert?: InputMaybe<Array<PicksUpsertWithWhereUniqueWithoutGamesInput>>;
};

export type PicksUpdateManyWithoutLeagueMembersNestedInput = {
  connect?: InputMaybe<Array<PicksWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PicksCreateOrConnectWithoutLeagueMembersInput>>;
  create?: InputMaybe<Array<PicksCreateWithoutLeagueMembersInput>>;
  createMany?: InputMaybe<PicksCreateManyLeagueMembersInputEnvelope>;
  delete?: InputMaybe<Array<PicksWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PicksScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PicksWhereUniqueInput>>;
  set?: InputMaybe<Array<PicksWhereUniqueInput>>;
  update?: InputMaybe<Array<PicksUpdateWithWhereUniqueWithoutLeagueMembersInput>>;
  updateMany?: InputMaybe<Array<PicksUpdateManyWithWhereWithoutLeagueMembersInput>>;
  upsert?: InputMaybe<Array<PicksUpsertWithWhereUniqueWithoutLeagueMembersInput>>;
};

export type PicksUpdateManyWithoutPeopleNestedInput = {
  connect?: InputMaybe<Array<PicksWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PicksCreateOrConnectWithoutPeopleInput>>;
  create?: InputMaybe<Array<PicksCreateWithoutPeopleInput>>;
  createMany?: InputMaybe<PicksCreateManyPeopleInputEnvelope>;
  delete?: InputMaybe<Array<PicksWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PicksScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PicksWhereUniqueInput>>;
  set?: InputMaybe<Array<PicksWhereUniqueInput>>;
  update?: InputMaybe<Array<PicksUpdateWithWhereUniqueWithoutPeopleInput>>;
  updateMany?: InputMaybe<Array<PicksUpdateManyWithWhereWithoutPeopleInput>>;
  upsert?: InputMaybe<Array<PicksUpsertWithWhereUniqueWithoutPeopleInput>>;
};

export type PicksUpdateWithWhereUniqueWithoutGamesInput = {
  data: PicksUpdateWithoutGamesInput;
  where: PicksWhereUniqueInput;
};

export type PicksUpdateWithWhereUniqueWithoutLeagueMembersInput = {
  data: PicksUpdateWithoutLeagueMembersInput;
  where: PicksWhereUniqueInput;
};

export type PicksUpdateWithWhereUniqueWithoutPeopleInput = {
  data: PicksUpdateWithoutPeopleInput;
  where: PicksWhereUniqueInput;
};

export type PicksUpdateWithoutGamesInput = {
  LeagueMembers?: InputMaybe<LeagueMembersUpdateOneWithoutPicksNestedInput>;
  People?: InputMaybe<PeopleUpdateOneRequiredWithoutPicksNestedInput>;
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

export type PicksUpdateWithoutLeagueMembersInput = {
  Games?: InputMaybe<GamesUpdateOneRequiredWithoutPicksNestedInput>;
  People?: InputMaybe<PeopleUpdateOneRequiredWithoutPicksNestedInput>;
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

export type PicksUpdateWithoutPeopleInput = {
  Games?: InputMaybe<GamesUpdateOneRequiredWithoutPicksNestedInput>;
  LeagueMembers?: InputMaybe<LeagueMembersUpdateOneWithoutPicksNestedInput>;
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

export type PicksUpsertWithWhereUniqueWithoutGamesInput = {
  create: PicksCreateWithoutGamesInput;
  update: PicksUpdateWithoutGamesInput;
  where: PicksWhereUniqueInput;
};

export type PicksUpsertWithWhereUniqueWithoutLeagueMembersInput = {
  create: PicksCreateWithoutLeagueMembersInput;
  update: PicksUpdateWithoutLeagueMembersInput;
  where: PicksWhereUniqueInput;
};

export type PicksUpsertWithWhereUniqueWithoutPeopleInput = {
  create: PicksCreateWithoutPeopleInput;
  update: PicksUpdateWithoutPeopleInput;
  where: PicksWhereUniqueInput;
};

export type PicksWhereInput = {
  AND?: InputMaybe<Array<PicksWhereInput>>;
  Games?: InputMaybe<GamesRelationFilter>;
  LeagueMembers?: InputMaybe<LeagueMembersRelationFilter>;
  NOT?: InputMaybe<Array<PicksWhereInput>>;
  OR?: InputMaybe<Array<PicksWhereInput>>;
  People?: InputMaybe<PeopleRelationFilter>;
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

export type PicksWhereUniqueInput = {
  pickid?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateGames: AggregateGames;
  aggregateLeagueMembers: AggregateLeagueMembers;
  aggregateLeagues: AggregateLeagues;
  aggregatePeople: AggregatePeople;
  aggregatePicks: AggregatePicks;
  aggregateSuperbowl: AggregateSuperbowl;
  aggregateSuperbowlSquares: AggregateSuperbowlSquares;
  aggregateTeams: AggregateTeams;
  findFirstGames?: Maybe<Games>;
  findFirstLeagueMembers?: Maybe<LeagueMembers>;
  findFirstLeagues?: Maybe<Leagues>;
  findFirstPeople?: Maybe<People>;
  findFirstPicks?: Maybe<Picks>;
  findFirstSuperbowl?: Maybe<Superbowl>;
  findFirstSuperbowlSquares?: Maybe<SuperbowlSquares>;
  findFirstTeams?: Maybe<Teams>;
  findManyGames: Array<Games>;
  findManyLeagueMembers: Array<LeagueMembers>;
  findManyLeagues: Array<Leagues>;
  findManyPeople: Array<People>;
  findManyPicks: Array<Picks>;
  findManySuperbowlSquares: Array<SuperbowlSquares>;
  findManyTeams: Array<Teams>;
  findUniqueGames?: Maybe<Games>;
  findUniqueLeagueMembers?: Maybe<LeagueMembers>;
  findUniqueLeagues?: Maybe<Leagues>;
  findUniquePeople?: Maybe<People>;
  findUniquePicks?: Maybe<Picks>;
  findUniqueSuperbowlSquares?: Maybe<SuperbowlSquares>;
  findUniqueTeams?: Maybe<Teams>;
  groupByGames: Array<GamesGroupBy>;
  groupByLeagueMembers: Array<LeagueMembersGroupBy>;
  groupByLeagues: Array<LeaguesGroupBy>;
  groupByPeople: Array<PeopleGroupBy>;
  groupByPicks: Array<PicksGroupBy>;
  groupBySuperbowl: Array<SuperbowlGroupBy>;
  groupBySuperbowlSquares: Array<SuperbowlSquaresGroupBy>;
  groupByTeams: Array<TeamsGroupBy>;
  superbowl?: Maybe<Superbowl>;
  superbowls: Array<Superbowl>;
};


export type QueryAggregateGamesArgs = {
  cursor?: InputMaybe<GamesWhereUniqueInput>;
  orderBy?: InputMaybe<Array<GamesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GamesWhereInput>;
};


export type QueryAggregateLeagueMembersArgs = {
  cursor?: InputMaybe<LeagueMembersWhereUniqueInput>;
  orderBy?: InputMaybe<Array<LeagueMembersOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LeagueMembersWhereInput>;
};


export type QueryAggregateLeaguesArgs = {
  cursor?: InputMaybe<LeaguesWhereUniqueInput>;
  orderBy?: InputMaybe<Array<LeaguesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LeaguesWhereInput>;
};


export type QueryAggregatePeopleArgs = {
  cursor?: InputMaybe<PeopleWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PeopleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PeopleWhereInput>;
};


export type QueryAggregatePicksArgs = {
  cursor?: InputMaybe<PicksWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PicksOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PicksWhereInput>;
};


export type QueryAggregateSuperbowlArgs = {
  cursor?: InputMaybe<SuperbowlWhereUniqueInput>;
  orderBy?: InputMaybe<Array<SuperbowlOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SuperbowlWhereInput>;
};


export type QueryAggregateSuperbowlSquaresArgs = {
  cursor?: InputMaybe<SuperbowlSquaresWhereUniqueInput>;
  orderBy?: InputMaybe<Array<SuperbowlSquaresOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SuperbowlSquaresWhereInput>;
};


export type QueryAggregateTeamsArgs = {
  cursor?: InputMaybe<TeamsWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TeamsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TeamsWhereInput>;
};


export type QueryFindFirstGamesArgs = {
  cursor?: InputMaybe<GamesWhereUniqueInput>;
  distinct?: InputMaybe<Array<GamesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GamesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GamesWhereInput>;
};


export type QueryFindFirstLeagueMembersArgs = {
  cursor?: InputMaybe<LeagueMembersWhereUniqueInput>;
  distinct?: InputMaybe<Array<LeagueMembersScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LeagueMembersOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LeagueMembersWhereInput>;
};


export type QueryFindFirstLeaguesArgs = {
  cursor?: InputMaybe<LeaguesWhereUniqueInput>;
  distinct?: InputMaybe<Array<LeaguesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LeaguesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LeaguesWhereInput>;
};


export type QueryFindFirstPeopleArgs = {
  cursor?: InputMaybe<PeopleWhereUniqueInput>;
  distinct?: InputMaybe<Array<PeopleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PeopleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PeopleWhereInput>;
};


export type QueryFindFirstPicksArgs = {
  cursor?: InputMaybe<PicksWhereUniqueInput>;
  distinct?: InputMaybe<Array<PicksScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PicksOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PicksWhereInput>;
};


export type QueryFindFirstSuperbowlArgs = {
  cursor?: InputMaybe<SuperbowlWhereUniqueInput>;
  distinct?: InputMaybe<Array<SuperbowlScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SuperbowlOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SuperbowlWhereInput>;
};


export type QueryFindFirstSuperbowlSquaresArgs = {
  cursor?: InputMaybe<SuperbowlSquaresWhereUniqueInput>;
  distinct?: InputMaybe<Array<SuperbowlSquaresScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SuperbowlSquaresOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SuperbowlSquaresWhereInput>;
};


export type QueryFindFirstTeamsArgs = {
  cursor?: InputMaybe<TeamsWhereUniqueInput>;
  distinct?: InputMaybe<Array<TeamsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TeamsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TeamsWhereInput>;
};


export type QueryFindManyGamesArgs = {
  cursor?: InputMaybe<GamesWhereUniqueInput>;
  distinct?: InputMaybe<Array<GamesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GamesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GamesWhereInput>;
};


export type QueryFindManyLeagueMembersArgs = {
  cursor?: InputMaybe<LeagueMembersWhereUniqueInput>;
  distinct?: InputMaybe<Array<LeagueMembersScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LeagueMembersOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LeagueMembersWhereInput>;
};


export type QueryFindManyLeaguesArgs = {
  cursor?: InputMaybe<LeaguesWhereUniqueInput>;
  distinct?: InputMaybe<Array<LeaguesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LeaguesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LeaguesWhereInput>;
};


export type QueryFindManyPeopleArgs = {
  cursor?: InputMaybe<PeopleWhereUniqueInput>;
  distinct?: InputMaybe<Array<PeopleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PeopleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PeopleWhereInput>;
};


export type QueryFindManyPicksArgs = {
  cursor?: InputMaybe<PicksWhereUniqueInput>;
  distinct?: InputMaybe<Array<PicksScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PicksOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PicksWhereInput>;
};


export type QueryFindManySuperbowlSquaresArgs = {
  cursor?: InputMaybe<SuperbowlSquaresWhereUniqueInput>;
  distinct?: InputMaybe<Array<SuperbowlSquaresScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SuperbowlSquaresOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SuperbowlSquaresWhereInput>;
};


export type QueryFindManyTeamsArgs = {
  cursor?: InputMaybe<TeamsWhereUniqueInput>;
  distinct?: InputMaybe<Array<TeamsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TeamsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TeamsWhereInput>;
};


export type QueryFindUniqueGamesArgs = {
  where: GamesWhereUniqueInput;
};


export type QueryFindUniqueLeagueMembersArgs = {
  where: LeagueMembersWhereUniqueInput;
};


export type QueryFindUniqueLeaguesArgs = {
  where: LeaguesWhereUniqueInput;
};


export type QueryFindUniquePeopleArgs = {
  where: PeopleWhereUniqueInput;
};


export type QueryFindUniquePicksArgs = {
  where: PicksWhereUniqueInput;
};


export type QueryFindUniqueSuperbowlSquaresArgs = {
  where: SuperbowlSquaresWhereUniqueInput;
};


export type QueryFindUniqueTeamsArgs = {
  where: TeamsWhereUniqueInput;
};


export type QueryGroupByGamesArgs = {
  by: Array<GamesScalarFieldEnum>;
  having?: InputMaybe<GamesScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<GamesOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GamesWhereInput>;
};


export type QueryGroupByLeagueMembersArgs = {
  by: Array<LeagueMembersScalarFieldEnum>;
  having?: InputMaybe<LeagueMembersScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<LeagueMembersOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LeagueMembersWhereInput>;
};


export type QueryGroupByLeaguesArgs = {
  by: Array<LeaguesScalarFieldEnum>;
  having?: InputMaybe<LeaguesScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<LeaguesOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LeaguesWhereInput>;
};


export type QueryGroupByPeopleArgs = {
  by: Array<PeopleScalarFieldEnum>;
  having?: InputMaybe<PeopleScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PeopleOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PeopleWhereInput>;
};


export type QueryGroupByPicksArgs = {
  by: Array<PicksScalarFieldEnum>;
  having?: InputMaybe<PicksScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PicksOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PicksWhereInput>;
};


export type QueryGroupBySuperbowlArgs = {
  by: Array<SuperbowlScalarFieldEnum>;
  having?: InputMaybe<SuperbowlScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<SuperbowlOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SuperbowlWhereInput>;
};


export type QueryGroupBySuperbowlSquaresArgs = {
  by: Array<SuperbowlSquaresScalarFieldEnum>;
  having?: InputMaybe<SuperbowlSquaresScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<SuperbowlSquaresOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SuperbowlSquaresWhereInput>;
};


export type QueryGroupByTeamsArgs = {
  by: Array<TeamsScalarFieldEnum>;
  having?: InputMaybe<TeamsScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TeamsOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TeamsWhereInput>;
};


export type QuerySuperbowlArgs = {
  where: SuperbowlWhereUniqueInput;
};


export type QuerySuperbowlsArgs = {
  cursor?: InputMaybe<SuperbowlWhereUniqueInput>;
  distinct?: InputMaybe<Array<SuperbowlScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SuperbowlOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SuperbowlWhereInput>;
};

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  membership: LeagueMembers;
  success: Scalars['Boolean'];
  user: People;
};

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
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Superbowl = {
  __typename?: 'Superbowl';
  loser: Scalars['Int'];
  pickid: Scalars['Int'];
  score: Scalars['Int'];
  season?: Maybe<Scalars['Int']>;
  ts?: Maybe<Scalars['DateTime']>;
  uid: Scalars['Int'];
  winner: Scalars['Int'];
};

export type SuperbowlAvgAggregate = {
  __typename?: 'SuperbowlAvgAggregate';
  loser?: Maybe<Scalars['Float']>;
  pickid?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
  season?: Maybe<Scalars['Float']>;
  uid?: Maybe<Scalars['Float']>;
  winner?: Maybe<Scalars['Float']>;
};

export type SuperbowlAvgOrderByAggregateInput = {
  loser?: InputMaybe<SortOrder>;
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
  pickid: Scalars['Int'];
  score: Scalars['Int'];
  season: Scalars['Int'];
  ts: Scalars['Int'];
  uid: Scalars['Int'];
  winner: Scalars['Int'];
};

export type SuperbowlCountOrderByAggregateInput = {
  loser?: InputMaybe<SortOrder>;
  pickid?: InputMaybe<SortOrder>;
  score?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
  winner?: InputMaybe<SortOrder>;
};

export type SuperbowlCreateInput = {
  loser: Scalars['Int'];
  score: Scalars['Int'];
  season?: InputMaybe<Scalars['Int']>;
  ts?: InputMaybe<Scalars['DateTime']>;
  uid: Scalars['Int'];
  winner: Scalars['Int'];
};

export type SuperbowlCreateManyInput = {
  loser: Scalars['Int'];
  pickid?: InputMaybe<Scalars['Int']>;
  score: Scalars['Int'];
  season?: InputMaybe<Scalars['Int']>;
  ts?: InputMaybe<Scalars['DateTime']>;
  uid: Scalars['Int'];
  winner: Scalars['Int'];
};

export type SuperbowlGroupBy = {
  __typename?: 'SuperbowlGroupBy';
  _avg?: Maybe<SuperbowlAvgAggregate>;
  _count?: Maybe<SuperbowlCountAggregate>;
  _max?: Maybe<SuperbowlMaxAggregate>;
  _min?: Maybe<SuperbowlMinAggregate>;
  _sum?: Maybe<SuperbowlSumAggregate>;
  loser: Scalars['Int'];
  pickid: Scalars['Int'];
  score: Scalars['Int'];
  season?: Maybe<Scalars['Int']>;
  ts?: Maybe<Scalars['DateTime']>;
  uid: Scalars['Int'];
  winner: Scalars['Int'];
};

export type SuperbowlMaxAggregate = {
  __typename?: 'SuperbowlMaxAggregate';
  loser?: Maybe<Scalars['Int']>;
  pickid?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
  season?: Maybe<Scalars['Int']>;
  ts?: Maybe<Scalars['DateTime']>;
  uid?: Maybe<Scalars['Int']>;
  winner?: Maybe<Scalars['Int']>;
};

export type SuperbowlMaxOrderByAggregateInput = {
  loser?: InputMaybe<SortOrder>;
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
  pickid?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
  season?: Maybe<Scalars['Int']>;
  ts?: Maybe<Scalars['DateTime']>;
  uid?: Maybe<Scalars['Int']>;
  winner?: Maybe<Scalars['Int']>;
};

export type SuperbowlMinOrderByAggregateInput = {
  loser?: InputMaybe<SortOrder>;
  pickid?: InputMaybe<SortOrder>;
  score?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
  winner?: InputMaybe<SortOrder>;
};

export type SuperbowlOrderByWithAggregationInput = {
  _avg?: InputMaybe<SuperbowlAvgOrderByAggregateInput>;
  _count?: InputMaybe<SuperbowlCountOrderByAggregateInput>;
  _max?: InputMaybe<SuperbowlMaxOrderByAggregateInput>;
  _min?: InputMaybe<SuperbowlMinOrderByAggregateInput>;
  _sum?: InputMaybe<SuperbowlSumOrderByAggregateInput>;
  loser?: InputMaybe<SortOrder>;
  pickid?: InputMaybe<SortOrder>;
  score?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
  winner?: InputMaybe<SortOrder>;
};

export type SuperbowlOrderByWithRelationInput = {
  loser?: InputMaybe<SortOrder>;
  pickid?: InputMaybe<SortOrder>;
  score?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
  winner?: InputMaybe<SortOrder>;
};

export enum SuperbowlScalarFieldEnum {
  Loser = 'loser',
  Pickid = 'pickid',
  Score = 'score',
  Season = 'season',
  Ts = 'ts',
  Uid = 'uid',
  Winner = 'winner'
}

export type SuperbowlScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SuperbowlScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SuperbowlScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SuperbowlScalarWhereWithAggregatesInput>>;
  loser?: InputMaybe<IntWithAggregatesFilter>;
  pickid?: InputMaybe<IntWithAggregatesFilter>;
  score?: InputMaybe<IntWithAggregatesFilter>;
  season?: InputMaybe<IntNullableWithAggregatesFilter>;
  ts?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  uid?: InputMaybe<IntWithAggregatesFilter>;
  winner?: InputMaybe<IntWithAggregatesFilter>;
};

export type SuperbowlSquares = {
  __typename?: 'SuperbowlSquares';
  afc_score_index: Scalars['Int'];
  correct: Scalars['Boolean'];
  league_id: Scalars['Int'];
  nfc_score_index: Scalars['Int'];
  square_id: Scalars['Int'];
  ts: Scalars['DateTime'];
  uid: Scalars['Int'];
};

export type SuperbowlSquaresAvgAggregate = {
  __typename?: 'SuperbowlSquaresAvgAggregate';
  afc_score_index?: Maybe<Scalars['Float']>;
  league_id?: Maybe<Scalars['Float']>;
  nfc_score_index?: Maybe<Scalars['Float']>;
  square_id?: Maybe<Scalars['Float']>;
  uid?: Maybe<Scalars['Float']>;
};

export type SuperbowlSquaresAvgOrderByAggregateInput = {
  afc_score_index?: InputMaybe<SortOrder>;
  league_id?: InputMaybe<SortOrder>;
  nfc_score_index?: InputMaybe<SortOrder>;
  square_id?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
};

export type SuperbowlSquaresCountAggregate = {
  __typename?: 'SuperbowlSquaresCountAggregate';
  _all: Scalars['Int'];
  afc_score_index: Scalars['Int'];
  correct: Scalars['Int'];
  league_id: Scalars['Int'];
  nfc_score_index: Scalars['Int'];
  square_id: Scalars['Int'];
  ts: Scalars['Int'];
  uid: Scalars['Int'];
};

export type SuperbowlSquaresCountOrderByAggregateInput = {
  afc_score_index?: InputMaybe<SortOrder>;
  correct?: InputMaybe<SortOrder>;
  league_id?: InputMaybe<SortOrder>;
  nfc_score_index?: InputMaybe<SortOrder>;
  square_id?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
};

export type SuperbowlSquaresCreateInput = {
  afc_score_index: Scalars['Int'];
  correct?: InputMaybe<Scalars['Boolean']>;
  league_id: Scalars['Int'];
  nfc_score_index: Scalars['Int'];
  ts?: InputMaybe<Scalars['DateTime']>;
  uid: Scalars['Int'];
};

export type SuperbowlSquaresCreateManyInput = {
  afc_score_index: Scalars['Int'];
  correct?: InputMaybe<Scalars['Boolean']>;
  league_id: Scalars['Int'];
  nfc_score_index: Scalars['Int'];
  square_id?: InputMaybe<Scalars['Int']>;
  ts?: InputMaybe<Scalars['DateTime']>;
  uid: Scalars['Int'];
};

export type SuperbowlSquaresGroupBy = {
  __typename?: 'SuperbowlSquaresGroupBy';
  _avg?: Maybe<SuperbowlSquaresAvgAggregate>;
  _count?: Maybe<SuperbowlSquaresCountAggregate>;
  _max?: Maybe<SuperbowlSquaresMaxAggregate>;
  _min?: Maybe<SuperbowlSquaresMinAggregate>;
  _sum?: Maybe<SuperbowlSquaresSumAggregate>;
  afc_score_index: Scalars['Int'];
  correct: Scalars['Boolean'];
  league_id: Scalars['Int'];
  nfc_score_index: Scalars['Int'];
  square_id: Scalars['Int'];
  ts: Scalars['DateTime'];
  uid: Scalars['Int'];
};

export type SuperbowlSquaresMaxAggregate = {
  __typename?: 'SuperbowlSquaresMaxAggregate';
  afc_score_index?: Maybe<Scalars['Int']>;
  correct?: Maybe<Scalars['Boolean']>;
  league_id?: Maybe<Scalars['Int']>;
  nfc_score_index?: Maybe<Scalars['Int']>;
  square_id?: Maybe<Scalars['Int']>;
  ts?: Maybe<Scalars['DateTime']>;
  uid?: Maybe<Scalars['Int']>;
};

export type SuperbowlSquaresMaxOrderByAggregateInput = {
  afc_score_index?: InputMaybe<SortOrder>;
  correct?: InputMaybe<SortOrder>;
  league_id?: InputMaybe<SortOrder>;
  nfc_score_index?: InputMaybe<SortOrder>;
  square_id?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
};

export type SuperbowlSquaresMinAggregate = {
  __typename?: 'SuperbowlSquaresMinAggregate';
  afc_score_index?: Maybe<Scalars['Int']>;
  correct?: Maybe<Scalars['Boolean']>;
  league_id?: Maybe<Scalars['Int']>;
  nfc_score_index?: Maybe<Scalars['Int']>;
  square_id?: Maybe<Scalars['Int']>;
  ts?: Maybe<Scalars['DateTime']>;
  uid?: Maybe<Scalars['Int']>;
};

export type SuperbowlSquaresMinOrderByAggregateInput = {
  afc_score_index?: InputMaybe<SortOrder>;
  correct?: InputMaybe<SortOrder>;
  league_id?: InputMaybe<SortOrder>;
  nfc_score_index?: InputMaybe<SortOrder>;
  square_id?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
};

export type SuperbowlSquaresOrderByWithAggregationInput = {
  _avg?: InputMaybe<SuperbowlSquaresAvgOrderByAggregateInput>;
  _count?: InputMaybe<SuperbowlSquaresCountOrderByAggregateInput>;
  _max?: InputMaybe<SuperbowlSquaresMaxOrderByAggregateInput>;
  _min?: InputMaybe<SuperbowlSquaresMinOrderByAggregateInput>;
  _sum?: InputMaybe<SuperbowlSquaresSumOrderByAggregateInput>;
  afc_score_index?: InputMaybe<SortOrder>;
  correct?: InputMaybe<SortOrder>;
  league_id?: InputMaybe<SortOrder>;
  nfc_score_index?: InputMaybe<SortOrder>;
  square_id?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
};

export type SuperbowlSquaresOrderByWithRelationInput = {
  afc_score_index?: InputMaybe<SortOrder>;
  correct?: InputMaybe<SortOrder>;
  league_id?: InputMaybe<SortOrder>;
  nfc_score_index?: InputMaybe<SortOrder>;
  square_id?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
};

export enum SuperbowlSquaresScalarFieldEnum {
  AfcScoreIndex = 'afc_score_index',
  Correct = 'correct',
  LeagueId = 'league_id',
  NfcScoreIndex = 'nfc_score_index',
  SquareId = 'square_id',
  Ts = 'ts',
  Uid = 'uid'
}

export type SuperbowlSquaresScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SuperbowlSquaresScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SuperbowlSquaresScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SuperbowlSquaresScalarWhereWithAggregatesInput>>;
  afc_score_index?: InputMaybe<IntWithAggregatesFilter>;
  correct?: InputMaybe<BoolWithAggregatesFilter>;
  league_id?: InputMaybe<IntWithAggregatesFilter>;
  nfc_score_index?: InputMaybe<IntWithAggregatesFilter>;
  square_id?: InputMaybe<IntWithAggregatesFilter>;
  ts?: InputMaybe<DateTimeWithAggregatesFilter>;
  uid?: InputMaybe<IntWithAggregatesFilter>;
};

export type SuperbowlSquaresSumAggregate = {
  __typename?: 'SuperbowlSquaresSumAggregate';
  afc_score_index?: Maybe<Scalars['Int']>;
  league_id?: Maybe<Scalars['Int']>;
  nfc_score_index?: Maybe<Scalars['Int']>;
  square_id?: Maybe<Scalars['Int']>;
  uid?: Maybe<Scalars['Int']>;
};

export type SuperbowlSquaresSumOrderByAggregateInput = {
  afc_score_index?: InputMaybe<SortOrder>;
  league_id?: InputMaybe<SortOrder>;
  nfc_score_index?: InputMaybe<SortOrder>;
  square_id?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
};

export type SuperbowlSquaresUpdateInput = {
  afc_score_index?: InputMaybe<IntFieldUpdateOperationsInput>;
  correct?: InputMaybe<BoolFieldUpdateOperationsInput>;
  league_id?: InputMaybe<IntFieldUpdateOperationsInput>;
  nfc_score_index?: InputMaybe<IntFieldUpdateOperationsInput>;
  ts?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  uid?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SuperbowlSquaresUpdateManyMutationInput = {
  afc_score_index?: InputMaybe<IntFieldUpdateOperationsInput>;
  correct?: InputMaybe<BoolFieldUpdateOperationsInput>;
  league_id?: InputMaybe<IntFieldUpdateOperationsInput>;
  nfc_score_index?: InputMaybe<IntFieldUpdateOperationsInput>;
  ts?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  uid?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SuperbowlSquaresWhereInput = {
  AND?: InputMaybe<Array<SuperbowlSquaresWhereInput>>;
  NOT?: InputMaybe<Array<SuperbowlSquaresWhereInput>>;
  OR?: InputMaybe<Array<SuperbowlSquaresWhereInput>>;
  afc_score_index?: InputMaybe<IntFilter>;
  correct?: InputMaybe<BoolFilter>;
  league_id?: InputMaybe<IntFilter>;
  nfc_score_index?: InputMaybe<IntFilter>;
  square_id?: InputMaybe<IntFilter>;
  ts?: InputMaybe<DateTimeFilter>;
  uid?: InputMaybe<IntFilter>;
};

export type SuperbowlSquaresWhereUniqueInput = {
  square_id?: InputMaybe<Scalars['Int']>;
};

export type SuperbowlSumAggregate = {
  __typename?: 'SuperbowlSumAggregate';
  loser?: Maybe<Scalars['Int']>;
  pickid?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
  season?: Maybe<Scalars['Int']>;
  uid?: Maybe<Scalars['Int']>;
  winner?: Maybe<Scalars['Int']>;
};

export type SuperbowlSumOrderByAggregateInput = {
  loser?: InputMaybe<SortOrder>;
  pickid?: InputMaybe<SortOrder>;
  score?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
  winner?: InputMaybe<SortOrder>;
};

export type SuperbowlUpdateInput = {
  loser?: InputMaybe<IntFieldUpdateOperationsInput>;
  score?: InputMaybe<IntFieldUpdateOperationsInput>;
  season?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  ts?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  uid?: InputMaybe<IntFieldUpdateOperationsInput>;
  winner?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SuperbowlUpdateManyMutationInput = {
  loser?: InputMaybe<IntFieldUpdateOperationsInput>;
  score?: InputMaybe<IntFieldUpdateOperationsInput>;
  season?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  ts?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  uid?: InputMaybe<IntFieldUpdateOperationsInput>;
  winner?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SuperbowlWhereInput = {
  AND?: InputMaybe<Array<SuperbowlWhereInput>>;
  NOT?: InputMaybe<Array<SuperbowlWhereInput>>;
  OR?: InputMaybe<Array<SuperbowlWhereInput>>;
  loser?: InputMaybe<IntFilter>;
  pickid?: InputMaybe<IntFilter>;
  score?: InputMaybe<IntFilter>;
  season?: InputMaybe<IntNullableFilter>;
  ts?: InputMaybe<DateTimeNullableFilter>;
  uid?: InputMaybe<IntFilter>;
  winner?: InputMaybe<IntFilter>;
};

export type SuperbowlWhereUniqueInput = {
  pickid?: InputMaybe<Scalars['Int']>;
};

export type Teams = {
  __typename?: 'Teams';
  Games_Games_awayToTeams: Array<Games>;
  Games_Games_homeToTeams: Array<Games>;
  _count?: Maybe<TeamsCount>;
  abbrev?: Maybe<Scalars['String']>;
  conference?: Maybe<Scalars['String']>;
  loc: Scalars['String'];
  name: Scalars['String'];
  teamid: Scalars['Int'];
};


export type TeamsGames_Games_AwayToTeamsArgs = {
  cursor?: InputMaybe<GamesWhereUniqueInput>;
  distinct?: InputMaybe<Array<GamesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GamesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GamesWhereInput>;
};


export type TeamsGames_Games_HomeToTeamsArgs = {
  cursor?: InputMaybe<GamesWhereUniqueInput>;
  distinct?: InputMaybe<Array<GamesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GamesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GamesWhereInput>;
};

export type TeamsAvgAggregate = {
  __typename?: 'TeamsAvgAggregate';
  teamid?: Maybe<Scalars['Float']>;
};

export type TeamsAvgOrderByAggregateInput = {
  teamid?: InputMaybe<SortOrder>;
};

export type TeamsCount = {
  __typename?: 'TeamsCount';
  Games_Games_awayToTeams: Scalars['Int'];
  Games_Games_homeToTeams: Scalars['Int'];
};

export type TeamsCountAggregate = {
  __typename?: 'TeamsCountAggregate';
  _all: Scalars['Int'];
  abbrev: Scalars['Int'];
  conference: Scalars['Int'];
  loc: Scalars['Int'];
  name: Scalars['Int'];
  teamid: Scalars['Int'];
};

export type TeamsCountOrderByAggregateInput = {
  abbrev?: InputMaybe<SortOrder>;
  conference?: InputMaybe<SortOrder>;
  loc?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  teamid?: InputMaybe<SortOrder>;
};

export type TeamsCreateInput = {
  Games_Games_awayToTeams?: InputMaybe<GamesCreateNestedManyWithoutTeams_Games_AwayToTeamsInput>;
  Games_Games_homeToTeams?: InputMaybe<GamesCreateNestedManyWithoutTeams_Games_HomeToTeamsInput>;
  abbrev?: InputMaybe<Scalars['String']>;
  conference?: InputMaybe<Scalars['String']>;
  loc: Scalars['String'];
  name: Scalars['String'];
};

export type TeamsCreateManyInput = {
  abbrev?: InputMaybe<Scalars['String']>;
  conference?: InputMaybe<Scalars['String']>;
  loc: Scalars['String'];
  name: Scalars['String'];
  teamid?: InputMaybe<Scalars['Int']>;
};

export type TeamsCreateNestedOneWithoutGames_Games_AwayToTeamsInput = {
  connect?: InputMaybe<TeamsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TeamsCreateOrConnectWithoutGames_Games_AwayToTeamsInput>;
  create?: InputMaybe<TeamsCreateWithoutGames_Games_AwayToTeamsInput>;
};

export type TeamsCreateNestedOneWithoutGames_Games_HomeToTeamsInput = {
  connect?: InputMaybe<TeamsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TeamsCreateOrConnectWithoutGames_Games_HomeToTeamsInput>;
  create?: InputMaybe<TeamsCreateWithoutGames_Games_HomeToTeamsInput>;
};

export type TeamsCreateOrConnectWithoutGames_Games_AwayToTeamsInput = {
  create: TeamsCreateWithoutGames_Games_AwayToTeamsInput;
  where: TeamsWhereUniqueInput;
};

export type TeamsCreateOrConnectWithoutGames_Games_HomeToTeamsInput = {
  create: TeamsCreateWithoutGames_Games_HomeToTeamsInput;
  where: TeamsWhereUniqueInput;
};

export type TeamsCreateWithoutGames_Games_AwayToTeamsInput = {
  Games_Games_homeToTeams?: InputMaybe<GamesCreateNestedManyWithoutTeams_Games_HomeToTeamsInput>;
  abbrev?: InputMaybe<Scalars['String']>;
  conference?: InputMaybe<Scalars['String']>;
  loc: Scalars['String'];
  name: Scalars['String'];
};

export type TeamsCreateWithoutGames_Games_HomeToTeamsInput = {
  Games_Games_awayToTeams?: InputMaybe<GamesCreateNestedManyWithoutTeams_Games_AwayToTeamsInput>;
  abbrev?: InputMaybe<Scalars['String']>;
  conference?: InputMaybe<Scalars['String']>;
  loc: Scalars['String'];
  name: Scalars['String'];
};

export type TeamsGroupBy = {
  __typename?: 'TeamsGroupBy';
  _avg?: Maybe<TeamsAvgAggregate>;
  _count?: Maybe<TeamsCountAggregate>;
  _max?: Maybe<TeamsMaxAggregate>;
  _min?: Maybe<TeamsMinAggregate>;
  _sum?: Maybe<TeamsSumAggregate>;
  abbrev?: Maybe<Scalars['String']>;
  conference?: Maybe<Scalars['String']>;
  loc: Scalars['String'];
  name: Scalars['String'];
  teamid: Scalars['Int'];
};

export type TeamsMaxAggregate = {
  __typename?: 'TeamsMaxAggregate';
  abbrev?: Maybe<Scalars['String']>;
  conference?: Maybe<Scalars['String']>;
  loc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  teamid?: Maybe<Scalars['Int']>;
};

export type TeamsMaxOrderByAggregateInput = {
  abbrev?: InputMaybe<SortOrder>;
  conference?: InputMaybe<SortOrder>;
  loc?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  teamid?: InputMaybe<SortOrder>;
};

export type TeamsMinAggregate = {
  __typename?: 'TeamsMinAggregate';
  abbrev?: Maybe<Scalars['String']>;
  conference?: Maybe<Scalars['String']>;
  loc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  teamid?: Maybe<Scalars['Int']>;
};

export type TeamsMinOrderByAggregateInput = {
  abbrev?: InputMaybe<SortOrder>;
  conference?: InputMaybe<SortOrder>;
  loc?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  teamid?: InputMaybe<SortOrder>;
};

export type TeamsOrderByWithAggregationInput = {
  _avg?: InputMaybe<TeamsAvgOrderByAggregateInput>;
  _count?: InputMaybe<TeamsCountOrderByAggregateInput>;
  _max?: InputMaybe<TeamsMaxOrderByAggregateInput>;
  _min?: InputMaybe<TeamsMinOrderByAggregateInput>;
  _sum?: InputMaybe<TeamsSumOrderByAggregateInput>;
  abbrev?: InputMaybe<SortOrder>;
  conference?: InputMaybe<SortOrder>;
  loc?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  teamid?: InputMaybe<SortOrder>;
};

export type TeamsOrderByWithRelationInput = {
  Games_Games_awayToTeams?: InputMaybe<GamesOrderByRelationAggregateInput>;
  Games_Games_homeToTeams?: InputMaybe<GamesOrderByRelationAggregateInput>;
  abbrev?: InputMaybe<SortOrder>;
  conference?: InputMaybe<SortOrder>;
  loc?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  teamid?: InputMaybe<SortOrder>;
};

export type TeamsRelationFilter = {
  is?: InputMaybe<TeamsWhereInput>;
  isNot?: InputMaybe<TeamsWhereInput>;
};

export enum TeamsScalarFieldEnum {
  Abbrev = 'abbrev',
  Conference = 'conference',
  Loc = 'loc',
  Name = 'name',
  Teamid = 'teamid'
}

export type TeamsScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TeamsScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TeamsScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TeamsScalarWhereWithAggregatesInput>>;
  abbrev?: InputMaybe<StringNullableWithAggregatesFilter>;
  conference?: InputMaybe<StringNullableWithAggregatesFilter>;
  loc?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  teamid?: InputMaybe<IntWithAggregatesFilter>;
};

export type TeamsSumAggregate = {
  __typename?: 'TeamsSumAggregate';
  teamid?: Maybe<Scalars['Int']>;
};

export type TeamsSumOrderByAggregateInput = {
  teamid?: InputMaybe<SortOrder>;
};

export type TeamsUpdateInput = {
  Games_Games_awayToTeams?: InputMaybe<GamesUpdateManyWithoutTeams_Games_AwayToTeamsNestedInput>;
  Games_Games_homeToTeams?: InputMaybe<GamesUpdateManyWithoutTeams_Games_HomeToTeamsNestedInput>;
  abbrev?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  conference?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  loc?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TeamsUpdateManyMutationInput = {
  abbrev?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  conference?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  loc?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TeamsUpdateOneRequiredWithoutGames_Games_AwayToTeamsNestedInput = {
  connect?: InputMaybe<TeamsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TeamsCreateOrConnectWithoutGames_Games_AwayToTeamsInput>;
  create?: InputMaybe<TeamsCreateWithoutGames_Games_AwayToTeamsInput>;
  update?: InputMaybe<TeamsUpdateWithoutGames_Games_AwayToTeamsInput>;
  upsert?: InputMaybe<TeamsUpsertWithoutGames_Games_AwayToTeamsInput>;
};

export type TeamsUpdateOneRequiredWithoutGames_Games_HomeToTeamsNestedInput = {
  connect?: InputMaybe<TeamsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TeamsCreateOrConnectWithoutGames_Games_HomeToTeamsInput>;
  create?: InputMaybe<TeamsCreateWithoutGames_Games_HomeToTeamsInput>;
  update?: InputMaybe<TeamsUpdateWithoutGames_Games_HomeToTeamsInput>;
  upsert?: InputMaybe<TeamsUpsertWithoutGames_Games_HomeToTeamsInput>;
};

export type TeamsUpdateWithoutGames_Games_AwayToTeamsInput = {
  Games_Games_homeToTeams?: InputMaybe<GamesUpdateManyWithoutTeams_Games_HomeToTeamsNestedInput>;
  abbrev?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  conference?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  loc?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TeamsUpdateWithoutGames_Games_HomeToTeamsInput = {
  Games_Games_awayToTeams?: InputMaybe<GamesUpdateManyWithoutTeams_Games_AwayToTeamsNestedInput>;
  abbrev?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  conference?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  loc?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TeamsUpsertWithoutGames_Games_AwayToTeamsInput = {
  create: TeamsCreateWithoutGames_Games_AwayToTeamsInput;
  update: TeamsUpdateWithoutGames_Games_AwayToTeamsInput;
};

export type TeamsUpsertWithoutGames_Games_HomeToTeamsInput = {
  create: TeamsCreateWithoutGames_Games_HomeToTeamsInput;
  update: TeamsUpdateWithoutGames_Games_HomeToTeamsInput;
};

export type TeamsWhereInput = {
  AND?: InputMaybe<Array<TeamsWhereInput>>;
  Games_Games_awayToTeams?: InputMaybe<GamesListRelationFilter>;
  Games_Games_homeToTeams?: InputMaybe<GamesListRelationFilter>;
  NOT?: InputMaybe<Array<TeamsWhereInput>>;
  OR?: InputMaybe<Array<TeamsWhereInput>>;
  abbrev?: InputMaybe<StringNullableFilter>;
  conference?: InputMaybe<StringNullableFilter>;
  loc?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  teamid?: InputMaybe<IntFilter>;
};

export type TeamsWhereUniqueInput = {
  teamid?: InputMaybe<Scalars['Int']>;
};

export type GamesBySeasonQueryVariables = Exact<{
  season: Scalars['Int'];
}>;


export type GamesBySeasonQuery = { __typename?: 'Query', findManyGames: Array<{ __typename?: 'Games', gid: number, awayscore?: number | null, homescore?: number | null, ts: any, done?: boolean | null, winner?: number | null, is_tiebreaker?: boolean | null, Teams_Games_awayToTeams: { __typename?: 'Teams', teamid: number, abbrev?: string | null }, Teams_Games_homeToTeams: { __typename?: 'Teams', teamid: number, abbrev?: string | null } }> };

export type GamesByWeekQueryVariables = Exact<{
  season: Scalars['Int'];
  week: Scalars['Int'];
}>;


export type GamesByWeekQuery = { __typename?: 'Query', findManyGames: Array<{ __typename?: 'Games', gid: number, awayscore?: number | null, homescore?: number | null, ts: any, done?: boolean | null, homerecord?: string | null, awayrecord?: string | null, winner?: number | null, is_tiebreaker?: boolean | null, Teams_Games_awayToTeams: { __typename?: 'Teams', teamid: number, abbrev?: string | null }, Teams_Games_homeToTeams: { __typename?: 'Teams', teamid: number, abbrev?: string | null } }> };

export type FindLeagueMembersQueryVariables = Exact<{
  league_id: Scalars['Int'];
}>;


export type FindLeagueMembersQuery = { __typename?: 'Query', findManyLeagueMembers: Array<{ __typename?: 'LeagueMembers', membership_id: number, People: { __typename?: 'People', uid: number, username: string }, Leagues: { __typename?: 'Leagues', name: string } }> };

export type MakePicksMutationVariables = Exact<{
  picks: Array<GamePick> | GamePick;
  member_id: Scalars['Int'];
}>;


export type MakePicksMutation = { __typename?: 'Mutation', makePicks: { __typename?: 'MakePicksResponse', user: { __typename?: 'People', username: string, email: string } } };

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  previousUserId?: InputMaybe<Scalars['Int']>;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'RegisterResponse', success: boolean, user: { __typename?: 'People', username: string, uid: number }, membership: { __typename?: 'LeagueMembers', league_id: number, Leagues: { __typename?: 'Leagues', name: string } } } };

export type AllTeamsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTeamsQuery = { __typename?: 'Query', findManyTeams: Array<{ __typename?: 'Teams', teamid: number, abbrev?: string | null, loc: string, name: string, conference?: string | null }> };


export const GamesBySeasonDocument = gql`
    query GamesBySeason($season: Int!) {
  findManyGames(where: {season: {equals: $season}}) {
    gid
    awayscore
    homescore
    ts
    done
    winner
    is_tiebreaker
    Teams_Games_awayToTeams {
      teamid
      abbrev
    }
    Teams_Games_homeToTeams {
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
  findManyGames(where: {season: {equals: $season}, week: {equals: $week}}) {
    gid
    awayscore
    homescore
    ts
    done
    homerecord
    awayrecord
    winner
    is_tiebreaker
    Teams_Games_awayToTeams {
      teamid
      abbrev
    }
    Teams_Games_homeToTeams {
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
  findManyLeagueMembers(where: {league_id: {equals: $league_id}}) {
    membership_id
    People {
      uid
      username
    }
    Leagues {
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
export const RegisterDocument = gql`
    mutation Register($username: String!, $email: String!, $previousUserId: Int) {
  register(username: $username, email: $email, previousUserId: $previousUserId) {
    success
    user {
      username
      uid
    }
    membership {
      league_id
      Leagues {
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
export const AllTeamsDocument = gql`
    query AllTeams {
  findManyTeams(where: {teamid: {gt: 0}}) {
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