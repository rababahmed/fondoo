import { Box, Grid, Stack, Text, VStack } from "@chakra-ui/layout";
import React, { useState } from "react";
import { Skeleton } from "@chakra-ui/skeleton";
import { gql } from "graphql-request";
import { useGQLQuery } from "../../../shared-hooks/useGQLQuery";
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
  CheckboxSingleControl,
  InputControl,
  SelectControl,
  SubmitButton,
} from "formik-chakra-ui";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import * as Constants from "../../Constants";
import { useUserStore } from "../../../store/useUserStore";
import { useRouter } from "next/router";
import { useGQLMutation } from "../../../shared-hooks/useGQLMutation";
import { ADD_RESTAURANT_OFFER } from "../../../graphql/restaurant";
import ImageUpload from "../../../components/Forms/ImageUpload";

export const AddOffer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const restaurantID = useUserStore((state) => state.restaurantID);

  const initialValues = {
    name: "",
    description: "",
    image: "",
    startDate: undefined,
    endDate: undefined,
    isActive: true,
    id: restaurantID,
  };

  const validationSchema = Yup.object({
    name: Yup.string(),
    description: Yup.string(),
  });

  const [formData, setFormData] = useState(initialValues);

  const mutation = useGQLMutation(
    ADD_RESTAURANT_OFFER,
    formData,
    "get-restaurant-offers"
  );

  const router = useRouter();

  const queryClient = useQueryClient();

  const onSubmit = async (values: any, { resetForm }: any) => {
    setFormData(values);
    console.log(formData);
    await mutation.mutate();
    mutation.isSuccess ? resetForm() : null;
  };

  return (
    <Box mb={4}>
      <PrimaryButton onClick={onOpen} title="Add Offer" />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a New Offer</ModalHeader>
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
                      <InputControl name="name" label="Campaign Name" />
                      <InputControl name="description" label="Description" />
                      <Field
                        name="image"
                        id="image"
                        label="Image"
                        component={ImageUpload}
                      />
                      <InputControl
                        inputProps={{ type: "date" }}
                        name="startDate"
                        label="Start Date"
                      />
                      <InputControl
                        inputProps={{ type: "date" }}
                        name="endDate"
                        label="End Date"
                      />

                      <CheckboxSingleControl name="isActive">
                        Active
                      </CheckboxSingleControl>
                    </Stack>
                  </Grid>
                  <Stack mt={10} pb={2}>
                    <VStack>
                      <SubmitButton
                        isLoading={mutation.isLoading}
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
