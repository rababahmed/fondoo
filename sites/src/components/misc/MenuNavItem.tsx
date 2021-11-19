import { Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import React from "react";

interface Props {
  text: String;
  url?: any;
  fontSize?: any;
  onClick?: any;
}

const MenuNavItem = ({ text, url, fontSize, onClick }: Props) => {
  const router = useRouter();
  return (
    <>
      <Box py={1}>
        <Text
          onClick={url ? () => router.push(url) : onClick}
          _hover={{
            cursor: "pointer",
            opacity: "90%",
            bg: "gray.100",
            rounded: "md",
          }}
          py={1}
          px={2}
          fontSize={fontSize || "lg"}
          fontFamily="TT Norms Pro Medium"
          fontWeight="medium"
          color="black"
          whiteSpace="nowrap"
        >
          {text}
        </Text>
      </Box>
    </>
  );
};

export default MenuNavItem;
