import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  useToast,
} from '@chakra-ui/react';
import {Typography} from '@src/components/Typography';
import {FuntimePage} from '@src/FuntimePage';
import {useSession, useSupabaseClient} from '@supabase/auth-helpers-react';
import {Formik} from 'formik';
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import * as Yup from 'yup';

type ResetPasswordForm = {
  password1: string;
  password2: string;
};

const validationSchema = Yup.object({
  password1: Yup.string()
    .min(8, 'Your password must be at least 8 characters')
    .required('Password is required'),
  password2: Yup.string()
    .oneOf([Yup.ref('password1'), null], 'Passwords must match')
    .required('Please confirm your password'),
});

export default function ResetPassword() {
  const supabase = useSupabaseClient();
  const toaster = useToast();
  const router = useRouter();
  const redirectToParam = router.query['redirectTo'];
  const redirectTo = typeof redirectToParam === 'string' ? redirectToParam : undefined;
  const redirectToURL = `https://www.play-funtime.com${redirectTo ?? ''}`;

  return (
    <FuntimePage>
      <Flex justify="center" w="100%">
        <Flex
          direction="column"
          w={{base: '80vw', md: '400px'}}
          layerStyle="funtime-card"
          gap="20px"
        >
          <Typography.H1>Reset Your Password</Typography.H1>
          <Typography.Body1>Use the form below to finish resetting your password.</Typography.Body1>
          <Formik<ResetPasswordForm>
            validationSchema={validationSchema}
            initialValues={{password1: '', password2: ''}}
            onSubmit={async values => {
              const result = await supabase.auth.updateUser({password: values.password1});
              if (!result.error) {
                toaster({
                  description: `Your password has been updated! You will be redirected momentarily.`,
                  onCloseComplete: () => {
                    router.push(redirectToURL);
                  },
                });
              }
            }}
          >
            {formik => {
              return (
                <>
                  <FormControl
                    isInvalid={formik.touched.password1 && Boolean(formik.errors.password1)}
                  >
                    <FormLabel>New Password</FormLabel>
                    <Input
                      type="password"
                      name="password1"
                      onChange={formik.handleChange}
                      value={formik.values.password1}
                    />
                    <FormErrorMessage>{formik.errors.password1}</FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={formik.touched.password2 && Boolean(formik.errors.password2)}
                  >
                    <FormLabel>Confirm Your New Password</FormLabel>
                    <Input
                      type="password"
                      name="password2"
                      onChange={formik.handleChange}
                      value={formik.values.password2}
                    />
                    <FormErrorMessage>{formik.errors.password2}</FormErrorMessage>
                  </FormControl>
                  <Button variant="solid" onClick={formik.submitForm} isDisabled={!formik.isValid}>
                    Save New Password
                  </Button>
                </>
              );
            }}
          </Formik>
        </Flex>
      </Flex>
    </FuntimePage>
  );
}
