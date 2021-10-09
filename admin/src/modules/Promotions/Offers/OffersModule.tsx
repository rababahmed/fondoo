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
import { useGQLMutation } from "../../../shared-hooks/useGQLMutation";
import { FaTrash } from "react-icons/fa";
import { useUserStore } from "../../../store/useUserStore";
import {
  DELETE_RESTAURANT_OFFER,
  GET_RESTAURANT_OFFERS,
} from "../../../graphql/restaurant";
import Image from "next/image";
import { Config } from "../../../lib/config";

export const OffersModule = () => {
  const restaurantID = useUserStore((state) => state.restaurantID);

  const { data, error, isLoading, isSuccess, isFetching } = useGQLQuery(
    "get-restaurant-offers",
    GET_RESTAURANT_OFFERS,
    {
      id: restaurantID,
    }
  );

  console.log(`Data: ${data}`);

  useEffect(() => {}, [isFetching]);

  const [offerId, setOfferId] = useState("");

  const mutation = useGQLMutation(
    DELETE_RESTAURANT_OFFER,
    {
      id: offerId,
    },
    "get-restaurant-offers"
  );

  const handleDelete = async (id: string) => {
    const setOffer = await setOfferId(id);
    const deleteOffer = await mutation.mutate(setOffer);
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
                <Th>Image</Th>
                <Th>Start Date</Th>
                <Th>End Date</Th>
                <Th>Claimed</Th>
                <Th>Active</Th>
                <Th>Created</Th>
              </Tr>
            </Thead>

            <Tbody>
              {isSuccess && data.restaurant.offers ? (
                data.restaurant.offers.map((offer: any) => (
                  <Tr key={offer.id}>
                    <Td>{offer.name}</Td>
                    <Td>{offer.description}</Td>
                    <Td>
                      <Image
                        src={Config.CDN + offer.image}
                        alt={offer.name}
                        width={40}
                        height={40}
                        objectFit={"cover"}
                      />
                    </Td>
                    <Td>{offer.startDate}</Td>
                    <Td>{offer.endDate}</Td>
                    <Td>0</Td>
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
