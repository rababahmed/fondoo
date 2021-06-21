import { Box, Grid, Stack, Text, VStack } from "@chakra-ui/layout";
import React, { useState } from "react";
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
import {
  InputControl,
  SelectControl,
  SubmitButton,
  SwitchControl,
} from "formik-chakra-ui";
import { Formik } from "formik";
import * as Yup from "yup";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import * as Constants from "../../Constants";
import { useUserStore } from "../../../store/useUserStore";
import { useRouter } from "next/router";

export const AddRestaurant = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialValues = {
    name: "",
    email: "",
    domain: "",
    primaryColor: "",
    secondaryColor: "",
    plan: "",
    isActive: true,
  };

  const validationSchema = Yup.object({
    firstName: Yup.string(),
    email: Yup.string(),
  });

  const [formData, setFormData] = useState(initialValues);

  const router = useRouter();

  const queryClient = useQueryClient();

  const onSubmit = async (values: any) => {
    const addUser = await axios
      .post(Constants.REST_API_V1 + "/user/signup", values)
      .then(function (response) {
        console.log(response);
      });
    queryClient.invalidateQueries("get-restaurant-users");
  };

  return (
    <Box mb={4}>
      <PrimaryButton onClick={onOpen} title="Add Restaurant" />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a New Restaurant</ModalHeader>
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
                      <InputControl name="name" label="Restaurant Name" />
                      <InputControl name="email" label="Restaurant Email" />
                      <InputControl
                        inputProps={{ placeholder: "example.com" }}
                        name="domain"
                        label="Domain"
                      />
                      <InputControl name="primaryColor" label="Primary Color" />
                      <InputControl
                        name="secondaryColor"
                        label="Secondary Color"
                      />
                      <SelectControl label="Restaurant Plan" name="plan">
                        <option value="Waiter">STARTER</option>
                        <option value="Manager">PRO</option>
                        <option value="Owner">ENTERPRISE</option>
                      </SelectControl>
                      <SwitchControl name="isActive" label="Active" />
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
