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
var NestedEnumDeliveryFeeWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumDeliveryFeeWithAggregatesFilter = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const NestedEnumDeliveryFeeFilter_1 = require("../inputs/NestedEnumDeliveryFeeFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const DeliveryFee_1 = require("../../enums/DeliveryFee");
let NestedEnumDeliveryFeeWithAggregatesFilter = NestedEnumDeliveryFeeWithAggregatesFilter_1 = class NestedEnumDeliveryFeeWithAggregatesFilter {
};
__decorate([
    TypeGraphQL.Field(_type => DeliveryFee_1.DeliveryFee, {
        nullable: true
    }),
    __metadata("design:type", String)
], NestedEnumDeliveryFeeWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DeliveryFee_1.DeliveryFee], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NestedEnumDeliveryFeeWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DeliveryFee_1.DeliveryFee], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NestedEnumDeliveryFeeWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedEnumDeliveryFeeWithAggregatesFilter_1, {
        nullable: true
    }),
    __metadata("design:type", NestedEnumDeliveryFeeWithAggregatesFilter)
], NestedEnumDeliveryFeeWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumDeliveryFeeWithAggregatesFilter.prototype, "count", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedEnumDeliveryFeeFilter_1.NestedEnumDeliveryFeeFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedEnumDeliveryFeeFilter_1.NestedEnumDeliveryFeeFilter)
], NestedEnumDeliveryFeeWithAggregatesFilter.prototype, "min", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedEnumDeliveryFeeFilter_1.NestedEnumDeliveryFeeFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedEnumDeliveryFeeFilter_1.NestedEnumDeliveryFeeFilter)
], NestedEnumDeliveryFeeWithAggregatesFilter.prototype, "max", void 0);
NestedEnumDeliveryFeeWithAggregatesFilter = NestedEnumDeliveryFeeWithAggregatesFilter_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], NestedEnumDeliveryFeeWithAggregatesFilter);
exports.NestedEnumDeliveryFeeWithAggregatesFilter = NestedEnumDeliveryFeeWithAggregatesFilter;
