import {
  Avatar,
  Box,
  Button,
  Image,
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
          bg={"gray.900"}
          _hover={{ bg: "gray.700" }}
          _active={{ bg: "gray.700" }}
          color="white"
          leftIcon={
            <Image
              boxSize="2rem"
              borderRadius="full"
              src="https://placekitten.com/100/100"
              alt="Fluffybuns the destroyer"
              mr="12px"
            />
          }
          rightIcon={<HiOutlineSwitchVertical />}
        >
          {data && data.restaurant ? data.restaurant.name : "Select"}
        </MenuButton>
        {userData.data && userData.data.user.restaurants ? (
          <MenuList>
            {userData.data.user.restaurants.map((r: any) => (
              <MenuItem key={r.id} minH="40px">
                {r.name}
              </MenuItem>
            ))}
          </MenuList>
        ) : (
          <MenuList>
            <Text p={4} size="xl">
              No Restaurants Found..
              <br /> <span>Try adding a new restaurant.</span>
            </Text>
          </MenuList>
        )}
      </Menu>
    </>
  );
};

export default RestaurantNav;
