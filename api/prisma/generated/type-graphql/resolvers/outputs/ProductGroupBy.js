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
exports.ProductGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ProductAvgAggregate_1 = require("../outputs/ProductAvgAggregate");
const ProductCountAggregate_1 = require("../outputs/ProductCountAggregate");
const ProductMaxAggregate_1 = require("../outputs/ProductMaxAggregate");
const ProductMinAggregate_1 = require("../outputs/ProductMinAggregate");
const ProductSumAggregate_1 = require("../outputs/ProductSumAggregate");
const SpiceLevel_1 = require("../../enums/SpiceLevel");
let ProductGroupBy = class ProductGroupBy {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], ProductGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], ProductGroupBy.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], ProductGroupBy.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], ProductGroupBy.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], ProductGroupBy.prototype, "image", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], ProductGroupBy.prototype, "price", void 0);
__decorate([
    TypeGraphQL.Field(_type => SpiceLevel_1.SpiceLevel, {
        nullable: false
    }),
    __metadata("design:type", String)
], ProductGroupBy.prototype, "spiceLevel", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], ProductGroupBy.prototype, "isPopular", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], ProductGroupBy.prototype, "isActive", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], ProductGroupBy.prototype, "restaurantId", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], ProductGroupBy.prototype, "orderId", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], ProductGroupBy.prototype, "productCategoryId", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductCountAggregate_1.ProductCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", ProductCountAggregate_1.ProductCountAggregate)
], ProductGroupBy.prototype, "count", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductAvgAggregate_1.ProductAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", ProductAvgAggregate_1.ProductAvgAggregate)
], ProductGroupBy.prototype, "avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductSumAggregate_1.ProductSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", ProductSumAggregate_1.ProductSumAggregate)
], ProductGroupBy.prototype, "sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductMinAggregate_1.ProductMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", ProductMinAggregate_1.ProductMinAggregate)
], ProductGroupBy.prototype, "min", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductMaxAggregate_1.ProductMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", ProductMaxAggregate_1.ProductMaxAggregate)
], ProductGroupBy.prototype, "max", void 0);
ProductGroupBy = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], ProductGroupBy);
exports.ProductGroupBy = ProductGroupBy;
