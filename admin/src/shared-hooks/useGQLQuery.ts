import { useQuery } from "react-query";
import * as Constants from "../modules/Constants";
import { GraphQLClient } from "graphql-request";
import { useUserStore } from "../store/useUserStore";

export const useGQLQuery = (
  key: any,
  query: any,
  variables?: any,
  config = {}
) => {
  const token = useUserStore((state) => state.token);
  const endpoint = Constants.GraphQL_API;

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      token: token,
    },
  });

  const fetchData = async () => await graphQLClient.request(query, variables);

  return useQuery(key, fetchData, config);
};
