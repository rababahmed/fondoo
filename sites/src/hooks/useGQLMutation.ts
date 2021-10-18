import { useMutation, useQueryClient } from "react-query";
import { Constants } from "../config";
import { GraphQLClient } from "graphql-request";
import { useUserStore } from "../stores/useUserStore";

export const useGQLMutation = (
  mutation: any,
  variables?: any,
  invalidKey?: any
) => {
  const endpoint = Constants.GraphQL_API;
  const token = useUserStore((state) => state.token);

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      token: token,
    },
  });

  const queryClient = useQueryClient();

  const mutateData = async () =>
    await graphQLClient.request(mutation, variables);

  return useMutation(mutateData, {
    onSuccess: () => {
      queryClient.invalidateQueries(invalidKey);
    },
  });
};
