import { Text } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import React from "react";

interface Props {
  cdata: any;
  text: String;
  url: any;
  navItemProps?: any;
}

const NavItem = ({ text, url, cdata, navItemProps }: Props) => {
  const router = useRouter();
  return (
    <>
      <Text
        onClick={() => router.push(url)}
        _hover={{ cursor: "pointer", opacity: "90%" }}
        fontSize={{ md: "lg", "2xl": "xl" }}
        fontWeight="bold"
        color={cdata.hasDarkNavBg ? "white" : "black"}
        {...navItemProps}
      >
        {text}
      </Text>
    </>
  );
};

export default NavItem;
