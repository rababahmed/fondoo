import { ClassType } from "type-graphql";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";
import * as argsTypes from "./resolvers/crud/args.index";

const crudResolversMap = {
  Restaurant: crudResolvers.RestaurantCrudResolver,
  ProductCategory: crudResolvers.ProductCategoryCrudResolver,
  Product: crudResolvers.ProductCrudResolver,
  CartElement: crudResolvers.CartElementCrudResolver,
  OrderElement: crudResolvers.OrderElementCrudResolver,
  Order: crudResolvers.OrderCrudResolver,
  Schedule: crudResolvers.ScheduleCrudResolver,
  DeliveryZone: crudResolvers.DeliveryZoneCrudResolver,
  Customer: crudResolvers.CustomerCrudResolver,
  CustomerAddress: crudResolvers.CustomerAddressCrudResolver,
  CustomerToken: crudResolvers.CustomerTokenCrudResolver,
  User: crudResolvers.UserCrudResolver,
  UserToken: crudResolvers.UserTokenCrudResolver
};
const relationResolversMap = {
  Restaurant: relationResolvers.RestaurantRelationsResolver,
  ProductCategory: relationResolvers.ProductCategoryRelationsResolver,
  Product: relationResolvers.ProductRelationsResolver,
  CartElement: relationResolvers.CartElementRelationsResolver,
  OrderElement: relationResolvers.OrderElementRelationsResolver,
  Order: relationResolvers.OrderRelationsResolver,
  Schedule: relationResolvers.ScheduleRelationsResolver,
  DeliveryZone: relationResolvers.DeliveryZoneRelationsResolver,
  Customer: relationResolvers.CustomerRelationsResolver,
  CustomerAddress: relationResolvers.CustomerAddressRelationsResolver,
  CustomerToken: relationResolvers.CustomerTokenRelationsResolver,
  User: relationResolvers.UserRelationsResolver,
  UserToken: relationResolvers.UserTokenRelationsResolver
};
const actionResolversMap = {
  Restaurant: {
    restaurant: actionResolvers.FindUniqueRestaurantResolver,
    findFirstRestaurant: actionResolvers.FindFirstRestaurantResolver,
    restaurants: actionResolvers.FindManyRestaurantResolver,
    createRestaurant: actionResolvers.CreateRestaurantResolver,
    createManyRestaurant: actionResolvers.CreateManyRestaurantResolver,
    deleteRestaurant: actionResolvers.DeleteRestaurantResolver,
    updateRestaurant: actionResolvers.UpdateRestaurantResolver,
    deleteManyRestaurant: actionResolvers.DeleteManyRestaurantResolver,
    updateManyRestaurant: actionResolvers.UpdateManyRestaurantResolver,
    upsertRestaurant: actionResolvers.UpsertRestaurantResolver,
    aggregateRestaurant: actionResolvers.AggregateRestaurantResolver,
    groupByRestaurant: actionResolvers.GroupByRestaurantResolver
  },
  ProductCategory: {
    productCategory: actionResolvers.FindUniqueProductCategoryResolver,
    findFirstProductCategory: actionResolvers.FindFirstProductCategoryResolver,
    productCategories: actionResolvers.FindManyProductCategoryResolver,
    createProductCategory: actionResolvers.CreateProductCategoryResolver,
    createManyProductCategory: actionResolvers.CreateManyProductCategoryResolver,
    deleteProductCategory: actionResolvers.DeleteProductCategoryResolver,
    updateProductCategory: actionResolvers.UpdateProductCategoryResolver,
    deleteManyProductCategory: actionResolvers.DeleteManyProductCategoryResolver,
    updateManyProductCategory: actionResolvers.UpdateManyProductCategoryResolver,
    upsertProductCategory: actionResolvers.UpsertProductCategoryResolver,
    aggregateProductCategory: actionResolvers.AggregateProductCategoryResolver,
    groupByProductCategory: actionResolvers.GroupByProductCategoryResolver
  },
  Product: {
    product: actionResolvers.FindUniqueProductResolver,
    findFirstProduct: actionResolvers.FindFirstProductResolver,
    products: actionResolvers.FindManyProductResolver,
    createProduct: actionResolvers.CreateProductResolver,
    createManyProduct: actionResolvers.CreateManyProductResolver,
    deleteProduct: actionResolvers.DeleteProductResolver,
    updateProduct: actionResolvers.UpdateProductResolver,
    deleteManyProduct: actionResolvers.DeleteManyProductResolver,
    updateManyProduct: actionResolvers.UpdateManyProductResolver,
    upsertProduct: actionResolvers.UpsertProductResolver,
    aggregateProduct: actionResolvers.AggregateProductResolver,
    groupByProduct: actionResolvers.GroupByProductResolver
  },
  CartElement: {
    cartElement: actionResolvers.FindUniqueCartElementResolver,
    findFirstCartElement: actionResolvers.FindFirstCartElementResolver,
    cartElements: actionResolvers.FindManyCartElementResolver,
    createCartElement: actionResolvers.CreateCartElementResolver,
    createManyCartElement: actionResolvers.CreateManyCartElementResolver,
    deleteCartElement: actionResolvers.DeleteCartElementResolver,
    updateCartElement: actionResolvers.UpdateCartElementResolver,
    deleteManyCartElement: actionResolvers.DeleteManyCartElementResolver,
    updateManyCartElement: actionResolvers.UpdateManyCartElementResolver,
    upsertCartElement: actionResolvers.UpsertCartElementResolver,
    aggregateCartElement: actionResolvers.AggregateCartElementResolver,
    groupByCartElement: actionResolvers.GroupByCartElementResolver
  },
  OrderElement: {
    orderElement: actionResolvers.FindUniqueOrderElementResolver,
    findFirstOrderElement: actionResolvers.FindFirstOrderElementResolver,
    orderElements: actionResolvers.FindManyOrderElementResolver,
    createOrderElement: actionResolvers.CreateOrderElementResolver,
    createManyOrderElement: actionResolvers.CreateManyOrderElementResolver,
    deleteOrderElement: actionResolvers.DeleteOrderElementResolver,
    updateOrderElement: actionResolvers.UpdateOrderElementResolver,
    deleteManyOrderElement: actionResolvers.DeleteManyOrderElementResolver,
    updateManyOrderElement: actionResolvers.UpdateManyOrderElementResolver,
    upsertOrderElement: actionResolvers.UpsertOrderElementResolver,
    aggregateOrderElement: actionResolvers.AggregateOrderElementResolver,
    groupByOrderElement: actionResolvers.GroupByOrderElementResolver
  },
  Order: {
    order: actionResolvers.FindUniqueOrderResolver,
    findFirstOrder: actionResolvers.FindFirstOrderResolver,
    orders: actionResolvers.FindManyOrderResolver,
    createOrder: actionResolvers.CreateOrderResolver,
    createManyOrder: actionResolvers.CreateManyOrderResolver,
    deleteOrder: actionResolvers.DeleteOrderResolver,
    updateOrder: actionResolvers.UpdateOrderResolver,
    deleteManyOrder: actionResolvers.DeleteManyOrderResolver,
    updateManyOrder: actionResolvers.UpdateManyOrderResolver,
    upsertOrder: actionResolvers.UpsertOrderResolver,
    aggregateOrder: actionResolvers.AggregateOrderResolver,
    groupByOrder: actionResolvers.GroupByOrderResolver
  },
  Schedule: {
    schedule: actionResolvers.FindUniqueScheduleResolver,
    findFirstSchedule: actionResolvers.FindFirstScheduleResolver,
    schedules: actionResolvers.FindManyScheduleResolver,
    createSchedule: actionResolvers.CreateScheduleResolver,
    createManySchedule: actionResolvers.CreateManyScheduleResolver,
    deleteSchedule: actionResolvers.DeleteScheduleResolver,
    updateSchedule: actionResolvers.UpdateScheduleResolver,
    deleteManySchedule: actionResolvers.DeleteManyScheduleResolver,
    updateManySchedule: actionResolvers.UpdateManyScheduleResolver,
    upsertSchedule: actionResolvers.UpsertScheduleResolver,
    aggregateSchedule: actionResolvers.AggregateScheduleResolver,
    groupBySchedule: actionResolvers.GroupByScheduleResolver
  },
  DeliveryZone: {
    deliveryZone: actionResolvers.FindUniqueDeliveryZoneResolver,
    findFirstDeliveryZone: actionResolvers.FindFirstDeliveryZoneResolver,
    deliveryZones: actionResolvers.FindManyDeliveryZoneResolver,
    createDeliveryZone: actionResolvers.CreateDeliveryZoneResolver,
    createManyDeliveryZone: actionResolvers.CreateManyDeliveryZoneResolver,
    deleteDeliveryZone: actionResolvers.DeleteDeliveryZoneResolver,
    updateDeliveryZone: actionResolvers.UpdateDeliveryZoneResolver,
    deleteManyDeliveryZone: actionResolvers.DeleteManyDeliveryZoneResolver,
    updateManyDeliveryZone: actionResolvers.UpdateManyDeliveryZoneResolver,
    upsertDeliveryZone: actionResolvers.UpsertDeliveryZoneResolver,
    aggregateDeliveryZone: actionResolvers.AggregateDeliveryZoneResolver,
    groupByDeliveryZone: actionResolvers.GroupByDeliveryZoneResolver
  },
  Customer: {
    customer: actionResolvers.FindUniqueCustomerResolver,
    findFirstCustomer: actionResolvers.FindFirstCustomerResolver,
    customers: actionResolvers.FindManyCustomerResolver,
    createCustomer: actionResolvers.CreateCustomerResolver,
    createManyCustomer: actionResolvers.CreateManyCustomerResolver,
    deleteCustomer: actionResolvers.DeleteCustomerResolver,
    updateCustomer: actionResolvers.UpdateCustomerResolver,
    deleteManyCustomer: actionResolvers.DeleteManyCustomerResolver,
    updateManyCustomer: actionResolvers.UpdateManyCustomerResolver,
    upsertCustomer: actionResolvers.UpsertCustomerResolver,
    aggregateCustomer: actionResolvers.AggregateCustomerResolver,
    groupByCustomer: actionResolvers.GroupByCustomerResolver
  },
  CustomerAddress: {
    customerAddress: actionResolvers.FindUniqueCustomerAddressResolver,
    findFirstCustomerAddress: actionResolvers.FindFirstCustomerAddressResolver,
    customerAddresses: actionResolvers.FindManyCustomerAddressResolver,
    createCustomerAddress: actionResolvers.CreateCustomerAddressResolver,
    createManyCustomerAddress: actionResolvers.CreateManyCustomerAddressResolver,
    deleteCustomerAddress: actionResolvers.DeleteCustomerAddressResolver,
    updateCustomerAddress: actionResolvers.UpdateCustomerAddressResolver,
    deleteManyCustomerAddress: actionResolvers.DeleteManyCustomerAddressResolver,
    updateManyCustomerAddress: actionResolvers.UpdateManyCustomerAddressResolver,
    upsertCustomerAddress: actionResolvers.UpsertCustomerAddressResolver,
    aggregateCustomerAddress: actionResolvers.AggregateCustomerAddressResolver,
    groupByCustomerAddress: actionResolvers.GroupByCustomerAddressResolver
  },
  CustomerToken: {
    customerToken: actionResolvers.FindUniqueCustomerTokenResolver,
    findFirstCustomerToken: actionResolvers.FindFirstCustomerTokenResolver,
    customerTokens: actionResolvers.FindManyCustomerTokenResolver,
    createCustomerToken: actionResolvers.CreateCustomerTokenResolver,
    createManyCustomerToken: actionResolvers.CreateManyCustomerTokenResolver,
    deleteCustomerToken: actionResolvers.DeleteCustomerTokenResolver,
    updateCustomerToken: actionResolvers.UpdateCustomerTokenResolver,
    deleteManyCustomerToken: actionResolvers.DeleteManyCustomerTokenResolver,
    updateManyCustomerToken: actionResolvers.UpdateManyCustomerTokenResolver,
    upsertCustomerToken: actionResolvers.UpsertCustomerTokenResolver,
    aggregateCustomerToken: actionResolvers.AggregateCustomerTokenResolver,
    groupByCustomerToken: actionResolvers.GroupByCustomerTokenResolver
  },
  User: {
    user: actionResolvers.FindUniqueUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    createUser: actionResolvers.CreateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    deleteUser: actionResolvers.DeleteUserResolver,
    updateUser: actionResolvers.UpdateUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    upsertUser: actionResolvers.UpsertUserResolver,
    aggregateUser: actionResolvers.AggregateUserResolver,
    groupByUser: actionResolvers.GroupByUserResolver
  },
  UserToken: {
    userToken: actionResolvers.FindUniqueUserTokenResolver,
    findFirstUserToken: actionResolvers.FindFirstUserTokenResolver,
    userTokens: actionResolvers.FindManyUserTokenResolver,
    createUserToken: actionResolvers.CreateUserTokenResolver,
    createManyUserToken: actionResolvers.CreateManyUserTokenResolver,
    deleteUserToken: actionResolvers.DeleteUserTokenResolver,
    updateUserToken: actionResolvers.UpdateUserTokenResolver,
    deleteManyUserToken: actionResolvers.DeleteManyUserTokenResolver,
    updateManyUserToken: actionResolvers.UpdateManyUserTokenResolver,
    upsertUserToken: actionResolvers.UpsertUserTokenResolver,
    aggregateUserToken: actionResolvers.AggregateUserTokenResolver,
    groupByUserToken: actionResolvers.GroupByUserTokenResolver
  }
};
const resolversInfo = {
  Restaurant: ["restaurant", "findFirstRestaurant", "restaurants", "createRestaurant", "createManyRestaurant", "deleteRestaurant", "updateRestaurant", "deleteManyRestaurant", "updateManyRestaurant", "upsertRestaurant", "aggregateRestaurant", "groupByRestaurant"],
  ProductCategory: ["productCategory", "findFirstProductCategory", "productCategories", "createProductCategory", "createManyProductCategory", "deleteProductCategory", "updateProductCategory", "deleteManyProductCategory", "updateManyProductCategory", "upsertProductCategory", "aggregateProductCategory", "groupByProductCategory"],
  Product: ["product", "findFirstProduct", "products", "createProduct", "createManyProduct", "deleteProduct", "updateProduct", "deleteManyProduct", "updateManyProduct", "upsertProduct", "aggregateProduct", "groupByProduct"],
  CartElement: ["cartElement", "findFirstCartElement", "cartElements", "createCartElement", "createManyCartElement", "deleteCartElement", "updateCartElement", "deleteManyCartElement", "updateManyCartElement", "upsertCartElement", "aggregateCartElement", "groupByCartElement"],
  OrderElement: ["orderElement", "findFirstOrderElement", "orderElements", "createOrderElement", "createManyOrderElement", "deleteOrderElement", "updateOrderElement", "deleteManyOrderElement", "updateManyOrderElement", "upsertOrderElement", "aggregateOrderElement", "groupByOrderElement"],
  Order: ["order", "findFirstOrder", "orders", "createOrder", "createManyOrder", "deleteOrder", "updateOrder", "deleteManyOrder", "updateManyOrder", "upsertOrder", "aggregateOrder", "groupByOrder"],
  Schedule: ["schedule", "findFirstSchedule", "schedules", "createSchedule", "createManySchedule", "deleteSchedule", "updateSchedule", "deleteManySchedule", "updateManySchedule", "upsertSchedule", "aggregateSchedule", "groupBySchedule"],
  DeliveryZone: ["deliveryZone", "findFirstDeliveryZone", "deliveryZones", "createDeliveryZone", "createManyDeliveryZone", "deleteDeliveryZone", "updateDeliveryZone", "deleteManyDeliveryZone", "updateManyDeliveryZone", "upsertDeliveryZone", "aggregateDeliveryZone", "groupByDeliveryZone"],
  Customer: ["customer", "findFirstCustomer", "customers", "createCustomer", "createManyCustomer", "deleteCustomer", "updateCustomer", "deleteManyCustomer", "updateManyCustomer", "upsertCustomer", "aggregateCustomer", "groupByCustomer"],
  CustomerAddress: ["customerAddress", "findFirstCustomerAddress", "customerAddresses", "createCustomerAddress", "createManyCustomerAddress", "deleteCustomerAddress", "updateCustomerAddress", "deleteManyCustomerAddress", "updateManyCustomerAddress", "upsertCustomerAddress", "aggregateCustomerAddress", "groupByCustomerAddress"],
  CustomerToken: ["customerToken", "findFirstCustomerToken", "customerTokens", "createCustomerToken", "createManyCustomerToken", "deleteCustomerToken", "updateCustomerToken", "deleteManyCustomerToken", "updateManyCustomerToken", "upsertCustomerToken", "aggregateCustomerToken", "groupByCustomerToken"],
  User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
  UserToken: ["userToken", "findFirstUserToken", "userTokens", "createUserToken", "createManyUserToken", "deleteUserToken", "updateUserToken", "deleteManyUserToken", "updateManyUserToken", "upsertUserToken", "aggregateUserToken", "groupByUserToken"]
};
const relationResolversInfo = {
  Restaurant: ["products", "schedule", "deliveryZones", "customers", "orders", "productCategory", "users"],
  ProductCategory: ["restaurants", "Product", "OrderElement"],
  Product: ["category", "Restaurant", "Order", "CartElement"],
  CartElement: ["product", "customer"],
  OrderElement: ["category", "Order"],
  Order: ["elements", "customerAddress", "restaurant", "customer", "product"],
  Schedule: ["Restaurant"],
  DeliveryZone: ["Restaurant"],
  Customer: ["token", "address", "orders", "cart", "Restaurant"],
  CustomerAddress: ["Customer", "Order"],
  CustomerToken: ["Customer"],
  User: ["token", "restaurants"],
  UserToken: ["User"]
};
const modelsInfo = {
  Restaurant: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt"],
  ProductCategory: ["id", "createdAt", "name", "description", "image", "isActive", "isFeatured", "restaurantId"],
  Product: ["id", "createdAt", "name", "description", "image", "price", "spiceLevel", "isPopular", "isActive", "restaurantId", "orderId", "productCategoryId"],
  CartElement: ["id", "quantity", "customerId", "productId", "createdAt", "updatedAt"],
  OrderElement: ["id", "code", "name", "description", "image", "price", "addonText", "orderId", "productCategoryId", "createdAt", "updatedAt"],
  Order: ["id", "charges", "total", "isAccepted", "restaurantId", "customerId", "customerAddressId", "createdAt", "updatedAt"],
  Schedule: ["id", "createdAt", "openingTime", "closingTime", "minDeliveryAmount", "deliveryTime", "takeawayTime", "restaurantId"],
  DeliveryZone: ["id", "createdAt", "zoneTitle", "zonePostCode", "deliveryFeeType", "deliveryCharge", "minDeliveryAmount", "minDeliveryRadius", "maxDeliveryRadius", "restaurantId"],
  Customer: ["id", "createdAt", "firstName", "lastName", "email", "password", "phone", "restaurantId", "updatedAt"],
  CustomerAddress: ["id", "createdAt", "streetAddress", "city", "postCode", "country", "customerId"],
  CustomerToken: ["id", "token", "createdAt", "updatedAt", "customerId"],
  User: ["id", "createdAt", "fullName", "email", "password", "phone", "role"],
  UserToken: ["id", "token", "createdAt", "updatedAt", "userId"]
};
const inputsInfo = {
  RestaurantWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "products", "schedule", "deliveryZones", "customers", "orders", "productCategory", "updatedAt", "users"],
  RestaurantOrderByInput: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt"],
  RestaurantWhereUniqueInput: ["id"],
  RestaurantScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt"],
  ProductCategoryWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "name", "description", "image", "isActive", "isFeatured", "restaurants", "restaurantId", "Product", "OrderElement"],
  ProductCategoryOrderByInput: ["id", "createdAt", "name", "description", "image", "isActive", "isFeatured", "restaurantId"],
  ProductCategoryWhereUniqueInput: ["id"],
  ProductCategoryScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "name", "description", "image", "isActive", "isFeatured", "restaurantId"],
  ProductWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "name", "description", "image", "price", "spiceLevel", "category", "isPopular", "isActive", "Restaurant", "restaurantId", "Order", "orderId", "CartElement", "productCategoryId"],
  ProductOrderByInput: ["id", "createdAt", "name", "description", "image", "price", "spiceLevel", "isPopular", "isActive", "restaurantId", "orderId", "productCategoryId"],
  ProductWhereUniqueInput: ["id"],
  ProductScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "name", "description", "image", "price", "spiceLevel", "isPopular", "isActive", "restaurantId", "orderId", "productCategoryId"],
  CartElementWhereInput: ["AND", "OR", "NOT", "id", "quantity", "product", "customer", "customerId", "productId", "createdAt", "updatedAt"],
  CartElementOrderByInput: ["id", "quantity", "customerId", "productId", "createdAt", "updatedAt"],
  CartElementWhereUniqueInput: ["id"],
  CartElementScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "quantity", "customerId", "productId", "createdAt", "updatedAt"],
  OrderElementWhereInput: ["AND", "OR", "NOT", "id", "code", "name", "description", "image", "price", "category", "addonText", "Order", "orderId", "productCategoryId", "createdAt", "updatedAt"],
  OrderElementOrderByInput: ["id", "code", "name", "description", "image", "price", "addonText", "orderId", "productCategoryId", "createdAt", "updatedAt"],
  OrderElementWhereUniqueInput: ["id", "code"],
  OrderElementScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "code", "name", "description", "image", "price", "addonText", "orderId", "productCategoryId", "createdAt", "updatedAt"],
  OrderWhereInput: ["AND", "OR", "NOT", "id", "elements", "charges", "total", "isAccepted", "customerAddress", "restaurant", "restaurantId", "customer", "customerId", "product", "customerAddressId", "createdAt", "updatedAt"],
  OrderOrderByInput: ["id", "charges", "total", "isAccepted", "restaurantId", "customerId", "customerAddressId", "createdAt", "updatedAt"],
  OrderWhereUniqueInput: ["id"],
  OrderScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "charges", "total", "isAccepted", "restaurantId", "customerId", "customerAddressId", "createdAt", "updatedAt"],
  ScheduleWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "openingTime", "closingTime", "minDeliveryAmount", "deliveryTime", "takeawayTime", "Restaurant", "restaurantId"],
  ScheduleOrderByInput: ["id", "createdAt", "openingTime", "closingTime", "minDeliveryAmount", "deliveryTime", "takeawayTime", "restaurantId"],
  ScheduleWhereUniqueInput: ["id"],
  ScheduleScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "openingTime", "closingTime", "minDeliveryAmount", "deliveryTime", "takeawayTime", "restaurantId"],
  DeliveryZoneWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "zoneTitle", "zonePostCode", "deliveryFeeType", "deliveryCharge", "minDeliveryAmount", "minDeliveryRadius", "maxDeliveryRadius", "Restaurant", "restaurantId"],
  DeliveryZoneOrderByInput: ["id", "createdAt", "zoneTitle", "zonePostCode", "deliveryFeeType", "deliveryCharge", "minDeliveryAmount", "minDeliveryRadius", "maxDeliveryRadius", "restaurantId"],
  DeliveryZoneWhereUniqueInput: ["id"],
  DeliveryZoneScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "zoneTitle", "zonePostCode", "deliveryFeeType", "deliveryCharge", "minDeliveryAmount", "minDeliveryRadius", "maxDeliveryRadius", "restaurantId"],
  CustomerWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "firstName", "lastName", "email", "password", "phone", "token", "address", "orders", "cart", "Restaurant", "restaurantId", "updatedAt"],
  CustomerOrderByInput: ["id", "createdAt", "firstName", "lastName", "email", "password", "phone", "restaurantId", "updatedAt"],
  CustomerWhereUniqueInput: ["id", "email"],
  CustomerScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "firstName", "lastName", "email", "password", "phone", "restaurantId", "updatedAt"],
  CustomerAddressWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "streetAddress", "city", "postCode", "country", "Customer", "customerId", "Order"],
  CustomerAddressOrderByInput: ["id", "createdAt", "streetAddress", "city", "postCode", "country", "customerId"],
  CustomerAddressWhereUniqueInput: ["id"],
  CustomerAddressScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "streetAddress", "city", "postCode", "country", "customerId"],
  CustomerTokenWhereInput: ["AND", "OR", "NOT", "id", "token", "createdAt", "updatedAt", "Customer", "customerId"],
  CustomerTokenOrderByInput: ["id", "token", "createdAt", "updatedAt", "customerId"],
  CustomerTokenWhereUniqueInput: ["id"],
  CustomerTokenScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "token", "createdAt", "updatedAt", "customerId"],
  UserWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "fullName", "email", "password", "phone", "token", "role", "restaurants"],
  UserOrderByInput: ["id", "createdAt", "fullName", "email", "password", "phone", "role"],
  UserWhereUniqueInput: ["id", "email"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "fullName", "email", "password", "phone", "role"],
  UserTokenWhereInput: ["AND", "OR", "NOT", "id", "token", "createdAt", "updatedAt", "User", "userId"],
  UserTokenOrderByInput: ["id", "token", "createdAt", "updatedAt", "userId"],
  UserTokenWhereUniqueInput: ["id"],
  UserTokenScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "token", "createdAt", "updatedAt", "userId"],
  RestaurantCreateInput: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt", "products", "schedule", "deliveryZones", "customers", "orders", "productCategory", "users"],
  RestaurantUpdateInput: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt", "products", "schedule", "deliveryZones", "customers", "orders", "productCategory", "users"],
  RestaurantCreateManyInput: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt"],
  RestaurantUpdateManyMutationInput: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt"],
  ProductCategoryCreateInput: ["id", "createdAt", "name", "description", "image", "isActive", "isFeatured", "restaurants", "Product", "OrderElement"],
  ProductCategoryUpdateInput: ["id", "createdAt", "name", "description", "image", "isActive", "isFeatured", "restaurants", "Product", "OrderElement"],
  ProductCategoryCreateManyInput: ["id", "createdAt", "name", "description", "image", "isActive", "isFeatured", "restaurantId"],
  ProductCategoryUpdateManyMutationInput: ["id", "createdAt", "name", "description", "image", "isActive", "isFeatured"],
  ProductCreateInput: ["id", "createdAt", "name", "description", "image", "price", "spiceLevel", "isPopular", "isActive", "category", "Restaurant", "Order", "CartElement"],
  ProductUpdateInput: ["id", "createdAt", "name", "description", "image", "price", "spiceLevel", "isPopular", "isActive", "category", "Restaurant", "Order", "CartElement"],
  ProductCreateManyInput: ["id", "createdAt", "name", "description", "image", "price", "spiceLevel", "isPopular", "isActive", "restaurantId", "orderId", "productCategoryId"],
  ProductUpdateManyMutationInput: ["id", "createdAt", "name", "description", "image", "price", "spiceLevel", "isPopular", "isActive"],
  CartElementCreateInput: ["id", "quantity", "createdAt", "updatedAt", "product", "customer"],
  CartElementUpdateInput: ["id", "quantity", "createdAt", "updatedAt", "product", "customer"],
  CartElementCreateManyInput: ["id", "quantity", "customerId", "productId", "createdAt", "updatedAt"],
  CartElementUpdateManyMutationInput: ["id", "quantity", "createdAt", "updatedAt"],
  OrderElementCreateInput: ["id", "code", "name", "description", "image", "price", "addonText", "createdAt", "updatedAt", "category", "Order"],
  OrderElementUpdateInput: ["id", "code", "name", "description", "image", "price", "addonText", "createdAt", "updatedAt", "category", "Order"],
  OrderElementCreateManyInput: ["id", "code", "name", "description", "image", "price", "addonText", "orderId", "productCategoryId", "createdAt", "updatedAt"],
  OrderElementUpdateManyMutationInput: ["id", "code", "name", "description", "image", "price", "addonText", "createdAt", "updatedAt"],
  OrderCreateInput: ["charges", "total", "isAccepted", "createdAt", "updatedAt", "elements", "customerAddress", "restaurant", "customer", "product"],
  OrderUpdateInput: ["charges", "total", "isAccepted", "createdAt", "updatedAt", "elements", "customerAddress", "restaurant", "customer", "product"],
  OrderCreateManyInput: ["id", "charges", "total", "isAccepted", "restaurantId", "customerId", "customerAddressId", "createdAt", "updatedAt"],
  OrderUpdateManyMutationInput: ["charges", "total", "isAccepted", "createdAt", "updatedAt"],
  ScheduleCreateInput: ["createdAt", "openingTime", "closingTime", "minDeliveryAmount", "deliveryTime", "takeawayTime", "Restaurant"],
  ScheduleUpdateInput: ["createdAt", "openingTime", "closingTime", "minDeliveryAmount", "deliveryTime", "takeawayTime", "Restaurant"],
  ScheduleCreateManyInput: ["id", "createdAt", "openingTime", "closingTime", "minDeliveryAmount", "deliveryTime", "takeawayTime", "restaurantId"],
  ScheduleUpdateManyMutationInput: ["createdAt", "openingTime", "closingTime", "minDeliveryAmount", "deliveryTime", "takeawayTime"],
  DeliveryZoneCreateInput: ["createdAt", "zoneTitle", "zonePostCode", "deliveryFeeType", "deliveryCharge", "minDeliveryAmount", "minDeliveryRadius", "maxDeliveryRadius", "Restaurant"],
  DeliveryZoneUpdateInput: ["createdAt", "zoneTitle", "zonePostCode", "deliveryFeeType", "deliveryCharge", "minDeliveryAmount", "minDeliveryRadius", "maxDeliveryRadius", "Restaurant"],
  DeliveryZoneCreateManyInput: ["id", "createdAt", "zoneTitle", "zonePostCode", "deliveryFeeType", "deliveryCharge", "minDeliveryAmount", "minDeliveryRadius", "maxDeliveryRadius", "restaurantId"],
  DeliveryZoneUpdateManyMutationInput: ["createdAt", "zoneTitle", "zonePostCode", "deliveryFeeType", "deliveryCharge", "minDeliveryAmount", "minDeliveryRadius", "maxDeliveryRadius"],
  CustomerCreateInput: ["createdAt", "firstName", "lastName", "email", "password", "phone", "updatedAt", "token", "address", "orders", "cart", "Restaurant"],
  CustomerUpdateInput: ["createdAt", "firstName", "lastName", "email", "password", "phone", "updatedAt", "token", "address", "orders", "cart", "Restaurant"],
  CustomerCreateManyInput: ["id", "createdAt", "firstName", "lastName", "email", "password", "phone", "restaurantId", "updatedAt"],
  CustomerUpdateManyMutationInput: ["createdAt", "firstName", "lastName", "email", "password", "phone", "updatedAt"],
  CustomerAddressCreateInput: ["createdAt", "streetAddress", "city", "postCode", "country", "Customer", "Order"],
  CustomerAddressUpdateInput: ["createdAt", "streetAddress", "city", "postCode", "country", "Customer", "Order"],
  CustomerAddressCreateManyInput: ["id", "createdAt", "streetAddress", "city", "postCode", "country", "customerId"],
  CustomerAddressUpdateManyMutationInput: ["createdAt", "streetAddress", "city", "postCode", "country"],
  CustomerTokenCreateInput: ["token", "createdAt", "updatedAt", "Customer"],
  CustomerTokenUpdateInput: ["token", "createdAt", "updatedAt", "Customer"],
  CustomerTokenCreateManyInput: ["id", "token", "createdAt", "updatedAt", "customerId"],
  CustomerTokenUpdateManyMutationInput: ["token", "createdAt", "updatedAt"],
  UserCreateInput: ["createdAt", "fullName", "email", "password", "phone", "role", "token", "restaurants"],
  UserUpdateInput: ["createdAt", "fullName", "email", "password", "phone", "role", "token", "restaurants"],
  UserCreateManyInput: ["id", "createdAt", "fullName", "email", "password", "phone", "role"],
  UserUpdateManyMutationInput: ["createdAt", "fullName", "email", "password", "phone", "role"],
  UserTokenCreateInput: ["token", "createdAt", "updatedAt", "User"],
  UserTokenUpdateInput: ["token", "createdAt", "updatedAt", "User"],
  UserTokenCreateManyInput: ["id", "token", "createdAt", "updatedAt", "userId"],
  UserTokenUpdateManyMutationInput: ["token", "createdAt", "updatedAt"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  BoolNullableFilter: ["equals", "not"],
  ProductListRelationFilter: ["every", "some", "none"],
  ScheduleListRelationFilter: ["every", "some", "none"],
  DeliveryZoneListRelationFilter: ["every", "some", "none"],
  CustomerListRelationFilter: ["every", "some", "none"],
  OrderListRelationFilter: ["every", "some", "none"],
  ProductCategoryListRelationFilter: ["every", "some", "none"],
  UserListRelationFilter: ["every", "some", "none"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "count", "min", "max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "count", "min", "max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "count", "min", "max"],
  BoolNullableWithAggregatesFilter: ["equals", "not", "count", "min", "max"],
  RestaurantRelationFilter: ["is", "isNot"],
  OrderElementListRelationFilter: ["every", "some", "none"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  EnumSpiceLevelFilter: ["equals", "in", "notIn", "not"],
  ProductCategoryRelationFilter: ["is", "isNot"],
  OrderRelationFilter: ["is", "isNot"],
  CartElementListRelationFilter: ["every", "some", "none"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "count", "avg", "sum", "min", "max"],
  EnumSpiceLevelWithAggregatesFilter: ["equals", "in", "notIn", "not", "count", "min", "max"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  ProductRelationFilter: ["is", "isNot"],
  CustomerRelationFilter: ["is", "isNot"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "count", "avg", "sum", "min", "max"],
  CustomerAddressRelationFilter: ["is", "isNot"],
  EnumDeliveryFeeFilter: ["equals", "in", "notIn", "not"],
  EnumDeliveryFeeWithAggregatesFilter: ["equals", "in", "notIn", "not", "count", "min", "max"],
  CustomerTokenListRelationFilter: ["every", "some", "none"],
  CustomerAddressListRelationFilter: ["every", "some", "none"],
  UserTokenListRelationFilter: ["every", "some", "none"],
  EnumRoleFilter: ["equals", "in", "notIn", "not"],
  RestaurantListRelationFilter: ["every", "some", "none"],
  EnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "count", "min", "max"],
  UserRelationFilter: ["is", "isNot"],
  ProductCreateNestedManyWithoutRestaurantInput: ["create", "connectOrCreate", "createMany", "connect"],
  ScheduleCreateNestedManyWithoutRestaurantInput: ["create", "connectOrCreate", "createMany", "connect"],
  DeliveryZoneCreateNestedManyWithoutRestaurantInput: ["create", "connectOrCreate", "createMany", "connect"],
  CustomerCreateNestedManyWithoutRestaurantInput: ["create", "connectOrCreate", "createMany", "connect"],
  OrderCreateNestedManyWithoutRestaurantInput: ["create", "connectOrCreate", "createMany", "connect"],
  ProductCategoryCreateNestedManyWithoutRestaurantsInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserCreateNestedManyWithoutRestaurantsInput: ["create", "connectOrCreate", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  NullableBoolFieldUpdateOperationsInput: ["set"],
  ProductUpdateManyWithoutRestaurantInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  ScheduleUpdateManyWithoutRestaurantInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  DeliveryZoneUpdateManyWithoutRestaurantInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  CustomerUpdateManyWithoutRestaurantInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  OrderUpdateManyWithoutRestaurantInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  ProductCategoryUpdateManyWithoutRestaurantsInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserUpdateManyWithoutRestaurantsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  RestaurantCreateNestedOneWithoutProductCategoryInput: ["create", "connectOrCreate", "connect"],
  ProductCreateNestedManyWithoutCategoryInput: ["create", "connectOrCreate", "createMany", "connect"],
  OrderElementCreateNestedManyWithoutCategoryInput: ["create", "connectOrCreate", "createMany", "connect"],
  RestaurantUpdateOneRequiredWithoutProductCategoryInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ProductUpdateManyWithoutCategoryInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  OrderElementUpdateManyWithoutCategoryInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  ProductCategoryCreateNestedOneWithoutProductInput: ["create", "connectOrCreate", "connect"],
  RestaurantCreateNestedOneWithoutProductsInput: ["create", "connectOrCreate", "connect"],
  OrderCreateNestedOneWithoutProductInput: ["create", "connectOrCreate", "connect"],
  CartElementCreateNestedManyWithoutProductInput: ["create", "connectOrCreate", "createMany", "connect"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  EnumSpiceLevelFieldUpdateOperationsInput: ["set"],
  ProductCategoryUpdateOneRequiredWithoutProductInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  RestaurantUpdateOneWithoutProductsInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  OrderUpdateOneWithoutProductInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  CartElementUpdateManyWithoutProductInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  ProductCreateNestedOneWithoutCartElementInput: ["create", "connectOrCreate", "connect"],
  CustomerCreateNestedOneWithoutCartInput: ["create", "connectOrCreate", "connect"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  ProductUpdateOneRequiredWithoutCartElementInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  CustomerUpdateOneRequiredWithoutCartInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ProductCategoryCreateNestedOneWithoutOrderElementInput: ["create", "connectOrCreate", "connect"],
  OrderCreateNestedOneWithoutElementsInput: ["create", "connectOrCreate", "connect"],
  ProductCategoryUpdateOneRequiredWithoutOrderElementInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  OrderUpdateOneWithoutElementsInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  OrderElementCreateNestedManyWithoutOrderInput: ["create", "connectOrCreate", "createMany", "connect"],
  CustomerAddressCreateNestedOneWithoutOrderInput: ["create", "connectOrCreate", "connect"],
  RestaurantCreateNestedOneWithoutOrdersInput: ["create", "connectOrCreate", "connect"],
  CustomerCreateNestedOneWithoutOrdersInput: ["create", "connectOrCreate", "connect"],
  ProductCreateNestedManyWithoutOrderInput: ["create", "connectOrCreate", "createMany", "connect"],
  OrderElementUpdateManyWithoutOrderInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  CustomerAddressUpdateOneRequiredWithoutOrderInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  RestaurantUpdateOneWithoutOrdersInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  CustomerUpdateOneWithoutOrdersInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  ProductUpdateManyWithoutOrderInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  RestaurantCreateNestedOneWithoutScheduleInput: ["create", "connectOrCreate", "connect"],
  RestaurantUpdateOneWithoutScheduleInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  RestaurantCreateNestedOneWithoutDeliveryZonesInput: ["create", "connectOrCreate", "connect"],
  EnumDeliveryFeeFieldUpdateOperationsInput: ["set"],
  RestaurantUpdateOneWithoutDeliveryZonesInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  CustomerTokenCreateNestedManyWithoutCustomerInput: ["create", "connectOrCreate", "createMany", "connect"],
  CustomerAddressCreateNestedManyWithoutCustomerInput: ["create", "connectOrCreate", "createMany", "connect"],
  OrderCreateNestedManyWithoutCustomerInput: ["create", "connectOrCreate", "createMany", "connect"],
  CartElementCreateNestedManyWithoutCustomerInput: ["create", "connectOrCreate", "createMany", "connect"],
  RestaurantCreateNestedOneWithoutCustomersInput: ["create", "connectOrCreate", "connect"],
  CustomerTokenUpdateManyWithoutCustomerInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  CustomerAddressUpdateManyWithoutCustomerInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  OrderUpdateManyWithoutCustomerInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  CartElementUpdateManyWithoutCustomerInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  RestaurantUpdateOneWithoutCustomersInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  CustomerCreateNestedOneWithoutAddressInput: ["create", "connectOrCreate", "connect"],
  OrderCreateNestedManyWithoutCustomerAddressInput: ["create", "connectOrCreate", "createMany", "connect"],
  CustomerUpdateOneWithoutAddressInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  OrderUpdateManyWithoutCustomerAddressInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  CustomerCreateNestedOneWithoutTokenInput: ["create", "connectOrCreate", "connect"],
  CustomerUpdateOneWithoutTokenInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  UserTokenCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  RestaurantCreateNestedManyWithoutUsersInput: ["create", "connectOrCreate", "connect"],
  EnumRoleFieldUpdateOperationsInput: ["set"],
  UserTokenUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  RestaurantUpdateManyWithoutUsersInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutTokenInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneWithoutTokenInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedBoolNullableFilter: ["equals", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "count", "min", "max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "count", "min", "max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "count", "min", "max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolNullableWithAggregatesFilter: ["equals", "not", "count", "min", "max"],
  NestedEnumSpiceLevelFilter: ["equals", "in", "notIn", "not"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "count", "avg", "sum", "min", "max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumSpiceLevelWithAggregatesFilter: ["equals", "in", "notIn", "not", "count", "min", "max"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "count", "avg", "sum", "min", "max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumDeliveryFeeFilter: ["equals", "in", "notIn", "not"],
  NestedEnumDeliveryFeeWithAggregatesFilter: ["equals", "in", "notIn", "not", "count", "min", "max"],
  NestedEnumRoleFilter: ["equals", "in", "notIn", "not"],
  NestedEnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "count", "min", "max"],
  ProductCreateWithoutRestaurantInput: ["id", "createdAt", "name", "description", "image", "price", "spiceLevel", "isPopular", "isActive", "category", "Order", "CartElement"],
  ProductCreateOrConnectWithoutRestaurantInput: ["where", "create"],
  ProductCreateManyRestaurantInputEnvelope: ["data", "skipDuplicates"],
  ScheduleCreateWithoutRestaurantInput: ["createdAt", "openingTime", "closingTime", "minDeliveryAmount", "deliveryTime", "takeawayTime"],
  ScheduleCreateOrConnectWithoutRestaurantInput: ["where", "create"],
  ScheduleCreateManyRestaurantInputEnvelope: ["data", "skipDuplicates"],
  DeliveryZoneCreateWithoutRestaurantInput: ["createdAt", "zoneTitle", "zonePostCode", "deliveryFeeType", "deliveryCharge", "minDeliveryAmount", "minDeliveryRadius", "maxDeliveryRadius"],
  DeliveryZoneCreateOrConnectWithoutRestaurantInput: ["where", "create"],
  DeliveryZoneCreateManyRestaurantInputEnvelope: ["data", "skipDuplicates"],
  CustomerCreateWithoutRestaurantInput: ["createdAt", "firstName", "lastName", "email", "password", "phone", "updatedAt", "token", "address", "orders", "cart"],
  CustomerCreateOrConnectWithoutRestaurantInput: ["where", "create"],
  CustomerCreateManyRestaurantInputEnvelope: ["data", "skipDuplicates"],
  OrderCreateWithoutRestaurantInput: ["charges", "total", "isAccepted", "createdAt", "updatedAt", "elements", "customerAddress", "customer", "product"],
  OrderCreateOrConnectWithoutRestaurantInput: ["where", "create"],
  OrderCreateManyRestaurantInputEnvelope: ["data", "skipDuplicates"],
  ProductCategoryCreateWithoutRestaurantsInput: ["id", "createdAt", "name", "description", "image", "isActive", "isFeatured", "Product", "OrderElement"],
  ProductCategoryCreateOrConnectWithoutRestaurantsInput: ["where", "create"],
  ProductCategoryCreateManyRestaurantsInputEnvelope: ["data", "skipDuplicates"],
  UserCreateWithoutRestaurantsInput: ["createdAt", "fullName", "email", "password", "phone", "role", "token"],
  UserCreateOrConnectWithoutRestaurantsInput: ["where", "create"],
  ProductUpsertWithWhereUniqueWithoutRestaurantInput: ["where", "update", "create"],
  ProductUpdateWithWhereUniqueWithoutRestaurantInput: ["where", "data"],
  ProductUpdateManyWithWhereWithoutRestaurantInput: ["where", "data"],
  ProductScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "name", "description", "image", "price", "spiceLevel", "isPopular", "isActive", "restaurantId", "orderId", "productCategoryId"],
  ScheduleUpsertWithWhereUniqueWithoutRestaurantInput: ["where", "update", "create"],
  ScheduleUpdateWithWhereUniqueWithoutRestaurantInput: ["where", "data"],
  ScheduleUpdateManyWithWhereWithoutRestaurantInput: ["where", "data"],
  ScheduleScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "openingTime", "closingTime", "minDeliveryAmount", "deliveryTime", "takeawayTime", "restaurantId"],
  DeliveryZoneUpsertWithWhereUniqueWithoutRestaurantInput: ["where", "update", "create"],
  DeliveryZoneUpdateWithWhereUniqueWithoutRestaurantInput: ["where", "data"],
  DeliveryZoneUpdateManyWithWhereWithoutRestaurantInput: ["where", "data"],
  DeliveryZoneScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "zoneTitle", "zonePostCode", "deliveryFeeType", "deliveryCharge", "minDeliveryAmount", "minDeliveryRadius", "maxDeliveryRadius", "restaurantId"],
  CustomerUpsertWithWhereUniqueWithoutRestaurantInput: ["where", "update", "create"],
  CustomerUpdateWithWhereUniqueWithoutRestaurantInput: ["where", "data"],
  CustomerUpdateManyWithWhereWithoutRestaurantInput: ["where", "data"],
  CustomerScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "firstName", "lastName", "email", "password", "phone", "restaurantId", "updatedAt"],
  OrderUpsertWithWhereUniqueWithoutRestaurantInput: ["where", "update", "create"],
  OrderUpdateWithWhereUniqueWithoutRestaurantInput: ["where", "data"],
  OrderUpdateManyWithWhereWithoutRestaurantInput: ["where", "data"],
  OrderScalarWhereInput: ["AND", "OR", "NOT", "id", "charges", "total", "isAccepted", "restaurantId", "customerId", "customerAddressId", "createdAt", "updatedAt"],
  ProductCategoryUpsertWithWhereUniqueWithoutRestaurantsInput: ["where", "update", "create"],
  ProductCategoryUpdateWithWhereUniqueWithoutRestaurantsInput: ["where", "data"],
  ProductCategoryUpdateManyWithWhereWithoutRestaurantsInput: ["where", "data"],
  ProductCategoryScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "name", "description", "image", "isActive", "isFeatured", "restaurantId"],
  UserUpsertWithWhereUniqueWithoutRestaurantsInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutRestaurantsInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutRestaurantsInput: ["where", "data"],
  UserScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "fullName", "email", "password", "phone", "role"],
  RestaurantCreateWithoutProductCategoryInput: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt", "products", "schedule", "deliveryZones", "customers", "orders", "users"],
  RestaurantCreateOrConnectWithoutProductCategoryInput: ["where", "create"],
  ProductCreateWithoutCategoryInput: ["id", "createdAt", "name", "description", "image", "price", "spiceLevel", "isPopular", "isActive", "Restaurant", "Order", "CartElement"],
  ProductCreateOrConnectWithoutCategoryInput: ["where", "create"],
  ProductCreateManyCategoryInputEnvelope: ["data", "skipDuplicates"],
  OrderElementCreateWithoutCategoryInput: ["id", "code", "name", "description", "image", "price", "addonText", "createdAt", "updatedAt", "Order"],
  OrderElementCreateOrConnectWithoutCategoryInput: ["where", "create"],
  OrderElementCreateManyCategoryInputEnvelope: ["data", "skipDuplicates"],
  RestaurantUpsertWithoutProductCategoryInput: ["update", "create"],
  RestaurantUpdateWithoutProductCategoryInput: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt", "products", "schedule", "deliveryZones", "customers", "orders", "users"],
  ProductUpsertWithWhereUniqueWithoutCategoryInput: ["where", "update", "create"],
  ProductUpdateWithWhereUniqueWithoutCategoryInput: ["where", "data"],
  ProductUpdateManyWithWhereWithoutCategoryInput: ["where", "data"],
  OrderElementUpsertWithWhereUniqueWithoutCategoryInput: ["where", "update", "create"],
  OrderElementUpdateWithWhereUniqueWithoutCategoryInput: ["where", "data"],
  OrderElementUpdateManyWithWhereWithoutCategoryInput: ["where", "data"],
  OrderElementScalarWhereInput: ["AND", "OR", "NOT", "id", "code", "name", "description", "image", "price", "addonText", "orderId", "productCategoryId", "createdAt", "updatedAt"],
  ProductCategoryCreateWithoutProductInput: ["id", "createdAt", "name", "description", "image", "isActive", "isFeatured", "restaurants", "OrderElement"],
  ProductCategoryCreateOrConnectWithoutProductInput: ["where", "create"],
  RestaurantCreateWithoutProductsInput: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt", "schedule", "deliveryZones", "customers", "orders", "productCategory", "users"],
  RestaurantCreateOrConnectWithoutProductsInput: ["where", "create"],
  OrderCreateWithoutProductInput: ["charges", "total", "isAccepted", "createdAt", "updatedAt", "elements", "customerAddress", "restaurant", "customer"],
  OrderCreateOrConnectWithoutProductInput: ["where", "create"],
  CartElementCreateWithoutProductInput: ["id", "quantity", "createdAt", "updatedAt", "customer"],
  CartElementCreateOrConnectWithoutProductInput: ["where", "create"],
  CartElementCreateManyProductInputEnvelope: ["data", "skipDuplicates"],
  ProductCategoryUpsertWithoutProductInput: ["update", "create"],
  ProductCategoryUpdateWithoutProductInput: ["id", "createdAt", "name", "description", "image", "isActive", "isFeatured", "restaurants", "OrderElement"],
  RestaurantUpsertWithoutProductsInput: ["update", "create"],
  RestaurantUpdateWithoutProductsInput: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt", "schedule", "deliveryZones", "customers", "orders", "productCategory", "users"],
  OrderUpsertWithoutProductInput: ["update", "create"],
  OrderUpdateWithoutProductInput: ["charges", "total", "isAccepted", "createdAt", "updatedAt", "elements", "customerAddress", "restaurant", "customer"],
  CartElementUpsertWithWhereUniqueWithoutProductInput: ["where", "update", "create"],
  CartElementUpdateWithWhereUniqueWithoutProductInput: ["where", "data"],
  CartElementUpdateManyWithWhereWithoutProductInput: ["where", "data"],
  CartElementScalarWhereInput: ["AND", "OR", "NOT", "id", "quantity", "customerId", "productId", "createdAt", "updatedAt"],
  ProductCreateWithoutCartElementInput: ["id", "createdAt", "name", "description", "image", "price", "spiceLevel", "isPopular", "isActive", "category", "Restaurant", "Order"],
  ProductCreateOrConnectWithoutCartElementInput: ["where", "create"],
  CustomerCreateWithoutCartInput: ["createdAt", "firstName", "lastName", "email", "password", "phone", "updatedAt", "token", "address", "orders", "Restaurant"],
  CustomerCreateOrConnectWithoutCartInput: ["where", "create"],
  ProductUpsertWithoutCartElementInput: ["update", "create"],
  ProductUpdateWithoutCartElementInput: ["id", "createdAt", "name", "description", "image", "price", "spiceLevel", "isPopular", "isActive", "category", "Restaurant", "Order"],
  CustomerUpsertWithoutCartInput: ["update", "create"],
  CustomerUpdateWithoutCartInput: ["createdAt", "firstName", "lastName", "email", "password", "phone", "updatedAt", "token", "address", "orders", "Restaurant"],
  ProductCategoryCreateWithoutOrderElementInput: ["id", "createdAt", "name", "description", "image", "isActive", "isFeatured", "restaurants", "Product"],
  ProductCategoryCreateOrConnectWithoutOrderElementInput: ["where", "create"],
  OrderCreateWithoutElementsInput: ["charges", "total", "isAccepted", "createdAt", "updatedAt", "customerAddress", "restaurant", "customer", "product"],
  OrderCreateOrConnectWithoutElementsInput: ["where", "create"],
  ProductCategoryUpsertWithoutOrderElementInput: ["update", "create"],
  ProductCategoryUpdateWithoutOrderElementInput: ["id", "createdAt", "name", "description", "image", "isActive", "isFeatured", "restaurants", "Product"],
  OrderUpsertWithoutElementsInput: ["update", "create"],
  OrderUpdateWithoutElementsInput: ["charges", "total", "isAccepted", "createdAt", "updatedAt", "customerAddress", "restaurant", "customer", "product"],
  OrderElementCreateWithoutOrderInput: ["id", "code", "name", "description", "image", "price", "addonText", "createdAt", "updatedAt", "category"],
  OrderElementCreateOrConnectWithoutOrderInput: ["where", "create"],
  OrderElementCreateManyOrderInputEnvelope: ["data", "skipDuplicates"],
  CustomerAddressCreateWithoutOrderInput: ["createdAt", "streetAddress", "city", "postCode", "country", "Customer"],
  CustomerAddressCreateOrConnectWithoutOrderInput: ["where", "create"],
  RestaurantCreateWithoutOrdersInput: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt", "products", "schedule", "deliveryZones", "customers", "productCategory", "users"],
  RestaurantCreateOrConnectWithoutOrdersInput: ["where", "create"],
  CustomerCreateWithoutOrdersInput: ["createdAt", "firstName", "lastName", "email", "password", "phone", "updatedAt", "token", "address", "cart", "Restaurant"],
  CustomerCreateOrConnectWithoutOrdersInput: ["where", "create"],
  ProductCreateWithoutOrderInput: ["id", "createdAt", "name", "description", "image", "price", "spiceLevel", "isPopular", "isActive", "category", "Restaurant", "CartElement"],
  ProductCreateOrConnectWithoutOrderInput: ["where", "create"],
  ProductCreateManyOrderInputEnvelope: ["data", "skipDuplicates"],
  OrderElementUpsertWithWhereUniqueWithoutOrderInput: ["where", "update", "create"],
  OrderElementUpdateWithWhereUniqueWithoutOrderInput: ["where", "data"],
  OrderElementUpdateManyWithWhereWithoutOrderInput: ["where", "data"],
  CustomerAddressUpsertWithoutOrderInput: ["update", "create"],
  CustomerAddressUpdateWithoutOrderInput: ["createdAt", "streetAddress", "city", "postCode", "country", "Customer"],
  RestaurantUpsertWithoutOrdersInput: ["update", "create"],
  RestaurantUpdateWithoutOrdersInput: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt", "products", "schedule", "deliveryZones", "customers", "productCategory", "users"],
  CustomerUpsertWithoutOrdersInput: ["update", "create"],
  CustomerUpdateWithoutOrdersInput: ["createdAt", "firstName", "lastName", "email", "password", "phone", "updatedAt", "token", "address", "cart", "Restaurant"],
  ProductUpsertWithWhereUniqueWithoutOrderInput: ["where", "update", "create"],
  ProductUpdateWithWhereUniqueWithoutOrderInput: ["where", "data"],
  ProductUpdateManyWithWhereWithoutOrderInput: ["where", "data"],
  RestaurantCreateWithoutScheduleInput: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt", "products", "deliveryZones", "customers", "orders", "productCategory", "users"],
  RestaurantCreateOrConnectWithoutScheduleInput: ["where", "create"],
  RestaurantUpsertWithoutScheduleInput: ["update", "create"],
  RestaurantUpdateWithoutScheduleInput: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt", "products", "deliveryZones", "customers", "orders", "productCategory", "users"],
  RestaurantCreateWithoutDeliveryZonesInput: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt", "products", "schedule", "customers", "orders", "productCategory", "users"],
  RestaurantCreateOrConnectWithoutDeliveryZonesInput: ["where", "create"],
  RestaurantUpsertWithoutDeliveryZonesInput: ["update", "create"],
  RestaurantUpdateWithoutDeliveryZonesInput: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt", "products", "schedule", "customers", "orders", "productCategory", "users"],
  CustomerTokenCreateWithoutCustomerInput: ["token", "createdAt", "updatedAt"],
  CustomerTokenCreateOrConnectWithoutCustomerInput: ["where", "create"],
  CustomerTokenCreateManyCustomerInputEnvelope: ["data", "skipDuplicates"],
  CustomerAddressCreateWithoutCustomerInput: ["createdAt", "streetAddress", "city", "postCode", "country", "Order"],
  CustomerAddressCreateOrConnectWithoutCustomerInput: ["where", "create"],
  CustomerAddressCreateManyCustomerInputEnvelope: ["data", "skipDuplicates"],
  OrderCreateWithoutCustomerInput: ["charges", "total", "isAccepted", "createdAt", "updatedAt", "elements", "customerAddress", "restaurant", "product"],
  OrderCreateOrConnectWithoutCustomerInput: ["where", "create"],
  OrderCreateManyCustomerInputEnvelope: ["data", "skipDuplicates"],
  CartElementCreateWithoutCustomerInput: ["id", "quantity", "createdAt", "updatedAt", "product"],
  CartElementCreateOrConnectWithoutCustomerInput: ["where", "create"],
  CartElementCreateManyCustomerInputEnvelope: ["data", "skipDuplicates"],
  RestaurantCreateWithoutCustomersInput: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt", "products", "schedule", "deliveryZones", "orders", "productCategory", "users"],
  RestaurantCreateOrConnectWithoutCustomersInput: ["where", "create"],
  CustomerTokenUpsertWithWhereUniqueWithoutCustomerInput: ["where", "update", "create"],
  CustomerTokenUpdateWithWhereUniqueWithoutCustomerInput: ["where", "data"],
  CustomerTokenUpdateManyWithWhereWithoutCustomerInput: ["where", "data"],
  CustomerTokenScalarWhereInput: ["AND", "OR", "NOT", "id", "token", "createdAt", "updatedAt", "customerId"],
  CustomerAddressUpsertWithWhereUniqueWithoutCustomerInput: ["where", "update", "create"],
  CustomerAddressUpdateWithWhereUniqueWithoutCustomerInput: ["where", "data"],
  CustomerAddressUpdateManyWithWhereWithoutCustomerInput: ["where", "data"],
  CustomerAddressScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "streetAddress", "city", "postCode", "country", "customerId"],
  OrderUpsertWithWhereUniqueWithoutCustomerInput: ["where", "update", "create"],
  OrderUpdateWithWhereUniqueWithoutCustomerInput: ["where", "data"],
  OrderUpdateManyWithWhereWithoutCustomerInput: ["where", "data"],
  CartElementUpsertWithWhereUniqueWithoutCustomerInput: ["where", "update", "create"],
  CartElementUpdateWithWhereUniqueWithoutCustomerInput: ["where", "data"],
  CartElementUpdateManyWithWhereWithoutCustomerInput: ["where", "data"],
  RestaurantUpsertWithoutCustomersInput: ["update", "create"],
  RestaurantUpdateWithoutCustomersInput: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt", "products", "schedule", "deliveryZones", "orders", "productCategory", "users"],
  CustomerCreateWithoutAddressInput: ["createdAt", "firstName", "lastName", "email", "password", "phone", "updatedAt", "token", "orders", "cart", "Restaurant"],
  CustomerCreateOrConnectWithoutAddressInput: ["where", "create"],
  OrderCreateWithoutCustomerAddressInput: ["charges", "total", "isAccepted", "createdAt", "updatedAt", "elements", "restaurant", "customer", "product"],
  OrderCreateOrConnectWithoutCustomerAddressInput: ["where", "create"],
  OrderCreateManyCustomerAddressInputEnvelope: ["data", "skipDuplicates"],
  CustomerUpsertWithoutAddressInput: ["update", "create"],
  CustomerUpdateWithoutAddressInput: ["createdAt", "firstName", "lastName", "email", "password", "phone", "updatedAt", "token", "orders", "cart", "Restaurant"],
  OrderUpsertWithWhereUniqueWithoutCustomerAddressInput: ["where", "update", "create"],
  OrderUpdateWithWhereUniqueWithoutCustomerAddressInput: ["where", "data"],
  OrderUpdateManyWithWhereWithoutCustomerAddressInput: ["where", "data"],
  CustomerCreateWithoutTokenInput: ["createdAt", "firstName", "lastName", "email", "password", "phone", "updatedAt", "address", "orders", "cart", "Restaurant"],
  CustomerCreateOrConnectWithoutTokenInput: ["where", "create"],
  CustomerUpsertWithoutTokenInput: ["update", "create"],
  CustomerUpdateWithoutTokenInput: ["createdAt", "firstName", "lastName", "email", "password", "phone", "updatedAt", "address", "orders", "cart", "Restaurant"],
  UserTokenCreateWithoutUserInput: ["token", "createdAt", "updatedAt"],
  UserTokenCreateOrConnectWithoutUserInput: ["where", "create"],
  UserTokenCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  RestaurantCreateWithoutUsersInput: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt", "products", "schedule", "deliveryZones", "customers", "orders", "productCategory"],
  RestaurantCreateOrConnectWithoutUsersInput: ["where", "create"],
  UserTokenUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  UserTokenUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  UserTokenUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  UserTokenScalarWhereInput: ["AND", "OR", "NOT", "id", "token", "createdAt", "updatedAt", "userId"],
  RestaurantUpsertWithWhereUniqueWithoutUsersInput: ["where", "update", "create"],
  RestaurantUpdateWithWhereUniqueWithoutUsersInput: ["where", "data"],
  RestaurantUpdateManyWithWhereWithoutUsersInput: ["where", "data"],
  RestaurantScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt"],
  UserCreateWithoutTokenInput: ["createdAt", "fullName", "email", "password", "phone", "role", "restaurants"],
  UserCreateOrConnectWithoutTokenInput: ["where", "create"],
  UserUpsertWithoutTokenInput: ["update", "create"],
  UserUpdateWithoutTokenInput: ["createdAt", "fullName", "email", "password", "phone", "role", "restaurants"],
  ProductCreateManyRestaurantInput: ["id", "createdAt", "name", "description", "image", "price", "spiceLevel", "isPopular", "isActive", "orderId", "productCategoryId"],
  ScheduleCreateManyRestaurantInput: ["id", "createdAt", "openingTime", "closingTime", "minDeliveryAmount", "deliveryTime", "takeawayTime"],
  DeliveryZoneCreateManyRestaurantInput: ["id", "createdAt", "zoneTitle", "zonePostCode", "deliveryFeeType", "deliveryCharge", "minDeliveryAmount", "minDeliveryRadius", "maxDeliveryRadius"],
  CustomerCreateManyRestaurantInput: ["id", "createdAt", "firstName", "lastName", "email", "password", "phone", "updatedAt"],
  OrderCreateManyRestaurantInput: ["id", "charges", "total", "isAccepted", "customerId", "customerAddressId", "createdAt", "updatedAt"],
  ProductCategoryCreateManyRestaurantsInput: ["id", "createdAt", "name", "description", "image", "isActive", "isFeatured"],
  ProductUpdateWithoutRestaurantInput: ["id", "createdAt", "name", "description", "image", "price", "spiceLevel", "isPopular", "isActive", "category", "Order", "CartElement"],
  ScheduleUpdateWithoutRestaurantInput: ["createdAt", "openingTime", "closingTime", "minDeliveryAmount", "deliveryTime", "takeawayTime"],
  DeliveryZoneUpdateWithoutRestaurantInput: ["createdAt", "zoneTitle", "zonePostCode", "deliveryFeeType", "deliveryCharge", "minDeliveryAmount", "minDeliveryRadius", "maxDeliveryRadius"],
  CustomerUpdateWithoutRestaurantInput: ["createdAt", "firstName", "lastName", "email", "password", "phone", "updatedAt", "token", "address", "orders", "cart"],
  OrderUpdateWithoutRestaurantInput: ["charges", "total", "isAccepted", "createdAt", "updatedAt", "elements", "customerAddress", "customer", "product"],
  ProductCategoryUpdateWithoutRestaurantsInput: ["id", "createdAt", "name", "description", "image", "isActive", "isFeatured", "Product", "OrderElement"],
  UserUpdateWithoutRestaurantsInput: ["createdAt", "fullName", "email", "password", "phone", "role", "token"],
  ProductCreateManyCategoryInput: ["id", "createdAt", "name", "description", "image", "price", "spiceLevel", "isPopular", "isActive", "restaurantId", "orderId"],
  OrderElementCreateManyCategoryInput: ["id", "code", "name", "description", "image", "price", "addonText", "orderId", "createdAt", "updatedAt"],
  ProductUpdateWithoutCategoryInput: ["id", "createdAt", "name", "description", "image", "price", "spiceLevel", "isPopular", "isActive", "Restaurant", "Order", "CartElement"],
  OrderElementUpdateWithoutCategoryInput: ["id", "code", "name", "description", "image", "price", "addonText", "createdAt", "updatedAt", "Order"],
  CartElementCreateManyProductInput: ["id", "quantity", "customerId", "createdAt", "updatedAt"],
  CartElementUpdateWithoutProductInput: ["id", "quantity", "createdAt", "updatedAt", "customer"],
  OrderElementCreateManyOrderInput: ["id", "code", "name", "description", "image", "price", "addonText", "productCategoryId", "createdAt", "updatedAt"],
  ProductCreateManyOrderInput: ["id", "createdAt", "name", "description", "image", "price", "spiceLevel", "isPopular", "isActive", "restaurantId", "productCategoryId"],
  OrderElementUpdateWithoutOrderInput: ["id", "code", "name", "description", "image", "price", "addonText", "createdAt", "updatedAt", "category"],
  ProductUpdateWithoutOrderInput: ["id", "createdAt", "name", "description", "image", "price", "spiceLevel", "isPopular", "isActive", "category", "Restaurant", "CartElement"],
  CustomerTokenCreateManyCustomerInput: ["id", "token", "createdAt", "updatedAt"],
  CustomerAddressCreateManyCustomerInput: ["id", "createdAt", "streetAddress", "city", "postCode", "country"],
  OrderCreateManyCustomerInput: ["id", "charges", "total", "isAccepted", "restaurantId", "customerAddressId", "createdAt", "updatedAt"],
  CartElementCreateManyCustomerInput: ["id", "quantity", "productId", "createdAt", "updatedAt"],
  CustomerTokenUpdateWithoutCustomerInput: ["token", "createdAt", "updatedAt"],
  CustomerAddressUpdateWithoutCustomerInput: ["createdAt", "streetAddress", "city", "postCode", "country", "Order"],
  OrderUpdateWithoutCustomerInput: ["charges", "total", "isAccepted", "createdAt", "updatedAt", "elements", "customerAddress", "restaurant", "product"],
  CartElementUpdateWithoutCustomerInput: ["id", "quantity", "createdAt", "updatedAt", "product"],
  OrderCreateManyCustomerAddressInput: ["id", "charges", "total", "isAccepted", "restaurantId", "customerId", "createdAt", "updatedAt"],
  OrderUpdateWithoutCustomerAddressInput: ["charges", "total", "isAccepted", "createdAt", "updatedAt", "elements", "restaurant", "customer", "product"],
  UserTokenCreateManyUserInput: ["id", "token", "createdAt", "updatedAt"],
  UserTokenUpdateWithoutUserInput: ["token", "createdAt", "updatedAt"],
  RestaurantUpdateWithoutUsersInput: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt", "products", "schedule", "deliveryZones", "customers", "orders", "productCategory"]
};
const outputsInfo = {
  AggregateRestaurant: ["count", "min", "max"],
  RestaurantGroupBy: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt", "count", "min", "max"],
  AggregateProductCategory: ["count", "min", "max"],
  ProductCategoryGroupBy: ["id", "createdAt", "name", "description", "image", "isActive", "isFeatured", "restaurantId", "count", "min", "max"],
  AggregateProduct: ["count", "avg", "sum", "min", "max"],
  ProductGroupBy: ["id", "createdAt", "name", "description", "image", "price", "spiceLevel", "isPopular", "isActive", "restaurantId", "orderId", "productCategoryId", "count", "avg", "sum", "min", "max"],
  AggregateCartElement: ["count", "avg", "sum", "min", "max"],
  CartElementGroupBy: ["id", "quantity", "customerId", "productId", "createdAt", "updatedAt", "count", "avg", "sum", "min", "max"],
  AggregateOrderElement: ["count", "avg", "sum", "min", "max"],
  OrderElementGroupBy: ["id", "code", "name", "description", "image", "price", "addonText", "orderId", "productCategoryId", "createdAt", "updatedAt", "count", "avg", "sum", "min", "max"],
  AggregateOrder: ["count", "avg", "sum", "min", "max"],
  OrderGroupBy: ["id", "charges", "total", "isAccepted", "restaurantId", "customerId", "customerAddressId", "createdAt", "updatedAt", "count", "avg", "sum", "min", "max"],
  AggregateSchedule: ["count", "avg", "sum", "min", "max"],
  ScheduleGroupBy: ["id", "createdAt", "openingTime", "closingTime", "minDeliveryAmount", "deliveryTime", "takeawayTime", "restaurantId", "count", "avg", "sum", "min", "max"],
  AggregateDeliveryZone: ["count", "avg", "sum", "min", "max"],
  DeliveryZoneGroupBy: ["id", "createdAt", "zoneTitle", "zonePostCode", "deliveryFeeType", "deliveryCharge", "minDeliveryAmount", "minDeliveryRadius", "maxDeliveryRadius", "restaurantId", "count", "avg", "sum", "min", "max"],
  AggregateCustomer: ["count", "avg", "sum", "min", "max"],
  CustomerGroupBy: ["id", "createdAt", "firstName", "lastName", "email", "password", "phone", "restaurantId", "updatedAt", "count", "avg", "sum", "min", "max"],
  AggregateCustomerAddress: ["count", "avg", "sum", "min", "max"],
  CustomerAddressGroupBy: ["id", "createdAt", "streetAddress", "city", "postCode", "country", "customerId", "count", "avg", "sum", "min", "max"],
  AggregateCustomerToken: ["count", "avg", "sum", "min", "max"],
  CustomerTokenGroupBy: ["id", "token", "createdAt", "updatedAt", "customerId", "count", "avg", "sum", "min", "max"],
  AggregateUser: ["count", "avg", "sum", "min", "max"],
  UserGroupBy: ["id", "createdAt", "fullName", "email", "password", "phone", "role", "count", "avg", "sum", "min", "max"],
  AggregateUserToken: ["count", "avg", "sum", "min", "max"],
  UserTokenGroupBy: ["id", "token", "createdAt", "updatedAt", "userId", "count", "avg", "sum", "min", "max"],
  AffectedRowsOutput: ["count"],
  RestaurantCountAggregate: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt", "_all"],
  RestaurantMinAggregate: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt"],
  RestaurantMaxAggregate: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt"],
  ProductCategoryCountAggregate: ["id", "createdAt", "name", "description", "image", "isActive", "isFeatured", "restaurantId", "_all"],
  ProductCategoryMinAggregate: ["id", "createdAt", "name", "description", "image", "isActive", "isFeatured", "restaurantId"],
  ProductCategoryMaxAggregate: ["id", "createdAt", "name", "description", "image", "isActive", "isFeatured", "restaurantId"],
  ProductCountAggregate: ["id", "createdAt", "name", "description", "image", "price", "spiceLevel", "isPopular", "isActive", "restaurantId", "orderId", "productCategoryId", "_all"],
  ProductAvgAggregate: ["price", "orderId"],
  ProductSumAggregate: ["price", "orderId"],
  ProductMinAggregate: ["id", "createdAt", "name", "description", "image", "price", "spiceLevel", "isPopular", "isActive", "restaurantId", "orderId", "productCategoryId"],
  ProductMaxAggregate: ["id", "createdAt", "name", "description", "image", "price", "spiceLevel", "isPopular", "isActive", "restaurantId", "orderId", "productCategoryId"],
  CartElementCountAggregate: ["id", "quantity", "customerId", "productId", "createdAt", "updatedAt", "_all"],
  CartElementAvgAggregate: ["quantity", "customerId"],
  CartElementSumAggregate: ["quantity", "customerId"],
  CartElementMinAggregate: ["id", "quantity", "customerId", "productId", "createdAt", "updatedAt"],
  CartElementMaxAggregate: ["id", "quantity", "customerId", "productId", "createdAt", "updatedAt"],
  OrderElementCountAggregate: ["id", "code", "name", "description", "image", "price", "addonText", "orderId", "productCategoryId", "createdAt", "updatedAt", "_all"],
  OrderElementAvgAggregate: ["price", "orderId"],
  OrderElementSumAggregate: ["price", "orderId"],
  OrderElementMinAggregate: ["id", "code", "name", "description", "image", "price", "addonText", "orderId", "productCategoryId", "createdAt", "updatedAt"],
  OrderElementMaxAggregate: ["id", "code", "name", "description", "image", "price", "addonText", "orderId", "productCategoryId", "createdAt", "updatedAt"],
  OrderCountAggregate: ["id", "charges", "total", "isAccepted", "restaurantId", "customerId", "customerAddressId", "createdAt", "updatedAt", "_all"],
  OrderAvgAggregate: ["id", "charges", "total", "customerId", "customerAddressId"],
  OrderSumAggregate: ["id", "charges", "total", "customerId", "customerAddressId"],
  OrderMinAggregate: ["id", "charges", "total", "isAccepted", "restaurantId", "customerId", "customerAddressId", "createdAt", "updatedAt"],
  OrderMaxAggregate: ["id", "charges", "total", "isAccepted", "restaurantId", "customerId", "customerAddressId", "createdAt", "updatedAt"],
  ScheduleCountAggregate: ["id", "createdAt", "openingTime", "closingTime", "minDeliveryAmount", "deliveryTime", "takeawayTime", "restaurantId", "_all"],
  ScheduleAvgAggregate: ["id", "minDeliveryAmount"],
  ScheduleSumAggregate: ["id", "minDeliveryAmount"],
  ScheduleMinAggregate: ["id", "createdAt", "openingTime", "closingTime", "minDeliveryAmount", "deliveryTime", "takeawayTime", "restaurantId"],
  ScheduleMaxAggregate: ["id", "createdAt", "openingTime", "closingTime", "minDeliveryAmount", "deliveryTime", "takeawayTime", "restaurantId"],
  DeliveryZoneCountAggregate: ["id", "createdAt", "zoneTitle", "zonePostCode", "deliveryFeeType", "deliveryCharge", "minDeliveryAmount", "minDeliveryRadius", "maxDeliveryRadius", "restaurantId", "_all"],
  DeliveryZoneAvgAggregate: ["id", "deliveryCharge", "minDeliveryAmount", "minDeliveryRadius", "maxDeliveryRadius"],
  DeliveryZoneSumAggregate: ["id", "deliveryCharge", "minDeliveryAmount", "minDeliveryRadius", "maxDeliveryRadius"],
  DeliveryZoneMinAggregate: ["id", "createdAt", "zoneTitle", "zonePostCode", "deliveryFeeType", "deliveryCharge", "minDeliveryAmount", "minDeliveryRadius", "maxDeliveryRadius", "restaurantId"],
  DeliveryZoneMaxAggregate: ["id", "createdAt", "zoneTitle", "zonePostCode", "deliveryFeeType", "deliveryCharge", "minDeliveryAmount", "minDeliveryRadius", "maxDeliveryRadius", "restaurantId"],
  CustomerCountAggregate: ["id", "createdAt", "firstName", "lastName", "email", "password", "phone", "restaurantId", "updatedAt", "_all"],
  CustomerAvgAggregate: ["id"],
  CustomerSumAggregate: ["id"],
  CustomerMinAggregate: ["id", "createdAt", "firstName", "lastName", "email", "password", "phone", "restaurantId", "updatedAt"],
  CustomerMaxAggregate: ["id", "createdAt", "firstName", "lastName", "email", "password", "phone", "restaurantId", "updatedAt"],
  CustomerAddressCountAggregate: ["id", "createdAt", "streetAddress", "city", "postCode", "country", "customerId", "_all"],
  CustomerAddressAvgAggregate: ["id", "customerId"],
  CustomerAddressSumAggregate: ["id", "customerId"],
  CustomerAddressMinAggregate: ["id", "createdAt", "streetAddress", "city", "postCode", "country", "customerId"],
  CustomerAddressMaxAggregate: ["id", "createdAt", "streetAddress", "city", "postCode", "country", "customerId"],
  CustomerTokenCountAggregate: ["id", "token", "createdAt", "updatedAt", "customerId", "_all"],
  CustomerTokenAvgAggregate: ["id", "customerId"],
  CustomerTokenSumAggregate: ["id", "customerId"],
  CustomerTokenMinAggregate: ["id", "token", "createdAt", "updatedAt", "customerId"],
  CustomerTokenMaxAggregate: ["id", "token", "createdAt", "updatedAt", "customerId"],
  UserCountAggregate: ["id", "createdAt", "fullName", "email", "password", "phone", "role", "_all"],
  UserAvgAggregate: ["id"],
  UserSumAggregate: ["id"],
  UserMinAggregate: ["id", "createdAt", "fullName", "email", "password", "phone", "role"],
  UserMaxAggregate: ["id", "createdAt", "fullName", "email", "password", "phone", "role"],
  UserTokenCountAggregate: ["id", "token", "createdAt", "updatedAt", "userId", "_all"],
  UserTokenAvgAggregate: ["id", "userId"],
  UserTokenSumAggregate: ["id", "userId"],
  UserTokenMinAggregate: ["id", "token", "createdAt", "updatedAt", "userId"],
  UserTokenMaxAggregate: ["id", "token", "createdAt", "updatedAt", "userId"]
};
const argsInfo = {
  FindUniqueRestaurantArgs: ["where"],
  FindFirstRestaurantArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyRestaurantArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateRestaurantArgs: ["data"],
  CreateManyRestaurantArgs: ["data", "skipDuplicates"],
  DeleteRestaurantArgs: ["where"],
  UpdateRestaurantArgs: ["data", "where"],
  DeleteManyRestaurantArgs: ["where"],
  UpdateManyRestaurantArgs: ["data", "where"],
  UpsertRestaurantArgs: ["where", "create", "update"],
  AggregateRestaurantArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByRestaurantArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueProductCategoryArgs: ["where"],
  FindFirstProductCategoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyProductCategoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateProductCategoryArgs: ["data"],
  CreateManyProductCategoryArgs: ["data", "skipDuplicates"],
  DeleteProductCategoryArgs: ["where"],
  UpdateProductCategoryArgs: ["data", "where"],
  DeleteManyProductCategoryArgs: ["where"],
  UpdateManyProductCategoryArgs: ["data", "where"],
  UpsertProductCategoryArgs: ["where", "create", "update"],
  AggregateProductCategoryArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByProductCategoryArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueProductArgs: ["where"],
  FindFirstProductArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyProductArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateProductArgs: ["data"],
  CreateManyProductArgs: ["data", "skipDuplicates"],
  DeleteProductArgs: ["where"],
  UpdateProductArgs: ["data", "where"],
  DeleteManyProductArgs: ["where"],
  UpdateManyProductArgs: ["data", "where"],
  UpsertProductArgs: ["where", "create", "update"],
  AggregateProductArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByProductArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueCartElementArgs: ["where"],
  FindFirstCartElementArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCartElementArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateCartElementArgs: ["data"],
  CreateManyCartElementArgs: ["data", "skipDuplicates"],
  DeleteCartElementArgs: ["where"],
  UpdateCartElementArgs: ["data", "where"],
  DeleteManyCartElementArgs: ["where"],
  UpdateManyCartElementArgs: ["data", "where"],
  UpsertCartElementArgs: ["where", "create", "update"],
  AggregateCartElementArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByCartElementArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueOrderElementArgs: ["where"],
  FindFirstOrderElementArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyOrderElementArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateOrderElementArgs: ["data"],
  CreateManyOrderElementArgs: ["data", "skipDuplicates"],
  DeleteOrderElementArgs: ["where"],
  UpdateOrderElementArgs: ["data", "where"],
  DeleteManyOrderElementArgs: ["where"],
  UpdateManyOrderElementArgs: ["data", "where"],
  UpsertOrderElementArgs: ["where", "create", "update"],
  AggregateOrderElementArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByOrderElementArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueOrderArgs: ["where"],
  FindFirstOrderArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyOrderArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateOrderArgs: ["data"],
  CreateManyOrderArgs: ["data", "skipDuplicates"],
  DeleteOrderArgs: ["where"],
  UpdateOrderArgs: ["data", "where"],
  DeleteManyOrderArgs: ["where"],
  UpdateManyOrderArgs: ["data", "where"],
  UpsertOrderArgs: ["where", "create", "update"],
  AggregateOrderArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByOrderArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueScheduleArgs: ["where"],
  FindFirstScheduleArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyScheduleArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateScheduleArgs: ["data"],
  CreateManyScheduleArgs: ["data", "skipDuplicates"],
  DeleteScheduleArgs: ["where"],
  UpdateScheduleArgs: ["data", "where"],
  DeleteManyScheduleArgs: ["where"],
  UpdateManyScheduleArgs: ["data", "where"],
  UpsertScheduleArgs: ["where", "create", "update"],
  AggregateScheduleArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByScheduleArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueDeliveryZoneArgs: ["where"],
  FindFirstDeliveryZoneArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyDeliveryZoneArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateDeliveryZoneArgs: ["data"],
  CreateManyDeliveryZoneArgs: ["data", "skipDuplicates"],
  DeleteDeliveryZoneArgs: ["where"],
  UpdateDeliveryZoneArgs: ["data", "where"],
  DeleteManyDeliveryZoneArgs: ["where"],
  UpdateManyDeliveryZoneArgs: ["data", "where"],
  UpsertDeliveryZoneArgs: ["where", "create", "update"],
  AggregateDeliveryZoneArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByDeliveryZoneArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueCustomerArgs: ["where"],
  FindFirstCustomerArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCustomerArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateCustomerArgs: ["data"],
  CreateManyCustomerArgs: ["data", "skipDuplicates"],
  DeleteCustomerArgs: ["where"],
  UpdateCustomerArgs: ["data", "where"],
  DeleteManyCustomerArgs: ["where"],
  UpdateManyCustomerArgs: ["data", "where"],
  UpsertCustomerArgs: ["where", "create", "update"],
  AggregateCustomerArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByCustomerArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueCustomerAddressArgs: ["where"],
  FindFirstCustomerAddressArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCustomerAddressArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateCustomerAddressArgs: ["data"],
  CreateManyCustomerAddressArgs: ["data", "skipDuplicates"],
  DeleteCustomerAddressArgs: ["where"],
  UpdateCustomerAddressArgs: ["data", "where"],
  DeleteManyCustomerAddressArgs: ["where"],
  UpdateManyCustomerAddressArgs: ["data", "where"],
  UpsertCustomerAddressArgs: ["where", "create", "update"],
  AggregateCustomerAddressArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByCustomerAddressArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueCustomerTokenArgs: ["where"],
  FindFirstCustomerTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCustomerTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateCustomerTokenArgs: ["data"],
  CreateManyCustomerTokenArgs: ["data", "skipDuplicates"],
  DeleteCustomerTokenArgs: ["where"],
  UpdateCustomerTokenArgs: ["data", "where"],
  DeleteManyCustomerTokenArgs: ["where"],
  UpdateManyCustomerTokenArgs: ["data", "where"],
  UpsertCustomerTokenArgs: ["where", "create", "update"],
  AggregateCustomerTokenArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByCustomerTokenArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserArgs: ["data"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  DeleteUserArgs: ["where"],
  UpdateUserArgs: ["data", "where"],
  DeleteManyUserArgs: ["where"],
  UpdateManyUserArgs: ["data", "where"],
  UpsertUserArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueUserTokenArgs: ["where"],
  FindFirstUserTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserTokenArgs: ["data"],
  CreateManyUserTokenArgs: ["data", "skipDuplicates"],
  DeleteUserTokenArgs: ["where"],
  UpdateUserTokenArgs: ["data", "where"],
  DeleteManyUserTokenArgs: ["where"],
  UpdateManyUserTokenArgs: ["data", "where"],
  UpsertUserTokenArgs: ["where", "create", "update"],
  AggregateUserTokenArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserTokenArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = resolversInfo[modelName as keyof typeof resolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            crudTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
          );
          allActionsDecorator(
            actionTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
          );
        }
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      for (const decorator of decorators) {
        decorator(
          crudTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
        );
        decorator(
          actionTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
        );
      }
    }
  }
}

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            relationResolverTarget,
            relationResolverActionName,
            Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
          );
        }
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      for (const decorator of decorators) {
        decorator(
          relationResolverTarget,
          relationResolverActionName,
          Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
        );
      }
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    for (const decorator of enhanceConfig.class) {
      decorator(typeClass);
    }
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        for (const allFieldsDecorator of allFieldsDecorators) {
          allFieldsDecorator(typePrototype, typeFieldName);
        }
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      for (const fieldDecorator of fieldDecorators) {
        fieldDecorator(typePrototype, typeFieldName);
      }
    }
  }
}

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}







