import { Button, IconButton } from "@chakra-ui/button";
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import {
  DELETE_RESTAURANT_DELIVERY_ZONE,
  DELETE_RESTAURANT_SCHEDULE,
} from "../../graphql/restaurant";
import { useGQLMutation } from "../../shared-hooks/useGQLMutation";
import { Stack } from "@chakra-ui/react";
import { MdCancel, MdCheckCircle } from "react-icons/md";

interface Props {
  id: String;
}

export const AcceptOrder = (props: Props) => {
  const mutation = useGQLMutation(
    DELETE_RESTAURANT_DELIVERY_ZONE,
    {
      id: props.id,
    },
    "get-restaurant-orders"
  );

  const handleChange = async () => {
    const deleteItem = await mutation.mutate();
  };
  return (
    <>
      <Button
        onClick={handleChange}
        size="sm"
        leftIcon={<MdCheckCircle />}
        colorScheme="green"
        variant="solid"
      >
        Accept
      </Button>
    </>
  );
};
