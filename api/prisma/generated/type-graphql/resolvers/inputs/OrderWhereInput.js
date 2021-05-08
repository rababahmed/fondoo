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
const BoolNullableFilter_1 = require("../inputs/BoolNullableFilter");
const CustomerAddressRelationFilter_1 = require("../inputs/CustomerAddressRelationFilter");
const CustomerRelationFilter_1 = require("../inputs/CustomerRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const OrderElementListRelationFilter_1 = require("../inputs/OrderElementListRelationFilter");
const ProductListRelationFilter_1 = require("../inputs/ProductListRelationFilter");
const RestaurantRelationFilter_1 = require("../inputs/RestaurantRelationFilter");
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
    TypeGraphQL.Field(_type => OrderElementListRelationFilter_1.OrderElementListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", OrderElementListRelationFilter_1.OrderElementListRelationFilter)
], OrderWhereInput.prototype, "elements", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], OrderWhereInput.prototype, "charges", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], OrderWhereInput.prototype, "total", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], OrderWhereInput.prototype, "isAccepted", void 0);
__decorate([
    TypeGraphQL.Field(_type => CustomerAddressRelationFilter_1.CustomerAddressRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", CustomerAddressRelationFilter_1.CustomerAddressRelationFilter)
], OrderWhereInput.prototype, "customerAddress", void 0);
__decorate([
    TypeGraphQL.Field(_type => RestaurantRelationFilter_1.RestaurantRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", RestaurantRelationFilter_1.RestaurantRelationFilter)
], OrderWhereInput.prototype, "restaurant", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], OrderWhereInput.prototype, "restaurantId", void 0);
__decorate([
    TypeGraphQL.Field(_type => CustomerRelationFilter_1.CustomerRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", CustomerRelationFilter_1.CustomerRelationFilter)
], OrderWhereInput.prototype, "customer", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], OrderWhereInput.prototype, "customerId", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductListRelationFilter_1.ProductListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", ProductListRelationFilter_1.ProductListRelationFilter)
], OrderWhereInput.prototype, "product", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    __metadata("design:type", IntFilter_1.IntFilter)
], OrderWhereInput.prototype, "customerAddressId", void 0);
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
