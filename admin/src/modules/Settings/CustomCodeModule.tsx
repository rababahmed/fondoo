import { Box, Divider, Grid, Heading, Stack, VStack } from "@chakra-ui/layout";
import { Switch } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import {
  CheckboxSingleControl,
  InputControl,
  SubmitButton,
  SwitchControl,
  TextareaControl,
} from "formik-chakra-ui";
import { useGetRestaurant } from "../../shared-hooks/useGetRestaurant";
import { Skeleton } from "@chakra-ui/skeleton";
import { gql } from "graphql-request";
import { useGQLMutation } from "../../shared-hooks/useGQLMutation";
import { useToast } from "@chakra-ui/react";
import { useUserStore } from "../../store/useUserStore";
import { useGQLQuery } from "../../shared-hooks/useGQLQuery";
import {
  GET_RESTAURANT_CONFIG,
  UPDATE_RESTAURANT_APPEARANCE,
  UPDATE_RESTAURANT_CUSTOM_CODE,
} from "../../graphql/restaurant";

import SaveButton from "../../components/Buttons/SaveButton";

export const CustomCodeModule = () => {
  const restaurantID = useUserStore((state) => state.restaurantID);
  const token = useUserStore((state) => state.token);

  const { data, error, isLoading, isSuccess } = useGQLQuery(
    "get-restaurant-custom-code",
    GET_RESTAURANT_CONFIG,
    {
      id: restaurantID,
    }
  );

  const initialValues = {
    id: restaurantID,
    customHeaderTags:
      (isSuccess && data.restaurant.config.customHeaderTags) || "",
    customFooterTags:
      (isSuccess && data.restaurant.config.customFooterTags) || "",
  };

  const validationSchema = Yup.object({
    customHeaderTags: Yup.string(),
    customFooterTags: Yup.string(),
  });

  const [formData, setFormData] = useState(initialValues);

  const toast = useToast();

  const mutation = useGQLMutation(
    UPDATE_RESTAURANT_CUSTOM_CODE,
    formData,
    "get-restaurant-custom-code"
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
        {({ handleSubmit, values, errors }) => (
          <Box as="form" onSubmit={handleSubmit as any}>
            <Skeleton isLoaded={!isLoading}>
              <Stack spacing="6">
                <TextareaControl
                  name="customHeaderTags"
                  label="Header"
                  textareaProps={{
                    placeholder: "Enter your custom code here",
                  }}
                />
                <TextareaControl
                  name="customFooterTags"
                  label="Footer"
                  textareaProps={{
                    placeholder: "Enter your custom code here",
                  }}
                />
              </Stack>
            </Skeleton>

            <Stack mt={10} pb={2}>
              <VStack>
                <SaveButton isLoading={mutation.isLoading} />
              </VStack>
            </Stack>
          </Box>
        )}
      </Formik>
    </Box>
  );
};
