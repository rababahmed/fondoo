import React from "react";
import { GET_USER_DETAILS, PLACE_ORDER } from "../../graphql/user";
import { useGQLMutation } from "../../hooks/useGQLMutation";
import { useGQLQuery } from "../../hooks/useGQLQuery";
import { useCartStore } from "../../stores/useCartStore";
import { useCheckoutStore } from "../../stores/useCheckoutStore";
import { useUserStore } from "../../stores/useUserStore";
import PrimaryButton from "./PrimaryButton";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import axios from "axios";
import { Constants } from "../../config";

interface Props {
  rdata: any;
  cdata: any;
}

const PlaceOrderButton = ({ rdata, cdata }: Props) => {
  const fulfilmentType = useCheckoutStore((state) => state.fulfilmentType);
  const deliveryCharge = useCheckoutStore((state) => state.deliveryCharge);
  const vat = useCheckoutStore((state) => state.vat);
  const serviceCharge = useCheckoutStore((state) => state.serviceCharge);
  const total = useCheckoutStore((state) => state.total);
  const isPreOrder = useCheckoutStore((state) => state.isPreOrder);
  const isAccepted = useCheckoutStore((state) => state.isAccepted);
  const deliveryZoneId = useCheckoutStore((state) => state.deliveryZoneId);
  const customerAddressId = useUserStore((state) => state.addressId);
  const customerId = useUserStore((state) => state.userID);
  const cart = useCartStore((state) => state.cart);
  const setRecentOrderId = useUserStore((state) => state.setRecentOrderId);
  const recentOrderId = useUserStore((state) => state.recentOrderId);

  const formattedCart = cart.map((item: any) => {
    return {
      productId: item.id,
      quantity: item.quantity,
      total: item.total,
      restaurantId: rdata.id,
    };
  });

  const initialValues = {
    fulfilmentType: fulfilmentType,
    discount: 0,
    deliveryCharge: deliveryCharge,
    vat: vat,
    serviceCharge: serviceCharge,
    total: total,
    isPreOrder: isPreOrder,
    cart: formattedCart,
    deliveryZoneId: deliveryZoneId,
    customerAddressId: customerAddressId,
    customerId: customerId,
    restaurantId: rdata.id,
  };

  const [payload, setPayload] = React.useState(initialValues);

  const mutation = useGQLMutation(PLACE_ORDER, {
    fulfilmentType: fulfilmentType,
    discount: 0,
    deliveryCharge: deliveryCharge,
    vat: vat,
    serviceCharge: serviceCharge,
    total: total,
    isPreOrder: isPreOrder,
    isAccepted: isAccepted,
    cart: formattedCart,
    deliveryZoneId: deliveryZoneId,
    customerAddressId: customerAddressId,
    customerId: customerId,
    restaurantId: rdata.id,
  });

  const toast = useToast();

  const router = useRouter();

  const onClick = async () => {
    const createOrder = await mutation
      .mutateAsync()
      .then(async (response) => {
        const orderData = response.createOrder;
        toast({
          position: "top",
          title: "Your order has been placed!",
          description: `Order ID - ${orderData.id}`,
          status: "success",
          duration: 5000,
          variant: "solid",
          isClosable: true,
        });
        await setRecentOrderId(orderData.id);
        await axios
          .post(
            Constants.REST_API_V1 +
              "/email/restaurant/order-received/" +
              orderData.id
          )
          .then(() => {
            mutation.reset();
            router.push("/order/confirmed");
          })
          .catch((error) => {});
      })
      .catch((error) => {
        toast({
          position: "top",
          title: "Could not find place order! Please try again later.",
          description: "If the issue persists please call us and let us know!",
          status: "error",
          duration: 5000,
          variant: "solid",
          isClosable: true,
        });
        mutation.reset();
      });
  };

  return (
    <>
      <PrimaryButton
        cdata={cdata}
        text="PLACE ORDER"
        onClick={onClick}
        buttonProps={{
          isLoading: mutation.isLoading,
          loadingText: "Placing Order",
        }}
      />
    </>
  );
};

export default PlaceOrderButton;
