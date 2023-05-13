import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Select,
  VStack,
} from '@chakra-ui/react';
import {SequentialWizard} from '@src/components/forms/wizard/SequentialWizard';
import {useWizard} from '@src/components/forms/wizard/SequentialWizardTypes';
import {Typography} from '@src/components/Typography';
import {Formik, FormikProps} from 'formik';
import * as Yup from 'yup';
import {SequentialWizardLayout} from '../../forms/wizard/SequentialWizardLayout';
import {CreateLeagueFormStep} from './FormStep';
import {CREATE_LEAGUE_FORM_STEPS, LeagueType, leagueTypes} from './types';

const validationSchema = Yup.object({
  leagueName: Yup.string()
    .min(5, 'Must be at least 5 characters')
    .max(50, 'Can only be 50 characters')
    .required('Please enter a league name'),
  maxMembers: Yup.number()
    .min(2)
    .max(100)
    .required(),
  leagueType: Yup.string()
    .oneOf([...leagueTypes])
    .required(),
});

// TODO make LeagueType enum in GraphQL

export type CreateLeagueFormType = {
  leagueName: string;
  maxMembers: number;
  leagueType: LeagueType;
  allowLatePicks: 'true' | 'false' | undefined;
  weeklyScoreTiebreaker: 'true' | 'false' | undefined;
  superbowlCompetition: 'true' | 'false' | undefined;
};

export const CreateLeagueForm = () => {
  return (
    <Formik<CreateLeagueFormType>
      initialValues={{
        leagueName: '',
        maxMembers: 100,
        leagueType: 'pickem',
        allowLatePicks: 'true',
        weeklyScoreTiebreaker: 'true',
        superbowlCompetition: 'true',
      }}
      validateOnBlur
      validateOnChange={false}
      validationSchema={validationSchema}
      onSubmit={values => {
        console.log('submitted values', values);
      }}
    >
      {formik => {
        return (
          <SequentialWizard
            onSubmit={async () => {
              console.log('on submit', formik.values);
            }}
            canSubmit={formik.isValid}
            isSubmitting={formik.isSubmitting}
            steps={CREATE_LEAGUE_FORM_STEPS.map(formStep => {
              return {
                component: <CreateLeagueFormStep formStep={formStep} formik={formik} />,
              };
            })}
            width={{base: '500px'}}
          />
        );
      }}
    </Formik>
  );
};
