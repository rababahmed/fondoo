import { gql } from "graphql-request";

export const GET_ALL_ORDERS_STAT = gql`
  query Orders {
    orders {
      id
    }
  }
`;
