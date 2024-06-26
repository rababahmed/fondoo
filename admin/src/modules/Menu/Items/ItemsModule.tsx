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
import Image from "next/image";
import { Config } from "../../../lib/config";

export const ItemsModule = () => {
  const restaurantID = useUserStore((state) => state.restaurantID);

  const { data, error, isLoading, isSuccess, isFetching } = useGQLQuery(
    "get-menu-items",
    GET_MENU_ITEMS,
    {
      id: restaurantID,
    }
  );

  return (
    <>
      <Skeleton isLoaded={!isLoading}>
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
            {isSuccess &&
              data.productCategories.map((cat: any) => (
                <AccordionItem key={cat.id} p={2}>
                  <AccordionButton rounded="lg">
                    <Box flex="1" textAlign="left">
                      <Tag size="lg" bgColor="primary.800" color="white">
                        {cat.name}
                      </Tag>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel>
                    <Box>
                      <Table variant="simple" w="full">
                        <Thead>
                          <Tr>
                            <Th>Name</Th>
                            <Th>Description</Th>
                            <Th>Image</Th>
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
                              <Td isTruncated maxW={200}>
                                {product.description}
                              </Td>
                              <Td>
                                <Image
                                  src={Config.CDN + product.image}
                                  alt={product.name}
                                  width={40}
                                  height={40}
                                  objectFit={"cover"}
                                />
                              </Td>
                              <Td>{product.price}</Td>
                              <Td>{product.spiceLevel}</Td>
                              <Td>{product.isActive ? "Yes" : "No"}</Td>
                              <Td>{product.isFeatured ? "Yes" : "No"}</Td>
                              <Td>
                                <HStack>
                                  <EditItem
                                    id={product.id}
                                    name={product.name}
                                    description={product.description}
                                    image={product.image}
                                    spiceLevel={product.spiceLevel}
                                    price={product.price}
                                    isActive={product.isActive}
                                    isFeatured={product.isFeatured}
                                  />
                                  <DeleteItem id={product.id} />
                                </HStack>
                              </Td>
                            </Tr>
                          ))}
                        </Tbody>
                      </Table>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
              ))}
          </Accordion>
        </Box>
      </Skeleton>
    </>
  );
};
