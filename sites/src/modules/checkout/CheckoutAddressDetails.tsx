import React from "react";
import {
  Box,
  Flex,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Formik } from "formik";
import { InputControl, SubmitButton } from "formik-chakra-ui";
import * as Yup from "yup";
import { useGQLQuery } from "../../hooks/useGQLQuery";
import { useUserStore } from "../../stores/useUserStore";
import { GET_USER_DETAILS } from "../../graphql/user";
import FlatCard from "../../components/card/FlatCard";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import AddAddress from "../account/AddAddress";

interface Props {
  rdata: any;
  cdata: any;
}

const CheckoutAddressDetails = ({ rdata, cdata }: Props) => {
  const userId = useUserStore((state) => state.userID);
  const addressId = useUserStore((state) => state.addressId);
  const setAddressId = useUserStore((state) => state.setAddress);

  const { data, error, isLoading, isSuccess } = useGQLQuery(
    "get-customer-addresses",
    GET_USER_DETAILS,
    {
      id: userId,
    }
  );

  return (
    <>
      <Skeleton isLoaded={!isLoading}>
        <SimpleGrid columns={2} spacing={6}>
          {isSuccess && data.customer?.addresses?.length > 0 ? (
            data.customer?.addresses?.map((a: any) => (
              <FlatCard
                key={a.id}
                boxProps={{
                  cursor: "pointer",
                  border: addressId === a.id ? "2px" : "1px",
                  borderColor:
                    addressId === a.id ? cdata.primaryColor : "gray.200",
                }}
                onClick={() => setAddressId(a.id)}
              >
                <Text fontWeight={"semibold"} isTruncated>
                  {a.streetAddress}
                </Text>
              </FlatCard>
            ))
          ) : (
            <>
              <Text fontWeight={"semibold"}>
                No address found. Please add an address to continue.
              </Text>
              <AddAddress cdata={cdata} rdata={rdata} />
            </>
          )}
        </SimpleGrid>
      </Skeleton>
    </>
  );
};

export default CheckoutAddressDetails;
