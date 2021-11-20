import {
  Box,
  useColorModeValue,
  SimpleGrid,
  Stack,
  Button,
  Text,
} from "@chakra-ui/react";
import React from "react";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import FlatCard from "../../components/Cards/FlatCard";
import { GET_PLAN_DETAILS, GET_SUBSCRIPTION_DETAILS } from "../../graphql/user";
import { useGQLQuery } from "../../shared-hooks/useGQLQuery";
import { useUserStore } from "../../store/useUserStore";
import Link from "next/link";

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

  const subscriptionData = useGQLQuery(
    "get-subscription-details",
    GET_SUBSCRIPTION_DETAILS,
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
              : "Ready to take orders from anywhere in the world. Upgrade when you can't handle the load!"
          }
        >
          {data?.restaurant.plan.name === "Starter" ? (
            <Stack>
              <Text>✓ Full Website</Text>
              <Text>✓ Online Ordering</Text>
              <Text>✓ 50 items</Text>
              <Text>✓ Unlimited Orders</Text>
            </Stack>
          ) : (
            <></>
          )}

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
              <SimpleGrid columns={2} mt={4} alignItems="center">
                <Box>
                  <Link
                    href={subscriptionData.data?.subscription.paddleCancelUrl}
                    passHref={true}
                  >
                    <Button colorScheme="blackAlpha" size="sm">
                      Cancel Plan
                    </Button>
                  </Link>
                </Box>
                <PrimaryButton
                  title={"Upgrade to Pro"}
                  onClick={openCheckout}
                  buttonProps={{
                    fontSize: "sm",
                    size: "sm",
                    isLoading: isLoadingPayment,
                    justifySelf: "end",
                  }}
                />
              </SimpleGrid>
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
