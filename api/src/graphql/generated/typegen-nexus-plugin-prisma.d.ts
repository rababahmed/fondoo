import * as Typegen from 'nexus-plugin-prisma/typegen'
import * as Prisma from '@prisma/client';

// Pagination type
type Pagination = {
    first?: boolean
    last?: boolean
    before?: boolean
    after?: boolean
}

// Prisma custom scalar names
type CustomScalars = 'DateTime'

// Prisma model type definitions
interface PrismaModels {
  Restaurant: Prisma.Restaurant
  RestaurantPlan: Prisma.RestaurantPlan
  RestaurantConfig: Prisma.RestaurantConfig
  RestaurantSocial: Prisma.RestaurantSocial
  RestaurantReview: Prisma.RestaurantReview
  CMSHome: Prisma.CMSHome
  CMSAbout: Prisma.CMSAbout
  CMSReview: Prisma.CMSReview
  CMSReservation: Prisma.CMSReservation
  CMSContact: Prisma.CMSContact
  ProductCategory: Prisma.ProductCategory
  Product: Prisma.Product
  Schedule: Prisma.Schedule
  DeliveryZone: Prisma.DeliveryZone
  Customer: Prisma.Customer
  CustomerAddress: Prisma.CustomerAddress
  CustomerToken: Prisma.CustomerToken
  User: Prisma.User
  UserToken: Prisma.UserToken
  Coupon: Prisma.Coupon
  OrderItem: Prisma.OrderItem
  Order: Prisma.Order
}

// Prisma input types metadata
interface NexusPrismaInputs {
  Query: {
    restaurants: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'email' | 'logo' | 'coverImage' | 'plan' | 'restaurantPlanId' | 'businessPhone' | 'reservationPhone' | 'url' | 'cuisine' | 'address' | 'city' | 'postCode' | 'country' | 'currency' | 'priceRange' | 'diningStyle' | 'vat' | 'serviceCharge' | 'hasParkingFacilities' | 'hasPartyFacilities' | 'hasKidsZone' | 'isTakeaway' | 'isDelivery' | 'isReservation' | 'isAutoAcceptOrder' | 'isAutoAcceptReservation' | 'schedules' | 'deliveryZones' | 'customers' | 'orders' | 'orderItems' | 'productCategory' | 'products' | 'users' | 'createdAt' | 'updatedAt' | 'RestaurantConfig' | 'CMSHome' | 'CMSAbout' | 'CMSReview' | 'CMSReservation' | 'CMSContact' | 'RestaurantSocial' | 'RestaurantReview'
      ordering: 'id' | 'name' | 'email' | 'logo' | 'coverImage' | 'restaurantPlanId' | 'businessPhone' | 'reservationPhone' | 'url' | 'cuisine' | 'address' | 'city' | 'postCode' | 'country' | 'currency' | 'priceRange' | 'diningStyle' | 'vat' | 'serviceCharge' | 'hasParkingFacilities' | 'hasPartyFacilities' | 'hasKidsZone' | 'isTakeaway' | 'isDelivery' | 'isReservation' | 'isAutoAcceptOrder' | 'isAutoAcceptReservation' | 'createdAt' | 'updatedAt'
    }
    restaurantPlans: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'price' | 'isActive' | 'restaurants'
      ordering: 'id' | 'name' | 'price' | 'isActive'
    }
    restaurantConfigs: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'primaryColor' | 'secondaryColor' | 'isActive' | 'restaurant' | 'restaurantId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'primaryColor' | 'secondaryColor' | 'isActive' | 'restaurantId' | 'createdAt' | 'updatedAt'
    }
    restaurantSocials: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'facebook' | 'instagram' | 'pinterest' | 'isActive' | 'restaurant' | 'restaurantId'
      ordering: 'id' | 'facebook' | 'instagram' | 'pinterest' | 'isActive' | 'restaurantId'
    }
    restaurantReviews: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'title' | 'description' | 'rating' | 'isActive' | 'customer' | 'restaurant' | 'restaurantId' | 'customerId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'title' | 'description' | 'rating' | 'isActive' | 'restaurantId' | 'customerId' | 'createdAt' | 'updatedAt'
    }
    cmsHomes: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'heroHeading' | 'heroDescription' | 'heroImage' | 'aboutHeading' | 'aboutDescription' | 'aboutImage' | 'dealsHeading' | 'dealsDescription' | 'dealsImage' | 'reservationHeading' | 'reservationDescription' | 'reservationImage' | 'popularDishesHeading' | 'popularDishesDescription' | 'popularDishesImage' | 'isActive' | 'restaurant' | 'restaurantId'
      ordering: 'id' | 'heroHeading' | 'heroDescription' | 'heroImage' | 'aboutHeading' | 'aboutDescription' | 'aboutImage' | 'dealsHeading' | 'dealsDescription' | 'dealsImage' | 'reservationHeading' | 'reservationDescription' | 'reservationImage' | 'popularDishesHeading' | 'popularDishesDescription' | 'popularDishesImage' | 'isActive' | 'restaurantId'
    }
    cmsAbouts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'headerHeading' | 'headerDescription' | 'headerImage' | 'storyHeading' | 'storyDescription' | 'storyImage' | 'isActive' | 'restaurant' | 'restaurantId'
      ordering: 'id' | 'headerHeading' | 'headerDescription' | 'headerImage' | 'storyHeading' | 'storyDescription' | 'storyImage' | 'isActive' | 'restaurantId'
    }
    cmsReviews: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'headerHeading' | 'headerDescription' | 'headerImage' | 'isActive' | 'restaurant' | 'restaurantId'
      ordering: 'id' | 'headerHeading' | 'headerDescription' | 'headerImage' | 'isActive' | 'restaurantId'
    }
    cmsReservations: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'headerHeading' | 'headerDescription' | 'headerImage' | 'isActive' | 'restaurant' | 'restaurantId'
      ordering: 'id' | 'headerHeading' | 'headerDescription' | 'headerImage' | 'isActive' | 'restaurantId'
    }
    cmsContacts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'headerHeading' | 'headerDescription' | 'headerImage' | 'isActive' | 'restaurant' | 'restaurantId'
      ordering: 'id' | 'headerHeading' | 'headerDescription' | 'headerImage' | 'isActive' | 'restaurantId'
    }
    productCategories: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'name' | 'description' | 'image' | 'isActive' | 'isFeatured' | 'restaurants' | 'restaurantId' | 'Product'
      ordering: 'id' | 'createdAt' | 'name' | 'description' | 'image' | 'isActive' | 'isFeatured' | 'restaurantId'
    }
    products: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'name' | 'description' | 'image' | 'price' | 'spiceLevel' | 'isPopular' | 'isActive' | 'ProductCategory' | 'productCategoryId' | 'Restaurant' | 'restaurantId' | 'OrderItem'
      ordering: 'id' | 'createdAt' | 'name' | 'description' | 'image' | 'price' | 'spiceLevel' | 'isPopular' | 'isActive' | 'productCategoryId' | 'restaurantId'
    }
    schedules: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'day' | 'openingTime' | 'closingTime' | 'deliveryTime' | 'takeawayTime' | 'Restaurant' | 'restaurantId'
      ordering: 'id' | 'createdAt' | 'day' | 'openingTime' | 'closingTime' | 'deliveryTime' | 'takeawayTime' | 'restaurantId'
    }
    deliveryZones: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'zoneTitle' | 'zonePostCode' | 'deliveryFeeType' | 'deliveryCharge' | 'minDeliveryAmount' | 'minDeliveryRadius' | 'maxDeliveryRadius' | 'Restaurant' | 'restaurantId'
      ordering: 'id' | 'createdAt' | 'zoneTitle' | 'zonePostCode' | 'deliveryFeeType' | 'deliveryCharge' | 'minDeliveryAmount' | 'minDeliveryRadius' | 'maxDeliveryRadius' | 'restaurantId'
    }
    customers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'firstName' | 'lastName' | 'email' | 'password' | 'phone' | 'token' | 'addresses' | 'orders' | 'restaurants' | 'updatedAt' | 'RestaurantReview'
      ordering: 'id' | 'createdAt' | 'firstName' | 'lastName' | 'email' | 'password' | 'phone' | 'updatedAt'
    }
    customerAddresses: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'streetAddress' | 'city' | 'postCode' | 'country' | 'Customer' | 'customerId'
      ordering: 'id' | 'createdAt' | 'streetAddress' | 'city' | 'postCode' | 'country' | 'customerId'
    }
    customerTokens: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'token' | 'createdAt' | 'updatedAt' | 'Customer' | 'customerId'
      ordering: 'id' | 'token' | 'createdAt' | 'updatedAt' | 'customerId'
    }
    users: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'firstName' | 'lastName' | 'email' | 'password' | 'phone' | 'token' | 'restaurants' | 'role'
      ordering: 'id' | 'createdAt' | 'firstName' | 'lastName' | 'email' | 'password' | 'phone' | 'role'
    }
    userTokens: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'token' | 'provider' | 'createdAt' | 'updatedAt' | 'User' | 'userId'
      ordering: 'id' | 'token' | 'provider' | 'createdAt' | 'updatedAt' | 'userId'
    }
    coupons: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'code' | 'discount' | 'value' | 'description' | 'orders'
      ordering: 'id' | 'code' | 'discount' | 'value' | 'description'
    }
    orderItems: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'product' | 'quantity' | 'total' | 'spiceLevel' | 'productId' | 'Order' | 'orderId' | 'createdAt' | 'updatedAt' | 'Restaurant' | 'restaurantId'
      ordering: 'id' | 'quantity' | 'total' | 'spiceLevel' | 'productId' | 'orderId' | 'createdAt' | 'updatedAt' | 'restaurantId'
    }
    orders: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'items' | 'address' | 'discount' | 'deliveryCharges' | 'vat' | 'serviceCharge' | 'total' | 'isAccepted' | 'Coupon' | 'couponId' | 'restaurant' | 'restaurantId' | 'Customer' | 'customerId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'address' | 'discount' | 'deliveryCharges' | 'vat' | 'serviceCharge' | 'total' | 'isAccepted' | 'couponId' | 'restaurantId' | 'customerId' | 'createdAt' | 'updatedAt'
    }
  },
  Restaurant: {
    schedules: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'day' | 'openingTime' | 'closingTime' | 'deliveryTime' | 'takeawayTime' | 'Restaurant' | 'restaurantId'
      ordering: 'id' | 'createdAt' | 'day' | 'openingTime' | 'closingTime' | 'deliveryTime' | 'takeawayTime' | 'restaurantId'
    }
    deliveryZones: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'zoneTitle' | 'zonePostCode' | 'deliveryFeeType' | 'deliveryCharge' | 'minDeliveryAmount' | 'minDeliveryRadius' | 'maxDeliveryRadius' | 'Restaurant' | 'restaurantId'
      ordering: 'id' | 'createdAt' | 'zoneTitle' | 'zonePostCode' | 'deliveryFeeType' | 'deliveryCharge' | 'minDeliveryAmount' | 'minDeliveryRadius' | 'maxDeliveryRadius' | 'restaurantId'
    }
    customers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'firstName' | 'lastName' | 'email' | 'password' | 'phone' | 'token' | 'addresses' | 'orders' | 'restaurants' | 'updatedAt' | 'RestaurantReview'
      ordering: 'id' | 'createdAt' | 'firstName' | 'lastName' | 'email' | 'password' | 'phone' | 'updatedAt'
    }
    orders: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'items' | 'address' | 'discount' | 'deliveryCharges' | 'vat' | 'serviceCharge' | 'total' | 'isAccepted' | 'Coupon' | 'couponId' | 'restaurant' | 'restaurantId' | 'Customer' | 'customerId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'address' | 'discount' | 'deliveryCharges' | 'vat' | 'serviceCharge' | 'total' | 'isAccepted' | 'couponId' | 'restaurantId' | 'customerId' | 'createdAt' | 'updatedAt'
    }
    orderItems: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'product' | 'quantity' | 'total' | 'spiceLevel' | 'productId' | 'Order' | 'orderId' | 'createdAt' | 'updatedAt' | 'Restaurant' | 'restaurantId'
      ordering: 'id' | 'quantity' | 'total' | 'spiceLevel' | 'productId' | 'orderId' | 'createdAt' | 'updatedAt' | 'restaurantId'
    }
    productCategory: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'name' | 'description' | 'image' | 'isActive' | 'isFeatured' | 'restaurants' | 'restaurantId' | 'Product'
      ordering: 'id' | 'createdAt' | 'name' | 'description' | 'image' | 'isActive' | 'isFeatured' | 'restaurantId'
    }
    products: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'name' | 'description' | 'image' | 'price' | 'spiceLevel' | 'isPopular' | 'isActive' | 'ProductCategory' | 'productCategoryId' | 'Restaurant' | 'restaurantId' | 'OrderItem'
      ordering: 'id' | 'createdAt' | 'name' | 'description' | 'image' | 'price' | 'spiceLevel' | 'isPopular' | 'isActive' | 'productCategoryId' | 'restaurantId'
    }
    users: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'firstName' | 'lastName' | 'email' | 'password' | 'phone' | 'token' | 'restaurants' | 'role'
      ordering: 'id' | 'createdAt' | 'firstName' | 'lastName' | 'email' | 'password' | 'phone' | 'role'
    }
    RestaurantConfig: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'primaryColor' | 'secondaryColor' | 'isActive' | 'restaurant' | 'restaurantId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'primaryColor' | 'secondaryColor' | 'isActive' | 'restaurantId' | 'createdAt' | 'updatedAt'
    }
    CMSHome: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'heroHeading' | 'heroDescription' | 'heroImage' | 'aboutHeading' | 'aboutDescription' | 'aboutImage' | 'dealsHeading' | 'dealsDescription' | 'dealsImage' | 'reservationHeading' | 'reservationDescription' | 'reservationImage' | 'popularDishesHeading' | 'popularDishesDescription' | 'popularDishesImage' | 'isActive' | 'restaurant' | 'restaurantId'
      ordering: 'id' | 'heroHeading' | 'heroDescription' | 'heroImage' | 'aboutHeading' | 'aboutDescription' | 'aboutImage' | 'dealsHeading' | 'dealsDescription' | 'dealsImage' | 'reservationHeading' | 'reservationDescription' | 'reservationImage' | 'popularDishesHeading' | 'popularDishesDescription' | 'popularDishesImage' | 'isActive' | 'restaurantId'
    }
    CMSAbout: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'headerHeading' | 'headerDescription' | 'headerImage' | 'storyHeading' | 'storyDescription' | 'storyImage' | 'isActive' | 'restaurant' | 'restaurantId'
      ordering: 'id' | 'headerHeading' | 'headerDescription' | 'headerImage' | 'storyHeading' | 'storyDescription' | 'storyImage' | 'isActive' | 'restaurantId'
    }
    CMSReview: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'headerHeading' | 'headerDescription' | 'headerImage' | 'isActive' | 'restaurant' | 'restaurantId'
      ordering: 'id' | 'headerHeading' | 'headerDescription' | 'headerImage' | 'isActive' | 'restaurantId'
    }
    CMSReservation: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'headerHeading' | 'headerDescription' | 'headerImage' | 'isActive' | 'restaurant' | 'restaurantId'
      ordering: 'id' | 'headerHeading' | 'headerDescription' | 'headerImage' | 'isActive' | 'restaurantId'
    }
    CMSContact: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'headerHeading' | 'headerDescription' | 'headerImage' | 'isActive' | 'restaurant' | 'restaurantId'
      ordering: 'id' | 'headerHeading' | 'headerDescription' | 'headerImage' | 'isActive' | 'restaurantId'
    }
    RestaurantSocial: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'facebook' | 'instagram' | 'pinterest' | 'isActive' | 'restaurant' | 'restaurantId'
      ordering: 'id' | 'facebook' | 'instagram' | 'pinterest' | 'isActive' | 'restaurantId'
    }
    RestaurantReview: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'title' | 'description' | 'rating' | 'isActive' | 'customer' | 'restaurant' | 'restaurantId' | 'customerId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'title' | 'description' | 'rating' | 'isActive' | 'restaurantId' | 'customerId' | 'createdAt' | 'updatedAt'
    }
  }
  RestaurantPlan: {
    restaurants: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'email' | 'logo' | 'coverImage' | 'plan' | 'restaurantPlanId' | 'businessPhone' | 'reservationPhone' | 'url' | 'cuisine' | 'address' | 'city' | 'postCode' | 'country' | 'currency' | 'priceRange' | 'diningStyle' | 'vat' | 'serviceCharge' | 'hasParkingFacilities' | 'hasPartyFacilities' | 'hasKidsZone' | 'isTakeaway' | 'isDelivery' | 'isReservation' | 'isAutoAcceptOrder' | 'isAutoAcceptReservation' | 'schedules' | 'deliveryZones' | 'customers' | 'orders' | 'orderItems' | 'productCategory' | 'products' | 'users' | 'createdAt' | 'updatedAt' | 'RestaurantConfig' | 'CMSHome' | 'CMSAbout' | 'CMSReview' | 'CMSReservation' | 'CMSContact' | 'RestaurantSocial' | 'RestaurantReview'
      ordering: 'id' | 'name' | 'email' | 'logo' | 'coverImage' | 'restaurantPlanId' | 'businessPhone' | 'reservationPhone' | 'url' | 'cuisine' | 'address' | 'city' | 'postCode' | 'country' | 'currency' | 'priceRange' | 'diningStyle' | 'vat' | 'serviceCharge' | 'hasParkingFacilities' | 'hasPartyFacilities' | 'hasKidsZone' | 'isTakeaway' | 'isDelivery' | 'isReservation' | 'isAutoAcceptOrder' | 'isAutoAcceptReservation' | 'createdAt' | 'updatedAt'
    }
  }
  RestaurantConfig: {

  }
  RestaurantSocial: {

  }
  RestaurantReview: {

  }
  CMSHome: {

  }
  CMSAbout: {

  }
  CMSReview: {

  }
  CMSReservation: {

  }
  CMSContact: {

  }
  ProductCategory: {
    Product: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'name' | 'description' | 'image' | 'price' | 'spiceLevel' | 'isPopular' | 'isActive' | 'ProductCategory' | 'productCategoryId' | 'Restaurant' | 'restaurantId' | 'OrderItem'
      ordering: 'id' | 'createdAt' | 'name' | 'description' | 'image' | 'price' | 'spiceLevel' | 'isPopular' | 'isActive' | 'productCategoryId' | 'restaurantId'
    }
  }
  Product: {
    OrderItem: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'product' | 'quantity' | 'total' | 'spiceLevel' | 'productId' | 'Order' | 'orderId' | 'createdAt' | 'updatedAt' | 'Restaurant' | 'restaurantId'
      ordering: 'id' | 'quantity' | 'total' | 'spiceLevel' | 'productId' | 'orderId' | 'createdAt' | 'updatedAt' | 'restaurantId'
    }
  }
  Schedule: {

  }
  DeliveryZone: {

  }
  Customer: {
    token: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'token' | 'createdAt' | 'updatedAt' | 'Customer' | 'customerId'
      ordering: 'id' | 'token' | 'createdAt' | 'updatedAt' | 'customerId'
    }
    addresses: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'streetAddress' | 'city' | 'postCode' | 'country' | 'Customer' | 'customerId'
      ordering: 'id' | 'createdAt' | 'streetAddress' | 'city' | 'postCode' | 'country' | 'customerId'
    }
    orders: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'items' | 'address' | 'discount' | 'deliveryCharges' | 'vat' | 'serviceCharge' | 'total' | 'isAccepted' | 'Coupon' | 'couponId' | 'restaurant' | 'restaurantId' | 'Customer' | 'customerId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'address' | 'discount' | 'deliveryCharges' | 'vat' | 'serviceCharge' | 'total' | 'isAccepted' | 'couponId' | 'restaurantId' | 'customerId' | 'createdAt' | 'updatedAt'
    }
    restaurants: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'email' | 'logo' | 'coverImage' | 'plan' | 'restaurantPlanId' | 'businessPhone' | 'reservationPhone' | 'url' | 'cuisine' | 'address' | 'city' | 'postCode' | 'country' | 'currency' | 'priceRange' | 'diningStyle' | 'vat' | 'serviceCharge' | 'hasParkingFacilities' | 'hasPartyFacilities' | 'hasKidsZone' | 'isTakeaway' | 'isDelivery' | 'isReservation' | 'isAutoAcceptOrder' | 'isAutoAcceptReservation' | 'schedules' | 'deliveryZones' | 'customers' | 'orders' | 'orderItems' | 'productCategory' | 'products' | 'users' | 'createdAt' | 'updatedAt' | 'RestaurantConfig' | 'CMSHome' | 'CMSAbout' | 'CMSReview' | 'CMSReservation' | 'CMSContact' | 'RestaurantSocial' | 'RestaurantReview'
      ordering: 'id' | 'name' | 'email' | 'logo' | 'coverImage' | 'restaurantPlanId' | 'businessPhone' | 'reservationPhone' | 'url' | 'cuisine' | 'address' | 'city' | 'postCode' | 'country' | 'currency' | 'priceRange' | 'diningStyle' | 'vat' | 'serviceCharge' | 'hasParkingFacilities' | 'hasPartyFacilities' | 'hasKidsZone' | 'isTakeaway' | 'isDelivery' | 'isReservation' | 'isAutoAcceptOrder' | 'isAutoAcceptReservation' | 'createdAt' | 'updatedAt'
    }
    RestaurantReview: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'title' | 'description' | 'rating' | 'isActive' | 'customer' | 'restaurant' | 'restaurantId' | 'customerId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'title' | 'description' | 'rating' | 'isActive' | 'restaurantId' | 'customerId' | 'createdAt' | 'updatedAt'
    }
  }
  CustomerAddress: {

  }
  CustomerToken: {

  }
  User: {
    token: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'token' | 'provider' | 'createdAt' | 'updatedAt' | 'User' | 'userId'
      ordering: 'id' | 'token' | 'provider' | 'createdAt' | 'updatedAt' | 'userId'
    }
    restaurants: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'email' | 'logo' | 'coverImage' | 'plan' | 'restaurantPlanId' | 'businessPhone' | 'reservationPhone' | 'url' | 'cuisine' | 'address' | 'city' | 'postCode' | 'country' | 'currency' | 'priceRange' | 'diningStyle' | 'vat' | 'serviceCharge' | 'hasParkingFacilities' | 'hasPartyFacilities' | 'hasKidsZone' | 'isTakeaway' | 'isDelivery' | 'isReservation' | 'isAutoAcceptOrder' | 'isAutoAcceptReservation' | 'schedules' | 'deliveryZones' | 'customers' | 'orders' | 'orderItems' | 'productCategory' | 'products' | 'users' | 'createdAt' | 'updatedAt' | 'RestaurantConfig' | 'CMSHome' | 'CMSAbout' | 'CMSReview' | 'CMSReservation' | 'CMSContact' | 'RestaurantSocial' | 'RestaurantReview'
      ordering: 'id' | 'name' | 'email' | 'logo' | 'coverImage' | 'restaurantPlanId' | 'businessPhone' | 'reservationPhone' | 'url' | 'cuisine' | 'address' | 'city' | 'postCode' | 'country' | 'currency' | 'priceRange' | 'diningStyle' | 'vat' | 'serviceCharge' | 'hasParkingFacilities' | 'hasPartyFacilities' | 'hasKidsZone' | 'isTakeaway' | 'isDelivery' | 'isReservation' | 'isAutoAcceptOrder' | 'isAutoAcceptReservation' | 'createdAt' | 'updatedAt'
    }
  }
  UserToken: {

  }
  Coupon: {
    orders: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'items' | 'address' | 'discount' | 'deliveryCharges' | 'vat' | 'serviceCharge' | 'total' | 'isAccepted' | 'Coupon' | 'couponId' | 'restaurant' | 'restaurantId' | 'Customer' | 'customerId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'address' | 'discount' | 'deliveryCharges' | 'vat' | 'serviceCharge' | 'total' | 'isAccepted' | 'couponId' | 'restaurantId' | 'customerId' | 'createdAt' | 'updatedAt'
    }
  }
  OrderItem: {

  }
  Order: {
    items: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'product' | 'quantity' | 'total' | 'spiceLevel' | 'productId' | 'Order' | 'orderId' | 'createdAt' | 'updatedAt' | 'Restaurant' | 'restaurantId'
      ordering: 'id' | 'quantity' | 'total' | 'spiceLevel' | 'productId' | 'orderId' | 'createdAt' | 'updatedAt' | 'restaurantId'
    }
  }
}

// Prisma output types metadata
interface NexusPrismaOutputs {
  Query: {
    restaurant: 'Restaurant'
    restaurants: 'Restaurant'
    restaurantPlan: 'RestaurantPlan'
    restaurantPlans: 'RestaurantPlan'
    restaurantConfig: 'RestaurantConfig'
    restaurantConfigs: 'RestaurantConfig'
    restaurantSocial: 'RestaurantSocial'
    restaurantSocials: 'RestaurantSocial'
    restaurantReview: 'RestaurantReview'
    restaurantReviews: 'RestaurantReview'
    cmsHome: 'CMSHome'
    cmsHomes: 'CMSHome'
    cmsAbout: 'CMSAbout'
    cmsAbouts: 'CMSAbout'
    cmsReview: 'CMSReview'
    cmsReviews: 'CMSReview'
    cmsReservation: 'CMSReservation'
    cmsReservations: 'CMSReservation'
    cmsContact: 'CMSContact'
    cmsContacts: 'CMSContact'
    productCategory: 'ProductCategory'
    productCategories: 'ProductCategory'
    product: 'Product'
    products: 'Product'
    schedule: 'Schedule'
    schedules: 'Schedule'
    deliveryZone: 'DeliveryZone'
    deliveryZones: 'DeliveryZone'
    customer: 'Customer'
    customers: 'Customer'
    customerAddress: 'CustomerAddress'
    customerAddresses: 'CustomerAddress'
    customerToken: 'CustomerToken'
    customerTokens: 'CustomerToken'
    user: 'User'
    users: 'User'
    userToken: 'UserToken'
    userTokens: 'UserToken'
    coupon: 'Coupon'
    coupons: 'Coupon'
    orderItem: 'OrderItem'
    orderItems: 'OrderItem'
    order: 'Order'
    orders: 'Order'
  },
  Mutation: {
    createOneRestaurant: 'Restaurant'
    updateOneRestaurant: 'Restaurant'
    updateManyRestaurant: 'AffectedRowsOutput'
    deleteOneRestaurant: 'Restaurant'
    deleteManyRestaurant: 'AffectedRowsOutput'
    upsertOneRestaurant: 'Restaurant'
    createOneRestaurantPlan: 'RestaurantPlan'
    updateOneRestaurantPlan: 'RestaurantPlan'
    updateManyRestaurantPlan: 'AffectedRowsOutput'
    deleteOneRestaurantPlan: 'RestaurantPlan'
    deleteManyRestaurantPlan: 'AffectedRowsOutput'
    upsertOneRestaurantPlan: 'RestaurantPlan'
    createOneRestaurantConfig: 'RestaurantConfig'
    updateOneRestaurantConfig: 'RestaurantConfig'
    updateManyRestaurantConfig: 'AffectedRowsOutput'
    deleteOneRestaurantConfig: 'RestaurantConfig'
    deleteManyRestaurantConfig: 'AffectedRowsOutput'
    upsertOneRestaurantConfig: 'RestaurantConfig'
    createOneRestaurantSocial: 'RestaurantSocial'
    updateOneRestaurantSocial: 'RestaurantSocial'
    updateManyRestaurantSocial: 'AffectedRowsOutput'
    deleteOneRestaurantSocial: 'RestaurantSocial'
    deleteManyRestaurantSocial: 'AffectedRowsOutput'
    upsertOneRestaurantSocial: 'RestaurantSocial'
    createOneRestaurantReview: 'RestaurantReview'
    updateOneRestaurantReview: 'RestaurantReview'
    updateManyRestaurantReview: 'AffectedRowsOutput'
    deleteOneRestaurantReview: 'RestaurantReview'
    deleteManyRestaurantReview: 'AffectedRowsOutput'
    upsertOneRestaurantReview: 'RestaurantReview'
    createOneCMSHome: 'CMSHome'
    updateOneCMSHome: 'CMSHome'
    updateManyCMSHome: 'AffectedRowsOutput'
    deleteOneCMSHome: 'CMSHome'
    deleteManyCMSHome: 'AffectedRowsOutput'
    upsertOneCMSHome: 'CMSHome'
    createOneCMSAbout: 'CMSAbout'
    updateOneCMSAbout: 'CMSAbout'
    updateManyCMSAbout: 'AffectedRowsOutput'
    deleteOneCMSAbout: 'CMSAbout'
    deleteManyCMSAbout: 'AffectedRowsOutput'
    upsertOneCMSAbout: 'CMSAbout'
    createOneCMSReview: 'CMSReview'
    updateOneCMSReview: 'CMSReview'
    updateManyCMSReview: 'AffectedRowsOutput'
    deleteOneCMSReview: 'CMSReview'
    deleteManyCMSReview: 'AffectedRowsOutput'
    upsertOneCMSReview: 'CMSReview'
    createOneCMSReservation: 'CMSReservation'
    updateOneCMSReservation: 'CMSReservation'
    updateManyCMSReservation: 'AffectedRowsOutput'
    deleteOneCMSReservation: 'CMSReservation'
    deleteManyCMSReservation: 'AffectedRowsOutput'
    upsertOneCMSReservation: 'CMSReservation'
    createOneCMSContact: 'CMSContact'
    updateOneCMSContact: 'CMSContact'
    updateManyCMSContact: 'AffectedRowsOutput'
    deleteOneCMSContact: 'CMSContact'
    deleteManyCMSContact: 'AffectedRowsOutput'
    upsertOneCMSContact: 'CMSContact'
    createOneProductCategory: 'ProductCategory'
    updateOneProductCategory: 'ProductCategory'
    updateManyProductCategory: 'AffectedRowsOutput'
    deleteOneProductCategory: 'ProductCategory'
    deleteManyProductCategory: 'AffectedRowsOutput'
    upsertOneProductCategory: 'ProductCategory'
    createOneProduct: 'Product'
    updateOneProduct: 'Product'
    updateManyProduct: 'AffectedRowsOutput'
    deleteOneProduct: 'Product'
    deleteManyProduct: 'AffectedRowsOutput'
    upsertOneProduct: 'Product'
    createOneSchedule: 'Schedule'
    updateOneSchedule: 'Schedule'
    updateManySchedule: 'AffectedRowsOutput'
    deleteOneSchedule: 'Schedule'
    deleteManySchedule: 'AffectedRowsOutput'
    upsertOneSchedule: 'Schedule'
    createOneDeliveryZone: 'DeliveryZone'
    updateOneDeliveryZone: 'DeliveryZone'
    updateManyDeliveryZone: 'AffectedRowsOutput'
    deleteOneDeliveryZone: 'DeliveryZone'
    deleteManyDeliveryZone: 'AffectedRowsOutput'
    upsertOneDeliveryZone: 'DeliveryZone'
    createOneCustomer: 'Customer'
    updateOneCustomer: 'Customer'
    updateManyCustomer: 'AffectedRowsOutput'
    deleteOneCustomer: 'Customer'
    deleteManyCustomer: 'AffectedRowsOutput'
    upsertOneCustomer: 'Customer'
    createOneCustomerAddress: 'CustomerAddress'
    updateOneCustomerAddress: 'CustomerAddress'
    updateManyCustomerAddress: 'AffectedRowsOutput'
    deleteOneCustomerAddress: 'CustomerAddress'
    deleteManyCustomerAddress: 'AffectedRowsOutput'
    upsertOneCustomerAddress: 'CustomerAddress'
    createOneCustomerToken: 'CustomerToken'
    updateOneCustomerToken: 'CustomerToken'
    updateManyCustomerToken: 'AffectedRowsOutput'
    deleteOneCustomerToken: 'CustomerToken'
    deleteManyCustomerToken: 'AffectedRowsOutput'
    upsertOneCustomerToken: 'CustomerToken'
    createOneUser: 'User'
    updateOneUser: 'User'
    updateManyUser: 'AffectedRowsOutput'
    deleteOneUser: 'User'
    deleteManyUser: 'AffectedRowsOutput'
    upsertOneUser: 'User'
    createOneUserToken: 'UserToken'
    updateOneUserToken: 'UserToken'
    updateManyUserToken: 'AffectedRowsOutput'
    deleteOneUserToken: 'UserToken'
    deleteManyUserToken: 'AffectedRowsOutput'
    upsertOneUserToken: 'UserToken'
    createOneCoupon: 'Coupon'
    updateOneCoupon: 'Coupon'
    updateManyCoupon: 'AffectedRowsOutput'
    deleteOneCoupon: 'Coupon'
    deleteManyCoupon: 'AffectedRowsOutput'
    upsertOneCoupon: 'Coupon'
    createOneOrderItem: 'OrderItem'
    updateOneOrderItem: 'OrderItem'
    updateManyOrderItem: 'AffectedRowsOutput'
    deleteOneOrderItem: 'OrderItem'
    deleteManyOrderItem: 'AffectedRowsOutput'
    upsertOneOrderItem: 'OrderItem'
    createOneOrder: 'Order'
    updateOneOrder: 'Order'
    updateManyOrder: 'AffectedRowsOutput'
    deleteOneOrder: 'Order'
    deleteManyOrder: 'AffectedRowsOutput'
    upsertOneOrder: 'Order'
  },
  Restaurant: {
    id: 'String'
    name: 'String'
    email: 'String'
    logo: 'String'
    coverImage: 'String'
    plan: 'RestaurantPlan'
    restaurantPlanId: 'String'
    businessPhone: 'String'
    reservationPhone: 'String'
    url: 'String'
    cuisine: 'String'
    address: 'String'
    city: 'String'
    postCode: 'String'
    country: 'String'
    currency: 'String'
    priceRange: 'String'
    diningStyle: 'String'
    vat: 'String'
    serviceCharge: 'String'
    hasParkingFacilities: 'Boolean'
    hasPartyFacilities: 'Boolean'
    hasKidsZone: 'Boolean'
    isTakeaway: 'Boolean'
    isDelivery: 'Boolean'
    isReservation: 'Boolean'
    isAutoAcceptOrder: 'Boolean'
    isAutoAcceptReservation: 'Boolean'
    schedules: 'Schedule'
    deliveryZones: 'DeliveryZone'
    customers: 'Customer'
    orders: 'Order'
    orderItems: 'OrderItem'
    productCategory: 'ProductCategory'
    products: 'Product'
    users: 'User'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    RestaurantConfig: 'RestaurantConfig'
    CMSHome: 'CMSHome'
    CMSAbout: 'CMSAbout'
    CMSReview: 'CMSReview'
    CMSReservation: 'CMSReservation'
    CMSContact: 'CMSContact'
    RestaurantSocial: 'RestaurantSocial'
    RestaurantReview: 'RestaurantReview'
  }
  RestaurantPlan: {
    id: 'String'
    name: 'String'
    price: 'Float'
    isActive: 'Boolean'
    restaurants: 'Restaurant'
  }
  RestaurantConfig: {
    id: 'String'
    primaryColor: 'String'
    secondaryColor: 'String'
    isActive: 'Boolean'
    restaurant: 'Restaurant'
    restaurantId: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
  }
  RestaurantSocial: {
    id: 'String'
    facebook: 'String'
    instagram: 'String'
    pinterest: 'String'
    isActive: 'Boolean'
    restaurant: 'Restaurant'
    restaurantId: 'String'
  }
  RestaurantReview: {
    id: 'String'
    title: 'String'
    description: 'String'
    rating: 'String'
    isActive: 'Boolean'
    customer: 'Customer'
    restaurant: 'Restaurant'
    restaurantId: 'String'
    customerId: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
  }
  CMSHome: {
    id: 'String'
    heroHeading: 'String'
    heroDescription: 'String'
    heroImage: 'String'
    aboutHeading: 'String'
    aboutDescription: 'String'
    aboutImage: 'String'
    dealsHeading: 'String'
    dealsDescription: 'String'
    dealsImage: 'String'
    reservationHeading: 'String'
    reservationDescription: 'String'
    reservationImage: 'String'
    popularDishesHeading: 'String'
    popularDishesDescription: 'String'
    popularDishesImage: 'String'
    isActive: 'Boolean'
    restaurant: 'Restaurant'
    restaurantId: 'String'
  }
  CMSAbout: {
    id: 'String'
    headerHeading: 'String'
    headerDescription: 'String'
    headerImage: 'String'
    storyHeading: 'String'
    storyDescription: 'String'
    storyImage: 'String'
    isActive: 'Boolean'
    restaurant: 'Restaurant'
    restaurantId: 'String'
  }
  CMSReview: {
    id: 'String'
    headerHeading: 'String'
    headerDescription: 'String'
    headerImage: 'String'
    isActive: 'Boolean'
    restaurant: 'Restaurant'
    restaurantId: 'String'
  }
  CMSReservation: {
    id: 'String'
    headerHeading: 'String'
    headerDescription: 'String'
    headerImage: 'String'
    isActive: 'Boolean'
    restaurant: 'Restaurant'
    restaurantId: 'String'
  }
  CMSContact: {
    id: 'String'
    headerHeading: 'String'
    headerDescription: 'String'
    headerImage: 'String'
    isActive: 'Boolean'
    restaurant: 'Restaurant'
    restaurantId: 'String'
  }
  ProductCategory: {
    id: 'String'
    createdAt: 'DateTime'
    name: 'String'
    description: 'String'
    image: 'String'
    isActive: 'Boolean'
    isFeatured: 'Boolean'
    restaurants: 'Restaurant'
    restaurantId: 'String'
    Product: 'Product'
  }
  Product: {
    id: 'String'
    createdAt: 'DateTime'
    name: 'String'
    description: 'String'
    image: 'String'
    price: 'Int'
    spiceLevel: 'SpiceLevel'
    isPopular: 'Boolean'
    isActive: 'Boolean'
    ProductCategory: 'ProductCategory'
    productCategoryId: 'String'
    Restaurant: 'Restaurant'
    restaurantId: 'String'
    OrderItem: 'OrderItem'
  }
  Schedule: {
    id: 'String'
    createdAt: 'DateTime'
    day: 'String'
    openingTime: 'String'
    closingTime: 'String'
    deliveryTime: 'Int'
    takeawayTime: 'Int'
    Restaurant: 'Restaurant'
    restaurantId: 'String'
  }
  DeliveryZone: {
    id: 'String'
    createdAt: 'DateTime'
    zoneTitle: 'String'
    zonePostCode: 'String'
    deliveryFeeType: 'DeliveryFee'
    deliveryCharge: 'Int'
    minDeliveryAmount: 'Int'
    minDeliveryRadius: 'Int'
    maxDeliveryRadius: 'Int'
    Restaurant: 'Restaurant'
    restaurantId: 'String'
  }
  Customer: {
    id: 'String'
    createdAt: 'DateTime'
    firstName: 'String'
    lastName: 'String'
    email: 'String'
    password: 'String'
    phone: 'String'
    token: 'CustomerToken'
    addresses: 'CustomerAddress'
    orders: 'Order'
    restaurants: 'Restaurant'
    updatedAt: 'DateTime'
    RestaurantReview: 'RestaurantReview'
  }
  CustomerAddress: {
    id: 'String'
    createdAt: 'DateTime'
    streetAddress: 'String'
    city: 'String'
    postCode: 'String'
    country: 'String'
    Customer: 'Customer'
    customerId: 'String'
  }
  CustomerToken: {
    id: 'String'
    token: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    Customer: 'Customer'
    customerId: 'String'
  }
  User: {
    id: 'String'
    createdAt: 'DateTime'
    firstName: 'String'
    lastName: 'String'
    email: 'String'
    password: 'String'
    phone: 'String'
    token: 'UserToken'
    restaurants: 'Restaurant'
    role: 'Role'
  }
  UserToken: {
    id: 'String'
    token: 'String'
    provider: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    User: 'User'
    userId: 'String'
  }
  Coupon: {
    id: 'String'
    code: 'String'
    discount: 'Discount'
    value: 'Float'
    description: 'String'
    orders: 'Order'
  }
  OrderItem: {
    id: 'String'
    product: 'Product'
    quantity: 'Int'
    total: 'Int'
    spiceLevel: 'SpiceLevel'
    productId: 'String'
    Order: 'Order'
    orderId: 'Int'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    Restaurant: 'Restaurant'
    restaurantId: 'String'
  }
  Order: {
    id: 'Int'
    items: 'OrderItem'
    address: 'String'
    discount: 'Float'
    deliveryCharges: 'Float'
    vat: 'Float'
    serviceCharge: 'Float'
    total: 'Float'
    isAccepted: 'Boolean'
    Coupon: 'Coupon'
    couponId: 'String'
    restaurant: 'Restaurant'
    restaurantId: 'String'
    Customer: 'Customer'
    customerId: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
  }
}

// Helper to gather all methods relative to a model
interface NexusPrismaMethods {
  Restaurant: Typegen.NexusPrismaFields<'Restaurant'>
  RestaurantPlan: Typegen.NexusPrismaFields<'RestaurantPlan'>
  RestaurantConfig: Typegen.NexusPrismaFields<'RestaurantConfig'>
  RestaurantSocial: Typegen.NexusPrismaFields<'RestaurantSocial'>
  RestaurantReview: Typegen.NexusPrismaFields<'RestaurantReview'>
  CMSHome: Typegen.NexusPrismaFields<'CMSHome'>
  CMSAbout: Typegen.NexusPrismaFields<'CMSAbout'>
  CMSReview: Typegen.NexusPrismaFields<'CMSReview'>
  CMSReservation: Typegen.NexusPrismaFields<'CMSReservation'>
  CMSContact: Typegen.NexusPrismaFields<'CMSContact'>
  ProductCategory: Typegen.NexusPrismaFields<'ProductCategory'>
  Product: Typegen.NexusPrismaFields<'Product'>
  Schedule: Typegen.NexusPrismaFields<'Schedule'>
  DeliveryZone: Typegen.NexusPrismaFields<'DeliveryZone'>
  Customer: Typegen.NexusPrismaFields<'Customer'>
  CustomerAddress: Typegen.NexusPrismaFields<'CustomerAddress'>
  CustomerToken: Typegen.NexusPrismaFields<'CustomerToken'>
  User: Typegen.NexusPrismaFields<'User'>
  UserToken: Typegen.NexusPrismaFields<'UserToken'>
  Coupon: Typegen.NexusPrismaFields<'Coupon'>
  OrderItem: Typegen.NexusPrismaFields<'OrderItem'>
  Order: Typegen.NexusPrismaFields<'Order'>
  Query: Typegen.NexusPrismaFields<'Query'>
  Mutation: Typegen.NexusPrismaFields<'Mutation'>
}

interface NexusPrismaGenTypes {
  inputs: NexusPrismaInputs
  outputs: NexusPrismaOutputs
  methods: NexusPrismaMethods
  models: PrismaModels
  pagination: Pagination
  scalars: CustomScalars
}

declare global {
  interface NexusPrismaGen extends NexusPrismaGenTypes {}

  type NexusPrisma<
    TypeName extends string,
    ModelOrCrud extends 'model' | 'crud'
  > = Typegen.GetNexusPrisma<TypeName, ModelOrCrud>;
}
  