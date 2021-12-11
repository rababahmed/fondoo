import React from "react";
import {
  Box,
  Divider,
  Flex,
  Heading,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Skeleton,
  Stack,
  Table,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { useGQLQuery } from "../../shared-hooks/useGQLQuery";
import { GET_CUSTOMER_ORDER } from "../../graphql/restaurant";
import { formatISO } from "date-fns/esm";
import { format, parseISO } from "date-fns";
import { RejectOrder } from "./RejectOrder";
import { AcceptOrder } from "./AcceptOrder";
import OrderActions from "./OrderActions";
import { AiFillEye } from "react-icons/ai";
// import { DeleteDeliveryZone } from "../.DeleteDeliveryZone";

interface Props {
  orderId: string;
}

const ExpandedOrdersModal = ({ orderId }: Props) => {
  const { data, error, isLoading, isSuccess, isFetching } = useGQLQuery(
    ["get-customer-order", orderId],
    GET_CUSTOMER_ORDER,
    {
      id: orderId,
    }
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

  const o = data?.order;
  console.log(o);

  return (
    <>
      <IconButton
        onClick={onOpen}
        bg="primary.800"
        color="white"
        _hover={{ bg: "primary.600" }}
        aria-label="View Order"
        icon={<AiFillEye />}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Order Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Skeleton isLoaded={!isLoading}>
              <Box
                borderWidth="1px"
                borderRadius="md"
                borderColor="gray.200"
                p="4"
                mb="4"
              >
                <Heading size="sm">Customer</Heading>
                <Stack direction="column" py={2} spacing={0}>
                  <Text fontSize="sm">
                    {o?.customer?.firstName} {o?.customer?.lastName}
                  </Text>
                  <Text fontSize="sm">{o?.customer?.phone}</Text>
                  <Text fontSize="sm">
                    {o?.address?.streetAddress}, {o?.address?.city}{" "}
                    {o?.address?.postCode}, {o?.address?.country}
                  </Text>
                </Stack>
              </Box>
              <Box
                borderWidth="1px"
                borderRadius="md"
                borderColor="gray.200"
                p="4"
                mb="4"
              >
                <Heading size="sm">Order Details</Heading>
                <Stack direction="column" py={2} spacing={0}>
                  <Table variant="simple">
                    <Thead>
                      <Tr>
                        <Th>Item</Th>
                        <Th isNumeric>Quantity</Th>
                        <Th isNumeric>Total</Th>
                      </Tr>
                    </Thead>
                    {o?.items.map((item: any) => (
                      <Tr key={item.id}>
                        <Td fontSize="sm">{item.product.name}</Td>
                        <Td fontSize="sm" isNumeric>
                          {item.quantity}
                        </Td>
                        <Td fontSize="sm" isNumeric>
                          {item.total}
                        </Td>
                      </Tr>
                    ))}
                  </Table>
                  <Flex
                    alignItems="center"
                    w="full"
                    justifyContent="space-between"
                    px={8}
                    pt={4}
                  >
                    <Text fontWeight="semi-bold">Total</Text>
                    <Text fontWeight="bold">{o?.total}</Text>
                  </Flex>
                </Stack>
              </Box>
              <Box p="4">
                <OrderActions o={o} />
              </Box>
            </Skeleton>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ExpandedOrdersModal;
