import { IconButton } from "@chakra-ui/button";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import React from "react";

const MobileNav = ({ cdata, rdata }: any) => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Navigation Menu"
        rounded="md"
        bg={cdata.primaryColor}
        color="white"
        _hover={{ opacity: "0.9" }}
        icon={<HamburgerIcon />}
      />
      <MenuList p={6}>
        <MenuItem _hover={{ rounded: "md" }} _focus={{ rounded: "md" }}>
          Home
        </MenuItem>
        <MenuItem _hover={{ rounded: "md" }} _focus={{ rounded: "md" }}>
          About
        </MenuItem>
        <MenuItem _hover={{ rounded: "md" }} _focus={{ rounded: "md" }}>
          Deals
        </MenuItem>
        <MenuItem _hover={{ rounded: "md" }} _focus={{ rounded: "md" }}>
          Menu
        </MenuItem>
        <MenuItem _hover={{ rounded: "md" }} _focus={{ rounded: "md" }}>
          Reservation
        </MenuItem>
        <MenuItem _hover={{ rounded: "md" }} _focus={{ rounded: "md" }}>
          Reviews
        </MenuItem>
        <MenuItem _hover={{ rounded: "md" }} _focus={{ rounded: "md" }}>
          Contact
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MobileNav;
