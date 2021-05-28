import { Text } from "@chakra-ui/layout";
import React from "react";

interface Props {
  text: String;
}

const NavText = (props: Props) => {
  return (
    <>
      <Text
        mb={2}
        fontSize="sm"
        fontWeight="medium"
        letterSpacing={1}
        color="gray.400"
      >
        {props.text}
      </Text>
    </>
  );
};

export default NavText;
