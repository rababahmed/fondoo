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
import { useGQLQuery } from "../../../shared-hooks/useGQLQuery";
import { GET_ALL_RESTAURANTS_INFO } from "../../../graphql/admin/restaurant";

export const AdminAddUser = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    restaurantID: null,
  };

  const validationSchema = Yup.object({
    firstName: Yup.string(),
    email: Yup.string(),
  });

  const queryClient = useQueryClient();

  const restaurantQuery = useGQLQuery(
    "get-all-restaurant-selectors",
    GET_ALL_RESTAURANTS_INFO
  );

  console.log(restaurantQuery);

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
                      <SelectControl
                        label="Role"
                        name="role"
                        selectProps={{ placeholder: "Select Role" }}
                      >
                        <option value="Manager">Manager</option>
                        <option value="Owner">Restaurant Owner</option>
                        <option value="Admin">Admin</option>
                      </SelectControl>
                      <SelectControl
                        label="Restaurant"
                        name="restaurantID"
                        selectProps={{ placeholder: "Select Restaurant" }}
                      >
                        {restaurantQuery.data.restaurants.map((rs: any) => (
                          <option key={rs.id} value={rs.id}>
                            {rs.name}
                          </option>
                        ))}
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
