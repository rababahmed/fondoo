import { useQuery } from "react-query";
import * as Constants from "../modules/Constants";
import request from "graphql-request";

export const useGQLQuery = (
  key: any,
  query: any,
  variables?: any,
  config = {}
) => {
  const endpoint = Constants.GraphQL_API;

  const fetchData = async () => await request(endpoint, query, variables);

  return useQuery(key, fetchData, config);
};
