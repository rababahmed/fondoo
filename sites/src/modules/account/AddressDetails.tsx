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
import AddAddress from "./AddAddress";

interface Props {
  rdata: any;
  cdata: any;
}

const AddressDetails = ({ rdata, cdata }: Props) => {
  const userId = useUserStore((state) => state.userID);

  const { data, error, isLoading, isSuccess } = useGQLQuery(
    "get-customer-addresses",
    GET_USER_DETAILS,
    {
      id: userId,
    }
  );

  return (
    <>
      <Flex mb={6} justifyContent={"flex-end"}>
        <AddAddress rdata={rdata} cdata={cdata} />
      </Flex>
      <Box
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"sm"}
        border={"1px"}
        borderColor={"gray.200"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Skeleton isLoaded={!isLoading}>
          <SimpleGrid columns={2} spacing={6}>
            {isSuccess && data.customer?.addresses?.length > 0 ? (
              data.customer?.addresses?.map((a: any) => (
                <FlatCard key={a.id} boxProps={{ cursor: "pointer" }}>
                  <Text fontWeight={"semibold"} isTruncated>
                    {a.streetAddress}
                  </Text>
                  <Text>
                    {a.city} {a.postCode}
                  </Text>
                  <Text>{a.country}</Text>
                </FlatCard>
              ))
            ) : (
              <Text fontWeight={"semibold"} isTruncated>
                Please add an address
              </Text>
            )}
          </SimpleGrid>
        </Skeleton>
      </Box>
    </>
  );
};

export default AddressDetails;
