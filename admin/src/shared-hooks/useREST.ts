import { useMutation } from "react-query";
import * as Constants from "../modules/Constants";
import request from "graphql-request";

export const useREST = (mutationKey: any, mutation: any, variables?: any) => {
  const endpoint = Constants.GraphQL_API;

  const mutateData = async () => await request(endpoint, mutation, variables);

  return useMutation(mutateData, { mutationKey });
};
