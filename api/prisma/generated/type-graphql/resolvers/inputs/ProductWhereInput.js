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
var ProductWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductWhereInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const BoolNullableFilter_1 = require("../inputs/BoolNullableFilter");
const CartElementListRelationFilter_1 = require("../inputs/CartElementListRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumSpiceLevelFilter_1 = require("../inputs/EnumSpiceLevelFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const OrderRelationFilter_1 = require("../inputs/OrderRelationFilter");
const ProductCategoryRelationFilter_1 = require("../inputs/ProductCategoryRelationFilter");
const RestaurantRelationFilter_1 = require("../inputs/RestaurantRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let ProductWhereInput = ProductWhereInput_1 = class ProductWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [ProductWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ProductWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProductWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ProductWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProductWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ProductWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], ProductWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ProductWhereInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], ProductWhereInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProductWhereInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProductWhereInput.prototype, "image", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], ProductWhereInput.prototype, "price", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnumSpiceLevelFilter_1.EnumSpiceLevelFilter, {
        nullable: true
    }),
    __metadata("design:type", EnumSpiceLevelFilter_1.EnumSpiceLevelFilter)
], ProductWhereInput.prototype, "spiceLevel", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductCategoryRelationFilter_1.ProductCategoryRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", ProductCategoryRelationFilter_1.ProductCategoryRelationFilter)
], ProductWhereInput.prototype, "category", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], ProductWhereInput.prototype, "isPopular", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], ProductWhereInput.prototype, "isActive", void 0);
__decorate([
    TypeGraphQL.Field(_type => RestaurantRelationFilter_1.RestaurantRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", RestaurantRelationFilter_1.RestaurantRelationFilter)
], ProductWhereInput.prototype, "Restaurant", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProductWhereInput.prototype, "restaurantId", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderRelationFilter_1.OrderRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", OrderRelationFilter_1.OrderRelationFilter)
], ProductWhereInput.prototype, "Order", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], ProductWhereInput.prototype, "orderId", void 0);
__decorate([
    TypeGraphQL.Field(_type => CartElementListRelationFilter_1.CartElementListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", CartElementListRelationFilter_1.CartElementListRelationFilter)
], ProductWhereInput.prototype, "CartElement", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], ProductWhereInput.prototype, "productCategoryId", void 0);
ProductWhereInput = ProductWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ProductWhereInput);
exports.ProductWhereInput = ProductWhereInput;
