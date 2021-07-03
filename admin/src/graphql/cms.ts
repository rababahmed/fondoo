import { gql } from "graphql-request";

export const GET_CMS_HOME = gql`
  query CMSHome($id: String) {
    restaurant(where: { id: $id }) {
      CMSHome {
        heroHeading
        heroDescription
        heroImage
        aboutHeading
        aboutDescription
        aboutImage
        dealsHeading
        dealsDescription
        dealsImage
        reservationHeading
        reservationDescription
        reservationImage
        popularDishesHeading
        popularDishesDescription
        popularDishesImage
      }
    }
  }
`;
