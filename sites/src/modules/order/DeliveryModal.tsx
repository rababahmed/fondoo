import React from "react";
import {
  Box,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useToast,
  Button,
  SimpleGrid,
  Stack,
  Text,
  toast,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { InputControl, SubmitButton } from "formik-chakra-ui";
import { Formik } from "formik";
import { Constants } from "../../config";
import { useUserStore } from "../../stores/useUserStore";
import { useCheckoutStore } from "../../stores/useCheckoutStore";
import FlatCard from "../../components/card/FlatCard";

interface Props {
  rdata: any;
  cdata: any;
  onOpen?: any;
  onClose?: any;
  isOpen?: any;
}

const DeliveryModal = ({ rdata, cdata }: Props) => {
  const deliveryZoneId = useCheckoutStore((state) => state.deliveryZoneId);

  const [isOpen, setIsOpen] = React.useState(false);

  const onClose = () => setIsOpen(false);

  const cancelRef = React.useRef();

  const [isDelivery, setIsDelivery] = React.useState(true);
  const setFulfilmentType = useCheckoutStore(
    (state) => state.setFulfilmentType
  );
  const setDelivery = useCheckoutStore((state) => state.setDelivery);

  if (isDelivery) {
    setFulfilmentType("Delivery");
  }
  if (!isDelivery) {
    setFulfilmentType("Pickup");
  }

  React.useEffect(() => {
    if (!deliveryZoneId) {
      setIsOpen(true);
    }
  }, [deliveryZoneId, isDelivery, isOpen, setIsOpen]);

  const toast = useToast();

  const onClick = (id: any, deliveryCharge: any) => {
    setDelivery(id, deliveryCharge);
    setIsOpen(false);
  };

  return (
    <>
      <Box bg="#dddddd" rounded="full">
        <Button
          bg={isDelivery ? "transparent" : "black"}
          color={isDelivery ? "black" : "white"}
          _hover={isDelivery ? { bg: "#cacaca" } : { bg: "gray.900" }}
          rounded="full"
          size={"sm"}
          onClick={() => {
            setIsDelivery(false);
          }}
        >
          Pickup
        </Button>
        <Button
          bg={isDelivery ? "black" : "transparent"}
          color={isDelivery ? "white" : "black"}
          _hover={isDelivery ? { bg: "gray.900" } : { bg: "#cacaca" }}
          rounded="full"
          size={"sm"}
          onClick={() => {
            setIsOpen(true);
            setIsDelivery(true);
          }}
        >
          Delivery
        </Button>
      </Box>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef.current}
        onClose={() =>
          toast({
            position: "top",
            title: "Please select a delivery zone to continue",
            status: "error",
            duration: 5000,
            variant: "solid",
            isClosable: true,
          })
        }
        scrollBehavior={"inside"}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent py={4}>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Select Delivery Zone
            </AlertDialogHeader>

            <AlertDialogBody pb={6}>
              <SimpleGrid columns={1} spacing={2}>
                {rdata.deliveryZones.map((d: any) => (
                  <FlatCard
                    key={d.id}
                    title={d.name}
                    onClick={() => onClick(d.id, d.deliveryCharge)}
                    boxProps={{ _hover: { bg: "gray.100", cursor: "pointer" } }}
                  >
                    <Stack direction={"row"}>
                      <Text isTruncated fontWeight={"semibold"}>
                        Delivery Fee
                      </Text>
                      <Text fontWeight={"semibold"}>
                        {rdata.currency} {d.deliveryCharge}
                      </Text>
                    </Stack>
                  </FlatCard>
                ))}
              </SimpleGrid>
            </AlertDialogBody>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default DeliveryModal;
