import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import NavBar from "./NavBar";
import NavDrawerContent from "./NavDrawerContent";
import { GiHamburgerMenu } from "react-icons/gi";

const NavDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        aria-label="Hamburger"
        icon={<GiHamburgerMenu />}
        onClick={onOpen}
      >
        Open
      </IconButton>
      <Drawer isOpen={isOpen} size="xs" placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            mr={4}
            bgColor="gray.200"
            _hover={{ bgColor: "gray.300" }}
          />
          <DrawerBody bg="gray.900">
            <NavDrawerContent />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavDrawer;
