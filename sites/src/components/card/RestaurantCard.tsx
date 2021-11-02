import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { getOpeningHours } from "../../lib/getOpeningHours";

interface Props {
  rdata: any;
  cdata: any;
  isMenu?: boolean;
  titleBg?: any;
  cardW?: any;
  image?: string;
  imgW?: any;
  imgH?: any;
  children?: any;
}

const RestaurantCard = (props: Props) => {
  const openingData = getOpeningHours(props.rdata);

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
        <Stack px={5} py={5}>
          <Heading
            color={props.titleBg ? "white" : "black"}
            px={props.titleBg ? 4 : 0}
            py={props.titleBg ? 2 : 0}
            rounded={props.titleBg ? "sm" : "none"}
            bgColor={props.titleBg || "transparent"}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {props.rdata.name}
          </Heading>
          <Text color={"gray.500"}>{props.rdata.cuisine}</Text>
          <Stack>
            <Stack
              direction={"row"}
              spacing={0}
              color={props.cdata.primaryColor}
            >
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </Stack>
            <Divider variant="solid" borderColor={"gray.400"} />
            {/* <Text fontWeight="semibold">Min Delivery Amount ৳500</Text> */}
            <Text fontWeight="semibold">
              {openingData
                ? "Open Hours: " + openingData
                : "Sorry, we're closed now."}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default RestaurantCard;
