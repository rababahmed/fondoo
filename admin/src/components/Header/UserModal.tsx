import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";
import { Skeleton } from "@chakra-ui/skeleton";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { useUserStore } from "../../store/useUserStore";
import { useRouter } from "next/router";
import { HStack, Text } from "@chakra-ui/react";
import { GET_USER } from "../../graphql/user";
import { useGQLQuery } from "../../shared-hooks/useGQLQuery";

const UserModal = () => {
  const router = useRouter();

  const userId = useUserStore((state) => state.userID);
  const { data } = useGQLQuery("get-user-fullname", GET_USER, {
    id: userId,
  });

  const removeUser = useUserStore((state) => state.removeUser);

  const LogoutMutation = async () => {
    await removeUser();
    router.push("/login");
  };

  return (
    <Box mr={4}>
      <Menu>
        <MenuButton as={Button} bg="white">
          <HStack>
            <Avatar size="sm"></Avatar>
            <Text>
              {data && data.user.firstName} {data && data.user.lastName}
            </Text>
          </HStack>
        </MenuButton>
        <MenuList>
          <MenuItem>My Restaurants</MenuItem>
          <MenuItem>Billing</MenuItem>
          <MenuItem>Usage</MenuItem>
          <MenuDivider />
          <MenuItem>Settings</MenuItem>
          <MenuItem onClick={LogoutMutation}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default UserModal;
