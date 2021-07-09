import { Button } from "@chakra-ui/react";
import React from "react";

interface Props {
  cdata: any;
  text: String;
}

const OrderButton = ({ cdata, text }: Props) => {
  return (
    <>
      <Button
        bg={cdata.primaryColor}
        _hover={{ cursor: "pointer", opacity: "95%" }}
        color="white"
      >
        {text}
      </Button>
    </>
  );
};

export default OrderButton;
