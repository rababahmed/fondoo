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

export const GET_RESTAURANT_OFFERS = gql`
  query Offers($id: String) {
    restaurant(where: { id: $id }) {
      offers {
        id
        name
        description
        startDate
        endDate
        isActive
        orders {
          id
        }
        createdAt
      }
    }
  }
`;

export const ADD_RESTAURANT_OFFER = gql`
  mutation AddOffer(
    $id: String
    $name: String
    $description: String
    $startDate: String
    $endDate: String
    $isActive: Boolean
  ) {
    createOffer(
      data: {
        name: $name
        description: $description
        startDate: $startDate
        endDate: $endDate
        isActive: $isActive
        restaurant: { connect: { id: $id } }
      }
    ) {
      id
      name
    }
  }
`;

export const DELETE_RESTAURANT_OFFER = gql`
  mutation deleteOffer($id: String) {
    deleteOffer(where: { id: $id }) {
      id
    }
  }
`;

export const GET_RESTAURANT_COUPONS = gql`
  query Coupons($id: String) {
    restaurant(where: { id: $id }) {
      coupons {
        id
        code
        discount
        value
        description
        startDate
        endDate
        orders {
          id
        }
      }
    }
  }
`;

export enum Discount {
  Fixed,
  Percent,
}

export const ADD_RESTAURANT_COUPON = gql`
  mutation AddCoupon(
    $id: String
    $code: String!
    $description: String
    $discount: Discount!
    $value: Float!
    $startDate: String
    $endDate: String
  ) {
    createCoupon(
      data: {
        code: $code
        description: $description
        discount: $discount
        value: $value
        startDate: $startDate
        endDate: $endDate
        restaurant: { connect: { id: $id } }
      }
    ) {
      id
    }
  }
`;

export const DELETE_RESTAURANT_COUPON = gql`
  mutation deleteCoupon($id: String) {
    deleteCoupon(where: { id: $id }) {
      id
    }
  }
`;
