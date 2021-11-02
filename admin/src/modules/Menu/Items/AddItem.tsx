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
  TextareaControl,
} from "formik-chakra-ui";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import { useUserStore } from "../../../store/useUserStore";
import { useGQLMutation } from "../../../shared-hooks/useGQLMutation";
import { ADD_MENU_ITEM, GET_MENU_CATEGORIES } from "../../../graphql/menu";
import ImageUpload from "../../../components/Forms/ImageUpload";

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
  console.log(data);

  const initialValues = {
    name: "",
    description: "",
    spiceLevel: "",
    price: "",
    image: "",
    isActive: false,
    isFeatured: false,
    productCatID: "",
    restaurantID: restaurantID,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(),
    description: Yup.string(),
    price: Yup.number().required(),
    image: Yup.string(),
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
      price: parseFloat(formData.price),
      image: formData.image,
      isActive: formData.isActive,
      isFeatured: formData.isFeatured,
      productCatID: formData.productCatID,
      restaurantID: restaurantID,
    },
    "get-menu-items"
  );

  const onSubmit = async (values: any, { resetForm }: any) => {
    setFormData(values);
    await mutation.mutate();
    mutation.isSuccess ? resetForm() : null;
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
                      <TextareaControl name="description" label="Description" />
                      <Field
                        name="image"
                        id="image"
                        label="Image"
                        component={ImageUpload}
                      />
                      <RadioGroupControl name="spiceLevel" label="Spice Level">
                        <Radio value="None">None</Radio>
                        <Radio value="Mild">Mild</Radio>
                        <Radio value="Medium">Medium</Radio>
                        <Radio value="Hot">Hot</Radio>
                        <Radio value="ExtraHot">Extra Hot</Radio>
                      </RadioGroupControl>
                      <NumberInputControl
                        name="price"
                        label="Price"
                        numberInputProps={{ precision: 2 }}
                      />
                      <SelectControl
                        label="Category"
                        name="productCatID"
                        selectProps={{ placeholder: "Select category" }}
                      >
                        {data.productCategories.map((cat: any) => (
                          <option key={cat.id} value={cat.id}>
                            {cat.name}
                          </option>
                        ))}
                      </SelectControl>
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
