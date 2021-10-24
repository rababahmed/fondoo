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
import { useGQLQuery } from "../../hooks/useGQLQuery";
import { GET_USER_DETAILS } from "../../graphql/user";
import SignupModal from "./SignupModal";
import { useSiteStore } from "../../stores/useSiteStore";

interface Props {
  rdata: any;
  cdata: any;
}

const LoginModal = ({ rdata, cdata }: Props) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
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

  const setAddress = useUserStore((state) => state.setAddress);

  const onSubmit = async (values: any) => {
    const login = await axios
      .post(Constants.REST_API_V1 + "/customer/login", values)
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

  const setSignUpModal = useSiteStore((state) => state.setSignUpModal);

  return (
    <>
      <SecondaryButton onClick={onOpen} cdata={cdata} text="SIGN IN" />
      <SignupModal rdata={rdata} cdata={cdata} />

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
          <ModalFooter justifyContent={"center"}>
            <Stack direction={"row"}>
              <Text>Don&apos;t have an account? </Text>
              <Text
                color={cdata.primaryColor}
                fontWeight={"bold"}
                cursor={"pointer"}
                onClick={() => {
                  onClose();
                  setSignUpModal(true);
                }}
              >
                Sign up
              </Text>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginModal;
