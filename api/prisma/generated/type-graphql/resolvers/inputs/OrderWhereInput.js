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
var OrderWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderWhereInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const BoolFilter_1 = require("../inputs/BoolFilter");
const CouponRelationFilter_1 = require("../inputs/CouponRelationFilter");
const CustomerRelationFilter_1 = require("../inputs/CustomerRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const FloatFilter_1 = require("../inputs/FloatFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const OrderItemListRelationFilter_1 = require("../inputs/OrderItemListRelationFilter");
const RestaurantRelationFilter_1 = require("../inputs/RestaurantRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let OrderWhereInput = OrderWhereInput_1 = class OrderWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [OrderWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    __metadata("design:type", IntFilter_1.IntFilter)
], OrderWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderItemListRelationFilter_1.OrderItemListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", OrderItemListRelationFilter_1.OrderItemListRelationFilter)
], OrderWhereInput.prototype, "items", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], OrderWhereInput.prototype, "address", void 0);
__decorate([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    __metadata("design:type", FloatFilter_1.FloatFilter)
], OrderWhereInput.prototype, "discount", void 0);
__decorate([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    __metadata("design:type", FloatFilter_1.FloatFilter)
], OrderWhereInput.prototype, "deliveryCharges", void 0);
__decorate([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    __metadata("design:type", FloatFilter_1.FloatFilter)
], OrderWhereInput.prototype, "vat", void 0);
__decorate([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    __metadata("design:type", FloatFilter_1.FloatFilter)
], OrderWhereInput.prototype, "serviceCharge", void 0);
__decorate([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    __metadata("design:type", FloatFilter_1.FloatFilter)
], OrderWhereInput.prototype, "total", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolFilter_1.BoolFilter)
], OrderWhereInput.prototype, "isAccepted", void 0);
__decorate([
    TypeGraphQL.Field(_type => CouponRelationFilter_1.CouponRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", CouponRelationFilter_1.CouponRelationFilter)
], OrderWhereInput.prototype, "Coupon", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], OrderWhereInput.prototype, "couponId", void 0);
__decorate([
    TypeGraphQL.Field(_type => RestaurantRelationFilter_1.RestaurantRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", RestaurantRelationFilter_1.RestaurantRelationFilter)
], OrderWhereInput.prototype, "restaurant", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], OrderWhereInput.prototype, "restaurantId", void 0);
__decorate([
    TypeGraphQL.Field(_type => CustomerRelationFilter_1.CustomerRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", CustomerRelationFilter_1.CustomerRelationFilter)
], OrderWhereInput.prototype, "Customer", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], OrderWhereInput.prototype, "customerId", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], OrderWhereInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], OrderWhereInput.prototype, "updatedAt", void 0);
OrderWhereInput = OrderWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], OrderWhereInput);
exports.OrderWhereInput = OrderWhereInput;
