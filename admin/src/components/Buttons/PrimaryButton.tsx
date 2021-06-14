import { Button } from "@chakra-ui/button";
import React from "react";

interface ButtonProps {
  onClick: () => void;
  title: String;
  buttonProps?: any;
}

const PrimaryButton = (props: ButtonProps) => {
  return (
    <>
      <Button
        onClick={props.onClick}
        colorScheme="gray"
        background="gray.800"
        color="white"
        _hover={{
          background: "gray.900",
        }}
        _active={{
          background: "gray.800",
        }}
        {...props.buttonProps}
      >
        {props.title}
      </Button>
    </>
  );
};

export default PrimaryButton;
