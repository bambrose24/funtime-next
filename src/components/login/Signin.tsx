import {Box, Button, Flex, FormControl, FormLabel, FormErrorMessage, Input} from '@chakra-ui/react';
import {useSupabaseClient} from '@supabase/auth-helpers-react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Typography} from '../Typography';

type SigninFormType = {
  email: string;
  password: string;
  error: string;
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Please enter your email'),
  password: Yup.string().required('Please enter your password'),
});

export function Signin() {
  const supabase = useSupabaseClient();
  return (
    <Formik<SigninFormType>
      initialValues={{email: '', password: '', error: ''}}
      validationSchema={validationSchema}
      validateOnMount={true}
      onSubmit={async (values, helpers) => {
        const {email, password} = values;
        helpers.setFieldValue('error', '');
        const result = await supabase.auth.signInWithPassword({
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
                autoFocus={true}
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
            <FormControl isInvalid={formik.touched.password && Boolean(formik.errors.password)}>
              <FormLabel>Password</FormLabel>
              <Input
                variant="outline"
                value={formik.values.password}
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                onKeyDown={e => {
                  if (e.key === 'Enter' && formik.isValid) {
                    formik.submitForm();
                  }
                }}
              />
              <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
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
              Log In
            </Button>
          </Flex>
        );
      }}
    </Formik>
  );
}