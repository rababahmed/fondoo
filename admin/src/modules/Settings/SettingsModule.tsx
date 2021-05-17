import { Box, Divider, Grid, Heading, Stack, VStack } from "@chakra-ui/layout";
import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  CheckboxSingleControl,
  InputControl,
  SubmitButton,
} from "formik-chakra-ui";
import { useGetRestaurant } from "../../shared-hooks/useGetRestaurant";
import { Skeleton } from "@chakra-ui/skeleton";
import { gql } from "graphql-request";
import { useGQLMutation } from "../../shared-hooks/useGQLMutation";
import { useToast } from "@chakra-ui/toast";

const EDIT_RESTAURANT = gql`
  mutation UpdateRestaurant(
    $name: String
    $email: String
    $url: String
    $businessPhone: String
    $city: String
    $priceRange: String
  ) {
    updateRestaurant(
      data: {
        name: { set: $name }
        email: { set: $email }
        url: { set: $url }
        businessPhone: { set: $businessPhone }
        city: { set: $city }
        priceRange: { set: $priceRange }
      }
      where: { id: "e5b22e29-fe36-46e8-8417-468d9c9445d9" }
    ) {
      name
      email
    }
  }
`;

export const SettingsModule = () => {
  const { data, error, isLoading, isSuccess } = useGetRestaurant();
  console.log(data);

  const initialValues = {
    name: (isSuccess && data.name) || "",
    coverImage: (isSuccess && data.coverImage) || "",
    businessPhone: (isSuccess && data.businessPhone) || "",
    city: (isSuccess && data.city) || "",
    priceRange: (isSuccess && data.priceRange) || "",
    cuisine: (isSuccess && data.cuisine) || "",
    email: (isSuccess && data.email) || "",
    reservationPhone: (isSuccess && data.reservationPhone) || "",
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

  const [formData, setFormData] = useState(initialValues);

  const toast = useToast();

  const mutation = useGQLMutation("update-restaurant", EDIT_RESTAURANT, {
    name: formData.name,
    email: formData.email,
    url: formData.url,
    businessPhone: formData.businessPhone,
    city: formData.city,
    priceRange: formData.priceRange,
    cuisine: formData.cuisine,
  });

  const onSubmit = async (values: any) => {
    setFormData(values);
    mutation.mutate();
    if (await mutation.isSuccess) {
      toast({
        title: "Success!",
        description: "Successfully updated the info.",
        status: "success",
        isClosable: true,
        position: "top",
      });
    } else {
      toast({
        title: "Whoops! Error.",
        description: "Unable to update.",
        status: "error",
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <Box
      as="section"
      rounded="lg"
      shadow="base"
      bgColor="white"
      mr={6}
      ml={6}
      p={8}
    >
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        enableReinitialize={true}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <Box as="form" onSubmit={handleSubmit as any}>
            <Grid templateColumns="1fr 1fr 1fr" gap={8}>
              <Skeleton isLoaded={!isLoading}>
                <Stack spacing="6">
                  <InputControl name="name" label="Restaurant Name" />
                  <InputControl name="coverImage" label="Cover Image" />
                  <InputControl name="businessPhone" label="Business Phone" />
                  <InputControl name="city" label="City / Town" />
                  <InputControl name="priceRange" label="Price Range" />
                </Stack>
              </Skeleton>
              <Skeleton isLoaded={!isLoading}>
                <Stack spacing="6">
                  <InputControl name="cuisine" label="Cuisine" />
                  <InputControl name="email" label="Restaurant Email" />
                  <InputControl
                    name="reservationPhone"
                    label="Reservation Phone"
                  />
                  <InputControl name="postCode" label="Post Code" />
                  <InputControl name="vat" label="VAT" />
                </Stack>
              </Skeleton>
              <Skeleton isLoaded={!isLoading}>
                <Stack spacing="6">
                  <InputControl name="logo" label="Logo" />
                  <InputControl
                    name="url"
                    label="Restaurant URL"
                    inputProps={{ placeholder: "your-site.com" }}
                  />
                  <InputControl name="streetAddress" label="Street Address" />
                  <InputControl name="country" label="Country" />
                  <InputControl name="serviceCharge" label="Service Charge" />
                </Stack>
              </Skeleton>
            </Grid>
            <Box mt={12} mb={6} />
            <Grid templateColumns="1fr 1fr 1fr" gap={6}>
              <Skeleton isLoaded={!isLoading}>
                <Stack spacing="6">
                  <CheckboxSingleControl name="hasParking">
                    Parking Facilities
                  </CheckboxSingleControl>
                  <CheckboxSingleControl name="hasPartyFacilities">
                    Party Facilities
                  </CheckboxSingleControl>
                  <CheckboxSingleControl name="hasKidsZone">
                    Kid's Zone
                  </CheckboxSingleControl>
                </Stack>
              </Skeleton>
              <Skeleton isLoaded={!isLoading}>
                <Stack spacing="6">
                  <CheckboxSingleControl name="delivery">
                    Delivery
                  </CheckboxSingleControl>
                  <CheckboxSingleControl name="takeaway">
                    Takeaway
                  </CheckboxSingleControl>
                  <CheckboxSingleControl name="reservation">
                    Reservation
                  </CheckboxSingleControl>
                </Stack>
              </Skeleton>
              <Skeleton isLoaded={!isLoading}>
                <Stack spacing="6">
                  <CheckboxSingleControl name="isAutoAcceptOrder">
                    Auto Accept Orders
                  </CheckboxSingleControl>
                  <CheckboxSingleControl name="isAutoAccept Reservation">
                    Auto Accept Reservations
                  </CheckboxSingleControl>
                </Stack>
              </Skeleton>
            </Grid>
            <Skeleton isLoaded={!isLoading}>
              <Stack mt={10} pb={2}>
                <VStack>
                  <SubmitButton
                    isLoading={mutation.isLoading}
                    loadingText="Updating"
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
