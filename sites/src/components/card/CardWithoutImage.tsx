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
  title: string;
  description: string;
  isMenu?: boolean;
  titleBg?: any;
  cardW?: any;
  image?: string;
  imgW?: any;
  imgH?: any;
  children?: any;
}

const CardWithoutImage = (props: Props) => {
  return (
    <>
      <Box
        maxW={props.cardW || "300px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        shadow={"lg"}
        rounded={"md"}
        border={"1px"}
        borderColor={"gray.100"}
        overflow={"hidden"}
      >
        <Stack px={10} py={5}>
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
          <Text color={"gray.500"}>{props.description}</Text>
          <Box p={props.isMenu ? 4 : 0}>{props.children}</Box>
        </Stack>
      </Box>
    </>
  );
};

export default CardWithoutImage;
