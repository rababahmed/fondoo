import { Button } from "@chakra-ui/react";
import React from "react";

interface Props {
  cdata: any;
  text: String;
  onClick?: any;
}

const SecondaryButton = ({ cdata, text, onClick }: Props) => {
  return (
    <>
      <Button
        bg={cdata.secondaryColor}
        rounded={"full"}
        _hover={{ opacity: "0.9" }}
        color="white"
        onClick={onClick}
      >
        {text}
      </Button>
    </>
  );
};

export default SecondaryButton;
