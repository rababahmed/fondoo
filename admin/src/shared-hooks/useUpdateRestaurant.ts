import { useMutation } from "react-query";
import { useUserStore } from "../store/useUserStore";
import * as Constants from "../modules/Constants";
import request, { gql } from "graphql-request";

export const useUpdateRestaurant = (values) => {
  const restaurantID = useUserStore((state) => state.restaurantID);
  return useMutation("update-restaurant", async () => {
    const { restaurant } = await request(
      Constants.GraphQL_API,
      gql`
      mutation {
        updateRestaurant (data: {
          name: {
            set: ${name}
          }          
        }, where: {
          id: "e5b22e29-fe36-46e8-8417-468d9c9445d9"
        }) {
          name
        }
      }
      `
    );
    return restaurant;
  });
};
