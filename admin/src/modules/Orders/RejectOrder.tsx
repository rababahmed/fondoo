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
import { MdCancel } from "react-icons/md";
import { useQueryClient } from "react-query";

interface Props {
  id: String;
  status: String;
}

export const RejectOrder = (props: Props) => {
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
        size="sm"
        leftIcon={<MdCancel />}
        colorScheme="red"
        variant="solid"
      >
        Reject
      </Button>
    </>
  );
};
