import { AllTeamsQuery } from "../generated/graphql";

export type Team = AllTeamsQuery["findManyTeams"][number];
