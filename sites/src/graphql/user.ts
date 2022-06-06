import { gql } from "graphql-request";

export const GET_USER_DETAILS = gql`
  query UserDetails($id: String) {
    customer(where: { id: $id }) {
      firstName
      lastName
      email
      phone
      addresses {
        id
        streetAddress
        city
        postCode
        country
      }
      orders {
        items {
          product {
            name
            description
            price
          }
          quantity
          total
          spiceLevel
        }
        fulfilmentType
        deliveryZone {
          name
          postCode
          deliveryTime
          isPreOrder
          preOrderInstructions
          deliveryCharge
        }
        address {
          streetAddress
          city
          postCode
          country
        }
        discount
        deliveryCharge
        vat
        serviceCharge
        total
        status
      }
    }
  }
`;

export const UPDATE_USER_DETAILS = gql`
  mutation UpdateUser(
    $id: String
    $firstName: String
    $lastname: String
    $email: String
    $phone: String
  ) {
    updateCustomer(
      data: {
        firstName: { set: $firstName }
        lastName: { set: $lastName }
        email: { set: $email }
        phone: { set: $phone }
      }
      where: { id: $id }
    ) {
      id
    }
  }
`;

export const ADD_CUSTOMER_ADDRESS = gql`
  mutation AddAddress(
    $id: String
    $streetAddress: String!
    $city: String!
    $postCode: String!
    $country: String!
  ) {
    createCustomerAddress(
      data: {
        streetAddress: $streetAddress
        city: $city
        postCode: $postCode
        country: $country
        customer: { connect: { id: $id } }
      }
    ) {
      id
    }
  }
`;

export enum FulfilmentType {
  Delivery,
  Pickup,
}

export const PLACE_ORDER = gql`
  mutation PlaceOrder(
    $fulfilmentType: FulfilmentType!
    $discount: Float
    $deliveryCharge: Float
    $vat: Float
    $serviceCharge: Float
    $total: Float
    $isPreOrder: Boolean
    $cart: [OrderItemCreateManyOrderInput!]
    $couponId: String
    $deliveryZoneId: String
    $customerId: String
    $customerAddressId: String
    $restaurantId: String
  ) {
    createOrder(
      data: {
        fulfilmentType: $fulfilmentType
        discount: $discount
        deliveryCharge: $deliveryCharge
        vat: $vat
        serviceCharge: $serviceCharge
        total: $total
        isPreOrder: $isPreOrder
        items: { createMany: { data: $cart, skipDuplicates: true } }
        coupon: { connect: { id: $couponId } }
        customer: { connect: { id: $customerId } }
        deliveryZone: { connect: { id: $deliveryZoneId } }
        address: { connect: { id: $customerAddressId } }
        restaurant: { connect: { id: $restaurantId } }
      }
    ) {
      id
      status
      address {
        id
        streetAddress
        city
      }
    }
  }
`;

export const GET_CURRENT_ORDER = gql`
  query CustomerOrder($id: String) {
    order(where: { id: $id }) {
      fulfilmentType
      items {
        id
        product {
          name
        }
        quantity
        total
      }
      customer {
        firstName
        lastName
        phone
        email
      }
      address {
        streetAddress
        city
        postCode
        country
      }
      deliveryZone {
        name
      }
      deliveryCharge
      discount
      serviceCharge
      vat
      total
      status
      isPreOrder
      createdAt
    }
  }
`;
