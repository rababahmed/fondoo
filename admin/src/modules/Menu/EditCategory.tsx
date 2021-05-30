import { Box, Grid, Stack, Text, VStack } from "@chakra-ui/layout";
import React, { useState } from "react";
import { Skeleton } from "@chakra-ui/skeleton";
import { useGQLQuery } from "../../shared-hooks/useGQLQuery";
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
  Popover,
  PopoverTrigger,
  IconButton,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import {
  CheckboxSingleControl,
  InputControl,
  SelectControl,
  SubmitButton,
} from "formik-chakra-ui";
import { Formik } from "formik";
import * as Yup from "yup";
import { useUserStore } from "../../store/useUserStore";
import { useGQLMutation } from "../../shared-hooks/useGQLMutation";
import { ADD_MENU_CATEGORY } from "../../graphql/menu";
import { EditIcon } from "@chakra-ui/icons";

interface Props {
  id: String;
}

export const EditCategory = (props: Props) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const restaurantID = useUserStore((state) => state.restaurantID);

  const initialValues = {
    name: "",
    description: "",
    isActive: false,
    isFeatured: false,
    restaurantID: restaurantID,
  };

  const validationSchema = Yup.object({
    name: Yup.string(),
    description: Yup.string(),
  });

  const [formData, setFormData] = useState(initialValues);

  const mutation = useGQLMutation(
    ADD_MENU_CATEGORY,
    formData,
    "get-menu-categories"
  );

  const onSubmit = async (values: any) => {
    const payload = setFormData(values);
    mutation.mutate();
  };

  return (
    <Box mb={4}>
      <Popover
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        closeOnBlur={true}
      >
        <PopoverTrigger>
          <IconButton aria-label="edit" size="sm" icon={<EditIcon />} />
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
                    <InputControl
                      inputProps={{ size: "sm" }}
                      name="name"
                      label="Name"
                    />
                    <InputControl
                      inputProps={{ size: "sm" }}
                      name="description"
                      label="Description"
                    />
                    <CheckboxSingleControl
                      checkBoxProps={{ size: "md" }}
                      name="isActive"
                    >
                      Active
                    </CheckboxSingleControl>
                    <CheckboxSingleControl
                      checkBoxProps={{ size: "md" }}
                      name="isFeatured"
                    >
                      Featured
                    </CheckboxSingleControl>
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
    </Box>
  );
};
