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
exports.CartElementGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const CartElementAvgAggregate_1 = require("../outputs/CartElementAvgAggregate");
const CartElementCountAggregate_1 = require("../outputs/CartElementCountAggregate");
const CartElementMaxAggregate_1 = require("../outputs/CartElementMaxAggregate");
const CartElementMinAggregate_1 = require("../outputs/CartElementMinAggregate");
const CartElementSumAggregate_1 = require("../outputs/CartElementSumAggregate");
let CartElementGroupBy = class CartElementGroupBy {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], CartElementGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], CartElementGroupBy.prototype, "quantity", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], CartElementGroupBy.prototype, "customerId", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], CartElementGroupBy.prototype, "productId", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], CartElementGroupBy.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], CartElementGroupBy.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => CartElementCountAggregate_1.CartElementCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", CartElementCountAggregate_1.CartElementCountAggregate)
], CartElementGroupBy.prototype, "count", void 0);
__decorate([
    TypeGraphQL.Field(_type => CartElementAvgAggregate_1.CartElementAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", CartElementAvgAggregate_1.CartElementAvgAggregate)
], CartElementGroupBy.prototype, "avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => CartElementSumAggregate_1.CartElementSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", CartElementSumAggregate_1.CartElementSumAggregate)
], CartElementGroupBy.prototype, "sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => CartElementMinAggregate_1.CartElementMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", CartElementMinAggregate_1.CartElementMinAggregate)
], CartElementGroupBy.prototype, "min", void 0);
__decorate([
    TypeGraphQL.Field(_type => CartElementMaxAggregate_1.CartElementMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", CartElementMaxAggregate_1.CartElementMaxAggregate)
], CartElementGroupBy.prototype, "max", void 0);
CartElementGroupBy = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], CartElementGroupBy);
exports.CartElementGroupBy = CartElementGroupBy;
