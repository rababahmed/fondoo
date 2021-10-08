import { Box, Divider, Grid, Heading, Stack, VStack } from "@chakra-ui/layout";
import React, { useRef, useState } from "react";
import { Field, Formik } from "formik";
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
import { useUserStore } from "../../store/useUserStore";
import { useGQLQuery } from "../../shared-hooks/useGQLQuery";
import { EDIT_RESTAURANT, GET_RESTAURANT_INFO } from "../../graphql/restaurant";

import ImageUpload from "../../components/Forms/ImageUpload";
import SaveButton from "../../components/Buttons/SaveButton";

export const SettingsModule = () => {
  const restaurantID = useUserStore((state) => state.restaurantID);
  const token = useUserStore((state) => state.token);

  const { data, error, isLoading, isSuccess } = useGQLQuery(
    "get-restaurant-info",
    GET_RESTAURANT_INFO,
    {
      id: restaurantID,
    }
  );

  const initialValues = {
    id: restaurantID,
    name: (isSuccess && data.restaurant.name) || "",
    coverImage: (isSuccess && data.restaurant.coverImage) || "",
    businessPhone: (isSuccess && data.restaurant.businessPhone) || "",
    city: (isSuccess && data.restaurant.city) || "",
    priceRange: (isSuccess && data.restaurant.priceRange) || "",
    cuisine: (isSuccess && data.restaurant.cuisine) || "",
    email: (isSuccess && data.restaurant.email) || "",
    reservationPhone: (isSuccess && data.restaurant.reservationPhone) || "",
    postCode: (isSuccess && data.restaurant.postCode) || "",
    vat: (isSuccess && data.restaurant.vat) || "",
    logo: (isSuccess && data.restaurant.logo) || "",
    url: (isSuccess && data.restaurant.url) || "",
    streetAddress: (isSuccess && data.restaurant.streetAddress) || "",
    country: (isSuccess && data.restaurant.country) || "",
    serviceCharge: (isSuccess && data.restaurant.serviceCharge) || "",
  };

  const validationSchema = Yup.object({
    name: Yup.string(),
    email: Yup.string(),
  });

  const [formData, setFormData] = useState(initialValues);

  const toast = useToast();

  const mutation = useGQLMutation(
    EDIT_RESTAURANT,
    formData,
    "get-restaurant-info"
  );

  const onSubmit = async (values: any) => {
    setFormData(values);
    const response = await mutation.mutate();
    if (mutation.isError) {
      toast({
        title: "Whoops! There has been an error.",
        status: "error",
        isClosable: true,
        position: "top",
      });
    } else {
      toast({
        title: "Success! Your changes have been saved.",
        status: "success",
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <Box as="section" rounded="lg" shadow="base" bgColor="white" p={8}>
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
                  <Field
                    name="coverImage"
                    id="coverImage"
                    label="Cover Image"
                    component={ImageUpload}
                  />
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
                  <Field
                    name="logo"
                    id="logo"
                    label="Logo"
                    component={ImageUpload}
                  />
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
                    Kids Zone
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
                  <SaveButton isLoading={mutation.isLoading} />
                </VStack>
              </Stack>
            </Skeleton>
          </Box>
        )}
      </Formik>
    </Box>
  );
};
