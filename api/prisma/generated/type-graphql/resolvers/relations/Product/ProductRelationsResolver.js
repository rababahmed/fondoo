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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRelationsResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const OrderItem_1 = require("../../../models/OrderItem");
const Product_1 = require("../../../models/Product");
const ProductCategory_1 = require("../../../models/ProductCategory");
const Restaurant_1 = require("../../../models/Restaurant");
const ProductOrderItemArgs_1 = require("./args/ProductOrderItemArgs");
const helpers_1 = require("../../../helpers");
let ProductRelationsResolver = class ProductRelationsResolver {
    async ProductCategory(product, ctx) {
        return helpers_1.getPrismaFromContext(ctx).product.findUnique({
            where: {
                id: product.id,
            },
        }).ProductCategory({});
    }
    async Restaurant(product, ctx) {
        return helpers_1.getPrismaFromContext(ctx).product.findUnique({
            where: {
                id: product.id,
            },
        }).Restaurant({});
    }
    async OrderItem(product, ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).product.findUnique({
            where: {
                id: product.id,
            },
        }).OrderItem(args);
    }
};
__decorate([
    TypeGraphQL.FieldResolver(_type => ProductCategory_1.ProductCategory, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Product_1.Product, Object]),
    __metadata("design:returntype", Promise)
], ProductRelationsResolver.prototype, "ProductCategory", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => Restaurant_1.Restaurant, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Product_1.Product, Object]),
    __metadata("design:returntype", Promise)
], ProductRelationsResolver.prototype, "Restaurant", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [OrderItem_1.OrderItem], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Product_1.Product, Object, ProductOrderItemArgs_1.ProductOrderItemArgs]),
    __metadata("design:returntype", Promise)
], ProductRelationsResolver.prototype, "OrderItem", null);
ProductRelationsResolver = __decorate([
    TypeGraphQL.Resolver(_of => Product_1.Product)
], ProductRelationsResolver);
exports.ProductRelationsResolver = ProductRelationsResolver;
