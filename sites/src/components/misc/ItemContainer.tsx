import { Button, IconButton } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/modal";
import { NumberInput, NumberInputField } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import React from "react";
import OrderButton from "../buttons/OrderButton";
import ItemCard from "../card/ItemCard";
import { BiMinusCircle } from "react-icons/bi";
import { IoMdAddCircleOutline } from "react-icons/io";

interface Props {
  rdata: any;
  cdata: any;
  p: any;
}

const ItemContainer = ({ rdata, cdata, p }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [quantity, setQuantity] = React.useState(1);

  return (
    <>
      <ItemCard cdata={cdata} rdata={rdata} onClick={onOpen} p={p} />

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{p.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{p.description}</ModalBody>

          <ModalFooter borderWidth="1px">
            <HStack spacing={2}>
              <HStack maxW={"200px"}>
                <IconButton
                  bg={"transparent"}
                  _hover={{ bg: "transparent" }}
                  fontSize="xl"
                  aria-label="Minus"
                  icon={<BiMinusCircle />}
                  onClick={() => setQuantity(quantity - 1)}
                >
                  -
                </IconButton>
                <NumberInput
                  defaultValue={1}
                  value={quantity}
                  min={1}
                  max={20}
                  isReadOnly={true}
                >
                  <NumberInputField />
                </NumberInput>
                <IconButton
                  bg={"transparent"}
                  _hover={{ bg: "transparent" }}
                  fontSize="xl"
                  aria-label="Add"
                  icon={<IoMdAddCircleOutline />}
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </IconButton>
              </HStack>
              <OrderButton cdata={cdata} text={"Add to Cart"} />
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ItemContainer;
