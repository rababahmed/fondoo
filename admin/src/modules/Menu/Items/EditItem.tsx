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
  Radio,
} from "@chakra-ui/react";
import {
  CheckboxSingleControl,
  InputControl,
  NumberInputControl,
  RadioGroupControl,
  SubmitButton,
} from "formik-chakra-ui";
import { Formik } from "formik";
import * as Yup from "yup";
import { useGQLMutation } from "../../../shared-hooks/useGQLMutation";
import { EDIT_MENU_ITEM, UPDATE_MENU_CATEGORY } from "../../../graphql/menu";
import { EditIcon } from "@chakra-ui/icons";

enum SpiceLevel {
  None,
  Mild,
  Medium,
  Hot,
  ExtraHot,
}

interface Props {
  id: String;
  name: String;
  description: String;
  spiceLevel: SpiceLevel;
  price: Number;
  isActive: Boolean;
  isPopular: Boolean;
}

export const EditItem = (props: Props) => {
  const { onOpen, onClose, isOpen } = useDisclosure();

  const initialValues = {
    id: props.id,
    name: props.name,
    description: props.description,
    spiceLevel: props.spiceLevel,
    price: props.price,
    isActive: props.isActive,
    isPopular: props.isPopular,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(),
    description: Yup.string().required(),
    price: Yup.number().integer().required(),
    spiceLevel: Yup.string().required("Please select a spice level"),
  });

  const [formData, setFormData] = useState(initialValues);

  const mutation = useGQLMutation(EDIT_MENU_ITEM, formData, "get-menu-items");

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
        <PopoverContent p={6} w="100%">
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
                    <RadioGroupControl name="spiceLevel" label="Spice Level">
                      <Radio value="None">None</Radio>
                      <Radio value="Mild">Mild</Radio>
                      <Radio value="Medium">Medium</Radio>
                      <Radio value="Hot">Hot</Radio>
                      <Radio value="ExtraHot">Extra Hot</Radio>
                    </RadioGroupControl>
                    <NumberInputControl name="price" label="Price" />
                    <HStack>
                      <CheckboxSingleControl name="isActive">
                        Active
                      </CheckboxSingleControl>
                      <CheckboxSingleControl name="isPopular">
                        Popular
                      </CheckboxSingleControl>
                    </HStack>
                  </Stack>
                </Grid>
                <Stack mt={10} pb={2}>
                  <VStack>
                    <SubmitButton
                      isLoading={mutation.isLoading}
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
