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

const UserModal = () => {
  const router = useRouter();

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
            <Text>King</Text>
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
