import { Box, HStack } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { Skeleton } from "@chakra-ui/skeleton";
import { useGQLQuery } from "../../../shared-hooks/useGQLQuery";
import { Table, Thead, Tbody, Tr, Th, Td, Button } from "@chakra-ui/react";
import { GET_MENU_CATEGORIES } from "../../../graphql/menu";
import { useUserStore } from "../../../store/useUserStore";
import { EditCategory } from "./EditCategory";
import DeleteCategory from "./DeleteCategory";

export const CategoriesModule = () => {
  const restaurantID = useUserStore((state) => state.restaurantID);

  const { data, error, isLoading, isSuccess, isFetching } = useGQLQuery(
    "get-menu-categories",
    GET_MENU_CATEGORIES,
    {
      id: restaurantID,
    }
  );

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
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Description</Th>
              <Th>Active</Th>
              <Th>Featured</Th>
              <Th></Th>
            </Tr>
          </Thead>

          <Tbody>
            {isSuccess &&
              data.productCategories.map((cat: any) => (
                <Tr key={cat.id}>
                  <Td>{cat.name}</Td>
                  <Td isTruncated maxW={200}>
                    {cat.description}
                  </Td>
                  <Td>{cat.isActive ? "Yes" : "No"}</Td>
                  <Td>{cat.isFeatured ? "Yes" : "No"}</Td>
                  <Td>
                    <HStack>
                      <EditCategory
                        id={cat.id}
                        name={cat.name}
                        description={cat.description}
                        isActive={cat.isActive}
                        isFeatured={cat.isFeatured}
                      />
                      <DeleteCategory id={cat.id} />
                    </HStack>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </Skeleton>
    </Box>
  );
};
