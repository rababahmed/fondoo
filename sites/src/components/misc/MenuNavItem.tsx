import { Text } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import React from "react";

interface Props {
  text: String;
  url?: any;
  fontSize?: any;
}

const MenuNavItem = ({ text, url, fontSize }: Props) => {
  const router = useRouter();
  return (
    <>
      <Text
        onClick={() => router.push(url)}
        _hover={{ cursor: "pointer", opacity: "90%" }}
        fontSize={fontSize || "lg"}
        py={1}
        fontWeight="semibold"
        color="black"
        whiteSpace="nowrap"
      >
        {text}
      </Text>
    </>
  );
};

export default MenuNavItem;
