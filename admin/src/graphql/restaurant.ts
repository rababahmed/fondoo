import { gql } from "graphql-request";

export const EDIT_RESTAURANT = gql`
  mutation UpdateRestaurant(
    $id: String
    $name: String
    $email: String
    $url: String
    $businessPhone: String
    $city: String
    $priceRange: String
  ) {
    updateRestaurant(
      data: {
        name: { set: $name }
        email: { set: $email }
        url: { set: $url }
        businessPhone: { set: $businessPhone }
        city: { set: $city }
        priceRange: { set: $priceRange }
      }
      where: { id: $id }
    ) {
      name
      email
    }
  }
`;

export const GET_RESTAURANT_INFO = gql`
  query Restaurant($id: String) {
    restaurant(where: { id: $id }) {
      name
      email
      url
      city
      priceRange
      vat
      businessPhone
      address
    }
  }
`;

export const GET_RESTAURANT_SCHEDULES = gql`
  query RestaurantSchedules($id: String) {
    schedules(where: { restaurantId: { equals: $id } }) {
      id
      day
      openingTime
      closingTime
      deliveryTime
      takeawayTime
    }
  }
`;

export const ADD_RESTAURANT_SCHEDULE = gql`
  mutation AddSchedule(
    $day: String
    $openingTime: String
    $closingTime: String
    $deliveryTime: String
    $takeawayTime: String
    $restaurantID: String
  ) {
    createSchedule(
      data: {
        day: $day
        openingTime: $openingTime
        closingTime: $closingTime
        deliveryTime: $deliveryTime
        takeawayTime: $takeawayTime
        Restaurant: { connect: { id: $restaurantID } }
      }
    ) {
      id
      day
      openingTime
      closingTime
      deliveryTime
      takeawayTime
    }
  }
`;
