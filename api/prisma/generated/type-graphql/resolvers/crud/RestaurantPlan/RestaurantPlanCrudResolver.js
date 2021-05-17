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
exports.RestaurantPlanCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateRestaurantPlanArgs_1 = require("./args/AggregateRestaurantPlanArgs");
const CreateManyRestaurantPlanArgs_1 = require("./args/CreateManyRestaurantPlanArgs");
const CreateRestaurantPlanArgs_1 = require("./args/CreateRestaurantPlanArgs");
const DeleteManyRestaurantPlanArgs_1 = require("./args/DeleteManyRestaurantPlanArgs");
const DeleteRestaurantPlanArgs_1 = require("./args/DeleteRestaurantPlanArgs");
const FindFirstRestaurantPlanArgs_1 = require("./args/FindFirstRestaurantPlanArgs");
const FindManyRestaurantPlanArgs_1 = require("./args/FindManyRestaurantPlanArgs");
const FindUniqueRestaurantPlanArgs_1 = require("./args/FindUniqueRestaurantPlanArgs");
const GroupByRestaurantPlanArgs_1 = require("./args/GroupByRestaurantPlanArgs");
const UpdateManyRestaurantPlanArgs_1 = require("./args/UpdateManyRestaurantPlanArgs");
const UpdateRestaurantPlanArgs_1 = require("./args/UpdateRestaurantPlanArgs");
const UpsertRestaurantPlanArgs_1 = require("./args/UpsertRestaurantPlanArgs");
const helpers_1 = require("../../../helpers");
const RestaurantPlan_1 = require("../../../models/RestaurantPlan");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateRestaurantPlan_1 = require("../../outputs/AggregateRestaurantPlan");
const RestaurantPlanGroupBy_1 = require("../../outputs/RestaurantPlanGroupBy");
let RestaurantPlanCrudResolver = class RestaurantPlanCrudResolver {
    async restaurantPlan(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).restaurantPlan.findUnique({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async findFirstRestaurantPlan(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).restaurantPlan.findFirst({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async restaurantPlans(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).restaurantPlan.findMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createRestaurantPlan(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).restaurantPlan.create({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createManyRestaurantPlan(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).restaurantPlan.createMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteRestaurantPlan(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).restaurantPlan.delete({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateRestaurantPlan(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).restaurantPlan.update({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteManyRestaurantPlan(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).restaurantPlan.deleteMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateManyRestaurantPlan(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).restaurantPlan.updateMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async upsertRestaurantPlan(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).restaurantPlan.upsert({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async aggregateRestaurantPlan(ctx, info, args) {
        return helpers_1.getPrismaFromContext(ctx).restaurantPlan.aggregate({
            ...args,
            ...helpers_1.transformFields(graphql_fields_1.default(info)),
        });
    }
    async groupByRestaurantPlan(ctx, info, args) {
        const { count, avg, sum, min, max } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).restaurantPlan.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => RestaurantPlan_1.RestaurantPlan, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueRestaurantPlanArgs_1.FindUniqueRestaurantPlanArgs]),
    __metadata("design:returntype", Promise)
], RestaurantPlanCrudResolver.prototype, "restaurantPlan", null);
__decorate([
    TypeGraphQL.Query(_returns => RestaurantPlan_1.RestaurantPlan, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstRestaurantPlanArgs_1.FindFirstRestaurantPlanArgs]),
    __metadata("design:returntype", Promise)
], RestaurantPlanCrudResolver.prototype, "findFirstRestaurantPlan", null);
__decorate([
    TypeGraphQL.Query(_returns => [RestaurantPlan_1.RestaurantPlan], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyRestaurantPlanArgs_1.FindManyRestaurantPlanArgs]),
    __metadata("design:returntype", Promise)
], RestaurantPlanCrudResolver.prototype, "restaurantPlans", null);
__decorate([
    TypeGraphQL.Mutation(_returns => RestaurantPlan_1.RestaurantPlan, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateRestaurantPlanArgs_1.CreateRestaurantPlanArgs]),
    __metadata("design:returntype", Promise)
], RestaurantPlanCrudResolver.prototype, "createRestaurantPlan", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyRestaurantPlanArgs_1.CreateManyRestaurantPlanArgs]),
    __metadata("design:returntype", Promise)
], RestaurantPlanCrudResolver.prototype, "createManyRestaurantPlan", null);
__decorate([
    TypeGraphQL.Mutation(_returns => RestaurantPlan_1.RestaurantPlan, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteRestaurantPlanArgs_1.DeleteRestaurantPlanArgs]),
    __metadata("design:returntype", Promise)
], RestaurantPlanCrudResolver.prototype, "deleteRestaurantPlan", null);
__decorate([
    TypeGraphQL.Mutation(_returns => RestaurantPlan_1.RestaurantPlan, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateRestaurantPlanArgs_1.UpdateRestaurantPlanArgs]),
    __metadata("design:returntype", Promise)
], RestaurantPlanCrudResolver.prototype, "updateRestaurantPlan", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyRestaurantPlanArgs_1.DeleteManyRestaurantPlanArgs]),
    __metadata("design:returntype", Promise)
], RestaurantPlanCrudResolver.prototype, "deleteManyRestaurantPlan", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyRestaurantPlanArgs_1.UpdateManyRestaurantPlanArgs]),
    __metadata("design:returntype", Promise)
], RestaurantPlanCrudResolver.prototype, "updateManyRestaurantPlan", null);
__decorate([
    TypeGraphQL.Mutation(_returns => RestaurantPlan_1.RestaurantPlan, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertRestaurantPlanArgs_1.UpsertRestaurantPlanArgs]),
    __metadata("design:returntype", Promise)
], RestaurantPlanCrudResolver.prototype, "upsertRestaurantPlan", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateRestaurantPlan_1.AggregateRestaurantPlan, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateRestaurantPlanArgs_1.AggregateRestaurantPlanArgs]),
    __metadata("design:returntype", Promise)
], RestaurantPlanCrudResolver.prototype, "aggregateRestaurantPlan", null);
__decorate([
    TypeGraphQL.Query(_returns => [RestaurantPlanGroupBy_1.RestaurantPlanGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByRestaurantPlanArgs_1.GroupByRestaurantPlanArgs]),
    __metadata("design:returntype", Promise)
], RestaurantPlanCrudResolver.prototype, "groupByRestaurantPlan", null);
RestaurantPlanCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => RestaurantPlan_1.RestaurantPlan)
], RestaurantPlanCrudResolver);
exports.RestaurantPlanCrudResolver = RestaurantPlanCrudResolver;
