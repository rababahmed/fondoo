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
var OrderElementWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderElementWhereInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const OrderRelationFilter_1 = require("../inputs/OrderRelationFilter");
const ProductCategoryRelationFilter_1 = require("../inputs/ProductCategoryRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let OrderElementWhereInput = OrderElementWhereInput_1 = class OrderElementWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [OrderElementWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderElementWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderElementWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderElementWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderElementWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderElementWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], OrderElementWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], OrderElementWhereInput.prototype, "code", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], OrderElementWhereInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], OrderElementWhereInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], OrderElementWhereInput.prototype, "image", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    __metadata("design:type", IntFilter_1.IntFilter)
], OrderElementWhereInput.prototype, "price", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductCategoryRelationFilter_1.ProductCategoryRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", ProductCategoryRelationFilter_1.ProductCategoryRelationFilter)
], OrderElementWhereInput.prototype, "category", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], OrderElementWhereInput.prototype, "addonText", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderRelationFilter_1.OrderRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", OrderRelationFilter_1.OrderRelationFilter)
], OrderElementWhereInput.prototype, "Order", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], OrderElementWhereInput.prototype, "orderId", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], OrderElementWhereInput.prototype, "productCategoryId", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], OrderElementWhereInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], OrderElementWhereInput.prototype, "updatedAt", void 0);
OrderElementWhereInput = OrderElementWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], OrderElementWhereInput);
exports.OrderElementWhereInput = OrderElementWhereInput;
