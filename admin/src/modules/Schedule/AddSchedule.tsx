import { Box, Grid, HStack, Stack, Text, VStack } from "@chakra-ui/layout";
import React, { useState } from "react";
import { Skeleton } from "@chakra-ui/skeleton";
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
  Radio,
} from "@chakra-ui/react";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import {
  CheckboxSingleControl,
  InputControl,
  NumberInputControl,
  RadioGroupControl,
  SelectControl,
  SubmitButton,
} from "formik-chakra-ui";
import { Formik } from "formik";
import * as Yup from "yup";
import { useUserStore } from "../../store/useUserStore";
import { useGQLMutation } from "../../shared-hooks/useGQLMutation";
import { ADD_RESTAURANT_SCHEDULE } from "../../graphql/restaurant";

export const AddSchedule = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const restaurantID = useUserStore((state) => state.restaurantID);

  const initialValues = {
    day: "",
    openingTime: "",
    closingTime: "",
    deliveryTime: 40,
    takeawayTime: 40,
    restaurantID: restaurantID,
  };

  const validationSchema = Yup.object({
    day: Yup.string().required(),
    openingTime: Yup.string().required(),
    closingTime: Yup.string().required(),
    deliveryTime: Yup.string().required(),
    takeawayTime: Yup.string().required(),
  });

  const [formData, setFormData] = useState(initialValues);

  const mutation = useGQLMutation(
    ADD_RESTAURANT_SCHEDULE,
    formData,
    "get-restaurant-schedules"
  );

  const onSubmit = async (values: any, { resetForm }: any) => {
    setFormData(values);
    await mutation.mutate();
    mutation.isSuccess ? resetForm() : null;
  };

  return (
    <Box mb={4}>
      <PrimaryButton onClick={onOpen} title="Add Item" />

      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a New Schedule</ModalHeader>
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
                      <SelectControl
                        label="Day"
                        name="day"
                        selectProps={{ placeholder: "Select day" }}
                      >
                        <option value="Sunday">Sunday</option>
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                      </SelectControl>
                      <HStack>
                        <InputControl
                          inputProps={{ type: "time" }}
                          name="openingTime"
                          label="Opening Time"
                        />
                        <InputControl
                          inputProps={{ type: "time" }}
                          name="closingTime"
                          label="Closing Time"
                        />
                      </HStack>
                      <HStack>
                        <NumberInputControl
                          name="deliveryTime"
                          label="Delivery Time (in minutes)"
                        />
                        <NumberInputControl
                          name="takeawayTime"
                          label="Takeaway Time (in minutes)"
                        />
                      </HStack>
                    </Stack>
                  </Grid>
                  <Stack mt={10} pb={2}>
                    <VStack>
                      <SubmitButton
                        isLoading={mutation.isLoading}
                        loadingText="Adding"
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
