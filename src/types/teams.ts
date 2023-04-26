import {AllTeamsQuery} from '../generated/graphql';

export type Team = AllTeamsQuery['teams'][number];
