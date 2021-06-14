import { gql } from "graphql-request";

export const EDIT_RESTAURANT = gql`
  mutation UpdateRestaurant(
    $id: String
    $name: String
    $logo: String
    $coverImage: String
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
        logo: { set: $logo }
        coverImage: { set: $coverImage }
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
      logo
      coverImage
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
    $deliveryTime: Int
    $takeawayTime: Int
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

export const EDIT_RESTAURANT_SCHEDULE = gql`
  mutation UpdateSchedule(
    $id: String
    $day: String
    $openingTime: String
    $closingTime: String
    $deliveryTime: Int
    $takeawayTime: Int
  ) {
    updateSchedule(
      data: {
        day: { set: $day }
        openingTime: { set: $openingTime }
        closingTime: { set: $closingTime }
        deliveryTime: { set: $deliveryTime }
        takeawayTime: { set: $takeawayTime }
      }
      where: { id: $id }
    ) {
      id
    }
  }
`;

export const DELETE_RESTAURANT_SCHEDULE = gql`
  mutation DeleteSchedule($id: String) {
    deleteSchedule(where: { id: $id }) {
      id
    }
  }
`;
