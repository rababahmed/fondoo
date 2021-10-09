import { Box, Grid, Stack, VStack } from "@chakra-ui/layout";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Skeleton,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Popover,
  PopoverTrigger,
  IconButton,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { Switch } from "@chakra-ui/react";
import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  InputControl,
  SelectControl,
  SubmitButton,
  SwitchControl,
} from "formik-chakra-ui";
import { useGQLMutation } from "../../shared-hooks/useGQLMutation";
import { useUserStore } from "../../store/useUserStore";
import { useGQLQuery } from "../../shared-hooks/useGQLQuery";
import {
  ADD_RESTAURANT_OFFER,
  ADD_RESTAURANT_SOCIAL,
  DELETE_RESTAURANT_SOCIAL,
  GET_RESTAURANT_CONFIG,
  GET_RESTAURANT_SOCIALS,
  UPDATE_RESTAURANT_APPEARANCE,
} from "../../graphql/restaurant";

import PrimaryButton from "../../components/Buttons/PrimaryButton";
import { FaTrash } from "react-icons/fa";

export const SocialsModule = () => {
  const restaurantID = useUserStore((state) => state.restaurantID);
  const token = useUserStore((state) => state.token);

  const { data, error, isLoading, isSuccess } = useGQLQuery(
    "get-restaurant-socials",
    GET_RESTAURANT_SOCIALS,
    {
      id: restaurantID,
    }
  );

  const [socialId, setSocialId] = useState("");

  const mutation = useGQLMutation(
    DELETE_RESTAURANT_SOCIAL,
    {
      id: socialId,
    },
    "get-restaurant-offers"
  );

  const handleDelete = async (id: string) => {
    const setSocial = await setSocialId(id);
    const deleteSocial = await mutation.mutate(setSocial);
  };

  return (
    <>
      <Grid templateColumns={"1fr 1fr"}>
        <Box />
        <Box justifySelf={"end"}>
          <AddSocialNetwork />
        </Box>
      </Grid>
      <Box as="section" rounded="lg" shadow="base" bgColor="white" p={8}>
        <Skeleton isLoaded={!isLoading}>
          <Box overflowX="auto">
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Social Network</Th>
                  <Th>Link</Th>
                  <Th>Active</Th>
                </Tr>
              </Thead>

              <Tbody>
                {isSuccess && data.restaurant.socials ? (
                  data.restaurant.socials.map((social: any) => (
                    <Tr key={social.id}>
                      <Td>{social.network}</Td>
                      <Td>{social.url}</Td>

                      <Td>{social.isActive ? "Yes" : "No"}</Td>

                      <Td>
                        <Popover>
                          {({ isOpen, onClose }) => (
                            <>
                              <PopoverTrigger>
                                <IconButton
                                  aria-label="Delete"
                                  colorScheme="red"
                                  size="sm"
                                >
                                  <FaTrash />
                                </IconButton>
                              </PopoverTrigger>
                              <PopoverContent>
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverHeader>Confirmation!</PopoverHeader>
                                <PopoverBody>
                                  Are you sure you want to remove this social
                                  network?
                                </PopoverBody>
                                <PopoverFooter
                                  d="flex"
                                  justifyContent="flex-end"
                                >
                                  <ButtonGroup size="sm">
                                    <Button onClick={onClose} variant="outline">
                                      Cancel
                                    </Button>
                                    <Button
                                      onClick={() => handleDelete(social.id)}
                                      isDisabled={mutation.isLoading}
                                      colorScheme="red"
                                    >
                                      Delete
                                    </Button>
                                  </ButtonGroup>
                                </PopoverFooter>
                              </PopoverContent>
                            </>
                          )}
                        </Popover>
                      </Td>
                    </Tr>
                  ))
                ) : (
                  <Tr>
                    <Td>
                      No social networks found. Try creating one with the button
                      to your top-right.
                    </Td>
                  </Tr>
                )}
              </Tbody>
            </Table>
          </Box>
        </Skeleton>
      </Box>
    </>
  );
};

export const AddSocialNetwork = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const restaurantID = useUserStore((state) => state.restaurantID);

  const initialValues = {
    network: "",
    url: "",
    isActive: true,
    id: restaurantID,
  };

  const validationSchema = Yup.object({
    network: Yup.string().required(),
    url: Yup.string().required(),
  });

  const [formData, setFormData] = useState(initialValues);

  const mutation = useGQLMutation(
    ADD_RESTAURANT_SOCIAL,
    formData,
    "get-restaurant-socials"
  );

  const onSubmit = async (values: any, { resetForm }: any) => {
    setFormData(values);
    console.log(formData);
    await mutation.mutate();
    mutation.isSuccess ? resetForm() : null;
  };

  return (
    <Box mb={4}>
      <PrimaryButton onClick={onOpen} title="Add New Social" />

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a New Social Network</ModalHeader>
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
                      <SelectControl
                        name="network"
                        label="Social Network"
                        selectProps={{
                          placeholder: "Select a network",
                        }}
                      >
                        <option value="facebook">Facebook</option>
                        <option value="instagram">Instagram</option>
                        <option value="pinterest">Pinterest</option>
                      </SelectControl>
                      <InputControl
                        name="url"
                        label="Link"
                        inputProps={{
                          placeholder: "https://facebook.com/MyRestaurant",
                        }}
                      />
                      <SwitchControl name="isActive" label="Active" />
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
