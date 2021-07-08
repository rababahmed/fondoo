import { Button } from "@chakra-ui/react";
import React from "react";

interface Props {
  cdata: any;
  text: String;
}

const OrderButton = ({ cdata, text }: Props) => {
  return (
    <>
      <Button bg="#FF4550" _hover={{ bg: "#FF1F2E" }} color="white">
        {text}
      </Button>
    </>
  );
};

export default OrderButton;
