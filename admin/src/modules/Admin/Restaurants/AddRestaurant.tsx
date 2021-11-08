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
  useToast,
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
import { domainGenerator } from "../../../lib/domainGenerator";
import axios from "axios";
import { API } from "../../../config";

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
    primaryColor: Yup.string().required(),
    secondaryColor: Yup.string().required(),
    plan: Yup.string().required(),
  });

  const [formData, setFormData] = useState(initialValues);

  const mutation = useGQLMutation(
    ADD_NEW_RESTAURANT,
    {
      name: formData.name,
      domain: domainGenerator(formData.name),
      primaryColor: formData.primaryColor,
      secondaryColor: formData.secondaryColor,
      plan: formData.plan,
      isActive: formData.isActive,
    },
    "get-all-restaurants-info"
  );

  const toast = useToast();

  const onSubmit = async (values: any) => {
    setFormData(values);
    mutation
      .mutateAsync()
      .then(async (res) => {
        axios
          .post(API + "/domains/" + res.data.config.domains[0].domain)
          .then((res) => {
            if (res.status === 200) {
              toast({
                title: "Restaurant and domain added!",
                status: "success",
                duration: 5000,
                isClosable: true,
              });
              onClose();
            }
          })
          .catch((err) => {
            toast({
              title: "Error adding domain!",
              status: "error",
              duration: 5000,
              isClosable: true,
            });
          });
      })
      .catch((err) => {
        toast({
          title: "Error adding restaurant!",
          status: "error",
        });
      });
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
