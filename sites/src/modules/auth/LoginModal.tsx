import React from "react";
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Stack,
  Alert,
  AlertIcon,
  AlertTitle,
  useToast,
} from "@chakra-ui/react";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import * as Yup from "yup";
import { InputControl, SubmitButton } from "formik-chakra-ui";
import { Formik } from "formik";
import axios from "axios";
import { Constants } from "../../config";
import { useUserStore } from "../../stores/useUserStore";

interface Props {
  rdata: any;
  cdata: any;
}

const LoginModal = ({ rdata, cdata }: Props) => {
  const setUser = useUserStore((state) => state.setUser);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required."),
    password: Yup.string().required("Password is required."),
  });

  const PasswordProps = {
    type: "password",
  };

  const toast = useToast();

  const onSubmit = async (values: any) => {
    const login = await axios
      .post(Constants.REST_API_V1 + "/customer/login", values)
      .then(function (response) {
        setUser(response.data.id, response.data.token);
        if (response.data.isAuthenticated === true) {
          onClose();
        }
        toast({
          position: "top",
          title: "Logged In!",
          status: "success",
          duration: 5000,
          variant: "solid",
          isClosable: true,
        });
      })
      .catch(function (response) {
        toast({
          position: "top",
          title: "Could not find user!",
          status: "error",
          duration: 5000,
          variant: "solid",
          isClosable: true,
        });
      });
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <SecondaryButton onClick={onOpen} cdata={cdata} text="SIGN IN" />

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign In</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik
              onSubmit={onSubmit}
              initialValues={initialValues}
              validationSchema={validationSchema}
            >
              {({ handleSubmit }) => (
                <Box as="form" onSubmit={handleSubmit as any}>
                  <Stack spacing="6">
                    <InputControl name="email" label="Email" />
                    <InputControl
                      inputProps={PasswordProps}
                      name="password"
                      label="Password"
                    />

                    <Box>
                      <Stack mt={4} pb={2}>
                        <SubmitButton
                          loadingText="Logging in"
                          bgColor={cdata.secondaryColor}
                          _hover={{ opacity: "0.9" }}
                        >
                          Login
                        </SubmitButton>
                      </Stack>
                    </Box>
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

export default LoginModal;
