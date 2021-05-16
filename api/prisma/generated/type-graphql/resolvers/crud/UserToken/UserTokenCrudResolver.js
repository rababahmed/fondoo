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
exports.UserTokenCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateUserTokenArgs_1 = require("./args/AggregateUserTokenArgs");
const CreateManyUserTokenArgs_1 = require("./args/CreateManyUserTokenArgs");
const CreateUserTokenArgs_1 = require("./args/CreateUserTokenArgs");
const DeleteManyUserTokenArgs_1 = require("./args/DeleteManyUserTokenArgs");
const DeleteUserTokenArgs_1 = require("./args/DeleteUserTokenArgs");
const FindFirstUserTokenArgs_1 = require("./args/FindFirstUserTokenArgs");
const FindManyUserTokenArgs_1 = require("./args/FindManyUserTokenArgs");
const FindUniqueUserTokenArgs_1 = require("./args/FindUniqueUserTokenArgs");
const GroupByUserTokenArgs_1 = require("./args/GroupByUserTokenArgs");
const UpdateManyUserTokenArgs_1 = require("./args/UpdateManyUserTokenArgs");
const UpdateUserTokenArgs_1 = require("./args/UpdateUserTokenArgs");
const UpsertUserTokenArgs_1 = require("./args/UpsertUserTokenArgs");
const helpers_1 = require("../../../helpers");
const UserToken_1 = require("../../../models/UserToken");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateUserToken_1 = require("../../outputs/AggregateUserToken");
const UserTokenGroupBy_1 = require("../../outputs/UserTokenGroupBy");
let UserTokenCrudResolver = class UserTokenCrudResolver {
    async findUniqueUserToken(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).userToken.findUnique({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async findFirstUserToken(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).userToken.findFirst({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async findManyUserToken(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).userToken.findMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createUserToken(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).userToken.create({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createManyUserToken(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).userToken.createMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteUserToken(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).userToken.delete({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateUserToken(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).userToken.update({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteManyUserToken(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).userToken.deleteMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateManyUserToken(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).userToken.updateMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async upsertUserToken(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).userToken.upsert({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async aggregateUserToken(ctx, info, args) {
        return helpers_1.getPrismaFromContext(ctx).userToken.aggregate({
            ...args,
            ...helpers_1.transformFields(graphql_fields_1.default(info)),
        });
    }
    async groupByUserToken(ctx, info, args) {
        const { count, avg, sum, min, max } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).userToken.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => UserToken_1.UserToken, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueUserTokenArgs_1.FindUniqueUserTokenArgs]),
    __metadata("design:returntype", Promise)
], UserTokenCrudResolver.prototype, "findUniqueUserToken", null);
__decorate([
    TypeGraphQL.Query(_returns => UserToken_1.UserToken, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstUserTokenArgs_1.FindFirstUserTokenArgs]),
    __metadata("design:returntype", Promise)
], UserTokenCrudResolver.prototype, "findFirstUserToken", null);
__decorate([
    TypeGraphQL.Query(_returns => [UserToken_1.UserToken], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyUserTokenArgs_1.FindManyUserTokenArgs]),
    __metadata("design:returntype", Promise)
], UserTokenCrudResolver.prototype, "findManyUserToken", null);
__decorate([
    TypeGraphQL.Mutation(_returns => UserToken_1.UserToken, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateUserTokenArgs_1.CreateUserTokenArgs]),
    __metadata("design:returntype", Promise)
], UserTokenCrudResolver.prototype, "createUserToken", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyUserTokenArgs_1.CreateManyUserTokenArgs]),
    __metadata("design:returntype", Promise)
], UserTokenCrudResolver.prototype, "createManyUserToken", null);
__decorate([
    TypeGraphQL.Mutation(_returns => UserToken_1.UserToken, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteUserTokenArgs_1.DeleteUserTokenArgs]),
    __metadata("design:returntype", Promise)
], UserTokenCrudResolver.prototype, "deleteUserToken", null);
__decorate([
    TypeGraphQL.Mutation(_returns => UserToken_1.UserToken, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateUserTokenArgs_1.UpdateUserTokenArgs]),
    __metadata("design:returntype", Promise)
], UserTokenCrudResolver.prototype, "updateUserToken", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyUserTokenArgs_1.DeleteManyUserTokenArgs]),
    __metadata("design:returntype", Promise)
], UserTokenCrudResolver.prototype, "deleteManyUserToken", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyUserTokenArgs_1.UpdateManyUserTokenArgs]),
    __metadata("design:returntype", Promise)
], UserTokenCrudResolver.prototype, "updateManyUserToken", null);
__decorate([
    TypeGraphQL.Mutation(_returns => UserToken_1.UserToken, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertUserTokenArgs_1.UpsertUserTokenArgs]),
    __metadata("design:returntype", Promise)
], UserTokenCrudResolver.prototype, "upsertUserToken", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateUserToken_1.AggregateUserToken, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateUserTokenArgs_1.AggregateUserTokenArgs]),
    __metadata("design:returntype", Promise)
], UserTokenCrudResolver.prototype, "aggregateUserToken", null);
__decorate([
    TypeGraphQL.Query(_returns => [UserTokenGroupBy_1.UserTokenGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByUserTokenArgs_1.GroupByUserTokenArgs]),
    __metadata("design:returntype", Promise)
], UserTokenCrudResolver.prototype, "groupByUserToken", null);
UserTokenCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => UserToken_1.UserToken)
], UserTokenCrudResolver);
exports.UserTokenCrudResolver = UserTokenCrudResolver;
