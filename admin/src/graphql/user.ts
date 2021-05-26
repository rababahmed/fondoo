import { gql } from "graphql-request";

export const GET_RESTAURANT_USER = gql`
  query {
    restaurant(where: { id: "5740ab09-e5fc-47f9-b1bd-1287b8a4cdee" }) {
      users {
        id
        firstName
        lastName
        email
        role
        phone
      }
    }
  }
`;

export const ADD_RESTAURANT_USER = gql`
  query {
    restaurant(where: { id: "5740ab09-e5fc-47f9-b1bd-1287b8a4cdee" }) {
      users {
        id
        firstName
        lastName
        email
        role
        phone
      }
    }
  }
`;
