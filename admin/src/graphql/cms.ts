import { gql } from "graphql-request";

export const GET_CMS_HOME = gql`
  query CMSHome($id: String) {
    restaurant(where: { id: $id }) {
      CMSHome {
        heroHeading
        heroDescription
        heroImage
        aboutHeading
        aboutDescription
        aboutImage
        dealsHeading
        dealsDescription
        dealsImage
        reservationHeading
        reservationDescription
        reservationImage
        popularDishesHeading
        popularDishesDescription
        popularDishesImage
      }
    }
  }
`;

export const UPDATE_CMS_HOME = gql`
  mutation UpdateRestaurant(
    $restaurantID: String
    $heroHeading: String
    $heroDescription: String
    $aboutHeading: String
    $aboutDescription: String
    $dealsHeading: String
    $dealsDescription: String
    $reservationHeading: String
    $reservationDescription: String
    $popularDishesHeading: String
    $popularDishesDescription: String
  ) {
    updateRestaurant(
      data: {
        CMSHome: {
          update: {
            heroHeading: { set: $heroHeading }
            heroDescription: { set: $heroDescription }
            aboutHeading: { set: $aboutHeading }
            aboutDescription: { set: $aboutDescription }
            dealsHeading: { set: $dealsHeading }
            dealsDescription: { set: $dealsDescription }
            reservationHeading: { set: $reservationHeading }
            reservationDescription: { set: $reservationDescription }
            popularDishesHeading: { set: $popularDishesHeading }
            popularDishesDescription: { set: $popularDishesDescription }
          }
        }
      }
      where: { id: $restaurantID }
    ) {
      id
    }
  }
`;

export const GET_CMS_ABOUT = gql`
  query CMSAbout($id: String) {
    restaurant(where: { id: $id }) {
      CMSAbout {
        storyHeading
        storyDescription
        storyImage
      }
    }
  }
`;

export const UPDATE_CMS_ABOUT = gql`
  mutation UpdateCMSAbout(
    $restaurantID: String
    $storyImage: String
    $storyHeading: String
    $storyDescription: String
  ) {
    updateRestaurant(
      data: {
        CMSAbout: {
          update: {
            storyImage: { set: $storyImage }
            storyHeading: { set: $storyHeading }
            storyDescription: { set: $storyDescription }
          }
        }
      }
      where: { id: $restaurantID }
    ) {
      id
    }
  }
`;
