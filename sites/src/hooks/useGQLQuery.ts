import { useQuery } from "react-query";
import { GraphQLClient } from "graphql-request";
import { Constants } from "../config";

export const useGQLQuery = (
  key: any,
  query: any,
  variables?: any,
  config = {}
) => {
  const endpoint = Constants.GraphQL_API;

  const graphQLClient = new GraphQLClient(endpoint);

  const fetchData = async () => await graphQLClient.request(query, variables);

  return useQuery(key, fetchData, config);
};
