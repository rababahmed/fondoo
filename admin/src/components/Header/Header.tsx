import { IconButton } from "@chakra-ui/button";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Grid } from "@chakra-ui/layout";
import React from "react";
import { usePrefStore } from "../../store/usePrefStore";
import UserModal from "./UserModal";

const Header = () => {
  const toggleHamburger = usePrefStore((state) => state.toggleHamburger);

  const isOpen = usePrefStore((state) => state.hamburger);

  return (
    <Grid
      bgColor="white"
      pos="fixed"
      top="0"
      left="0"
      shadow="sm"
      w="100%"
      p={2}
      templateColumns="1fr 1fr"
    >
      <Box>
        <IconButton
          onClick={() => {
            toggleHamburger();
          }}
          ml={4}
          display={{ base: "block", md: "none" }}
          size="md"
          aria-label="hamburger"
          icon={!isOpen ? <HamburgerIcon /> : <CloseIcon />}
          justifySelf="start"
        ></IconButton>
      </Box>
      <Box justifySelf="end">
        <UserModal />
      </Box>
    </Grid>
  );
};

export default Header;
