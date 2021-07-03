import {
  Box,
  Divider,
  Grid,
  Heading,
  HStack,
  Stack,
  VStack,
} from "@chakra-ui/layout";
import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  CheckboxSingleControl,
  InputControl,
  SubmitButton,
  TextareaControl,
} from "formik-chakra-ui";
import { Skeleton } from "@chakra-ui/skeleton";
import { useGQLMutation } from "../../shared-hooks/useGQLMutation";
import { useToast } from "@chakra-ui/toast";
import { useUserStore } from "../../store/useUserStore";
import { useGQLQuery } from "../../shared-hooks/useGQLQuery";
import { Tag } from "@chakra-ui/tag";
import { GET_CMS_HOME } from "../../graphql/cms";

export const CMSHome = () => {
  const restaurantID = useUserStore((state) => state.restaurantID);

  const { data, error, isLoading, isSuccess } = useGQLQuery(
    "get-restaurant-cms",
    GET_CMS_HOME,
    {
      id: restaurantID,
    }
  );

  const initialValues = {
    heroHeading: data ? data.restaurant.CMSHome.heroHeading : "",
    heroDescription: data ? data.restaurant.CMSHome.heroDescription : "",
    heroImage: data ? data.restaurant.CMSHome.heroImage : "",
    aboutHeading: data ? data.restaurant.CMSHome.aboutHeading : "",
    aboutDescription: data ? data.restaurant.CMSHome.aboutDescription : "",
    aboutImage: data ? data.restaurant.CMSHome.aboutImage : "",
    dealsHeading: data ? data.restaurant.CMSHome.dealsHeading : "",
    dealsDescription: data ? data.restaurant.CMSHome.dealsDescription : "",
    dealsImage: data ? data.restaurant.CMSHome.dealsImage : "",
    reservationHeading: data ? data.restaurant.CMSHome.reservationHeading : "",
    reservationDescription: data
      ? data.restaurant.CMSHome.reservationDescription
      : "",
    reservationImage: data ? data.restaurant.CMSHome.reservationImage : "",
    popularDishesHeading: data
      ? data.restaurant.CMSHome.popularDishesHeading
      : "",
    popularDishesDescription: data
      ? data.restaurant.CMSHome.popularDishesDescription
      : "",
    popularDishesImage: data ? data.restaurant.CMSHome.popularDishesImage : "",
  };

  console.log(data);

  const validationSchema = Yup.object({
    name: Yup.string(),
    email: Yup.string(),
  });

  const [formData, setFormData] = useState(initialValues);

  const [isSLoading, setIsSLoading] = useState(false);

  const toast = useToast();

  const onSubmit = async (values: any) => {};

  return (
    <>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        enableReinitialize={true}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <Box as="form" onSubmit={handleSubmit as any}>
            <Skeleton isLoaded={!isLoading}>
              <Box
                as="section"
                rounded="lg"
                shadow="base"
                bgColor="white"
                mr={6}
                ml={6}
                p={8}
              >
                <Tag bgColor="primary.800" color="white" size="lg" mb={6}>
                  Hero Section
                </Tag>
                <HStack spacing="6">
                  <TextareaControl name="heroHeading" label="Heading" />
                  <TextareaControl name="heroDescription" label="Description" />
                </HStack>
              </Box>
            </Skeleton>
            <Skeleton isLoaded={!isLoading}>
              <Box
                as="section"
                rounded="lg"
                shadow="base"
                bgColor="white"
                mt={6}
                mr={6}
                ml={6}
                p={8}
              >
                <Tag bgColor="primary.800" color="white" size="lg" mb={6}>
                  About Section
                </Tag>
                <HStack spacing="6">
                  <TextareaControl name="aboutHeading" label="Heading" />
                  <TextareaControl
                    name="aboutDescription"
                    label="Description"
                  />
                </HStack>
              </Box>
            </Skeleton>
            <Skeleton isLoaded={!isLoading}>
              <Box
                as="section"
                rounded="lg"
                shadow="base"
                bgColor="white"
                mt={6}
                mr={6}
                ml={6}
                p={8}
              >
                <Tag bgColor="primary.800" color="white" size="lg" mb={6}>
                  Deals Section
                </Tag>
                <HStack spacing="6">
                  <TextareaControl name="dealsHeading" label="Heading" />
                  <TextareaControl
                    name="dealsDescription"
                    label="Description"
                  />
                </HStack>
              </Box>
            </Skeleton>
            <Skeleton isLoaded={!isLoading}>
              <Box
                as="section"
                rounded="lg"
                shadow="base"
                bgColor="white"
                mt={6}
                mr={6}
                ml={6}
                p={8}
              >
                <Tag bgColor="primary.800" color="white" size="lg" mb={6}>
                  Reservation Section
                </Tag>
                <HStack spacing="6">
                  <TextareaControl name="reservationHeading" label="Heading" />
                  <TextareaControl
                    name="reservationDescription"
                    label="Description"
                  />
                </HStack>
              </Box>
            </Skeleton>
            <Skeleton isLoaded={!isLoading}>
              <Box
                as="section"
                rounded="lg"
                shadow="base"
                bgColor="white"
                mt={6}
                mr={6}
                ml={6}
                p={8}
              >
                <Tag bgColor="primary.800" color="white" size="lg" mb={6}>
                  Popular Dishes Section
                </Tag>
                <HStack spacing="6">
                  <TextareaControl
                    name="popularDishesHeading"
                    label="Heading"
                  />
                  <TextareaControl
                    name="popularDishesDescription"
                    label="Description"
                  />
                </HStack>
              </Box>
            </Skeleton>
            <Skeleton isLoaded={!isLoading}>
              <Stack mt={10} pb={2}>
                <VStack>
                  <SubmitButton
                    isLoading={isSLoading}
                    loadingText="Updating"
                    w={40}
                    bgColor={isSLoading ? "green.500" : "primary.800"}
                    _active={{ bgColor: "primary.800" }}
                    _hover={{ bgColor: "primary.900" }}
                  >
                    Update
                  </SubmitButton>
                </VStack>
              </Stack>
            </Skeleton>
          </Box>
        )}
      </Formik>
    </>
  );
};
