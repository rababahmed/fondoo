import { Button } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import React from "react";

interface Props {
  cdata: any;
  text: string;
  onClick?: any;
  url?: any;
}

const PrimaryButton = ({ cdata, text, url, onClick }: Props) => {
  const router = useRouter();
  return (
    <>
      <Button
        onClick={onClick}
        bg={cdata.primaryColor}
        rounded={"full"}
        _hover={{ cursor: "pointer", opacity: "95%" }}
        color="white"
      >
        {text}
      </Button>
    </>
  );
};

export default PrimaryButton;
