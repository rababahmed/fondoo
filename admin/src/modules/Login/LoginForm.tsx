import { Box, Stack } from "@chakra-ui/react";
import * as React from "react";
import { useQuery } from "react-query";
import * as Constants from "../Constants";
import { useUserStore } from "../../store/useUserStore";
import { Formik } from "formik";
import * as Yup from "yup";
import { InputControl, SubmitButton } from "formik-chakra-ui";
import axios from "axios";
import { useRouter } from "next/router";
import { useGQLQuery } from "../../shared-hooks/useGQLQuery";

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
  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);

  const onSubmit = async (values: any) => {
    const login = await axios
      .post(Constants.REST_API_V1 + "/user/login", values)
      .then(function (response) {
        console.log(response);
        setUser(response.data.id, response.data.role);
        if (response.data.message === "User authenticated") {
          router.push("/dashboard");
        }
      });
  };

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
                  loadingText="Logging in"
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
