import { Box, Grid, HStack, Stack, Text, VStack } from "@chakra-ui/layout";
import React, { useState } from "react";
import {
  useDisclosure,
  Popover,
  PopoverTrigger,
  IconButton,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import {
  CheckboxSingleControl,
  InputControl,
  SubmitButton,
} from "formik-chakra-ui";
import { Formik } from "formik";
import * as Yup from "yup";
import { useGQLMutation } from "../../../shared-hooks/useGQLMutation";
import { UPDATE_MENU_CATEGORY } from "../../../graphql/menu";
import { EditIcon } from "@chakra-ui/icons";

interface Props {
  id: String;
  name: String;
  description: String;
  isActive: Boolean;
  isFeatured: Boolean;
}

export const EditCategory = (props: Props) => {
  const { onOpen, onClose, isOpen } = useDisclosure();

  const initialValues = {
    id: props.id,
    name: props.name,
    description: props.description,
    isActive: props.isActive,
    isFeatured: props.isFeatured,
  };

  const validationSchema = Yup.object({
    name: Yup.string(),
    description: Yup.string(),
  });

  const [formData, setFormData] = useState(initialValues);

  const mutation = useGQLMutation(
    UPDATE_MENU_CATEGORY,
    formData,
    "get-menu-categories"
  );

  const onSubmit = async (values: any) => {
    setFormData(values);
    await mutation.mutate();
  };

  return (
    <>
      <Popover
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        closeOnBlur={true}
      >
        <PopoverTrigger>
          <IconButton
            colorScheme="gray"
            aria-label="Edit"
            size="sm"
            icon={<EditIcon />}
          />
        </PopoverTrigger>
        <PopoverContent p={6}>
          <PopoverArrow />
          <PopoverCloseButton />
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
                    <InputControl name="name" label="Name" />
                    <InputControl name="description" label="Description" />
                    <HStack>
                      <CheckboxSingleControl name="isActive">
                        Active
                      </CheckboxSingleControl>
                      <CheckboxSingleControl name="isFeatured">
                        Featured
                      </CheckboxSingleControl>
                    </HStack>
                  </Stack>
                </Grid>
                <Stack mt={10} pb={2}>
                  <VStack>
                    <SubmitButton
                      loadingText="Updating"
                      w={40}
                      colorScheme="green"
                    >
                      Save
                    </SubmitButton>
                  </VStack>
                </Stack>
              </Box>
            )}
          </Formik>
        </PopoverContent>
      </Popover>
    </>
  );
};
