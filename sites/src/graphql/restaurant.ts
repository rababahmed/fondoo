import { gql } from "graphql-request";

export const GET_RESTAURANT_INFO = gql`
  query RestaurantConfig($domain: String) {
    restaurantConfig(where: { domain: $domain }) {
      primaryColor
      secondaryColor
      hasDarkNavBg
      isActive
      restaurant {
        id
        name
        email
        businessPhone
        reservationPhone
        url
        logo
        coverImage
        cuisine
        address
        city
        postCode
        country
        currency
        priceRange
        diningStyle
        vat
        serviceCharge
        hasParkingFacilities
        hasPartyFacilities
        hasKidsZone
        hasPickup
        hasDelivery
        hasReservation
        isAutoAcceptOrder
        isAutoAcceptReservation
        schedules {
          id
          day
          openingTime
          closingTime
          pickupTime
        }
        deliveryZones {
          id
          name
          postCode
          deliveryFeeType
          deliveryCharge
          deliveryTime
          isPreOrder
          preOrderInstructions
        }
        productCategory(orderBy: { createdAt: asc }) {
          id
          name
          description
          isActive
          isFeatured
          Product(orderBy: { isPopular: desc }) {
            id
            name
            description
            image
            price
            spiceLevel
            isPopular
            isActive
          }
        }
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
          popularDishesHeading
          popularDishesDescription
          popularDishesImage
          reservationHeading
          reservationDescription
          reservationImage
        }
        CMSAbout {
          storyHeading
          storyDescription
          storyImage
        }
        coupons {
          id
          code
          image
          discount
          value
          description
          startDate
          endDate
        }
      }
    }
  }
`;

export const GET_POPULAR_DISHES = gql`
  query RestaurantPopularDishes($id: String) {
    products(
      where: {
        restaurantId: { equals: $id }
        isPopular: { equals: true }
        isActive: { equals: true }
      }
    ) {
      id
      name
      description
      image
      price
      spiceLevel
      isPopular
      isActive
    }
  }
`;
