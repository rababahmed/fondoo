import { Box, Grid, Stack, Text, VStack } from "@chakra-ui/layout";
import React, { useState } from "react";
import { Skeleton } from "@chakra-ui/skeleton";
import { gql } from "graphql-request";
import { useGQLQuery } from "../../shared-hooks/useGQLQuery";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import PrimaryButton from "../../components/PrimaryButton";
import { InputControl, SelectControl, SubmitButton } from "formik-chakra-ui";
import { Formik } from "formik";
import * as Yup from "yup";

const GET_RESTAURANT_USER = gql`
  query {
    restaurant(where: { id: "5740ab09-e5fc-47f9-b1bd-1287b8a4cdee" }) {
      users {
        id
        firstName
        lastName
        email
        role
        phone
      }
    }
  }
`;

export const AddUser = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    role: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string(),
    email: Yup.string(),
  });

  const [formData, setFormData] = useState(initialValues);

  const onSubmit = async (values: any) => {
    setFormData(values);
    console.log(formData);
  };

  return (
    <Box mb={4}>
      <PrimaryButton onClick={onOpen} title="Add User" />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a New User</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik
              onSubmit={onSubmit}
              initialValues={initialValues}
              enableReinitialize={true}
              validationSchema={validationSchema}
            >
              {({ handleSubmit }) => (
                <Box as="form" onSubmit={handleSubmit as any}>
                  <Grid templateColumns="1fr" gap={8}>
                    <Stack spacing="6">
                      <InputControl name="firstName" label="First Name" />
                      <InputControl name="lastName" label="Last Name" />
                      <InputControl name="email" label="Email" />
                      <InputControl
                        inputProps={{ type: "password" }}
                        name="password"
                        label="Password"
                      />
                      <SelectControl label="Role" name="role">
                        <option value="Manager">Waiter</option>
                        <option value="Owner">Manager</option>
                        <option value="option3">Owner</option>
                      </SelectControl>
                      <InputControl name="phone" label="Phone" />
                    </Stack>
                  </Grid>
                  <Stack mt={10} pb={2}>
                    <VStack>
                      <SubmitButton
                        loadingText="Updating"
                        w={40}
                        colorScheme="green"
                      >
                        Add
                      </SubmitButton>
                    </VStack>
                  </Stack>
                </Box>
              )}
            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
