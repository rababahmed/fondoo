import { gql } from "graphql-request";

export const GET_RESTAURANT_INFO = gql`
  query RestaurantConfig($domain: String) {
    restaurantConfig(where: { domain: $domain }) {
      primaryColor
      secondaryColor
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
          day
          openingTime
          closingTime
          pickupTime
        }
        deliveryZones {
          name
          postCode
          deliveryFeeType
          deliveryCharge
          minDeliveryAmount
          minDeliveryRadius
          maxDeliveryRadius
        }
        productCategory(orderBy: { createdAt: asc }) {
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
        coupons {
          id
          code
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
