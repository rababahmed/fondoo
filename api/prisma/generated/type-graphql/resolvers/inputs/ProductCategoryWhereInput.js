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
var ProductCategoryWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCategoryWhereInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const BoolNullableFilter_1 = require("../inputs/BoolNullableFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const OrderElementListRelationFilter_1 = require("../inputs/OrderElementListRelationFilter");
const ProductListRelationFilter_1 = require("../inputs/ProductListRelationFilter");
const RestaurantRelationFilter_1 = require("../inputs/RestaurantRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let ProductCategoryWhereInput = ProductCategoryWhereInput_1 = class ProductCategoryWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [ProductCategoryWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ProductCategoryWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProductCategoryWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ProductCategoryWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProductCategoryWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ProductCategoryWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], ProductCategoryWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ProductCategoryWhereInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], ProductCategoryWhereInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProductCategoryWhereInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProductCategoryWhereInput.prototype, "image", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], ProductCategoryWhereInput.prototype, "isActive", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], ProductCategoryWhereInput.prototype, "isFeatured", void 0);
__decorate([
    TypeGraphQL.Field(_type => RestaurantRelationFilter_1.RestaurantRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", RestaurantRelationFilter_1.RestaurantRelationFilter)
], ProductCategoryWhereInput.prototype, "restaurants", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], ProductCategoryWhereInput.prototype, "restaurantId", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductListRelationFilter_1.ProductListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", ProductListRelationFilter_1.ProductListRelationFilter)
], ProductCategoryWhereInput.prototype, "Product", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderElementListRelationFilter_1.OrderElementListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", OrderElementListRelationFilter_1.OrderElementListRelationFilter)
], ProductCategoryWhereInput.prototype, "OrderElement", void 0);
ProductCategoryWhereInput = ProductCategoryWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ProductCategoryWhereInput);
exports.ProductCategoryWhereInput = ProductCategoryWhereInput;
