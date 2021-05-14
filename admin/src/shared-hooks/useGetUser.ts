import { useQuery } from "react-query";
import { useUserStore } from "../store/useUserStore";
import * as Constants from "../modules/Constants";
import request, { gql } from "graphql-request";

export const useGetUser = () => {
  const userID = useUserStore((state) => state.userID);
  return useQuery("get-user", async () => {
    const { user } = await request(
      Constants.GraphQL_API,
      gql`
          query {
            user(where: { id: ${userID} }) {
              firstName
              lastName
              Restaurant {
                name
                email
              }
            }
          }
        `
    );
    return user;
  });
};
