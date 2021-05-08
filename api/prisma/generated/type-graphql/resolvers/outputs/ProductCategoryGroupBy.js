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
exports.ProductCategoryGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ProductCategoryCountAggregate_1 = require("../outputs/ProductCategoryCountAggregate");
const ProductCategoryMaxAggregate_1 = require("../outputs/ProductCategoryMaxAggregate");
const ProductCategoryMinAggregate_1 = require("../outputs/ProductCategoryMinAggregate");
let ProductCategoryGroupBy = class ProductCategoryGroupBy {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], ProductCategoryGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], ProductCategoryGroupBy.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], ProductCategoryGroupBy.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], ProductCategoryGroupBy.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], ProductCategoryGroupBy.prototype, "image", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], ProductCategoryGroupBy.prototype, "isActive", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], ProductCategoryGroupBy.prototype, "isFeatured", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], ProductCategoryGroupBy.prototype, "restaurantId", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductCategoryCountAggregate_1.ProductCategoryCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", ProductCategoryCountAggregate_1.ProductCategoryCountAggregate)
], ProductCategoryGroupBy.prototype, "count", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductCategoryMinAggregate_1.ProductCategoryMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", ProductCategoryMinAggregate_1.ProductCategoryMinAggregate)
], ProductCategoryGroupBy.prototype, "min", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductCategoryMaxAggregate_1.ProductCategoryMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", ProductCategoryMaxAggregate_1.ProductCategoryMaxAggregate)
], ProductCategoryGroupBy.prototype, "max", void 0);
ProductCategoryGroupBy = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], ProductCategoryGroupBy);
exports.ProductCategoryGroupBy = ProductCategoryGroupBy;
