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

export const DELETE_MENU_ITEM = gql`
  mutation DeleteProduct($id: String) {
    deleteProduct(where: { id: $id }) {
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
          id
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

export enum SpiceLevel {
  None,
  Mild,
  Medium,
  Hot,
  ExtraHot,
}

export const ADD_MENU_ITEM = gql`
  mutation createProduct(
    $name: String!
    $description: String
    $isActive: Boolean
    $isPopular: Boolean
    $price: Int
    $spiceLevel: SpiceLevel
    $productCatID: String
    $restaurantID: String
  ) {
    createProduct(
      data: {
        name: $name
        description: $description
        isActive: $isActive
        isPopular: $isPopular
        price: $price
        spiceLevel: $spiceLevel
        ProductCategory: { connect: { id: $productCatID } }
        Restaurant: { connect: { id: $restaurantID } }
      }
    ) {
      name
    }
  }
`;

export const EDIT_MENU_ITEM = gql`
  mutation updateProduct(
    $id: String
    $name: String
    $description: String
    $price: Int
    $spiceLevel: SpiceLevel
    $isActive: Boolean
    $isPopular: Boolean
  ) {
    updateProduct(
      data: {
        name: { set: $name }
        description: { set: $description }
        isActive: { set: $isActive }
        isPopular: { set: $isPopular }
        spiceLevel: { set: $spiceLevel }
        price: { set: $price }
      }
      where: { id: $id }
    ) {
      name
    }
  }
`;
