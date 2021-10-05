import { Button, IconButton } from "@chakra-ui/button";
import { Box, Stack, Text } from "@chakra-ui/layout";
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
import PrimaryButton from "../buttons/PrimaryButton";
import { useCartStore } from "../../stores/useCartStore";
import Image from "next/image";

interface Props {
  rdata: any;
  cdata: any;
  p: any;
  image?: any;
}

const ItemContainer = ({ rdata, cdata, p, image }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [quantity, setQuantity] = React.useState(1);

  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <>
      <ItemCard cdata={cdata} rdata={rdata} onClick={onOpen} p={p} />

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{p.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              <Box>
                <Image
                  alt="card-image"
                  src={
                    image ||
                    "https://i2.wp.com/klfoodie.com/wp-content/uploads/2021/07/17-1.jpeg?resize=708%2C708&ssl=1"
                  }
                  width={400}
                  height={400}
                  objectFit="contain"
                />
              </Box>
              <Text>{p.description}</Text>
            </Stack>
          </ModalBody>

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
                />
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
                />
              </HStack>
              <PrimaryButton
                cdata={cdata}
                text={"Add to Cart"}
                onClick={() => {
                  addToCart(p.id, p.name, quantity, p.price);
                  setQuantity(1);
                  onClose();
                }}
              />
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ItemContainer;
