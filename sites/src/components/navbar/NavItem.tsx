import { Text } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import React from "react";

interface Props {
  cdata: any;
  text: String;
  url: any;
}

const NavItem = ({ text, url, cdata }: Props) => {
  const router = useRouter();
  return (
    <>
      <Text
        onClick={() => router.push(url)}
        _hover={{ cursor: "pointer", opacity: "90%" }}
        fontSize="xl"
        fontWeight="bold"
        color={cdata.hasDarkNavBg ? "white" : "black"}
      >
        {text}
      </Text>
    </>
  );
};

export default NavItem;
