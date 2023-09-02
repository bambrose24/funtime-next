import {gql} from '@apollo/client';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  Select,
  Spinner,
  useToast,
} from '@chakra-ui/react';
import {
  useAllTeamsQuery,
  useSuperbowlPickQuery,
  useSuperbowlPicksQuery,
  useUpdateSuperbowlMutation,
} from '@src/generated/graphql';
import {SuperbowlTeamOptions} from '@src/modules/forms/SuperbowlTeamOptions';
import {Typography} from '@src/modules/Typography';
import {Formik, FormikErrors, FormikHelpers} from 'formik';
import * as Yup from 'yup';

const _SuperBowlPickQuery = gql(`
query SuperbowlPick($superbowlPickId: Int!) {
  superbowl(where: {pickid: $superbowlPickId}) {
    id
    pickid
    member_id
    winner
    loser
    score
  }
}
`);

const _UpdateSuperbowlMutation = gql(`
mutation UpdateSuperbowl($data: SuperbowlUpdateInput!, $where: SuperbowlWhereUniqueInput!) {
  updateOneSuperbowl(data: $data, where: $where) {
    id
    pickid
    member_id
    winner
    loser
    score
  }
}
`);

type SuperbowlSettingsModalProps = {
  modal: Omit<ModalProps, 'children'>;
  superbowlPickId: number;
};

type SuperbowlFormType = {
  loser: string;
  winner: string;
  score: string;
};

export function SuperbowlSettingsModal({superbowlPickId, modal}: SuperbowlSettingsModalProps) {
  const {data: teams, loading} = useAllTeamsQuery();
  const {data: superbowlPickData} = useSuperbowlPickQuery({variables: {superbowlPickId}});
  const [updateSuperBowl] = useUpdateSuperbowlMutation();

  const toaster = useToast();
  if (!superbowlPickData || !superbowlPickData.superbowl) {
    return null;
  }
  const superbowlPick = superbowlPickData.superbowl;
  return (
    <Formik<SuperbowlFormType>
      initialValues={{
        winner: superbowlPick.winner ?? 0,
        loser: superbowlPick.loser ?? 0,
        score: superbowlPick.score ?? 0,
      }}
      validate={async values => {
        const {winner, loser, score} = values;
        const errors: FormikErrors<SuperbowlFormType> = {};

        if (!winner) {
          errors['winner'] = 'Please enter a Super Bowl winner';
        }
        if (!loser) {
          errors['loser'] = 'Please enter a Super Bowl loser';
        }
        if (!score || score < 1) {
          errors['score'] = 'Please enter a valid total score for the Super Bowl';
        }
        const winnerTeam = teams?.teams.find(t => t.teamid === Number(winner));
        const loserTeam = teams?.teams.find(t => t.teamid === Number(loser));
        if (winnerTeam && loserTeam && winnerTeam.conference === loserTeam.conference) {
          errors[
            'winner'
          ] = `You cannot choose teams in the same conference for winner/loser (${winnerTeam.conference})`;
        }
        return errors;
      }}
      onSubmit={async values => {
        await updateSuperBowl({
          variables: {
            data: {
              teams_superbowl_winnerToteams: {
                connect: {
                  teamid: Number(values.winner),
                },
              },
              teams_superbowl_loserToteams: {
                connect: {
                  teamid: Number(values.loser),
                },
              },
              score: {set: Number(values.score)},
            },
            where: {
              pickid: superbowlPickId,
            },
          },
        });
        toaster({position: 'top', description: `Successfully updated your Super Bowl pick`});
        modal.onClose();
      }}
    >
      {formik => {
        return (
          <Modal {...modal}>
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              {loading || !teams ? (
                <Spinner />
              ) : (
                <>
                  <ModalHeader>
                    <Typography.H2>Edit Super Bowl Pick</Typography.H2>
                  </ModalHeader>
                  <ModalBody>
                    <Flex w="100%" direction="column" gap="20px">
                      <FormControl isInvalid={Boolean(formik.errors.winner)}>
                        <FormLabel>Super Bowl Winner</FormLabel>
                        <Select
                          name="winner"
                          onChange={formik.handleChange}
                          value={formik.values.winner}
                        >
                          <SuperbowlTeamOptions />
                        </Select>
                      </FormControl>
                      <FormControl isInvalid={Boolean(formik.errors.loser)}>
                        <FormLabel>Super Bowl Loser</FormLabel>
                        <Select
                          name="loser"
                          onChange={formik.handleChange}
                          value={formik.values.loser}
                        >
                          <SuperbowlTeamOptions />
                        </Select>
                      </FormControl>
                      <FormControl isInvalid={Boolean(formik.errors.score)}>
                        <FormLabel>Score</FormLabel>
                        <Input
                          name="score"
                          type="number"
                          onChange={formik.handleChange}
                          value={formik.values.score}
                        />
                      </FormControl>
                    </Flex>
                  </ModalBody>
                </>
              )}
              <ModalFooter>
                <Flex w="100%" justify="space-between">
                  <Button
                    variant="outline"
                    onClick={() => {
                      modal.onClose();
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="solid"
                    isLoading={formik.isSubmitting}
                    onClick={formik.submitForm}
                    disabled={!formik.isValid}
                  >
                    Save
                  </Button>
                </Flex>
              </ModalFooter>
            </ModalContent>
          </Modal>
        );
      }}
    </Formik>
  );
}
