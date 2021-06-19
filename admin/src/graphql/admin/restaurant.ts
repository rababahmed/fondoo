import { gql } from "graphql-request";

export const GET_ALL_RESTAURANTS_STAT = gql`
  query Restaurant {
    restaurants {
      id
    }
  }
`;

export const GET_ALL_RESTAURANTS_INFO = gql`
  query Restaurant {
    restaurants(orderBy: { createdAt: asc }) {
      id
      name
      plan {
        name
      }
      country
      priceRange
    }
  }
`;
