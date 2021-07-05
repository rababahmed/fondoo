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
        CMSHome: {
          create: {
            heroHeading: "Welcome to TezzBites"
            heroDescription: "Authentic Takeaway"
            aboutHeading: "Delivering Authentic Cuisine"
            aboutDescription: "straight to your doorstep!"
            dealsHeading: "Grab the Deals"
            dealsDescription: ""
            reservationHeading: "Book a Table"
            reservationDescription: ""
            popularDishesHeading: "Discover Our Best-Sellers"
            popularDishesDescription: ""
          }
        }
        CMSAbout: {
          create: {
            headerHeading: "About Us"
            headerDescription: ""
            storyHeading: "Our Story"
            storyDescription: ""
          }
        }
        CMSReview: {
          create: {
            headerHeading: "Reviews"
            headerDescription: "See what our patrons have to say"
          }
        }
        CMSContact: {
          create: {
            headerHeading: "Contact Us"
            headerDescription: "We're a call away"
          }
        }
        CMSReservation: {
          create: { headerHeading: "Book your Table", headerDescription: "" }
        }
        socials: { create: {} }
      }
    ) {
      id
    }
  }
`;

export const UPDATE_CMS_HOME = gql`
  mutation UpdateRestaurant($restaurantID: String!) {
    updateRestaurant(
      data: {
        CMSHome: {
          update: {
            heroHeading: ""
            heroDescription: ""
            aboutHeading: ""
            aboutDescription: ""
            dealsHeading: ""
            dealsDescription: ""
            reservationHeading: ""
            reservationDescription: ""
            popularDishesHeading: ""
            popularDishesDescription: ""
          }
        }
      }
      where: { id: $restaurantID }
    ) {
      id
    }
  }
`;
