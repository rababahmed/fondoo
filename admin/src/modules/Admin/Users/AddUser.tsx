import { Box, Grid, Stack, Text, VStack } from "@chakra-ui/layout";
import React, { useState } from "react";
import { Skeleton } from "@chakra-ui/skeleton";
import { gql } from "graphql-request";
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
import PrimaryButton from "../../../components/Buttons/PrimaryButton";
import { InputControl, SelectControl, SubmitButton } from "formik-chakra-ui";
import { Formik } from "formik";
import * as Yup from "yup";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import * as Constants from "../../Constants";
import { useUserStore } from "../../../store/useUserStore";
import { useRouter } from "next/router";

export const AdminAddUser = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    role: "Admin",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string(),
    email: Yup.string(),
  });

  const queryClient = useQueryClient();

  const onSubmit = async (values: any) => {
    console.log(values);
    const addUser = await axios
      .post(Constants.REST_API_V1 + "/user/signup", values)
      .then(function (response) {
        console.log(response);
      });
    queryClient.invalidateQueries("get-all-users");
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
