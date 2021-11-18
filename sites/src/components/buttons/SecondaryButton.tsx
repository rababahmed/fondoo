import { Button } from "@chakra-ui/react";
import React from "react";

interface Props {
  cdata: any;
  text: String;
  onClick?: any;
  buttonProps?: any;
}

const SecondaryButton = ({ cdata, text, onClick, buttonProps }: Props) => {
  return (
    <>
      <Button
        bg={cdata.secondaryColor}
        rounded={"full"}
        _hover={{ opacity: "0.9" }}
        color="white"
        onClick={onClick}
        fontSize={{ md: "sm", "2xl": "xl" }}
        fontWeight="bold"
        {...buttonProps}
      >
        {text}
      </Button>
    </>
  );
};

export default SecondaryButton;
