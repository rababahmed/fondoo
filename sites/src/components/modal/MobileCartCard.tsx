import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  SimpleGrid,
  Grid,
  Button,
  Divider,
  IconButton,
  Tooltip,
  Icon,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiMinusCircle } from "react-icons/bi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useCartStore } from "../../stores/useCartStore";
import PrimaryButton from "../buttons/PrimaryButton";
import { MdShoppingCart } from "react-icons/md";
import { useRouter } from "next/router";
import { useCheckoutStore } from "../../stores/useCheckoutStore";
import CartContainer from "../../modules/order/CartContainer";

interface Props {
  title: string;
  cdata: any;
  rdata: any;
  isMenu?: boolean;
  titleBg?: any;
  cardW?: any;
  image?: string;
  imgW?: any;
  imgH?: any;
  children?: any;
}

const MobileCartCard = (props: Props) => {
  const cart = useCartStore((state) => state.cart);
  const getArraySum = (a: any) => {
    let total = 0;
    for (let i in a) {
      total += a[i];
    }
    return total;
  };
  const subTotal = getArraySum(
    cart.length > 0 ? cart.map((p: any) => p.total) : null
  );

  const router = useRouter();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack
      display={{ base: "block", md: "none" }}
      pos="fixed"
      w="full"
      bottom={0}
      left={0}
      p={1}
    >
      <PrimaryButton
        cdata={props.cdata}
        text={"Cart" + " - " + props.rdata.currency + subTotal}
        onClick={onOpen}
        buttonProps={{ rounded: "md", width: "full" }}
      />
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={"full"}
        scrollBehavior={"inside"}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Heading
              color={props.titleBg ? "white" : "black"}
              px={props.titleBg ? 4 : 0}
              py={props.titleBg ? 2 : 0}
              rounded={props.titleBg ? "sm" : "none"}
              bgColor={props.titleBg || "transparent"}
              fontSize={"2xl"}
              fontFamily={"body"}
            >
              {props.title}
            </Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CartContainer cdata={props.cdata} rdata={props.rdata} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Stack>
  );
};

export default MobileCartCard;
