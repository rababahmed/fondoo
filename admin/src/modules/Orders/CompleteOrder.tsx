import { Button, IconButton } from "@chakra-ui/button";
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import {
  DELETE_RESTAURANT_DELIVERY_ZONE,
  DELETE_RESTAURANT_SCHEDULE,
  UPDATE_RESTAURANT_ORDER,
} from "../../graphql/restaurant";
import { useGQLMutation } from "../../shared-hooks/useGQLMutation";
import { Stack } from "@chakra-ui/react";
import { MdCancel, MdCheckCircle } from "react-icons/md";
import { useQueryClient } from "react-query";

interface Props {
  id: String;
  status: String;
}

export const CompleteOrder = (props: Props) => {
  const mutation = useGQLMutation(
    UPDATE_RESTAURANT_ORDER,
    {
      id: props.id,
      status: props.status,
    },
    "get-restaurant-orders"
  );

  const queryClient = useQueryClient();

  const handleChange = async () => {
    await mutation.mutateAsync().then(() => {
      queryClient.invalidateQueries(["get-restaurant-orders", props.id]);
    });
  };

  return (
    <>
      <Button
        onClick={handleChange}
        w={170}
        size="sm"
        leftIcon={<MdCheckCircle />}
        colorScheme="green"
        variant="solid"
      >
        Mark as Completed
      </Button>
    </>
  );
};
