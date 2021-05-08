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
var CustomerWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerWhereInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const CartElementListRelationFilter_1 = require("../inputs/CartElementListRelationFilter");
const CustomerAddressListRelationFilter_1 = require("../inputs/CustomerAddressListRelationFilter");
const CustomerTokenListRelationFilter_1 = require("../inputs/CustomerTokenListRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const OrderListRelationFilter_1 = require("../inputs/OrderListRelationFilter");
const RestaurantRelationFilter_1 = require("../inputs/RestaurantRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let CustomerWhereInput = CustomerWhereInput_1 = class CustomerWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [CustomerWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CustomerWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CustomerWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CustomerWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CustomerWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CustomerWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    __metadata("design:type", IntFilter_1.IntFilter)
], CustomerWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], CustomerWhereInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], CustomerWhereInput.prototype, "firstName", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], CustomerWhereInput.prototype, "lastName", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], CustomerWhereInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], CustomerWhereInput.prototype, "password", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], CustomerWhereInput.prototype, "phone", void 0);
__decorate([
    TypeGraphQL.Field(_type => CustomerTokenListRelationFilter_1.CustomerTokenListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", CustomerTokenListRelationFilter_1.CustomerTokenListRelationFilter)
], CustomerWhereInput.prototype, "token", void 0);
__decorate([
    TypeGraphQL.Field(_type => CustomerAddressListRelationFilter_1.CustomerAddressListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", CustomerAddressListRelationFilter_1.CustomerAddressListRelationFilter)
], CustomerWhereInput.prototype, "address", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderListRelationFilter_1.OrderListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", OrderListRelationFilter_1.OrderListRelationFilter)
], CustomerWhereInput.prototype, "orders", void 0);
__decorate([
    TypeGraphQL.Field(_type => CartElementListRelationFilter_1.CartElementListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", CartElementListRelationFilter_1.CartElementListRelationFilter)
], CustomerWhereInput.prototype, "cart", void 0);
__decorate([
    TypeGraphQL.Field(_type => RestaurantRelationFilter_1.RestaurantRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", RestaurantRelationFilter_1.RestaurantRelationFilter)
], CustomerWhereInput.prototype, "Restaurant", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CustomerWhereInput.prototype, "restaurantId", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], CustomerWhereInput.prototype, "updatedAt", void 0);
CustomerWhereInput = CustomerWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], CustomerWhereInput);
exports.CustomerWhereInput = CustomerWhereInput;
