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
  GET_RESTAURANT_COUPONS,
  GET_RESTAURANT_OFFERS,
} from "../../../graphql/restaurant";

export const CouponsModule = () => {
  const restaurantID = useUserStore((state) => state.restaurantID);

  const { data, error, isLoading, isSuccess, isFetching } = useGQLQuery(
    "get-restaurant-coupons",
    GET_RESTAURANT_COUPONS,
    {
      id: restaurantID,
    }
  );

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
                <Th>Code</Th>
                <Th>Description</Th>
                <Th>Discount Type</Th>
                <Th>Value</Th>
                <Th>Start Date</Th>
                <Th>End Date</Th>
                <Th>Orders</Th>
              </Tr>
            </Thead>

            <Tbody>
              {isSuccess && data.restaurant.coupons ? (
                data.restaurant.coupons.map((coupon: any) => (
                  <Tr key={coupon.id}>
                    <Td>{coupon.code}</Td>
                    <Td>{coupon.description}</Td>
                    <Td>{coupon.discount}</Td>
                    <Td>{coupon.value}</Td>
                    <Td>0</Td>
                    <Td>{coupon.startDate}</Td>
                    <Td>{coupon.endDate}</Td>
                    <Td>{coupon.orders.length}</Td>
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
                                Are you sure you want to delete this coupon?
                              </PopoverBody>
                              <PopoverFooter d="flex" justifyContent="flex-end">
                                <ButtonGroup size="sm">
                                  <Button onClick={onClose} variant="outline">
                                    Cancel
                                  </Button>
                                  <Button
                                    onClick={() => handleDelete(coupon.id)}
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
