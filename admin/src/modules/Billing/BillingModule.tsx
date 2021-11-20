import { Box, useColorModeValue, SimpleGrid, Stack } from "@chakra-ui/react";
import React from "react";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import FlatCard from "../../components/Cards/FlatCard";
import { GET_PLAN_DETAILS } from "../../graphql/user";
import { useGQLQuery } from "../../shared-hooks/useGQLQuery";
import { useUserStore } from "../../store/useUserStore";
import Script from "next/script";

declare global {
  interface Window {
    Paddle: any;
  }
}

const BillingModule = () => {
  const restaurantId = useUserStore((state) => state.restaurantID);
  const { data, isLoading, isError, isSuccess } = useGQLQuery(
    "get-restaurant-plan",
    GET_PLAN_DETAILS,
    {
      id: restaurantId,
    }
  );

  const Paddle = window.Paddle;

  const [isLoadingPayment, setIsLoadingPayment] = React.useState(false);

  const openCheckout = () => {
    setIsLoadingPayment(true);
    Paddle.Checkout.open({ product: 19757, marketingConsent: 1 });
    setIsLoadingPayment(false);
  };

  return (
    <>
      <Script src="https://cdn.paddle.com/paddle/paddle.js"></Script>
      <SimpleGrid columns={2}>
        <FlatCard
          title={"Plan: " + data?.restaurant.plan.name}
          description="Take TezzBites out on a spin now. Upgrade when you're ready."
        >
          <Stack>
            <PrimaryButton
              title={"Upgrade Now"}
              onClick={openCheckout}
              buttonProps={{
                fontSize: "sm",
                size: "sm",
                isLoading: isLoadingPayment,
              }}
            />
          </Stack>
        </FlatCard>
      </SimpleGrid>
    </>
  );
};

export default BillingModule;
