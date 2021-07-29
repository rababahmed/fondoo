import {
  Avatar,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { HiOutlineSwitchVertical } from "react-icons/hi";
import { GET_RESTAURANT_INFO } from "../../graphql/restaurant";
import { GET_USER } from "../../graphql/user";
import { useGQLQuery } from "../../shared-hooks/useGQLQuery";
import { useUserStore } from "../../store/useUserStore";
import Image from "next/image";
import Logo from "../../../public/tezzbites.png";

const RestaurantNav = () => {
  const restaurantId = useUserStore((state) => state.restaurantID);
  const userId = useUserStore((state) => state.userID);
  const { data, error, isLoading, isSuccess, isFetching } = useGQLQuery(
    "get-restaurant-info-switcher",
    GET_RESTAURANT_INFO,
    {
      id: restaurantId,
    }
  );
  const userData = useGQLQuery("get-user-restaurants-switcher", GET_USER, {
    id: userId,
  });

  return (
    <>
      <Menu strategy="fixed">
        <MenuButton
          as={Button}
          bg={"white"}
          leftIcon={
            <Box boxSize="2rem">
              <Image src={Logo} alt="Logo" />
            </Box>
          }
          rightIcon={<HiOutlineSwitchVertical />}
        >
          {data && data.restaurant ? data.restaurant.name : "Select"}
        </MenuButton>

        <MenuList>
          {userData.data && userData.data.user.restaurants ? (
            userData.data.user.restaurants.map((r: any) => (
              <MenuItem key={r.id} minH="40px">
                {r.name}
              </MenuItem>
            ))
          ) : (
            <Box>
              <Text p={4} size="xl">
                No Restaurants Found..
                <br /> <span>Try adding a new restaurant.</span>
              </Text>
            </Box>
          )}
        </MenuList>
      </Menu>
    </>
  );
};

export default RestaurantNav;
