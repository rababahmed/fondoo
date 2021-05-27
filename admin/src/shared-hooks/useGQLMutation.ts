import { useMutation, useQueryClient } from "react-query";
import * as Constants from "../modules/Constants";
import request from "graphql-request";

export const useGQLMutation = (
  mutation: any,
  variables?: any,
  invalidKey?: any
) => {
  const endpoint = Constants.GraphQL_API;

  const queryClient = useQueryClient();

  const mutateData = async () => await request(endpoint, mutation, variables);

  return useMutation(mutateData, {
    onSuccess: () => {
      queryClient.invalidateQueries(invalidKey);
    },
  });
};
