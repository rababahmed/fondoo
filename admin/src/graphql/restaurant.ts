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
