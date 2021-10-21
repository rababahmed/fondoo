import { Button } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import React from "react";

interface Props {
  cdata: any;
  text: string;
  onClick?: any;
  url?: any;
  buttonProps?: any;
}

const PrimaryButton = ({ cdata, text, url, onClick, buttonProps }: Props) => {
  const router = useRouter();
  return (
    <>
      <Button
        onClick={onClick}
        bg={cdata.primaryColor}
        rounded={"full"}
        _hover={{ cursor: "pointer", opacity: "95%" }}
        color="white"
        {...buttonProps}
      >
        {text}
      </Button>
    </>
  );
};

export default PrimaryButton;
