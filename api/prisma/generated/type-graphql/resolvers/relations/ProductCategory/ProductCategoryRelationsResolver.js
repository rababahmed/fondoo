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
exports.ProductCategoryRelationsResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const Product_1 = require("../../../models/Product");
const ProductCategory_1 = require("../../../models/ProductCategory");
const Restaurant_1 = require("../../../models/Restaurant");
const ProductCategoryProductArgs_1 = require("./args/ProductCategoryProductArgs");
const helpers_1 = require("../../../helpers");
let ProductCategoryRelationsResolver = class ProductCategoryRelationsResolver {
    async restaurants(productCategory, ctx) {
        return helpers_1.getPrismaFromContext(ctx).productCategory.findUnique({
            where: {
                id: productCategory.id,
            },
        }).restaurants({});
    }
    async Product(productCategory, ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).productCategory.findUnique({
            where: {
                id: productCategory.id,
            },
        }).Product(args);
    }
};
__decorate([
    TypeGraphQL.FieldResolver(_type => Restaurant_1.Restaurant, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProductCategory_1.ProductCategory, Object]),
    __metadata("design:returntype", Promise)
], ProductCategoryRelationsResolver.prototype, "restaurants", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Product_1.Product], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProductCategory_1.ProductCategory, Object, ProductCategoryProductArgs_1.ProductCategoryProductArgs]),
    __metadata("design:returntype", Promise)
], ProductCategoryRelationsResolver.prototype, "Product", null);
ProductCategoryRelationsResolver = __decorate([
    TypeGraphQL.Resolver(_of => ProductCategory_1.ProductCategory)
], ProductCategoryRelationsResolver);
exports.ProductCategoryRelationsResolver = ProductCategoryRelationsResolver;
