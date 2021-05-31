import { Box, Grid, HStack, Stack, Text, VStack } from "@chakra-ui/layout";
import React, { useState } from "react";
import { Skeleton } from "@chakra-ui/skeleton";
import { useGQLQuery } from "../../../shared-hooks/useGQLQuery";
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
  Radio,
} from "@chakra-ui/react";
import PrimaryButton from "../../../components/Buttons/PrimaryButton";
import {
  CheckboxSingleControl,
  InputControl,
  NumberInputControl,
  RadioGroupControl,
  SelectControl,
  SubmitButton,
} from "formik-chakra-ui";
import { Formik } from "formik";
import * as Yup from "yup";
import { useUserStore } from "../../../store/useUserStore";
import { useGQLMutation } from "../../../shared-hooks/useGQLMutation";
import { ADD_MENU_ITEM, GET_MENU_CATEGORIES } from "../../../graphql/menu";

enum SpiceLevel {
  None,
  Mild,
  Medium,
  Hot,
  ExtraHot,
}

export const AddItem = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const restaurantID = useUserStore((state) => state.restaurantID);

  const { data, error, isLoading, isSuccess, isFetching } = useGQLQuery(
    "get-menu-categories",
    GET_MENU_CATEGORIES,
    {
      id: restaurantID,
    }
  );

  const initialValues = {
    name: "",
    description: "",
    spiceLevel: "",
    price: "",
    isActive: false,
    isPopular: false,
    productCatID: "",
    restaurantID: restaurantID,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(),
    description: Yup.string().required(),
    price: Yup.number().integer().required(),
    spiceLevel: Yup.string().required("Please select a spice level"),
    productCatID: Yup.string().required("Please select a category"),
  });

  const [formData, setFormData] = useState(initialValues);

  const mutation = useGQLMutation(
    ADD_MENU_ITEM,
    {
      name: formData.name,
      description: formData.description,
      spiceLevel: formData.spiceLevel,
      price: parseInt(formData.price),
      isActive: formData.isActive,
      isPopular: formData.isPopular,
      productCatID: formData.productCatID,
      restaurantID: restaurantID,
    },
    "get-menu-items"
  );

  const onSubmit = async (values: any) => {
    const payload = await setFormData(values);
    console.log(formData);
    mutation.mutate();
  };

  return (
    <Box mb={4}>
      <PrimaryButton onClick={onOpen} title="Add Item" />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a New Item</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
                      <SelectControl
                        label="Category"
                        name="productCatID"
                        selectProps={{ placeholder: "Select category" }}
                      >
                        {data.restaurant.productCategory.map((cat: any) => (
                          <option key={cat.id} value={cat.id}>
                            {cat.name}
                          </option>
                        ))}
                      </SelectControl>
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
                        loadingText="Adding"
                        w={40}
                        colorScheme="green"
                      >
                        Add
                      </SubmitButton>
                    </VStack>
                  </Stack>
                </Box>
              )}
            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
