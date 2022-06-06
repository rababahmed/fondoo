import { Box, Stack, Text } from "@chakra-ui/react";
import { Formik } from "formik";
import { InputControl, SubmitButton } from "formik-chakra-ui";
import React from "react";
import * as Yup from "yup";
import { useUserStore } from "../../stores/useUserStore";
import { useToast } from "@chakra-ui/react";
import { useCouponStore } from "../../stores/useCouponStore";

interface Props {
  rdata: any;
  cdata: any;
}

const CouponFormContainer = (props: Props) => {
  const setDiscount = useCouponStore((state) => state.setDiscount);

  const initialValues = {
    coupon: "",
  };

  const validationSchema = Yup.object({
    coupon: Yup.string(),
  });

  const toast = useToast();

  const onSubmit = async (values: any) => {
    const coupon = values.coupon.toUpperCase();
    const data = props.rdata.coupons.find((c: any) => c.code === coupon);
    console.log(data);
    if (data.endDate && new Date(data.endDate) > new Date()) {
      setDiscount(data.id, data.discount, data.value);
      toast({
        title: "Coupon applied successfully.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    }
    if (!data.endDate) {
      setDiscount(data.id, data.discount, data.value);
      toast({
        title: "Coupon applied successfully.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    }
    if (data.endDate && new Date(data.endDate) < new Date()) {
      toast({
        title: "Coupon has expired.",
        status: "warning",
        duration: 4000,
        isClosable: true,
      });
    }
    if (!coupon) {
      toast({
        title: "Plese enter a coupon code.",
        status: "warning",
        duration: 4000,
        isClosable: true,
      });
    }
    if (!data) {
      toast({
        title: "Coupon not found.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <Box as="form" onSubmit={handleSubmit as any}>
            <Text pt={4}>Got a coupon?</Text>
            <Stack pt={1} direction={"row"} spacing="6">
              <InputControl
                name="coupon"
                inputProps={{
                  placeholder: "Enter your code",
                }}
              />
              <Box>
                <SubmitButton
                  loadingText="Adding"
                  bgColor={props.cdata.secondaryColor}
                  _hover={{ opacity: "0.9" }}
                >
                  Apply
                </SubmitButton>
              </Box>
            </Stack>
          </Box>
        )}
      </Formik>
    </>
  );
};

export default CouponFormContainer;
