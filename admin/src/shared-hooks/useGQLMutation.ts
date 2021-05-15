import { useMutation } from "react-query";
import * as Constants from "../modules/Constants";
import request from "graphql-request";

export const useGQLMutation = (
  key: any,
  mutation: any,
  variables?: any,
  config = {}
) => {
  const endpoint = Constants.GraphQL_API;

  const mutateData = async () => await request(endpoint, mutation, variables);

  return useMutation(key, mutateData, config);
};
