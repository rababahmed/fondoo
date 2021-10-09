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
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Constants } from "../../config";

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
        <Box w="full" isTruncated>
          <LinkOverlay onClick={props.onClick}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Stack px={5} py={5} maxW={180}>
                <Heading color={"black"} fontSize={"md"} isTruncated>
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
                  props.image
                    ? Constants.CDN + props.image
                    : Constants.imgPlaceholder
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
