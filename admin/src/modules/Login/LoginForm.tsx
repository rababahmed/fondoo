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
import { GET_USER } from "../../graphql/user";
import * as Sentry from "@sentry/nextjs";

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
  const userID = useUserStore((state) => state.userID);

  const { data, error, isLoading, isSuccess, isFetching } = useGQLQuery(
    "get-unique-user",
    GET_USER,
    {
      id: userID,
    }
  );

  const identifyUser = () => {
    isSuccess &&
      window.analytics.identify(userID, {
        firstName: data?.user?.firstName,
        lastName: data?.user?.lastName,
        email: data?.user?.email,
      });

    isSuccess &&
      data?.user?.restaurants.map((r: any) =>
        window.analytics.group(r.id, {
          name: r.name,
        })
      );

    isSuccess && Sentry.setUser({ email: data?.user?.email });
  };

  const onSubmit = async (values: any) => {
    const login = await axios
      .post(Constants.REST_API_V1 + "/user/login", values)
      .then(function (response) {
        setUser(
          response.data.id,
          response.data.role,
          response.data.token,
          response.data.restaurantID
        );
        if (response.data.isAuthenticated === true) {
          window.analytics.track("Logged in", {
            userId: response.data.id,
            context: { groupId: response.data.restaurantID },
          });
          identifyUser();
          if (response.data.role !== "Admin") {
            router.push("/dashboard");
          } else {
            router.push("/admin/dashboard");
          }
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
