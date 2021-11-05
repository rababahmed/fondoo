import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useUserStore } from "../../../store/useUserStore";
import { useRouter } from "next/router";

interface Props {
  id: string;
}

const SwitchRestaurant = (props: Props) => {
  const setRestaurant = useUserStore((state) => state.setRestaurant);
  const router = useRouter();

  const handleSwitch = () => {
    setRestaurant(props.id);
    router.push("/dashboard");
  };

  return (
    <div>
      <Menu>
        <MenuButton size="sm" as={Button} rightIcon={<ChevronDownIcon />}>
          Actions
        </MenuButton>
        <MenuList>
          <MenuItem>Go to Website</MenuItem>
          <MenuItem onClick={handleSwitch}>Manage Restaurant</MenuItem>
          <MenuItem>Edit Configuration</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default SwitchRestaurant;
