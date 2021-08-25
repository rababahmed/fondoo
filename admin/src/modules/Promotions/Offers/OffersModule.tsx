import { Box } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { Skeleton } from "@chakra-ui/skeleton";
import { useGQLQuery } from "../../../shared-hooks/useGQLQuery";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
  PopoverArrow,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";
import { DELETE_USER, GET_RESTAURANT_USER } from "../../../graphql/user";
import { useGQLMutation } from "../../../shared-hooks/useGQLMutation";
import { FaTrash } from "react-icons/fa";
import { useUserStore } from "../../../store/useUserStore";
import { GET_RESTAURANT_OFFERS } from "../../../graphql/restaurant";

export const OffersModule = () => {
  const restaurantID = useUserStore((state) => state.restaurantID);

  const { data, error, isLoading, isSuccess, isFetching } = useGQLQuery(
    "get-restaurant-offers",
    GET_RESTAURANT_OFFERS,
    {
      id: restaurantID,
    }
  );

  useEffect(() => {}, [isFetching]);

  const [userId, setUserId] = useState("");

  const mutation = useGQLMutation(
    DELETE_USER,
    {
      id: userId,
    },
    "get-restaurant-users"
  );

  const handleDelete = async (id: string) => {
    const setUser = await setUserId(id);
    const deleteUser = await mutation.mutate(setUser);
  };

  return (
    <Box
      as="section"
      rounded="lg"
      shadow="base"
      bgColor="white"
      mr={6}
      ml={6}
      p={8}
    >
      <Skeleton isLoaded={!isLoading}>
        <Box overflowX="auto">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Description</Th>
                <Th>Start Date</Th>
                <Th>End Date</Th>
                <Th>Claimed</Th>
                <Th>Active</Th>
                <Th>Created</Th>
              </Tr>
            </Thead>

            <Tbody>
              {isSuccess && data ? (
                data.restaurant.restaurant.offers.map((offer: any) => (
                  <Tr key={offer.id}>
                    <Td>{offer.name}</Td>
                    <Td>{offer.description}</Td>
                    <Td>{offer.startDate}</Td>
                    <Td>{offer.endDate}</Td>
                    <Td>{offer.isActive ? "Yes" : "No"}</Td>
                    <Td>{offer.createdAt}</Td>
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
                                Are you sure you want to delete this offer?
                              </PopoverBody>
                              <PopoverFooter d="flex" justifyContent="flex-end">
                                <ButtonGroup size="sm">
                                  <Button onClick={onClose} variant="outline">
                                    Cancel
                                  </Button>
                                  <Button
                                    onClick={() => handleDelete(offer.id)}
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
                    No offers found. Try creating one with the button to your
                    top-right.
                  </Td>
                </Tr>
              )}
            </Tbody>
          </Table>
        </Box>
      </Skeleton>
    </Box>
  );
};
