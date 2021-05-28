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
export const GET_MENU_ITEMS = gql`
  query Items($id: String) {
    restaurant(where: { id: $id }) {
      products {
        id
        name
        description
        image
        spiceLevel
        price
        ProductCategory {
          name
        }
        isActive
        isPopular
      }
    }
`;
