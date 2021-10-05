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
  Grid,
  Flex,
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
        cursor="pointer"
      >
        <Box w={"full"} overflow={"hidden"}>
          <LinkOverlay onClick={props.onClick}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
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
                  {props.p.name}
                </Heading>
                <Text color={"gray.500"} isTruncated fontSize={"sm"}>
                  {props.p.description}
                </Text>
                <Text fontWeight="semibold">৳{props.p.price}</Text>
              </Stack>

              <Image
                alt="card-image"
                src={
                  props.image ||
                  "https://i2.wp.com/klfoodie.com/wp-content/uploads/2021/07/17-1.jpeg?resize=708%2C708&ssl=1"
                }
                height={props.imgH || 130}
                width={props.imgW || 130}
                objectFit="contain"
              />
            </Flex>
          </LinkOverlay>
        </Box>
      </LinkBox>
    </>
  );
};

export default ItemCard;
