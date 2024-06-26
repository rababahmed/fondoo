import { gql } from "graphql-request";

export const GET_MENU_CATEGORIES = gql`
  query RestuarantProductCategories($id: String) {
    productCategories(
      orderBy: { createdAt: asc }
      where: { restaurantId: { equals: $id } }
    ) {
      id
      name
      description
      isActive
      isFeatured
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
  query RestuarantProducts($id: String) {
    productCategories(
      orderBy: { createdAt: asc }
      where: { restaurantId: { equals: $id } }
    ) {
      id
      name
      Product {
        id
        name
        description
        image
        price
        spiceLevel
        isFeatured
        isActive
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
    $isFeatured: Boolean
    $image: String
    $price: Float
    $spiceLevel: SpiceLevel
    $productCatID: String
    $restaurantID: String
  ) {
    createProduct(
      data: {
        name: $name
        description: $description
        isActive: $isActive
        isFeatured: $isFeatured
        price: $price
        image: $image
        spiceLevel: $spiceLevel
        productCategory: { connect: { id: $productCatID } }
        restaurant: { connect: { id: $restaurantID } }
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
    $price: Float
    $image: String
    $spiceLevel: SpiceLevel
    $isActive: Boolean
    $isFeatured: Boolean
  ) {
    updateProduct(
      data: {
        name: { set: $name }
        description: { set: $description }
        isActive: { set: $isActive }
        isFeatured: { set: $isFeatured }
        spiceLevel: { set: $spiceLevel }
        price: { set: $price }
        image: { set: $image }
      }
      where: { id: $id }
    ) {
      name
    }
  }
`;
