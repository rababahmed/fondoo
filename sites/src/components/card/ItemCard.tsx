import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Divider,
  LinkOverlay,
  LinkBox,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface Props {
  rdata: any;
  cdata: any;
  p: any;
  onClick?: any;
  isMenu?: boolean;
  titleBg?: any;
  cardW?: any;
  image?: string;
  imgW?: any;
  imgH?: any;
  children?: any;
}

const ItemCard = (props: Props) => {
  return (
    <>
      <LinkBox
        borderWidth="1px"
        rounded="md"
        bg={useColorModeValue("white", "gray.900")}
        maxW="sm"
        cursor="pointer"
      >
        <Box w={"full"} overflow={"hidden"}>
          <Stack px={5} py={5}>
            <Heading
              color={props.titleBg ? "white" : "black"}
              px={props.titleBg ? 4 : 0}
              py={props.titleBg ? 2 : 0}
              rounded={props.titleBg ? "sm" : "none"}
              bgColor={props.titleBg || "transparent"}
              fontSize={"md"}
              fontFamily={"body"}
            >
              <LinkOverlay onClick={props.onClick}>{props.p.name}</LinkOverlay>
            </Heading>
            <Text color={"gray.500"} isTruncated fontSize={"sm"}>
              {props.p.description}
            </Text>
            <Text fontWeight="semibold">৳{props.p.price}</Text>
          </Stack>
        </Box>
      </LinkBox>
    </>
  );
};

export default ItemCard;
