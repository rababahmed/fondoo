import { gql } from "graphql-request";

export const GET_RESTAURANT_USER = gql`
  query Restaurant($id: String) {
    restaurant(where: { id: $id }) {
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

export const GET_USER = gql`
  query User($id: String) {
    user(where: { id: $id }) {
      firstName
      lastName
      email
      restaurants {
        id
        name
      }
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: String) {
    deleteUser(where: { id: $id }) {
      firstName
      lastName
    }
  }
`;

export const GET_PLAN_DETAILS = gql`
  query PlanDetails($id: String) {
    restaurant(where: { id: $id }) {
      plan {
        id
        name
        price
      }
    }
  }
`;

export const GET_SUBSCRIPTION_DETAILS = gql`
  query SubscriptionDetails($id: String) {
    subscription(where: { restaurantId: $id }) {
      id
      paddleCancelUrl
      paddleSubscriptionId
      paddleUpdateUrl
      createdAt
    }
  }
`;
