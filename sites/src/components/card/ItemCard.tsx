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
  SimpleGrid,
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
            <SimpleGrid columns={2} alignItems="center">
              <Stack px={5} py={5}>
                <Heading color={"black"} fontSize={"md"} isTruncated>
                  {props.p.name}
                </Heading>
                <Text color={"gray.500"} isTruncated fontSize={"sm"}>
                  {props.p.description}
                </Text>
                <Text fontWeight="normal">৳{props.p.price}</Text>
              </Stack>
              <Box pos="relative" h={120} w={120} justifySelf="end">
                <Image
                  alt="card-image"
                  src={
                    props.image
                      ? Constants.CDN + props.image
                      : Constants.imgPlaceholder
                  }
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
            </SimpleGrid>
          </LinkOverlay>
        </Box>
      </LinkBox>
    </>
  );
};

export default ItemCard;
