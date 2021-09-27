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
  image?: string;
  imgW?: any;
  imgH?: any;
  children?: any;
}

const CardWithoutImage = (props: Props) => {
  return (
    <>
      <Box
        maxW={"300px"}
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
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {props.title}
          </Heading>
          <Text color={"gray.500"}>{props.description}</Text>
          {props.children}
        </Stack>
      </Box>
    </>
  );
};

export default CardWithoutImage;
