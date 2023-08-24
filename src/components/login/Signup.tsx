import {Box, Button, Flex, FormControl, FormLabel, FormErrorMessage, Input} from '@chakra-ui/react';
import {useSupabaseClient} from '@supabase/auth-helpers-react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Typography} from '../Typography';

type SignupFormType = {
  email: string;
  password1: string;
  password2: string;
  error: string;
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Email is required'),
  password1: Yup.string()
    .min(8, 'Your password must be at least 8 characters')
    .required('Password is required'),
  password2: Yup.string()
    .oneOf([Yup.ref('password1'), null], 'Passwords must match')
    .required('Please confirm your password'),
});

export function Signup() {
  const supabase = useSupabaseClient();
  return (
    <Formik<SignupFormType>
      initialValues={{email: '', password1: '', password2: '', error: ''}}
      validationSchema={validationSchema}
      onSubmit={async (values, helpers) => {
        const {email, password1: password} = values;
        helpers.setFieldValue('error', '');
        const result = await supabase.auth.signUp({
          email,
          password,
        });

        if (result.error) {
          helpers.setFieldValue('error', result.error.message);
        }
      }}
    >
      {formik => {
        return (
          <Flex direction="column" w="100%" gap="12px">
            <FormControl isInvalid={formik.touched.email && Boolean(formik.errors.email)}>
              <FormLabel>Email</FormLabel>
              <Input
                variant="outline"
                value={formik.values.email}
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                onKeyDown={e => {
                  if (e.key === 'Enter' && formik.isValid) {
                    formik.submitForm();
                  }
                }}
              />
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.touched.password1 && Boolean(formik.errors.password1)}>
              <FormLabel>Password</FormLabel>
              <Input
                variant="outline"
                value={formik.values.password1}
                name="password1"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                onKeyDown={e => {
                  if (e.key === 'Enter' && formik.isValid) {
                    formik.submitForm();
                  }
                }}
              />
              <FormErrorMessage>{formik.errors.password1}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.touched.password2 && Boolean(formik.errors.password2)}>
              <FormLabel>Confirm Your Password</FormLabel>
              <Input
                variant="outline"
                value={formik.values.password2}
                name="password2"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                onKeyDown={e => {
                  if (e.key === 'Enter' && formik.isValid) {
                    formik.submitForm();
                  }
                }}
              />
              <FormErrorMessage>{formik.errors.password2}</FormErrorMessage>
            </FormControl>
            <Box>
              {formik.values.error && (
                <Typography.Subtitle1 color="error">{formik.values.error}</Typography.Subtitle1>
              )}
            </Box>
            <Button
              variant="solid"
              onClick={formik.submitForm}
              isLoading={formik.isSubmitting}
              disabled={!formik.isValid}
            >
              Sign Up
            </Button>
          </Flex>
        );
      }}
    </Formik>
  );
}
