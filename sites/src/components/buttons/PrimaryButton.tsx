import { Button } from "@chakra-ui/react";
import React from "react";

interface Props {
  cdata: any;
  text: String;
}

const PrimaryButton = ({ cdata, text }: Props) => {
  return (
    <>
      <Button
        bg={cdata.secondaryColor}
        _hover={{ bg: cdata.secondaryColor, opacity: "0.9" }}
      >
        {text}
      </Button>
    </>
  );
};

export default PrimaryButton;
