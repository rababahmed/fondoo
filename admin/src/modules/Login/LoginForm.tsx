import { Box, Stack } from "@chakra-ui/react";
import * as React from "react";
import { useQuery } from "react-query";
import * as Constants from "../Constants";
import { useUserStore } from "../../store/userStore";
import { Formik } from "formik";
import * as Yup from "yup";
import { InputControl, SubmitButton } from "formik-chakra-ui";
import axios from "axios";

const onSubmit = async (values) => {
  console.log(values);
  const { data } = await axios
    .post("https://tezzbites-api.herokuapp.com/user/login", {
      values,
    })
    .then(function (response) {
      console.log(response);
    });
};

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().required("Email is required."),
  password: Yup.string().required("Password is required."),
});

const PasswordProps = {
  type: "password",
};

export const LoginForm = () => {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <Box as="form" onSubmit={handleSubmit as any}>
          <Stack spacing="6">
            <InputControl name="email" label="Email" />
            <InputControl
              inputProps={PasswordProps}
              name="password"
              label="Password"
            />
            <Box>
              <Stack mt={4} pb={2}>
                <SubmitButton
                  bgColor="gray.700"
                  _active={{ bgColor: "gray.500" }}
                  _hover={{ bgColor: "gray.800" }}
                >
                  Login
                </SubmitButton>
              </Stack>
            </Box>
          </Stack>
        </Box>
      )}
    </Formik>
  );
};
