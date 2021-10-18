import { gql } from "graphql-request";

export const GET_USER_DETAILS = gql`
  query UserDetails($id: String) {
    customer(where: { id: $id }) {
      firstName
      lastName
      email
      phone
      addresses {
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
        isAccepted
      }
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
