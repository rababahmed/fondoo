import { Box, Divider, Grid, Heading, Stack, VStack } from "@chakra-ui/layout";
import React, { useRef, useState } from "react";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import {
  CheckboxSingleControl,
  InputControl,
  NumberInputControl,
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
    currency: (isSuccess && data.restaurant.currency) || "",
    postCode: (isSuccess && data.restaurant.postCode) || "",
    vat: (isSuccess && data.restaurant.vat) || undefined,
    logo: (isSuccess && data.restaurant.logo) || "",
    url: (isSuccess && data.restaurant.url) || "",
    address: (isSuccess && data.restaurant.address) || "",
    country: (isSuccess && data.restaurant.country) || "",
    serviceCharge: (isSuccess && data.restaurant.serviceCharge) || undefined,
    hasParkingFacilities:
      (isSuccess && data.restaurant.hasParkingFacilities) || false,
    hasPartyFacilities:
      (isSuccess && data.restaurant.hasPartyFacilities) || false,
    hasKidsZone: (isSuccess && data.restaurant.hasKidsZone) || false,
    hasDelivery: (isSuccess && data.restaurant.hasDelivery) || false,
    hasPickup: (isSuccess && data.restaurant.hasPickup) || false,
    hasReservation: (isSuccess && data.restaurant.hasReservation) || false,
    isAutoAcceptOrder:
      (isSuccess && data.restaurant.isAutoAcceptOrder) || false,
    isAutoAcceptReservation:
      (isSuccess && data.restaurant.isAutoAcceptReservation) || false,
  };

  const validationSchema = Yup.object({
    name: Yup.string(),
    email: Yup.string(),
  });

  const [formData, setFormData] = useState(initialValues);

  const toast = useToast();

  const mutation = useGQLMutation(
    EDIT_RESTAURANT,
    {
      id: restaurantID,
      name: formData.name,
      coverImage: formData.coverImage,
      businessPhone: formData.businessPhone,
      city: formData.city,
      priceRange: formData.priceRange,
      cuisine: formData.cuisine,
      email: formData.email,
      currency: formData.currency,
      postCode: formData.postCode,
      vat: parseFloat(formData.vat),
      logo: formData.logo,
      url: formData.url,
      address: formData.address,
      country: formData.country,
      serviceCharge: parseFloat(formData.serviceCharge),
      hasParkingFacilities: formData.hasParkingFacilities,
      hasPartyFacilities: formData.hasPartyFacilities,
      hasKidsZone: formData.hasKidsZone,
      hasDelivery: formData.hasDelivery,
      hasPickup: formData.hasPickup,
      hasReservation: formData.hasReservation,
      isAutoAcceptOrder: formData.isAutoAcceptOrder,
      isAutoAcceptReservation: formData.isAutoAcceptReservation,
    },
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
    <Box
      as="section"
      rounded="lg"
      shadow="base"
      bgColor="white"
      p={8}
      overflowX={"auto"}
    >
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        enableReinitialize={true}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <Box as="form" onSubmit={handleSubmit as any}>
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} gap={8}>
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
                  <InputControl name="currency" label="Currency" />
                  <InputControl name="postCode" label="Post Code" />
                  <NumberInputControl name="vat" label="VAT (in percentage)" />
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
                  <InputControl name="address" label="Street Address" />
                  <InputControl name="country" label="Country" />
                  <NumberInputControl
                    name="serviceCharge"
                    label="Service Fee (in percentage)"
                  />
                </Stack>
              </Skeleton>
            </Grid>
            <Box mt={12} mb={6} />
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} gap={6}>
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
                  <CheckboxSingleControl name="hasDelivery">
                    Delivery
                  </CheckboxSingleControl>
                  <CheckboxSingleControl name="hasPickup">
                    Takeaway
                  </CheckboxSingleControl>
                  <CheckboxSingleControl name="hasReservation">
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
