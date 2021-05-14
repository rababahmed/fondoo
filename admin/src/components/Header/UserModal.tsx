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
import { useGetUser } from "../../shared-hooks/useGetUser";

const UserModal = () => {
  const { data, isLoading, isSuccess } = useGetUser();
  return (
    <Box mr={4}>
      <Menu>
        <MenuButton as={Button}>
          <Avatar size="sm"></Avatar>
        </MenuButton>
        <MenuList>
          <MenuGroup title="Dashboard">
            <MenuItem>My Restaurants</MenuItem>
            <MenuItem>Payments </MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="My Account">
            <MenuItem>Settings</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default UserModal;
