import { Box, Stack } from "@chakra-ui/react";
import * as React from "react";
import { useQuery } from "react-query";
import * as Constants from "../Constants";
import { useUserStore } from "../../store/userStore";
import { Formik } from "formik";
import * as Yup from "yup";
import { InputControl, SubmitButton } from "formik-chakra-ui";

const onSubmit = (values) => {
  window.alert(JSON.stringify(values, null, 2));
};

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().required("Email is required."),
  password: Yup.string().required("Password is required."),
});

export const LoginForm = () => {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, handleBlur }) => (
        <Box as="form" onSubmit={handleSubmit as any}>
          <Stack spacing="6">
            <InputControl name="email" label="Email" />
            <InputControl
              inputProps={{ type: "password" }}
              name="password"
              label="Password"
              onBlur={handleBlur}
            />
            <Box>
              <Stack mt={4} pb={2}>
                <SubmitButton bgColor="gray.700">Login</SubmitButton>
              </Stack>
            </Box>
          </Stack>
        </Box>
      )}
    </Formik>
  );
};
