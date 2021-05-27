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
