import { Box, Grid, Heading, Stack, VStack } from "@chakra-ui/layout";
import { Field, Formik } from "formik";
import { InputControl, SelectControl } from "formik-chakra-ui";
import React from "react";
import OrderButton from "../buttons/OrderButton";
import * as Yup from "yup";
import { InputGroup, InputLeftElement } from "@chakra-ui/input";
import { CalendarIcon, PhoneIcon } from "@chakra-ui/icons";
import FormInputField from "../form/FormInputField";
import { BsCalendar, BsClock, BsPeople } from "react-icons/bs";

const ReservationCard = ({ cdata, rdata }: any) => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    role: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string(),
    email: Yup.string(),
  });

  const onSubmit = async (values: any, { resetForm }: any) => {
    console.log("Reservation successful");
  };

  return (
    <>
      <Box
        maxW={"600px"}
        w={"full"}
        bg={"#F3F5F5"}
        shadow={"lg"}
        rounded={"md"}
        border={"1px"}
        borderColor={"gray.100"}
        overflow={"hidden"}
        p={10}
      >
        <Heading size="xl" mb={6} fontWeight="semibold" align="center">
          Reservation
        </Heading>
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
                  <InputGroup>
                    <InputLeftElement fontSize="lg" color={cdata.primaryColor}>
                      <BsPeople />
                    </InputLeftElement>
                    <SelectControl
                      name="person"
                      selectProps={{
                        bg: "white",
                        placeholder: "Select person",
                        px: 10,
                      }}
                    >
                      <option value={1}>1 person</option>
                      <option value={2}>2 person</option>
                      <option value={3}>3 person</option>
                    </SelectControl>
                  </InputGroup>

                  <Field
                    name="date"
                    id="date"
                    type="date"
                    icon={<BsCalendar />}
                    cdata={cdata}
                    component={FormInputField}
                  />
                  <Field
                    name="time"
                    id="time"
                    type="time"
                    icon={<BsClock />}
                    cdata={cdata}
                    component={FormInputField}
                  />
                </Stack>
              </Grid>
              <Stack mt={10} pb={2}>
                <VStack>
                  <OrderButton cdata={cdata} text="Book table" />
                </VStack>
              </Stack>
            </Box>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default ReservationCard;
