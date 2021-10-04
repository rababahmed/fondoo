import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  SimpleGrid,
  Grid,
  Button,
  Divider,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { useCartStore } from "../../stores/useCartStore";

interface Props {
  title: string;
  isMenu?: boolean;
  titleBg?: any;
  cardW?: any;
  image?: string;
  imgW?: any;
  imgH?: any;
  children?: any;
}

const CartCard = (props: Props) => {
  const cart = useCartStore((state) => state.cart);

  const subTotal = cart.map((p: any) => p.price);

  console.log(subTotal);

  const getArraySum = (a: any) => {
    let total = 0;
    for (let i in a) {
      total += a[i];
    }
    return total;
  };

  return (
    <>
      <Box
        // w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        shadow={"lg"}
        rounded={"md"}
        border={"1px"}
        borderColor={"gray.100"}
        overflow={"hidden"}
      >
        <Stack>
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
          <Stack py={5} px={5}>
            {cart.map((p: any) => (
              <Grid key={p.id} templateColumns={"2fr 6fr 2fr"}>
                <Text fontWeight={"medium"}>{p.quantity}</Text>
                <Text fontWeight={"medium"} isTruncated>
                  {p.name}
                </Text>
                <Text fontWeight={"medium"} textAlign={"end"}>
                  ৳{p.price}
                </Text>
              </Grid>
            ))}
            <Divider py={2} variant={"dashed"} borderColor={"gray.600"} />
            <Grid templateColumns={"2fr 2fr"}>
              <Text fontWeight={"bold"}>Subtotal</Text>
              <Text fontWeight={"bold"} textAlign={"end"}>
                ৳{getArraySum(subTotal)}
              </Text>
            </Grid>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default CartCard;
