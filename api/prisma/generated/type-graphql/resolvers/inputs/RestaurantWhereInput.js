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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var RestaurantWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantWhereInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const BoolNullableFilter_1 = require("../inputs/BoolNullableFilter");
const CustomerListRelationFilter_1 = require("../inputs/CustomerListRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DeliveryZoneListRelationFilter_1 = require("../inputs/DeliveryZoneListRelationFilter");
const OrderItemListRelationFilter_1 = require("../inputs/OrderItemListRelationFilter");
const OrderListRelationFilter_1 = require("../inputs/OrderListRelationFilter");
const ProductCategoryListRelationFilter_1 = require("../inputs/ProductCategoryListRelationFilter");
const ProductListRelationFilter_1 = require("../inputs/ProductListRelationFilter");
const RestaurantPlanRelationFilter_1 = require("../inputs/RestaurantPlanRelationFilter");
const ScheduleListRelationFilter_1 = require("../inputs/ScheduleListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const UserListRelationFilter_1 = require("../inputs/UserListRelationFilter");
let RestaurantWhereInput = RestaurantWhereInput_1 = class RestaurantWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [RestaurantWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RestaurantWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RestaurantWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RestaurantWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RestaurantWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RestaurantWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], RestaurantWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], RestaurantWhereInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], RestaurantWhereInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => RestaurantPlanRelationFilter_1.RestaurantPlanRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", RestaurantPlanRelationFilter_1.RestaurantPlanRelationFilter)
], RestaurantWhereInput.prototype, "plan", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], RestaurantWhereInput.prototype, "restaurantPlanId", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], RestaurantWhereInput.prototype, "businessPhone", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], RestaurantWhereInput.prototype, "reservationPhone", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], RestaurantWhereInput.prototype, "url", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], RestaurantWhereInput.prototype, "cuisine", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], RestaurantWhereInput.prototype, "address", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], RestaurantWhereInput.prototype, "city", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], RestaurantWhereInput.prototype, "postCode", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], RestaurantWhereInput.prototype, "country", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], RestaurantWhereInput.prototype, "currency", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], RestaurantWhereInput.prototype, "priceRange", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], RestaurantWhereInput.prototype, "diningStyle", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], RestaurantWhereInput.prototype, "vat", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], RestaurantWhereInput.prototype, "serviceCharge", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], RestaurantWhereInput.prototype, "hasParkingFacilities", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], RestaurantWhereInput.prototype, "hasPartyFacilities", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], RestaurantWhereInput.prototype, "hasKidsZone", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], RestaurantWhereInput.prototype, "isTakeaway", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], RestaurantWhereInput.prototype, "isDelivery", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], RestaurantWhereInput.prototype, "isReservation", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], RestaurantWhereInput.prototype, "isAutoAcceptOrder", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], RestaurantWhereInput.prototype, "isAutoAcceptReservation", void 0);
__decorate([
    TypeGraphQL.Field(_type => ScheduleListRelationFilter_1.ScheduleListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", ScheduleListRelationFilter_1.ScheduleListRelationFilter)
], RestaurantWhereInput.prototype, "schedules", void 0);
__decorate([
    TypeGraphQL.Field(_type => DeliveryZoneListRelationFilter_1.DeliveryZoneListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", DeliveryZoneListRelationFilter_1.DeliveryZoneListRelationFilter)
], RestaurantWhereInput.prototype, "deliveryZones", void 0);
__decorate([
    TypeGraphQL.Field(_type => CustomerListRelationFilter_1.CustomerListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", CustomerListRelationFilter_1.CustomerListRelationFilter)
], RestaurantWhereInput.prototype, "customers", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderListRelationFilter_1.OrderListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", OrderListRelationFilter_1.OrderListRelationFilter)
], RestaurantWhereInput.prototype, "orders", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderItemListRelationFilter_1.OrderItemListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", OrderItemListRelationFilter_1.OrderItemListRelationFilter)
], RestaurantWhereInput.prototype, "orderItems", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductCategoryListRelationFilter_1.ProductCategoryListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", ProductCategoryListRelationFilter_1.ProductCategoryListRelationFilter)
], RestaurantWhereInput.prototype, "productCategory", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductListRelationFilter_1.ProductListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", ProductListRelationFilter_1.ProductListRelationFilter)
], RestaurantWhereInput.prototype, "products", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserListRelationFilter_1.UserListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", UserListRelationFilter_1.UserListRelationFilter)
], RestaurantWhereInput.prototype, "users", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], RestaurantWhereInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], RestaurantWhereInput.prototype, "updatedAt", void 0);
RestaurantWhereInput = RestaurantWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], RestaurantWhereInput);
exports.RestaurantWhereInput = RestaurantWhereInput;
