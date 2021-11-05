import { IconButton } from "@chakra-ui/button";
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { DELETE_MENU_ITEM } from "../../../graphql/menu";
import { useGQLMutation } from "../../../shared-hooks/useGQLMutation";

interface Props {
  id: String;
}

export const DeleteItem = (props: Props) => {
  const mutation = useGQLMutation(
    DELETE_MENU_ITEM,
    {
      id: props.id,
    },
    "get-menu-items"
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
