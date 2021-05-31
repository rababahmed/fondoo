import { Box, HStack } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { Skeleton } from "@chakra-ui/skeleton";
import { useGQLQuery } from "../../../shared-hooks/useGQLQuery";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  TableCaption,
  Tag,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import { useGQLMutation } from "../../../shared-hooks/useGQLMutation";
import { GET_MENU_ITEMS } from "../../../graphql/menu";
import { useUserStore } from "../../../store/useUserStore";
import { EditItem } from "./EditItem";
import { DeleteItem } from "./DeleteItem";

export const ItemsModule = () => {
  const restaurantID = useUserStore((state) => state.restaurantID);

  const { data, error, isLoading, isSuccess, isFetching } = useGQLQuery(
    "get-menu-items",
    GET_MENU_ITEMS,
    {
      id: restaurantID,
    }
  );
  console.log(data);

  return (
    <>
      <Box
        as="section"
        rounded="lg"
        shadow="base"
        bgColor="white"
        mr={6}
        mb={6}
        ml={6}
        p={8}
      >
        <Accordion defaultIndex={[0]} allowToggle>
          <Skeleton isLoaded={!isLoading}>
            {isSuccess &&
              data.restaurant.productCategory.map((cat: any) => (
                <AccordionItem key={cat.id} p={2}>
                  <AccordionButton rounded="lg">
                    <Box flex="1" textAlign="left">
                      <Tag size="lg">{cat.name}</Tag>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel>
                    <Table variant="simple">
                      <Thead>
                        <Tr>
                          <Th>Name</Th>
                          <Th>Description</Th>
                          <Th>Price</Th>
                          <Th>Spice Level</Th>
                          <Th>Active</Th>
                          <Th>Popular</Th>
                          <Th></Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {cat.Product.map((product: any) => (
                          <Tr key={product.id}>
                            <Td>{product.name}</Td>
                            <Td>{product.description}</Td>
                            <Td>{product.price}</Td>
                            <Td>{product.spiceLevel}</Td>
                            <Td>{product.isActive ? "Yes" : "No"}</Td>
                            <Td>{product.isPopular ? "Yes" : "No"}</Td>
                            <Td>
                              <HStack>
                                <EditItem
                                  id={product.id}
                                  name={product.name}
                                  description={product.description}
                                  spiceLevel={product.spiceLevel}
                                  price={product.price}
                                  isActive={product.isActive}
                                  isPopular={product.isPopular}
                                />
                                <DeleteItem id={product.id} />
                              </HStack>
                            </Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </AccordionPanel>
                </AccordionItem>
              ))}
          </Skeleton>
        </Accordion>
      </Box>
    </>
  );
};
