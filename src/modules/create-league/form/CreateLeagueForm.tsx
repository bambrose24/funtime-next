import {gql} from '@apollo/client';
import {useToast} from '@chakra-ui/react';
import {SequentialWizard} from '@src/modules/forms/wizard/SequentialWizard';
import {LatePolicy, useCreateLeagueMutation} from '@src/generated/graphql';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {CreateLeagueFormStep} from './FormStep';
import {CREATE_LEAGUE_FORM_STEPS} from './types';

const validationSchema = Yup.object({
  leagueName: Yup.string()
    .min(5, 'Must be at least 5 characters')
    .max(50, 'Can only be 50 characters')
    .required('Please enter a league name'),
  maxMembers: Yup.number()
    .min(2)
    .max(100)
    .required(),
  // leagueType: Yup.string()
  //   .oneOf([...leagueTypes])
  //   .required(),
});

// TODO make LeagueType enum in GraphQL

export type CreateLeagueFormType = {
  leagueName: string;
  maxMembers: number;

  allowLatePicks: 'true' | 'false' | undefined;
  weeklyScoreTiebreaker: 'true' | 'false' | undefined;
  superbowlCompetition: 'true' | 'false' | undefined;
};

const CreateLeagueMutation = gql`
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

export const CreateLeagueForm = () => {
  const [createLeagueMutation] = useCreateLeagueMutation();
  const toaster = useToast();

  return (
    <Formik<CreateLeagueFormType>
      initialValues={{
        leagueName: '',
        maxMembers: 100,
        allowLatePicks: 'true',
        weeklyScoreTiebreaker: 'true',
        superbowlCompetition: 'true',
      }}
      isInitialValid={false}
      validateOnBlur
      validateOnChange={false}
      validationSchema={validationSchema}
      onSubmit={async (values, _helpers) => {
        console.log('going to create league');
        try {
          console.log('submitting...', values);
          const result = await createLeagueMutation({
            variables: {
              data: {
                latePolicy:
                  values.allowLatePicks === 'true'
                    ? LatePolicy.AllowLateWholeWeek
                    : LatePolicy.CloseAtFirstGameStart,
                leagueName: values.leagueName,
                superbowlCompetition: values.superbowlCompetition === 'true',
                weeklyTiebreaker: values.weeklyScoreTiebreaker === 'true',
                // pickPolicy: PickPolicy.ChooseWinner, // todo remove this & keep default
                // reminderPolicy: ReminderPolicy.ThreeHoursBefore, // remove
                // scoringType: ScoringType.GameWinner, // remove
              },
            },
          });

          toaster({
            position: 'bottom-left',
            variant: 'subtle',
            status: 'success',
            title: 'Success!',
            description: `Your league ${result.data?.createLeague.name} was successfully created`,
          });
        } catch (e) {
          toaster({
            position: 'bottom-left',
            variant: 'subtle',
            status: 'error',
            title: 'Error',
            description:
              'There was an error creating your league. Please contact Bob at bambrose24@gmail.com for help if this persists.',
          });
          console.error(e);
        }
      }}
    >
      {formik => {
        return (
          <SequentialWizard
            steps={CREATE_LEAGUE_FORM_STEPS.map(formStep => {
              return {
                component: <CreateLeagueFormStep formStep={formStep} formik={formik} />,
              };
            })}
            flexProps={{
              width: {base: '500px'},
            }}
          />
        );
      }}
    </Formik>
  );
};
