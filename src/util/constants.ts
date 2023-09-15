import {LatePolicy} from '@src/generated/graphql';

export const SECONDS_IN_DAY = 60 * 60 * 24;

export const showUnstartedLatePolicies: LatePolicy[] = [
  LatePolicy.AllowLateAndLockAfterStart,
  LatePolicy.CloseAtFirstGameStart,
];

export const MAX_MESSAGE_LENGTH = 300;
