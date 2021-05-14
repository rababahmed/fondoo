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
          restaurant(where: { id: "e5b22e29-fe36-46e8-8417-468d9c9445d9" }) {
            name
            email
          }
        }
      `
    );
    return restaurant;
  });
};
