import React from "react";
import {
  Box,
  SimpleGrid,
  Skeleton,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Formik } from "formik";
import { InputControl, SubmitButton } from "formik-chakra-ui";
import * as Yup from "yup";
import { useGQLQuery } from "../../hooks/useGQLQuery";
import { useUserStore } from "../../stores/useUserStore";
import { GET_USER_DETAILS, UPDATE_USER_DETAILS } from "../../graphql/user";
import { useGQLMutation } from "../../hooks/useGQLMutation";

interface Props {
  rdata: any;
  cdata: any;
}

const AccountDetails = ({ rdata, cdata }: Props) => {
  const userId = useUserStore((state) => state.userID);

  const { data, error, isLoading, isSuccess } = useGQLQuery(
    "get-user-details",
    GET_USER_DETAILS,
    {
      id: userId,
    }
  );

  const initialValues = {
    firstName: (isSuccess && data.customer.firstName) || "",
    lastName: (isSuccess && data.customer.lastName) || "",
    email: (isSuccess && data.customer.email) || "",
    phone: (isSuccess && data.customer.phone) || "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required."),
  });

  const [formData, setFormData] = React.useState(initialValues);

  const mutation = useGQLMutation(
    UPDATE_USER_DETAILS,
    formData,
    "get-user-details"
  );

  const onSubmit = async (values: any) => {
    const payload = setFormData(values);
    mutation.mutate();
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
          onSubmit={onSubmit}
          initialValues={initialValues}
          enableReinitialize={true}
          validationSchema={validationSchema}
        >
          {({ handleSubmit }) => (
            <Box as="form" onSubmit={handleSubmit as any}>
              <Stack spacing="6">
                <Skeleton isLoaded={!isLoading}>
                  <SimpleGrid columns={2} spacing={6}>
                    <InputControl name="firstName" label="First Name" />
                    <InputControl name="lastName" label="Last Name" />
                    <InputControl name="email" label="Email" />
                    <InputControl name="phone" label="Phone" />
                  </SimpleGrid>
                </Skeleton>
                <Box>
                  <Stack mt={4} pb={2} px={10}>
                    <SubmitButton
                      loadingText="Saving"
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
