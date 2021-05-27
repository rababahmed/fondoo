import { Box } from "@chakra-ui/layout";
import React, { useState } from "react";
import { Skeleton } from "@chakra-ui/skeleton";
import { gql } from "graphql-request";
import { useGQLQuery } from "../../shared-hooks/useGQLQuery";
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
} from "@chakra-ui/react";
import { DELETE_USER, GET_RESTAURANT_USER } from "../../graphql/user";
import { useGQLMutation } from "../../shared-hooks/useGQLMutation";
import { useQueryClient } from "react-query";

export const UsersModule = () => {
  const { data, error, isLoading, isSuccess } = useGQLQuery(
    "get-restaurant-users",
    GET_RESTAURANT_USER
  );

  const queryClient = useQueryClient();

  const [userId, setUserId] = useState("");

  const mutation = useGQLMutation("delete-user", DELETE_USER, {
    id: userId,
  });

  const handleDelete = async (id: any) => {
    await setUserId(id);
    await mutation.mutate();
    queryClient.invalidateQueries("get-restaurant-users");
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
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th>Email</Th>
              <Th>Role</Th>
              <Th>Phone</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>

          <Tbody>
            {isSuccess &&
              data.restaurant.users.map((user: any) => (
                <Tr key={user.id}>
                  <Td>{user.firstName}</Td>
                  <Td>{user.lastName}</Td>
                  <Td>{user.email}</Td>
                  <Td>{user.role}</Td>
                  <Td>{user.phone}</Td>
                  <Td>
                    <Button
                      onClick={() => handleDelete(user.id)}
                      size="sm"
                      colorScheme="red"
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </Skeleton>
    </Box>
  );
};
