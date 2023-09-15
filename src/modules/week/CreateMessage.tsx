import {gql} from '@apollo/client';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';
import {MessageType, useCreateMessageMutation} from '@src/generated/graphql';
import {useLeaguePageMemberViewer} from '@src/hooks/useLeaguePageMemberViewer';
import {MAX_MESSAGE_LENGTH} from '@src/util/constants';
import {Formik, FormikErrors} from 'formik';

type CreateMessageProps = {
  week: number;
  memberId: number;
  leagueId: number;
  messageType: MessageType;
  onComplete: () => Promise<void>;
};

type Form = {message: string};

const _CreateMessageMutation = gql`
  mutation CreateMessage($data: LeagueMessageCreateInput!) {
    createOneLeagueMessage(data: $data) {
      id
      league_id
      member_id
      content
      createdAt
    }
  }
`;

export function CreateMessage({
  week,
  memberId,
  leagueId,
  messageType,
  onComplete,
}: CreateMessageProps) {
  const [createMessage] = useCreateMessageMutation();

  return (
    <Formik<Form>
      initialValues={{
        message: '',
      }}
      validateOnChange={false}
      validateOnBlur={true}
      validate={async values => {
        const errors: FormikErrors<Form> = {};
        if (values.message.length === 0) {
          errors.message = 'Please enter a message';
        }
        if (values.message.length > MAX_MESSAGE_LENGTH) {
          errors.message = `Your message can be at most ${MAX_MESSAGE_LENGTH} characters. Please shorten your message.`;
        }
        return errors;
      }}
      onSubmit={async (values, helpers) => {
        const response = await createMessage({
          variables: {
            data: {
              content: values.message,
              league: {
                connect: {
                  league_id: leagueId,
                },
              },
              member: {
                connect: {
                  membership_id: memberId,
                },
              },
              message_type: messageType,
              week,
            },
          },
        });
        if (response.errors) {
          console.log(`Error creating message`, response);
          return;
        }
        await onComplete();
        helpers.resetForm();
      }}
    >
      {formik => {
        return (
          <Flex direction="column" w="100%" gap="8px">
            <FormControl isInvalid={Boolean(formik.errors.message)}>
              <FormLabel>Message</FormLabel>
              <Textarea
                name="message"
                id="message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
              />
              <FormHelperText>
                {formik.values.message.length} / {MAX_MESSAGE_LENGTH}
              </FormHelperText>
              <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
            </FormControl>
            <Button
              variant="solid"
              w="100%"
              onClick={formik.submitForm}
              disabled={formik.isSubmitting}
              isLoading={formik.isSubmitting}
            >
              Send Message
            </Button>
          </Flex>
        );
      }}
    </Formik>
  );
}
