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
exports.CustomerTokenCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateCustomerTokenArgs_1 = require("./args/AggregateCustomerTokenArgs");
const CreateCustomerTokenArgs_1 = require("./args/CreateCustomerTokenArgs");
const CreateManyCustomerTokenArgs_1 = require("./args/CreateManyCustomerTokenArgs");
const DeleteCustomerTokenArgs_1 = require("./args/DeleteCustomerTokenArgs");
const DeleteManyCustomerTokenArgs_1 = require("./args/DeleteManyCustomerTokenArgs");
const FindFirstCustomerTokenArgs_1 = require("./args/FindFirstCustomerTokenArgs");
const FindManyCustomerTokenArgs_1 = require("./args/FindManyCustomerTokenArgs");
const FindUniqueCustomerTokenArgs_1 = require("./args/FindUniqueCustomerTokenArgs");
const GroupByCustomerTokenArgs_1 = require("./args/GroupByCustomerTokenArgs");
const UpdateCustomerTokenArgs_1 = require("./args/UpdateCustomerTokenArgs");
const UpdateManyCustomerTokenArgs_1 = require("./args/UpdateManyCustomerTokenArgs");
const UpsertCustomerTokenArgs_1 = require("./args/UpsertCustomerTokenArgs");
const helpers_1 = require("../../../helpers");
const CustomerToken_1 = require("../../../models/CustomerToken");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCustomerToken_1 = require("../../outputs/AggregateCustomerToken");
const CustomerTokenGroupBy_1 = require("../../outputs/CustomerTokenGroupBy");
let CustomerTokenCrudResolver = class CustomerTokenCrudResolver {
    async customerToken(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).customerToken.findUnique({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async findFirstCustomerToken(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).customerToken.findFirst({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async customerTokens(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).customerToken.findMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createCustomerToken(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).customerToken.create({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createManyCustomerToken(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).customerToken.createMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteCustomerToken(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).customerToken.delete({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateCustomerToken(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).customerToken.update({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteManyCustomerToken(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).customerToken.deleteMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateManyCustomerToken(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).customerToken.updateMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async upsertCustomerToken(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).customerToken.upsert({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async aggregateCustomerToken(ctx, info, args) {
        return helpers_1.getPrismaFromContext(ctx).customerToken.aggregate({
            ...args,
            ...helpers_1.transformFields(graphql_fields_1.default(info)),
        });
    }
    async groupByCustomerToken(ctx, info, args) {
        const { count, avg, sum, min, max } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).customerToken.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => CustomerToken_1.CustomerToken, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueCustomerTokenArgs_1.FindUniqueCustomerTokenArgs]),
    __metadata("design:returntype", Promise)
], CustomerTokenCrudResolver.prototype, "customerToken", null);
__decorate([
    TypeGraphQL.Query(_returns => CustomerToken_1.CustomerToken, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstCustomerTokenArgs_1.FindFirstCustomerTokenArgs]),
    __metadata("design:returntype", Promise)
], CustomerTokenCrudResolver.prototype, "findFirstCustomerToken", null);
__decorate([
    TypeGraphQL.Query(_returns => [CustomerToken_1.CustomerToken], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyCustomerTokenArgs_1.FindManyCustomerTokenArgs]),
    __metadata("design:returntype", Promise)
], CustomerTokenCrudResolver.prototype, "customerTokens", null);
__decorate([
    TypeGraphQL.Mutation(_returns => CustomerToken_1.CustomerToken, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateCustomerTokenArgs_1.CreateCustomerTokenArgs]),
    __metadata("design:returntype", Promise)
], CustomerTokenCrudResolver.prototype, "createCustomerToken", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyCustomerTokenArgs_1.CreateManyCustomerTokenArgs]),
    __metadata("design:returntype", Promise)
], CustomerTokenCrudResolver.prototype, "createManyCustomerToken", null);
__decorate([
    TypeGraphQL.Mutation(_returns => CustomerToken_1.CustomerToken, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteCustomerTokenArgs_1.DeleteCustomerTokenArgs]),
    __metadata("design:returntype", Promise)
], CustomerTokenCrudResolver.prototype, "deleteCustomerToken", null);
__decorate([
    TypeGraphQL.Mutation(_returns => CustomerToken_1.CustomerToken, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateCustomerTokenArgs_1.UpdateCustomerTokenArgs]),
    __metadata("design:returntype", Promise)
], CustomerTokenCrudResolver.prototype, "updateCustomerToken", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyCustomerTokenArgs_1.DeleteManyCustomerTokenArgs]),
    __metadata("design:returntype", Promise)
], CustomerTokenCrudResolver.prototype, "deleteManyCustomerToken", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyCustomerTokenArgs_1.UpdateManyCustomerTokenArgs]),
    __metadata("design:returntype", Promise)
], CustomerTokenCrudResolver.prototype, "updateManyCustomerToken", null);
__decorate([
    TypeGraphQL.Mutation(_returns => CustomerToken_1.CustomerToken, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertCustomerTokenArgs_1.UpsertCustomerTokenArgs]),
    __metadata("design:returntype", Promise)
], CustomerTokenCrudResolver.prototype, "upsertCustomerToken", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateCustomerToken_1.AggregateCustomerToken, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateCustomerTokenArgs_1.AggregateCustomerTokenArgs]),
    __metadata("design:returntype", Promise)
], CustomerTokenCrudResolver.prototype, "aggregateCustomerToken", null);
__decorate([
    TypeGraphQL.Query(_returns => [CustomerTokenGroupBy_1.CustomerTokenGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByCustomerTokenArgs_1.GroupByCustomerTokenArgs]),
    __metadata("design:returntype", Promise)
], CustomerTokenCrudResolver.prototype, "groupByCustomerToken", null);
CustomerTokenCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => CustomerToken_1.CustomerToken)
], CustomerTokenCrudResolver);
exports.CustomerTokenCrudResolver = CustomerTokenCrudResolver;
