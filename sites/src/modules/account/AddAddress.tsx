import React from "react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Box,
  Grid,
  Stack,
  VStack,
} from "@chakra-ui/react";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import * as Yup from "yup";
import { useGQLMutation } from "../../hooks/useGQLMutation";
import { ADD_CUSTOMER_ADDRESS } from "../../graphql/user";
import { useUserStore } from "../../stores/useUserStore";
import { Formik } from "formik";
import { InputControl, SubmitButton } from "formik-chakra-ui";

interface Props {
  cdata: any;
  rdata: any;
}

const AddAddress = ({ cdata, rdata }: Props) => {
  const userId = useUserStore((state) => state.userID);

  const initialValues = {
    streetAddress: "",
    city: "",
    postCode: "",
    country: "",
    id: userId,
  };

  const validationSchema = Yup.object({
    firstName: Yup.string(),
    email: Yup.string(),
  });

  const [formData, setFormData] = React.useState(initialValues);

  const mutation = useGQLMutation(
    ADD_CUSTOMER_ADDRESS,
    formData,
    "get-customer-addresses"
  );

  const onSubmit = async (values: any) => {
    const payload = setFormData(values);
    mutation.mutate();
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <SecondaryButton cdata={cdata} text={"Add Address"} onClick={onOpen} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a new address</ModalHeader>
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
                  <Stack spacing="6">
                    <InputControl
                      name="streetAddress"
                      label="Street Address"
                      inputProps={{ placeholder: "Apt No. , Road No. ..." }}
                    />
                    <InputControl name="city" label="City" />
                    <InputControl name="postCode" label="Post Code" />
                    <InputControl name="country" label="Country" />
                  </Stack>

                  <Stack mt={10} pb={2}>
                    <VStack>
                      <SubmitButton
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

export default AddAddress;
