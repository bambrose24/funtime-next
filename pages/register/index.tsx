import { Flex } from "@chakra-ui/react";
import { GetStaticProps, NextPage } from "next";
import RegistrationForm from "@src/components/RegistrationForm";
import FuntimePage from "@src/FuntimePage";
import {
  AllTeamsDocument,
  AllTeamsQuery,
  FindLeagueMembersDocument,
  FindLeagueMembersQuery,
} from "@src/generated/graphql";
import { client } from "@src/graphql";

interface RegisterPageProps {
  previousMembers: FindLeagueMembersQuery;
  teams: AllTeamsQuery;
}

const RegisterPage: NextPage<RegisterPageProps> = ({
  previousMembers,
  teams,
}) => {
  return (
    <FuntimePage>
      <Flex justify="center">
        <RegistrationForm previousMembers={previousMembers} teams={teams} />
      </Flex>
    </FuntimePage>
  );
};

const PREVIOUS_LEAGUE_ID = 6;

export const getStaticProps: GetStaticProps = async (context) => {
  console.log("going to query");
  const [previousMembers, teams] = await Promise.all([
    client.query<FindLeagueMembersQuery>({
      query: FindLeagueMembersDocument,
      variables: {
        league_id: PREVIOUS_LEAGUE_ID,
      },
    }),
    client.query<AllTeamsQuery>({
      query: AllTeamsDocument,
    }),
  ]);
  console.log("previousMembers", previousMembers);

  const props: RegisterPageProps = {
    previousMembers: previousMembers.data,
    teams: teams.data,
  };

  return {
    props,
  };
};

export default RegisterPage;
