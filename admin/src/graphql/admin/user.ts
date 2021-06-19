import { gql } from "graphql-request";

export const GET_ALL_USERS_STAT = gql`
  query Users {
    users {
      id
    }
  }
`;
