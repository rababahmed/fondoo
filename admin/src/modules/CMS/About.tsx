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
import { Field, Formik } from "formik";
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
import {
  GET_CMS_ABOUT,
  GET_CMS_HOME,
  UPDATE_CMS_ABOUT,
  UPDATE_CMS_HOME,
} from "../../graphql/cms";
import SaveButton from "../../components/Buttons/SaveButton";
import ImageUpload from "../../components/Forms/ImageUpload";

export const CMSAbout = () => {
  const restaurantID = useUserStore((state) => state.restaurantID);

  const { data, error, isLoading, isSuccess } = useGQLQuery(
    "get-restaurant-cms-about",
    GET_CMS_ABOUT,
    {
      id: restaurantID,
    }
  );

  const initialValues = {
    restaurantID: restaurantID,
    storyHeading: data ? data.restaurant.CMSAbout.storyHeading : "",
    storyDescription: data ? data.restaurant.CMSAbout.storyDescription : "",
    storyImage: data ? data.restaurant.CMSAbout.storyImage : "",
  };

  console.log(data);

  const validationSchema = Yup.object({
    name: Yup.string(),
    email: Yup.string(),
  });

  const [formData, setFormData] = useState(initialValues);

  const toast = useToast();

  const mutation = useGQLMutation(
    UPDATE_CMS_ABOUT,
    formData,
    "get-restaurant-cms-about"
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
    }
    if (mutation.isSuccess) {
      toast({
        title: "Success! Your changes have been saved.",
        status: "success",
        isClosable: true,
        position: "top",
      });
    }
  };

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
                mt={6}
                mr={6}
                ml={6}
                p={8}
              >
                <Tag bgColor="primary.800" color="white" size="lg" mb={6}>
                  Our Story
                </Tag>
                <HStack spacing="6">
                  <TextareaControl name="storyHeading" label="Heading" />
                  <TextareaControl
                    name="storyDescription"
                    label="Description"
                  />
                </HStack>
                <Field
                  name="storyImage"
                  id="storyImage"
                  label="Image"
                  component={ImageUpload}
                />
              </Box>
            </Skeleton>

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
    </>
  );
};
