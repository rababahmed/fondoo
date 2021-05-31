import { Box, Grid, HStack, Stack, Text, VStack } from "@chakra-ui/layout";
import React, { useState } from "react";
import {
  useDisclosure,
  Popover,
  PopoverTrigger,
  IconButton,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  Radio,
} from "@chakra-ui/react";
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
import { useGQLMutation } from "../../shared-hooks/useGQLMutation";
import { EditIcon } from "@chakra-ui/icons";
import { EDIT_RESTAURANT_SCHEDULE } from "../../graphql/restaurant";

enum SpiceLevel {
  None,
  Mild,
  Medium,
  Hot,
  ExtraHot,
}

interface Props {
  id: String;
  day: String;
  openingTime: String;
  closingTime: String;
  deliveryTime: Number;
  takeawayTime: Number;
}

export const EditSchedule = (props: Props) => {
  const { onOpen, onClose, isOpen } = useDisclosure();

  const initialValues = {
    id: props.id,
    day: props.day,
    openingTime: props.openingTime,
    closingTime: props.closingTime,
    deliveryTime: props.deliveryTime,
    takeawayTime: props.takeawayTime,
  };

  const validationSchema = Yup.object({
    day: Yup.string().required(),
    openingTime: Yup.string().required(),
    closingTime: Yup.string().required(),
    deliveryTime: Yup.number().required(),
    takeawayTime: Yup.number().required(),
  });

  const [formData, setFormData] = useState(initialValues);

  const mutation = useGQLMutation(
    EDIT_RESTAURANT_SCHEDULE,
    formData,
    "get-restaurant-schedules"
  );

  const onSubmit = async (values: any) => {
    setFormData(values);
    await mutation.mutate();
  };

  return (
    <>
      <Popover
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        closeOnBlur={true}
      >
        <PopoverTrigger>
          <IconButton
            colorScheme="gray"
            aria-label="Edit"
            size="sm"
            icon={<EditIcon />}
          />
        </PopoverTrigger>
        <PopoverContent p={6} w="100%">
          <PopoverArrow />
          <PopoverCloseButton />
          <Formik
            onSubmit={onSubmit}
            initialValues={initialValues}
            enableReinitialize={true}
            validationSchema={validationSchema}
          >
            {({ handleSubmit, setFieldValue }) => (
              <Box as="form" onSubmit={handleSubmit as any}>
                <Grid templateColumns="1fr" gap={8}>
                  <Stack spacing="6">
                    <SelectControl
                      label="Day"
                      name="day"
                      selectProps={{ placeholder: "Select day" }}
                    >
                      <option value="Sunday">Sunday</option>
                      <option value="Monday">Monday</option>
                      <option value="Tuesday">Tuesday</option>
                      <option value="Wednesday">Wednesday</option>
                      <option value="Thursday">Thursday</option>
                      <option value="Friday">Friday</option>
                      <option value="Saturday">Saturday</option>
                    </SelectControl>
                    <HStack>
                      <InputControl
                        inputProps={{ type: "time" }}
                        name="openingTime"
                        label="Opening Time"
                      />
                      <InputControl
                        inputProps={{ type: "time" }}
                        name="closingTime"
                        label="Closing Time"
                      />
                    </HStack>
                    <HStack>
                      <NumberInputControl
                        numberInputProps={{
                          onChange: (value) => {
                            setFieldValue("deliveryTime", parseInt(value));
                          },
                        }}
                        name="deliveryTime"
                        label="Delivery Time (in minutes)"
                      />
                      <NumberInputControl
                        numberInputProps={{
                          onChange: (value) => {
                            setFieldValue("takeawayTime", parseInt(value));
                          },
                        }}
                        name="takeawayTime"
                        label="Takeaway Time (in minutes)"
                      />
                    </HStack>
                  </Stack>
                </Grid>
                <Stack mt={10} pb={2}>
                  <VStack>
                    <SubmitButton
                      isLoading={mutation.isLoading}
                      loadingText="Updating"
                      w={40}
                      colorScheme="green"
                    >
                      Save
                    </SubmitButton>
                  </VStack>
                </Stack>
              </Box>
            )}
          </Formik>
        </PopoverContent>
      </Popover>
    </>
  );
};
