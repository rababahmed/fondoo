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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateOrder = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const OrderAvgAggregate_1 = require("../outputs/OrderAvgAggregate");
const OrderCountAggregate_1 = require("../outputs/OrderCountAggregate");
const OrderMaxAggregate_1 = require("../outputs/OrderMaxAggregate");
const OrderMinAggregate_1 = require("../outputs/OrderMinAggregate");
const OrderSumAggregate_1 = require("../outputs/OrderSumAggregate");
let AggregateOrder = class AggregateOrder {
};
__decorate([
    TypeGraphQL.Field(_type => OrderCountAggregate_1.OrderCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", OrderCountAggregate_1.OrderCountAggregate)
], AggregateOrder.prototype, "count", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderAvgAggregate_1.OrderAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", OrderAvgAggregate_1.OrderAvgAggregate)
], AggregateOrder.prototype, "avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderSumAggregate_1.OrderSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", OrderSumAggregate_1.OrderSumAggregate)
], AggregateOrder.prototype, "sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderMinAggregate_1.OrderMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", OrderMinAggregate_1.OrderMinAggregate)
], AggregateOrder.prototype, "min", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderMaxAggregate_1.OrderMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", OrderMaxAggregate_1.OrderMaxAggregate)
], AggregateOrder.prototype, "max", void 0);
AggregateOrder = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], AggregateOrder);
exports.AggregateOrder = AggregateOrder;
