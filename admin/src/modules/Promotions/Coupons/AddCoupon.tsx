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
  NumberInputControl,
  SelectControl,
  SubmitButton,
} from "formik-chakra-ui";
import { Formik } from "formik";
import * as Yup from "yup";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import * as Constants from "../../Constants";
import { useUserStore } from "../../../store/useUserStore";
import { useRouter } from "next/router";
import { useGQLMutation } from "../../../shared-hooks/useGQLMutation";
import {
  ADD_RESTAURANT_COUPON,
  ADD_RESTAURANT_OFFER,
} from "../../../graphql/restaurant";
import FormInput from "../../../components/Forms/FormInput";

export const AddCoupon = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const restaurantID = useUserStore((state) => state.restaurantID);

  const initialValues = {
    code: "",
    description: "",
    discount: "",
    value: "",
    startDate: undefined,
    endDate: undefined,
    id: restaurantID,
  };

  const validationSchema = Yup.object({
    code: Yup.string(),
    description: Yup.string(),
  });

  const [formData, setFormData] = useState(initialValues);

  const mutation = useGQLMutation(
    ADD_RESTAURANT_COUPON,
    {
      code: formData.code,
      description: formData.description,
      discount: formData.discount,
      value: parseFloat(formData.value),
      startDate: formData.startDate,
      endDate: formData.endDate,
      id: restaurantID,
    },
    "get-restaurant-coupons"
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
      <PrimaryButton onClick={onOpen} title="Add Coupon" />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a New Coupon</ModalHeader>
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
                      <InputControl name="code" label="Code" />
                      <InputControl name="description" label="Description" />
                      <SelectControl
                        label="Discount Type"
                        name="discount"
                        selectProps={{ placeholder: "Select type" }}
                      >
                        <option value="Fixed">Fixed</option>
                        <option value="Percent">Percent</option>
                      </SelectControl>
                      <NumberInputControl
                        name="value"
                        label="Discount Amount"
                      />
                      {/* <FormInput
                        id="value"
                        label="Discount Amount"
                        type="number"
                        step="0.01"
                      /> */}
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
