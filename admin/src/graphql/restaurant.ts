import { gql } from "graphql-request";

export const EDIT_RESTAURANT = gql`
  mutation UpdateRestaurant(
    $id: String
    $name: String
    $coverImage: String
    $businessPhone: String
    $city: String
    $priceRange: String
    $cuisine: String
    $email: String
    $currency: String
    $postCode: String
    $vat: Float
    $logo: String
    $url: String
    $address: String
    $country: String
    $serviceCharge: Float
    $hasParkingFacilities: Boolean
    $hasPartyFacilities: Boolean
    $hasKidsZone: Boolean
    $hasDelivery: Boolean
    $hasPickup: Boolean
    $hasReservation: Boolean
    $isAutoAcceptOrder: Boolean
    $isAutoAcceptReservation: Boolean
  ) {
    updateRestaurant(
      data: {
        name: { set: $name }
        coverImage: { set: $coverImage }
        businessPhone: { set: $businessPhone }
        city: { set: $city }
        priceRange: { set: $priceRange }
        cuisine: { set: $cuisine }
        email: { set: $email }
        currency: { set: $currency }
        postCode: { set: $postCode }
        vat: { set: $vat }
        logo: { set: $logo }
        url: { set: $url }
        address: { set: $address }
        country: { set: $country }
        serviceCharge: { set: $serviceCharge }
        hasParkingFacilities: { set: $hasParkingFacilities }
        hasPartyFacilities: { set: $hasPartyFacilities }
        hasKidsZone: { set: $hasKidsZone }
        hasDelivery: { set: $hasDelivery }
        hasPickup: { set: $hasPickup }
        hasReservation: { set: $hasReservation }
        isAutoAcceptOrder: { set: $isAutoAcceptOrder }
        isAutoAcceptReservation: { set: $isAutoAcceptReservation }
      }
      where: { id: $id }
    ) {
      name
      email
    }
  }
`;

export const GET_RESTAURANT_INFO = gql`
  query Restaurant($id: String) {
    restaurant(where: { id: $id }) {
      name
      coverImage
      businessPhone
      city
      priceRange
      cuisine
      email
      currency
      postCode
      vat
      logo
      url
      address
      country
      serviceCharge
      hasParkingFacilities
      hasPartyFacilities
      hasKidsZone
      hasDelivery
      hasPickup
      hasReservation
      isAutoAcceptOrder
      isAutoAcceptReservation
    }
  }
`;

export const GET_RESTAURANT_SCHEDULES = gql`
  query RestaurantSchedules($id: String) {
    schedules(where: { restaurantId: { equals: $id } }) {
      id
      day
      openingTime
      closingTime
      pickupTime
    }
  }
`;

export const ADD_RESTAURANT_SCHEDULE = gql`
  mutation AddSchedule(
    $day: String
    $openingTime: String
    $closingTime: String
    $pickupTime: Int
    $restaurantID: String
  ) {
    createSchedule(
      data: {
        day: $day
        openingTime: $openingTime
        closingTime: $closingTime
        pickupTime: $pickupTime
        Restaurant: { connect: { id: $restaurantID } }
      }
    ) {
      id
      day
      openingTime
      closingTime
      pickupTime
    }
  }
`;

export const EDIT_RESTAURANT_SCHEDULE = gql`
  mutation UpdateSchedule(
    $id: String
    $day: String
    $openingTime: String
    $closingTime: Strin
    $pickupTime: Int
  ) {
    updateSchedule(
      data: {
        day: { set: $day }
        openingTime: { set: $openingTime }
        closingTime: { set: $closingTime }
        pickupTime: { set: $pickupTime }
      }
      where: { id: $id }
    ) {
      id
    }
  }
`;

export const DELETE_RESTAURANT_SCHEDULE = gql`
  mutation DeleteSchedule($id: String) {
    deleteSchedule(where: { id: $id }) {
      id
    }
  }
`;

export const GET_RESTAURANT_OFFERS = gql`
  query Offers($id: String) {
    restaurant(where: { id: $id }) {
      offers {
        id
        name
        description
        image
        startDate
        endDate
        isActive
        orders {
          id
        }
        createdAt
      }
    }
  }
`;

export const ADD_RESTAURANT_OFFER = gql`
  mutation AddOffer(
    $id: String
    $name: String
    $description: String
    $image: String
    $startDate: String
    $endDate: String
    $isActive: Boolean
  ) {
    createOffer(
      data: {
        name: $name
        description: $description
        startDate: $startDate
        image: $image
        endDate: $endDate
        isActive: $isActive
        restaurant: { connect: { id: $id } }
      }
    ) {
      id
      name
    }
  }
`;

export const DELETE_RESTAURANT_OFFER = gql`
  mutation deleteOffer($id: String) {
    deleteOffer(where: { id: $id }) {
      id
    }
  }
`;

export const GET_RESTAURANT_COUPONS = gql`
  query Coupons($id: String) {
    restaurant(where: { id: $id }) {
      coupons {
        id
        code
        discount
        image
        value
        description
        startDate
        endDate
        orders {
          id
        }
      }
    }
  }
`;

export enum Discount {
  Fixed,
  Percent,
}

export const ADD_RESTAURANT_COUPON = gql`
  mutation AddCoupon(
    $id: String
    $code: String!
    $description: String
    $image: String
    $discount: Discount!
    $value: Float!
    $startDate: String
    $endDate: String
  ) {
    createCoupon(
      data: {
        code: $code
        description: $description
        discount: $discount
        image: $image
        value: $value
        startDate: $startDate
        endDate: $endDate
        restaurant: { connect: { id: $id } }
      }
    ) {
      id
    }
  }
`;

export const DELETE_RESTAURANT_COUPON = gql`
  mutation deleteCoupon($id: String) {
    deleteCoupon(where: { id: $id }) {
      id
    }
  }
`;

export enum DeliveryFee {
  Fixed,
  Percent,
}

export const ADD_RESTAURANT_DELIVERY_ZONE = gql`
  mutation AddDeliveryZone(
    $id: String
    $name: String!
    $deliveryTime: Int
    $deliveryFeeType: DeliveryFee
    $deliveryCharge: Float
    $isPreOrder: Boolean
    $preOrderInstructions: String
  ) {
    createDeliveryZone(
      data: {
        name: $name
        deliveryTime: $deliveryTime
        deliveryFeeType: $deliveryFeeType
        deliveryCharge: $deliveryCharge
        isPreOrder: $isPreOrder
        preOrderInstructions: $preOrderInstructions
        restaurant: { connect: { id: $id } }
      }
    ) {
      id
    }
  }
`;

export const DELETE_RESTAURANT_DELIVERY_ZONE = gql`
  mutation deleteDeliveryZone($id: String) {
    deleteDeliveryZone(where: { id: $id }) {
      id
    }
  }
`;

export const GET_RESTAURANT_DELIVERY_ZONES = gql`
  query DeliveryZones($id: String) {
    restaurant(where: { id: $id }) {
      deliveryZones {
        id
        name
        deliveryTime
        deliveryFeeType
        deliveryCharge
        isPreOrder
        preOrderInstructions
      }
    }
  }
`;

export const GET_RESTAURANT_CONFIG = gql`
  query RestaurantConfig($id: String) {
    restaurant(where: { id: $id }) {
      config {
        id
        domain
        primaryColor
        secondaryColor
        hasDarkNavBg
      }
    }
  }
`;

export const UPDATE_RESTAURANT_APPEARANCE = gql`
  mutation UpdateRestaurantAppearance(
    $id: String
    $primaryColor: String
    $secondaryColor: String
    $hasDarkNavBg: Boolean
  ) {
    updateRestaurantConfig(
      where: { restaurantId: $id }
      data: {
        primaryColor: { set: $primaryColor }
        secondaryColor: { set: $secondaryColor }
        hasDarkNavBg: { set: $hasDarkNavBg }
      }
    ) {
      id
    }
  }
`;

export const GET_RESTAURANT_SOCIALS = gql`
  query RestaurantSocials($id: String) {
    restaurant(where: { id: $id }) {
      socials {
        id
        network
        url
        isActive
      }
    }
  }
`;

export const ADD_RESTAURANT_SOCIAL = gql`
  mutation AddRestaurantSocial(
    $id: String
    $network: String
    $url: String
    $isActive: Boolean
  ) {
    createRestaurantSocial(
      data: {
        network: $network
        url: $url
        isActive: $isActive
        restaurant: { connect: { id: $id } }
      }
    ) {
      id
      network
    }
  }
`;

export const DELETE_RESTAURANT_SOCIAL = gql`
  mutation deleteRestaurantSocial($id: String) {
    deleteRestaurantSocial(where: { id: $id }) {
      id
    }
  }
`;
