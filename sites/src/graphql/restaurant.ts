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
        isTakeaway
        isDelivery
        isReservation
        isAutoAcceptOrder
        isAutoAcceptReservation
        schedules {
          day
          openingTime
          closingTime
          deliveryTime
          takeawayTime
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
        productCategory {
          name
          description
          isActive
          isFeatured
          Product {
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
