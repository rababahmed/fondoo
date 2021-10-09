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
  IconButton,
  Tooltip,
  Icon,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiMinusCircle } from "react-icons/bi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useCartStore } from "../../stores/useCartStore";
import PrimaryButton from "../buttons/PrimaryButton";
import { MdShoppingCart } from "react-icons/md";

interface Props {
  title: string;
  cdata: any;
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
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);

  const subTotal = cart.length > 0 ? cart.map((p: any) => p.total) : null;

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
        // zIndex="10"
        // top="34"
        // pos={"sticky"}
        bg={useColorModeValue("white", "gray.900")}
        rounded={"md"}
        borderWidth={"1px"}
        borderColor={"gray.200"}
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
          {cart.length > 0 ? (
            <Stack py={5} px={5}>
              {cart.map((p: any) => (
                <Grid
                  key={p.id}
                  templateColumns={"2fr 6fr 2fr"}
                  gridGap={3}
                  alignItems={"center"}
                >
                  <Stack direction={"row"} alignItems={"center"}>
                    <IconButton
                      bg={"transparent"}
                      _hover={{
                        bg: "transparent",
                        color: props.cdata.primaryColor,
                      }}
                      _focus={{
                        ringColor: "transparent",
                      }}
                      fontSize="xl"
                      size={"xs"}
                      aria-label="Minus"
                      icon={<BiMinusCircle />}
                      onClick={() => decreaseQuantity(p.id)}
                    />
                    <Text fontWeight={"medium"}>{p.quantity}</Text>
                    <IconButton
                      bg={"transparent"}
                      _hover={{
                        bg: "transparent",
                        color: props.cdata.primaryColor,
                      }}
                      _focus={{
                        ringColor: "transparent",
                      }}
                      fontSize="xl"
                      size={"xs"}
                      aria-label="Add"
                      icon={<IoMdAddCircleOutline />}
                      onClick={() => increaseQuantity(p.id)}
                    />
                  </Stack>
                  <Text fontWeight={"medium"} isTruncated>
                    {p.name}
                  </Text>
                  <Text fontWeight={"medium"} textAlign={"end"}>
                    ৳{p.total}
                  </Text>
                </Grid>
              ))}
              <Divider py={2} variant={"dashed"} borderColor={"gray.600"} />
              <Grid templateColumns={"2fr 2fr"}>
                <Text fontSize={"sm"}>Subtotal</Text>
                <Text fontSize={"sm"} textAlign={"end"}>
                  ৳{getArraySum(subTotal)}
                </Text>
              </Grid>
              <Grid templateColumns={"2fr 2fr"}>
                <Text fontSize={"sm"}>VAT</Text>
                <Text fontSize={"sm"} textAlign={"end"}>
                  ৳{(getArraySum(subTotal) * 15) / 100}
                </Text>
              </Grid>
              <Grid templateColumns={"2fr 2fr"}>
                <SimpleGrid columns={2} alignItems={"center"}>
                  <Text fontSize={"sm"}>Service Fee</Text>
                  <Tooltip
                    label="This service fee helps us operate our online ordering service."
                    fontSize="sm"
                    shouldWrapChildren={true}
                  >
                    <AiOutlineInfoCircle />
                  </Tooltip>
                </SimpleGrid>
                <Text fontSize={"sm"} textAlign={"end"}>
                  ৳{(getArraySum(subTotal) * 10) / 100}
                </Text>
              </Grid>
              <Grid templateColumns={"2fr 2fr"}>
                <Text fontSize={"sm"}>Delivery Fee</Text>
                <Text fontSize={"sm"} textAlign={"end"}>
                  ৳{(getArraySum(subTotal) * 0) / 100}
                </Text>
              </Grid>
              <Divider py={2} variant={"dashed"} borderColor={"gray.600"} />

              <Box py={1} />
              <PrimaryButton
                cdata={props.cdata}
                text={"Checkout" + " - ৳" + (getArraySum(subTotal) * 125) / 100}
              />
            </Stack>
          ) : (
            <Stack
              py={5}
              px={5}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Icon
                fontSize={"120px"}
                color={"gray.200"}
                as={MdShoppingCart}
              ></Icon>
              <Text>There are no items in your cart.</Text>
            </Stack>
          )}
        </Stack>
      </Box>
    </>
  );
};

export default CartCard;
