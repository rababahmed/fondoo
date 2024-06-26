import * as Typegen from '@kenchi/nexus-plugin-prisma/typegen'
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
  Subscription: Prisma.Subscription
  RestaurantConfig: Prisma.RestaurantConfig
  Domain: Prisma.Domain
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
  User: Prisma.User
  Offer: Prisma.Offer
  Coupon: Prisma.Coupon
  OrderItem: Prisma.OrderItem
  Order: Prisma.Order
}

// Prisma input types metadata
interface NexusPrismaInputs {
  Query: {
    restaurants: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'email' | 'logo' | 'coverImage' | 'plan' | 'restaurantPlanId' | 'businessPhone' | 'reservationPhone' | 'url' | 'cuisine' | 'address' | 'city' | 'postCode' | 'country' | 'currency' | 'priceRange' | 'diningStyle' | 'vat' | 'serviceCharge' | 'hasParkingFacilities' | 'hasPartyFacilities' | 'hasKidsZone' | 'hasPickup' | 'hasDelivery' | 'hasReservation' | 'isAutoAcceptOrder' | 'isAutoAcceptReservation' | 'schedules' | 'deliveryZones' | 'customers' | 'orders' | 'orderItems' | 'productCategory' | 'products' | 'users' | 'coupons' | 'reviews' | 'socials' | 'createdAt' | 'updatedAt' | 'config' | 'domains' | 'offers' | 'CMSHome' | 'CMSAbout' | 'CMSReview' | 'CMSReservation' | 'CMSContact' | 'subscription'
      ordering: 'id' | 'name' | 'email' | 'logo' | 'coverImage' | 'plan' | 'restaurantPlanId' | 'businessPhone' | 'reservationPhone' | 'url' | 'cuisine' | 'address' | 'city' | 'postCode' | 'country' | 'currency' | 'priceRange' | 'diningStyle' | 'vat' | 'serviceCharge' | 'hasParkingFacilities' | 'hasPartyFacilities' | 'hasKidsZone' | 'hasPickup' | 'hasDelivery' | 'hasReservation' | 'isAutoAcceptOrder' | 'isAutoAcceptReservation' | 'schedules' | 'deliveryZones' | 'customers' | 'orders' | 'orderItems' | 'productCategory' | 'products' | 'users' | 'coupons' | 'reviews' | 'socials' | 'createdAt' | 'updatedAt' | 'config' | 'domains' | 'offers' | 'CMSHome' | 'CMSAbout' | 'CMSReview' | 'CMSReservation' | 'CMSContact' | 'subscription'
    }
    restaurantPlans: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'price' | 'isActive' | 'paddleId' | 'subscriptions' | 'restaurants'
      ordering: 'id' | 'name' | 'price' | 'isActive' | 'paddleId' | 'subscriptions' | 'restaurants'
    }
    subscriptions: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'paddleSubscriptionId' | 'paddleCancelUrl' | 'paddleUpdateUrl' | 'restaurant' | 'restaurantId' | 'restaurantPlan' | 'restaurantPlanId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'paddleSubscriptionId' | 'paddleCancelUrl' | 'paddleUpdateUrl' | 'restaurant' | 'restaurantId' | 'restaurantPlan' | 'restaurantPlanId' | 'createdAt' | 'updatedAt'
    }
    restaurantConfigs: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'domains' | 'facebookPixelCode' | 'googleAnalyticsCode' | 'primaryColor' | 'secondaryColor' | 'isActive' | 'hasDarkNavBg' | 'restaurant' | 'restaurantId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'domains' | 'facebookPixelCode' | 'googleAnalyticsCode' | 'primaryColor' | 'secondaryColor' | 'isActive' | 'hasDarkNavBg' | 'restaurant' | 'restaurantId' | 'createdAt' | 'updatedAt'
    }
    domains: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'domain' | 'createdAt' | 'updatedAt' | 'restaurantConfig' | 'restaurantConfigId' | 'restaurant' | 'restaurantId'
      ordering: 'id' | 'domain' | 'createdAt' | 'updatedAt' | 'restaurantConfig' | 'restaurantConfigId' | 'restaurant' | 'restaurantId'
    }
    restaurantSocials: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'network' | 'url' | 'isActive' | 'restaurant' | 'restaurantId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'network' | 'url' | 'isActive' | 'restaurant' | 'restaurantId' | 'createdAt' | 'updatedAt'
    }
    restaurantReviews: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'title' | 'description' | 'rating' | 'isActive' | 'customer' | 'restaurant' | 'customerId' | 'createdAt' | 'updatedAt' | 'restaurantId'
      ordering: 'id' | 'title' | 'description' | 'rating' | 'isActive' | 'customer' | 'restaurant' | 'customerId' | 'createdAt' | 'updatedAt' | 'restaurantId'
    }
    cmsHomes: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'heroHeading' | 'heroDescription' | 'heroImage' | 'aboutHeading' | 'aboutDescription' | 'aboutImage' | 'dealsHeading' | 'dealsDescription' | 'dealsImage' | 'reservationHeading' | 'reservationDescription' | 'reservationImage' | 'popularDishesHeading' | 'popularDishesDescription' | 'popularDishesImage' | 'isActive' | 'restaurant' | 'restaurantId'
      ordering: 'id' | 'heroHeading' | 'heroDescription' | 'heroImage' | 'aboutHeading' | 'aboutDescription' | 'aboutImage' | 'dealsHeading' | 'dealsDescription' | 'dealsImage' | 'reservationHeading' | 'reservationDescription' | 'reservationImage' | 'popularDishesHeading' | 'popularDishesDescription' | 'popularDishesImage' | 'isActive' | 'restaurant' | 'restaurantId'
    }
    cmsAbouts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'headerHeading' | 'headerDescription' | 'headerImage' | 'storyHeading' | 'storyDescription' | 'storyImage' | 'isActive' | 'restaurant' | 'restaurantId'
      ordering: 'id' | 'headerHeading' | 'headerDescription' | 'headerImage' | 'storyHeading' | 'storyDescription' | 'storyImage' | 'isActive' | 'restaurant' | 'restaurantId'
    }
    cmsReviews: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'headerHeading' | 'headerDescription' | 'headerImage' | 'isActive' | 'restaurant' | 'restaurantId'
      ordering: 'id' | 'headerHeading' | 'headerDescription' | 'headerImage' | 'isActive' | 'restaurant' | 'restaurantId'
    }
    cmsReservations: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'headerHeading' | 'headerDescription' | 'headerImage' | 'isActive' | 'restaurant' | 'restaurantId'
      ordering: 'id' | 'headerHeading' | 'headerDescription' | 'headerImage' | 'isActive' | 'restaurant' | 'restaurantId'
    }
    cmsContacts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'headerHeading' | 'headerDescription' | 'headerImage' | 'isActive' | 'restaurant' | 'restaurantId'
      ordering: 'id' | 'headerHeading' | 'headerDescription' | 'headerImage' | 'isActive' | 'restaurant' | 'restaurantId'
    }
    productCategories: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'description' | 'image' | 'isActive' | 'isFeatured' | 'restaurants' | 'restaurantId' | 'Product' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'name' | 'description' | 'image' | 'isActive' | 'isFeatured' | 'restaurants' | 'restaurantId' | 'Product' | 'createdAt' | 'updatedAt'
    }
    products: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'description' | 'image' | 'price' | 'spiceLevel' | 'isFeatured' | 'isActive' | 'productCategory' | 'productCategoryId' | 'restaurant' | 'restaurantId' | 'orderItems' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'name' | 'description' | 'image' | 'price' | 'spiceLevel' | 'isFeatured' | 'isActive' | 'productCategory' | 'productCategoryId' | 'restaurant' | 'restaurantId' | 'orderItems' | 'createdAt' | 'updatedAt'
    }
    schedules: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'day' | 'openingTime' | 'closingTime' | 'pickupTime' | 'restaurant' | 'restaurantId'
      ordering: 'id' | 'createdAt' | 'day' | 'openingTime' | 'closingTime' | 'pickupTime' | 'restaurant' | 'restaurantId'
    }
    deliveryZones: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'name' | 'deliveryTime' | 'isPreOrder' | 'preOrderInstructions' | 'postCode' | 'deliveryFeeType' | 'deliveryCharge' | 'minDeliveryAmount' | 'minDeliveryRadius' | 'maxDeliveryRadius' | 'restaurant' | 'restaurantId' | 'orders'
      ordering: 'id' | 'createdAt' | 'name' | 'deliveryTime' | 'isPreOrder' | 'preOrderInstructions' | 'postCode' | 'deliveryFeeType' | 'deliveryCharge' | 'minDeliveryAmount' | 'minDeliveryRadius' | 'maxDeliveryRadius' | 'restaurant' | 'restaurantId' | 'orders'
    }
    customers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'firstName' | 'lastName' | 'email' | 'password' | 'phone' | 'addresses' | 'orders' | 'restaurants' | 'createdAt' | 'updatedAt' | 'reviews'
      ordering: 'id' | 'firstName' | 'lastName' | 'email' | 'password' | 'phone' | 'addresses' | 'orders' | 'restaurants' | 'createdAt' | 'updatedAt' | 'reviews'
    }
    customerAddresses: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'streetAddress' | 'city' | 'postCode' | 'country' | 'customer' | 'customerId' | 'orders'
      ordering: 'id' | 'createdAt' | 'streetAddress' | 'city' | 'postCode' | 'country' | 'customer' | 'customerId' | 'orders'
    }
    users: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'firstName' | 'lastName' | 'email' | 'password' | 'phone' | 'restaurants' | 'role'
      ordering: 'id' | 'createdAt' | 'firstName' | 'lastName' | 'email' | 'password' | 'phone' | 'restaurants' | 'role'
    }
    offers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'image' | 'startDate' | 'endDate' | 'isActive' | 'restaurant' | 'orders' | 'restaurantId'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'image' | 'startDate' | 'endDate' | 'isActive' | 'restaurant' | 'orders' | 'restaurantId'
    }
    coupons: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'code' | 'discount' | 'value' | 'image' | 'startDate' | 'endDate' | 'description' | 'restaurant' | 'orders' | 'restaurantId'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'code' | 'discount' | 'value' | 'image' | 'startDate' | 'endDate' | 'description' | 'restaurant' | 'orders' | 'restaurantId'
    }
    orderItems: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'product' | 'quantity' | 'total' | 'spiceLevel' | 'productId' | 'order' | 'orderId' | 'createdAt' | 'updatedAt' | 'restaurant' | 'restaurantId'
      ordering: 'id' | 'product' | 'quantity' | 'total' | 'spiceLevel' | 'productId' | 'order' | 'orderId' | 'createdAt' | 'updatedAt' | 'restaurant' | 'restaurantId'
    }
    orders: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'items' | 'fulfilmentType' | 'deliveryZone' | 'address' | 'discount' | 'deliveryCharge' | 'vat' | 'serviceCharge' | 'total' | 'isViewed' | 'isPreOrder' | 'status' | 'coupon' | 'couponId' | 'offer' | 'offerId' | 'restaurant' | 'restaurantId' | 'customer' | 'customerId' | 'createdAt' | 'updatedAt' | 'deliveryZoneId' | 'customerAddressId'
      ordering: 'id' | 'items' | 'fulfilmentType' | 'deliveryZone' | 'address' | 'discount' | 'deliveryCharge' | 'vat' | 'serviceCharge' | 'total' | 'isViewed' | 'isPreOrder' | 'status' | 'coupon' | 'couponId' | 'offer' | 'offerId' | 'restaurant' | 'restaurantId' | 'customer' | 'customerId' | 'createdAt' | 'updatedAt' | 'deliveryZoneId' | 'customerAddressId'
    }
  },
  Restaurant: {
    schedules: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'day' | 'openingTime' | 'closingTime' | 'pickupTime' | 'restaurant' | 'restaurantId'
      ordering: 'id' | 'createdAt' | 'day' | 'openingTime' | 'closingTime' | 'pickupTime' | 'restaurant' | 'restaurantId'
    }
    deliveryZones: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'name' | 'deliveryTime' | 'isPreOrder' | 'preOrderInstructions' | 'postCode' | 'deliveryFeeType' | 'deliveryCharge' | 'minDeliveryAmount' | 'minDeliveryRadius' | 'maxDeliveryRadius' | 'restaurant' | 'restaurantId' | 'orders'
      ordering: 'id' | 'createdAt' | 'name' | 'deliveryTime' | 'isPreOrder' | 'preOrderInstructions' | 'postCode' | 'deliveryFeeType' | 'deliveryCharge' | 'minDeliveryAmount' | 'minDeliveryRadius' | 'maxDeliveryRadius' | 'restaurant' | 'restaurantId' | 'orders'
    }
    customers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'firstName' | 'lastName' | 'email' | 'password' | 'phone' | 'addresses' | 'orders' | 'restaurants' | 'createdAt' | 'updatedAt' | 'reviews'
      ordering: 'id' | 'firstName' | 'lastName' | 'email' | 'password' | 'phone' | 'addresses' | 'orders' | 'restaurants' | 'createdAt' | 'updatedAt' | 'reviews'
    }
    orders: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'items' | 'fulfilmentType' | 'deliveryZone' | 'address' | 'discount' | 'deliveryCharge' | 'vat' | 'serviceCharge' | 'total' | 'isViewed' | 'isPreOrder' | 'status' | 'coupon' | 'couponId' | 'offer' | 'offerId' | 'restaurant' | 'restaurantId' | 'customer' | 'customerId' | 'createdAt' | 'updatedAt' | 'deliveryZoneId' | 'customerAddressId'
      ordering: 'id' | 'items' | 'fulfilmentType' | 'deliveryZone' | 'address' | 'discount' | 'deliveryCharge' | 'vat' | 'serviceCharge' | 'total' | 'isViewed' | 'isPreOrder' | 'status' | 'coupon' | 'couponId' | 'offer' | 'offerId' | 'restaurant' | 'restaurantId' | 'customer' | 'customerId' | 'createdAt' | 'updatedAt' | 'deliveryZoneId' | 'customerAddressId'
    }
    orderItems: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'product' | 'quantity' | 'total' | 'spiceLevel' | 'productId' | 'order' | 'orderId' | 'createdAt' | 'updatedAt' | 'restaurant' | 'restaurantId'
      ordering: 'id' | 'product' | 'quantity' | 'total' | 'spiceLevel' | 'productId' | 'order' | 'orderId' | 'createdAt' | 'updatedAt' | 'restaurant' | 'restaurantId'
    }
    productCategory: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'description' | 'image' | 'isActive' | 'isFeatured' | 'restaurants' | 'restaurantId' | 'Product' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'name' | 'description' | 'image' | 'isActive' | 'isFeatured' | 'restaurants' | 'restaurantId' | 'Product' | 'createdAt' | 'updatedAt'
    }
    products: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'description' | 'image' | 'price' | 'spiceLevel' | 'isFeatured' | 'isActive' | 'productCategory' | 'productCategoryId' | 'restaurant' | 'restaurantId' | 'orderItems' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'name' | 'description' | 'image' | 'price' | 'spiceLevel' | 'isFeatured' | 'isActive' | 'productCategory' | 'productCategoryId' | 'restaurant' | 'restaurantId' | 'orderItems' | 'createdAt' | 'updatedAt'
    }
    users: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'firstName' | 'lastName' | 'email' | 'password' | 'phone' | 'restaurants' | 'role'
      ordering: 'id' | 'createdAt' | 'firstName' | 'lastName' | 'email' | 'password' | 'phone' | 'restaurants' | 'role'
    }
    coupons: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'code' | 'discount' | 'value' | 'image' | 'startDate' | 'endDate' | 'description' | 'restaurant' | 'orders' | 'restaurantId'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'code' | 'discount' | 'value' | 'image' | 'startDate' | 'endDate' | 'description' | 'restaurant' | 'orders' | 'restaurantId'
    }
    reviews: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'title' | 'description' | 'rating' | 'isActive' | 'customer' | 'restaurant' | 'customerId' | 'createdAt' | 'updatedAt' | 'restaurantId'
      ordering: 'id' | 'title' | 'description' | 'rating' | 'isActive' | 'customer' | 'restaurant' | 'customerId' | 'createdAt' | 'updatedAt' | 'restaurantId'
    }
    socials: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'network' | 'url' | 'isActive' | 'restaurant' | 'restaurantId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'network' | 'url' | 'isActive' | 'restaurant' | 'restaurantId' | 'createdAt' | 'updatedAt'
    }
    domains: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'domain' | 'createdAt' | 'updatedAt' | 'restaurantConfig' | 'restaurantConfigId' | 'restaurant' | 'restaurantId'
      ordering: 'id' | 'domain' | 'createdAt' | 'updatedAt' | 'restaurantConfig' | 'restaurantConfigId' | 'restaurant' | 'restaurantId'
    }
    offers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'image' | 'startDate' | 'endDate' | 'isActive' | 'restaurant' | 'orders' | 'restaurantId'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'image' | 'startDate' | 'endDate' | 'isActive' | 'restaurant' | 'orders' | 'restaurantId'
    }
  }
  RestaurantPlan: {
    subscriptions: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'paddleSubscriptionId' | 'paddleCancelUrl' | 'paddleUpdateUrl' | 'restaurant' | 'restaurantId' | 'restaurantPlan' | 'restaurantPlanId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'paddleSubscriptionId' | 'paddleCancelUrl' | 'paddleUpdateUrl' | 'restaurant' | 'restaurantId' | 'restaurantPlan' | 'restaurantPlanId' | 'createdAt' | 'updatedAt'
    }
    restaurants: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'email' | 'logo' | 'coverImage' | 'plan' | 'restaurantPlanId' | 'businessPhone' | 'reservationPhone' | 'url' | 'cuisine' | 'address' | 'city' | 'postCode' | 'country' | 'currency' | 'priceRange' | 'diningStyle' | 'vat' | 'serviceCharge' | 'hasParkingFacilities' | 'hasPartyFacilities' | 'hasKidsZone' | 'hasPickup' | 'hasDelivery' | 'hasReservation' | 'isAutoAcceptOrder' | 'isAutoAcceptReservation' | 'schedules' | 'deliveryZones' | 'customers' | 'orders' | 'orderItems' | 'productCategory' | 'products' | 'users' | 'coupons' | 'reviews' | 'socials' | 'createdAt' | 'updatedAt' | 'config' | 'domains' | 'offers' | 'CMSHome' | 'CMSAbout' | 'CMSReview' | 'CMSReservation' | 'CMSContact' | 'subscription'
      ordering: 'id' | 'name' | 'email' | 'logo' | 'coverImage' | 'plan' | 'restaurantPlanId' | 'businessPhone' | 'reservationPhone' | 'url' | 'cuisine' | 'address' | 'city' | 'postCode' | 'country' | 'currency' | 'priceRange' | 'diningStyle' | 'vat' | 'serviceCharge' | 'hasParkingFacilities' | 'hasPartyFacilities' | 'hasKidsZone' | 'hasPickup' | 'hasDelivery' | 'hasReservation' | 'isAutoAcceptOrder' | 'isAutoAcceptReservation' | 'schedules' | 'deliveryZones' | 'customers' | 'orders' | 'orderItems' | 'productCategory' | 'products' | 'users' | 'coupons' | 'reviews' | 'socials' | 'createdAt' | 'updatedAt' | 'config' | 'domains' | 'offers' | 'CMSHome' | 'CMSAbout' | 'CMSReview' | 'CMSReservation' | 'CMSContact' | 'subscription'
    }
  }
  Subscription: {

  }
  RestaurantConfig: {
    domains: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'domain' | 'createdAt' | 'updatedAt' | 'restaurantConfig' | 'restaurantConfigId' | 'restaurant' | 'restaurantId'
      ordering: 'id' | 'domain' | 'createdAt' | 'updatedAt' | 'restaurantConfig' | 'restaurantConfigId' | 'restaurant' | 'restaurantId'
    }
  }
  Domain: {

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
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'description' | 'image' | 'price' | 'spiceLevel' | 'isFeatured' | 'isActive' | 'productCategory' | 'productCategoryId' | 'restaurant' | 'restaurantId' | 'orderItems' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'name' | 'description' | 'image' | 'price' | 'spiceLevel' | 'isFeatured' | 'isActive' | 'productCategory' | 'productCategoryId' | 'restaurant' | 'restaurantId' | 'orderItems' | 'createdAt' | 'updatedAt'
    }
  }
  Product: {
    orderItems: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'product' | 'quantity' | 'total' | 'spiceLevel' | 'productId' | 'order' | 'orderId' | 'createdAt' | 'updatedAt' | 'restaurant' | 'restaurantId'
      ordering: 'id' | 'product' | 'quantity' | 'total' | 'spiceLevel' | 'productId' | 'order' | 'orderId' | 'createdAt' | 'updatedAt' | 'restaurant' | 'restaurantId'
    }
  }
  Schedule: {

  }
  DeliveryZone: {
    orders: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'items' | 'fulfilmentType' | 'deliveryZone' | 'address' | 'discount' | 'deliveryCharge' | 'vat' | 'serviceCharge' | 'total' | 'isViewed' | 'isPreOrder' | 'status' | 'coupon' | 'couponId' | 'offer' | 'offerId' | 'restaurant' | 'restaurantId' | 'customer' | 'customerId' | 'createdAt' | 'updatedAt' | 'deliveryZoneId' | 'customerAddressId'
      ordering: 'id' | 'items' | 'fulfilmentType' | 'deliveryZone' | 'address' | 'discount' | 'deliveryCharge' | 'vat' | 'serviceCharge' | 'total' | 'isViewed' | 'isPreOrder' | 'status' | 'coupon' | 'couponId' | 'offer' | 'offerId' | 'restaurant' | 'restaurantId' | 'customer' | 'customerId' | 'createdAt' | 'updatedAt' | 'deliveryZoneId' | 'customerAddressId'
    }
  }
  Customer: {
    addresses: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'streetAddress' | 'city' | 'postCode' | 'country' | 'customer' | 'customerId' | 'orders'
      ordering: 'id' | 'createdAt' | 'streetAddress' | 'city' | 'postCode' | 'country' | 'customer' | 'customerId' | 'orders'
    }
    orders: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'items' | 'fulfilmentType' | 'deliveryZone' | 'address' | 'discount' | 'deliveryCharge' | 'vat' | 'serviceCharge' | 'total' | 'isViewed' | 'isPreOrder' | 'status' | 'coupon' | 'couponId' | 'offer' | 'offerId' | 'restaurant' | 'restaurantId' | 'customer' | 'customerId' | 'createdAt' | 'updatedAt' | 'deliveryZoneId' | 'customerAddressId'
      ordering: 'id' | 'items' | 'fulfilmentType' | 'deliveryZone' | 'address' | 'discount' | 'deliveryCharge' | 'vat' | 'serviceCharge' | 'total' | 'isViewed' | 'isPreOrder' | 'status' | 'coupon' | 'couponId' | 'offer' | 'offerId' | 'restaurant' | 'restaurantId' | 'customer' | 'customerId' | 'createdAt' | 'updatedAt' | 'deliveryZoneId' | 'customerAddressId'
    }
    restaurants: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'email' | 'logo' | 'coverImage' | 'plan' | 'restaurantPlanId' | 'businessPhone' | 'reservationPhone' | 'url' | 'cuisine' | 'address' | 'city' | 'postCode' | 'country' | 'currency' | 'priceRange' | 'diningStyle' | 'vat' | 'serviceCharge' | 'hasParkingFacilities' | 'hasPartyFacilities' | 'hasKidsZone' | 'hasPickup' | 'hasDelivery' | 'hasReservation' | 'isAutoAcceptOrder' | 'isAutoAcceptReservation' | 'schedules' | 'deliveryZones' | 'customers' | 'orders' | 'orderItems' | 'productCategory' | 'products' | 'users' | 'coupons' | 'reviews' | 'socials' | 'createdAt' | 'updatedAt' | 'config' | 'domains' | 'offers' | 'CMSHome' | 'CMSAbout' | 'CMSReview' | 'CMSReservation' | 'CMSContact' | 'subscription'
      ordering: 'id' | 'name' | 'email' | 'logo' | 'coverImage' | 'plan' | 'restaurantPlanId' | 'businessPhone' | 'reservationPhone' | 'url' | 'cuisine' | 'address' | 'city' | 'postCode' | 'country' | 'currency' | 'priceRange' | 'diningStyle' | 'vat' | 'serviceCharge' | 'hasParkingFacilities' | 'hasPartyFacilities' | 'hasKidsZone' | 'hasPickup' | 'hasDelivery' | 'hasReservation' | 'isAutoAcceptOrder' | 'isAutoAcceptReservation' | 'schedules' | 'deliveryZones' | 'customers' | 'orders' | 'orderItems' | 'productCategory' | 'products' | 'users' | 'coupons' | 'reviews' | 'socials' | 'createdAt' | 'updatedAt' | 'config' | 'domains' | 'offers' | 'CMSHome' | 'CMSAbout' | 'CMSReview' | 'CMSReservation' | 'CMSContact' | 'subscription'
    }
    reviews: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'title' | 'description' | 'rating' | 'isActive' | 'customer' | 'restaurant' | 'customerId' | 'createdAt' | 'updatedAt' | 'restaurantId'
      ordering: 'id' | 'title' | 'description' | 'rating' | 'isActive' | 'customer' | 'restaurant' | 'customerId' | 'createdAt' | 'updatedAt' | 'restaurantId'
    }
  }
  CustomerAddress: {
    orders: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'items' | 'fulfilmentType' | 'deliveryZone' | 'address' | 'discount' | 'deliveryCharge' | 'vat' | 'serviceCharge' | 'total' | 'isViewed' | 'isPreOrder' | 'status' | 'coupon' | 'couponId' | 'offer' | 'offerId' | 'restaurant' | 'restaurantId' | 'customer' | 'customerId' | 'createdAt' | 'updatedAt' | 'deliveryZoneId' | 'customerAddressId'
      ordering: 'id' | 'items' | 'fulfilmentType' | 'deliveryZone' | 'address' | 'discount' | 'deliveryCharge' | 'vat' | 'serviceCharge' | 'total' | 'isViewed' | 'isPreOrder' | 'status' | 'coupon' | 'couponId' | 'offer' | 'offerId' | 'restaurant' | 'restaurantId' | 'customer' | 'customerId' | 'createdAt' | 'updatedAt' | 'deliveryZoneId' | 'customerAddressId'
    }
  }
  User: {
    restaurants: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'email' | 'logo' | 'coverImage' | 'plan' | 'restaurantPlanId' | 'businessPhone' | 'reservationPhone' | 'url' | 'cuisine' | 'address' | 'city' | 'postCode' | 'country' | 'currency' | 'priceRange' | 'diningStyle' | 'vat' | 'serviceCharge' | 'hasParkingFacilities' | 'hasPartyFacilities' | 'hasKidsZone' | 'hasPickup' | 'hasDelivery' | 'hasReservation' | 'isAutoAcceptOrder' | 'isAutoAcceptReservation' | 'schedules' | 'deliveryZones' | 'customers' | 'orders' | 'orderItems' | 'productCategory' | 'products' | 'users' | 'coupons' | 'reviews' | 'socials' | 'createdAt' | 'updatedAt' | 'config' | 'domains' | 'offers' | 'CMSHome' | 'CMSAbout' | 'CMSReview' | 'CMSReservation' | 'CMSContact' | 'subscription'
      ordering: 'id' | 'name' | 'email' | 'logo' | 'coverImage' | 'plan' | 'restaurantPlanId' | 'businessPhone' | 'reservationPhone' | 'url' | 'cuisine' | 'address' | 'city' | 'postCode' | 'country' | 'currency' | 'priceRange' | 'diningStyle' | 'vat' | 'serviceCharge' | 'hasParkingFacilities' | 'hasPartyFacilities' | 'hasKidsZone' | 'hasPickup' | 'hasDelivery' | 'hasReservation' | 'isAutoAcceptOrder' | 'isAutoAcceptReservation' | 'schedules' | 'deliveryZones' | 'customers' | 'orders' | 'orderItems' | 'productCategory' | 'products' | 'users' | 'coupons' | 'reviews' | 'socials' | 'createdAt' | 'updatedAt' | 'config' | 'domains' | 'offers' | 'CMSHome' | 'CMSAbout' | 'CMSReview' | 'CMSReservation' | 'CMSContact' | 'subscription'
    }
  }
  Offer: {
    orders: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'items' | 'fulfilmentType' | 'deliveryZone' | 'address' | 'discount' | 'deliveryCharge' | 'vat' | 'serviceCharge' | 'total' | 'isViewed' | 'isPreOrder' | 'status' | 'coupon' | 'couponId' | 'offer' | 'offerId' | 'restaurant' | 'restaurantId' | 'customer' | 'customerId' | 'createdAt' | 'updatedAt' | 'deliveryZoneId' | 'customerAddressId'
      ordering: 'id' | 'items' | 'fulfilmentType' | 'deliveryZone' | 'address' | 'discount' | 'deliveryCharge' | 'vat' | 'serviceCharge' | 'total' | 'isViewed' | 'isPreOrder' | 'status' | 'coupon' | 'couponId' | 'offer' | 'offerId' | 'restaurant' | 'restaurantId' | 'customer' | 'customerId' | 'createdAt' | 'updatedAt' | 'deliveryZoneId' | 'customerAddressId'
    }
  }
  Coupon: {
    orders: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'items' | 'fulfilmentType' | 'deliveryZone' | 'address' | 'discount' | 'deliveryCharge' | 'vat' | 'serviceCharge' | 'total' | 'isViewed' | 'isPreOrder' | 'status' | 'coupon' | 'couponId' | 'offer' | 'offerId' | 'restaurant' | 'restaurantId' | 'customer' | 'customerId' | 'createdAt' | 'updatedAt' | 'deliveryZoneId' | 'customerAddressId'
      ordering: 'id' | 'items' | 'fulfilmentType' | 'deliveryZone' | 'address' | 'discount' | 'deliveryCharge' | 'vat' | 'serviceCharge' | 'total' | 'isViewed' | 'isPreOrder' | 'status' | 'coupon' | 'couponId' | 'offer' | 'offerId' | 'restaurant' | 'restaurantId' | 'customer' | 'customerId' | 'createdAt' | 'updatedAt' | 'deliveryZoneId' | 'customerAddressId'
    }
  }
  OrderItem: {

  }
  Order: {
    items: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'product' | 'quantity' | 'total' | 'spiceLevel' | 'productId' | 'order' | 'orderId' | 'createdAt' | 'updatedAt' | 'restaurant' | 'restaurantId'
      ordering: 'id' | 'product' | 'quantity' | 'total' | 'spiceLevel' | 'productId' | 'order' | 'orderId' | 'createdAt' | 'updatedAt' | 'restaurant' | 'restaurantId'
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
    subscription: 'Subscription'
    subscriptions: 'Subscription'
    restaurantConfig: 'RestaurantConfig'
    restaurantConfigs: 'RestaurantConfig'
    domain: 'Domain'
    domains: 'Domain'
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
    user: 'User'
    users: 'User'
    offer: 'Offer'
    offers: 'Offer'
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
    createOneSubscription: 'Subscription'
    updateOneSubscription: 'Subscription'
    updateManySubscription: 'AffectedRowsOutput'
    deleteOneSubscription: 'Subscription'
    deleteManySubscription: 'AffectedRowsOutput'
    upsertOneSubscription: 'Subscription'
    createOneRestaurantConfig: 'RestaurantConfig'
    updateOneRestaurantConfig: 'RestaurantConfig'
    updateManyRestaurantConfig: 'AffectedRowsOutput'
    deleteOneRestaurantConfig: 'RestaurantConfig'
    deleteManyRestaurantConfig: 'AffectedRowsOutput'
    upsertOneRestaurantConfig: 'RestaurantConfig'
    createOneDomain: 'Domain'
    updateOneDomain: 'Domain'
    updateManyDomain: 'AffectedRowsOutput'
    deleteOneDomain: 'Domain'
    deleteManyDomain: 'AffectedRowsOutput'
    upsertOneDomain: 'Domain'
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
    createOneUser: 'User'
    updateOneUser: 'User'
    updateManyUser: 'AffectedRowsOutput'
    deleteOneUser: 'User'
    deleteManyUser: 'AffectedRowsOutput'
    upsertOneUser: 'User'
    createOneOffer: 'Offer'
    updateOneOffer: 'Offer'
    updateManyOffer: 'AffectedRowsOutput'
    deleteOneOffer: 'Offer'
    deleteManyOffer: 'AffectedRowsOutput'
    upsertOneOffer: 'Offer'
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
    vat: 'Float'
    serviceCharge: 'Float'
    hasParkingFacilities: 'Boolean'
    hasPartyFacilities: 'Boolean'
    hasKidsZone: 'Boolean'
    hasPickup: 'Boolean'
    hasDelivery: 'Boolean'
    hasReservation: 'Boolean'
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
    coupons: 'Coupon'
    reviews: 'RestaurantReview'
    socials: 'RestaurantSocial'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    config: 'RestaurantConfig'
    domains: 'Domain'
    offers: 'Offer'
    CMSHome: 'CMSHome'
    CMSAbout: 'CMSAbout'
    CMSReview: 'CMSReview'
    CMSReservation: 'CMSReservation'
    CMSContact: 'CMSContact'
    subscription: 'Subscription'
  }
  RestaurantPlan: {
    id: 'String'
    name: 'String'
    price: 'Float'
    isActive: 'Boolean'
    paddleId: 'String'
    subscriptions: 'Subscription'
    restaurants: 'Restaurant'
  }
  Subscription: {
    id: 'String'
    paddleSubscriptionId: 'String'
    paddleCancelUrl: 'String'
    paddleUpdateUrl: 'String'
    restaurant: 'Restaurant'
    restaurantId: 'String'
    restaurantPlan: 'RestaurantPlan'
    restaurantPlanId: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
  }
  RestaurantConfig: {
    id: 'String'
    domains: 'Domain'
    facebookPixelCode: 'String'
    googleAnalyticsCode: 'String'
    primaryColor: 'String'
    secondaryColor: 'String'
    isActive: 'Boolean'
    hasDarkNavBg: 'Boolean'
    restaurant: 'Restaurant'
    restaurantId: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
  }
  Domain: {
    id: 'String'
    domain: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    restaurantConfig: 'RestaurantConfig'
    restaurantConfigId: 'String'
    restaurant: 'Restaurant'
    restaurantId: 'String'
  }
  RestaurantSocial: {
    id: 'String'
    network: 'String'
    url: 'String'
    isActive: 'Boolean'
    restaurant: 'Restaurant'
    restaurantId: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
  }
  RestaurantReview: {
    id: 'String'
    title: 'String'
    description: 'String'
    rating: 'Int'
    isActive: 'Boolean'
    customer: 'Customer'
    restaurant: 'Restaurant'
    customerId: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    restaurantId: 'String'
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
    name: 'String'
    description: 'String'
    image: 'String'
    isActive: 'Boolean'
    isFeatured: 'Boolean'
    restaurants: 'Restaurant'
    restaurantId: 'String'
    Product: 'Product'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
  }
  Product: {
    id: 'String'
    name: 'String'
    description: 'String'
    image: 'String'
    price: 'Float'
    spiceLevel: 'SpiceLevel'
    isFeatured: 'Boolean'
    isActive: 'Boolean'
    productCategory: 'ProductCategory'
    productCategoryId: 'String'
    restaurant: 'Restaurant'
    restaurantId: 'String'
    orderItems: 'OrderItem'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
  }
  Schedule: {
    id: 'String'
    createdAt: 'DateTime'
    day: 'String'
    openingTime: 'String'
    closingTime: 'String'
    pickupTime: 'Int'
    restaurant: 'Restaurant'
    restaurantId: 'String'
  }
  DeliveryZone: {
    id: 'String'
    createdAt: 'DateTime'
    name: 'String'
    deliveryTime: 'Int'
    isPreOrder: 'Boolean'
    preOrderInstructions: 'String'
    postCode: 'String'
    deliveryFeeType: 'DeliveryFee'
    deliveryCharge: 'Float'
    minDeliveryAmount: 'Float'
    minDeliveryRadius: 'Float'
    maxDeliveryRadius: 'Float'
    restaurant: 'Restaurant'
    restaurantId: 'String'
    orders: 'Order'
  }
  Customer: {
    id: 'String'
    firstName: 'String'
    lastName: 'String'
    email: 'String'
    password: 'String'
    phone: 'String'
    addresses: 'CustomerAddress'
    orders: 'Order'
    restaurants: 'Restaurant'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    reviews: 'RestaurantReview'
  }
  CustomerAddress: {
    id: 'String'
    createdAt: 'DateTime'
    streetAddress: 'String'
    city: 'String'
    postCode: 'String'
    country: 'String'
    customer: 'Customer'
    customerId: 'String'
    orders: 'Order'
  }
  User: {
    id: 'String'
    createdAt: 'DateTime'
    firstName: 'String'
    lastName: 'String'
    email: 'String'
    password: 'String'
    phone: 'String'
    restaurants: 'Restaurant'
    role: 'Role'
  }
  Offer: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    name: 'String'
    description: 'String'
    image: 'String'
    startDate: 'String'
    endDate: 'String'
    isActive: 'Boolean'
    restaurant: 'Restaurant'
    orders: 'Order'
    restaurantId: 'String'
  }
  Coupon: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    code: 'String'
    discount: 'Discount'
    value: 'Float'
    image: 'String'
    startDate: 'String'
    endDate: 'String'
    description: 'String'
    restaurant: 'Restaurant'
    orders: 'Order'
    restaurantId: 'String'
  }
  OrderItem: {
    id: 'String'
    product: 'Product'
    quantity: 'Int'
    total: 'Float'
    spiceLevel: 'SpiceLevel'
    productId: 'String'
    order: 'Order'
    orderId: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    restaurant: 'Restaurant'
    restaurantId: 'String'
  }
  Order: {
    id: 'String'
    items: 'OrderItem'
    fulfilmentType: 'FulfilmentType'
    deliveryZone: 'DeliveryZone'
    address: 'CustomerAddress'
    discount: 'Float'
    deliveryCharge: 'Float'
    vat: 'Float'
    serviceCharge: 'Float'
    total: 'Float'
    isViewed: 'Boolean'
    isPreOrder: 'Boolean'
    status: 'Status'
    coupon: 'Coupon'
    couponId: 'String'
    offer: 'Offer'
    offerId: 'String'
    restaurant: 'Restaurant'
    restaurantId: 'String'
    customer: 'Customer'
    customerId: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    deliveryZoneId: 'String'
    customerAddressId: 'String'
  }
}

// Helper to gather all methods relative to a model
interface NexusPrismaMethods {
  Restaurant: Typegen.NexusPrismaFields<'Restaurant'>
  RestaurantPlan: Typegen.NexusPrismaFields<'RestaurantPlan'>
  Subscription: Typegen.NexusPrismaFields<'Subscription'>
  RestaurantConfig: Typegen.NexusPrismaFields<'RestaurantConfig'>
  Domain: Typegen.NexusPrismaFields<'Domain'>
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
  User: Typegen.NexusPrismaFields<'User'>
  Offer: Typegen.NexusPrismaFields<'Offer'>
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
  