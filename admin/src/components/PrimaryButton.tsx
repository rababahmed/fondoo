import { Button } from "@chakra-ui/button";
import React from "react";

interface ButtonProps {
  onClick: () => void;
  title: String;
}

const PrimaryButton = (props: ButtonProps) => {
  return (
    <>
      <Button
        onClick={props.onClick}
        colorScheme="gray"
        background="gray.700"
        color="white"
        _hover={{
          background: "gray.800",
        }}
        _active={{
          background: "gray.700",
        }}
      >
        {props.title}
      </Button>
    </>
  );
};

export default PrimaryButton;
