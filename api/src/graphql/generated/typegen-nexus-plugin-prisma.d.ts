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
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'email' | 'logo' | 'coverImage' | 'plan' | 'restaurantPlanId' | 'businessPhone' | 'reservationPhone' | 'url' | 'cuisine' | 'address' | 'city' | 'postCode' | 'country' | 'currency' | 'priceRange' | 'diningStyle' | 'vat' | 'serviceCharge' | 'hasParkingFacilities' | 'hasPartyFacilities' | 'hasKidsZone' | 'hasPickup' | 'hasDelivery' | 'hasReservation' | 'isAutoAcceptOrder' | 'isAutoAcceptReservation' | 'schedules' | 'deliveryZones' | 'customers' | 'orders' | 'orderItems' | 'productCategory' | 'products' | 'users' | 'coupons' | 'reviews' | 'socials' | 'createdAt' | 'updatedAt' | 'config' | 'offers' | 'CMSHome' | 'CMSAbout' | 'CMSReview' | 'CMSReservation' | 'CMSContact'
      ordering: 'id' | 'name' | 'email' | 'logo' | 'coverImage' | 'restaurantPlanId' | 'businessPhone' | 'reservationPhone' | 'url' | 'cuisine' | 'address' | 'city' | 'postCode' | 'country' | 'currency' | 'priceRange' | 'diningStyle' | 'vat' | 'serviceCharge' | 'hasParkingFacilities' | 'hasPartyFacilities' | 'hasKidsZone' | 'hasPickup' | 'hasDelivery' | 'hasReservation' | 'isAutoAcceptOrder' | 'isAutoAcceptReservation' | 'createdAt' | 'updatedAt'
    }
    restaurantPlans: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'price' | 'isActive' | 'restaurants'
      ordering: 'id' | 'name' | 'price' | 'isActive'
    }
    restaurantConfigs: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'domain' | 'primaryColor' | 'secondaryColor' | 'isActive' | 'hasDarkNavBg' | 'restaurant' | 'restaurantId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'domain' | 'primaryColor' | 'secondaryColor' | 'isActive' | 'hasDarkNavBg' | 'restaurantId' | 'createdAt' | 'updatedAt'
    }
    restaurantSocials: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'network' | 'url' | 'isActive' | 'restaurant' | 'restaurantId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'network' | 'url' | 'isActive' | 'restaurantId' | 'createdAt' | 'updatedAt'
    }
    restaurantReviews: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'title' | 'description' | 'rating' | 'isActive' | 'customer' | 'restaurant' | 'customerId' | 'createdAt' | 'updatedAt' | 'restaurantId'
      ordering: 'id' | 'title' | 'description' | 'rating' | 'isActive' | 'customerId' | 'createdAt' | 'updatedAt' | 'restaurantId'
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
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'name' | 'description' | 'image' | 'price' | 'spiceLevel' | 'isPopular' | 'isActive' | 'productCategory' | 'productCategoryId' | 'restaurant' | 'restaurantId' | 'orderItems'
      ordering: 'id' | 'createdAt' | 'name' | 'description' | 'image' | 'price' | 'spiceLevel' | 'isPopular' | 'isActive' | 'productCategoryId' | 'restaurantId'
    }
    schedules: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'day' | 'openingTime' | 'closingTime' | 'pickupTime' | 'restaurant' | 'restaurantId'
      ordering: 'id' | 'createdAt' | 'day' | 'openingTime' | 'closingTime' | 'pickupTime' | 'restaurantId'
    }
    deliveryZones: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'name' | 'deliveryTime' | 'isPreOrder' | 'preOrderInstructions' | 'postCode' | 'deliveryFeeType' | 'deliveryCharge' | 'minDeliveryAmount' | 'minDeliveryRadius' | 'maxDeliveryRadius' | 'restaurant' | 'restaurantId'
      ordering: 'id' | 'createdAt' | 'name' | 'deliveryTime' | 'isPreOrder' | 'preOrderInstructions' | 'postCode' | 'deliveryFeeType' | 'deliveryCharge' | 'minDeliveryAmount' | 'minDeliveryRadius' | 'maxDeliveryRadius' | 'restaurantId'
    }
    customers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'firstName' | 'lastName' | 'email' | 'password' | 'phone' | 'addresses' | 'orders' | 'restaurants' | 'updatedAt' | 'reviews'
      ordering: 'id' | 'createdAt' | 'firstName' | 'lastName' | 'email' | 'password' | 'phone' | 'updatedAt'
    }
    customerAddresses: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'streetAddress' | 'city' | 'postCode' | 'country' | 'customer' | 'customerId' | 'orders'
      ordering: 'id' | 'createdAt' | 'streetAddress' | 'city' | 'postCode' | 'country' | 'customerId'
    }
    users: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'firstName' | 'lastName' | 'email' | 'password' | 'phone' | 'restaurants' | 'role'
      ordering: 'id' | 'createdAt' | 'firstName' | 'lastName' | 'email' | 'password' | 'phone' | 'role'
    }
    offers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'image' | 'startDate' | 'endDate' | 'isActive' | 'restaurant' | 'orders' | 'restaurantId'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'image' | 'startDate' | 'endDate' | 'isActive' | 'restaurantId'
    }
    coupons: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'code' | 'discount' | 'value' | 'image' | 'startDate' | 'endDate' | 'description' | 'restaurant' | 'orders' | 'restaurantId'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'code' | 'discount' | 'value' | 'image' | 'startDate' | 'endDate' | 'description' | 'restaurantId'
    }
    orderItems: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'product' | 'quantity' | 'total' | 'spiceLevel' | 'productId' | 'order' | 'orderId' | 'createdAt' | 'updatedAt' | 'restaurant' | 'restaurantId'
      ordering: 'id' | 'quantity' | 'total' | 'spiceLevel' | 'productId' | 'orderId' | 'createdAt' | 'updatedAt' | 'restaurantId'
    }
    orders: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'items' | 'fulfilmentType' | 'address' | 'discount' | 'deliveryCharge' | 'vat' | 'serviceCharge' | 'total' | 'isAccepted' | 'Coupon' | 'couponId' | 'offer' | 'offerId' | 'restaurant' | 'restaurantId' | 'Customer' | 'customerId' | 'createdAt' | 'updatedAt' | 'customerAddressId'
      ordering: 'id' | 'fulfilmentType' | 'discount' | 'deliveryCharge' | 'vat' | 'serviceCharge' | 'total' | 'isAccepted' | 'couponId' | 'offerId' | 'restaurantId' | 'customerId' | 'createdAt' | 'updatedAt' | 'customerAddressId'
    }
  },
  Restaurant: {
    schedules: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'day' | 'openingTime' | 'closingTime' | 'pickupTime' | 'restaurant' | 'restaurantId'
      ordering: 'id' | 'createdAt' | 'day' | 'openingTime' | 'closingTime' | 'pickupTime' | 'restaurantId'
    }
    deliveryZones: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'name' | 'deliveryTime' | 'isPreOrder' | 'preOrderInstructions' | 'postCode' | 'deliveryFeeType' | 'deliveryCharge' | 'minDeliveryAmount' | 'minDeliveryRadius' | 'maxDeliveryRadius' | 'restaurant' | 'restaurantId'
      ordering: 'id' | 'createdAt' | 'name' | 'deliveryTime' | 'isPreOrder' | 'preOrderInstructions' | 'postCode' | 'deliveryFeeType' | 'deliveryCharge' | 'minDeliveryAmount' | 'minDeliveryRadius' | 'maxDeliveryRadius' | 'restaurantId'
    }
    customers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'firstName' | 'lastName' | 'email' | 'password' | 'phone' | 'addresses' | 'orders' | 'restaurants' | 'updatedAt' | 'reviews'
      ordering: 'id' | 'createdAt' | 'firstName' | 'lastName' | 'email' | 'password' | 'phone' | 'updatedAt'
    }
    orders: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'items' | 'fulfilmentType' | 'address' | 'discount' | 'deliveryCharge' | 'vat' | 'serviceCharge' | 'total' | 'isAccepted' | 'Coupon' | 'couponId' | 'offer' | 'offerId' | 'restaurant' | 'restaurantId' | 'Customer' | 'customerId' | 'createdAt' | 'updatedAt' | 'customerAddressId'
      ordering: 'id' | 'fulfilmentType' | 'discount' | 'deliveryCharge' | 'vat' | 'serviceCharge' | 'total' | 'isAccepted' | 'couponId' | 'offerId' | 'restaurantId' | 'customerId' | 'createdAt' | 'updatedAt' | 'customerAddressId'
    }
    orderItems: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'product' | 'quantity' | 'total' | 'spiceLevel' | 'productId' | 'order' | 'orderId' | 'createdAt' | 'updatedAt' | 'restaurant' | 'restaurantId'
      ordering: 'id' | 'quantity' | 'total' | 'spiceLevel' | 'productId' | 'orderId' | 'createdAt' | 'updatedAt' | 'restaurantId'
    }
    productCategory: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'name' | 'description' | 'image' | 'isActive' | 'isFeatured' | 'restaurants' | 'restaurantId' | 'Product'
      ordering: 'id' | 'createdAt' | 'name' | 'description' | 'image' | 'isActive' | 'isFeatured' | 'restaurantId'
    }
    products: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'name' | 'description' | 'image' | 'price' | 'spiceLevel' | 'isPopular' | 'isActive' | 'productCategory' | 'productCategoryId' | 'restaurant' | 'restaurantId' | 'orderItems'
      ordering: 'id' | 'createdAt' | 'name' | 'description' | 'image' | 'price' | 'spiceLevel' | 'isPopular' | 'isActive' | 'productCategoryId' | 'restaurantId'
    }
    users: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'firstName' | 'lastName' | 'email' | 'password' | 'phone' | 'restaurants' | 'role'
      ordering: 'id' | 'createdAt' | 'firstName' | 'lastName' | 'email' | 'password' | 'phone' | 'role'
    }
    coupons: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'code' | 'discount' | 'value' | 'image' | 'startDate' | 'endDate' | 'description' | 'restaurant' | 'orders' | 'restaurantId'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'code' | 'discount' | 'value' | 'image' | 'startDate' | 'endDate' | 'description' | 'restaurantId'
    }
    reviews: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'title' | 'description' | 'rating' | 'isActive' | 'customer' | 'restaurant' | 'customerId' | 'createdAt' | 'updatedAt' | 'restaurantId'
      ordering: 'id' | 'title' | 'description' | 'rating' | 'isActive' | 'customerId' | 'createdAt' | 'updatedAt' | 'restaurantId'
    }
    socials: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'network' | 'url' | 'isActive' | 'restaurant' | 'restaurantId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'network' | 'url' | 'isActive' | 'restaurantId' | 'createdAt' | 'updatedAt'
    }
    offers: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'image' | 'startDate' | 'endDate' | 'isActive' | 'restaurant' | 'orders' | 'restaurantId'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'image' | 'startDate' | 'endDate' | 'isActive' | 'restaurantId'
    }
  }
  RestaurantPlan: {
    restaurants: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'email' | 'logo' | 'coverImage' | 'plan' | 'restaurantPlanId' | 'businessPhone' | 'reservationPhone' | 'url' | 'cuisine' | 'address' | 'city' | 'postCode' | 'country' | 'currency' | 'priceRange' | 'diningStyle' | 'vat' | 'serviceCharge' | 'hasParkingFacilities' | 'hasPartyFacilities' | 'hasKidsZone' | 'hasPickup' | 'hasDelivery' | 'hasReservation' | 'isAutoAcceptOrder' | 'isAutoAcceptReservation' | 'schedules' | 'deliveryZones' | 'customers' | 'orders' | 'orderItems' | 'productCategory' | 'products' | 'users' | 'coupons' | 'reviews' | 'socials' | 'createdAt' | 'updatedAt' | 'config' | 'offers' | 'CMSHome' | 'CMSAbout' | 'CMSReview' | 'CMSReservation' | 'CMSContact'
      ordering: 'id' | 'name' | 'email' | 'logo' | 'coverImage' | 'restaurantPlanId' | 'businessPhone' | 'reservationPhone' | 'url' | 'cuisine' | 'address' | 'city' | 'postCode' | 'country' | 'currency' | 'priceRange' | 'diningStyle' | 'vat' | 'serviceCharge' | 'hasParkingFacilities' | 'hasPartyFacilities' | 'hasKidsZone' | 'hasPickup' | 'hasDelivery' | 'hasReservation' | 'isAutoAcceptOrder' | 'isAutoAcceptReservation' | 'createdAt' | 'updatedAt'
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
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'name' | 'description' | 'image' | 'price' | 'spiceLevel' | 'isPopular' | 'isActive' | 'productCategory' | 'productCategoryId' | 'restaurant' | 'restaurantId' | 'orderItems'
      ordering: 'id' | 'createdAt' | 'name' | 'description' | 'image' | 'price' | 'spiceLevel' | 'isPopular' | 'isActive' | 'productCategoryId' | 'restaurantId'
    }
  }
  Product: {
    orderItems: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'product' | 'quantity' | 'total' | 'spiceLevel' | 'productId' | 'order' | 'orderId' | 'createdAt' | 'updatedAt' | 'restaurant' | 'restaurantId'
      ordering: 'id' | 'quantity' | 'total' | 'spiceLevel' | 'productId' | 'orderId' | 'createdAt' | 'updatedAt' | 'restaurantId'
    }
  }
  Schedule: {

  }
  DeliveryZone: {

  }
  Customer: {
    addresses: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'streetAddress' | 'city' | 'postCode' | 'country' | 'customer' | 'customerId' | 'orders'
      ordering: 'id' | 'createdAt' | 'streetAddress' | 'city' | 'postCode' | 'country' | 'customerId'
    }
    orders: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'items' | 'fulfilmentType' | 'address' | 'discount' | 'deliveryCharge' | 'vat' | 'serviceCharge' | 'total' | 'isAccepted' | 'Coupon' | 'couponId' | 'offer' | 'offerId' | 'restaurant' | 'restaurantId' | 'Customer' | 'customerId' | 'createdAt' | 'updatedAt' | 'customerAddressId'
      ordering: 'id' | 'fulfilmentType' | 'discount' | 'deliveryCharge' | 'vat' | 'serviceCharge' | 'total' | 'isAccepted' | 'couponId' | 'offerId' | 'restaurantId' | 'customerId' | 'createdAt' | 'updatedAt' | 'customerAddressId'
    }
    restaurants: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'email' | 'logo' | 'coverImage' | 'plan' | 'restaurantPlanId' | 'businessPhone' | 'reservationPhone' | 'url' | 'cuisine' | 'address' | 'city' | 'postCode' | 'country' | 'currency' | 'priceRange' | 'diningStyle' | 'vat' | 'serviceCharge' | 'hasParkingFacilities' | 'hasPartyFacilities' | 'hasKidsZone' | 'hasPickup' | 'hasDelivery' | 'hasReservation' | 'isAutoAcceptOrder' | 'isAutoAcceptReservation' | 'schedules' | 'deliveryZones' | 'customers' | 'orders' | 'orderItems' | 'productCategory' | 'products' | 'users' | 'coupons' | 'reviews' | 'socials' | 'createdAt' | 'updatedAt' | 'config' | 'offers' | 'CMSHome' | 'CMSAbout' | 'CMSReview' | 'CMSReservation' | 'CMSContact'
      ordering: 'id' | 'name' | 'email' | 'logo' | 'coverImage' | 'restaurantPlanId' | 'businessPhone' | 'reservationPhone' | 'url' | 'cuisine' | 'address' | 'city' | 'postCode' | 'country' | 'currency' | 'priceRange' | 'diningStyle' | 'vat' | 'serviceCharge' | 'hasParkingFacilities' | 'hasPartyFacilities' | 'hasKidsZone' | 'hasPickup' | 'hasDelivery' | 'hasReservation' | 'isAutoAcceptOrder' | 'isAutoAcceptReservation' | 'createdAt' | 'updatedAt'
    }
    reviews: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'title' | 'description' | 'rating' | 'isActive' | 'customer' | 'restaurant' | 'customerId' | 'createdAt' | 'updatedAt' | 'restaurantId'
      ordering: 'id' | 'title' | 'description' | 'rating' | 'isActive' | 'customerId' | 'createdAt' | 'updatedAt' | 'restaurantId'
    }
  }
  CustomerAddress: {
    orders: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'items' | 'fulfilmentType' | 'address' | 'discount' | 'deliveryCharge' | 'vat' | 'serviceCharge' | 'total' | 'isAccepted' | 'Coupon' | 'couponId' | 'offer' | 'offerId' | 'restaurant' | 'restaurantId' | 'Customer' | 'customerId' | 'createdAt' | 'updatedAt' | 'customerAddressId'
      ordering: 'id' | 'fulfilmentType' | 'discount' | 'deliveryCharge' | 'vat' | 'serviceCharge' | 'total' | 'isAccepted' | 'couponId' | 'offerId' | 'restaurantId' | 'customerId' | 'createdAt' | 'updatedAt' | 'customerAddressId'
    }
  }
  User: {
    restaurants: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'email' | 'logo' | 'coverImage' | 'plan' | 'restaurantPlanId' | 'businessPhone' | 'reservationPhone' | 'url' | 'cuisine' | 'address' | 'city' | 'postCode' | 'country' | 'currency' | 'priceRange' | 'diningStyle' | 'vat' | 'serviceCharge' | 'hasParkingFacilities' | 'hasPartyFacilities' | 'hasKidsZone' | 'hasPickup' | 'hasDelivery' | 'hasReservation' | 'isAutoAcceptOrder' | 'isAutoAcceptReservation' | 'schedules' | 'deliveryZones' | 'customers' | 'orders' | 'orderItems' | 'productCategory' | 'products' | 'users' | 'coupons' | 'reviews' | 'socials' | 'createdAt' | 'updatedAt' | 'config' | 'offers' | 'CMSHome' | 'CMSAbout' | 'CMSReview' | 'CMSReservation' | 'CMSContact'
      ordering: 'id' | 'name' | 'email' | 'logo' | 'coverImage' | 'restaurantPlanId' | 'businessPhone' | 'reservationPhone' | 'url' | 'cuisine' | 'address' | 'city' | 'postCode' | 'country' | 'currency' | 'priceRange' | 'diningStyle' | 'vat' | 'serviceCharge' | 'hasParkingFacilities' | 'hasPartyFacilities' | 'hasKidsZone' | 'hasPickup' | 'hasDelivery' | 'hasReservation' | 'isAutoAcceptOrder' | 'isAutoAcceptReservation' | 'createdAt' | 'updatedAt'
    }
  }
  Offer: {
    orders: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'items' | 'fulfilmentType' | 'address' | 'discount' | 'deliveryCharge' | 'vat' | 'serviceCharge' | 'total' | 'isAccepted' | 'Coupon' | 'couponId' | 'offer' | 'offerId' | 'restaurant' | 'restaurantId' | 'Customer' | 'customerId' | 'createdAt' | 'updatedAt' | 'customerAddressId'
      ordering: 'id' | 'fulfilmentType' | 'discount' | 'deliveryCharge' | 'vat' | 'serviceCharge' | 'total' | 'isAccepted' | 'couponId' | 'offerId' | 'restaurantId' | 'customerId' | 'createdAt' | 'updatedAt' | 'customerAddressId'
    }
  }
  Coupon: {
    orders: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'items' | 'fulfilmentType' | 'address' | 'discount' | 'deliveryCharge' | 'vat' | 'serviceCharge' | 'total' | 'isAccepted' | 'Coupon' | 'couponId' | 'offer' | 'offerId' | 'restaurant' | 'restaurantId' | 'Customer' | 'customerId' | 'createdAt' | 'updatedAt' | 'customerAddressId'
      ordering: 'id' | 'fulfilmentType' | 'discount' | 'deliveryCharge' | 'vat' | 'serviceCharge' | 'total' | 'isAccepted' | 'couponId' | 'offerId' | 'restaurantId' | 'customerId' | 'createdAt' | 'updatedAt' | 'customerAddressId'
    }
  }
  OrderItem: {

  }
  Order: {
    items: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'product' | 'quantity' | 'total' | 'spiceLevel' | 'productId' | 'order' | 'orderId' | 'createdAt' | 'updatedAt' | 'restaurant' | 'restaurantId'
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
    vat: 'String'
    serviceCharge: 'String'
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
    offers: 'Offer'
    CMSHome: 'CMSHome'
    CMSAbout: 'CMSAbout'
    CMSReview: 'CMSReview'
    CMSReservation: 'CMSReservation'
    CMSContact: 'CMSContact'
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
    domain: 'String'
    primaryColor: 'String'
    secondaryColor: 'String'
    isActive: 'Boolean'
    hasDarkNavBg: 'Boolean'
    restaurant: 'Restaurant'
    restaurantId: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
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
    rating: 'String'
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
    price: 'Float'
    spiceLevel: 'SpiceLevel'
    isPopular: 'Boolean'
    isActive: 'Boolean'
    productCategory: 'ProductCategory'
    productCategoryId: 'String'
    restaurant: 'Restaurant'
    restaurantId: 'String'
    orderItems: 'OrderItem'
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
  }
  Customer: {
    id: 'String'
    createdAt: 'DateTime'
    firstName: 'String'
    lastName: 'String'
    email: 'String'
    password: 'String'
    phone: 'String'
    addresses: 'CustomerAddress'
    orders: 'Order'
    restaurants: 'Restaurant'
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
    address: 'CustomerAddress'
    discount: 'Float'
    deliveryCharge: 'Float'
    vat: 'Float'
    serviceCharge: 'Float'
    total: 'Float'
    isAccepted: 'Boolean'
    Coupon: 'Coupon'
    couponId: 'String'
    offer: 'Offer'
    offerId: 'String'
    restaurant: 'Restaurant'
    restaurantId: 'String'
    Customer: 'Customer'
    customerId: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    customerAddressId: 'String'
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
  