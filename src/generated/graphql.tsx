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

export type AggregateEmailLogs = {
  __typename?: 'AggregateEmailLogs';
  _avg?: Maybe<EmailLogsAvgAggregate>;
  _count?: Maybe<EmailLogsCountAggregate>;
  _max?: Maybe<EmailLogsMaxAggregate>;
  _min?: Maybe<EmailLogsMinAggregate>;
  _sum?: Maybe<EmailLogsSumAggregate>;
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

export type AggregateLeagueMessage = {
  __typename?: 'AggregateLeagueMessage';
  _avg?: Maybe<LeagueMessageAvgAggregate>;
  _count?: Maybe<LeagueMessageCountAggregate>;
  _max?: Maybe<LeagueMessageMaxAggregate>;
  _min?: Maybe<LeagueMessageMinAggregate>;
  _sum?: Maybe<LeagueMessageSumAggregate>;
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

export type EmailLogs = {
  __typename?: 'EmailLogs';
  email?: Maybe<ResendEmail>;
  email_log_id: Scalars['String'];
  email_type: EmailType;
  id: Scalars['ID'];
  league: League;
  league_id: Scalars['Int'];
  member: LeagueMember;
  member_id: Scalars['Int'];
  resend_id: Scalars['String'];
  ts: Scalars['DateTime'];
  week?: Maybe<Scalars['Int']>;
};

export type EmailLogsAvgAggregate = {
  __typename?: 'EmailLogsAvgAggregate';
  league_id?: Maybe<Scalars['Float']>;
  member_id?: Maybe<Scalars['Float']>;
  week?: Maybe<Scalars['Float']>;
};

export type EmailLogsAvgOrderByAggregateInput = {
  league_id?: InputMaybe<SortOrder>;
  member_id?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
};

export type EmailLogsCountAggregate = {
  __typename?: 'EmailLogsCountAggregate';
  _all: Scalars['Int'];
  email_log_id: Scalars['Int'];
  email_type: Scalars['Int'];
  league_id: Scalars['Int'];
  member_id: Scalars['Int'];
  resend_id: Scalars['Int'];
  ts: Scalars['Int'];
  week: Scalars['Int'];
};

export type EmailLogsCountOrderByAggregateInput = {
  email_log_id?: InputMaybe<SortOrder>;
  email_type?: InputMaybe<SortOrder>;
  league_id?: InputMaybe<SortOrder>;
  member_id?: InputMaybe<SortOrder>;
  resend_id?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
};

export type EmailLogsCreateInput = {
  email_log_id?: InputMaybe<Scalars['String']>;
  email_type: EmailType;
  league: LeagueCreateNestedOneWithoutEmailLogsInput;
  member: LeagueMemberCreateNestedOneWithoutEmailLogsInput;
  resend_id: Scalars['String'];
  ts?: InputMaybe<Scalars['DateTime']>;
  week?: InputMaybe<Scalars['Int']>;
};

export type EmailLogsCreateManyInput = {
  email_log_id?: InputMaybe<Scalars['String']>;
  email_type: EmailType;
  league_id: Scalars['Int'];
  member_id: Scalars['Int'];
  resend_id: Scalars['String'];
  ts?: InputMaybe<Scalars['DateTime']>;
  week?: InputMaybe<Scalars['Int']>;
};

export type EmailLogsCreateManyLeagueInput = {
  email_log_id?: InputMaybe<Scalars['String']>;
  email_type: EmailType;
  member_id: Scalars['Int'];
  resend_id: Scalars['String'];
  ts?: InputMaybe<Scalars['DateTime']>;
  week?: InputMaybe<Scalars['Int']>;
};

export type EmailLogsCreateManyLeagueInputEnvelope = {
  data: Array<EmailLogsCreateManyLeagueInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type EmailLogsCreateManyMemberInput = {
  email_log_id?: InputMaybe<Scalars['String']>;
  email_type: EmailType;
  league_id: Scalars['Int'];
  resend_id: Scalars['String'];
  ts?: InputMaybe<Scalars['DateTime']>;
  week?: InputMaybe<Scalars['Int']>;
};

export type EmailLogsCreateManyMemberInputEnvelope = {
  data: Array<EmailLogsCreateManyMemberInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type EmailLogsCreateNestedManyWithoutLeagueInput = {
  connect?: InputMaybe<Array<EmailLogsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EmailLogsCreateOrConnectWithoutLeagueInput>>;
  create?: InputMaybe<Array<EmailLogsCreateWithoutLeagueInput>>;
  createMany?: InputMaybe<EmailLogsCreateManyLeagueInputEnvelope>;
};

export type EmailLogsCreateNestedManyWithoutMemberInput = {
  connect?: InputMaybe<Array<EmailLogsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EmailLogsCreateOrConnectWithoutMemberInput>>;
  create?: InputMaybe<Array<EmailLogsCreateWithoutMemberInput>>;
  createMany?: InputMaybe<EmailLogsCreateManyMemberInputEnvelope>;
};

export type EmailLogsCreateOrConnectWithoutLeagueInput = {
  create: EmailLogsCreateWithoutLeagueInput;
  where: EmailLogsWhereUniqueInput;
};

export type EmailLogsCreateOrConnectWithoutMemberInput = {
  create: EmailLogsCreateWithoutMemberInput;
  where: EmailLogsWhereUniqueInput;
};

export type EmailLogsCreateWithoutLeagueInput = {
  email_log_id?: InputMaybe<Scalars['String']>;
  email_type: EmailType;
  member: LeagueMemberCreateNestedOneWithoutEmailLogsInput;
  resend_id: Scalars['String'];
  ts?: InputMaybe<Scalars['DateTime']>;
  week?: InputMaybe<Scalars['Int']>;
};

export type EmailLogsCreateWithoutMemberInput = {
  email_log_id?: InputMaybe<Scalars['String']>;
  email_type: EmailType;
  league: LeagueCreateNestedOneWithoutEmailLogsInput;
  resend_id: Scalars['String'];
  ts?: InputMaybe<Scalars['DateTime']>;
  week?: InputMaybe<Scalars['Int']>;
};

export type EmailLogsGroupBy = {
  __typename?: 'EmailLogsGroupBy';
  _avg?: Maybe<EmailLogsAvgAggregate>;
  _count?: Maybe<EmailLogsCountAggregate>;
  _max?: Maybe<EmailLogsMaxAggregate>;
  _min?: Maybe<EmailLogsMinAggregate>;
  _sum?: Maybe<EmailLogsSumAggregate>;
  email_log_id: Scalars['String'];
  email_type: EmailType;
  league_id: Scalars['Int'];
  member_id: Scalars['Int'];
  resend_id: Scalars['String'];
  ts: Scalars['DateTime'];
  week?: Maybe<Scalars['Int']>;
};

export type EmailLogsListRelationFilter = {
  every?: InputMaybe<EmailLogsWhereInput>;
  none?: InputMaybe<EmailLogsWhereInput>;
  some?: InputMaybe<EmailLogsWhereInput>;
};

export type EmailLogsMaxAggregate = {
  __typename?: 'EmailLogsMaxAggregate';
  email_log_id?: Maybe<Scalars['String']>;
  email_type?: Maybe<EmailType>;
  league_id?: Maybe<Scalars['Int']>;
  member_id?: Maybe<Scalars['Int']>;
  resend_id?: Maybe<Scalars['String']>;
  ts?: Maybe<Scalars['DateTime']>;
  week?: Maybe<Scalars['Int']>;
};

export type EmailLogsMaxOrderByAggregateInput = {
  email_log_id?: InputMaybe<SortOrder>;
  email_type?: InputMaybe<SortOrder>;
  league_id?: InputMaybe<SortOrder>;
  member_id?: InputMaybe<SortOrder>;
  resend_id?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
};

export type EmailLogsMinAggregate = {
  __typename?: 'EmailLogsMinAggregate';
  email_log_id?: Maybe<Scalars['String']>;
  email_type?: Maybe<EmailType>;
  league_id?: Maybe<Scalars['Int']>;
  member_id?: Maybe<Scalars['Int']>;
  resend_id?: Maybe<Scalars['String']>;
  ts?: Maybe<Scalars['DateTime']>;
  week?: Maybe<Scalars['Int']>;
};

export type EmailLogsMinOrderByAggregateInput = {
  email_log_id?: InputMaybe<SortOrder>;
  email_type?: InputMaybe<SortOrder>;
  league_id?: InputMaybe<SortOrder>;
  member_id?: InputMaybe<SortOrder>;
  resend_id?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
};

export type EmailLogsOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type EmailLogsOrderByWithAggregationInput = {
  _avg?: InputMaybe<EmailLogsAvgOrderByAggregateInput>;
  _count?: InputMaybe<EmailLogsCountOrderByAggregateInput>;
  _max?: InputMaybe<EmailLogsMaxOrderByAggregateInput>;
  _min?: InputMaybe<EmailLogsMinOrderByAggregateInput>;
  _sum?: InputMaybe<EmailLogsSumOrderByAggregateInput>;
  email_log_id?: InputMaybe<SortOrder>;
  email_type?: InputMaybe<SortOrder>;
  league_id?: InputMaybe<SortOrder>;
  member_id?: InputMaybe<SortOrder>;
  resend_id?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrderInput>;
};

export type EmailLogsOrderByWithRelationInput = {
  email_log_id?: InputMaybe<SortOrder>;
  email_type?: InputMaybe<SortOrder>;
  league?: InputMaybe<LeagueOrderByWithRelationInput>;
  league_id?: InputMaybe<SortOrder>;
  member?: InputMaybe<LeagueMemberOrderByWithRelationInput>;
  member_id?: InputMaybe<SortOrder>;
  resend_id?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrderInput>;
};

export enum EmailLogsScalarFieldEnum {
  EmailLogId = 'email_log_id',
  EmailType = 'email_type',
  LeagueId = 'league_id',
  MemberId = 'member_id',
  ResendId = 'resend_id',
  Ts = 'ts',
  Week = 'week'
}

export type EmailLogsScalarWhereInput = {
  AND?: InputMaybe<Array<EmailLogsScalarWhereInput>>;
  NOT?: InputMaybe<Array<EmailLogsScalarWhereInput>>;
  OR?: InputMaybe<Array<EmailLogsScalarWhereInput>>;
  email_log_id?: InputMaybe<StringFilter>;
  email_type?: InputMaybe<EnumEmailTypeFilter>;
  league_id?: InputMaybe<IntFilter>;
  member_id?: InputMaybe<IntFilter>;
  resend_id?: InputMaybe<StringFilter>;
  ts?: InputMaybe<DateTimeFilter>;
  week?: InputMaybe<IntNullableFilter>;
};

export type EmailLogsScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<EmailLogsScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<EmailLogsScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<EmailLogsScalarWhereWithAggregatesInput>>;
  email_log_id?: InputMaybe<StringWithAggregatesFilter>;
  email_type?: InputMaybe<EnumEmailTypeWithAggregatesFilter>;
  league_id?: InputMaybe<IntWithAggregatesFilter>;
  member_id?: InputMaybe<IntWithAggregatesFilter>;
  resend_id?: InputMaybe<StringWithAggregatesFilter>;
  ts?: InputMaybe<DateTimeWithAggregatesFilter>;
  week?: InputMaybe<IntNullableWithAggregatesFilter>;
};

export type EmailLogsSumAggregate = {
  __typename?: 'EmailLogsSumAggregate';
  league_id?: Maybe<Scalars['Int']>;
  member_id?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
};

export type EmailLogsSumOrderByAggregateInput = {
  league_id?: InputMaybe<SortOrder>;
  member_id?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
};

export type EmailLogsUpdateInput = {
  email_log_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  email_type?: InputMaybe<EnumEmailTypeFieldUpdateOperationsInput>;
  league?: InputMaybe<LeagueUpdateOneRequiredWithoutEmailLogsNestedInput>;
  member?: InputMaybe<LeagueMemberUpdateOneRequiredWithoutEmailLogsNestedInput>;
  resend_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ts?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  week?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type EmailLogsUpdateManyMutationInput = {
  email_log_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  email_type?: InputMaybe<EnumEmailTypeFieldUpdateOperationsInput>;
  resend_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ts?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  week?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type EmailLogsUpdateManyWithWhereWithoutLeagueInput = {
  data: EmailLogsUpdateManyMutationInput;
  where: EmailLogsScalarWhereInput;
};

export type EmailLogsUpdateManyWithWhereWithoutMemberInput = {
  data: EmailLogsUpdateManyMutationInput;
  where: EmailLogsScalarWhereInput;
};

export type EmailLogsUpdateManyWithoutLeagueNestedInput = {
  connect?: InputMaybe<Array<EmailLogsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EmailLogsCreateOrConnectWithoutLeagueInput>>;
  create?: InputMaybe<Array<EmailLogsCreateWithoutLeagueInput>>;
  createMany?: InputMaybe<EmailLogsCreateManyLeagueInputEnvelope>;
  delete?: InputMaybe<Array<EmailLogsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EmailLogsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EmailLogsWhereUniqueInput>>;
  set?: InputMaybe<Array<EmailLogsWhereUniqueInput>>;
  update?: InputMaybe<Array<EmailLogsUpdateWithWhereUniqueWithoutLeagueInput>>;
  updateMany?: InputMaybe<Array<EmailLogsUpdateManyWithWhereWithoutLeagueInput>>;
  upsert?: InputMaybe<Array<EmailLogsUpsertWithWhereUniqueWithoutLeagueInput>>;
};

export type EmailLogsUpdateManyWithoutMemberNestedInput = {
  connect?: InputMaybe<Array<EmailLogsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EmailLogsCreateOrConnectWithoutMemberInput>>;
  create?: InputMaybe<Array<EmailLogsCreateWithoutMemberInput>>;
  createMany?: InputMaybe<EmailLogsCreateManyMemberInputEnvelope>;
  delete?: InputMaybe<Array<EmailLogsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EmailLogsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EmailLogsWhereUniqueInput>>;
  set?: InputMaybe<Array<EmailLogsWhereUniqueInput>>;
  update?: InputMaybe<Array<EmailLogsUpdateWithWhereUniqueWithoutMemberInput>>;
  updateMany?: InputMaybe<Array<EmailLogsUpdateManyWithWhereWithoutMemberInput>>;
  upsert?: InputMaybe<Array<EmailLogsUpsertWithWhereUniqueWithoutMemberInput>>;
};

export type EmailLogsUpdateWithWhereUniqueWithoutLeagueInput = {
  data: EmailLogsUpdateWithoutLeagueInput;
  where: EmailLogsWhereUniqueInput;
};

export type EmailLogsUpdateWithWhereUniqueWithoutMemberInput = {
  data: EmailLogsUpdateWithoutMemberInput;
  where: EmailLogsWhereUniqueInput;
};

export type EmailLogsUpdateWithoutLeagueInput = {
  email_log_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  email_type?: InputMaybe<EnumEmailTypeFieldUpdateOperationsInput>;
  member?: InputMaybe<LeagueMemberUpdateOneRequiredWithoutEmailLogsNestedInput>;
  resend_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ts?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  week?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type EmailLogsUpdateWithoutMemberInput = {
  email_log_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  email_type?: InputMaybe<EnumEmailTypeFieldUpdateOperationsInput>;
  league?: InputMaybe<LeagueUpdateOneRequiredWithoutEmailLogsNestedInput>;
  resend_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ts?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  week?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type EmailLogsUpsertWithWhereUniqueWithoutLeagueInput = {
  create: EmailLogsCreateWithoutLeagueInput;
  update: EmailLogsUpdateWithoutLeagueInput;
  where: EmailLogsWhereUniqueInput;
};

export type EmailLogsUpsertWithWhereUniqueWithoutMemberInput = {
  create: EmailLogsCreateWithoutMemberInput;
  update: EmailLogsUpdateWithoutMemberInput;
  where: EmailLogsWhereUniqueInput;
};

export type EmailLogsWhereInput = {
  AND?: InputMaybe<Array<EmailLogsWhereInput>>;
  NOT?: InputMaybe<Array<EmailLogsWhereInput>>;
  OR?: InputMaybe<Array<EmailLogsWhereInput>>;
  email_log_id?: InputMaybe<StringFilter>;
  email_type?: InputMaybe<EnumEmailTypeFilter>;
  league?: InputMaybe<LeagueRelationFilter>;
  league_id?: InputMaybe<IntFilter>;
  member?: InputMaybe<LeagueMemberRelationFilter>;
  member_id?: InputMaybe<IntFilter>;
  resend_id?: InputMaybe<StringFilter>;
  ts?: InputMaybe<DateTimeFilter>;
  week?: InputMaybe<IntNullableFilter>;
};

export type EmailLogsWhereUniqueInput = {
  email_log_id?: InputMaybe<Scalars['String']>;
};

export enum EmailType {
  LeagueRegistration = 'league_registration',
  WeekPicks = 'week_picks',
  WeekReminder = 'week_reminder',
  WeekSummary = 'week_summary'
}

export type EnumEmailTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<EmailType>;
};

export type EnumEmailTypeFilter = {
  equals?: InputMaybe<EmailType>;
  in?: InputMaybe<Array<EmailType>>;
  not?: InputMaybe<NestedEnumEmailTypeFilter>;
  notIn?: InputMaybe<Array<EmailType>>;
};

export type EnumEmailTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumEmailTypeFilter>;
  _min?: InputMaybe<NestedEnumEmailTypeFilter>;
  equals?: InputMaybe<EmailType>;
  in?: InputMaybe<Array<EmailType>>;
  not?: InputMaybe<NestedEnumEmailTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<EmailType>>;
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

export type EnumMessageStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<MessageStatus>;
};

export type EnumMessageStatusFilter = {
  equals?: InputMaybe<MessageStatus>;
  in?: InputMaybe<Array<MessageStatus>>;
  not?: InputMaybe<NestedEnumMessageStatusFilter>;
  notIn?: InputMaybe<Array<MessageStatus>>;
};

export type EnumMessageStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumMessageStatusFilter>;
  _min?: InputMaybe<NestedEnumMessageStatusFilter>;
  equals?: InputMaybe<MessageStatus>;
  in?: InputMaybe<Array<MessageStatus>>;
  not?: InputMaybe<NestedEnumMessageStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<MessageStatus>>;
};

export type EnumMessageTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<MessageType>;
};

export type EnumMessageTypeFilter = {
  equals?: InputMaybe<MessageType>;
  in?: InputMaybe<Array<MessageType>>;
  not?: InputMaybe<NestedEnumMessageTypeFilter>;
  notIn?: InputMaybe<Array<MessageType>>;
};

export type EnumMessageTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumMessageTypeFilter>;
  _min?: InputMaybe<NestedEnumMessageTypeFilter>;
  equals?: InputMaybe<MessageType>;
  in?: InputMaybe<Array<MessageType>>;
  not?: InputMaybe<NestedEnumMessageTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<MessageType>>;
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
  started: Scalars['Boolean'];
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


export type GameCountPicksArgs = {
  where?: InputMaybe<PickWhereInput>;
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
  id: Scalars['ID'];
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
  awayrecord?: InputMaybe<SortOrderInput>;
  awayscore?: InputMaybe<SortOrderInput>;
  current_record?: InputMaybe<SortOrderInput>;
  done?: InputMaybe<SortOrderInput>;
  gid?: InputMaybe<SortOrder>;
  home?: InputMaybe<SortOrder>;
  homerecord?: InputMaybe<SortOrderInput>;
  homescore?: InputMaybe<SortOrderInput>;
  international?: InputMaybe<SortOrderInput>;
  is_tiebreaker?: InputMaybe<SortOrderInput>;
  msf_id?: InputMaybe<SortOrderInput>;
  season?: InputMaybe<SortOrder>;
  seconds?: InputMaybe<SortOrderInput>;
  ts?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
  winner?: InputMaybe<SortOrderInput>;
};

export type GameOrderByWithRelationInput = {
  away?: InputMaybe<SortOrder>;
  awayrecord?: InputMaybe<SortOrderInput>;
  awayscore?: InputMaybe<SortOrderInput>;
  current_record?: InputMaybe<SortOrderInput>;
  done?: InputMaybe<SortOrderInput>;
  gid?: InputMaybe<SortOrder>;
  home?: InputMaybe<SortOrder>;
  homerecord?: InputMaybe<SortOrderInput>;
  homescore?: InputMaybe<SortOrderInput>;
  international?: InputMaybe<SortOrderInput>;
  is_tiebreaker?: InputMaybe<SortOrderInput>;
  msf_id?: InputMaybe<SortOrderInput>;
  picks?: InputMaybe<PickOrderByRelationAggregateInput>;
  season?: InputMaybe<SortOrder>;
  seconds?: InputMaybe<SortOrderInput>;
  teams_games_awayToteams?: InputMaybe<TeamOrderByWithRelationInput>;
  teams_games_homeToteams?: InputMaybe<TeamOrderByWithRelationInput>;
  ts?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
  winner?: InputMaybe<SortOrderInput>;
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
  AllowLateAndLockAfterStart = 'allow_late_and_lock_after_start',
  AllowLateWholeWeek = 'allow_late_whole_week',
  CloseAtFirstGameStart = 'close_at_first_game_start'
}

export type League = {
  __typename?: 'League';
  EmailLogs: Array<EmailLogs>;
  LeagueMessages: Array<LeagueMessage>;
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
  /** A more efficient way to query for a member and the underlying person at the same time */
  memberpeople: Array<LeagueMemberPeople>;
  mostRecentlyStartedGame?: Maybe<Game>;
  name: Scalars['String'];
  nextLeague?: Maybe<League>;
  people: User;
  pick_policy?: Maybe<PickPolicy>;
  /** A more efficient way to query for a league's picks if you need it */
  picks: Array<Pick>;
  priorLeague?: Maybe<League>;
  prior_league_id?: Maybe<Scalars['Int']>;
  /** A more efficient way to query for a member and the underlying person at the same time */
  rankings: Array<LeagueRanking>;
  reminder_policy?: Maybe<ReminderPolicy>;
  rules: Array<LeagueRuleWithExplanation>;
  scoring_type?: Maybe<ScoringType>;
  season: Scalars['Int'];
  share_code?: Maybe<Scalars['String']>;
  status: LeagueStatus;
  superbowl_competition?: Maybe<Scalars['Boolean']>;
  viewer?: Maybe<LeagueMember>;
};


export type LeagueEmailLogsArgs = {
  cursor?: InputMaybe<EmailLogsWhereUniqueInput>;
  distinct?: InputMaybe<Array<EmailLogsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EmailLogsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EmailLogsWhereInput>;
};


export type LeagueLeagueMessagesArgs = {
  cursor?: InputMaybe<LeagueMessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<LeagueMessageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LeagueMessageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LeagueMessageWhereInput>;
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


export type LeaguePicksArgs = {
  where?: InputMaybe<PickWhereInput>;
};

export type LeagueAvgAggregate = {
  __typename?: 'LeagueAvgAggregate';
  created_by_user_id?: Maybe<Scalars['Float']>;
  league_id?: Maybe<Scalars['Float']>;
  prior_league_id?: Maybe<Scalars['Float']>;
  season?: Maybe<Scalars['Float']>;
};

export type LeagueAvgOrderByAggregateInput = {
  created_by_user_id?: InputMaybe<SortOrder>;
  league_id?: InputMaybe<SortOrder>;
  prior_league_id?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
};

export type LeagueCount = {
  __typename?: 'LeagueCount';
  EmailLogs: Scalars['Int'];
  LeagueMessages: Scalars['Int'];
  WeekWinners: Scalars['Int'];
  leaguemembers: Scalars['Int'];
};


export type LeagueCountEmailLogsArgs = {
  where?: InputMaybe<EmailLogsWhereInput>;
};


export type LeagueCountLeagueMessagesArgs = {
  where?: InputMaybe<LeagueMessageWhereInput>;
};


export type LeagueCountWeekWinnersArgs = {
  where?: InputMaybe<WeekWinnersWhereInput>;
};


export type LeagueCountLeaguemembersArgs = {
  where?: InputMaybe<LeagueMemberWhereInput>;
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
  prior_league_id: Scalars['Int'];
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
  prior_league_id?: InputMaybe<SortOrder>;
  reminder_policy?: InputMaybe<SortOrder>;
  scoring_type?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
  share_code?: InputMaybe<SortOrder>;
  superbowl_competition?: InputMaybe<SortOrder>;
};

export type LeagueCreateInput = {
  EmailLogs?: InputMaybe<EmailLogsCreateNestedManyWithoutLeagueInput>;
  LeagueMessages?: InputMaybe<LeagueMessageCreateNestedManyWithoutLeagueInput>;
  WeekWinners?: InputMaybe<WeekWinnersCreateNestedManyWithoutLeagueInput>;
  created_time?: InputMaybe<Scalars['DateTime']>;
  late_policy?: InputMaybe<LatePolicy>;
  leaguemembers?: InputMaybe<LeagueMemberCreateNestedManyWithoutLeaguesInput>;
  name: Scalars['String'];
  nextLeague?: InputMaybe<LeagueCreateNestedOneWithoutPriorLeagueInput>;
  people: UserCreateNestedOneWithoutLeaguesInput;
  pick_policy?: InputMaybe<PickPolicy>;
  priorLeague?: InputMaybe<LeagueCreateNestedOneWithoutNextLeagueInput>;
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
  prior_league_id?: InputMaybe<Scalars['Int']>;
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
  prior_league_id?: InputMaybe<Scalars['Int']>;
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

export type LeagueCreateNestedOneWithoutEmailLogsInput = {
  connect?: InputMaybe<LeagueWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LeagueCreateOrConnectWithoutEmailLogsInput>;
  create?: InputMaybe<LeagueCreateWithoutEmailLogsInput>;
};

export type LeagueCreateNestedOneWithoutLeagueMessagesInput = {
  connect?: InputMaybe<LeagueWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LeagueCreateOrConnectWithoutLeagueMessagesInput>;
  create?: InputMaybe<LeagueCreateWithoutLeagueMessagesInput>;
};

export type LeagueCreateNestedOneWithoutLeaguemembersInput = {
  connect?: InputMaybe<LeagueWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LeagueCreateOrConnectWithoutLeaguemembersInput>;
  create?: InputMaybe<LeagueCreateWithoutLeaguemembersInput>;
};

export type LeagueCreateNestedOneWithoutNextLeagueInput = {
  connect?: InputMaybe<LeagueWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LeagueCreateOrConnectWithoutNextLeagueInput>;
  create?: InputMaybe<LeagueCreateWithoutNextLeagueInput>;
};

export type LeagueCreateNestedOneWithoutPriorLeagueInput = {
  connect?: InputMaybe<LeagueWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LeagueCreateOrConnectWithoutPriorLeagueInput>;
  create?: InputMaybe<LeagueCreateWithoutPriorLeagueInput>;
};

export type LeagueCreateNestedOneWithoutWeekWinnersInput = {
  connect?: InputMaybe<LeagueWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LeagueCreateOrConnectWithoutWeekWinnersInput>;
  create?: InputMaybe<LeagueCreateWithoutWeekWinnersInput>;
};

export type LeagueCreateOrConnectWithoutEmailLogsInput = {
  create: LeagueCreateWithoutEmailLogsInput;
  where: LeagueWhereUniqueInput;
};

export type LeagueCreateOrConnectWithoutLeagueMessagesInput = {
  create: LeagueCreateWithoutLeagueMessagesInput;
  where: LeagueWhereUniqueInput;
};

export type LeagueCreateOrConnectWithoutLeaguemembersInput = {
  create: LeagueCreateWithoutLeaguemembersInput;
  where: LeagueWhereUniqueInput;
};

export type LeagueCreateOrConnectWithoutNextLeagueInput = {
  create: LeagueCreateWithoutNextLeagueInput;
  where: LeagueWhereUniqueInput;
};

export type LeagueCreateOrConnectWithoutPeopleInput = {
  create: LeagueCreateWithoutPeopleInput;
  where: LeagueWhereUniqueInput;
};

export type LeagueCreateOrConnectWithoutPriorLeagueInput = {
  create: LeagueCreateWithoutPriorLeagueInput;
  where: LeagueWhereUniqueInput;
};

export type LeagueCreateOrConnectWithoutWeekWinnersInput = {
  create: LeagueCreateWithoutWeekWinnersInput;
  where: LeagueWhereUniqueInput;
};

export type LeagueCreateWithoutEmailLogsInput = {
  LeagueMessages?: InputMaybe<LeagueMessageCreateNestedManyWithoutLeagueInput>;
  WeekWinners?: InputMaybe<WeekWinnersCreateNestedManyWithoutLeagueInput>;
  created_time?: InputMaybe<Scalars['DateTime']>;
  late_policy?: InputMaybe<LatePolicy>;
  leaguemembers?: InputMaybe<LeagueMemberCreateNestedManyWithoutLeaguesInput>;
  name: Scalars['String'];
  nextLeague?: InputMaybe<LeagueCreateNestedOneWithoutPriorLeagueInput>;
  people: UserCreateNestedOneWithoutLeaguesInput;
  pick_policy?: InputMaybe<PickPolicy>;
  priorLeague?: InputMaybe<LeagueCreateNestedOneWithoutNextLeagueInput>;
  reminder_policy?: InputMaybe<ReminderPolicy>;
  scoring_type?: InputMaybe<ScoringType>;
  season: Scalars['Int'];
  share_code?: InputMaybe<Scalars['String']>;
  superbowl_competition?: InputMaybe<Scalars['Boolean']>;
};

export type LeagueCreateWithoutLeagueMessagesInput = {
  EmailLogs?: InputMaybe<EmailLogsCreateNestedManyWithoutLeagueInput>;
  WeekWinners?: InputMaybe<WeekWinnersCreateNestedManyWithoutLeagueInput>;
  created_time?: InputMaybe<Scalars['DateTime']>;
  late_policy?: InputMaybe<LatePolicy>;
  leaguemembers?: InputMaybe<LeagueMemberCreateNestedManyWithoutLeaguesInput>;
  name: Scalars['String'];
  nextLeague?: InputMaybe<LeagueCreateNestedOneWithoutPriorLeagueInput>;
  people: UserCreateNestedOneWithoutLeaguesInput;
  pick_policy?: InputMaybe<PickPolicy>;
  priorLeague?: InputMaybe<LeagueCreateNestedOneWithoutNextLeagueInput>;
  reminder_policy?: InputMaybe<ReminderPolicy>;
  scoring_type?: InputMaybe<ScoringType>;
  season: Scalars['Int'];
  share_code?: InputMaybe<Scalars['String']>;
  superbowl_competition?: InputMaybe<Scalars['Boolean']>;
};

export type LeagueCreateWithoutLeaguemembersInput = {
  EmailLogs?: InputMaybe<EmailLogsCreateNestedManyWithoutLeagueInput>;
  LeagueMessages?: InputMaybe<LeagueMessageCreateNestedManyWithoutLeagueInput>;
  WeekWinners?: InputMaybe<WeekWinnersCreateNestedManyWithoutLeagueInput>;
  created_time?: InputMaybe<Scalars['DateTime']>;
  late_policy?: InputMaybe<LatePolicy>;
  name: Scalars['String'];
  nextLeague?: InputMaybe<LeagueCreateNestedOneWithoutPriorLeagueInput>;
  people: UserCreateNestedOneWithoutLeaguesInput;
  pick_policy?: InputMaybe<PickPolicy>;
  priorLeague?: InputMaybe<LeagueCreateNestedOneWithoutNextLeagueInput>;
  reminder_policy?: InputMaybe<ReminderPolicy>;
  scoring_type?: InputMaybe<ScoringType>;
  season: Scalars['Int'];
  share_code?: InputMaybe<Scalars['String']>;
  superbowl_competition?: InputMaybe<Scalars['Boolean']>;
};

export type LeagueCreateWithoutNextLeagueInput = {
  EmailLogs?: InputMaybe<EmailLogsCreateNestedManyWithoutLeagueInput>;
  LeagueMessages?: InputMaybe<LeagueMessageCreateNestedManyWithoutLeagueInput>;
  WeekWinners?: InputMaybe<WeekWinnersCreateNestedManyWithoutLeagueInput>;
  created_time?: InputMaybe<Scalars['DateTime']>;
  late_policy?: InputMaybe<LatePolicy>;
  leaguemembers?: InputMaybe<LeagueMemberCreateNestedManyWithoutLeaguesInput>;
  name: Scalars['String'];
  people: UserCreateNestedOneWithoutLeaguesInput;
  pick_policy?: InputMaybe<PickPolicy>;
  priorLeague?: InputMaybe<LeagueCreateNestedOneWithoutNextLeagueInput>;
  reminder_policy?: InputMaybe<ReminderPolicy>;
  scoring_type?: InputMaybe<ScoringType>;
  season: Scalars['Int'];
  share_code?: InputMaybe<Scalars['String']>;
  superbowl_competition?: InputMaybe<Scalars['Boolean']>;
};

export type LeagueCreateWithoutPeopleInput = {
  EmailLogs?: InputMaybe<EmailLogsCreateNestedManyWithoutLeagueInput>;
  LeagueMessages?: InputMaybe<LeagueMessageCreateNestedManyWithoutLeagueInput>;
  WeekWinners?: InputMaybe<WeekWinnersCreateNestedManyWithoutLeagueInput>;
  created_time?: InputMaybe<Scalars['DateTime']>;
  late_policy?: InputMaybe<LatePolicy>;
  leaguemembers?: InputMaybe<LeagueMemberCreateNestedManyWithoutLeaguesInput>;
  name: Scalars['String'];
  nextLeague?: InputMaybe<LeagueCreateNestedOneWithoutPriorLeagueInput>;
  pick_policy?: InputMaybe<PickPolicy>;
  priorLeague?: InputMaybe<LeagueCreateNestedOneWithoutNextLeagueInput>;
  reminder_policy?: InputMaybe<ReminderPolicy>;
  scoring_type?: InputMaybe<ScoringType>;
  season: Scalars['Int'];
  share_code?: InputMaybe<Scalars['String']>;
  superbowl_competition?: InputMaybe<Scalars['Boolean']>;
};

export type LeagueCreateWithoutPriorLeagueInput = {
  EmailLogs?: InputMaybe<EmailLogsCreateNestedManyWithoutLeagueInput>;
  LeagueMessages?: InputMaybe<LeagueMessageCreateNestedManyWithoutLeagueInput>;
  WeekWinners?: InputMaybe<WeekWinnersCreateNestedManyWithoutLeagueInput>;
  created_time?: InputMaybe<Scalars['DateTime']>;
  late_policy?: InputMaybe<LatePolicy>;
  leaguemembers?: InputMaybe<LeagueMemberCreateNestedManyWithoutLeaguesInput>;
  name: Scalars['String'];
  nextLeague?: InputMaybe<LeagueCreateNestedOneWithoutPriorLeagueInput>;
  people: UserCreateNestedOneWithoutLeaguesInput;
  pick_policy?: InputMaybe<PickPolicy>;
  reminder_policy?: InputMaybe<ReminderPolicy>;
  scoring_type?: InputMaybe<ScoringType>;
  season: Scalars['Int'];
  share_code?: InputMaybe<Scalars['String']>;
  superbowl_competition?: InputMaybe<Scalars['Boolean']>;
};

export type LeagueCreateWithoutWeekWinnersInput = {
  EmailLogs?: InputMaybe<EmailLogsCreateNestedManyWithoutLeagueInput>;
  LeagueMessages?: InputMaybe<LeagueMessageCreateNestedManyWithoutLeagueInput>;
  created_time?: InputMaybe<Scalars['DateTime']>;
  late_policy?: InputMaybe<LatePolicy>;
  leaguemembers?: InputMaybe<LeagueMemberCreateNestedManyWithoutLeaguesInput>;
  name: Scalars['String'];
  nextLeague?: InputMaybe<LeagueCreateNestedOneWithoutPriorLeagueInput>;
  people: UserCreateNestedOneWithoutLeaguesInput;
  pick_policy?: InputMaybe<PickPolicy>;
  priorLeague?: InputMaybe<LeagueCreateNestedOneWithoutNextLeagueInput>;
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
  prior_league_id?: Maybe<Scalars['Int']>;
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
  prior_league_id?: Maybe<Scalars['Int']>;
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
  prior_league_id?: InputMaybe<SortOrder>;
  reminder_policy?: InputMaybe<SortOrder>;
  scoring_type?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
  share_code?: InputMaybe<SortOrder>;
  superbowl_competition?: InputMaybe<SortOrder>;
};

export type LeagueMember = {
  __typename?: 'LeagueMember';
  EmailLogs: Array<EmailLogs>;
  LeagueMessages: Array<LeagueMessage>;
  WeekWinners: Array<WeekWinners>;
  _count?: Maybe<LeagueMemberCount>;
  aggregatePick: AggregateResponse;
  hasPickedNextGame: Scalars['Boolean'];
  id: Scalars['ID'];
  league_id: Scalars['Int'];
  leagues: League;
  membership_id: Scalars['Int'];
  nextGame?: Maybe<Game>;
  paid?: Maybe<Scalars['Boolean']>;
  people: User;
  picks: Array<Pick>;
  role?: Maybe<MemberRole>;
  superbowl: Array<Superbowl>;
  ts: Scalars['DateTimeBetterSerialization'];
  user_id: Scalars['Int'];
};


export type LeagueMemberEmailLogsArgs = {
  cursor?: InputMaybe<EmailLogsWhereUniqueInput>;
  distinct?: InputMaybe<Array<EmailLogsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EmailLogsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EmailLogsWhereInput>;
};


export type LeagueMemberLeagueMessagesArgs = {
  cursor?: InputMaybe<LeagueMessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<LeagueMessageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LeagueMessageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LeagueMessageWhereInput>;
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
  EmailLogs: Scalars['Int'];
  LeagueMessages: Scalars['Int'];
  WeekWinners: Scalars['Int'];
  picks: Scalars['Int'];
  superbowl: Scalars['Int'];
};


export type LeagueMemberCountEmailLogsArgs = {
  where?: InputMaybe<EmailLogsWhereInput>;
};


export type LeagueMemberCountLeagueMessagesArgs = {
  where?: InputMaybe<LeagueMessageWhereInput>;
};


export type LeagueMemberCountWeekWinnersArgs = {
  where?: InputMaybe<WeekWinnersWhereInput>;
};


export type LeagueMemberCountPicksArgs = {
  where?: InputMaybe<PickWhereInput>;
};


export type LeagueMemberCountSuperbowlArgs = {
  where?: InputMaybe<SuperbowlWhereInput>;
};

export type LeagueMemberCountAggregate = {
  __typename?: 'LeagueMemberCountAggregate';
  _all: Scalars['Int'];
  league_id: Scalars['Int'];
  membership_id: Scalars['Int'];
  paid: Scalars['Int'];
  role: Scalars['Int'];
  ts: Scalars['Int'];
  user_id: Scalars['Int'];
};

export type LeagueMemberCountOrderByAggregateInput = {
  league_id?: InputMaybe<SortOrder>;
  membership_id?: InputMaybe<SortOrder>;
  paid?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type LeagueMemberCreateInput = {
  EmailLogs?: InputMaybe<EmailLogsCreateNestedManyWithoutMemberInput>;
  LeagueMessages?: InputMaybe<LeagueMessageCreateNestedManyWithoutMemberInput>;
  WeekWinners?: InputMaybe<WeekWinnersCreateNestedManyWithoutMemberInput>;
  leagues: LeagueCreateNestedOneWithoutLeaguemembersInput;
  paid?: InputMaybe<Scalars['Boolean']>;
  people: UserCreateNestedOneWithoutLeaguemembersInput;
  picks?: InputMaybe<PickCreateNestedManyWithoutLeaguemembersInput>;
  role?: InputMaybe<MemberRole>;
  superbowl?: InputMaybe<SuperbowlCreateNestedManyWithoutLeaguemembersInput>;
  ts?: InputMaybe<Scalars['DateTime']>;
};

export type LeagueMemberCreateManyInput = {
  league_id: Scalars['Int'];
  membership_id?: InputMaybe<Scalars['Int']>;
  paid?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<MemberRole>;
  ts?: InputMaybe<Scalars['DateTime']>;
  user_id: Scalars['Int'];
};

export type LeagueMemberCreateManyLeaguesInput = {
  membership_id?: InputMaybe<Scalars['Int']>;
  paid?: InputMaybe<Scalars['Boolean']>;
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
  paid?: InputMaybe<Scalars['Boolean']>;
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

export type LeagueMemberCreateNestedOneWithoutEmailLogsInput = {
  connect?: InputMaybe<LeagueMemberWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LeagueMemberCreateOrConnectWithoutEmailLogsInput>;
  create?: InputMaybe<LeagueMemberCreateWithoutEmailLogsInput>;
};

export type LeagueMemberCreateNestedOneWithoutLeagueMessagesInput = {
  connect?: InputMaybe<LeagueMemberWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LeagueMemberCreateOrConnectWithoutLeagueMessagesInput>;
  create?: InputMaybe<LeagueMemberCreateWithoutLeagueMessagesInput>;
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

export type LeagueMemberCreateOrConnectWithoutEmailLogsInput = {
  create: LeagueMemberCreateWithoutEmailLogsInput;
  where: LeagueMemberWhereUniqueInput;
};

export type LeagueMemberCreateOrConnectWithoutLeagueMessagesInput = {
  create: LeagueMemberCreateWithoutLeagueMessagesInput;
  where: LeagueMemberWhereUniqueInput;
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

export type LeagueMemberCreateWithoutEmailLogsInput = {
  LeagueMessages?: InputMaybe<LeagueMessageCreateNestedManyWithoutMemberInput>;
  WeekWinners?: InputMaybe<WeekWinnersCreateNestedManyWithoutMemberInput>;
  leagues: LeagueCreateNestedOneWithoutLeaguemembersInput;
  paid?: InputMaybe<Scalars['Boolean']>;
  people: UserCreateNestedOneWithoutLeaguemembersInput;
  picks?: InputMaybe<PickCreateNestedManyWithoutLeaguemembersInput>;
  role?: InputMaybe<MemberRole>;
  superbowl?: InputMaybe<SuperbowlCreateNestedManyWithoutLeaguemembersInput>;
  ts?: InputMaybe<Scalars['DateTime']>;
};

export type LeagueMemberCreateWithoutLeagueMessagesInput = {
  EmailLogs?: InputMaybe<EmailLogsCreateNestedManyWithoutMemberInput>;
  WeekWinners?: InputMaybe<WeekWinnersCreateNestedManyWithoutMemberInput>;
  leagues: LeagueCreateNestedOneWithoutLeaguemembersInput;
  paid?: InputMaybe<Scalars['Boolean']>;
  people: UserCreateNestedOneWithoutLeaguemembersInput;
  picks?: InputMaybe<PickCreateNestedManyWithoutLeaguemembersInput>;
  role?: InputMaybe<MemberRole>;
  superbowl?: InputMaybe<SuperbowlCreateNestedManyWithoutLeaguemembersInput>;
  ts?: InputMaybe<Scalars['DateTime']>;
};

export type LeagueMemberCreateWithoutLeaguesInput = {
  EmailLogs?: InputMaybe<EmailLogsCreateNestedManyWithoutMemberInput>;
  LeagueMessages?: InputMaybe<LeagueMessageCreateNestedManyWithoutMemberInput>;
  WeekWinners?: InputMaybe<WeekWinnersCreateNestedManyWithoutMemberInput>;
  paid?: InputMaybe<Scalars['Boolean']>;
  people: UserCreateNestedOneWithoutLeaguemembersInput;
  picks?: InputMaybe<PickCreateNestedManyWithoutLeaguemembersInput>;
  role?: InputMaybe<MemberRole>;
  superbowl?: InputMaybe<SuperbowlCreateNestedManyWithoutLeaguemembersInput>;
  ts?: InputMaybe<Scalars['DateTime']>;
};

export type LeagueMemberCreateWithoutPeopleInput = {
  EmailLogs?: InputMaybe<EmailLogsCreateNestedManyWithoutMemberInput>;
  LeagueMessages?: InputMaybe<LeagueMessageCreateNestedManyWithoutMemberInput>;
  WeekWinners?: InputMaybe<WeekWinnersCreateNestedManyWithoutMemberInput>;
  leagues: LeagueCreateNestedOneWithoutLeaguemembersInput;
  paid?: InputMaybe<Scalars['Boolean']>;
  picks?: InputMaybe<PickCreateNestedManyWithoutLeaguemembersInput>;
  role?: InputMaybe<MemberRole>;
  superbowl?: InputMaybe<SuperbowlCreateNestedManyWithoutLeaguemembersInput>;
  ts?: InputMaybe<Scalars['DateTime']>;
};

export type LeagueMemberCreateWithoutPicksInput = {
  EmailLogs?: InputMaybe<EmailLogsCreateNestedManyWithoutMemberInput>;
  LeagueMessages?: InputMaybe<LeagueMessageCreateNestedManyWithoutMemberInput>;
  WeekWinners?: InputMaybe<WeekWinnersCreateNestedManyWithoutMemberInput>;
  leagues: LeagueCreateNestedOneWithoutLeaguemembersInput;
  paid?: InputMaybe<Scalars['Boolean']>;
  people: UserCreateNestedOneWithoutLeaguemembersInput;
  role?: InputMaybe<MemberRole>;
  superbowl?: InputMaybe<SuperbowlCreateNestedManyWithoutLeaguemembersInput>;
  ts?: InputMaybe<Scalars['DateTime']>;
};

export type LeagueMemberCreateWithoutSuperbowlInput = {
  EmailLogs?: InputMaybe<EmailLogsCreateNestedManyWithoutMemberInput>;
  LeagueMessages?: InputMaybe<LeagueMessageCreateNestedManyWithoutMemberInput>;
  WeekWinners?: InputMaybe<WeekWinnersCreateNestedManyWithoutMemberInput>;
  leagues: LeagueCreateNestedOneWithoutLeaguemembersInput;
  paid?: InputMaybe<Scalars['Boolean']>;
  people: UserCreateNestedOneWithoutLeaguemembersInput;
  picks?: InputMaybe<PickCreateNestedManyWithoutLeaguemembersInput>;
  role?: InputMaybe<MemberRole>;
  ts?: InputMaybe<Scalars['DateTime']>;
};

export type LeagueMemberCreateWithoutWeekWinnersInput = {
  EmailLogs?: InputMaybe<EmailLogsCreateNestedManyWithoutMemberInput>;
  LeagueMessages?: InputMaybe<LeagueMessageCreateNestedManyWithoutMemberInput>;
  leagues: LeagueCreateNestedOneWithoutLeaguemembersInput;
  paid?: InputMaybe<Scalars['Boolean']>;
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
  paid?: Maybe<Scalars['Boolean']>;
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
  paid?: Maybe<Scalars['Boolean']>;
  role?: Maybe<MemberRole>;
  ts?: Maybe<Scalars['DateTime']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type LeagueMemberMaxOrderByAggregateInput = {
  league_id?: InputMaybe<SortOrder>;
  membership_id?: InputMaybe<SortOrder>;
  paid?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type LeagueMemberMinAggregate = {
  __typename?: 'LeagueMemberMinAggregate';
  league_id?: Maybe<Scalars['Int']>;
  membership_id?: Maybe<Scalars['Int']>;
  paid?: Maybe<Scalars['Boolean']>;
  role?: Maybe<MemberRole>;
  ts?: Maybe<Scalars['DateTime']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type LeagueMemberMinOrderByAggregateInput = {
  league_id?: InputMaybe<SortOrder>;
  membership_id?: InputMaybe<SortOrder>;
  paid?: InputMaybe<SortOrder>;
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
  paid?: InputMaybe<SortOrderInput>;
  role?: InputMaybe<SortOrderInput>;
  ts?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type LeagueMemberOrderByWithRelationInput = {
  EmailLogs?: InputMaybe<EmailLogsOrderByRelationAggregateInput>;
  LeagueMessages?: InputMaybe<LeagueMessageOrderByRelationAggregateInput>;
  WeekWinners?: InputMaybe<WeekWinnersOrderByRelationAggregateInput>;
  league_id?: InputMaybe<SortOrder>;
  leagues?: InputMaybe<LeagueOrderByWithRelationInput>;
  membership_id?: InputMaybe<SortOrder>;
  paid?: InputMaybe<SortOrderInput>;
  people?: InputMaybe<UserOrderByWithRelationInput>;
  picks?: InputMaybe<PickOrderByRelationAggregateInput>;
  role?: InputMaybe<SortOrderInput>;
  superbowl?: InputMaybe<SuperbowlOrderByRelationAggregateInput>;
  ts?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type LeagueMemberPeople = {
  __typename?: 'LeagueMemberPeople';
  id: Scalars['ID'];
  member: LeagueMember;
  user: User;
};

export type LeagueMemberRelationFilter = {
  is?: InputMaybe<LeagueMemberWhereInput>;
  isNot?: InputMaybe<LeagueMemberWhereInput>;
};

export enum LeagueMemberScalarFieldEnum {
  LeagueId = 'league_id',
  MembershipId = 'membership_id',
  Paid = 'paid',
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
  paid?: InputMaybe<BoolNullableFilter>;
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
  paid?: InputMaybe<BoolNullableWithAggregatesFilter>;
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
  EmailLogs?: InputMaybe<EmailLogsUpdateManyWithoutMemberNestedInput>;
  LeagueMessages?: InputMaybe<LeagueMessageUpdateManyWithoutMemberNestedInput>;
  WeekWinners?: InputMaybe<WeekWinnersUpdateManyWithoutMemberNestedInput>;
  leagues?: InputMaybe<LeagueUpdateOneRequiredWithoutLeaguemembersNestedInput>;
  paid?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  people?: InputMaybe<UserUpdateOneRequiredWithoutLeaguemembersNestedInput>;
  picks?: InputMaybe<PickUpdateManyWithoutLeaguemembersNestedInput>;
  role?: InputMaybe<NullableEnumMemberRoleFieldUpdateOperationsInput>;
  superbowl?: InputMaybe<SuperbowlUpdateManyWithoutLeaguemembersNestedInput>;
  ts?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LeagueMemberUpdateManyMutationInput = {
  paid?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
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

export type LeagueMemberUpdateOneRequiredWithoutEmailLogsNestedInput = {
  connect?: InputMaybe<LeagueMemberWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LeagueMemberCreateOrConnectWithoutEmailLogsInput>;
  create?: InputMaybe<LeagueMemberCreateWithoutEmailLogsInput>;
  update?: InputMaybe<LeagueMemberUpdateWithoutEmailLogsInput>;
  upsert?: InputMaybe<LeagueMemberUpsertWithoutEmailLogsInput>;
};

export type LeagueMemberUpdateOneRequiredWithoutLeagueMessagesNestedInput = {
  connect?: InputMaybe<LeagueMemberWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LeagueMemberCreateOrConnectWithoutLeagueMessagesInput>;
  create?: InputMaybe<LeagueMemberCreateWithoutLeagueMessagesInput>;
  update?: InputMaybe<LeagueMemberUpdateWithoutLeagueMessagesInput>;
  upsert?: InputMaybe<LeagueMemberUpsertWithoutLeagueMessagesInput>;
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

export type LeagueMemberUpdateWithoutEmailLogsInput = {
  LeagueMessages?: InputMaybe<LeagueMessageUpdateManyWithoutMemberNestedInput>;
  WeekWinners?: InputMaybe<WeekWinnersUpdateManyWithoutMemberNestedInput>;
  leagues?: InputMaybe<LeagueUpdateOneRequiredWithoutLeaguemembersNestedInput>;
  paid?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  people?: InputMaybe<UserUpdateOneRequiredWithoutLeaguemembersNestedInput>;
  picks?: InputMaybe<PickUpdateManyWithoutLeaguemembersNestedInput>;
  role?: InputMaybe<NullableEnumMemberRoleFieldUpdateOperationsInput>;
  superbowl?: InputMaybe<SuperbowlUpdateManyWithoutLeaguemembersNestedInput>;
  ts?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LeagueMemberUpdateWithoutLeagueMessagesInput = {
  EmailLogs?: InputMaybe<EmailLogsUpdateManyWithoutMemberNestedInput>;
  WeekWinners?: InputMaybe<WeekWinnersUpdateManyWithoutMemberNestedInput>;
  leagues?: InputMaybe<LeagueUpdateOneRequiredWithoutLeaguemembersNestedInput>;
  paid?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  people?: InputMaybe<UserUpdateOneRequiredWithoutLeaguemembersNestedInput>;
  picks?: InputMaybe<PickUpdateManyWithoutLeaguemembersNestedInput>;
  role?: InputMaybe<NullableEnumMemberRoleFieldUpdateOperationsInput>;
  superbowl?: InputMaybe<SuperbowlUpdateManyWithoutLeaguemembersNestedInput>;
  ts?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LeagueMemberUpdateWithoutLeaguesInput = {
  EmailLogs?: InputMaybe<EmailLogsUpdateManyWithoutMemberNestedInput>;
  LeagueMessages?: InputMaybe<LeagueMessageUpdateManyWithoutMemberNestedInput>;
  WeekWinners?: InputMaybe<WeekWinnersUpdateManyWithoutMemberNestedInput>;
  paid?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  people?: InputMaybe<UserUpdateOneRequiredWithoutLeaguemembersNestedInput>;
  picks?: InputMaybe<PickUpdateManyWithoutLeaguemembersNestedInput>;
  role?: InputMaybe<NullableEnumMemberRoleFieldUpdateOperationsInput>;
  superbowl?: InputMaybe<SuperbowlUpdateManyWithoutLeaguemembersNestedInput>;
  ts?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LeagueMemberUpdateWithoutPeopleInput = {
  EmailLogs?: InputMaybe<EmailLogsUpdateManyWithoutMemberNestedInput>;
  LeagueMessages?: InputMaybe<LeagueMessageUpdateManyWithoutMemberNestedInput>;
  WeekWinners?: InputMaybe<WeekWinnersUpdateManyWithoutMemberNestedInput>;
  leagues?: InputMaybe<LeagueUpdateOneRequiredWithoutLeaguemembersNestedInput>;
  paid?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  picks?: InputMaybe<PickUpdateManyWithoutLeaguemembersNestedInput>;
  role?: InputMaybe<NullableEnumMemberRoleFieldUpdateOperationsInput>;
  superbowl?: InputMaybe<SuperbowlUpdateManyWithoutLeaguemembersNestedInput>;
  ts?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LeagueMemberUpdateWithoutPicksInput = {
  EmailLogs?: InputMaybe<EmailLogsUpdateManyWithoutMemberNestedInput>;
  LeagueMessages?: InputMaybe<LeagueMessageUpdateManyWithoutMemberNestedInput>;
  WeekWinners?: InputMaybe<WeekWinnersUpdateManyWithoutMemberNestedInput>;
  leagues?: InputMaybe<LeagueUpdateOneRequiredWithoutLeaguemembersNestedInput>;
  paid?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  people?: InputMaybe<UserUpdateOneRequiredWithoutLeaguemembersNestedInput>;
  role?: InputMaybe<NullableEnumMemberRoleFieldUpdateOperationsInput>;
  superbowl?: InputMaybe<SuperbowlUpdateManyWithoutLeaguemembersNestedInput>;
  ts?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LeagueMemberUpdateWithoutSuperbowlInput = {
  EmailLogs?: InputMaybe<EmailLogsUpdateManyWithoutMemberNestedInput>;
  LeagueMessages?: InputMaybe<LeagueMessageUpdateManyWithoutMemberNestedInput>;
  WeekWinners?: InputMaybe<WeekWinnersUpdateManyWithoutMemberNestedInput>;
  leagues?: InputMaybe<LeagueUpdateOneRequiredWithoutLeaguemembersNestedInput>;
  paid?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  people?: InputMaybe<UserUpdateOneRequiredWithoutLeaguemembersNestedInput>;
  picks?: InputMaybe<PickUpdateManyWithoutLeaguemembersNestedInput>;
  role?: InputMaybe<NullableEnumMemberRoleFieldUpdateOperationsInput>;
  ts?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LeagueMemberUpdateWithoutWeekWinnersInput = {
  EmailLogs?: InputMaybe<EmailLogsUpdateManyWithoutMemberNestedInput>;
  LeagueMessages?: InputMaybe<LeagueMessageUpdateManyWithoutMemberNestedInput>;
  leagues?: InputMaybe<LeagueUpdateOneRequiredWithoutLeaguemembersNestedInput>;
  paid?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
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

export type LeagueMemberUpsertWithoutEmailLogsInput = {
  create: LeagueMemberCreateWithoutEmailLogsInput;
  update: LeagueMemberUpdateWithoutEmailLogsInput;
};

export type LeagueMemberUpsertWithoutLeagueMessagesInput = {
  create: LeagueMemberCreateWithoutLeagueMessagesInput;
  update: LeagueMemberUpdateWithoutLeagueMessagesInput;
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
  EmailLogs?: InputMaybe<EmailLogsListRelationFilter>;
  LeagueMessages?: InputMaybe<LeagueMessageListRelationFilter>;
  NOT?: InputMaybe<Array<LeagueMemberWhereInput>>;
  OR?: InputMaybe<Array<LeagueMemberWhereInput>>;
  WeekWinners?: InputMaybe<WeekWinnersListRelationFilter>;
  league_id?: InputMaybe<IntFilter>;
  leagues?: InputMaybe<LeagueRelationFilter>;
  membership_id?: InputMaybe<IntFilter>;
  paid?: InputMaybe<BoolNullableFilter>;
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

export type LeagueMessage = {
  __typename?: 'LeagueMessage';
  content: Scalars['String'];
  createdAt: Scalars['DateTimeBetterSerialization'];
  id: Scalars['ID'];
  league: League;
  league_id: Scalars['Int'];
  member: LeagueMember;
  member_id: Scalars['Int'];
  message_id: Scalars['String'];
  message_type: MessageType;
  status: MessageStatus;
  week?: Maybe<Scalars['Int']>;
};

export type LeagueMessageAvgAggregate = {
  __typename?: 'LeagueMessageAvgAggregate';
  league_id?: Maybe<Scalars['Float']>;
  member_id?: Maybe<Scalars['Float']>;
  week?: Maybe<Scalars['Float']>;
};

export type LeagueMessageAvgOrderByAggregateInput = {
  league_id?: InputMaybe<SortOrder>;
  member_id?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
};

export type LeagueMessageCountAggregate = {
  __typename?: 'LeagueMessageCountAggregate';
  _all: Scalars['Int'];
  content: Scalars['Int'];
  createdAt: Scalars['Int'];
  league_id: Scalars['Int'];
  member_id: Scalars['Int'];
  message_id: Scalars['Int'];
  message_type: Scalars['Int'];
  status: Scalars['Int'];
  week: Scalars['Int'];
};

export type LeagueMessageCountOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  league_id?: InputMaybe<SortOrder>;
  member_id?: InputMaybe<SortOrder>;
  message_id?: InputMaybe<SortOrder>;
  message_type?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
};

export type LeagueMessageCreateInput = {
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  league: LeagueCreateNestedOneWithoutLeagueMessagesInput;
  member: LeagueMemberCreateNestedOneWithoutLeagueMessagesInput;
  message_id?: InputMaybe<Scalars['String']>;
  message_type: MessageType;
  status?: InputMaybe<MessageStatus>;
  week?: InputMaybe<Scalars['Int']>;
};

export type LeagueMessageCreateManyInput = {
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  league_id: Scalars['Int'];
  member_id: Scalars['Int'];
  message_id?: InputMaybe<Scalars['String']>;
  message_type: MessageType;
  status?: InputMaybe<MessageStatus>;
  week?: InputMaybe<Scalars['Int']>;
};

export type LeagueMessageCreateManyLeagueInput = {
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  member_id: Scalars['Int'];
  message_id?: InputMaybe<Scalars['String']>;
  message_type: MessageType;
  status?: InputMaybe<MessageStatus>;
  week?: InputMaybe<Scalars['Int']>;
};

export type LeagueMessageCreateManyLeagueInputEnvelope = {
  data: Array<LeagueMessageCreateManyLeagueInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type LeagueMessageCreateManyMemberInput = {
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  league_id: Scalars['Int'];
  message_id?: InputMaybe<Scalars['String']>;
  message_type: MessageType;
  status?: InputMaybe<MessageStatus>;
  week?: InputMaybe<Scalars['Int']>;
};

export type LeagueMessageCreateManyMemberInputEnvelope = {
  data: Array<LeagueMessageCreateManyMemberInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type LeagueMessageCreateNestedManyWithoutLeagueInput = {
  connect?: InputMaybe<Array<LeagueMessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LeagueMessageCreateOrConnectWithoutLeagueInput>>;
  create?: InputMaybe<Array<LeagueMessageCreateWithoutLeagueInput>>;
  createMany?: InputMaybe<LeagueMessageCreateManyLeagueInputEnvelope>;
};

export type LeagueMessageCreateNestedManyWithoutMemberInput = {
  connect?: InputMaybe<Array<LeagueMessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LeagueMessageCreateOrConnectWithoutMemberInput>>;
  create?: InputMaybe<Array<LeagueMessageCreateWithoutMemberInput>>;
  createMany?: InputMaybe<LeagueMessageCreateManyMemberInputEnvelope>;
};

export type LeagueMessageCreateOrConnectWithoutLeagueInput = {
  create: LeagueMessageCreateWithoutLeagueInput;
  where: LeagueMessageWhereUniqueInput;
};

export type LeagueMessageCreateOrConnectWithoutMemberInput = {
  create: LeagueMessageCreateWithoutMemberInput;
  where: LeagueMessageWhereUniqueInput;
};

export type LeagueMessageCreateWithoutLeagueInput = {
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  member: LeagueMemberCreateNestedOneWithoutLeagueMessagesInput;
  message_id?: InputMaybe<Scalars['String']>;
  message_type: MessageType;
  status?: InputMaybe<MessageStatus>;
  week?: InputMaybe<Scalars['Int']>;
};

export type LeagueMessageCreateWithoutMemberInput = {
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  league: LeagueCreateNestedOneWithoutLeagueMessagesInput;
  message_id?: InputMaybe<Scalars['String']>;
  message_type: MessageType;
  status?: InputMaybe<MessageStatus>;
  week?: InputMaybe<Scalars['Int']>;
};

export type LeagueMessageGroupBy = {
  __typename?: 'LeagueMessageGroupBy';
  _avg?: Maybe<LeagueMessageAvgAggregate>;
  _count?: Maybe<LeagueMessageCountAggregate>;
  _max?: Maybe<LeagueMessageMaxAggregate>;
  _min?: Maybe<LeagueMessageMinAggregate>;
  _sum?: Maybe<LeagueMessageSumAggregate>;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  league_id: Scalars['Int'];
  member_id: Scalars['Int'];
  message_id: Scalars['String'];
  message_type: MessageType;
  status: MessageStatus;
  week?: Maybe<Scalars['Int']>;
};

export type LeagueMessageListRelationFilter = {
  every?: InputMaybe<LeagueMessageWhereInput>;
  none?: InputMaybe<LeagueMessageWhereInput>;
  some?: InputMaybe<LeagueMessageWhereInput>;
};

export type LeagueMessageMaxAggregate = {
  __typename?: 'LeagueMessageMaxAggregate';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  league_id?: Maybe<Scalars['Int']>;
  member_id?: Maybe<Scalars['Int']>;
  message_id?: Maybe<Scalars['String']>;
  message_type?: Maybe<MessageType>;
  status?: Maybe<MessageStatus>;
  week?: Maybe<Scalars['Int']>;
};

export type LeagueMessageMaxOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  league_id?: InputMaybe<SortOrder>;
  member_id?: InputMaybe<SortOrder>;
  message_id?: InputMaybe<SortOrder>;
  message_type?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
};

export type LeagueMessageMinAggregate = {
  __typename?: 'LeagueMessageMinAggregate';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  league_id?: Maybe<Scalars['Int']>;
  member_id?: Maybe<Scalars['Int']>;
  message_id?: Maybe<Scalars['String']>;
  message_type?: Maybe<MessageType>;
  status?: Maybe<MessageStatus>;
  week?: Maybe<Scalars['Int']>;
};

export type LeagueMessageMinOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  league_id?: InputMaybe<SortOrder>;
  member_id?: InputMaybe<SortOrder>;
  message_id?: InputMaybe<SortOrder>;
  message_type?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
};

export type LeagueMessageOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type LeagueMessageOrderByWithAggregationInput = {
  _avg?: InputMaybe<LeagueMessageAvgOrderByAggregateInput>;
  _count?: InputMaybe<LeagueMessageCountOrderByAggregateInput>;
  _max?: InputMaybe<LeagueMessageMaxOrderByAggregateInput>;
  _min?: InputMaybe<LeagueMessageMinOrderByAggregateInput>;
  _sum?: InputMaybe<LeagueMessageSumOrderByAggregateInput>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  league_id?: InputMaybe<SortOrder>;
  member_id?: InputMaybe<SortOrder>;
  message_id?: InputMaybe<SortOrder>;
  message_type?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrderInput>;
};

export type LeagueMessageOrderByWithRelationInput = {
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  league?: InputMaybe<LeagueOrderByWithRelationInput>;
  league_id?: InputMaybe<SortOrder>;
  member?: InputMaybe<LeagueMemberOrderByWithRelationInput>;
  member_id?: InputMaybe<SortOrder>;
  message_id?: InputMaybe<SortOrder>;
  message_type?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrderInput>;
};

export enum LeagueMessageScalarFieldEnum {
  Content = 'content',
  CreatedAt = 'createdAt',
  LeagueId = 'league_id',
  MemberId = 'member_id',
  MessageId = 'message_id',
  MessageType = 'message_type',
  Status = 'status',
  Week = 'week'
}

export type LeagueMessageScalarWhereInput = {
  AND?: InputMaybe<Array<LeagueMessageScalarWhereInput>>;
  NOT?: InputMaybe<Array<LeagueMessageScalarWhereInput>>;
  OR?: InputMaybe<Array<LeagueMessageScalarWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  league_id?: InputMaybe<IntFilter>;
  member_id?: InputMaybe<IntFilter>;
  message_id?: InputMaybe<StringFilter>;
  message_type?: InputMaybe<EnumMessageTypeFilter>;
  status?: InputMaybe<EnumMessageStatusFilter>;
  week?: InputMaybe<IntNullableFilter>;
};

export type LeagueMessageScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<LeagueMessageScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<LeagueMessageScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<LeagueMessageScalarWhereWithAggregatesInput>>;
  content?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  league_id?: InputMaybe<IntWithAggregatesFilter>;
  member_id?: InputMaybe<IntWithAggregatesFilter>;
  message_id?: InputMaybe<StringWithAggregatesFilter>;
  message_type?: InputMaybe<EnumMessageTypeWithAggregatesFilter>;
  status?: InputMaybe<EnumMessageStatusWithAggregatesFilter>;
  week?: InputMaybe<IntNullableWithAggregatesFilter>;
};

export type LeagueMessageSumAggregate = {
  __typename?: 'LeagueMessageSumAggregate';
  league_id?: Maybe<Scalars['Int']>;
  member_id?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
};

export type LeagueMessageSumOrderByAggregateInput = {
  league_id?: InputMaybe<SortOrder>;
  member_id?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
};

export type LeagueMessageUpdateInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  league?: InputMaybe<LeagueUpdateOneRequiredWithoutLeagueMessagesNestedInput>;
  member?: InputMaybe<LeagueMemberUpdateOneRequiredWithoutLeagueMessagesNestedInput>;
  message_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message_type?: InputMaybe<EnumMessageTypeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumMessageStatusFieldUpdateOperationsInput>;
  week?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type LeagueMessageUpdateManyMutationInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  message_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message_type?: InputMaybe<EnumMessageTypeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumMessageStatusFieldUpdateOperationsInput>;
  week?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type LeagueMessageUpdateManyWithWhereWithoutLeagueInput = {
  data: LeagueMessageUpdateManyMutationInput;
  where: LeagueMessageScalarWhereInput;
};

export type LeagueMessageUpdateManyWithWhereWithoutMemberInput = {
  data: LeagueMessageUpdateManyMutationInput;
  where: LeagueMessageScalarWhereInput;
};

export type LeagueMessageUpdateManyWithoutLeagueNestedInput = {
  connect?: InputMaybe<Array<LeagueMessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LeagueMessageCreateOrConnectWithoutLeagueInput>>;
  create?: InputMaybe<Array<LeagueMessageCreateWithoutLeagueInput>>;
  createMany?: InputMaybe<LeagueMessageCreateManyLeagueInputEnvelope>;
  delete?: InputMaybe<Array<LeagueMessageWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<LeagueMessageScalarWhereInput>>;
  disconnect?: InputMaybe<Array<LeagueMessageWhereUniqueInput>>;
  set?: InputMaybe<Array<LeagueMessageWhereUniqueInput>>;
  update?: InputMaybe<Array<LeagueMessageUpdateWithWhereUniqueWithoutLeagueInput>>;
  updateMany?: InputMaybe<Array<LeagueMessageUpdateManyWithWhereWithoutLeagueInput>>;
  upsert?: InputMaybe<Array<LeagueMessageUpsertWithWhereUniqueWithoutLeagueInput>>;
};

export type LeagueMessageUpdateManyWithoutMemberNestedInput = {
  connect?: InputMaybe<Array<LeagueMessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LeagueMessageCreateOrConnectWithoutMemberInput>>;
  create?: InputMaybe<Array<LeagueMessageCreateWithoutMemberInput>>;
  createMany?: InputMaybe<LeagueMessageCreateManyMemberInputEnvelope>;
  delete?: InputMaybe<Array<LeagueMessageWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<LeagueMessageScalarWhereInput>>;
  disconnect?: InputMaybe<Array<LeagueMessageWhereUniqueInput>>;
  set?: InputMaybe<Array<LeagueMessageWhereUniqueInput>>;
  update?: InputMaybe<Array<LeagueMessageUpdateWithWhereUniqueWithoutMemberInput>>;
  updateMany?: InputMaybe<Array<LeagueMessageUpdateManyWithWhereWithoutMemberInput>>;
  upsert?: InputMaybe<Array<LeagueMessageUpsertWithWhereUniqueWithoutMemberInput>>;
};

export type LeagueMessageUpdateWithWhereUniqueWithoutLeagueInput = {
  data: LeagueMessageUpdateWithoutLeagueInput;
  where: LeagueMessageWhereUniqueInput;
};

export type LeagueMessageUpdateWithWhereUniqueWithoutMemberInput = {
  data: LeagueMessageUpdateWithoutMemberInput;
  where: LeagueMessageWhereUniqueInput;
};

export type LeagueMessageUpdateWithoutLeagueInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  member?: InputMaybe<LeagueMemberUpdateOneRequiredWithoutLeagueMessagesNestedInput>;
  message_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message_type?: InputMaybe<EnumMessageTypeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumMessageStatusFieldUpdateOperationsInput>;
  week?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type LeagueMessageUpdateWithoutMemberInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  league?: InputMaybe<LeagueUpdateOneRequiredWithoutLeagueMessagesNestedInput>;
  message_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message_type?: InputMaybe<EnumMessageTypeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumMessageStatusFieldUpdateOperationsInput>;
  week?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type LeagueMessageUpsertWithWhereUniqueWithoutLeagueInput = {
  create: LeagueMessageCreateWithoutLeagueInput;
  update: LeagueMessageUpdateWithoutLeagueInput;
  where: LeagueMessageWhereUniqueInput;
};

export type LeagueMessageUpsertWithWhereUniqueWithoutMemberInput = {
  create: LeagueMessageCreateWithoutMemberInput;
  update: LeagueMessageUpdateWithoutMemberInput;
  where: LeagueMessageWhereUniqueInput;
};

export type LeagueMessageWhereInput = {
  AND?: InputMaybe<Array<LeagueMessageWhereInput>>;
  NOT?: InputMaybe<Array<LeagueMessageWhereInput>>;
  OR?: InputMaybe<Array<LeagueMessageWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  league?: InputMaybe<LeagueRelationFilter>;
  league_id?: InputMaybe<IntFilter>;
  member?: InputMaybe<LeagueMemberRelationFilter>;
  member_id?: InputMaybe<IntFilter>;
  message_id?: InputMaybe<StringFilter>;
  message_type?: InputMaybe<EnumMessageTypeFilter>;
  status?: InputMaybe<EnumMessageStatusFilter>;
  week?: InputMaybe<IntNullableFilter>;
};

export type LeagueMessageWhereUniqueInput = {
  message_id?: InputMaybe<Scalars['String']>;
};

export type LeagueMinAggregate = {
  __typename?: 'LeagueMinAggregate';
  created_by_user_id?: Maybe<Scalars['Int']>;
  created_time?: Maybe<Scalars['DateTime']>;
  late_policy?: Maybe<LatePolicy>;
  league_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  pick_policy?: Maybe<PickPolicy>;
  prior_league_id?: Maybe<Scalars['Int']>;
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
  prior_league_id?: InputMaybe<SortOrder>;
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
  late_policy?: InputMaybe<SortOrderInput>;
  league_id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  pick_policy?: InputMaybe<SortOrderInput>;
  prior_league_id?: InputMaybe<SortOrderInput>;
  reminder_policy?: InputMaybe<SortOrderInput>;
  scoring_type?: InputMaybe<SortOrderInput>;
  season?: InputMaybe<SortOrder>;
  share_code?: InputMaybe<SortOrderInput>;
  superbowl_competition?: InputMaybe<SortOrderInput>;
};

export type LeagueOrderByWithRelationInput = {
  EmailLogs?: InputMaybe<EmailLogsOrderByRelationAggregateInput>;
  LeagueMessages?: InputMaybe<LeagueMessageOrderByRelationAggregateInput>;
  WeekWinners?: InputMaybe<WeekWinnersOrderByRelationAggregateInput>;
  created_by_user_id?: InputMaybe<SortOrder>;
  created_time?: InputMaybe<SortOrder>;
  late_policy?: InputMaybe<SortOrderInput>;
  league_id?: InputMaybe<SortOrder>;
  leaguemembers?: InputMaybe<LeagueMemberOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  nextLeague?: InputMaybe<LeagueOrderByWithRelationInput>;
  people?: InputMaybe<UserOrderByWithRelationInput>;
  pick_policy?: InputMaybe<SortOrderInput>;
  priorLeague?: InputMaybe<LeagueOrderByWithRelationInput>;
  prior_league_id?: InputMaybe<SortOrderInput>;
  reminder_policy?: InputMaybe<SortOrderInput>;
  scoring_type?: InputMaybe<SortOrderInput>;
  season?: InputMaybe<SortOrder>;
  share_code?: InputMaybe<SortOrderInput>;
  superbowl_competition?: InputMaybe<SortOrderInput>;
};

export type LeagueRanking = {
  __typename?: 'LeagueRanking';
  correct: Scalars['Int'];
  id: Scalars['ID'];
  member: LeagueMember;
  ranking: Scalars['Int'];
  user: User;
  wrong: Scalars['Int'];
};

export type LeagueRelationFilter = {
  is?: InputMaybe<LeagueWhereInput>;
  isNot?: InputMaybe<LeagueWhereInput>;
};

export type LeagueRuleWithExplanation = {
  __typename?: 'LeagueRuleWithExplanation';
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export enum LeagueScalarFieldEnum {
  CreatedByUserId = 'created_by_user_id',
  CreatedTime = 'created_time',
  LatePolicy = 'late_policy',
  LeagueId = 'league_id',
  Name = 'name',
  PickPolicy = 'pick_policy',
  PriorLeagueId = 'prior_league_id',
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
  prior_league_id?: InputMaybe<IntNullableFilter>;
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
  prior_league_id?: InputMaybe<IntNullableWithAggregatesFilter>;
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
  prior_league_id?: Maybe<Scalars['Int']>;
  season?: Maybe<Scalars['Int']>;
};

export type LeagueSumOrderByAggregateInput = {
  created_by_user_id?: InputMaybe<SortOrder>;
  league_id?: InputMaybe<SortOrder>;
  prior_league_id?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
};

export type LeagueUpdateInput = {
  EmailLogs?: InputMaybe<EmailLogsUpdateManyWithoutLeagueNestedInput>;
  LeagueMessages?: InputMaybe<LeagueMessageUpdateManyWithoutLeagueNestedInput>;
  WeekWinners?: InputMaybe<WeekWinnersUpdateManyWithoutLeagueNestedInput>;
  created_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  late_policy?: InputMaybe<NullableEnumLatePolicyFieldUpdateOperationsInput>;
  leaguemembers?: InputMaybe<LeagueMemberUpdateManyWithoutLeaguesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nextLeague?: InputMaybe<LeagueUpdateOneWithoutPriorLeagueNestedInput>;
  people?: InputMaybe<UserUpdateOneRequiredWithoutLeaguesNestedInput>;
  pick_policy?: InputMaybe<NullableEnumPickPolicyFieldUpdateOperationsInput>;
  priorLeague?: InputMaybe<LeagueUpdateOneWithoutNextLeagueNestedInput>;
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

export type LeagueUpdateOneRequiredWithoutEmailLogsNestedInput = {
  connect?: InputMaybe<LeagueWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LeagueCreateOrConnectWithoutEmailLogsInput>;
  create?: InputMaybe<LeagueCreateWithoutEmailLogsInput>;
  update?: InputMaybe<LeagueUpdateWithoutEmailLogsInput>;
  upsert?: InputMaybe<LeagueUpsertWithoutEmailLogsInput>;
};

export type LeagueUpdateOneRequiredWithoutLeagueMessagesNestedInput = {
  connect?: InputMaybe<LeagueWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LeagueCreateOrConnectWithoutLeagueMessagesInput>;
  create?: InputMaybe<LeagueCreateWithoutLeagueMessagesInput>;
  update?: InputMaybe<LeagueUpdateWithoutLeagueMessagesInput>;
  upsert?: InputMaybe<LeagueUpsertWithoutLeagueMessagesInput>;
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

export type LeagueUpdateOneWithoutNextLeagueNestedInput = {
  connect?: InputMaybe<LeagueWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LeagueCreateOrConnectWithoutNextLeagueInput>;
  create?: InputMaybe<LeagueCreateWithoutNextLeagueInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<LeagueUpdateWithoutNextLeagueInput>;
  upsert?: InputMaybe<LeagueUpsertWithoutNextLeagueInput>;
};

export type LeagueUpdateOneWithoutPriorLeagueNestedInput = {
  connect?: InputMaybe<LeagueWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LeagueCreateOrConnectWithoutPriorLeagueInput>;
  create?: InputMaybe<LeagueCreateWithoutPriorLeagueInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<LeagueUpdateWithoutPriorLeagueInput>;
  upsert?: InputMaybe<LeagueUpsertWithoutPriorLeagueInput>;
};

export type LeagueUpdateWithWhereUniqueWithoutPeopleInput = {
  data: LeagueUpdateWithoutPeopleInput;
  where: LeagueWhereUniqueInput;
};

export type LeagueUpdateWithoutEmailLogsInput = {
  LeagueMessages?: InputMaybe<LeagueMessageUpdateManyWithoutLeagueNestedInput>;
  WeekWinners?: InputMaybe<WeekWinnersUpdateManyWithoutLeagueNestedInput>;
  created_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  late_policy?: InputMaybe<NullableEnumLatePolicyFieldUpdateOperationsInput>;
  leaguemembers?: InputMaybe<LeagueMemberUpdateManyWithoutLeaguesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nextLeague?: InputMaybe<LeagueUpdateOneWithoutPriorLeagueNestedInput>;
  people?: InputMaybe<UserUpdateOneRequiredWithoutLeaguesNestedInput>;
  pick_policy?: InputMaybe<NullableEnumPickPolicyFieldUpdateOperationsInput>;
  priorLeague?: InputMaybe<LeagueUpdateOneWithoutNextLeagueNestedInput>;
  reminder_policy?: InputMaybe<NullableEnumReminderPolicyFieldUpdateOperationsInput>;
  scoring_type?: InputMaybe<NullableEnumScoringTypeFieldUpdateOperationsInput>;
  season?: InputMaybe<IntFieldUpdateOperationsInput>;
  share_code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  superbowl_competition?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
};

export type LeagueUpdateWithoutLeagueMessagesInput = {
  EmailLogs?: InputMaybe<EmailLogsUpdateManyWithoutLeagueNestedInput>;
  WeekWinners?: InputMaybe<WeekWinnersUpdateManyWithoutLeagueNestedInput>;
  created_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  late_policy?: InputMaybe<NullableEnumLatePolicyFieldUpdateOperationsInput>;
  leaguemembers?: InputMaybe<LeagueMemberUpdateManyWithoutLeaguesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nextLeague?: InputMaybe<LeagueUpdateOneWithoutPriorLeagueNestedInput>;
  people?: InputMaybe<UserUpdateOneRequiredWithoutLeaguesNestedInput>;
  pick_policy?: InputMaybe<NullableEnumPickPolicyFieldUpdateOperationsInput>;
  priorLeague?: InputMaybe<LeagueUpdateOneWithoutNextLeagueNestedInput>;
  reminder_policy?: InputMaybe<NullableEnumReminderPolicyFieldUpdateOperationsInput>;
  scoring_type?: InputMaybe<NullableEnumScoringTypeFieldUpdateOperationsInput>;
  season?: InputMaybe<IntFieldUpdateOperationsInput>;
  share_code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  superbowl_competition?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
};

export type LeagueUpdateWithoutLeaguemembersInput = {
  EmailLogs?: InputMaybe<EmailLogsUpdateManyWithoutLeagueNestedInput>;
  LeagueMessages?: InputMaybe<LeagueMessageUpdateManyWithoutLeagueNestedInput>;
  WeekWinners?: InputMaybe<WeekWinnersUpdateManyWithoutLeagueNestedInput>;
  created_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  late_policy?: InputMaybe<NullableEnumLatePolicyFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nextLeague?: InputMaybe<LeagueUpdateOneWithoutPriorLeagueNestedInput>;
  people?: InputMaybe<UserUpdateOneRequiredWithoutLeaguesNestedInput>;
  pick_policy?: InputMaybe<NullableEnumPickPolicyFieldUpdateOperationsInput>;
  priorLeague?: InputMaybe<LeagueUpdateOneWithoutNextLeagueNestedInput>;
  reminder_policy?: InputMaybe<NullableEnumReminderPolicyFieldUpdateOperationsInput>;
  scoring_type?: InputMaybe<NullableEnumScoringTypeFieldUpdateOperationsInput>;
  season?: InputMaybe<IntFieldUpdateOperationsInput>;
  share_code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  superbowl_competition?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
};

export type LeagueUpdateWithoutNextLeagueInput = {
  EmailLogs?: InputMaybe<EmailLogsUpdateManyWithoutLeagueNestedInput>;
  LeagueMessages?: InputMaybe<LeagueMessageUpdateManyWithoutLeagueNestedInput>;
  WeekWinners?: InputMaybe<WeekWinnersUpdateManyWithoutLeagueNestedInput>;
  created_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  late_policy?: InputMaybe<NullableEnumLatePolicyFieldUpdateOperationsInput>;
  leaguemembers?: InputMaybe<LeagueMemberUpdateManyWithoutLeaguesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  people?: InputMaybe<UserUpdateOneRequiredWithoutLeaguesNestedInput>;
  pick_policy?: InputMaybe<NullableEnumPickPolicyFieldUpdateOperationsInput>;
  priorLeague?: InputMaybe<LeagueUpdateOneWithoutNextLeagueNestedInput>;
  reminder_policy?: InputMaybe<NullableEnumReminderPolicyFieldUpdateOperationsInput>;
  scoring_type?: InputMaybe<NullableEnumScoringTypeFieldUpdateOperationsInput>;
  season?: InputMaybe<IntFieldUpdateOperationsInput>;
  share_code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  superbowl_competition?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
};

export type LeagueUpdateWithoutPeopleInput = {
  EmailLogs?: InputMaybe<EmailLogsUpdateManyWithoutLeagueNestedInput>;
  LeagueMessages?: InputMaybe<LeagueMessageUpdateManyWithoutLeagueNestedInput>;
  WeekWinners?: InputMaybe<WeekWinnersUpdateManyWithoutLeagueNestedInput>;
  created_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  late_policy?: InputMaybe<NullableEnumLatePolicyFieldUpdateOperationsInput>;
  leaguemembers?: InputMaybe<LeagueMemberUpdateManyWithoutLeaguesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nextLeague?: InputMaybe<LeagueUpdateOneWithoutPriorLeagueNestedInput>;
  pick_policy?: InputMaybe<NullableEnumPickPolicyFieldUpdateOperationsInput>;
  priorLeague?: InputMaybe<LeagueUpdateOneWithoutNextLeagueNestedInput>;
  reminder_policy?: InputMaybe<NullableEnumReminderPolicyFieldUpdateOperationsInput>;
  scoring_type?: InputMaybe<NullableEnumScoringTypeFieldUpdateOperationsInput>;
  season?: InputMaybe<IntFieldUpdateOperationsInput>;
  share_code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  superbowl_competition?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
};

export type LeagueUpdateWithoutPriorLeagueInput = {
  EmailLogs?: InputMaybe<EmailLogsUpdateManyWithoutLeagueNestedInput>;
  LeagueMessages?: InputMaybe<LeagueMessageUpdateManyWithoutLeagueNestedInput>;
  WeekWinners?: InputMaybe<WeekWinnersUpdateManyWithoutLeagueNestedInput>;
  created_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  late_policy?: InputMaybe<NullableEnumLatePolicyFieldUpdateOperationsInput>;
  leaguemembers?: InputMaybe<LeagueMemberUpdateManyWithoutLeaguesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nextLeague?: InputMaybe<LeagueUpdateOneWithoutPriorLeagueNestedInput>;
  people?: InputMaybe<UserUpdateOneRequiredWithoutLeaguesNestedInput>;
  pick_policy?: InputMaybe<NullableEnumPickPolicyFieldUpdateOperationsInput>;
  reminder_policy?: InputMaybe<NullableEnumReminderPolicyFieldUpdateOperationsInput>;
  scoring_type?: InputMaybe<NullableEnumScoringTypeFieldUpdateOperationsInput>;
  season?: InputMaybe<IntFieldUpdateOperationsInput>;
  share_code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  superbowl_competition?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
};

export type LeagueUpdateWithoutWeekWinnersInput = {
  EmailLogs?: InputMaybe<EmailLogsUpdateManyWithoutLeagueNestedInput>;
  LeagueMessages?: InputMaybe<LeagueMessageUpdateManyWithoutLeagueNestedInput>;
  created_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  late_policy?: InputMaybe<NullableEnumLatePolicyFieldUpdateOperationsInput>;
  leaguemembers?: InputMaybe<LeagueMemberUpdateManyWithoutLeaguesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nextLeague?: InputMaybe<LeagueUpdateOneWithoutPriorLeagueNestedInput>;
  people?: InputMaybe<UserUpdateOneRequiredWithoutLeaguesNestedInput>;
  pick_policy?: InputMaybe<NullableEnumPickPolicyFieldUpdateOperationsInput>;
  priorLeague?: InputMaybe<LeagueUpdateOneWithoutNextLeagueNestedInput>;
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

export type LeagueUpsertWithoutEmailLogsInput = {
  create: LeagueCreateWithoutEmailLogsInput;
  update: LeagueUpdateWithoutEmailLogsInput;
};

export type LeagueUpsertWithoutLeagueMessagesInput = {
  create: LeagueCreateWithoutLeagueMessagesInput;
  update: LeagueUpdateWithoutLeagueMessagesInput;
};

export type LeagueUpsertWithoutLeaguemembersInput = {
  create: LeagueCreateWithoutLeaguemembersInput;
  update: LeagueUpdateWithoutLeaguemembersInput;
};

export type LeagueUpsertWithoutNextLeagueInput = {
  create: LeagueCreateWithoutNextLeagueInput;
  update: LeagueUpdateWithoutNextLeagueInput;
};

export type LeagueUpsertWithoutPriorLeagueInput = {
  create: LeagueCreateWithoutPriorLeagueInput;
  update: LeagueUpdateWithoutPriorLeagueInput;
};

export type LeagueUpsertWithoutWeekWinnersInput = {
  create: LeagueCreateWithoutWeekWinnersInput;
  update: LeagueUpdateWithoutWeekWinnersInput;
};

export type LeagueWhereInput = {
  AND?: InputMaybe<Array<LeagueWhereInput>>;
  EmailLogs?: InputMaybe<EmailLogsListRelationFilter>;
  LeagueMessages?: InputMaybe<LeagueMessageListRelationFilter>;
  NOT?: InputMaybe<Array<LeagueWhereInput>>;
  OR?: InputMaybe<Array<LeagueWhereInput>>;
  WeekWinners?: InputMaybe<WeekWinnersListRelationFilter>;
  created_by_user_id?: InputMaybe<IntFilter>;
  created_time?: InputMaybe<DateTimeFilter>;
  late_policy?: InputMaybe<EnumLatePolicyNullableFilter>;
  league_id?: InputMaybe<IntFilter>;
  leaguemembers?: InputMaybe<LeagueMemberListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  nextLeague?: InputMaybe<LeagueRelationFilter>;
  people?: InputMaybe<UserRelationFilter>;
  pick_policy?: InputMaybe<EnumPickPolicyNullableFilter>;
  priorLeague?: InputMaybe<LeagueRelationFilter>;
  prior_league_id?: InputMaybe<IntNullableFilter>;
  reminder_policy?: InputMaybe<EnumReminderPolicyNullableFilter>;
  scoring_type?: InputMaybe<EnumScoringTypeNullableFilter>;
  season?: InputMaybe<IntFilter>;
  share_code?: InputMaybe<StringNullableFilter>;
  superbowl_competition?: InputMaybe<BoolNullableFilter>;
};

export type LeagueWhereUniqueInput = {
  league_id?: InputMaybe<Scalars['Int']>;
  prior_league_id?: InputMaybe<Scalars['Int']>;
  share_code?: InputMaybe<Scalars['String']>;
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

export enum MessageStatus {
  Deleted = 'DELETED',
  Published = 'PUBLISHED'
}

export enum MessageType {
  LeagueMessage = 'LEAGUE_MESSAGE',
  WeekComment = 'WEEK_COMMENT'
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
  createManyEmailLogs: AffectedRowsOutput;
  createManyGame: AffectedRowsOutput;
  createManyLeague: AffectedRowsOutput;
  createManyLeagueMember: AffectedRowsOutput;
  createManyLeagueMessage: AffectedRowsOutput;
  createManyPick: AffectedRowsOutput;
  createManySuperbowl: AffectedRowsOutput;
  createManySuperbowlSquare: AffectedRowsOutput;
  createManyTeam: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createManyWeekWinners: AffectedRowsOutput;
  createOneEmailLogs: EmailLogs;
  createOneGame: Game;
  createOneLeague: League;
  createOneLeagueMember: LeagueMember;
  createOneLeagueMessage: LeagueMessage;
  createOnePick: Pick;
  createOneSuperbowl: Superbowl;
  createOneSuperbowlSquare: SuperbowlSquare;
  createOneTeam: Team;
  createOneUser: User;
  createOneWeekWinners: WeekWinners;
  deleteManyEmailLogs: AffectedRowsOutput;
  deleteManyGame: AffectedRowsOutput;
  deleteManyLeague: AffectedRowsOutput;
  deleteManyLeagueMember: AffectedRowsOutput;
  deleteManyLeagueMessage: AffectedRowsOutput;
  deleteManyPick: AffectedRowsOutput;
  deleteManySuperbowl: AffectedRowsOutput;
  deleteManySuperbowlSquare: AffectedRowsOutput;
  deleteManyTeam: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteManyWeekWinners: AffectedRowsOutput;
  deleteOneEmailLogs?: Maybe<EmailLogs>;
  deleteOneGame?: Maybe<Game>;
  deleteOneLeague?: Maybe<League>;
  deleteOneLeagueMember?: Maybe<LeagueMember>;
  deleteOneLeagueMessage?: Maybe<LeagueMessage>;
  deleteOnePick?: Maybe<Pick>;
  deleteOneSuperbowl?: Maybe<Superbowl>;
  deleteOneSuperbowlSquare?: Maybe<SuperbowlSquare>;
  deleteOneTeam?: Maybe<Team>;
  deleteOneUser?: Maybe<User>;
  deleteOneWeekWinners?: Maybe<WeekWinners>;
  makePicks: MakePicksResponse;
  register: RegisterResponse;
  updateManyEmailLogs: AffectedRowsOutput;
  updateManyGame: AffectedRowsOutput;
  updateManyLeague: AffectedRowsOutput;
  updateManyLeagueMember: AffectedRowsOutput;
  updateManyLeagueMessage: AffectedRowsOutput;
  updateManyPick: AffectedRowsOutput;
  updateManySuperbowl: AffectedRowsOutput;
  updateManySuperbowlSquare: AffectedRowsOutput;
  updateManyTeam: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateManyWeekWinners: AffectedRowsOutput;
  updateOneEmailLogs?: Maybe<EmailLogs>;
  updateOneGame?: Maybe<Game>;
  updateOneLeague?: Maybe<League>;
  updateOneLeagueMember?: Maybe<LeagueMember>;
  updateOneLeagueMessage?: Maybe<LeagueMessage>;
  updateOnePick?: Maybe<Pick>;
  updateOneSuperbowl?: Maybe<Superbowl>;
  updateOneSuperbowlSquare?: Maybe<SuperbowlSquare>;
  updateOneTeam?: Maybe<Team>;
  updateOneUser?: Maybe<User>;
  updateOneWeekWinners?: Maybe<WeekWinners>;
  upsertOneEmailLogs: EmailLogs;
  upsertOneGame: Game;
  upsertOneLeague: League;
  upsertOneLeagueMember: LeagueMember;
  upsertOneLeagueMessage: LeagueMessage;
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


export type MutationCreateManyEmailLogsArgs = {
  data: Array<EmailLogsCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
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


export type MutationCreateManyLeagueMessageArgs = {
  data: Array<LeagueMessageCreateManyInput>;
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


export type MutationCreateOneEmailLogsArgs = {
  data: EmailLogsCreateInput;
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


export type MutationCreateOneLeagueMessageArgs = {
  data: LeagueMessageCreateInput;
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


export type MutationDeleteManyEmailLogsArgs = {
  where?: InputMaybe<EmailLogsWhereInput>;
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


export type MutationDeleteManyLeagueMessageArgs = {
  where?: InputMaybe<LeagueMessageWhereInput>;
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


export type MutationDeleteOneEmailLogsArgs = {
  where: EmailLogsWhereUniqueInput;
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


export type MutationDeleteOneLeagueMessageArgs = {
  where: LeagueMessageWhereUniqueInput;
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
  league_id: Scalars['Int'];
  message?: InputMaybe<Scalars['String']>;
  override_member_id?: InputMaybe<Scalars['Int']>;
  picks: Array<GamePick>;
};


export type MutationRegisterArgs = {
  leagueCode: Scalars['String'];
  superbowlLoser: Scalars['Int'];
  superbowlScore: Scalars['Int'];
  superbowlWinner: Scalars['Int'];
  username: Scalars['String'];
};


export type MutationUpdateManyEmailLogsArgs = {
  data: EmailLogsUpdateManyMutationInput;
  where?: InputMaybe<EmailLogsWhereInput>;
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


export type MutationUpdateManyLeagueMessageArgs = {
  data: LeagueMessageUpdateManyMutationInput;
  where?: InputMaybe<LeagueMessageWhereInput>;
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


export type MutationUpdateOneEmailLogsArgs = {
  data: EmailLogsUpdateInput;
  where: EmailLogsWhereUniqueInput;
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


export type MutationUpdateOneLeagueMessageArgs = {
  data: LeagueMessageUpdateInput;
  where: LeagueMessageWhereUniqueInput;
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


export type MutationUpsertOneEmailLogsArgs = {
  create: EmailLogsCreateInput;
  update: EmailLogsUpdateInput;
  where: EmailLogsWhereUniqueInput;
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


export type MutationUpsertOneLeagueMessageArgs = {
  create: LeagueMessageCreateInput;
  update: LeagueMessageUpdateInput;
  where: LeagueMessageWhereUniqueInput;
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

export type NestedEnumEmailTypeFilter = {
  equals?: InputMaybe<EmailType>;
  in?: InputMaybe<Array<EmailType>>;
  not?: InputMaybe<NestedEnumEmailTypeFilter>;
  notIn?: InputMaybe<Array<EmailType>>;
};

export type NestedEnumEmailTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumEmailTypeFilter>;
  _min?: InputMaybe<NestedEnumEmailTypeFilter>;
  equals?: InputMaybe<EmailType>;
  in?: InputMaybe<Array<EmailType>>;
  not?: InputMaybe<NestedEnumEmailTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<EmailType>>;
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

export type NestedEnumMessageStatusFilter = {
  equals?: InputMaybe<MessageStatus>;
  in?: InputMaybe<Array<MessageStatus>>;
  not?: InputMaybe<NestedEnumMessageStatusFilter>;
  notIn?: InputMaybe<Array<MessageStatus>>;
};

export type NestedEnumMessageStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumMessageStatusFilter>;
  _min?: InputMaybe<NestedEnumMessageStatusFilter>;
  equals?: InputMaybe<MessageStatus>;
  in?: InputMaybe<Array<MessageStatus>>;
  not?: InputMaybe<NestedEnumMessageStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<MessageStatus>>;
};

export type NestedEnumMessageTypeFilter = {
  equals?: InputMaybe<MessageType>;
  in?: InputMaybe<Array<MessageType>>;
  not?: InputMaybe<NestedEnumMessageTypeFilter>;
  notIn?: InputMaybe<Array<MessageType>>;
};

export type NestedEnumMessageTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumMessageTypeFilter>;
  _min?: InputMaybe<NestedEnumMessageTypeFilter>;
  equals?: InputMaybe<MessageType>;
  in?: InputMaybe<Array<MessageType>>;
  not?: InputMaybe<NestedEnumMessageTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<MessageType>>;
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

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

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
  winnerTeam?: Maybe<Team>;
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
  winnerTeam?: InputMaybe<TeamCreateNestedOneWithoutPicks_ChosenInput>;
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

export type PickCreateManyWinnerTeamInput = {
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
};

export type PickCreateManyWinnerTeamInputEnvelope = {
  data: Array<PickCreateManyWinnerTeamInput>;
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

export type PickCreateNestedManyWithoutWinnerTeamInput = {
  connect?: InputMaybe<Array<PickWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PickCreateOrConnectWithoutWinnerTeamInput>>;
  create?: InputMaybe<Array<PickCreateWithoutWinnerTeamInput>>;
  createMany?: InputMaybe<PickCreateManyWinnerTeamInputEnvelope>;
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

export type PickCreateOrConnectWithoutWinnerTeamInput = {
  create: PickCreateWithoutWinnerTeamInput;
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
  winnerTeam?: InputMaybe<TeamCreateNestedOneWithoutPicks_ChosenInput>;
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
  winnerTeam?: InputMaybe<TeamCreateNestedOneWithoutPicks_ChosenInput>;
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
  winnerTeam?: InputMaybe<TeamCreateNestedOneWithoutPicks_ChosenInput>;
};

export type PickCreateWithoutWinnerTeamInput = {
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
  correct?: InputMaybe<SortOrderInput>;
  done?: InputMaybe<SortOrderInput>;
  gid?: InputMaybe<SortOrder>;
  is_random?: InputMaybe<SortOrderInput>;
  loser?: InputMaybe<SortOrderInput>;
  member_id?: InputMaybe<SortOrderInput>;
  pickid?: InputMaybe<SortOrder>;
  score?: InputMaybe<SortOrderInput>;
  season?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
  winner?: InputMaybe<SortOrderInput>;
};

export type PickOrderByWithRelationInput = {
  correct?: InputMaybe<SortOrderInput>;
  done?: InputMaybe<SortOrderInput>;
  games?: InputMaybe<GameOrderByWithRelationInput>;
  gid?: InputMaybe<SortOrder>;
  is_random?: InputMaybe<SortOrderInput>;
  leaguemembers?: InputMaybe<LeagueMemberOrderByWithRelationInput>;
  loser?: InputMaybe<SortOrderInput>;
  member_id?: InputMaybe<SortOrderInput>;
  people?: InputMaybe<UserOrderByWithRelationInput>;
  pickid?: InputMaybe<SortOrder>;
  score?: InputMaybe<SortOrderInput>;
  season?: InputMaybe<SortOrder>;
  ts?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
  week?: InputMaybe<SortOrder>;
  winner?: InputMaybe<SortOrderInput>;
  winnerTeam?: InputMaybe<TeamOrderByWithRelationInput>;
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
  winnerTeam?: InputMaybe<TeamUpdateOneWithoutPicks_ChosenNestedInput>;
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

export type PickUpdateManyWithWhereWithoutWinnerTeamInput = {
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

export type PickUpdateManyWithoutWinnerTeamNestedInput = {
  connect?: InputMaybe<Array<PickWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PickCreateOrConnectWithoutWinnerTeamInput>>;
  create?: InputMaybe<Array<PickCreateWithoutWinnerTeamInput>>;
  createMany?: InputMaybe<PickCreateManyWinnerTeamInputEnvelope>;
  delete?: InputMaybe<Array<PickWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PickScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PickWhereUniqueInput>>;
  set?: InputMaybe<Array<PickWhereUniqueInput>>;
  update?: InputMaybe<Array<PickUpdateWithWhereUniqueWithoutWinnerTeamInput>>;
  updateMany?: InputMaybe<Array<PickUpdateManyWithWhereWithoutWinnerTeamInput>>;
  upsert?: InputMaybe<Array<PickUpsertWithWhereUniqueWithoutWinnerTeamInput>>;
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

export type PickUpdateWithWhereUniqueWithoutWinnerTeamInput = {
  data: PickUpdateWithoutWinnerTeamInput;
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
  winnerTeam?: InputMaybe<TeamUpdateOneWithoutPicks_ChosenNestedInput>;
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
  winnerTeam?: InputMaybe<TeamUpdateOneWithoutPicks_ChosenNestedInput>;
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
  winnerTeam?: InputMaybe<TeamUpdateOneWithoutPicks_ChosenNestedInput>;
};

export type PickUpdateWithoutWinnerTeamInput = {
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

export type PickUpsertWithWhereUniqueWithoutWinnerTeamInput = {
  create: PickCreateWithoutWinnerTeamInput;
  update: PickUpdateWithoutWinnerTeamInput;
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
  winnerTeam?: InputMaybe<TeamRelationFilter>;
};

export type PickWhereUniqueInput = {
  pickid?: InputMaybe<Scalars['Int']>;
};

export type PicksByWeekResponse = {
  __typename?: 'PicksByWeekResponse';
  canView: Scalars['Boolean'];
  games: Array<Game>;
  id: Scalars['ID'];
  messages: Array<LeagueMessage>;
  picks: Array<Pick>;
  season?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateEmailLogs: AggregateEmailLogs;
  aggregateGame: AggregateGame;
  aggregateLeague: AggregateLeague;
  aggregateLeagueMember: AggregateLeagueMember;
  aggregateLeagueMessage: AggregateLeagueMessage;
  aggregatePick: AggregatePick;
  aggregateSuperbowl: AggregateSuperbowl;
  aggregateSuperbowlSquare: AggregateSuperbowlSquare;
  aggregateTeam: AggregateTeam;
  aggregateUser: AggregateUser;
  aggregateWeekWinners: AggregateWeekWinners;
  findFirstEmailLogs?: Maybe<EmailLogs>;
  findFirstEmailLogsOrThrow?: Maybe<EmailLogs>;
  findFirstGame?: Maybe<Game>;
  findFirstGameOrThrow?: Maybe<Game>;
  findFirstLeague?: Maybe<League>;
  findFirstLeagueMember?: Maybe<LeagueMember>;
  findFirstLeagueMemberOrThrow?: Maybe<LeagueMember>;
  findFirstLeagueMessage?: Maybe<LeagueMessage>;
  findFirstLeagueMessageOrThrow?: Maybe<LeagueMessage>;
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
  findManyEmailLogs: Array<EmailLogs>;
  findManyWeekWinners: Array<WeekWinners>;
  findUniqueEmailLogs?: Maybe<EmailLogs>;
  findUniqueEmailLogsOrThrow?: Maybe<EmailLogs>;
  findUniqueWeekWinners?: Maybe<WeekWinners>;
  findUniqueWeekWinnersOrThrow?: Maybe<WeekWinners>;
  game?: Maybe<Game>;
  games: Array<Game>;
  getGame?: Maybe<Game>;
  getLeague?: Maybe<League>;
  getLeagueMember?: Maybe<LeagueMember>;
  getLeagueMessage?: Maybe<LeagueMessage>;
  getPick?: Maybe<Pick>;
  getSuperbowl?: Maybe<Superbowl>;
  getSuperbowlSquare?: Maybe<SuperbowlSquare>;
  getTeam?: Maybe<Team>;
  getUser?: Maybe<User>;
  groupByEmailLogs: Array<EmailLogsGroupBy>;
  groupByGame: Array<GameGroupBy>;
  groupByLeague: Array<LeagueGroupBy>;
  groupByLeagueMember: Array<LeagueMemberGroupBy>;
  groupByLeagueMessage: Array<LeagueMessageGroupBy>;
  groupByPick: Array<PickGroupBy>;
  groupBySuperbowl: Array<SuperbowlGroupBy>;
  groupBySuperbowlSquare: Array<SuperbowlSquareGroupBy>;
  groupByTeam: Array<TeamGroupBy>;
  groupByUser: Array<UserGroupBy>;
  groupByWeekWinners: Array<WeekWinnersGroupBy>;
  league?: Maybe<League>;
  leagueMember?: Maybe<LeagueMember>;
  leagueMembers: Array<LeagueMember>;
  leagueMessage?: Maybe<LeagueMessage>;
  leagueMessages: Array<LeagueMessage>;
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
  weekForPicks: WeekForPicksResponse;
};


export type QueryAggregateEmailLogsArgs = {
  cursor?: InputMaybe<EmailLogsWhereUniqueInput>;
  orderBy?: InputMaybe<Array<EmailLogsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EmailLogsWhereInput>;
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


export type QueryAggregateLeagueMessageArgs = {
  cursor?: InputMaybe<LeagueMessageWhereUniqueInput>;
  orderBy?: InputMaybe<Array<LeagueMessageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LeagueMessageWhereInput>;
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


export type QueryFindFirstEmailLogsArgs = {
  cursor?: InputMaybe<EmailLogsWhereUniqueInput>;
  distinct?: InputMaybe<Array<EmailLogsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EmailLogsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EmailLogsWhereInput>;
};


export type QueryFindFirstEmailLogsOrThrowArgs = {
  cursor?: InputMaybe<EmailLogsWhereUniqueInput>;
  distinct?: InputMaybe<Array<EmailLogsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EmailLogsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EmailLogsWhereInput>;
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


export type QueryFindFirstLeagueMessageArgs = {
  cursor?: InputMaybe<LeagueMessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<LeagueMessageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LeagueMessageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LeagueMessageWhereInput>;
};


export type QueryFindFirstLeagueMessageOrThrowArgs = {
  cursor?: InputMaybe<LeagueMessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<LeagueMessageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LeagueMessageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LeagueMessageWhereInput>;
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


export type QueryFindManyEmailLogsArgs = {
  cursor?: InputMaybe<EmailLogsWhereUniqueInput>;
  distinct?: InputMaybe<Array<EmailLogsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EmailLogsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EmailLogsWhereInput>;
};


export type QueryFindManyWeekWinnersArgs = {
  cursor?: InputMaybe<WeekWinnersWhereUniqueInput>;
  distinct?: InputMaybe<Array<WeekWinnersScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<WeekWinnersOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WeekWinnersWhereInput>;
};


export type QueryFindUniqueEmailLogsArgs = {
  where: EmailLogsWhereUniqueInput;
};


export type QueryFindUniqueEmailLogsOrThrowArgs = {
  where: EmailLogsWhereUniqueInput;
};


export type QueryFindUniqueWeekWinnersArgs = {
  where: WeekWinnersWhereUniqueInput;
};


export type QueryFindUniqueWeekWinnersOrThrowArgs = {
  where: WeekWinnersWhereUniqueInput;
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


export type QueryGetLeagueMessageArgs = {
  where: LeagueMessageWhereUniqueInput;
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


export type QueryGroupByEmailLogsArgs = {
  by: Array<EmailLogsScalarFieldEnum>;
  having?: InputMaybe<EmailLogsScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<EmailLogsOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EmailLogsWhereInput>;
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


export type QueryGroupByLeagueMessageArgs = {
  by: Array<LeagueMessageScalarFieldEnum>;
  having?: InputMaybe<LeagueMessageScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<LeagueMessageOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LeagueMessageWhereInput>;
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


export type QueryLeagueMessageArgs = {
  where: LeagueMessageWhereUniqueInput;
};


export type QueryLeagueMessagesArgs = {
  cursor?: InputMaybe<LeagueMessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<LeagueMessageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LeagueMessageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LeagueMessageWhereInput>;
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


export type QueryWeekForPicksArgs = {
  leagueId: Scalars['Int'];
  memberId?: InputMaybe<Scalars['Int']>;
  override?: InputMaybe<Scalars['Boolean']>;
  week?: InputMaybe<Scalars['Int']>;
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

export type ResendEmail = {
  __typename?: 'ResendEmail';
  bcc?: Maybe<Array<Scalars['String']>>;
  cc?: Maybe<Array<Scalars['String']>>;
  created_at?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  html?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  last_event?: Maybe<Scalars['String']>;
  reply_to?: Maybe<Array<Scalars['String']>>;
  subject?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  to?: Maybe<Array<Scalars['String']>>;
};

export enum ScoringType {
  GameWinner = 'game_winner'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

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
  member_id?: InputMaybe<SortOrderInput>;
  pickid?: InputMaybe<SortOrder>;
  score?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrderInput>;
  ts?: InputMaybe<SortOrderInput>;
  uid?: InputMaybe<SortOrder>;
  winner?: InputMaybe<SortOrder>;
};

export type SuperbowlOrderByWithRelationInput = {
  leaguemembers?: InputMaybe<LeagueMemberOrderByWithRelationInput>;
  loser?: InputMaybe<SortOrder>;
  member_id?: InputMaybe<SortOrderInput>;
  pickid?: InputMaybe<SortOrder>;
  score?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrderInput>;
  teams_superbowl_loserToteams?: InputMaybe<TeamOrderByWithRelationInput>;
  teams_superbowl_winnerToteams?: InputMaybe<TeamOrderByWithRelationInput>;
  ts?: InputMaybe<SortOrderInput>;
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
  picks_chosen: Array<Pick>;
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


export type TeamPicks_ChosenArgs = {
  cursor?: InputMaybe<PickWhereUniqueInput>;
  distinct?: InputMaybe<Array<PickScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PickOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PickWhereInput>;
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
  picks_chosen: Scalars['Int'];
  superbowl_superbowl_loserToteams: Scalars['Int'];
  superbowl_superbowl_winnerToteams: Scalars['Int'];
};


export type TeamCountGames_Games_AwayToteamsArgs = {
  where?: InputMaybe<GameWhereInput>;
};


export type TeamCountGames_Games_HomeToteamsArgs = {
  where?: InputMaybe<GameWhereInput>;
};


export type TeamCountPicks_ChosenArgs = {
  where?: InputMaybe<PickWhereInput>;
};


export type TeamCountSuperbowl_Superbowl_LoserToteamsArgs = {
  where?: InputMaybe<SuperbowlWhereInput>;
};


export type TeamCountSuperbowl_Superbowl_WinnerToteamsArgs = {
  where?: InputMaybe<SuperbowlWhereInput>;
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
  picks_chosen?: InputMaybe<PickCreateNestedManyWithoutWinnerTeamInput>;
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

export type TeamCreateNestedOneWithoutPicks_ChosenInput = {
  connect?: InputMaybe<TeamWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TeamCreateOrConnectWithoutPicks_ChosenInput>;
  create?: InputMaybe<TeamCreateWithoutPicks_ChosenInput>;
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

export type TeamCreateOrConnectWithoutPicks_ChosenInput = {
  create: TeamCreateWithoutPicks_ChosenInput;
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
  picks_chosen?: InputMaybe<PickCreateNestedManyWithoutWinnerTeamInput>;
  superbowl_superbowl_loserToteams?: InputMaybe<SuperbowlCreateNestedManyWithoutTeams_Superbowl_LoserToteamsInput>;
  superbowl_superbowl_winnerToteams?: InputMaybe<SuperbowlCreateNestedManyWithoutTeams_Superbowl_WinnerToteamsInput>;
};

export type TeamCreateWithoutGames_Games_HomeToteamsInput = {
  abbrev?: InputMaybe<Scalars['String']>;
  conference?: InputMaybe<Scalars['String']>;
  games_games_awayToteams?: InputMaybe<GameCreateNestedManyWithoutTeams_Games_AwayToteamsInput>;
  loc: Scalars['String'];
  name: Scalars['String'];
  picks_chosen?: InputMaybe<PickCreateNestedManyWithoutWinnerTeamInput>;
  superbowl_superbowl_loserToteams?: InputMaybe<SuperbowlCreateNestedManyWithoutTeams_Superbowl_LoserToteamsInput>;
  superbowl_superbowl_winnerToteams?: InputMaybe<SuperbowlCreateNestedManyWithoutTeams_Superbowl_WinnerToteamsInput>;
};

export type TeamCreateWithoutPicks_ChosenInput = {
  abbrev?: InputMaybe<Scalars['String']>;
  conference?: InputMaybe<Scalars['String']>;
  games_games_awayToteams?: InputMaybe<GameCreateNestedManyWithoutTeams_Games_AwayToteamsInput>;
  games_games_homeToteams?: InputMaybe<GameCreateNestedManyWithoutTeams_Games_HomeToteamsInput>;
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
  picks_chosen?: InputMaybe<PickCreateNestedManyWithoutWinnerTeamInput>;
  superbowl_superbowl_winnerToteams?: InputMaybe<SuperbowlCreateNestedManyWithoutTeams_Superbowl_WinnerToteamsInput>;
};

export type TeamCreateWithoutSuperbowl_Superbowl_WinnerToteamsInput = {
  abbrev?: InputMaybe<Scalars['String']>;
  conference?: InputMaybe<Scalars['String']>;
  games_games_awayToteams?: InputMaybe<GameCreateNestedManyWithoutTeams_Games_AwayToteamsInput>;
  games_games_homeToteams?: InputMaybe<GameCreateNestedManyWithoutTeams_Games_HomeToteamsInput>;
  loc: Scalars['String'];
  name: Scalars['String'];
  picks_chosen?: InputMaybe<PickCreateNestedManyWithoutWinnerTeamInput>;
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
  abbrev?: InputMaybe<SortOrderInput>;
  conference?: InputMaybe<SortOrderInput>;
  loc?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  teamid?: InputMaybe<SortOrder>;
};

export type TeamOrderByWithRelationInput = {
  abbrev?: InputMaybe<SortOrderInput>;
  conference?: InputMaybe<SortOrderInput>;
  games_games_awayToteams?: InputMaybe<GameOrderByRelationAggregateInput>;
  games_games_homeToteams?: InputMaybe<GameOrderByRelationAggregateInput>;
  loc?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  picks_chosen?: InputMaybe<PickOrderByRelationAggregateInput>;
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
  picks_chosen?: InputMaybe<PickUpdateManyWithoutWinnerTeamNestedInput>;
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

export type TeamUpdateOneWithoutPicks_ChosenNestedInput = {
  connect?: InputMaybe<TeamWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TeamCreateOrConnectWithoutPicks_ChosenInput>;
  create?: InputMaybe<TeamCreateWithoutPicks_ChosenInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<TeamUpdateWithoutPicks_ChosenInput>;
  upsert?: InputMaybe<TeamUpsertWithoutPicks_ChosenInput>;
};

export type TeamUpdateWithoutGames_Games_AwayToteamsInput = {
  abbrev?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  conference?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  games_games_homeToteams?: InputMaybe<GameUpdateManyWithoutTeams_Games_HomeToteamsNestedInput>;
  loc?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  picks_chosen?: InputMaybe<PickUpdateManyWithoutWinnerTeamNestedInput>;
  superbowl_superbowl_loserToteams?: InputMaybe<SuperbowlUpdateManyWithoutTeams_Superbowl_LoserToteamsNestedInput>;
  superbowl_superbowl_winnerToteams?: InputMaybe<SuperbowlUpdateManyWithoutTeams_Superbowl_WinnerToteamsNestedInput>;
};

export type TeamUpdateWithoutGames_Games_HomeToteamsInput = {
  abbrev?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  conference?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  games_games_awayToteams?: InputMaybe<GameUpdateManyWithoutTeams_Games_AwayToteamsNestedInput>;
  loc?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  picks_chosen?: InputMaybe<PickUpdateManyWithoutWinnerTeamNestedInput>;
  superbowl_superbowl_loserToteams?: InputMaybe<SuperbowlUpdateManyWithoutTeams_Superbowl_LoserToteamsNestedInput>;
  superbowl_superbowl_winnerToteams?: InputMaybe<SuperbowlUpdateManyWithoutTeams_Superbowl_WinnerToteamsNestedInput>;
};

export type TeamUpdateWithoutPicks_ChosenInput = {
  abbrev?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  conference?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  games_games_awayToteams?: InputMaybe<GameUpdateManyWithoutTeams_Games_AwayToteamsNestedInput>;
  games_games_homeToteams?: InputMaybe<GameUpdateManyWithoutTeams_Games_HomeToteamsNestedInput>;
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
  picks_chosen?: InputMaybe<PickUpdateManyWithoutWinnerTeamNestedInput>;
  superbowl_superbowl_winnerToteams?: InputMaybe<SuperbowlUpdateManyWithoutTeams_Superbowl_WinnerToteamsNestedInput>;
};

export type TeamUpdateWithoutSuperbowl_Superbowl_WinnerToteamsInput = {
  abbrev?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  conference?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  games_games_awayToteams?: InputMaybe<GameUpdateManyWithoutTeams_Games_AwayToteamsNestedInput>;
  games_games_homeToteams?: InputMaybe<GameUpdateManyWithoutTeams_Games_HomeToteamsNestedInput>;
  loc?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  picks_chosen?: InputMaybe<PickUpdateManyWithoutWinnerTeamNestedInput>;
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

export type TeamUpsertWithoutPicks_ChosenInput = {
  create: TeamCreateWithoutPicks_ChosenInput;
  update: TeamUpdateWithoutPicks_ChosenInput;
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
  picks_chosen?: InputMaybe<PickListRelationFilter>;
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
  league?: Maybe<League>;
  leagueMember?: Maybe<LeagueMember>;
  leaguemembers: Array<LeagueMember>;
  leagues: Array<League>;
  lname: Scalars['String'];
  picks: Array<Pick>;
  season: Scalars['Int'];
  supabase_id?: Maybe<Scalars['String']>;
  uid: Scalars['Int'];
  username: Scalars['String'];
};


export type UserLeagueArgs = {
  league_id: Scalars['Int'];
};


export type UserLeagueMemberArgs = {
  league_id: Scalars['Int'];
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


export type UserCountLeaguemembersArgs = {
  where?: InputMaybe<LeagueMemberWhereInput>;
};


export type UserCountLeaguesArgs = {
  where?: InputMaybe<LeagueWhereInput>;
};


export type UserCountPicksArgs = {
  where?: InputMaybe<PickWhereInput>;
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
  supabase_id: Scalars['Int'];
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
  supabase_id?: InputMaybe<SortOrder>;
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
  supabase_id?: InputMaybe<Scalars['String']>;
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
  supabase_id?: InputMaybe<Scalars['String']>;
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
  supabase_id?: InputMaybe<Scalars['String']>;
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
  supabase_id?: InputMaybe<Scalars['String']>;
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
  supabase_id?: InputMaybe<Scalars['String']>;
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
  supabase_id?: Maybe<Scalars['String']>;
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
  supabase_id?: Maybe<Scalars['String']>;
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
  supabase_id?: InputMaybe<SortOrder>;
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
  supabase_id?: Maybe<Scalars['String']>;
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
  supabase_id?: InputMaybe<SortOrder>;
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
  email2?: InputMaybe<SortOrderInput>;
  fname?: InputMaybe<SortOrder>;
  google_email?: InputMaybe<SortOrderInput>;
  google_photo_url?: InputMaybe<SortOrderInput>;
  google_userid?: InputMaybe<SortOrderInput>;
  lname?: InputMaybe<SortOrder>;
  season?: InputMaybe<SortOrder>;
  supabase_id?: InputMaybe<SortOrderInput>;
  uid?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  email?: InputMaybe<SortOrder>;
  email2?: InputMaybe<SortOrderInput>;
  fname?: InputMaybe<SortOrder>;
  google_email?: InputMaybe<SortOrderInput>;
  google_photo_url?: InputMaybe<SortOrderInput>;
  google_userid?: InputMaybe<SortOrderInput>;
  leaguemembers?: InputMaybe<LeagueMemberOrderByRelationAggregateInput>;
  leagues?: InputMaybe<LeagueOrderByRelationAggregateInput>;
  lname?: InputMaybe<SortOrder>;
  picks?: InputMaybe<PickOrderByRelationAggregateInput>;
  season?: InputMaybe<SortOrder>;
  supabase_id?: InputMaybe<SortOrderInput>;
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
  SupabaseId = 'supabase_id',
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
  supabase_id?: InputMaybe<StringNullableWithAggregatesFilter>;
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
  supabase_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
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
  supabase_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
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
  supabase_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
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
  supabase_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
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
  supabase_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
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
  supabase_id?: InputMaybe<StringNullableFilter>;
  uid?: InputMaybe<IntFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  supabase_id?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['Int']>;
};

export type WeekForPicksResponse = {
  __typename?: 'WeekForPicksResponse';
  existingPicks: Array<Pick>;
  games: Array<Game>;
  id: Scalars['ID'];
  leagueMember?: Maybe<LeagueMember>;
  messages: Array<LeagueMessage>;
  season?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
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

export type LeagueMemberQueryVariables = Exact<{
  memberId: Scalars['Int'];
}>;


export type LeagueMemberQuery = { __typename?: 'Query', leagueMember?: { __typename?: 'LeagueMember', id: string, membership_id: number, paid?: boolean | null, people: { __typename?: 'User', id: string, username: string } } | null };

export type LeagueAdminQueryVariables = Exact<{
  leagueId: Scalars['Int'];
}>;


export type LeagueAdminQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, uid: number, username: string, leaguemembers: Array<{ __typename?: 'LeagueMember', id: string, role?: MemberRole | null }> } | null, league?: { __typename?: 'League', id: string, league_id: number, name: string, memberpeople: Array<{ __typename?: 'LeagueMemberPeople', id: string, member: { __typename?: 'LeagueMember', id: string, paid?: boolean | null, membership_id: number, hasPickedNextGame: boolean, picks: Array<{ __typename?: 'Pick', id: string, week: number, correct?: number | null }> }, user: { __typename?: 'User', id: string, uid: number, username: string, email: string } }> } | null, weekForPicks: { __typename?: 'WeekForPicksResponse', id: string, week?: number | null } };

export type EditProfileQueryVariables = Exact<{
  leagueId: Scalars['Int'];
}>;


export type EditProfileQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, username: string, leagueMember?: { __typename?: 'LeagueMember', id: string, superbowl: Array<{ __typename?: 'Superbowl', id: string, pickid: number, score: number, teams_superbowl_loserToteams: { __typename?: 'Team', id: string, teamid: number, loc: string, name: string, abbrev?: string | null, conference?: string | null }, teams_superbowl_winnerToteams: { __typename?: 'Team', id: string, teamid: number, loc: string, name: string, abbrev?: string | null, conference?: string | null } }>, leagues: { __typename?: 'League', id: string, name: string, status: LeagueStatus } } | null } | null };

export type SeasonCorrectPicksQueryVariables = Exact<{
  league_id: Scalars['Int'];
}>;


export type SeasonCorrectPicksQuery = { __typename?: 'Query', leagueMembers: Array<{ __typename?: 'LeagueMember', id: string, membership_id: number, people: { __typename?: 'User', id: string, uid: number, username: string }, aggregatePick: { __typename?: 'AggregateResponse', count: number } }> };

export type GamesByLeagueQueryVariables = Exact<{
  leagueId: Scalars['Int'];
  where?: InputMaybe<GameWhereInput>;
}>;


export type GamesByLeagueQuery = { __typename?: 'Query', league?: { __typename?: 'League', id: string, games: Array<{ __typename?: 'Game', id: string, gid: number, week: number, season: number, awayscore?: number | null, homescore?: number | null, ts: any, done?: boolean | null, winner?: number | null, is_tiebreaker?: boolean | null, teams_games_awayToteams: { __typename?: 'Team', id: string, teamid: number, abbrev?: string | null }, teams_games_homeToteams: { __typename?: 'Team', id: string, teamid: number, abbrev?: string | null } }> } | null };

export type GamesBySeasonQueryVariables = Exact<{
  season: Scalars['Int'];
}>;


export type GamesBySeasonQuery = { __typename?: 'Query', games: Array<{ __typename?: 'Game', id: string, gid: number, awayscore?: number | null, homescore?: number | null, ts: any, done?: boolean | null, winner?: number | null, is_tiebreaker?: boolean | null, teams_games_awayToteams: { __typename?: 'Team', id: string, teamid: number, abbrev?: string | null }, teams_games_homeToteams: { __typename?: 'Team', id: string, teamid: number, abbrev?: string | null } }> };

export type GamesByWeekQueryVariables = Exact<{
  season: Scalars['Int'];
  week: Scalars['Int'];
}>;


export type GamesByWeekQuery = { __typename?: 'Query', games: Array<{ __typename?: 'Game', id: string, gid: number, week: number, season: number, started: boolean, awayscore?: number | null, homescore?: number | null, ts: any, done?: boolean | null, homerecord?: string | null, awayrecord?: string | null, winner?: number | null, is_tiebreaker?: boolean | null, teams_games_awayToteams: { __typename?: 'Team', id: string, teamid: number, abbrev?: string | null }, teams_games_homeToteams: { __typename?: 'Team', id: string, teamid: number, abbrev?: string | null } }> };

export type LeagueQueryVariables = Exact<{
  leagueId: Scalars['Int'];
}>;


export type LeagueQuery = { __typename?: 'Query', league?: { __typename?: 'League', id: string, name: string, league_id: number, pick_policy?: PickPolicy | null, late_policy?: LatePolicy | null, superbowl_competition?: boolean | null, viewer?: { __typename?: 'LeagueMember', id: string, membership_id: number, people: { __typename?: 'User', id: string, uid: number, username: string } } | null } | null };

export type FindLeagueMembersQueryVariables = Exact<{
  league_id: Scalars['Int'];
}>;


export type FindLeagueMembersQuery = { __typename?: 'Query', leagueMembers: Array<{ __typename?: 'LeagueMember', id: string, membership_id: number, people: { __typename?: 'User', id: string, uid: number, username: string, email: string }, leagues: { __typename?: 'League', id: string, name: string } }> };

export type MakePicksMutationVariables = Exact<{
  picks: Array<GamePick> | GamePick;
  leagueId: Scalars['Int'];
  overrideMemberId?: InputMaybe<Scalars['Int']>;
  message?: InputMaybe<Scalars['String']>;
}>;


export type MakePicksMutation = { __typename?: 'Mutation', makePicks: { __typename?: 'MakePicksResponse', user: { __typename?: 'User', id: string, username: string, email: string, leagueMember?: { __typename?: 'LeagueMember', id: string, hasPickedNextGame: boolean } | null } } };

export type PeopleWithLeaguesQueryVariables = Exact<{ [key: string]: never; }>;


export type PeopleWithLeaguesQuery = { __typename?: 'Query', leagueMembers: Array<{ __typename?: 'LeagueMember', id: string, league_id: number, membership_id: number, people: { __typename?: 'User', id: string, uid: number, username: string } }> };

export type PicksByWeekQueryVariables = Exact<{
  league_id: Scalars['Int'];
  week?: InputMaybe<Scalars['Int']>;
}>;


export type PicksByWeekQuery = { __typename?: 'Query', picksByWeek: { __typename?: 'PicksByWeekResponse', id: string, week?: number | null, season?: number | null, canView: boolean, games: Array<{ __typename?: 'Game', id: string, gid: number, ts: any, done?: boolean | null, home: number, away: number, started: boolean, winner?: number | null, homerecord?: string | null, awayrecord?: string | null, homescore?: number | null, awayscore?: number | null, liveStatus?: { __typename?: 'GameLive', id: string, currentQuarter?: number | null, currentQuarterSecondsRemaining?: number | null, playedStatus?: MsfGamePlayedStatus | null } | null, teams_games_homeToteams: { __typename?: 'Team', id: string, teamid: number, abbrev?: string | null }, teams_games_awayToteams: { __typename?: 'Team', id: string, abbrev?: string | null, teamid: number } }>, picks: Array<{ __typename?: 'Pick', id: string, gid: number, pickid: number, member_id?: number | null, winner?: number | null, correct?: number | null, score?: number | null }>, messages: Array<{ __typename?: 'LeagueMessage', id: string, message_id: string, league_id: number, member_id: number, content: string, createdAt: any }> }, league?: { __typename?: 'League', id: string, league_id: number, late_policy?: LatePolicy | null } | null };

export type ProfileQueryVariables = Exact<{
  user_id: Scalars['Int'];
}>;


export type ProfileQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, uid: number, username: string } | null, picks: Array<{ __typename?: 'PickGroupBy', correct?: number | null, member_id?: number | null, _count?: { __typename?: 'PickCountAggregate', pickid: number } | null }>, members: Array<{ __typename?: 'LeagueMember', id: string, membership_id: number, leagues: { __typename?: 'League', id: string, name: string, league_id: number } }> };

export type RegisterMutationVariables = Exact<{
  leagueCode: Scalars['String'];
  username: Scalars['String'];
  superbowlWinner: Scalars['Int'];
  superbowlLoser: Scalars['Int'];
  superbowlScore: Scalars['Int'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'RegisterResponse', success: boolean, user: { __typename?: 'User', id: string, username: string, uid: number }, membership: { __typename?: 'LeagueMember', id: string, league_id: number, leagues: { __typename?: 'League', id: string, name: string } } } };

export type SuperbowlTeamFragment = { __typename?: 'Team', id: string, abbrev?: string | null, conference?: string | null, loc: string, name: string, teamid: number };

export type SuperbowlPicksQueryVariables = Exact<{
  leagueId: Scalars['Int'];
}>;


export type SuperbowlPicksQuery = { __typename?: 'Query', superbowls: Array<{ __typename?: 'Superbowl', id: string, score: number, season?: number | null, leaguemembers?: { __typename?: 'LeagueMember', id: string, membership_id: number, people: { __typename?: 'User', id: string, uid: number, username: string } } | null, teams_superbowl_loserToteams: { __typename?: 'Team', id: string, abbrev?: string | null, conference?: string | null, loc: string, name: string, teamid: number }, teams_superbowl_winnerToteams: { __typename?: 'Team', id: string, abbrev?: string | null, conference?: string | null, loc: string, name: string, teamid: number } }> };

export type AllTeamsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTeamsQuery = { __typename?: 'Query', teams: Array<{ __typename?: 'Team', id: string, teamid: number, abbrev?: string | null, loc: string, name: string, conference?: string | null }> };

export type WeekForPicksQueryVariables = Exact<{
  leagueId: Scalars['Int'];
  memberId?: InputMaybe<Scalars['Int']>;
  override?: InputMaybe<Scalars['Boolean']>;
  week?: InputMaybe<Scalars['Int']>;
}>;


export type WeekForPicksQuery = { __typename?: 'Query', weekForPicks: { __typename?: 'WeekForPicksResponse', id: string, week?: number | null, season?: number | null, games: Array<{ __typename?: 'Game', id: string, gid: number, week: number, started: boolean, season: number, awayscore?: number | null, homescore?: number | null, ts: any, done?: boolean | null, homerecord?: string | null, awayrecord?: string | null, winner?: number | null, is_tiebreaker?: boolean | null, teams_games_awayToteams: { __typename?: 'Team', id: string, teamid: number, abbrev?: string | null }, teams_games_homeToteams: { __typename?: 'Team', id: string, teamid: number, abbrev?: string | null } }>, existingPicks: Array<{ __typename?: 'Pick', id: string, winner?: number | null, score?: number | null }>, leagueMember?: { __typename?: 'LeagueMember', id: string, membership_id: number, people: { __typename?: 'User', id: string, username: string } } | null } };

export type WinnersQueryVariables = Exact<{
  league_id: Scalars['Int'];
}>;


export type WinnersQuery = { __typename?: 'Query', findManyWeekWinners: Array<{ __typename?: 'WeekWinners', id: number, week: number, correct_count: number, member: { __typename?: 'LeagueMember', id: string, people: { __typename?: 'User', id: string, uid: number, username: string } } }> };

export type LeaguePageMemberViewerQueryVariables = Exact<{
  leagueId: Scalars['Int'];
}>;


export type LeaguePageMemberViewerQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, leagueMember?: { __typename?: 'LeagueMember', id: string, membership_id: number, league_id: number } | null } | null };

export type DownloadLeaguePlayersQueryVariables = Exact<{
  leagueId: Scalars['Int'];
}>;


export type DownloadLeaguePlayersQuery = { __typename?: 'Query', league?: { __typename?: 'League', id: string, name: string, memberpeople: Array<{ __typename?: 'LeagueMemberPeople', id: string, member: { __typename?: 'LeagueMember', id: string, paid?: boolean | null }, user: { __typename?: 'User', id: string, username: string, email: string } }> } | null };

export type MarkAsPaidMutationVariables = Exact<{
  membership_id: Scalars['Int'];
  paid: Scalars['Boolean'];
}>;


export type MarkAsPaidMutation = { __typename?: 'Mutation', updateOneLeagueMember?: { __typename?: 'LeagueMember', id: string, paid?: boolean | null } | null };

export type MemberEmailsQueryVariables = Exact<{
  member_id: Scalars['Int'];
}>;


export type MemberEmailsQuery = { __typename?: 'Query', leagueMember?: { __typename?: 'LeagueMember', EmailLogs: Array<{ __typename?: 'EmailLogs', ts: any, email?: { __typename?: 'ResendEmail', bcc?: Array<string> | null, cc?: Array<string> | null, created_at?: string | null, from?: string | null, html?: string | null, id: string, last_event?: string | null, reply_to?: Array<string> | null, subject?: string | null, text?: string | null, to?: Array<string> | null } | null }> } | null };

export type CreateLeagueMutationVariables = Exact<{
  data: CreateLeagueInput;
}>;


export type CreateLeagueMutation = { __typename?: 'Mutation', createLeague: { __typename?: 'League', id: string, league_id: number, late_policy?: LatePolicy | null, pick_policy?: PickPolicy | null, reminder_policy?: ReminderPolicy | null, superbowl_competition?: boolean | null, scoring_type?: ScoringType | null, name: string, share_code?: string | null } };

export type SuperbowlPickQueryVariables = Exact<{
  superbowlPickId: Scalars['Int'];
}>;


export type SuperbowlPickQuery = { __typename?: 'Query', superbowl?: { __typename?: 'Superbowl', id: string, pickid: number, member_id?: number | null, winner: number, loser: number, score: number, teams_superbowl_loserToteams: { __typename?: 'Team', id: string, teamid: number, loc: string, name: string, abbrev?: string | null, conference?: string | null }, teams_superbowl_winnerToteams: { __typename?: 'Team', id: string, teamid: number, loc: string, name: string, abbrev?: string | null, conference?: string | null } } | null };

export type UpdateSuperbowlMutationVariables = Exact<{
  data: SuperbowlUpdateInput;
  where: SuperbowlWhereUniqueInput;
}>;


export type UpdateSuperbowlMutation = { __typename?: 'Mutation', updateOneSuperbowl?: { __typename?: 'Superbowl', id: string, pickid: number, member_id?: number | null, winner: number, loser: number, score: number, teams_superbowl_loserToteams: { __typename?: 'Team', id: string, teamid: number, loc: string, name: string, abbrev?: string | null, conference?: string | null }, teams_superbowl_winnerToteams: { __typename?: 'Team', id: string, teamid: number, loc: string, name: string, abbrev?: string | null, conference?: string | null } } | null };

export type HomeQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, leaguemembers: Array<{ __typename?: 'LeagueMember', id: string, membership_id: number, role?: MemberRole | null, hasPickedNextGame: boolean, nextGame?: { __typename?: 'Game', id: string, gid: number, ts: any } | null, leagues: { __typename?: 'League', id: string, league_id: number, name: string, season: number, status: LeagueStatus, share_code?: string | null, rankings: Array<{ __typename?: 'LeagueRanking', id: string, correct: number, wrong: number, ranking: number, user: { __typename?: 'User', id: string, uid: number, username: string }, member: { __typename?: 'LeagueMember', id: string, membership_id: number } }>, aggregateLeagueMember: { __typename?: 'AggregateResponse', count: number }, WeekWinners: Array<{ __typename?: 'WeekWinners', id: number, membership_id: number, week: number }> }, correctPicks: { __typename?: 'AggregateResponse', count: number }, wrongPicks: { __typename?: 'AggregateResponse', count: number } }> } | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, uid: number, email: string, username: string, leagues: Array<{ __typename?: 'League', id: string, league_id: number, name: string }> } | null };

export type LeagueRegistrationQueryVariables = Exact<{
  leagueCode: Scalars['String'];
}>;


export type LeagueRegistrationQuery = { __typename?: 'Query', league?: { __typename?: 'League', id: string, share_code?: string | null, name: string, status: LeagueStatus, reminder_policy?: ReminderPolicy | null, late_policy?: LatePolicy | null, pick_policy?: PickPolicy | null, scoring_type?: ScoringType | null, superbowl_competition?: boolean | null, viewer?: { __typename?: 'LeagueMember', id: string, membership_id: number } | null, _count?: { __typename?: 'LeagueCount', leaguemembers: number } | null, rules: Array<{ __typename?: 'LeagueRuleWithExplanation', id: string, name: string, description: string }>, priorLeague?: { __typename?: 'League', id: string, leaguemembers: Array<{ __typename?: 'LeagueMember', id: string, people: { __typename?: 'User', id: string, username: string, email: string, uid: number } }> } | null } | null, teams: Array<{ __typename?: 'Team', id: string, abbrev?: string | null, conference?: string | null, teamid: number, loc: string, name: string }> };

export type LeagueMenuFragment = { __typename?: 'LeagueMember', id: string, role?: MemberRole | null, leagues: { __typename?: 'League', id: string, league_id: number, status: LeagueStatus } };

export type CreateMessageMutationVariables = Exact<{
  data: LeagueMessageCreateInput;
}>;


export type CreateMessageMutation = { __typename?: 'Mutation', createOneLeagueMessage: { __typename?: 'LeagueMessage', id: string, league_id: number, member_id: number, content: string, createdAt: any } };

export type LeagueMostRecentlyStartedGameQueryVariables = Exact<{
  league_id: Scalars['Int'];
}>;


export type LeagueMostRecentlyStartedGameQuery = { __typename?: 'Query', league?: { __typename?: 'League', id: string, mostRecentlyStartedGame?: { __typename?: 'Game', id: string, gid: number, week: number, season: number, ts: any, teams_games_homeToteams: { __typename?: 'Team', id: string, abbrev?: string | null }, teams_games_awayToteams: { __typename?: 'Team', id: string, abbrev?: string | null } } | null } | null };

export type DeleteMessageMutationVariables = Exact<{
  messageId: Scalars['String'];
}>;


export type DeleteMessageMutation = { __typename?: 'Mutation', updateOneLeagueMessage?: { __typename?: 'LeagueMessage', message_id: string } | null };

export const SuperbowlTeamFragmentDoc = gql`
    fragment SuperbowlTeam on Team {
  id
  abbrev
  conference
  loc
  name
  teamid
}
    `;
export const LeagueMenuFragmentDoc = gql`
    fragment LeagueMenu on LeagueMember {
  id
  role
  leagues {
    id
    league_id
    status
  }
}
    `;
export const LeagueMemberDocument = gql`
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

/**
 * __useLeagueMemberQuery__
 *
 * To run a query within a React component, call `useLeagueMemberQuery` and pass it any options that fit your needs.
 * When your component renders, `useLeagueMemberQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLeagueMemberQuery({
 *   variables: {
 *      memberId: // value for 'memberId'
 *   },
 * });
 */
export function useLeagueMemberQuery(baseOptions: Apollo.QueryHookOptions<LeagueMemberQuery, LeagueMemberQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LeagueMemberQuery, LeagueMemberQueryVariables>(LeagueMemberDocument, options);
      }
export function useLeagueMemberLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LeagueMemberQuery, LeagueMemberQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LeagueMemberQuery, LeagueMemberQueryVariables>(LeagueMemberDocument, options);
        }
export type LeagueMemberQueryHookResult = ReturnType<typeof useLeagueMemberQuery>;
export type LeagueMemberLazyQueryHookResult = ReturnType<typeof useLeagueMemberLazyQuery>;
export type LeagueMemberQueryResult = Apollo.QueryResult<LeagueMemberQuery, LeagueMemberQueryVariables>;
export const LeagueAdminDocument = gql`
    query LeagueAdmin($leagueId: Int!) {
  me {
    id
    uid
    username
    leaguemembers(where: {league_id: {equals: $leagueId}}) {
      id
      role
    }
  }
  league(where: {league_id: $leagueId}) {
    id
    league_id
    name
    memberpeople {
      id
      member {
        id
        paid
        membership_id
        hasPickedNextGame
        picks {
          id
          week
          correct
        }
      }
      user {
        id
        uid
        username
        email
      }
    }
  }
  weekForPicks(leagueId: $leagueId) {
    id
    week
  }
}
    `;

/**
 * __useLeagueAdminQuery__
 *
 * To run a query within a React component, call `useLeagueAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useLeagueAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLeagueAdminQuery({
 *   variables: {
 *      leagueId: // value for 'leagueId'
 *   },
 * });
 */
export function useLeagueAdminQuery(baseOptions: Apollo.QueryHookOptions<LeagueAdminQuery, LeagueAdminQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LeagueAdminQuery, LeagueAdminQueryVariables>(LeagueAdminDocument, options);
      }
export function useLeagueAdminLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LeagueAdminQuery, LeagueAdminQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LeagueAdminQuery, LeagueAdminQueryVariables>(LeagueAdminDocument, options);
        }
export type LeagueAdminQueryHookResult = ReturnType<typeof useLeagueAdminQuery>;
export type LeagueAdminLazyQueryHookResult = ReturnType<typeof useLeagueAdminLazyQuery>;
export type LeagueAdminQueryResult = Apollo.QueryResult<LeagueAdminQuery, LeagueAdminQueryVariables>;
export const EditProfileDocument = gql`
    query EditProfile($leagueId: Int!) {
  me {
    id
    username
    leagueMember(league_id: $leagueId) {
      id
      superbowl {
        id
        pickid
        score
        teams_superbowl_loserToteams {
          id
          teamid
          loc
          name
          abbrev
          conference
        }
        teams_superbowl_winnerToteams {
          id
          teamid
          loc
          name
          abbrev
          conference
        }
      }
      leagues {
        id
        name
        status
      }
    }
  }
}
    `;

/**
 * __useEditProfileQuery__
 *
 * To run a query within a React component, call `useEditProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useEditProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEditProfileQuery({
 *   variables: {
 *      leagueId: // value for 'leagueId'
 *   },
 * });
 */
export function useEditProfileQuery(baseOptions: Apollo.QueryHookOptions<EditProfileQuery, EditProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EditProfileQuery, EditProfileQueryVariables>(EditProfileDocument, options);
      }
export function useEditProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EditProfileQuery, EditProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EditProfileQuery, EditProfileQueryVariables>(EditProfileDocument, options);
        }
export type EditProfileQueryHookResult = ReturnType<typeof useEditProfileQuery>;
export type EditProfileLazyQueryHookResult = ReturnType<typeof useEditProfileLazyQuery>;
export type EditProfileQueryResult = Apollo.QueryResult<EditProfileQuery, EditProfileQueryVariables>;
export const SeasonCorrectPicksDocument = gql`
    query SeasonCorrectPicks($league_id: Int!) {
  leagueMembers(where: {league_id: {equals: $league_id}}) {
    id
    membership_id
    people {
      id
      uid
      username
    }
    aggregatePick(where: {correct: {equals: 1}}) {
      count
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
export const GamesByLeagueDocument = gql`
    query GamesByLeague($leagueId: Int!, $where: GameWhereInput) {
  league(where: {league_id: $leagueId}) {
    id
    games(where: $where) {
      id
      gid
      week
      season
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
    started
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
export const LeagueDocument = gql`
    query League($leagueId: Int!) {
  league(where: {league_id: $leagueId}) {
    id
    name
    league_id
    pick_policy
    late_policy
    superbowl_competition
    viewer {
      id
      membership_id
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
 * __useLeagueQuery__
 *
 * To run a query within a React component, call `useLeagueQuery` and pass it any options that fit your needs.
 * When your component renders, `useLeagueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLeagueQuery({
 *   variables: {
 *      leagueId: // value for 'leagueId'
 *   },
 * });
 */
export function useLeagueQuery(baseOptions: Apollo.QueryHookOptions<LeagueQuery, LeagueQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LeagueQuery, LeagueQueryVariables>(LeagueDocument, options);
      }
export function useLeagueLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LeagueQuery, LeagueQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LeagueQuery, LeagueQueryVariables>(LeagueDocument, options);
        }
export type LeagueQueryHookResult = ReturnType<typeof useLeagueQuery>;
export type LeagueLazyQueryHookResult = ReturnType<typeof useLeagueLazyQuery>;
export type LeagueQueryResult = Apollo.QueryResult<LeagueQuery, LeagueQueryVariables>;
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
    mutation MakePicks($picks: [GamePick!]!, $leagueId: Int!, $overrideMemberId: Int, $message: String) {
  makePicks(
    picks: $picks
    league_id: $leagueId
    override_member_id: $overrideMemberId
    message: $message
  ) {
    user {
      id
      username
      email
      leagueMember(league_id: $leagueId) {
        id
        hasPickedNextGame
      }
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
 *      leagueId: // value for 'leagueId'
 *      overrideMemberId: // value for 'overrideMemberId'
 *      message: // value for 'message'
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
    query PicksByWeek($league_id: Int!, $week: Int) {
  picksByWeek(league_id: $league_id, week: $week) {
    id
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
      started
      winner
      liveStatus {
        id
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
    messages {
      id
      message_id
      league_id
      member_id
      content
      createdAt
    }
  }
  league(where: {league_id: $league_id}) {
    id
    league_id
    late_policy
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
    mutation Register($leagueCode: String!, $username: String!, $superbowlWinner: Int!, $superbowlLoser: Int!, $superbowlScore: Int!) {
  register(
    leagueCode: $leagueCode
    username: $username
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
 *      leagueCode: // value for 'leagueCode'
 *      username: // value for 'username'
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
    query SuperbowlPicks($leagueId: Int!) {
  superbowls(where: {leaguemembers: {is: {league_id: {equals: $leagueId}}}}) {
    id
    score
    season
    leaguemembers {
      id
      membership_id
      people {
        id
        uid
        username
      }
    }
    teams_superbowl_loserToteams {
      id
      ...SuperbowlTeam
    }
    teams_superbowl_winnerToteams {
      id
      ...SuperbowlTeam
    }
  }
}
    ${SuperbowlTeamFragmentDoc}`;

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
 *      leagueId: // value for 'leagueId'
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
  teams {
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
export const WeekForPicksDocument = gql`
    query WeekForPicks($leagueId: Int!, $memberId: Int, $override: Boolean, $week: Int) {
  weekForPicks(
    leagueId: $leagueId
    memberId: $memberId
    override: $override
    week: $week
  ) {
    id
    week
    season
    games {
      id
      gid
      week
      started
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
    existingPicks {
      id
      winner
      score
    }
    leagueMember {
      id
      membership_id
      people {
        id
        username
      }
    }
  }
}
    `;

/**
 * __useWeekForPicksQuery__
 *
 * To run a query within a React component, call `useWeekForPicksQuery` and pass it any options that fit your needs.
 * When your component renders, `useWeekForPicksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWeekForPicksQuery({
 *   variables: {
 *      leagueId: // value for 'leagueId'
 *      memberId: // value for 'memberId'
 *      override: // value for 'override'
 *      week: // value for 'week'
 *   },
 * });
 */
export function useWeekForPicksQuery(baseOptions: Apollo.QueryHookOptions<WeekForPicksQuery, WeekForPicksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WeekForPicksQuery, WeekForPicksQueryVariables>(WeekForPicksDocument, options);
      }
export function useWeekForPicksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WeekForPicksQuery, WeekForPicksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WeekForPicksQuery, WeekForPicksQueryVariables>(WeekForPicksDocument, options);
        }
export type WeekForPicksQueryHookResult = ReturnType<typeof useWeekForPicksQuery>;
export type WeekForPicksLazyQueryHookResult = ReturnType<typeof useWeekForPicksLazyQuery>;
export type WeekForPicksQueryResult = Apollo.QueryResult<WeekForPicksQuery, WeekForPicksQueryVariables>;
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
export const LeaguePageMemberViewerDocument = gql`
    query LeaguePageMemberViewer($leagueId: Int!) {
  me {
    id
    leagueMember(league_id: $leagueId) {
      id
      membership_id
      league_id
    }
  }
}
    `;

/**
 * __useLeaguePageMemberViewerQuery__
 *
 * To run a query within a React component, call `useLeaguePageMemberViewerQuery` and pass it any options that fit your needs.
 * When your component renders, `useLeaguePageMemberViewerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLeaguePageMemberViewerQuery({
 *   variables: {
 *      leagueId: // value for 'leagueId'
 *   },
 * });
 */
export function useLeaguePageMemberViewerQuery(baseOptions: Apollo.QueryHookOptions<LeaguePageMemberViewerQuery, LeaguePageMemberViewerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LeaguePageMemberViewerQuery, LeaguePageMemberViewerQueryVariables>(LeaguePageMemberViewerDocument, options);
      }
export function useLeaguePageMemberViewerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LeaguePageMemberViewerQuery, LeaguePageMemberViewerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LeaguePageMemberViewerQuery, LeaguePageMemberViewerQueryVariables>(LeaguePageMemberViewerDocument, options);
        }
export type LeaguePageMemberViewerQueryHookResult = ReturnType<typeof useLeaguePageMemberViewerQuery>;
export type LeaguePageMemberViewerLazyQueryHookResult = ReturnType<typeof useLeaguePageMemberViewerLazyQuery>;
export type LeaguePageMemberViewerQueryResult = Apollo.QueryResult<LeaguePageMemberViewerQuery, LeaguePageMemberViewerQueryVariables>;
export const DownloadLeaguePlayersDocument = gql`
    query DownloadLeaguePlayers($leagueId: Int!) {
  league(where: {league_id: $leagueId}) {
    id
    name
    memberpeople {
      id
      member {
        id
        paid
      }
      user {
        id
        username
        email
      }
    }
  }
}
    `;

/**
 * __useDownloadLeaguePlayersQuery__
 *
 * To run a query within a React component, call `useDownloadLeaguePlayersQuery` and pass it any options that fit your needs.
 * When your component renders, `useDownloadLeaguePlayersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDownloadLeaguePlayersQuery({
 *   variables: {
 *      leagueId: // value for 'leagueId'
 *   },
 * });
 */
export function useDownloadLeaguePlayersQuery(baseOptions: Apollo.QueryHookOptions<DownloadLeaguePlayersQuery, DownloadLeaguePlayersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DownloadLeaguePlayersQuery, DownloadLeaguePlayersQueryVariables>(DownloadLeaguePlayersDocument, options);
      }
export function useDownloadLeaguePlayersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DownloadLeaguePlayersQuery, DownloadLeaguePlayersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DownloadLeaguePlayersQuery, DownloadLeaguePlayersQueryVariables>(DownloadLeaguePlayersDocument, options);
        }
export type DownloadLeaguePlayersQueryHookResult = ReturnType<typeof useDownloadLeaguePlayersQuery>;
export type DownloadLeaguePlayersLazyQueryHookResult = ReturnType<typeof useDownloadLeaguePlayersLazyQuery>;
export type DownloadLeaguePlayersQueryResult = Apollo.QueryResult<DownloadLeaguePlayersQuery, DownloadLeaguePlayersQueryVariables>;
export const MarkAsPaidDocument = gql`
    mutation MarkAsPaid($membership_id: Int!, $paid: Boolean!) {
  updateOneLeagueMember(
    data: {paid: {set: $paid}}
    where: {membership_id: $membership_id}
  ) {
    id
    paid
  }
}
    `;
export type MarkAsPaidMutationFn = Apollo.MutationFunction<MarkAsPaidMutation, MarkAsPaidMutationVariables>;

/**
 * __useMarkAsPaidMutation__
 *
 * To run a mutation, you first call `useMarkAsPaidMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkAsPaidMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markAsPaidMutation, { data, loading, error }] = useMarkAsPaidMutation({
 *   variables: {
 *      membership_id: // value for 'membership_id'
 *      paid: // value for 'paid'
 *   },
 * });
 */
export function useMarkAsPaidMutation(baseOptions?: Apollo.MutationHookOptions<MarkAsPaidMutation, MarkAsPaidMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MarkAsPaidMutation, MarkAsPaidMutationVariables>(MarkAsPaidDocument, options);
      }
export type MarkAsPaidMutationHookResult = ReturnType<typeof useMarkAsPaidMutation>;
export type MarkAsPaidMutationResult = Apollo.MutationResult<MarkAsPaidMutation>;
export type MarkAsPaidMutationOptions = Apollo.BaseMutationOptions<MarkAsPaidMutation, MarkAsPaidMutationVariables>;
export const MemberEmailsDocument = gql`
    query MemberEmails($member_id: Int!) {
  leagueMember(where: {membership_id: $member_id}) {
    EmailLogs {
      ts
      email {
        bcc
        cc
        created_at
        from
        html
        id
        last_event
        reply_to
        subject
        text
        to
      }
    }
  }
}
    `;

/**
 * __useMemberEmailsQuery__
 *
 * To run a query within a React component, call `useMemberEmailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMemberEmailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMemberEmailsQuery({
 *   variables: {
 *      member_id: // value for 'member_id'
 *   },
 * });
 */
export function useMemberEmailsQuery(baseOptions: Apollo.QueryHookOptions<MemberEmailsQuery, MemberEmailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MemberEmailsQuery, MemberEmailsQueryVariables>(MemberEmailsDocument, options);
      }
export function useMemberEmailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MemberEmailsQuery, MemberEmailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MemberEmailsQuery, MemberEmailsQueryVariables>(MemberEmailsDocument, options);
        }
export type MemberEmailsQueryHookResult = ReturnType<typeof useMemberEmailsQuery>;
export type MemberEmailsLazyQueryHookResult = ReturnType<typeof useMemberEmailsLazyQuery>;
export type MemberEmailsQueryResult = Apollo.QueryResult<MemberEmailsQuery, MemberEmailsQueryVariables>;
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
export const SuperbowlPickDocument = gql`
    query SuperbowlPick($superbowlPickId: Int!) {
  superbowl(where: {pickid: $superbowlPickId}) {
    id
    pickid
    member_id
    winner
    loser
    score
    teams_superbowl_loserToteams {
      id
      teamid
      loc
      name
      abbrev
      conference
    }
    teams_superbowl_winnerToteams {
      id
      teamid
      loc
      name
      abbrev
      conference
    }
  }
}
    `;

/**
 * __useSuperbowlPickQuery__
 *
 * To run a query within a React component, call `useSuperbowlPickQuery` and pass it any options that fit your needs.
 * When your component renders, `useSuperbowlPickQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSuperbowlPickQuery({
 *   variables: {
 *      superbowlPickId: // value for 'superbowlPickId'
 *   },
 * });
 */
export function useSuperbowlPickQuery(baseOptions: Apollo.QueryHookOptions<SuperbowlPickQuery, SuperbowlPickQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SuperbowlPickQuery, SuperbowlPickQueryVariables>(SuperbowlPickDocument, options);
      }
export function useSuperbowlPickLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SuperbowlPickQuery, SuperbowlPickQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SuperbowlPickQuery, SuperbowlPickQueryVariables>(SuperbowlPickDocument, options);
        }
export type SuperbowlPickQueryHookResult = ReturnType<typeof useSuperbowlPickQuery>;
export type SuperbowlPickLazyQueryHookResult = ReturnType<typeof useSuperbowlPickLazyQuery>;
export type SuperbowlPickQueryResult = Apollo.QueryResult<SuperbowlPickQuery, SuperbowlPickQueryVariables>;
export const UpdateSuperbowlDocument = gql`
    mutation UpdateSuperbowl($data: SuperbowlUpdateInput!, $where: SuperbowlWhereUniqueInput!) {
  updateOneSuperbowl(data: $data, where: $where) {
    id
    pickid
    member_id
    winner
    loser
    score
    teams_superbowl_loserToteams {
      id
      teamid
      loc
      name
      abbrev
      conference
    }
    teams_superbowl_winnerToteams {
      id
      teamid
      loc
      name
      abbrev
      conference
    }
  }
}
    `;
export type UpdateSuperbowlMutationFn = Apollo.MutationFunction<UpdateSuperbowlMutation, UpdateSuperbowlMutationVariables>;

/**
 * __useUpdateSuperbowlMutation__
 *
 * To run a mutation, you first call `useUpdateSuperbowlMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSuperbowlMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSuperbowlMutation, { data, loading, error }] = useUpdateSuperbowlMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateSuperbowlMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSuperbowlMutation, UpdateSuperbowlMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSuperbowlMutation, UpdateSuperbowlMutationVariables>(UpdateSuperbowlDocument, options);
      }
export type UpdateSuperbowlMutationHookResult = ReturnType<typeof useUpdateSuperbowlMutation>;
export type UpdateSuperbowlMutationResult = Apollo.MutationResult<UpdateSuperbowlMutation>;
export type UpdateSuperbowlMutationOptions = Apollo.BaseMutationOptions<UpdateSuperbowlMutation, UpdateSuperbowlMutationVariables>;
export const HomeDocument = gql`
    query Home {
  me {
    id
    leaguemembers(orderBy: {leagues: {season: desc}}) {
      id
      membership_id
      role
      hasPickedNextGame
      nextGame {
        id
        gid
        ts
      }
      leagues {
        id
        rankings {
          id
          correct
          wrong
          ranking
          user {
            id
            uid
            username
          }
          member {
            id
            membership_id
          }
        }
        id
        league_id
        name
        season
        status
        share_code
        aggregateLeagueMember {
          count
        }
        WeekWinners {
          id
          membership_id
          week
        }
      }
      correctPicks: aggregatePick(where: {correct: {equals: 1}, done: {equals: 1}}) {
        count
      }
      wrongPicks: aggregatePick(where: {correct: {equals: 0}, done: {equals: 1}}) {
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
 *   },
 * });
 */
export function useHomeQuery(baseOptions?: Apollo.QueryHookOptions<HomeQuery, HomeQueryVariables>) {
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
export const MeDocument = gql`
    query Me {
  me {
    id
    uid
    email
    username
    leagues {
      id
      league_id
      name
    }
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const LeagueRegistrationDocument = gql`
    query LeagueRegistration($leagueCode: String!) {
  league(where: {share_code: $leagueCode}) {
    id
    share_code
    name
    status
    reminder_policy
    late_policy
    pick_policy
    scoring_type
    viewer {
      id
      membership_id
    }
    superbowl_competition
    _count {
      leaguemembers
    }
    rules {
      id
      name
      description
    }
    priorLeague {
      id
      leaguemembers {
        id
        people {
          id
          username
          email
          uid
        }
      }
    }
  }
  teams {
    id
    abbrev
    conference
    teamid
    loc
    name
  }
}
    `;

/**
 * __useLeagueRegistrationQuery__
 *
 * To run a query within a React component, call `useLeagueRegistrationQuery` and pass it any options that fit your needs.
 * When your component renders, `useLeagueRegistrationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLeagueRegistrationQuery({
 *   variables: {
 *      leagueCode: // value for 'leagueCode'
 *   },
 * });
 */
export function useLeagueRegistrationQuery(baseOptions: Apollo.QueryHookOptions<LeagueRegistrationQuery, LeagueRegistrationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LeagueRegistrationQuery, LeagueRegistrationQueryVariables>(LeagueRegistrationDocument, options);
      }
export function useLeagueRegistrationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LeagueRegistrationQuery, LeagueRegistrationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LeagueRegistrationQuery, LeagueRegistrationQueryVariables>(LeagueRegistrationDocument, options);
        }
export type LeagueRegistrationQueryHookResult = ReturnType<typeof useLeagueRegistrationQuery>;
export type LeagueRegistrationLazyQueryHookResult = ReturnType<typeof useLeagueRegistrationLazyQuery>;
export type LeagueRegistrationQueryResult = Apollo.QueryResult<LeagueRegistrationQuery, LeagueRegistrationQueryVariables>;
export const CreateMessageDocument = gql`
    mutation CreateMessage($data: LeagueMessageCreateInput!) {
  createOneLeagueMessage(data: $data) {
    id
    league_id
    member_id
    content
    createdAt
  }
}
    `;
export type CreateMessageMutationFn = Apollo.MutationFunction<CreateMessageMutation, CreateMessageMutationVariables>;

/**
 * __useCreateMessageMutation__
 *
 * To run a mutation, you first call `useCreateMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMessageMutation, { data, loading, error }] = useCreateMessageMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateMessageMutation(baseOptions?: Apollo.MutationHookOptions<CreateMessageMutation, CreateMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMessageMutation, CreateMessageMutationVariables>(CreateMessageDocument, options);
      }
export type CreateMessageMutationHookResult = ReturnType<typeof useCreateMessageMutation>;
export type CreateMessageMutationResult = Apollo.MutationResult<CreateMessageMutation>;
export type CreateMessageMutationOptions = Apollo.BaseMutationOptions<CreateMessageMutation, CreateMessageMutationVariables>;
export const LeagueMostRecentlyStartedGameDocument = gql`
    query LeagueMostRecentlyStartedGame($league_id: Int!) {
  league(where: {league_id: $league_id}) {
    id
    mostRecentlyStartedGame {
      id
      gid
      week
      season
      ts
      teams_games_homeToteams {
        id
        abbrev
      }
      teams_games_awayToteams {
        id
        abbrev
      }
    }
  }
}
    `;

/**
 * __useLeagueMostRecentlyStartedGameQuery__
 *
 * To run a query within a React component, call `useLeagueMostRecentlyStartedGameQuery` and pass it any options that fit your needs.
 * When your component renders, `useLeagueMostRecentlyStartedGameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLeagueMostRecentlyStartedGameQuery({
 *   variables: {
 *      league_id: // value for 'league_id'
 *   },
 * });
 */
export function useLeagueMostRecentlyStartedGameQuery(baseOptions: Apollo.QueryHookOptions<LeagueMostRecentlyStartedGameQuery, LeagueMostRecentlyStartedGameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LeagueMostRecentlyStartedGameQuery, LeagueMostRecentlyStartedGameQueryVariables>(LeagueMostRecentlyStartedGameDocument, options);
      }
export function useLeagueMostRecentlyStartedGameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LeagueMostRecentlyStartedGameQuery, LeagueMostRecentlyStartedGameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LeagueMostRecentlyStartedGameQuery, LeagueMostRecentlyStartedGameQueryVariables>(LeagueMostRecentlyStartedGameDocument, options);
        }
export type LeagueMostRecentlyStartedGameQueryHookResult = ReturnType<typeof useLeagueMostRecentlyStartedGameQuery>;
export type LeagueMostRecentlyStartedGameLazyQueryHookResult = ReturnType<typeof useLeagueMostRecentlyStartedGameLazyQuery>;
export type LeagueMostRecentlyStartedGameQueryResult = Apollo.QueryResult<LeagueMostRecentlyStartedGameQuery, LeagueMostRecentlyStartedGameQueryVariables>;
export const DeleteMessageDocument = gql`
    mutation DeleteMessage($messageId: String!) {
  updateOneLeagueMessage(
    where: {message_id: $messageId}
    data: {status: {set: DELETED}}
  ) {
    message_id
  }
}
    `;
export type DeleteMessageMutationFn = Apollo.MutationFunction<DeleteMessageMutation, DeleteMessageMutationVariables>;

/**
 * __useDeleteMessageMutation__
 *
 * To run a mutation, you first call `useDeleteMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMessageMutation, { data, loading, error }] = useDeleteMessageMutation({
 *   variables: {
 *      messageId: // value for 'messageId'
 *   },
 * });
 */
export function useDeleteMessageMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMessageMutation, DeleteMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMessageMutation, DeleteMessageMutationVariables>(DeleteMessageDocument, options);
      }
export type DeleteMessageMutationHookResult = ReturnType<typeof useDeleteMessageMutation>;
export type DeleteMessageMutationResult = Apollo.MutationResult<DeleteMessageMutation>;
export type DeleteMessageMutationOptions = Apollo.BaseMutationOptions<DeleteMessageMutation, DeleteMessageMutationVariables>;