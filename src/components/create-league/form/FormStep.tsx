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
import {useWizard} from '@src/components/forms/wizard/SequentialWizardTypes';
import {Typography} from '@src/components/Typography';
import {FormikProps} from 'formik';
import {CreateLeagueFormType} from './CreateLeagueForm';
import {SequentialWizardLayout} from '../../forms/wizard/SequentialWizardLayout';
import {CreateLeagueFormStepType, leagueTypes} from './types';

export function CreateLeagueFormStep({
  formik,
  formStep,
}: {
  formik: FormikProps<CreateLeagueFormType>;
  formStep: CreateLeagueFormStepType;
}) {
  const {back, forward} = useWizard();

  const createLeague = () => {
    console.log('going to create league?');
    formik.submitForm();
  };

  switch (formStep) {
    case 'league_info':
      return (
        <SequentialWizardLayout
          nav={{
            primary: {
              label: 'Next',
              onClick: forward,
            },
          }}
        >
          <VStack>
            <FormControl isInvalid={Boolean(formik.errors.leagueName)}>
              <FormLabel>League Name</FormLabel>
              <Input
                name="leagueName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.leagueName}
              />
              <FormErrorMessage>{formik.errors.leagueName}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={Boolean(formik.errors.leagueType)}>
              <FormLabel>League Type</FormLabel>
              <Select
                name="type"
                disabled
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.leagueType}
              >
                {leagueTypes.map(leagueType => {
                  return (
                    <option key={leagueType} value={leagueType}>
                      {leagueType === 'pickem' ? "Pick 'Em" : undefined}
                    </option>
                  );
                })}
              </Select>
              <FormHelperText>
                Players pick the winner of each NFL game. This is the only league type for now.
              </FormHelperText>
            </FormControl>
          </VStack>
        </SequentialWizardLayout>
      );
    case 'extra_features':
      return (
        <SequentialWizardLayout
          nav={{
            primary: {
              label: 'Create',
              onClick: createLeague,
              buttonProps: {
                isLoading: formik.isSubmitting,
                isDisabled: !formik.isValid,
              },
            },
            secondary: {
              label: 'Back',
              onClick: back,
            },
          }}
        >
          <VStack>
            <Typography.H4>Extra Features</Typography.H4>
            <VStack spacing="32px">
              <FormControl>
                <HStack justify="space-between">
                  <Typography.H5 fontWeight="600">Allow Late Picks?</Typography.H5>
                  <RadioGroup
                    name="allowLatePicks"
                    value={formik.values.allowLatePicks}
                    onChange={val => {
                      console.log('allowLatePicks set?', val);
                      formik.setFieldValue('allowLatePicks', val);
                    }}
                  >
                    <HStack spacing="12px" justify="center">
                      <Radio value="true">Yes</Radio>
                      <Radio value="false">No</Radio>
                    </HStack>
                  </RadioGroup>
                </HStack>
                <FormHelperText>
                  Players can make picks for games that haven't started yet; this allows people to
                  forget about the Thursday night game and still get picks in, for example.{' '}
                  <strong>We recommend Yes for this feature.</strong>
                </FormHelperText>
              </FormControl>
              <FormControl>
                <HStack justify="space-between">
                  <Typography.H5 fontWeight="600">Weekly Score Tiebreaker?</Typography.H5>
                  <RadioGroup
                    name="weeklyScoreTiebreaker"
                    value={formik.values.weeklyScoreTiebreaker}
                    onChange={val => formik.setFieldValue('weeklyScoreTiebreaker', val)}
                  >
                    <HStack spacing="12px" justify="center">
                      <Radio value="true">Yes</Radio>
                      <Radio value="false">No</Radio>
                    </HStack>
                  </RadioGroup>
                </HStack>
                <FormHelperText>
                  Players must choose a total score for the final game in the week (usually the
                  Monday night game). The player (or players) closest to the total score will win if
                  there's a tie in the number of correct picks in the week.{' '}
                  <strong>We recommend Yes for this feature.</strong>
                </FormHelperText>
              </FormControl>
              <FormControl>
                <HStack justify="space-between">
                  <Typography.H5 fontWeight="600">Super Bowl Competition?</Typography.H5>
                  <RadioGroup
                    name="superbowlCompetition"
                    value={formik.values.superbowlCompetition}
                    onChange={val => formik.setFieldValue('superbowlCompetition', val)}
                  >
                    <HStack spacing="12px" justify="center">
                      <Radio value="true">Yes</Radio>
                      <Radio value="false">No</Radio>
                    </HStack>
                  </RadioGroup>
                </HStack>
                <FormHelperText>
                  This is an extra game on top of your weekly pick 'em. Players pick the Super Bowl
                  winner, loser, and total score at the beginning of the season, and there's an
                  extra game at the end of the season to see who is closest.
                </FormHelperText>
              </FormControl>
            </VStack>
          </VStack>
        </SequentialWizardLayout>
      );
  }
}
