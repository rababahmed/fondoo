"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyArgsTypesEnhanceMap = exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const crudResolvers = __importStar(require("./resolvers/crud/resolvers-crud.index"));
const actionResolvers = __importStar(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = __importStar(require("./resolvers/relations/resolvers.index"));
const models = __importStar(require("./models"));
const outputTypes = __importStar(require("./resolvers/outputs"));
const inputTypes = __importStar(require("./resolvers/inputs"));
const argsTypes = __importStar(require("./resolvers/crud/args.index"));
const crudResolversMap = {
    Restaurant: crudResolvers.RestaurantCrudResolver,
    ProductCategory: crudResolvers.ProductCategoryCrudResolver,
    Product: crudResolvers.ProductCrudResolver,
    Schedule: crudResolvers.ScheduleCrudResolver,
    DeliveryZone: crudResolvers.DeliveryZoneCrudResolver,
    Customer: crudResolvers.CustomerCrudResolver,
    CustomerAddress: crudResolvers.CustomerAddressCrudResolver,
    CustomerToken: crudResolvers.CustomerTokenCrudResolver,
    User: crudResolvers.UserCrudResolver,
    UserToken: crudResolvers.UserTokenCrudResolver,
    Order: crudResolvers.OrderCrudResolver
};
const relationResolversMap = {
    Restaurant: relationResolvers.RestaurantRelationsResolver,
    ProductCategory: relationResolvers.ProductCategoryRelationsResolver,
    Product: relationResolvers.ProductRelationsResolver,
    Schedule: relationResolvers.ScheduleRelationsResolver,
    DeliveryZone: relationResolvers.DeliveryZoneRelationsResolver,
    Customer: relationResolvers.CustomerRelationsResolver,
    CustomerAddress: relationResolvers.CustomerAddressRelationsResolver,
    CustomerToken: relationResolvers.CustomerTokenRelationsResolver,
    User: relationResolvers.UserRelationsResolver,
    UserToken: relationResolvers.UserTokenRelationsResolver,
    Order: relationResolvers.OrderRelationsResolver
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
    }
};
const resolversInfo = {
    Restaurant: ["restaurant", "findFirstRestaurant", "restaurants", "createRestaurant", "createManyRestaurant", "deleteRestaurant", "updateRestaurant", "deleteManyRestaurant", "updateManyRestaurant", "upsertRestaurant", "aggregateRestaurant", "groupByRestaurant"],
    ProductCategory: ["productCategory", "findFirstProductCategory", "productCategories", "createProductCategory", "createManyProductCategory", "deleteProductCategory", "updateProductCategory", "deleteManyProductCategory", "updateManyProductCategory", "upsertProductCategory", "aggregateProductCategory", "groupByProductCategory"],
    Product: ["product", "findFirstProduct", "products", "createProduct", "createManyProduct", "deleteProduct", "updateProduct", "deleteManyProduct", "updateManyProduct", "upsertProduct", "aggregateProduct", "groupByProduct"],
    Schedule: ["schedule", "findFirstSchedule", "schedules", "createSchedule", "createManySchedule", "deleteSchedule", "updateSchedule", "deleteManySchedule", "updateManySchedule", "upsertSchedule", "aggregateSchedule", "groupBySchedule"],
    DeliveryZone: ["deliveryZone", "findFirstDeliveryZone", "deliveryZones", "createDeliveryZone", "createManyDeliveryZone", "deleteDeliveryZone", "updateDeliveryZone", "deleteManyDeliveryZone", "updateManyDeliveryZone", "upsertDeliveryZone", "aggregateDeliveryZone", "groupByDeliveryZone"],
    Customer: ["customer", "findFirstCustomer", "customers", "createCustomer", "createManyCustomer", "deleteCustomer", "updateCustomer", "deleteManyCustomer", "updateManyCustomer", "upsertCustomer", "aggregateCustomer", "groupByCustomer"],
    CustomerAddress: ["customerAddress", "findFirstCustomerAddress", "customerAddresses", "createCustomerAddress", "createManyCustomerAddress", "deleteCustomerAddress", "updateCustomerAddress", "deleteManyCustomerAddress", "updateManyCustomerAddress", "upsertCustomerAddress", "aggregateCustomerAddress", "groupByCustomerAddress"],
    CustomerToken: ["customerToken", "findFirstCustomerToken", "customerTokens", "createCustomerToken", "createManyCustomerToken", "deleteCustomerToken", "updateCustomerToken", "deleteManyCustomerToken", "updateManyCustomerToken", "upsertCustomerToken", "aggregateCustomerToken", "groupByCustomerToken"],
    User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
    UserToken: ["userToken", "findFirstUserToken", "userTokens", "createUserToken", "createManyUserToken", "deleteUserToken", "updateUserToken", "deleteManyUserToken", "updateManyUserToken", "upsertUserToken", "aggregateUserToken", "groupByUserToken"],
    Order: ["order", "findFirstOrder", "orders", "createOrder", "createManyOrder", "deleteOrder", "updateOrder", "deleteManyOrder", "updateManyOrder", "upsertOrder", "aggregateOrder", "groupByOrder"]
};
const relationResolversInfo = {
    Restaurant: ["schedule", "deliveryZones", "customers", "orders", "productCategory", "products", "users"],
    ProductCategory: ["restaurants", "Product"],
    Product: ["ProductCategory", "Restaurant"],
    Schedule: ["Restaurant"],
    DeliveryZone: ["Restaurant"],
    Customer: ["token", "address", "orders", "Restaurant"],
    CustomerAddress: ["Customer", "Order"],
    CustomerToken: ["Customer"],
    User: ["token", "Restaurant", "orders"],
    UserToken: ["User"],
    Order: ["user", "restaurant", "Customer", "CustomerAddress"]
};
const modelsInfo = {
    Restaurant: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt"],
    ProductCategory: ["id", "createdAt", "name", "description", "image", "isActive", "isFeatured", "restaurantId"],
    Product: ["id", "createdAt", "name", "description", "image", "price", "spiceLevel", "isPopular", "isActive", "productCategoryId", "restaurantId"],
    Schedule: ["id", "createdAt", "openingTime", "closingTime", "minDeliveryAmount", "deliveryTime", "takeawayTime", "restaurantId"],
    DeliveryZone: ["id", "createdAt", "zoneTitle", "zonePostCode", "deliveryFeeType", "deliveryCharge", "minDeliveryAmount", "minDeliveryRadius", "maxDeliveryRadius", "restaurantId"],
    Customer: ["id", "createdAt", "firstName", "lastName", "email", "password", "phone", "restaurantId", "updatedAt"],
    CustomerAddress: ["id", "createdAt", "streetAddress", "city", "postCode", "country", "customerId"],
    CustomerToken: ["id", "token", "createdAt", "updatedAt", "customerId"],
    User: ["id", "createdAt", "firstName", "lastName", "email", "password", "phone", "role", "restaurantId"],
    UserToken: ["id", "token", "provider", "createdAt", "updatedAt", "userId"],
    Order: ["id", "items", "coupon", "deliveryCharges", "vat", "serviceCharge", "total", "isAccepted", "createdAt", "updatedAt", "userId", "restaurantId", "customerId", "customerAddressId"]
};
const inputsInfo = {
    RestaurantWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "schedule", "deliveryZones", "customers", "orders", "productCategory", "products", "updatedAt", "users"],
    RestaurantOrderByInput: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt"],
    RestaurantWhereUniqueInput: ["id"],
    RestaurantScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt"],
    ProductCategoryWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "name", "description", "image", "isActive", "isFeatured", "restaurants", "restaurantId", "Product"],
    ProductCategoryOrderByInput: ["id", "createdAt", "name", "description", "image", "isActive", "isFeatured", "restaurantId"],
    ProductCategoryWhereUniqueInput: ["id"],
    ProductCategoryScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "name", "description", "image", "isActive", "isFeatured", "restaurantId"],
    ProductWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "name", "description", "image", "price", "spiceLevel", "isPopular", "isActive", "ProductCategory", "productCategoryId", "Restaurant", "restaurantId"],
    ProductOrderByInput: ["id", "createdAt", "name", "description", "image", "price", "spiceLevel", "isPopular", "isActive", "productCategoryId", "restaurantId"],
    ProductWhereUniqueInput: ["id"],
    ProductScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "name", "description", "image", "price", "spiceLevel", "isPopular", "isActive", "productCategoryId", "restaurantId"],
    ScheduleWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "openingTime", "closingTime", "minDeliveryAmount", "deliveryTime", "takeawayTime", "Restaurant", "restaurantId"],
    ScheduleOrderByInput: ["id", "createdAt", "openingTime", "closingTime", "minDeliveryAmount", "deliveryTime", "takeawayTime", "restaurantId"],
    ScheduleWhereUniqueInput: ["id"],
    ScheduleScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "openingTime", "closingTime", "minDeliveryAmount", "deliveryTime", "takeawayTime", "restaurantId"],
    DeliveryZoneWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "zoneTitle", "zonePostCode", "deliveryFeeType", "deliveryCharge", "minDeliveryAmount", "minDeliveryRadius", "maxDeliveryRadius", "Restaurant", "restaurantId"],
    DeliveryZoneOrderByInput: ["id", "createdAt", "zoneTitle", "zonePostCode", "deliveryFeeType", "deliveryCharge", "minDeliveryAmount", "minDeliveryRadius", "maxDeliveryRadius", "restaurantId"],
    DeliveryZoneWhereUniqueInput: ["id"],
    DeliveryZoneScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "zoneTitle", "zonePostCode", "deliveryFeeType", "deliveryCharge", "minDeliveryAmount", "minDeliveryRadius", "maxDeliveryRadius", "restaurantId"],
    CustomerWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "firstName", "lastName", "email", "password", "phone", "token", "address", "orders", "Restaurant", "restaurantId", "updatedAt"],
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
    UserWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "firstName", "lastName", "email", "password", "phone", "token", "role", "Restaurant", "restaurantId", "orders"],
    UserOrderByInput: ["id", "createdAt", "firstName", "lastName", "email", "password", "phone", "role", "restaurantId"],
    UserWhereUniqueInput: ["id", "email"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "firstName", "lastName", "email", "password", "phone", "role", "restaurantId"],
    UserTokenWhereInput: ["AND", "OR", "NOT", "id", "token", "provider", "createdAt", "updatedAt", "User", "userId"],
    UserTokenOrderByInput: ["id", "token", "provider", "createdAt", "updatedAt", "userId"],
    UserTokenWhereUniqueInput: ["id"],
    UserTokenScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "token", "provider", "createdAt", "updatedAt", "userId"],
    OrderWhereInput: ["AND", "OR", "NOT", "id", "items", "coupon", "deliveryCharges", "vat", "serviceCharge", "total", "isAccepted", "user", "restaurant", "createdAt", "updatedAt", "userId", "restaurantId", "Customer", "customerId", "CustomerAddress", "customerAddressId"],
    OrderOrderByInput: ["id", "items", "coupon", "deliveryCharges", "vat", "serviceCharge", "total", "isAccepted", "createdAt", "updatedAt", "userId", "restaurantId", "customerId", "customerAddressId"],
    OrderWhereUniqueInput: ["id"],
    OrderScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "items", "coupon", "deliveryCharges", "vat", "serviceCharge", "total", "isAccepted", "createdAt", "updatedAt", "userId", "restaurantId", "customerId", "customerAddressId"],
    RestaurantCreateInput: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt", "schedule", "deliveryZones", "customers", "orders", "productCategory", "products", "users"],
    RestaurantUpdateInput: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt", "schedule", "deliveryZones", "customers", "orders", "productCategory", "products", "users"],
    RestaurantCreateManyInput: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt"],
    RestaurantUpdateManyMutationInput: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt"],
    ProductCategoryCreateInput: ["id", "createdAt", "name", "description", "image", "isActive", "isFeatured", "restaurants", "Product"],
    ProductCategoryUpdateInput: ["id", "createdAt", "name", "description", "image", "isActive", "isFeatured", "restaurants", "Product"],
    ProductCategoryCreateManyInput: ["id", "createdAt", "name", "description", "image", "isActive", "isFeatured", "restaurantId"],
    ProductCategoryUpdateManyMutationInput: ["id", "createdAt", "name", "description", "image", "isActive", "isFeatured"],
    ProductCreateInput: ["id", "createdAt", "name", "description", "image", "price", "spiceLevel", "isPopular", "isActive", "ProductCategory", "Restaurant"],
    ProductUpdateInput: ["id", "createdAt", "name", "description", "image", "price", "spiceLevel", "isPopular", "isActive", "ProductCategory", "Restaurant"],
    ProductCreateManyInput: ["id", "createdAt", "name", "description", "image", "price", "spiceLevel", "isPopular", "isActive", "productCategoryId", "restaurantId"],
    ProductUpdateManyMutationInput: ["id", "createdAt", "name", "description", "image", "price", "spiceLevel", "isPopular", "isActive"],
    ScheduleCreateInput: ["createdAt", "openingTime", "closingTime", "minDeliveryAmount", "deliveryTime", "takeawayTime", "Restaurant"],
    ScheduleUpdateInput: ["createdAt", "openingTime", "closingTime", "minDeliveryAmount", "deliveryTime", "takeawayTime", "Restaurant"],
    ScheduleCreateManyInput: ["id", "createdAt", "openingTime", "closingTime", "minDeliveryAmount", "deliveryTime", "takeawayTime", "restaurantId"],
    ScheduleUpdateManyMutationInput: ["createdAt", "openingTime", "closingTime", "minDeliveryAmount", "deliveryTime", "takeawayTime"],
    DeliveryZoneCreateInput: ["createdAt", "zoneTitle", "zonePostCode", "deliveryFeeType", "deliveryCharge", "minDeliveryAmount", "minDeliveryRadius", "maxDeliveryRadius", "Restaurant"],
    DeliveryZoneUpdateInput: ["createdAt", "zoneTitle", "zonePostCode", "deliveryFeeType", "deliveryCharge", "minDeliveryAmount", "minDeliveryRadius", "maxDeliveryRadius", "Restaurant"],
    DeliveryZoneCreateManyInput: ["id", "createdAt", "zoneTitle", "zonePostCode", "deliveryFeeType", "deliveryCharge", "minDeliveryAmount", "minDeliveryRadius", "maxDeliveryRadius", "restaurantId"],
    DeliveryZoneUpdateManyMutationInput: ["createdAt", "zoneTitle", "zonePostCode", "deliveryFeeType", "deliveryCharge", "minDeliveryAmount", "minDeliveryRadius", "maxDeliveryRadius"],
    CustomerCreateInput: ["createdAt", "firstName", "lastName", "email", "password", "phone", "updatedAt", "token", "address", "orders", "Restaurant"],
    CustomerUpdateInput: ["createdAt", "firstName", "lastName", "email", "password", "phone", "updatedAt", "token", "address", "orders", "Restaurant"],
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
    UserCreateInput: ["createdAt", "firstName", "lastName", "email", "password", "phone", "role", "token", "Restaurant", "orders"],
    UserUpdateInput: ["createdAt", "firstName", "lastName", "email", "password", "phone", "role", "token", "Restaurant", "orders"],
    UserCreateManyInput: ["id", "createdAt", "firstName", "lastName", "email", "password", "phone", "role", "restaurantId"],
    UserUpdateManyMutationInput: ["createdAt", "firstName", "lastName", "email", "password", "phone", "role"],
    UserTokenCreateInput: ["token", "provider", "createdAt", "updatedAt", "User"],
    UserTokenUpdateInput: ["token", "provider", "createdAt", "updatedAt", "User"],
    UserTokenCreateManyInput: ["id", "token", "provider", "createdAt", "updatedAt", "userId"],
    UserTokenUpdateManyMutationInput: ["token", "provider", "createdAt", "updatedAt"],
    OrderCreateInput: ["items", "coupon", "deliveryCharges", "vat", "serviceCharge", "total", "isAccepted", "createdAt", "updatedAt", "user", "restaurant", "Customer", "CustomerAddress"],
    OrderUpdateInput: ["items", "coupon", "deliveryCharges", "vat", "serviceCharge", "total", "isAccepted", "createdAt", "updatedAt", "user", "restaurant", "Customer", "CustomerAddress"],
    OrderCreateManyInput: ["id", "items", "coupon", "deliveryCharges", "vat", "serviceCharge", "total", "isAccepted", "createdAt", "updatedAt", "userId", "restaurantId", "customerId", "customerAddressId"],
    OrderUpdateManyMutationInput: ["items", "coupon", "deliveryCharges", "vat", "serviceCharge", "total", "isAccepted", "createdAt", "updatedAt"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    BoolNullableFilter: ["equals", "not"],
    ScheduleListRelationFilter: ["every", "some", "none"],
    DeliveryZoneListRelationFilter: ["every", "some", "none"],
    CustomerListRelationFilter: ["every", "some", "none"],
    OrderListRelationFilter: ["every", "some", "none"],
    ProductCategoryListRelationFilter: ["every", "some", "none"],
    ProductListRelationFilter: ["every", "some", "none"],
    UserListRelationFilter: ["every", "some", "none"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "count", "min", "max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "count", "min", "max"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "count", "min", "max"],
    BoolNullableWithAggregatesFilter: ["equals", "not", "count", "min", "max"],
    RestaurantRelationFilter: ["is", "isNot"],
    IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    EnumSpiceLevelFilter: ["equals", "in", "notIn", "not"],
    ProductCategoryRelationFilter: ["is", "isNot"],
    IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "count", "avg", "sum", "min", "max"],
    EnumSpiceLevelWithAggregatesFilter: ["equals", "in", "notIn", "not", "count", "min", "max"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "count", "avg", "sum", "min", "max"],
    EnumDeliveryFeeFilter: ["equals", "in", "notIn", "not"],
    EnumDeliveryFeeWithAggregatesFilter: ["equals", "in", "notIn", "not", "count", "min", "max"],
    CustomerTokenListRelationFilter: ["every", "some", "none"],
    CustomerAddressListRelationFilter: ["every", "some", "none"],
    CustomerRelationFilter: ["is", "isNot"],
    UserTokenListRelationFilter: ["every", "some", "none"],
    EnumRoleFilter: ["equals", "in", "notIn", "not"],
    EnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "count", "min", "max"],
    UserRelationFilter: ["is", "isNot"],
    JsonFilter: ["equals", "not"],
    FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    BoolFilter: ["equals", "not"],
    CustomerAddressRelationFilter: ["is", "isNot"],
    JsonWithAggregatesFilter: ["equals", "not", "count", "min", "max"],
    FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "count", "avg", "sum", "min", "max"],
    BoolWithAggregatesFilter: ["equals", "not", "count", "min", "max"],
    ScheduleCreateNestedManyWithoutRestaurantInput: ["create", "connectOrCreate", "createMany", "connect"],
    DeliveryZoneCreateNestedManyWithoutRestaurantInput: ["create", "connectOrCreate", "createMany", "connect"],
    CustomerCreateNestedManyWithoutRestaurantInput: ["create", "connectOrCreate", "createMany", "connect"],
    OrderCreateNestedManyWithoutRestaurantInput: ["create", "connectOrCreate", "createMany", "connect"],
    ProductCategoryCreateNestedManyWithoutRestaurantsInput: ["create", "connectOrCreate", "createMany", "connect"],
    ProductCreateNestedManyWithoutRestaurantInput: ["create", "connectOrCreate", "createMany", "connect"],
    UserCreateNestedManyWithoutRestaurantInput: ["create", "connectOrCreate", "createMany", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    NullableBoolFieldUpdateOperationsInput: ["set"],
    ScheduleUpdateManyWithoutRestaurantInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    DeliveryZoneUpdateManyWithoutRestaurantInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    CustomerUpdateManyWithoutRestaurantInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    OrderUpdateManyWithoutRestaurantInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    ProductCategoryUpdateManyWithoutRestaurantsInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    ProductUpdateManyWithoutRestaurantInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    UserUpdateManyWithoutRestaurantInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    RestaurantCreateNestedOneWithoutProductCategoryInput: ["create", "connectOrCreate", "connect"],
    ProductCreateNestedManyWithoutProductCategoryInput: ["create", "connectOrCreate", "createMany", "connect"],
    RestaurantUpdateOneRequiredWithoutProductCategoryInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    ProductUpdateManyWithoutProductCategoryInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    ProductCategoryCreateNestedOneWithoutProductInput: ["create", "connectOrCreate", "connect"],
    RestaurantCreateNestedOneWithoutProductsInput: ["create", "connectOrCreate", "connect"],
    NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    EnumSpiceLevelFieldUpdateOperationsInput: ["set"],
    ProductCategoryUpdateOneWithoutProductInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
    RestaurantUpdateOneWithoutProductsInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
    RestaurantCreateNestedOneWithoutScheduleInput: ["create", "connectOrCreate", "connect"],
    RestaurantUpdateOneWithoutScheduleInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    RestaurantCreateNestedOneWithoutDeliveryZonesInput: ["create", "connectOrCreate", "connect"],
    EnumDeliveryFeeFieldUpdateOperationsInput: ["set"],
    RestaurantUpdateOneWithoutDeliveryZonesInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
    CustomerTokenCreateNestedManyWithoutCustomerInput: ["create", "connectOrCreate", "createMany", "connect"],
    CustomerAddressCreateNestedManyWithoutCustomerInput: ["create", "connectOrCreate", "createMany", "connect"],
    OrderCreateNestedManyWithoutCustomerInput: ["create", "connectOrCreate", "createMany", "connect"],
    RestaurantCreateNestedOneWithoutCustomersInput: ["create", "connectOrCreate", "connect"],
    CustomerTokenUpdateManyWithoutCustomerInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    CustomerAddressUpdateManyWithoutCustomerInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    OrderUpdateManyWithoutCustomerInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    RestaurantUpdateOneWithoutCustomersInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
    CustomerCreateNestedOneWithoutAddressInput: ["create", "connectOrCreate", "connect"],
    OrderCreateNestedManyWithoutCustomerAddressInput: ["create", "connectOrCreate", "createMany", "connect"],
    CustomerUpdateOneWithoutAddressInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
    OrderUpdateManyWithoutCustomerAddressInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    CustomerCreateNestedOneWithoutTokenInput: ["create", "connectOrCreate", "connect"],
    CustomerUpdateOneWithoutTokenInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
    UserTokenCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    RestaurantCreateNestedOneWithoutUsersInput: ["create", "connectOrCreate", "connect"],
    OrderCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    EnumRoleFieldUpdateOperationsInput: ["set"],
    UserTokenUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    RestaurantUpdateOneWithoutUsersInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
    OrderUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    UserCreateNestedOneWithoutTokenInput: ["create", "connectOrCreate", "connect"],
    UserUpdateOneWithoutTokenInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
    UserCreateNestedOneWithoutOrdersInput: ["create", "connectOrCreate", "connect"],
    RestaurantCreateNestedOneWithoutOrdersInput: ["create", "connectOrCreate", "connect"],
    CustomerCreateNestedOneWithoutOrdersInput: ["create", "connectOrCreate", "connect"],
    CustomerAddressCreateNestedOneWithoutOrderInput: ["create", "connectOrCreate", "connect"],
    FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    BoolFieldUpdateOperationsInput: ["set"],
    UserUpdateOneRequiredWithoutOrdersInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    RestaurantUpdateOneRequiredWithoutOrdersInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    CustomerUpdateOneWithoutOrdersInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
    CustomerAddressUpdateOneWithoutOrderInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
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
    NestedBoolFilter: ["equals", "not"],
    NestedJsonFilter: ["equals", "not"],
    NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "count", "avg", "sum", "min", "max"],
    NestedBoolWithAggregatesFilter: ["equals", "not", "count", "min", "max"],
    ScheduleCreateWithoutRestaurantInput: ["createdAt", "openingTime", "closingTime", "minDeliveryAmount", "deliveryTime", "takeawayTime"],
    ScheduleCreateOrConnectWithoutRestaurantInput: ["where", "create"],
    ScheduleCreateManyRestaurantInputEnvelope: ["data", "skipDuplicates"],
    DeliveryZoneCreateWithoutRestaurantInput: ["createdAt", "zoneTitle", "zonePostCode", "deliveryFeeType", "deliveryCharge", "minDeliveryAmount", "minDeliveryRadius", "maxDeliveryRadius"],
    DeliveryZoneCreateOrConnectWithoutRestaurantInput: ["where", "create"],
    DeliveryZoneCreateManyRestaurantInputEnvelope: ["data", "skipDuplicates"],
    CustomerCreateWithoutRestaurantInput: ["createdAt", "firstName", "lastName", "email", "password", "phone", "updatedAt", "token", "address", "orders"],
    CustomerCreateOrConnectWithoutRestaurantInput: ["where", "create"],
    CustomerCreateManyRestaurantInputEnvelope: ["data", "skipDuplicates"],
    OrderCreateWithoutRestaurantInput: ["items", "coupon", "deliveryCharges", "vat", "serviceCharge", "total", "isAccepted", "createdAt", "updatedAt", "user", "Customer", "CustomerAddress"],
    OrderCreateOrConnectWithoutRestaurantInput: ["where", "create"],
    OrderCreateManyRestaurantInputEnvelope: ["data", "skipDuplicates"],
    ProductCategoryCreateWithoutRestaurantsInput: ["id", "createdAt", "name", "description", "image", "isActive", "isFeatured", "Product"],
    ProductCategoryCreateOrConnectWithoutRestaurantsInput: ["where", "create"],
    ProductCategoryCreateManyRestaurantsInputEnvelope: ["data", "skipDuplicates"],
    ProductCreateWithoutRestaurantInput: ["id", "createdAt", "name", "description", "image", "price", "spiceLevel", "isPopular", "isActive", "ProductCategory"],
    ProductCreateOrConnectWithoutRestaurantInput: ["where", "create"],
    ProductCreateManyRestaurantInputEnvelope: ["data", "skipDuplicates"],
    UserCreateWithoutRestaurantInput: ["createdAt", "firstName", "lastName", "email", "password", "phone", "role", "token", "orders"],
    UserCreateOrConnectWithoutRestaurantInput: ["where", "create"],
    UserCreateManyRestaurantInputEnvelope: ["data", "skipDuplicates"],
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
    OrderScalarWhereInput: ["AND", "OR", "NOT", "id", "items", "coupon", "deliveryCharges", "vat", "serviceCharge", "total", "isAccepted", "createdAt", "updatedAt", "userId", "restaurantId", "customerId", "customerAddressId"],
    ProductCategoryUpsertWithWhereUniqueWithoutRestaurantsInput: ["where", "update", "create"],
    ProductCategoryUpdateWithWhereUniqueWithoutRestaurantsInput: ["where", "data"],
    ProductCategoryUpdateManyWithWhereWithoutRestaurantsInput: ["where", "data"],
    ProductCategoryScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "name", "description", "image", "isActive", "isFeatured", "restaurantId"],
    ProductUpsertWithWhereUniqueWithoutRestaurantInput: ["where", "update", "create"],
    ProductUpdateWithWhereUniqueWithoutRestaurantInput: ["where", "data"],
    ProductUpdateManyWithWhereWithoutRestaurantInput: ["where", "data"],
    ProductScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "name", "description", "image", "price", "spiceLevel", "isPopular", "isActive", "productCategoryId", "restaurantId"],
    UserUpsertWithWhereUniqueWithoutRestaurantInput: ["where", "update", "create"],
    UserUpdateWithWhereUniqueWithoutRestaurantInput: ["where", "data"],
    UserUpdateManyWithWhereWithoutRestaurantInput: ["where", "data"],
    UserScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "firstName", "lastName", "email", "password", "phone", "role", "restaurantId"],
    RestaurantCreateWithoutProductCategoryInput: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt", "schedule", "deliveryZones", "customers", "orders", "products", "users"],
    RestaurantCreateOrConnectWithoutProductCategoryInput: ["where", "create"],
    ProductCreateWithoutProductCategoryInput: ["id", "createdAt", "name", "description", "image", "price", "spiceLevel", "isPopular", "isActive", "Restaurant"],
    ProductCreateOrConnectWithoutProductCategoryInput: ["where", "create"],
    ProductCreateManyProductCategoryInputEnvelope: ["data", "skipDuplicates"],
    RestaurantUpsertWithoutProductCategoryInput: ["update", "create"],
    RestaurantUpdateWithoutProductCategoryInput: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt", "schedule", "deliveryZones", "customers", "orders", "products", "users"],
    ProductUpsertWithWhereUniqueWithoutProductCategoryInput: ["where", "update", "create"],
    ProductUpdateWithWhereUniqueWithoutProductCategoryInput: ["where", "data"],
    ProductUpdateManyWithWhereWithoutProductCategoryInput: ["where", "data"],
    ProductCategoryCreateWithoutProductInput: ["id", "createdAt", "name", "description", "image", "isActive", "isFeatured", "restaurants"],
    ProductCategoryCreateOrConnectWithoutProductInput: ["where", "create"],
    RestaurantCreateWithoutProductsInput: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt", "schedule", "deliveryZones", "customers", "orders", "productCategory", "users"],
    RestaurantCreateOrConnectWithoutProductsInput: ["where", "create"],
    ProductCategoryUpsertWithoutProductInput: ["update", "create"],
    ProductCategoryUpdateWithoutProductInput: ["id", "createdAt", "name", "description", "image", "isActive", "isFeatured", "restaurants"],
    RestaurantUpsertWithoutProductsInput: ["update", "create"],
    RestaurantUpdateWithoutProductsInput: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt", "schedule", "deliveryZones", "customers", "orders", "productCategory", "users"],
    RestaurantCreateWithoutScheduleInput: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt", "deliveryZones", "customers", "orders", "productCategory", "products", "users"],
    RestaurantCreateOrConnectWithoutScheduleInput: ["where", "create"],
    RestaurantUpsertWithoutScheduleInput: ["update", "create"],
    RestaurantUpdateWithoutScheduleInput: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt", "deliveryZones", "customers", "orders", "productCategory", "products", "users"],
    RestaurantCreateWithoutDeliveryZonesInput: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt", "schedule", "customers", "orders", "productCategory", "products", "users"],
    RestaurantCreateOrConnectWithoutDeliveryZonesInput: ["where", "create"],
    RestaurantUpsertWithoutDeliveryZonesInput: ["update", "create"],
    RestaurantUpdateWithoutDeliveryZonesInput: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt", "schedule", "customers", "orders", "productCategory", "products", "users"],
    CustomerTokenCreateWithoutCustomerInput: ["token", "createdAt", "updatedAt"],
    CustomerTokenCreateOrConnectWithoutCustomerInput: ["where", "create"],
    CustomerTokenCreateManyCustomerInputEnvelope: ["data", "skipDuplicates"],
    CustomerAddressCreateWithoutCustomerInput: ["createdAt", "streetAddress", "city", "postCode", "country", "Order"],
    CustomerAddressCreateOrConnectWithoutCustomerInput: ["where", "create"],
    CustomerAddressCreateManyCustomerInputEnvelope: ["data", "skipDuplicates"],
    OrderCreateWithoutCustomerInput: ["items", "coupon", "deliveryCharges", "vat", "serviceCharge", "total", "isAccepted", "createdAt", "updatedAt", "user", "restaurant", "CustomerAddress"],
    OrderCreateOrConnectWithoutCustomerInput: ["where", "create"],
    OrderCreateManyCustomerInputEnvelope: ["data", "skipDuplicates"],
    RestaurantCreateWithoutCustomersInput: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt", "schedule", "deliveryZones", "orders", "productCategory", "products", "users"],
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
    RestaurantUpsertWithoutCustomersInput: ["update", "create"],
    RestaurantUpdateWithoutCustomersInput: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt", "schedule", "deliveryZones", "orders", "productCategory", "products", "users"],
    CustomerCreateWithoutAddressInput: ["createdAt", "firstName", "lastName", "email", "password", "phone", "updatedAt", "token", "orders", "Restaurant"],
    CustomerCreateOrConnectWithoutAddressInput: ["where", "create"],
    OrderCreateWithoutCustomerAddressInput: ["items", "coupon", "deliveryCharges", "vat", "serviceCharge", "total", "isAccepted", "createdAt", "updatedAt", "user", "restaurant", "Customer"],
    OrderCreateOrConnectWithoutCustomerAddressInput: ["where", "create"],
    OrderCreateManyCustomerAddressInputEnvelope: ["data", "skipDuplicates"],
    CustomerUpsertWithoutAddressInput: ["update", "create"],
    CustomerUpdateWithoutAddressInput: ["createdAt", "firstName", "lastName", "email", "password", "phone", "updatedAt", "token", "orders", "Restaurant"],
    OrderUpsertWithWhereUniqueWithoutCustomerAddressInput: ["where", "update", "create"],
    OrderUpdateWithWhereUniqueWithoutCustomerAddressInput: ["where", "data"],
    OrderUpdateManyWithWhereWithoutCustomerAddressInput: ["where", "data"],
    CustomerCreateWithoutTokenInput: ["createdAt", "firstName", "lastName", "email", "password", "phone", "updatedAt", "address", "orders", "Restaurant"],
    CustomerCreateOrConnectWithoutTokenInput: ["where", "create"],
    CustomerUpsertWithoutTokenInput: ["update", "create"],
    CustomerUpdateWithoutTokenInput: ["createdAt", "firstName", "lastName", "email", "password", "phone", "updatedAt", "address", "orders", "Restaurant"],
    UserTokenCreateWithoutUserInput: ["token", "provider", "createdAt", "updatedAt"],
    UserTokenCreateOrConnectWithoutUserInput: ["where", "create"],
    UserTokenCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    RestaurantCreateWithoutUsersInput: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt", "schedule", "deliveryZones", "customers", "orders", "productCategory", "products"],
    RestaurantCreateOrConnectWithoutUsersInput: ["where", "create"],
    OrderCreateWithoutUserInput: ["items", "coupon", "deliveryCharges", "vat", "serviceCharge", "total", "isAccepted", "createdAt", "updatedAt", "restaurant", "Customer", "CustomerAddress"],
    OrderCreateOrConnectWithoutUserInput: ["where", "create"],
    OrderCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    UserTokenUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    UserTokenUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    UserTokenUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    UserTokenScalarWhereInput: ["AND", "OR", "NOT", "id", "token", "provider", "createdAt", "updatedAt", "userId"],
    RestaurantUpsertWithoutUsersInput: ["update", "create"],
    RestaurantUpdateWithoutUsersInput: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt", "schedule", "deliveryZones", "customers", "orders", "productCategory", "products"],
    OrderUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    OrderUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    OrderUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    UserCreateWithoutTokenInput: ["createdAt", "firstName", "lastName", "email", "password", "phone", "role", "Restaurant", "orders"],
    UserCreateOrConnectWithoutTokenInput: ["where", "create"],
    UserUpsertWithoutTokenInput: ["update", "create"],
    UserUpdateWithoutTokenInput: ["createdAt", "firstName", "lastName", "email", "password", "phone", "role", "Restaurant", "orders"],
    UserCreateWithoutOrdersInput: ["createdAt", "firstName", "lastName", "email", "password", "phone", "role", "token", "Restaurant"],
    UserCreateOrConnectWithoutOrdersInput: ["where", "create"],
    RestaurantCreateWithoutOrdersInput: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt", "schedule", "deliveryZones", "customers", "productCategory", "products", "users"],
    RestaurantCreateOrConnectWithoutOrdersInput: ["where", "create"],
    CustomerCreateWithoutOrdersInput: ["createdAt", "firstName", "lastName", "email", "password", "phone", "updatedAt", "token", "address", "Restaurant"],
    CustomerCreateOrConnectWithoutOrdersInput: ["where", "create"],
    CustomerAddressCreateWithoutOrderInput: ["createdAt", "streetAddress", "city", "postCode", "country", "Customer"],
    CustomerAddressCreateOrConnectWithoutOrderInput: ["where", "create"],
    UserUpsertWithoutOrdersInput: ["update", "create"],
    UserUpdateWithoutOrdersInput: ["createdAt", "firstName", "lastName", "email", "password", "phone", "role", "token", "Restaurant"],
    RestaurantUpsertWithoutOrdersInput: ["update", "create"],
    RestaurantUpdateWithoutOrdersInput: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt", "schedule", "deliveryZones", "customers", "productCategory", "products", "users"],
    CustomerUpsertWithoutOrdersInput: ["update", "create"],
    CustomerUpdateWithoutOrdersInput: ["createdAt", "firstName", "lastName", "email", "password", "phone", "updatedAt", "token", "address", "Restaurant"],
    CustomerAddressUpsertWithoutOrderInput: ["update", "create"],
    CustomerAddressUpdateWithoutOrderInput: ["createdAt", "streetAddress", "city", "postCode", "country", "Customer"],
    ScheduleCreateManyRestaurantInput: ["id", "createdAt", "openingTime", "closingTime", "minDeliveryAmount", "deliveryTime", "takeawayTime"],
    DeliveryZoneCreateManyRestaurantInput: ["id", "createdAt", "zoneTitle", "zonePostCode", "deliveryFeeType", "deliveryCharge", "minDeliveryAmount", "minDeliveryRadius", "maxDeliveryRadius"],
    CustomerCreateManyRestaurantInput: ["id", "createdAt", "firstName", "lastName", "email", "password", "phone", "updatedAt"],
    OrderCreateManyRestaurantInput: ["id", "items", "coupon", "deliveryCharges", "vat", "serviceCharge", "total", "isAccepted", "createdAt", "updatedAt", "userId", "customerId", "customerAddressId"],
    ProductCategoryCreateManyRestaurantsInput: ["id", "createdAt", "name", "description", "image", "isActive", "isFeatured"],
    ProductCreateManyRestaurantInput: ["id", "createdAt", "name", "description", "image", "price", "spiceLevel", "isPopular", "isActive", "productCategoryId"],
    UserCreateManyRestaurantInput: ["id", "createdAt", "firstName", "lastName", "email", "password", "phone", "role"],
    ScheduleUpdateWithoutRestaurantInput: ["createdAt", "openingTime", "closingTime", "minDeliveryAmount", "deliveryTime", "takeawayTime"],
    DeliveryZoneUpdateWithoutRestaurantInput: ["createdAt", "zoneTitle", "zonePostCode", "deliveryFeeType", "deliveryCharge", "minDeliveryAmount", "minDeliveryRadius", "maxDeliveryRadius"],
    CustomerUpdateWithoutRestaurantInput: ["createdAt", "firstName", "lastName", "email", "password", "phone", "updatedAt", "token", "address", "orders"],
    OrderUpdateWithoutRestaurantInput: ["items", "coupon", "deliveryCharges", "vat", "serviceCharge", "total", "isAccepted", "createdAt", "updatedAt", "user", "Customer", "CustomerAddress"],
    ProductCategoryUpdateWithoutRestaurantsInput: ["id", "createdAt", "name", "description", "image", "isActive", "isFeatured", "Product"],
    ProductUpdateWithoutRestaurantInput: ["id", "createdAt", "name", "description", "image", "price", "spiceLevel", "isPopular", "isActive", "ProductCategory"],
    UserUpdateWithoutRestaurantInput: ["createdAt", "firstName", "lastName", "email", "password", "phone", "role", "token", "orders"],
    ProductCreateManyProductCategoryInput: ["id", "createdAt", "name", "description", "image", "price", "spiceLevel", "isPopular", "isActive", "restaurantId"],
    ProductUpdateWithoutProductCategoryInput: ["id", "createdAt", "name", "description", "image", "price", "spiceLevel", "isPopular", "isActive", "Restaurant"],
    CustomerTokenCreateManyCustomerInput: ["id", "token", "createdAt", "updatedAt"],
    CustomerAddressCreateManyCustomerInput: ["id", "createdAt", "streetAddress", "city", "postCode", "country"],
    OrderCreateManyCustomerInput: ["id", "items", "coupon", "deliveryCharges", "vat", "serviceCharge", "total", "isAccepted", "createdAt", "updatedAt", "userId", "restaurantId", "customerAddressId"],
    CustomerTokenUpdateWithoutCustomerInput: ["token", "createdAt", "updatedAt"],
    CustomerAddressUpdateWithoutCustomerInput: ["createdAt", "streetAddress", "city", "postCode", "country", "Order"],
    OrderUpdateWithoutCustomerInput: ["items", "coupon", "deliveryCharges", "vat", "serviceCharge", "total", "isAccepted", "createdAt", "updatedAt", "user", "restaurant", "CustomerAddress"],
    OrderCreateManyCustomerAddressInput: ["id", "items", "coupon", "deliveryCharges", "vat", "serviceCharge", "total", "isAccepted", "createdAt", "updatedAt", "userId", "restaurantId", "customerId"],
    OrderUpdateWithoutCustomerAddressInput: ["items", "coupon", "deliveryCharges", "vat", "serviceCharge", "total", "isAccepted", "createdAt", "updatedAt", "user", "restaurant", "Customer"],
    UserTokenCreateManyUserInput: ["id", "token", "provider", "createdAt", "updatedAt"],
    OrderCreateManyUserInput: ["id", "items", "coupon", "deliveryCharges", "vat", "serviceCharge", "total", "isAccepted", "createdAt", "updatedAt", "restaurantId", "customerId", "customerAddressId"],
    UserTokenUpdateWithoutUserInput: ["token", "provider", "createdAt", "updatedAt"],
    OrderUpdateWithoutUserInput: ["items", "coupon", "deliveryCharges", "vat", "serviceCharge", "total", "isAccepted", "createdAt", "updatedAt", "restaurant", "Customer", "CustomerAddress"]
};
const outputsInfo = {
    AggregateRestaurant: ["count", "min", "max"],
    RestaurantGroupBy: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt", "count", "min", "max"],
    AggregateProductCategory: ["count", "min", "max"],
    ProductCategoryGroupBy: ["id", "createdAt", "name", "description", "image", "isActive", "isFeatured", "restaurantId", "count", "min", "max"],
    AggregateProduct: ["count", "avg", "sum", "min", "max"],
    ProductGroupBy: ["id", "createdAt", "name", "description", "image", "price", "spiceLevel", "isPopular", "isActive", "productCategoryId", "restaurantId", "count", "avg", "sum", "min", "max"],
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
    UserGroupBy: ["id", "createdAt", "firstName", "lastName", "email", "password", "phone", "role", "restaurantId", "count", "avg", "sum", "min", "max"],
    AggregateUserToken: ["count", "avg", "sum", "min", "max"],
    UserTokenGroupBy: ["id", "token", "provider", "createdAt", "updatedAt", "userId", "count", "avg", "sum", "min", "max"],
    AggregateOrder: ["count", "avg", "sum", "min", "max"],
    OrderGroupBy: ["id", "items", "coupon", "deliveryCharges", "vat", "serviceCharge", "total", "isAccepted", "createdAt", "updatedAt", "userId", "restaurantId", "customerId", "customerAddressId", "count", "avg", "sum", "min", "max"],
    AffectedRowsOutput: ["count"],
    RestaurantCountAggregate: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt", "_all"],
    RestaurantMinAggregate: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt"],
    RestaurantMaxAggregate: ["id", "createdAt", "name", "email", "businessPhone", "reservationPhone", "url", "address", "city", "postCode", "country", "currency", "priceRange", "diningStyle", "vat", "serviceCharge", "hasParking", "hasPartyFacilities", "hasKidsZone", "isTakeaway", "isDelivery", "isReservation", "isOrdering", "isAutoAcceptOrder", "isAutoAcceptReservation", "updatedAt"],
    ProductCategoryCountAggregate: ["id", "createdAt", "name", "description", "image", "isActive", "isFeatured", "restaurantId", "_all"],
    ProductCategoryMinAggregate: ["id", "createdAt", "name", "description", "image", "isActive", "isFeatured", "restaurantId"],
    ProductCategoryMaxAggregate: ["id", "createdAt", "name", "description", "image", "isActive", "isFeatured", "restaurantId"],
    ProductCountAggregate: ["id", "createdAt", "name", "description", "image", "price", "spiceLevel", "isPopular", "isActive", "productCategoryId", "restaurantId", "_all"],
    ProductAvgAggregate: ["price"],
    ProductSumAggregate: ["price"],
    ProductMinAggregate: ["id", "createdAt", "name", "description", "image", "price", "spiceLevel", "isPopular", "isActive", "productCategoryId", "restaurantId"],
    ProductMaxAggregate: ["id", "createdAt", "name", "description", "image", "price", "spiceLevel", "isPopular", "isActive", "productCategoryId", "restaurantId"],
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
    UserCountAggregate: ["id", "createdAt", "firstName", "lastName", "email", "password", "phone", "role", "restaurantId", "_all"],
    UserAvgAggregate: ["id"],
    UserSumAggregate: ["id"],
    UserMinAggregate: ["id", "createdAt", "firstName", "lastName", "email", "password", "phone", "role", "restaurantId"],
    UserMaxAggregate: ["id", "createdAt", "firstName", "lastName", "email", "password", "phone", "role", "restaurantId"],
    UserTokenCountAggregate: ["id", "token", "provider", "createdAt", "updatedAt", "userId", "_all"],
    UserTokenAvgAggregate: ["id", "userId"],
    UserTokenSumAggregate: ["id", "userId"],
    UserTokenMinAggregate: ["id", "token", "provider", "createdAt", "updatedAt", "userId"],
    UserTokenMaxAggregate: ["id", "token", "provider", "createdAt", "updatedAt", "userId"],
    OrderCountAggregate: ["id", "items", "coupon", "deliveryCharges", "vat", "serviceCharge", "total", "isAccepted", "createdAt", "updatedAt", "userId", "restaurantId", "customerId", "customerAddressId", "_all"],
    OrderAvgAggregate: ["id", "deliveryCharges", "vat", "serviceCharge", "total", "userId", "customerId", "customerAddressId"],
    OrderSumAggregate: ["id", "deliveryCharges", "vat", "serviceCharge", "total", "userId", "customerId", "customerAddressId"],
    OrderMinAggregate: ["id", "coupon", "deliveryCharges", "vat", "serviceCharge", "total", "isAccepted", "createdAt", "updatedAt", "userId", "restaurantId", "customerId", "customerAddressId"],
    OrderMaxAggregate: ["id", "coupon", "deliveryCharges", "vat", "serviceCharge", "total", "isAccepted", "createdAt", "updatedAt", "userId", "restaurantId", "customerId", "customerAddressId"]
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
    GroupByUserTokenArgs: ["where", "orderBy", "by", "having", "take", "skip"],
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
    GroupByOrderArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        if (resolverActionsConfig._all) {
            const allActionsDecorators = resolverActionsConfig._all;
            const resolverActionNames = resolversInfo[modelName];
            for (const resolverActionName of resolverActionNames) {
                const actionTarget = actionResolversConfig[resolverActionName].prototype;
                for (const allActionsDecorator of allActionsDecorators) {
                    allActionsDecorator(crudTarget, resolverActionName, Object.getOwnPropertyDescriptor(crudTarget, resolverActionName));
                    allActionsDecorator(actionTarget, resolverActionName, Object.getOwnPropertyDescriptor(actionTarget, resolverActionName));
                }
            }
        }
        const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(it => it !== "_all");
        for (const resolverActionName of resolverActionsToApply) {
            const decorators = resolverActionsConfig[resolverActionName];
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            for (const decorator of decorators) {
                decorator(crudTarget, resolverActionName, Object.getOwnPropertyDescriptor(crudTarget, resolverActionName));
                decorator(actionTarget, resolverActionName, Object.getOwnPropertyDescriptor(actionTarget, resolverActionName));
            }
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        if (relationResolverActionsConfig._all) {
            const allActionsDecorators = relationResolverActionsConfig._all;
            const relationResolverActionNames = relationResolversInfo[modelName];
            for (const relationResolverActionName of relationResolverActionNames) {
                for (const allActionsDecorator of allActionsDecorators) {
                    allActionsDecorator(relationResolverTarget, relationResolverActionName, Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName));
                }
            }
        }
        const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(it => it !== "_all");
        for (const relationResolverActionName of relationResolverActionsToApply) {
            const decorators = relationResolverActionsConfig[relationResolverActionName];
            for (const decorator of decorators) {
                decorator(relationResolverTarget, relationResolverActionName, Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName));
            }
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
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
        const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(it => it !== "_all");
        for (const typeFieldName of configFieldsToApply) {
            const fieldDecorators = enhanceConfig.fields[typeFieldName];
            for (const fieldDecorator of fieldDecorators) {
                fieldDecorator(typePrototype, typeFieldName);
            }
        }
    }
}
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
