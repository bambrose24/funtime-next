import { Box, Flex } from "@chakra-ui/react";
import FuntimePage from "@src/FuntimePage";
import { CreateLeagueForm } from "./form/CreateLeagueForm";

export const CreateLeaguePage = () => {
  return (
    <FuntimePage>
      <Flex w="100%" justify="center">
        <Box p="24px" bg="white" maxWidth="400px">
          <CreateLeagueForm />
        </Box>
      </Flex>
    </FuntimePage>
  );
};
