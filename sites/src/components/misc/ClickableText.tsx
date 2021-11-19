import { Text } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import React from "react";

interface Props {
  text: String;
  url?: any;
  fontSize?: any;
}

const ClickableText = ({ text, url, fontSize }: Props) => {
  const router = useRouter();
  return (
    <>
      <Text
        onClick={() => (url ? router.push(url) : null)}
        _hover={{ cursor: "pointer", opacity: "90%" }}
        fontSize={fontSize || "lg"}
        py={1}
        fontFamily="TT Norms Pro Medium"
        color="white"
      >
        {text}
      </Text>
    </>
  );
};

export default ClickableText;
