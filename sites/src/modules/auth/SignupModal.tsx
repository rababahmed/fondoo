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
  ModalFooter,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import * as Yup from "yup";
import { InputControl, SubmitButton } from "formik-chakra-ui";
import { Formik } from "formik";
import axios from "axios";
import { Constants } from "../../config";
import { useUserStore } from "../../stores/useUserStore";
import { useSiteStore } from "../../stores/useSiteStore";

interface Props {
  rdata: any;
  cdata: any;
}

const SignupModal = ({ rdata, cdata }: Props) => {
  const setUser = useUserStore((state) => state.setUser);
  const isOpen = useSiteStore((state) => state.signUpModal);
  const setSignUpModal = useSiteStore((state) => state.setSignUpModal);

  const onClose = () => {
    setSignUpModal(false);
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    restaurantId: rdata.id,
  };
  const [formData, setFormData] = React.useState(initialValues);

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required."),
    lastName: Yup.string().required("Last name is required."),
    email: Yup.string().required("Email is required."),
    phone: Yup.string().required("Phone is required."),
    password: Yup.string().required("Password is required."),
    confirmPassword: Yup.string()
      .required("Confirm your password.")
      .oneOf([Yup.ref("password"), null], "Passwords do not match."),
  });

  const PasswordProps = {
    type: "password",
  };

  const toast = useToast();

  const onSubmit = async (values: any) => {
    await axios
      .post(Constants.REST_API_V1 + "/customer/signup", {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phone: values.phone,
        password: values.password,
        restaurantId: rdata.id,
      })
      .then(function (response) {
        if (response.data.isAuthenticated === true) {
          setUser(
            response.data.id,
            response.data.token,
            response.data.customerAddressId
          );
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
      .catch(function (err) {
        console.log(err.stack);
        toast({
          position: "top",
          title: "Could not sign up!",
          status: "error",
          duration: 5000,
          variant: "solid",
          isClosable: true,
        });
      });
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size={"lg"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Account</ModalHeader>
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
                  <Stack spacing={4}>
                    <Stack
                      direction={{ base: "column", md: "row" }}
                      spacing={4}
                    >
                      <InputControl name="firstName" label="First Name" />
                      <InputControl name="lastName" label="Last Name" />
                    </Stack>
                    <Stack
                      direction={{ base: "column", md: "row" }}
                      spacing={4}
                    >
                      <InputControl name="email" label="Email" />
                      <InputControl name="phone" label="Phone" />
                    </Stack>

                    <InputControl
                      inputProps={PasswordProps}
                      name="password"
                      label="Password"
                    />
                    <InputControl
                      inputProps={PasswordProps}
                      name="confirmPassword"
                      label=" Retype Password"
                    />

                    <Box>
                      <Stack mt={4} pb={2}>
                        <SubmitButton
                          loadingText="Logging in"
                          bgColor={cdata.secondaryColor}
                          _hover={{ opacity: "0.9" }}
                        >
                          Sign up
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

export default SignupModal;
