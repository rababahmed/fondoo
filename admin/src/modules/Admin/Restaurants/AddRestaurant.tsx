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
import { useGQLQuery } from "../../../shared-hooks/useGQLQuery";
import {
  ADD_NEW_RESTAURANT,
  GET_ALL_RESTAURANT_PLANS,
} from "../../../graphql/admin/restaurant";
import { useGQLMutation } from "../../../shared-hooks/useGQLMutation";

export const AddRestaurant = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialValues = {
    name: "",
    domain: "",
    primaryColor: "",
    secondaryColor: "",
    plan: "",
    isActive: true,
  };

  const urlvalidation = /^(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;

  const validationSchema = Yup.object({
    name: Yup.string().required(),
    domain: Yup.string().matches(urlvalidation, "Domain is not valid"),
    primaryColor: Yup.string().required(),
    secondaryColor: Yup.string().required(),
    plan: Yup.string().required(),
  });

  const [formData, setFormData] = useState(initialValues);

  const mutation = useGQLMutation(
    ADD_NEW_RESTAURANT,
    formData,
    "get-all-restaurants-info"
  );

  const onSubmit = async (values: any) => {
    setFormData(values);
    console.log(values);
    mutation.mutate();
  };

  const getPlans = useGQLQuery(
    "get-restaurant-plans",
    GET_ALL_RESTAURANT_PLANS
  );

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
                      <SelectControl
                        label="Restaurant Plan"
                        name="plan"
                        selectProps={{ placeholder: "Select plan" }}
                      >
                        {getPlans.data.restaurantPlans.map((s: any) => (
                          <option key={s.id} value={s.id}>
                            {s.name}
                          </option>
                        ))}
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
