import { Box, Flex, Heading, Wrap, WrapItem } from "@chakra-ui/layout";
import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <div>
      <Flex
        bgColor="gray.100"
        w="100%"
        p={2}
        flexDirection="row"
        justifyContent="flex-end"
        alignItems="center"
      >
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
      </Flex>
    </div>
  );
};

export default Header;
