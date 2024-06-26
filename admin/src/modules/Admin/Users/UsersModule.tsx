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
import { GET_ALL_USERS } from "../../../graphql/admin/user";

export const AdminUsersModule = () => {
  const { data, error, isLoading, isSuccess, isFetching } = useGQLQuery(
    "get-all-users",
    GET_ALL_USERS
  );

  const [userId, setUserId] = useState("");

  const mutation = useGQLMutation(
    DELETE_USER,
    {
      id: userId,
    },
    "get-all-users"
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
                <Th>First Name</Th>
                <Th>Last Name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th>Phone</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>

            <Tbody>
              {isSuccess && data ? (
                data.users.map((user: any) => (
                  <Tr key={user.id}>
                    <Td>{user.firstName}</Td>
                    <Td>{user.lastName}</Td>
                    <Td>{user.email}</Td>
                    <Td>{user.role}</Td>
                    <Td>{user.phone}</Td>
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
                                Are you sure you want to delete this user?
                              </PopoverBody>
                              <PopoverFooter d="flex" justifyContent="flex-end">
                                <ButtonGroup size="sm">
                                  <Button onClick={onClose} variant="outline">
                                    Cancel
                                  </Button>
                                  <Button
                                    onClick={() => handleDelete(user.id)}
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
                <div></div>
              )}
            </Tbody>
          </Table>
        </Box>
      </Skeleton>
    </Box>
  );
};
