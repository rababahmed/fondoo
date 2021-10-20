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
import { useRouter } from "next/router";
import { useCheckoutStore } from "../../stores/useCheckoutStore";

interface Props {
  title: string;
  cdata: any;
  rdata: any;
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
  const vat = useCheckoutStore((state) => state.vat);
  const serviceCharge = useCheckoutStore((state) => state.serviceCharge);
  const deliveryCharge = useCheckoutStore((state) => state.deliveryCharge);
  const total = useCheckoutStore((state) => state.total);
  const handleVatChange = useCheckoutStore((state) => state.handleVatChange);
  const handleServiceChargeChange = useCheckoutStore(
    (state) => state.handleServiceChargeChange
  );
  const handleTotalChange = useCheckoutStore(
    (state) => state.handleTotalChange
  );

  const getArraySum = (a: any) => {
    let total = 0;
    for (let i in a) {
      total += a[i];
    }
    return total;
  };

  const subTotal = cart.length > 0 ? cart.map((p: any) => p.total) : null;

  const calculateVat = handleVatChange(
    (getArraySum(subTotal) * props.rdata.vat) / 100
  );

  const calculateServiceCharge = handleServiceChargeChange(
    (getArraySum(subTotal) * props.rdata.serviceCharge) / 100
  );

  const calculateTotal = handleTotalChange(
    (getArraySum(subTotal) *
      (100 + props.rdata.vat + props.rdata.serviceCharge)) /
      100 +
      deliveryCharge
  );

  const router = useRouter();
  console.log(router.pathname);

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
        mb={
          router.pathname === "/[host]/order/checkout" ? { base: 10, md: 0 } : 0
        }
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
              <Grid templateColumns={"2fr 2fr"} w="full">
                <Text fontSize={"sm"}>Subtotal</Text>
                <Text fontSize={"sm"} textAlign={"end"}>
                  ৳{getArraySum(subTotal)}
                </Text>
              </Grid>
              <Grid templateColumns={"2fr 2fr"} w="full">
                <Text fontSize={"sm"}>VAT</Text>
                <Text fontSize={"sm"} textAlign={"end"}>
                  ৳{vat}
                </Text>
              </Grid>
              <Grid templateColumns={"2fr 2fr"} w="full">
                <SimpleGrid columns={2} alignItems={"center"} w="full">
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
                  ৳{serviceCharge}
                </Text>
              </Grid>
              <Grid templateColumns={"2fr 2fr"} w="full">
                <Text fontSize={"sm"}>Delivery Fee</Text>
                <Text fontSize={"sm"} textAlign={"end"}>
                  ৳{deliveryCharge}
                </Text>
              </Grid>
              {router.pathname === "/[host]/order/checkout" ? (
                <>
                  <Divider py={2} variant={"dashed"} borderColor={"gray.600"} />

                  <Box py={1} />
                  <Grid templateColumns={"2fr 2fr"} w="full">
                    <Text fontSize={"md"} fontWeight={"semibold"}>
                      Total
                    </Text>
                    <Text
                      fontSize={"md"}
                      fontWeight={"semibold"}
                      textAlign={"end"}
                    >
                      ৳{total}
                    </Text>
                  </Grid>
                </>
              ) : (
                <>
                  <Divider py={2} variant={"dashed"} borderColor={"gray.600"} />

                  <Box py={1} />
                  <PrimaryButton
                    cdata={props.cdata}
                    text={"Checkout" + " - ৳" + total}
                    onClick={() => router.push("/order/checkout")}
                  />
                </>
              )}
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
