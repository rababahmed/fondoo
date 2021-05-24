import { useQuery } from "react-query";
import { useUserStore } from "../store/useUserStore";
import * as Constants from "../modules/Constants";
import request, { gql } from "graphql-request";

export const useGetRestaurant = () => {
  const restaurantID = useUserStore((state) => state.restaurantID);
  return useQuery("get-restaurant", async () => {
    const { restaurant } = await request(
      Constants.GraphQL_API,
      gql`
        query {
          restaurant(where: { id: "5740ab09-e5fc-47f9-b1bd-1287b8a4cdee" }) {
            name
            email
            url
            city
            priceRange
            vat
            businessPhone
            address
          }
        }
      `
    );
    return restaurant;
  });
};
