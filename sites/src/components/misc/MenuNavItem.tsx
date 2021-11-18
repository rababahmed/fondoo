import { Text } from "@chakra-ui/react";
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
      <Text
        onClick={url ? () => router.push(url) : onClick}
        _hover={{ cursor: "pointer", opacity: "90%" }}
        fontSize={fontSize || "lg"}
        py={1}
        fontWeight="bold"
        color="black"
        whiteSpace="nowrap"
      >
        {text}
      </Text>
    </>
  );
};

export default MenuNavItem;
