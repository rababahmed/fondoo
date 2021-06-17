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
        background="primary.800"
        color="white"
        _hover={{
          background: "primary.900",
        }}
        _active={{
          background: "primary.800",
        }}
        {...props.buttonProps}
      >
        {props.title}
      </Button>
    </>
  );
};

export default PrimaryButton;
