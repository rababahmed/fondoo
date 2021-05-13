"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductMaxAggregate = exports.ProductGroupBy = exports.ProductCountAggregate = exports.ProductCategoryMinAggregate = exports.ProductCategoryMaxAggregate = exports.ProductCategoryGroupBy = exports.ProductCategoryCountAggregate = exports.ProductAvgAggregate = exports.OrderSumAggregate = exports.OrderMinAggregate = exports.OrderMaxAggregate = exports.OrderGroupBy = exports.OrderCountAggregate = exports.OrderAvgAggregate = exports.DeliveryZoneSumAggregate = exports.DeliveryZoneMinAggregate = exports.DeliveryZoneMaxAggregate = exports.DeliveryZoneGroupBy = exports.DeliveryZoneCountAggregate = exports.DeliveryZoneAvgAggregate = exports.CustomerTokenSumAggregate = exports.CustomerTokenMinAggregate = exports.CustomerTokenMaxAggregate = exports.CustomerTokenGroupBy = exports.CustomerTokenCountAggregate = exports.CustomerTokenAvgAggregate = exports.CustomerSumAggregate = exports.CustomerMinAggregate = exports.CustomerMaxAggregate = exports.CustomerGroupBy = exports.CustomerCountAggregate = exports.CustomerAvgAggregate = exports.CustomerAddressSumAggregate = exports.CustomerAddressMinAggregate = exports.CustomerAddressMaxAggregate = exports.CustomerAddressGroupBy = exports.CustomerAddressCountAggregate = exports.CustomerAddressAvgAggregate = exports.AggregateUserToken = exports.AggregateUser = exports.AggregateSchedule = exports.AggregateRestaurant = exports.AggregateProductCategory = exports.AggregateProduct = exports.AggregateOrder = exports.AggregateDeliveryZone = exports.AggregateCustomerToken = exports.AggregateCustomerAddress = exports.AggregateCustomer = exports.AffectedRowsOutput = void 0;
exports.UserTokenSumAggregate = exports.UserTokenMinAggregate = exports.UserTokenMaxAggregate = exports.UserTokenGroupBy = exports.UserTokenCountAggregate = exports.UserTokenAvgAggregate = exports.UserSumAggregate = exports.UserMinAggregate = exports.UserMaxAggregate = exports.UserGroupBy = exports.UserCountAggregate = exports.UserAvgAggregate = exports.ScheduleSumAggregate = exports.ScheduleMinAggregate = exports.ScheduleMaxAggregate = exports.ScheduleGroupBy = exports.ScheduleCountAggregate = exports.ScheduleAvgAggregate = exports.RestaurantMinAggregate = exports.RestaurantMaxAggregate = exports.RestaurantGroupBy = exports.RestaurantCountAggregate = exports.ProductSumAggregate = exports.ProductMinAggregate = void 0;
var AffectedRowsOutput_1 = require("./AffectedRowsOutput");
Object.defineProperty(exports, "AffectedRowsOutput", { enumerable: true, get: function () { return AffectedRowsOutput_1.AffectedRowsOutput; } });
var AggregateCustomer_1 = require("./AggregateCustomer");
Object.defineProperty(exports, "AggregateCustomer", { enumerable: true, get: function () { return AggregateCustomer_1.AggregateCustomer; } });
var AggregateCustomerAddress_1 = require("./AggregateCustomerAddress");
Object.defineProperty(exports, "AggregateCustomerAddress", { enumerable: true, get: function () { return AggregateCustomerAddress_1.AggregateCustomerAddress; } });
var AggregateCustomerToken_1 = require("./AggregateCustomerToken");
Object.defineProperty(exports, "AggregateCustomerToken", { enumerable: true, get: function () { return AggregateCustomerToken_1.AggregateCustomerToken; } });
var AggregateDeliveryZone_1 = require("./AggregateDeliveryZone");
Object.defineProperty(exports, "AggregateDeliveryZone", { enumerable: true, get: function () { return AggregateDeliveryZone_1.AggregateDeliveryZone; } });
var AggregateOrder_1 = require("./AggregateOrder");
Object.defineProperty(exports, "AggregateOrder", { enumerable: true, get: function () { return AggregateOrder_1.AggregateOrder; } });
var AggregateProduct_1 = require("./AggregateProduct");
Object.defineProperty(exports, "AggregateProduct", { enumerable: true, get: function () { return AggregateProduct_1.AggregateProduct; } });
var AggregateProductCategory_1 = require("./AggregateProductCategory");
Object.defineProperty(exports, "AggregateProductCategory", { enumerable: true, get: function () { return AggregateProductCategory_1.AggregateProductCategory; } });
var AggregateRestaurant_1 = require("./AggregateRestaurant");
Object.defineProperty(exports, "AggregateRestaurant", { enumerable: true, get: function () { return AggregateRestaurant_1.AggregateRestaurant; } });
var AggregateSchedule_1 = require("./AggregateSchedule");
Object.defineProperty(exports, "AggregateSchedule", { enumerable: true, get: function () { return AggregateSchedule_1.AggregateSchedule; } });
var AggregateUser_1 = require("./AggregateUser");
Object.defineProperty(exports, "AggregateUser", { enumerable: true, get: function () { return AggregateUser_1.AggregateUser; } });
var AggregateUserToken_1 = require("./AggregateUserToken");
Object.defineProperty(exports, "AggregateUserToken", { enumerable: true, get: function () { return AggregateUserToken_1.AggregateUserToken; } });
var CustomerAddressAvgAggregate_1 = require("./CustomerAddressAvgAggregate");
Object.defineProperty(exports, "CustomerAddressAvgAggregate", { enumerable: true, get: function () { return CustomerAddressAvgAggregate_1.CustomerAddressAvgAggregate; } });
var CustomerAddressCountAggregate_1 = require("./CustomerAddressCountAggregate");
Object.defineProperty(exports, "CustomerAddressCountAggregate", { enumerable: true, get: function () { return CustomerAddressCountAggregate_1.CustomerAddressCountAggregate; } });
var CustomerAddressGroupBy_1 = require("./CustomerAddressGroupBy");
Object.defineProperty(exports, "CustomerAddressGroupBy", { enumerable: true, get: function () { return CustomerAddressGroupBy_1.CustomerAddressGroupBy; } });
var CustomerAddressMaxAggregate_1 = require("./CustomerAddressMaxAggregate");
Object.defineProperty(exports, "CustomerAddressMaxAggregate", { enumerable: true, get: function () { return CustomerAddressMaxAggregate_1.CustomerAddressMaxAggregate; } });
var CustomerAddressMinAggregate_1 = require("./CustomerAddressMinAggregate");
Object.defineProperty(exports, "CustomerAddressMinAggregate", { enumerable: true, get: function () { return CustomerAddressMinAggregate_1.CustomerAddressMinAggregate; } });
var CustomerAddressSumAggregate_1 = require("./CustomerAddressSumAggregate");
Object.defineProperty(exports, "CustomerAddressSumAggregate", { enumerable: true, get: function () { return CustomerAddressSumAggregate_1.CustomerAddressSumAggregate; } });
var CustomerAvgAggregate_1 = require("./CustomerAvgAggregate");
Object.defineProperty(exports, "CustomerAvgAggregate", { enumerable: true, get: function () { return CustomerAvgAggregate_1.CustomerAvgAggregate; } });
var CustomerCountAggregate_1 = require("./CustomerCountAggregate");
Object.defineProperty(exports, "CustomerCountAggregate", { enumerable: true, get: function () { return CustomerCountAggregate_1.CustomerCountAggregate; } });
var CustomerGroupBy_1 = require("./CustomerGroupBy");
Object.defineProperty(exports, "CustomerGroupBy", { enumerable: true, get: function () { return CustomerGroupBy_1.CustomerGroupBy; } });
var CustomerMaxAggregate_1 = require("./CustomerMaxAggregate");
Object.defineProperty(exports, "CustomerMaxAggregate", { enumerable: true, get: function () { return CustomerMaxAggregate_1.CustomerMaxAggregate; } });
var CustomerMinAggregate_1 = require("./CustomerMinAggregate");
Object.defineProperty(exports, "CustomerMinAggregate", { enumerable: true, get: function () { return CustomerMinAggregate_1.CustomerMinAggregate; } });
var CustomerSumAggregate_1 = require("./CustomerSumAggregate");
Object.defineProperty(exports, "CustomerSumAggregate", { enumerable: true, get: function () { return CustomerSumAggregate_1.CustomerSumAggregate; } });
var CustomerTokenAvgAggregate_1 = require("./CustomerTokenAvgAggregate");
Object.defineProperty(exports, "CustomerTokenAvgAggregate", { enumerable: true, get: function () { return CustomerTokenAvgAggregate_1.CustomerTokenAvgAggregate; } });
var CustomerTokenCountAggregate_1 = require("./CustomerTokenCountAggregate");
Object.defineProperty(exports, "CustomerTokenCountAggregate", { enumerable: true, get: function () { return CustomerTokenCountAggregate_1.CustomerTokenCountAggregate; } });
var CustomerTokenGroupBy_1 = require("./CustomerTokenGroupBy");
Object.defineProperty(exports, "CustomerTokenGroupBy", { enumerable: true, get: function () { return CustomerTokenGroupBy_1.CustomerTokenGroupBy; } });
var CustomerTokenMaxAggregate_1 = require("./CustomerTokenMaxAggregate");
Object.defineProperty(exports, "CustomerTokenMaxAggregate", { enumerable: true, get: function () { return CustomerTokenMaxAggregate_1.CustomerTokenMaxAggregate; } });
var CustomerTokenMinAggregate_1 = require("./CustomerTokenMinAggregate");
Object.defineProperty(exports, "CustomerTokenMinAggregate", { enumerable: true, get: function () { return CustomerTokenMinAggregate_1.CustomerTokenMinAggregate; } });
var CustomerTokenSumAggregate_1 = require("./CustomerTokenSumAggregate");
Object.defineProperty(exports, "CustomerTokenSumAggregate", { enumerable: true, get: function () { return CustomerTokenSumAggregate_1.CustomerTokenSumAggregate; } });
var DeliveryZoneAvgAggregate_1 = require("./DeliveryZoneAvgAggregate");
Object.defineProperty(exports, "DeliveryZoneAvgAggregate", { enumerable: true, get: function () { return DeliveryZoneAvgAggregate_1.DeliveryZoneAvgAggregate; } });
var DeliveryZoneCountAggregate_1 = require("./DeliveryZoneCountAggregate");
Object.defineProperty(exports, "DeliveryZoneCountAggregate", { enumerable: true, get: function () { return DeliveryZoneCountAggregate_1.DeliveryZoneCountAggregate; } });
var DeliveryZoneGroupBy_1 = require("./DeliveryZoneGroupBy");
Object.defineProperty(exports, "DeliveryZoneGroupBy", { enumerable: true, get: function () { return DeliveryZoneGroupBy_1.DeliveryZoneGroupBy; } });
var DeliveryZoneMaxAggregate_1 = require("./DeliveryZoneMaxAggregate");
Object.defineProperty(exports, "DeliveryZoneMaxAggregate", { enumerable: true, get: function () { return DeliveryZoneMaxAggregate_1.DeliveryZoneMaxAggregate; } });
var DeliveryZoneMinAggregate_1 = require("./DeliveryZoneMinAggregate");
Object.defineProperty(exports, "DeliveryZoneMinAggregate", { enumerable: true, get: function () { return DeliveryZoneMinAggregate_1.DeliveryZoneMinAggregate; } });
var DeliveryZoneSumAggregate_1 = require("./DeliveryZoneSumAggregate");
Object.defineProperty(exports, "DeliveryZoneSumAggregate", { enumerable: true, get: function () { return DeliveryZoneSumAggregate_1.DeliveryZoneSumAggregate; } });
var OrderAvgAggregate_1 = require("./OrderAvgAggregate");
Object.defineProperty(exports, "OrderAvgAggregate", { enumerable: true, get: function () { return OrderAvgAggregate_1.OrderAvgAggregate; } });
var OrderCountAggregate_1 = require("./OrderCountAggregate");
Object.defineProperty(exports, "OrderCountAggregate", { enumerable: true, get: function () { return OrderCountAggregate_1.OrderCountAggregate; } });
var OrderGroupBy_1 = require("./OrderGroupBy");
Object.defineProperty(exports, "OrderGroupBy", { enumerable: true, get: function () { return OrderGroupBy_1.OrderGroupBy; } });
var OrderMaxAggregate_1 = require("./OrderMaxAggregate");
Object.defineProperty(exports, "OrderMaxAggregate", { enumerable: true, get: function () { return OrderMaxAggregate_1.OrderMaxAggregate; } });
var OrderMinAggregate_1 = require("./OrderMinAggregate");
Object.defineProperty(exports, "OrderMinAggregate", { enumerable: true, get: function () { return OrderMinAggregate_1.OrderMinAggregate; } });
var OrderSumAggregate_1 = require("./OrderSumAggregate");
Object.defineProperty(exports, "OrderSumAggregate", { enumerable: true, get: function () { return OrderSumAggregate_1.OrderSumAggregate; } });
var ProductAvgAggregate_1 = require("./ProductAvgAggregate");
Object.defineProperty(exports, "ProductAvgAggregate", { enumerable: true, get: function () { return ProductAvgAggregate_1.ProductAvgAggregate; } });
var ProductCategoryCountAggregate_1 = require("./ProductCategoryCountAggregate");
Object.defineProperty(exports, "ProductCategoryCountAggregate", { enumerable: true, get: function () { return ProductCategoryCountAggregate_1.ProductCategoryCountAggregate; } });
var ProductCategoryGroupBy_1 = require("./ProductCategoryGroupBy");
Object.defineProperty(exports, "ProductCategoryGroupBy", { enumerable: true, get: function () { return ProductCategoryGroupBy_1.ProductCategoryGroupBy; } });
var ProductCategoryMaxAggregate_1 = require("./ProductCategoryMaxAggregate");
Object.defineProperty(exports, "ProductCategoryMaxAggregate", { enumerable: true, get: function () { return ProductCategoryMaxAggregate_1.ProductCategoryMaxAggregate; } });
var ProductCategoryMinAggregate_1 = require("./ProductCategoryMinAggregate");
Object.defineProperty(exports, "ProductCategoryMinAggregate", { enumerable: true, get: function () { return ProductCategoryMinAggregate_1.ProductCategoryMinAggregate; } });
var ProductCountAggregate_1 = require("./ProductCountAggregate");
Object.defineProperty(exports, "ProductCountAggregate", { enumerable: true, get: function () { return ProductCountAggregate_1.ProductCountAggregate; } });
var ProductGroupBy_1 = require("./ProductGroupBy");
Object.defineProperty(exports, "ProductGroupBy", { enumerable: true, get: function () { return ProductGroupBy_1.ProductGroupBy; } });
var ProductMaxAggregate_1 = require("./ProductMaxAggregate");
Object.defineProperty(exports, "ProductMaxAggregate", { enumerable: true, get: function () { return ProductMaxAggregate_1.ProductMaxAggregate; } });
var ProductMinAggregate_1 = require("./ProductMinAggregate");
Object.defineProperty(exports, "ProductMinAggregate", { enumerable: true, get: function () { return ProductMinAggregate_1.ProductMinAggregate; } });
var ProductSumAggregate_1 = require("./ProductSumAggregate");
Object.defineProperty(exports, "ProductSumAggregate", { enumerable: true, get: function () { return ProductSumAggregate_1.ProductSumAggregate; } });
var RestaurantCountAggregate_1 = require("./RestaurantCountAggregate");
Object.defineProperty(exports, "RestaurantCountAggregate", { enumerable: true, get: function () { return RestaurantCountAggregate_1.RestaurantCountAggregate; } });
var RestaurantGroupBy_1 = require("./RestaurantGroupBy");
Object.defineProperty(exports, "RestaurantGroupBy", { enumerable: true, get: function () { return RestaurantGroupBy_1.RestaurantGroupBy; } });
var RestaurantMaxAggregate_1 = require("./RestaurantMaxAggregate");
Object.defineProperty(exports, "RestaurantMaxAggregate", { enumerable: true, get: function () { return RestaurantMaxAggregate_1.RestaurantMaxAggregate; } });
var RestaurantMinAggregate_1 = require("./RestaurantMinAggregate");
Object.defineProperty(exports, "RestaurantMinAggregate", { enumerable: true, get: function () { return RestaurantMinAggregate_1.RestaurantMinAggregate; } });
var ScheduleAvgAggregate_1 = require("./ScheduleAvgAggregate");
Object.defineProperty(exports, "ScheduleAvgAggregate", { enumerable: true, get: function () { return ScheduleAvgAggregate_1.ScheduleAvgAggregate; } });
var ScheduleCountAggregate_1 = require("./ScheduleCountAggregate");
Object.defineProperty(exports, "ScheduleCountAggregate", { enumerable: true, get: function () { return ScheduleCountAggregate_1.ScheduleCountAggregate; } });
var ScheduleGroupBy_1 = require("./ScheduleGroupBy");
Object.defineProperty(exports, "ScheduleGroupBy", { enumerable: true, get: function () { return ScheduleGroupBy_1.ScheduleGroupBy; } });
var ScheduleMaxAggregate_1 = require("./ScheduleMaxAggregate");
Object.defineProperty(exports, "ScheduleMaxAggregate", { enumerable: true, get: function () { return ScheduleMaxAggregate_1.ScheduleMaxAggregate; } });
var ScheduleMinAggregate_1 = require("./ScheduleMinAggregate");
Object.defineProperty(exports, "ScheduleMinAggregate", { enumerable: true, get: function () { return ScheduleMinAggregate_1.ScheduleMinAggregate; } });
var ScheduleSumAggregate_1 = require("./ScheduleSumAggregate");
Object.defineProperty(exports, "ScheduleSumAggregate", { enumerable: true, get: function () { return ScheduleSumAggregate_1.ScheduleSumAggregate; } });
var UserAvgAggregate_1 = require("./UserAvgAggregate");
Object.defineProperty(exports, "UserAvgAggregate", { enumerable: true, get: function () { return UserAvgAggregate_1.UserAvgAggregate; } });
var UserCountAggregate_1 = require("./UserCountAggregate");
Object.defineProperty(exports, "UserCountAggregate", { enumerable: true, get: function () { return UserCountAggregate_1.UserCountAggregate; } });
var UserGroupBy_1 = require("./UserGroupBy");
Object.defineProperty(exports, "UserGroupBy", { enumerable: true, get: function () { return UserGroupBy_1.UserGroupBy; } });
var UserMaxAggregate_1 = require("./UserMaxAggregate");
Object.defineProperty(exports, "UserMaxAggregate", { enumerable: true, get: function () { return UserMaxAggregate_1.UserMaxAggregate; } });
var UserMinAggregate_1 = require("./UserMinAggregate");
Object.defineProperty(exports, "UserMinAggregate", { enumerable: true, get: function () { return UserMinAggregate_1.UserMinAggregate; } });
var UserSumAggregate_1 = require("./UserSumAggregate");
Object.defineProperty(exports, "UserSumAggregate", { enumerable: true, get: function () { return UserSumAggregate_1.UserSumAggregate; } });
var UserTokenAvgAggregate_1 = require("./UserTokenAvgAggregate");
Object.defineProperty(exports, "UserTokenAvgAggregate", { enumerable: true, get: function () { return UserTokenAvgAggregate_1.UserTokenAvgAggregate; } });
var UserTokenCountAggregate_1 = require("./UserTokenCountAggregate");
Object.defineProperty(exports, "UserTokenCountAggregate", { enumerable: true, get: function () { return UserTokenCountAggregate_1.UserTokenCountAggregate; } });
var UserTokenGroupBy_1 = require("./UserTokenGroupBy");
Object.defineProperty(exports, "UserTokenGroupBy", { enumerable: true, get: function () { return UserTokenGroupBy_1.UserTokenGroupBy; } });
var UserTokenMaxAggregate_1 = require("./UserTokenMaxAggregate");
Object.defineProperty(exports, "UserTokenMaxAggregate", { enumerable: true, get: function () { return UserTokenMaxAggregate_1.UserTokenMaxAggregate; } });
var UserTokenMinAggregate_1 = require("./UserTokenMinAggregate");
Object.defineProperty(exports, "UserTokenMinAggregate", { enumerable: true, get: function () { return UserTokenMinAggregate_1.UserTokenMinAggregate; } });
var UserTokenSumAggregate_1 = require("./UserTokenSumAggregate");
Object.defineProperty(exports, "UserTokenSumAggregate", { enumerable: true, get: function () { return UserTokenSumAggregate_1.UserTokenSumAggregate; } });
