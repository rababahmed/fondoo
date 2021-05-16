import { Box, Grid, Heading, Stack, VStack } from "@chakra-ui/layout";
import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { InputControl, SubmitButton } from "formik-chakra-ui";
import { useGetRestaurant } from "../../shared-hooks/useGetRestaurant";
import { Skeleton } from "@chakra-ui/skeleton";
import { gql } from "graphql-request";
import { useGQLMutation } from "../../shared-hooks/useGQLMutation";

const EDIT_RESTAURANT = gql`
  mutation UpdateRestaurant($name: String, $email: String, $url: String) {
    updateRestaurant(
      data: { name: { set: $name }, email: { set: $email }, url: { set: $url } }
      where: { id: "e5b22e29-fe36-46e8-8417-468d9c9445d9" }
    ) {
      name
      email
    }
  }
`;

export const SettingsModule = () => {
  const { data, error, isLoading, isSuccess } = useGetRestaurant();

  const initialValues = {
    name: (isSuccess && data.name) || "",
    coverImage: (isSuccess && data.coverImage) || "",
    businessMobile: (isSuccess && data.businessMobile) || "",
    city: (isSuccess && data.city) || "",
    priceRange: (isSuccess && data.priceRange) || "",
    cuisine: (isSuccess && data.cuisine) || "",
    email: (isSuccess && data.email) || "",
    reservationMobile: (isSuccess && data.reservationMobile) || "",
    postCode: (isSuccess && data.postCode) || "",
    vat: (isSuccess && data.vat) || "",
    logo: (isSuccess && data.logo) || "",
    url: (isSuccess && data.url) || "",
    streetAddress: (isSuccess && data.streetAddress) || "",
    country: (isSuccess && data.country) || "",
    serviceCharge: (isSuccess && data.serviceCharge) || "",
  };

  const validationSchema = Yup.object({
    name: Yup.string(),
    email: Yup.string(),
  });

  const [formData, setFormData] = useState({ name: "", email: "", url: "" });

  const mutation = useGQLMutation("update-restaurant", EDIT_RESTAURANT, {
    name: formData.name,
    email: formData.email,
    url: formData.url,
  });

  const onSubmit = async (values: any) => {
    setFormData(values);
    console.log(formData);
    mutation.mutate();
  };

  return (
    <Box as="section" rounded="lg" shadow="base" bgColor="white" m={12} p={6}>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        enableReinitialize={true}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <Box as="form" onSubmit={handleSubmit as any}>
            <Grid templateColumns="1fr 1fr 1fr" gap={6}>
              <Skeleton isLoaded={!isLoading}>
                <Stack spacing="6">
                  <InputControl name="name" label="Restaurant Name" />
                  <InputControl name="coverImage" label="Cover Image" />
                  <InputControl name="businessMobile" label="Business Mobile" />
                  <InputControl name="city" label="City / Town" />
                  <InputControl name="priceRange" label="Price Range" />
                </Stack>
              </Skeleton>
              <Skeleton isLoaded={!isLoading}>
                <Stack spacing="6">
                  <InputControl name="cuisine" label="Cuisine" />
                  <InputControl name="email" label="Restaurant Email" />
                  <InputControl
                    name="reservationMobile"
                    label="Reservation Mobile"
                  />
                  <InputControl name="postCode" label="Post Code" />
                  <InputControl name="vat" label="VAT" />
                </Stack>
              </Skeleton>
              <Skeleton isLoaded={!isLoading}>
                <Stack spacing="6">
                  <InputControl name="logo" label="Logo" />
                  <InputControl name="url" label="Restaurant URL" />
                  <InputControl name="streetAddress" label="Street Address" />
                  <InputControl name="country" label="Country" />
                  <InputControl name="serviceCharge" label="Service Charge" />
                </Stack>
              </Skeleton>
            </Grid>
            <Skeleton isLoaded={!isLoading}>
              <Stack mt={6} pb={2}>
                <VStack>
                  <SubmitButton
                    w={40}
                    bgColor="gray.700"
                    _active={{ bgColor: "gray.500" }}
                    _hover={{ bgColor: "gray.800" }}
                  >
                    Update
                  </SubmitButton>
                </VStack>
              </Stack>
            </Skeleton>
          </Box>
        )}
      </Formik>
    </Box>
  );
};
