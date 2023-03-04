import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { Info, InfoOutlined, InfoRounded } from "@mui/icons-material";
import { Wizard, WizardProps } from "@src/components/forms/wizard";
import { Typography } from "@src/components/Typography";
import { Formik, FormikProps } from "formik";
import * as Yup from "yup";
import { LeagueType, leagueTypes } from "./types";

const validationSchema = Yup.object({
  leagueName: Yup.string()
    .min(5, "Must be at least 5 characters")
    .max(50, "Can only be 50 characters")
    .required("Please enter a league name"),
  maxMembers: Yup.number().min(2).max(100).required(),
  leagueType: Yup.string()
    .oneOf([...leagueTypes])
    .required(),
});

// TODO make LeagueType enum in GraphQL

export type CreateLeagueFormType = {
  leagueName: string;
  maxMembers: number;
  leagueType: LeagueType;
  allowLatePicks: "true" | "false" | undefined;
  weeklyScoreTiebreaker: "true" | "false" | undefined;
  superbowlCompetition: "true" | "false" | undefined;
};

const FORM_STEPS = ["league_info", "extra_features"] as const;
type CreateLeagueFormStep = typeof FORM_STEPS[number];

export const CreateLeagueForm = () => {
  return (
    <Formik<CreateLeagueFormType>
      initialValues={{
        leagueName: "",
        maxMembers: 100,
        leagueType: "pickem",
        allowLatePicks: "true",
        weeklyScoreTiebreaker: "true",
        superbowlCompetition: "true",
      }}
      validateOnBlur
      validateOnChange={false}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("submitted values", values);
      }}
    >
      {(formik) => {
        return (
          <Wizard
            width={{ base: "400px" }}
            onSubmit={() => {
              console.log("on submit", formik.values);
            }}
            canSubmit={formik.isValid}
            isSubmitting={formik.isSubmitting}
            steps={FORM_STEPS.map((formStep) => {
              return {
                component: <FormStep formStep={formStep} formik={formik} />,
              };
            })}
          />
        );
      }}
    </Formik>
  );
};

const FormStep = ({
  formik,
  formStep,
}: {
  formik: FormikProps<CreateLeagueFormType>;
  formStep: CreateLeagueFormStep;
}) => {
  switch (formStep) {
    case "league_info":
      return (
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
              {leagueTypes.map((leagueType) => {
                return (
                  <option key={leagueType} value={leagueType}>
                    {leagueType === "pickem" ? "Pick 'Em" : undefined}
                  </option>
                );
              })}
            </Select>
            <FormHelperText>
              Players pick the winner of each NFL game. This is the only league
              type for now.
            </FormHelperText>
          </FormControl>
        </VStack>
      );
    case "extra_features":
      return (
        <VStack>
          <Typography.H4>Extra Features</Typography.H4>
          <VStack spacing="24px">
            <FormControl>
              <HStack justify="space-between">
                <Typography.H5 fontWeight="600">
                  Allow Late Picks?
                </Typography.H5>
                <RadioGroup
                  name="allowLatePicks"
                  value={formik.values.allowLatePicks}
                  onChange={(val) => {
                    console.log("allowLatePicks set?", val);
                    formik.setFieldValue("allowLatePicks", val);
                  }}
                >
                  <HStack spacing="12px" justify="center">
                    <Radio value="true">Yes</Radio>
                    <Radio value="false">No</Radio>
                  </HStack>
                </RadioGroup>
              </HStack>
              <FormHelperText>
                Players can make picks for games that haven't started yet; this
                allows people to forget about the Thursday night game and still
                get picks in, for example.{" "}
                <strong>We recommend Yes for this feature.</strong>
              </FormHelperText>
            </FormControl>
            <FormControl>
              <HStack justify="space-between">
                <Typography.H5 fontWeight="600">
                  Weekly Score Tiebreaker?
                </Typography.H5>
                <RadioGroup
                  name="weeklyScoreTiebreaker"
                  value={formik.values.weeklyScoreTiebreaker}
                  onChange={(val) =>
                    formik.setFieldValue("weeklyScoreTiebreaker", val)
                  }
                >
                  <HStack spacing="12px" justify="center">
                    <Radio value="true">Yes</Radio>
                    <Radio value="false">No</Radio>
                  </HStack>
                </RadioGroup>
              </HStack>
              <FormHelperText>
                Players must choose a total score for the final game in the week
                (usually the Monday night game). The player (or players) closest
                to the total score will win if there's a tie in the number of
                correct picks in the week.{" "}
                <strong>We recommend Yes for this feature.</strong>
              </FormHelperText>
            </FormControl>
            <FormControl>
              <HStack justify="space-between">
                <Typography.H5 fontWeight="600">
                  Super Bowl Competition?
                </Typography.H5>
                <RadioGroup
                  name="superbowlCompetition"
                  value={formik.values.superbowlCompetition}
                  onChange={(val) =>
                    formik.setFieldValue("superbowlCompetition", val)
                  }
                >
                  <HStack spacing="12px" justify="center">
                    <Radio value="true">Yes</Radio>
                    <Radio value="false">No</Radio>
                  </HStack>
                </RadioGroup>
              </HStack>
              <FormHelperText>
                This is an extra game on top of your weekly pick 'em. Players
                pick the Super Bowl winner, loser, and total score at the
                beginning of the season, and there's an extra game at the end of
                the season to see who is closest.
              </FormHelperText>
            </FormControl>
          </VStack>
        </VStack>
      );
  }
};
