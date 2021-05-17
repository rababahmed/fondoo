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
var OrderItemScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemScalarWhereWithAggregatesInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const DateTimeWithAggregatesFilter_1 = require("../inputs/DateTimeWithAggregatesFilter");
const EnumSpiceLevelWithAggregatesFilter_1 = require("../inputs/EnumSpiceLevelWithAggregatesFilter");
const IntNullableWithAggregatesFilter_1 = require("../inputs/IntNullableWithAggregatesFilter");
const IntWithAggregatesFilter_1 = require("../inputs/IntWithAggregatesFilter");
const StringNullableWithAggregatesFilter_1 = require("../inputs/StringNullableWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let OrderItemScalarWhereWithAggregatesInput = OrderItemScalarWhereWithAggregatesInput_1 = class OrderItemScalarWhereWithAggregatesInput {
};
__decorate([
    TypeGraphQL.Field(_type => [OrderItemScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderItemScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderItemScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderItemScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderItemScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderItemScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], OrderItemScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntWithAggregatesFilter_1.IntWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", IntWithAggregatesFilter_1.IntWithAggregatesFilter)
], OrderItemScalarWhereWithAggregatesInput.prototype, "quantity", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntWithAggregatesFilter_1.IntWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", IntWithAggregatesFilter_1.IntWithAggregatesFilter)
], OrderItemScalarWhereWithAggregatesInput.prototype, "total", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnumSpiceLevelWithAggregatesFilter_1.EnumSpiceLevelWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", EnumSpiceLevelWithAggregatesFilter_1.EnumSpiceLevelWithAggregatesFilter)
], OrderItemScalarWhereWithAggregatesInput.prototype, "spiceLevel", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], OrderItemScalarWhereWithAggregatesInput.prototype, "productId", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter_1.IntNullableWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", IntNullableWithAggregatesFilter_1.IntNullableWithAggregatesFilter)
], OrderItemScalarWhereWithAggregatesInput.prototype, "orderId", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], OrderItemScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], OrderItemScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], OrderItemScalarWhereWithAggregatesInput.prototype, "restaurantId", void 0);
OrderItemScalarWhereWithAggregatesInput = OrderItemScalarWhereWithAggregatesInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], OrderItemScalarWhereWithAggregatesInput);
exports.OrderItemScalarWhereWithAggregatesInput = OrderItemScalarWhereWithAggregatesInput;
