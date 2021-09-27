import { Box, Center, Flex, Heading, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import { Constants } from "../../config";
import OrderButton from "../buttons/OrderButton";
import PrimaryButton from "../buttons/PrimaryButton";
import Image from "next/image";
import DealsModule from "../../modules/home/DealsContainer";

interface Props {
  rdata: any;
  cdata: any;
  heading: string;
  imageProps: any;
  children?: any;
}

const Header = ({ rdata, cdata, imageProps, children, heading }: Props) => {
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
        </Flex>
      </Box>
    </>
  );
};

export default Header;
