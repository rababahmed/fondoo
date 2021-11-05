import { IconButton } from "@chakra-ui/button";
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { DELETE_MENU_CATEGORY } from "../../../graphql/menu";
import { useGQLMutation } from "../../../shared-hooks/useGQLMutation";

interface Props {
  id: String;
}

const DeleteCategory = (props: Props) => {
  const mutation = useGQLMutation(
    DELETE_MENU_CATEGORY,
    {
      id: props.id,
    },
    "get-menu-categories"
  );

  const handleDelete = async () => {
    const deleteUser = await mutation.mutate();
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

export default DeleteCategory;
