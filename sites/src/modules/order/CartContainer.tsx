import {
  Box,
  Divider,
  Grid,
  Icon,
  IconButton,
  Stack,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { AiFillDelete, AiFillTag, AiOutlineInfoCircle } from "react-icons/ai";
import { BiMinusCircle } from "react-icons/bi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import FlatCard from "../../components/card/FlatCard";
import { useCartStore } from "../../stores/useCartStore";
import { useCheckoutStore } from "../../stores/useCheckoutStore";
import { useCouponStore } from "../../stores/useCouponStore";
import { useUserStore } from "../../stores/useUserStore";
import CouponFormContainer from "./CouponFormContainer";

interface Props {
  cdata: any;
  rdata: any;
}

const CartContainer = (props: Props) => {
  const cart = useCartStore((state) => state.cart);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const vat = useCheckoutStore((state) => state.vat);
  const serviceCharge = useCheckoutStore((state) => state.serviceCharge);
  const deliveryCharge = useCheckoutStore((state) => state.deliveryCharge);
  const total = useCheckoutStore((state) => state.total);
  const discount = useCheckoutStore((state) => state.discount);
  const couponId = useCouponStore((state) => state.couponId);
  const handleDiscountChange = useCheckoutStore(
    (state) => state.handleDiscountChange
  );
  const handleVatChange = useCheckoutStore((state) => state.handleVatChange);
  const handleServiceChargeChange = useCheckoutStore(
    (state) => state.handleServiceChargeChange
  );
  const handleTotalChange = useCheckoutStore(
    (state) => state.handleTotalChange
  );
  const discountType = useCouponStore((state) => state.discountType);
  const discountValue = useCouponStore((state) => state.discountValue);
  const removeCoupon = useCouponStore((state) => state.removeCoupon);

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

  const calculateDiscount = handleDiscountChange(
    discountType === "Fixed"
      ? discountValue
      : (getArraySum(subTotal) * discountValue) / 100
  );

  const calculateTotal = handleTotalChange(
    (getArraySum(subTotal) *
      (100 + props.rdata.vat + props.rdata.serviceCharge)) /
      100 +
      deliveryCharge -
      discount
  );

  const coupon = props.rdata.coupons.find((c: any) => c.id === couponId);
  console.log(coupon);

  const router = useRouter();

  return (
    <>
      {cart.length > 0 ? (
        <Stack py={5} px={5} overflow={"auto"}>
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
                {props.rdata.currency}
                {p.total}
              </Text>
            </Grid>
          ))}
          <CouponFormContainer rdata={props.rdata} cdata={props.cdata} />
          {coupon && (
            <Box
              w={"full"}
              rounded={"md"}
              border={"1px"}
              borderColor={"gray.200"}
              overflow={"hidden"}
            >
              <Stack direction={"row"} alignItems={"center"} px={4} py={3}>
                <AiFillTag color={props.cdata.primaryColor} />
                <Text pr={2} fontWeight={"bold"}>
                  {coupon.code}
                </Text>
                <IconButton
                  background={"red"}
                  color={"white"}
                  fontSize="md"
                  size={"xs"}
                  aria-label="Remove"
                  icon={<AiFillDelete />}
                  onClick={() => removeCoupon()}
                />
              </Stack>
            </Box>
          )}
          <Divider py={2} variant={"dashed"} borderColor={"gray.600"} />
          <Grid templateColumns={"2fr 2fr"} w="full">
            <Text fontSize={"sm"}>Subtotal</Text>
            <Text fontSize={"sm"} textAlign={"end"}>
              {props.rdata.currency}
              {getArraySum(subTotal)}
            </Text>
          </Grid>
          {discount > 0 && (
            <Grid templateColumns={"2fr 2fr"} w="full">
              <Text fontSize={"sm"}>Discount</Text>
              <Text fontSize={"sm"} textAlign={"end"}>
                - {props.rdata.currency}
                {discount}
              </Text>
            </Grid>
          )}
          <Grid templateColumns={"2fr 2fr"} w="full">
            <Box display={"flex"} alignItems={"center"}>
              <Text fontSize={"sm"} pr={2}>
                Tax
              </Text>
              <Tooltip
                label="Includes all taxes and duties"
                fontSize="sm"
                shouldWrapChildren={true}
              >
                <AiOutlineInfoCircle />
              </Tooltip>
            </Box>
            <Text fontSize={"sm"} textAlign={"end"}>
              {props.rdata.currency}
              {vat}
            </Text>
          </Grid>
          {serviceCharge > 0 && (
            <Grid templateColumns={"2fr 2fr"} w="full">
              <Box display={"flex"} alignItems={"center"}>
                <Text fontSize={"sm"} pr={2}>
                  Service Fee
                </Text>
                <Tooltip
                  label="This service fee helps us operate our online ordering service."
                  fontSize="sm"
                  shouldWrapChildren={true}
                >
                  <AiOutlineInfoCircle />
                </Tooltip>
              </Box>
              <Text fontSize={"sm"} textAlign={"end"}>
                {props.rdata.currency}
                {serviceCharge}
              </Text>
            </Grid>
          )}

          <Grid templateColumns={"2fr 2fr"} w="full">
            <Text fontSize={"sm"}>Delivery Fee</Text>
            <Text fontSize={"sm"} textAlign={"end"}>
              {props.rdata.currency}
              {deliveryCharge}
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
                <Text fontSize={"md"} fontWeight={"semibold"} textAlign={"end"}>
                  {props.rdata.currency}
                  {total}
                </Text>
              </Grid>
            </>
          ) : (
            <>
              <Divider variant={"dashed"} borderColor={"gray.600"} />

              <Box py={1} />
              <PrimaryButton
                cdata={props.cdata}
                text={"Checkout" + " - " + props.rdata.currency + total}
                onClick={() => router.push("/order/checkout")}
              />
            </>
          )}
        </Stack>
      ) : (
        <Stack py={5} px={5} alignItems={"center"} justifyContent={"center"}>
          <Icon
            fontSize={"120px"}
            color={"gray.200"}
            as={MdShoppingCart}
          ></Icon>
          <Text>There are no items in your cart.</Text>
        </Stack>
      )}
    </>
  );
};

export default CartContainer;
