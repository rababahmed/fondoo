import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  HTMLChakraProps,
  Input,
  Stack,
} from "@chakra-ui/react";
import * as React from "react";
import { PasswordField } from "./PasswordField";
import { useQuery } from "react-query";
import * as Constants from "../Constants";
import { request, gql } from "graphql-request";
import { useUserStore } from "../../store/userStore";

const useLoginUser = () => {
  return useQuery("user", async () => {
    const { user } = await request(
      Constants.GraphQL_API,
      gql`
        query {
          user(where: { email: ${userEmail} }) {
            id
            fullName
            username
            email
            password
          }
        }
      `
    );
    return user;
    const userEmail = useUserStore((state) => state.userEmail);
  });
};

export const LoginForm = (props: HTMLChakraProps<"form">) => (
  <chakra.form
    onSubmit={(e) => {
      e.preventDefault();
      useLoginUser();
    }}
    {...props}
  >
    <Stack spacing="6">
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input name="email" type="email" autoComplete="email" required />
      </FormControl>
      <PasswordField />
      <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
        Sign in
      </Button>
    </Stack>
  </chakra.form>
);
