import { Box, Flex, Heading, Wrap, WrapItem } from "@chakra-ui/layout";
import React from "react";
import UserModal from "./UserModal";

const Header = () => {
  return (
    <Flex
      bgColor="gray.100"
      shadow="xs"
      w="100%"
      p={2}
      flexDirection="row"
      justifyContent="flex-end"
      alignItems="center"
    >
      <UserModal />
    </Flex>
  );
};

export default Header;
