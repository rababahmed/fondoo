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
exports.OrderElementGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const OrderElementAvgAggregate_1 = require("../outputs/OrderElementAvgAggregate");
const OrderElementCountAggregate_1 = require("../outputs/OrderElementCountAggregate");
const OrderElementMaxAggregate_1 = require("../outputs/OrderElementMaxAggregate");
const OrderElementMinAggregate_1 = require("../outputs/OrderElementMinAggregate");
const OrderElementSumAggregate_1 = require("../outputs/OrderElementSumAggregate");
let OrderElementGroupBy = class OrderElementGroupBy {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], OrderElementGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], OrderElementGroupBy.prototype, "code", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], OrderElementGroupBy.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], OrderElementGroupBy.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], OrderElementGroupBy.prototype, "image", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], OrderElementGroupBy.prototype, "price", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], OrderElementGroupBy.prototype, "addonText", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], OrderElementGroupBy.prototype, "orderId", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], OrderElementGroupBy.prototype, "productCategoryId", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], OrderElementGroupBy.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], OrderElementGroupBy.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderElementCountAggregate_1.OrderElementCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", OrderElementCountAggregate_1.OrderElementCountAggregate)
], OrderElementGroupBy.prototype, "count", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderElementAvgAggregate_1.OrderElementAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", OrderElementAvgAggregate_1.OrderElementAvgAggregate)
], OrderElementGroupBy.prototype, "avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderElementSumAggregate_1.OrderElementSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", OrderElementSumAggregate_1.OrderElementSumAggregate)
], OrderElementGroupBy.prototype, "sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderElementMinAggregate_1.OrderElementMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", OrderElementMinAggregate_1.OrderElementMinAggregate)
], OrderElementGroupBy.prototype, "min", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderElementMaxAggregate_1.OrderElementMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", OrderElementMaxAggregate_1.OrderElementMaxAggregate)
], OrderElementGroupBy.prototype, "max", void 0);
OrderElementGroupBy = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], OrderElementGroupBy);
exports.OrderElementGroupBy = OrderElementGroupBy;
