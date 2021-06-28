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
      config {
        isActive
      }
    }
  }
`;

export const GET_ALL_RESTAURANT_PLANS = gql`
  query RestaurantPlans {
    restaurantPlans(where: { isActive: { equals: true } }) {
      id
      name
      price
    }
  }
`;

export const ADD_NEW_RESTAURANT = gql`
  mutation CreateRestaurant(
    $name: String!
    $primaryColor: String!
    $secondaryColor: String!
    $domain: String!
    $plan: String
    $isActive: Boolean!
  ) {
    createRestaurant(
      data: {
        name: $name
        plan: { connect: { id: $plan } }
        config: {
          create: {
            domain: $domain
            primaryColor: $primaryColor
            secondaryColor: $secondaryColor
            isActive: $isActive
          }
        }
        CMSHome: { create: {} }
        CMSAbout: { create: {} }
        CMSReview: { create: {} }
        CMSContact: { create: {} }
        CMSReservation: { create: {} }
        socials: { create: {} }
      }
    ) {
      id
    }
  }
`;
