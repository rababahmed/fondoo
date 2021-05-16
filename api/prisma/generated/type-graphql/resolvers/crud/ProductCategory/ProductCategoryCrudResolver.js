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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCategoryCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateProductCategoryArgs_1 = require("./args/AggregateProductCategoryArgs");
const CreateManyProductCategoryArgs_1 = require("./args/CreateManyProductCategoryArgs");
const CreateProductCategoryArgs_1 = require("./args/CreateProductCategoryArgs");
const DeleteManyProductCategoryArgs_1 = require("./args/DeleteManyProductCategoryArgs");
const DeleteProductCategoryArgs_1 = require("./args/DeleteProductCategoryArgs");
const FindFirstProductCategoryArgs_1 = require("./args/FindFirstProductCategoryArgs");
const FindManyProductCategoryArgs_1 = require("./args/FindManyProductCategoryArgs");
const FindUniqueProductCategoryArgs_1 = require("./args/FindUniqueProductCategoryArgs");
const GroupByProductCategoryArgs_1 = require("./args/GroupByProductCategoryArgs");
const UpdateManyProductCategoryArgs_1 = require("./args/UpdateManyProductCategoryArgs");
const UpdateProductCategoryArgs_1 = require("./args/UpdateProductCategoryArgs");
const UpsertProductCategoryArgs_1 = require("./args/UpsertProductCategoryArgs");
const helpers_1 = require("../../../helpers");
const ProductCategory_1 = require("../../../models/ProductCategory");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateProductCategory_1 = require("../../outputs/AggregateProductCategory");
const ProductCategoryGroupBy_1 = require("../../outputs/ProductCategoryGroupBy");
let ProductCategoryCrudResolver = class ProductCategoryCrudResolver {
    async productCategory(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).productCategory.findUnique({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async findFirstProductCategory(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).productCategory.findFirst({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async productCategories(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).productCategory.findMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createProductCategory(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).productCategory.create({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createManyProductCategory(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).productCategory.createMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteProductCategory(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).productCategory.delete({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateProductCategory(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).productCategory.update({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteManyProductCategory(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).productCategory.deleteMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateManyProductCategory(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).productCategory.updateMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async upsertProductCategory(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).productCategory.upsert({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async aggregateProductCategory(ctx, info, args) {
        return helpers_1.getPrismaFromContext(ctx).productCategory.aggregate({
            ...args,
            ...helpers_1.transformFields(graphql_fields_1.default(info)),
        });
    }
    async groupByProductCategory(ctx, info, args) {
        const { count, avg, sum, min, max } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).productCategory.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => ProductCategory_1.ProductCategory, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueProductCategoryArgs_1.FindUniqueProductCategoryArgs]),
    __metadata("design:returntype", Promise)
], ProductCategoryCrudResolver.prototype, "productCategory", null);
__decorate([
    TypeGraphQL.Query(_returns => ProductCategory_1.ProductCategory, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstProductCategoryArgs_1.FindFirstProductCategoryArgs]),
    __metadata("design:returntype", Promise)
], ProductCategoryCrudResolver.prototype, "findFirstProductCategory", null);
__decorate([
    TypeGraphQL.Query(_returns => [ProductCategory_1.ProductCategory], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyProductCategoryArgs_1.FindManyProductCategoryArgs]),
    __metadata("design:returntype", Promise)
], ProductCategoryCrudResolver.prototype, "productCategories", null);
__decorate([
    TypeGraphQL.Mutation(_returns => ProductCategory_1.ProductCategory, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateProductCategoryArgs_1.CreateProductCategoryArgs]),
    __metadata("design:returntype", Promise)
], ProductCategoryCrudResolver.prototype, "createProductCategory", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyProductCategoryArgs_1.CreateManyProductCategoryArgs]),
    __metadata("design:returntype", Promise)
], ProductCategoryCrudResolver.prototype, "createManyProductCategory", null);
__decorate([
    TypeGraphQL.Mutation(_returns => ProductCategory_1.ProductCategory, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteProductCategoryArgs_1.DeleteProductCategoryArgs]),
    __metadata("design:returntype", Promise)
], ProductCategoryCrudResolver.prototype, "deleteProductCategory", null);
__decorate([
    TypeGraphQL.Mutation(_returns => ProductCategory_1.ProductCategory, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateProductCategoryArgs_1.UpdateProductCategoryArgs]),
    __metadata("design:returntype", Promise)
], ProductCategoryCrudResolver.prototype, "updateProductCategory", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyProductCategoryArgs_1.DeleteManyProductCategoryArgs]),
    __metadata("design:returntype", Promise)
], ProductCategoryCrudResolver.prototype, "deleteManyProductCategory", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyProductCategoryArgs_1.UpdateManyProductCategoryArgs]),
    __metadata("design:returntype", Promise)
], ProductCategoryCrudResolver.prototype, "updateManyProductCategory", null);
__decorate([
    TypeGraphQL.Mutation(_returns => ProductCategory_1.ProductCategory, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertProductCategoryArgs_1.UpsertProductCategoryArgs]),
    __metadata("design:returntype", Promise)
], ProductCategoryCrudResolver.prototype, "upsertProductCategory", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateProductCategory_1.AggregateProductCategory, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateProductCategoryArgs_1.AggregateProductCategoryArgs]),
    __metadata("design:returntype", Promise)
], ProductCategoryCrudResolver.prototype, "aggregateProductCategory", null);
__decorate([
    TypeGraphQL.Query(_returns => [ProductCategoryGroupBy_1.ProductCategoryGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByProductCategoryArgs_1.GroupByProductCategoryArgs]),
    __metadata("design:returntype", Promise)
], ProductCategoryCrudResolver.prototype, "groupByProductCategory", null);
ProductCategoryCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => ProductCategory_1.ProductCategory)
], ProductCategoryCrudResolver);
exports.ProductCategoryCrudResolver = ProductCategoryCrudResolver;
