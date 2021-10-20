import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

interface Props {
  title?: string;
  onClick?: any;
  description?: string;
  isPayment?: boolean;
  titleBg?: any;
  cardW?: any;
  image?: string;
  imgW?: any;
  imgH?: any;
  children?: any;
  boxProps?: any;
}

const FlatCard = (props: Props) => {
  return (
    <>
      <Box
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        rounded={"md"}
        border={"1px"}
        borderColor={"gray.200"}
        overflow={"hidden"}
        onClick={props.onClick}
        {...props.boxProps}
      >
        <Stack px={props.isPayment ? 4 : 6} py={props.isPayment ? 2 : 5}>
          {props.title ? (
            <Heading
              color={props.titleBg ? "white" : "black"}
              px={props.titleBg ? 4 : 0}
              py={props.titleBg ? 2 : 0}
              rounded={props.titleBg ? "sm" : "none"}
              bgColor={props.titleBg || "transparent"}
              fontSize={"2xl"}
              fontFamily={"body"}
            >
              {props.title}
            </Heading>
          ) : null}
          {props.description ? (
            <Text color={"gray.500"}>{props.description}</Text>
          ) : null}
          <Box>{props.children}</Box>
        </Stack>
      </Box>
    </>
  );
};

export default FlatCard;
