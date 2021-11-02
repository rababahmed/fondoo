import { Button } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import React from "react";

interface Props {
  cdata: any;
  text: String;
  url?: any;
  buttonProps?: any;
}

const OrderButton = ({ cdata, text, url, buttonProps }: Props) => {
  const router = useRouter();
  return (
    <>
      <Button
        onClick={() => router.push(url)}
        bg={cdata.primaryColor}
        rounded={"full"}
        _hover={{ cursor: "pointer", opacity: "95%" }}
        color="white"
        fontSize={{ md: "sm", "2xl": "xl" }}
        {...buttonProps}
      >
        {text}
      </Button>
    </>
  );
};

export default OrderButton;
