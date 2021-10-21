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
  const cart = useCartStore((state) => state.cart);
  const setRecentOrderId = useUserStore((state) => state.setRecentOrderId);

  const userId = useUserStore((state) => state.userID);

  const { data, error, isLoading, isSuccess } = useGQLQuery(
    "get-user-details",
    GET_USER_DETAILS,
    {
      id: userId,
    }
  );

  const formattedCart = cart.map((item: any) => {
    return {
      productId: item.id,
      quantity: item.quantity,
      total: item.total,
      restaurantId: rdata.id,
    };
  });

  console.log(formattedCart);

  const initialValues = {
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
    customerAddressId: "ckuwtms7b1557b7qmbk7erkby",
    restaurantId: rdata.id,
  };

  const [formData, setFormData] = React.useState(initialValues);

  const mutation = useGQLMutation(PLACE_ORDER, formData);

  const toast = useToast();

  const router = useRouter();

  const onClick = async () => {
    const createOrder = await mutation
      .mutateAsync()
      .then((response) => {
        console.log(response);
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
        console.log(orderData.id);
        setRecentOrderId(orderData.id);
        mutation.reset();
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
      })
      .finally(() => {
        router.push("/order/confirmed");
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
