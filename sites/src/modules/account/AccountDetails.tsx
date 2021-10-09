import React from "react";
import { Box, SimpleGrid, Stack, useColorModeValue } from "@chakra-ui/react";
import { Formik } from "formik";
import { InputControl, SubmitButton } from "formik-chakra-ui";
import * as Yup from "yup";

interface Props {
  rdata: any;
  cdata: any;
}

const AccountDetails = ({ rdata, cdata }: Props) => {
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

  return (
    <>
      <Box
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"sm"}
        border={"1px"}
        borderColor={"gray.200"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Formik
          onSubmit={() => console.log("hello")}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {({ handleSubmit }) => (
            <Box as="form" onSubmit={handleSubmit as any}>
              <Stack spacing="6">
                <SimpleGrid columns={2} spacing={6}>
                  <InputControl name="firstName" label="First Name" />
                  <InputControl name="lastName" label="Last Name" />
                  <InputControl name="email" label="Email" />
                  <InputControl name="phone" label="Phone" />
                </SimpleGrid>
                <Box>
                  <Stack mt={4} pb={2}>
                    <SubmitButton
                      loadingText="Logging in"
                      bgColor={cdata.secondaryColor}
                      _hover={{ opacity: "0.9" }}
                    >
                      Save
                    </SubmitButton>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default AccountDetails;
