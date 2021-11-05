import React from "react";
import {
  Box,
  Grid,
  Skeleton,
  Stack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  VStack,
} from "@chakra-ui/react";
import { Formik } from "formik";
import {
  InputControl,
  NumberInputControl,
  SelectControl,
  SubmitButton,
  SwitchControl,
  TextareaControl,
} from "formik-chakra-ui";
import { useUserStore } from "../../store/useUserStore";
import * as Yup from "yup";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import { useGQLMutation } from "../../shared-hooks/useGQLMutation";
import { ADD_RESTAURANT_DELIVERY_ZONE } from "../../graphql/restaurant";

const AddDeliveryZone = () => {
  const restaurantID = useUserStore((state) => state.restaurantID);

  const initialValues = {
    id: restaurantID,
    isPreOrder: false,
  };

  const validationSchema = Yup.object({
    name: Yup.string(),
    email: Yup.string(),
  });

  const [formData, setFormData] = React.useState(initialValues);

  const mutation = useGQLMutation(
    ADD_RESTAURANT_DELIVERY_ZONE,
    formData,
    "get-restaurant-delivery-zones"
  );

  const onSubmit = async (values: any, { resetForm }: any) => {
    setFormData(values);
    await mutation.mutate();
    mutation.isSuccess ? resetForm() : null;
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        background="primary.800"
        color="white"
        _hover={{
          background: "primary.900",
        }}
        _active={{
          background: "primary.800",
        }}
        onClick={onOpen}
      >
        Add Delivery Zone
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Delivery Zone</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik
              onSubmit={onSubmit}
              initialValues={initialValues}
              enableReinitialize={true}
              validationSchema={validationSchema}
            >
              {({ values, handleSubmit, setFieldValue }) => (
                <Box as="form" onSubmit={handleSubmit as any}>
                  <Stack spacing="6">
                    <InputControl name="name" label="Zone Name" />
                    <NumberInputControl
                      name="deliveryTime"
                      label="Delivery Time (in minutes)"
                      numberInputProps={{
                        onChange: (value) => {
                          setFieldValue("deliveryTime", parseInt(value));
                        },
                      }}
                    />
                    <InputControl name="postCode" label="Post Code" />
                    <SelectControl
                      name="deliveryFeeType"
                      label="Delivery Fee Type"
                    >
                      <option value={"Fixed"}>Fixed</option>
                      <option value={"Percent"}>Percent</option>
                    </SelectControl>
                    <NumberInputControl
                      name="deliveryCharge"
                      label="Delivery Fee"
                      numberInputProps={{
                        onChange: (value) => {
                          setFieldValue("deliveryCharge", parseInt(value));
                        },
                      }}
                    />

                    <SwitchControl name="isPreOrder" label="Pre-Order Only" />
                    {values.isPreOrder ? (
                      <TextareaControl
                        name="preOrderInstructions"
                        label="Pre-Order Instructions"
                        textareaProps={{
                          placeholder: "Will be delivered next day..",
                        }}
                      />
                    ) : null}
                  </Stack>
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
    </>
  );
};

export default AddDeliveryZone;
