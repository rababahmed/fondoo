import { Text } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import React from "react";

interface Props {
  text: String;
  url?: any;
}

const RibbonItem = ({ text, url }: Props) => {
  const router = useRouter();
  return (
    <>
      <Text
        onClick={() => router.push(url)}
        _hover={{ cursor: "pointer", opacity: "90%" }}
        fontSize="lg"
        py={1}
        fontWeight="semibold"
        color="white"
      >
        {text}
      </Text>
    </>
  );
};

export default RibbonItem;
