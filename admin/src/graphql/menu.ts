import { gql } from "graphql-request";

export const GET_MENU_CATEGORIES = gql`
  query productCategories($id: String) {
    restaurant(where: { id: $id }) {
      productCategory {
        id
        name
        description
        image
        isActive
        isFeatured
      }
    }
  }
`;
export const GET_MENU_CATEGORY = gql`
  query ProductCategory($id: String) {
    productCategory(where: { id: $id }) {
      name
      description
      isActive
      isFeatured
    }
  }
`;

export const ADD_MENU_CATEGORY = gql`
  mutation CreateProductCategory(
    $name: String!
    $description: String
    $isActive: Boolean
    $isFeatured: Boolean
    $restaurantID: String
  ) {
    createProductCategory(
      data: {
        name: $name
        description: $description
        isActive: $isActive
        isFeatured: $isFeatured
        restaurants: { connect: { id: $restaurantID } }
      }
    ) {
      name
    }
  }
`;

export const UPDATE_MENU_CATEGORY = gql`
  mutation updateProductCategory(
    $id: String
    $name: String
    $description: String
    $isActive: Boolean
    $isFeatured: Boolean
  ) {
    updateProductCategory(
      data: {
        name: { set: $name }
        description: { set: $description }
        isActive: { set: $isActive }
        isFeatured: { set: $isFeatured }
      }
      where: { id: $id }
    ) {
      name
    }
  }
`;

export const DELETE_MENU_CATEGORY = gql`
  mutation DeleteProductCategory($id: String) {
    deleteProductCategory(where: { id: $id }) {
      id
    }
  }
`;

export const GET_MENU_ITEMS = gql`
  query Products($id: String) {
    restaurant(where: { id: $id }) {
      productCategory {
        id
        name
        Product {
          name
          description
          price
          spiceLevel
          isPopular
          isActive
        }
      }
    }
  }
`;
