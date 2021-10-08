import { IconButton } from "@chakra-ui/button";
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import {
  DELETE_RESTAURANT_DELIVERY_ZONE,
  DELETE_RESTAURANT_SCHEDULE,
} from "../../graphql/restaurant";
import { useGQLMutation } from "../../shared-hooks/useGQLMutation";

interface Props {
  id: String;
}

export const DeleteDeliveryZone = (props: Props) => {
  const mutation = useGQLMutation(
    DELETE_RESTAURANT_DELIVERY_ZONE,
    {
      id: props.id,
    },
    "get-restaurant-delivery-zones"
  );

  const handleDelete = async () => {
    const deleteItem = await mutation.mutate();
  };
  return (
    <div>
      <IconButton
        onClick={handleDelete}
        size="sm"
        colorScheme="red"
        aria-label="Delete"
        icon={<FaTrash />}
      />
    </div>
  );
};
