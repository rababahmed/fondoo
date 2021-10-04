import {
  Box,
  Center,
  Flex,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/layout";
import React from "react";
import { Constants } from "../../config";
import OrderButton from "../buttons/OrderButton";
import PrimaryButton from "../buttons/SecondaryButton";
import Image from "next/image";
import DealsModule from "../../modules/home/DealsContainer";
import CardWithoutImage from "./CardWithoutImage";
import { AiOutlineStar } from "react-icons/ai";
import RestaurantCard from "./RestaurantCard";

interface Props {
  rdata: any;
  cdata: any;
  heading?: string;
  imageProps: any;
  isOrderPage?: boolean;
  children?: any;
}

const Header = ({
  rdata,
  cdata,
  imageProps,
  children,
  heading,
  isOrderPage,
}: Props) => {
  return (
    <>
      <Box>
        <Flex>
          <Box pos="relative" w="100%" h={260}>
            <Image
              src={imageProps.src}
              alt="logo"
              layout="fill"
              objectFit="cover"
              priority
              quality="100"
              blurDataURL={imageProps.blurDataURL}
              placeholder="blur"
            />
          </Box>
          {isOrderPage ? (
            <Box
              pos="absolute"
              zIndex="1"
              h={260}
              w="100%"
              bgGradient={"linear(to-r, blackAlpha.600, blackAlpha.600)"}
            >
              <VStack
                p={14}
                px={{ base: 0, md: 60 }}
                spacing={4}
                align={{ base: "center", md: "start" }}
              >
                <RestaurantCard rdata={rdata} cdata={cdata} />
              </VStack>
            </Box>
          ) : (
            <Box
              pos="absolute"
              zIndex="1"
              h={260}
              w="100%"
              bgGradient={"linear(to-r, blackAlpha.600, blackAlpha.600)"}
            >
              <VStack mt={110} spacing={4} align="center">
                <Heading size="2xl" color="white" align="center">
                  {heading}
                </Heading>
              </VStack>
            </Box>
          )}
        </Flex>
      </Box>
    </>
  );
};

export default Header;
