import {
  Box,
  useColorModeValue,
  SimpleGrid,
  Stack,
  Button,
} from "@chakra-ui/react";
import React from "react";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import FlatCard from "../../components/Cards/FlatCard";
import { GET_PLAN_DETAILS } from "../../graphql/user";
import { useGQLQuery } from "../../shared-hooks/useGQLQuery";
import { useUserStore } from "../../store/useUserStore";

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
    Paddle.Checkout.open({
      product: 19757,
      marketingConsent: 1,
      passthrough: {
        restaurantId: restaurantId,
        restaurantPlanId: "ckw7nmokc1120290vjtqdk802n3",
      },
    });
    setIsLoadingPayment(false);
  };

  return (
    <>
      <SimpleGrid columns={2}>
        <FlatCard
          title={"Plan: " + data?.restaurant.plan.name}
          description={
            data?.restaurant.plan.name === "Sandbox"
              ? "Take TezzBites out on a spin now. Upgrade when you're ready."
              : "You're now on the starter plan. Ready to accept orders from anywhere in the world."
          }
        >
          <Stack>
            {data?.restaurant.plan.name === "Sandbox" ? (
              <PrimaryButton
                title={"Upgrade Now"}
                onClick={openCheckout}
                buttonProps={{
                  fontSize: "sm",
                  size: "sm",
                  isLoading: isLoadingPayment,
                }}
              />
            ) : (
              <></>
            )}
            {data?.restaurant.plan.name !== "Sandbox" ? (
              <Button colorScheme="gray" onClick={openCheckout}>
                Cancel Plan
              </Button>
            ) : (
              <></>
            )}
          </Stack>
        </FlatCard>
      </SimpleGrid>
    </>
  );
};

export default BillingModule;
