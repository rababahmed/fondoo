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
  VStack,
  Container,
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
import CartContainer from "../../modules/order/CartContainer";

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
  cartProps?: any;
}

const CartCard = (props: Props) => {
  const cart = useCartStore((state) => state.cart);

  const getArraySum = (a: any) => {
    let total = 0;
    for (let i in a) {
      total += a[i];
    }
    return total;
  };

  const subTotal = getArraySum(
    cart.length > 0 ? cart.map((p: any) => p.total) : null
  );

  const router = useRouter();

  return (
    <>
      <Box
        bg={useColorModeValue("white", "gray.900")}
        rounded={"md"}
        borderWidth={"1px"}
        borderColor={"gray.200"}
        overflow={"hidden"}
        h="fit-content"
        mb={
          router.pathname === "/[host]/order/checkout" ? { base: 10, md: 0 } : 0
        }
        display={{ base: "none", md: "block" }}
        {...props.cartProps}
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

          <CartContainer rdata={props.rdata} cdata={props.cdata} />
        </Stack>
      </Box>
    </>
  );
};

export default CartCard;
