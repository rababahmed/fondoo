import { Button } from "@chakra-ui/react";
import React from "react";

interface Props {
  cdata: any;
  text: String;
}

const SecondaryButton = ({ cdata, text }: Props) => {
  return (
    <>
      <Button
        bg={cdata.secondaryColor}
        rounded={"full"}
        _hover={{ opacity: "0.9" }}
        color="white"
      >
        {text}
      </Button>
    </>
  );
};

export default SecondaryButton;
