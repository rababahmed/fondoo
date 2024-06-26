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
var CouponWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponWhereInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const EnumDiscountFilter_1 = require("../inputs/EnumDiscountFilter");
const FloatFilter_1 = require("../inputs/FloatFilter");
const OrderListRelationFilter_1 = require("../inputs/OrderListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let CouponWhereInput = CouponWhereInput_1 = class CouponWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [CouponWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CouponWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CouponWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CouponWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CouponWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CouponWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], CouponWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], CouponWhereInput.prototype, "code", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnumDiscountFilter_1.EnumDiscountFilter, {
        nullable: true
    }),
    __metadata("design:type", EnumDiscountFilter_1.EnumDiscountFilter)
], CouponWhereInput.prototype, "discount", void 0);
__decorate([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    __metadata("design:type", FloatFilter_1.FloatFilter)
], CouponWhereInput.prototype, "value", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CouponWhereInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderListRelationFilter_1.OrderListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", OrderListRelationFilter_1.OrderListRelationFilter)
], CouponWhereInput.prototype, "orders", void 0);
CouponWhereInput = CouponWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], CouponWhereInput);
exports.CouponWhereInput = CouponWhereInput;
