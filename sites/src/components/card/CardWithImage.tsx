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

const CardWithImage = (props: Props) => {
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
        <Image
          alt="card-image"
          src={
            props.image ||
            "https://i2.wp.com/klfoodie.com/wp-content/uploads/2021/07/17-1.jpeg?resize=708%2C708&ssl=1"
          }
          height={props.imgH || 300}
          width={props.imgW || 360}
          objectFit="cover"
          priority
        />

        <Stack p={6}>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
            isTruncated
          >
            {props.title}
          </Heading>
          <Text color={"gray.500"} isTruncated>
            {props.description}
          </Text>
          {props.children}
        </Stack>
      </Box>
    </>
  );
};

export default CardWithImage;
