import {
  Heading,
  Avatar,
  Box,
  Center,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Skeleton,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { GET_USER_DETAILS } from "../../graphql/user";
import { useGQLQuery } from "../../hooks/useGQLQuery";
import { useUserStore } from "../../stores/useUserStore";

interface Props {
  rdata: any;
  cdata: any;
}

export default function AccountCard({ rdata, cdata }: Props) {
  const userId = useUserStore((state) => state.userID);
  const removeUser = useUserStore((state) => state.removeUser);

  const router = useRouter();

  const { data, error, isLoading, isSuccess } = useGQLQuery(
    "get-user-details",
    GET_USER_DETAILS,
    {
      id: userId,
    }
  );

  const onSignout = () => {
    removeUser();
    router.push("/");
  };

  return (
    <Center>
      <Box
        maxW={"270px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"sm"}
        border={"1px"}
        borderColor={"gray.200"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Flex justify={"center"} mt={6}>
          <Avatar
            size="2xl"
            bg={cdata.secondaryColor}
            name={data?.customer?.firstName + " " + data?.customer?.lastName}
          />
        </Flex>
        <Box p={6}>
          <Skeleton isLoaded={!isLoading}>
            <Stack spacing={0} align={"center"} mb={5}>
              <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                {(isSuccess && data.customer.firstName) || ""}{" "}
                {(isSuccess && data.customer.lastName) || ""}
              </Heading>
              <Text color={"gray.500"} textAlign={"center"}>
                {isSuccess && data.customer.addresses
                  ? data.customer.addresses[0]?.streetAddress
                  : null}
                ,{" "}
                {isSuccess && data.customer.addresses
                  ? data.customer.addresses[0]?.city
                  : null}{" "}
                {isSuccess && data.customer.addresses
                  ? data.customer.addresses[0]?.postCode
                  : null}
                ,{" "}
                {isSuccess && data.customer.addresses
                  ? data.customer.addresses[0]?.country
                  : null}
              </Text>
            </Stack>
          </Skeleton>
          <Stack direction={"row"} justify={"center"} spacing={6}>
            <Stack spacing={0} align={"center"}>
              <Text fontWeight={600}>
                {isSuccess && data.customer.orders
                  ? data.customer.orders.length
                  : 0}
              </Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                Orders
              </Text>
            </Stack>
            <Stack spacing={0} align={"center"}>
              <Text fontWeight={600}>{0}</Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                Reservations
              </Text>
            </Stack>
          </Stack>

          <Button
            w={"full"}
            onClick={onSignout}
            mt={8}
            bg={cdata.secondaryColor}
            color={"white"}
            rounded={"md"}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
          >
            Sign Out
          </Button>
        </Box>
      </Box>
    </Center>
  );
}
