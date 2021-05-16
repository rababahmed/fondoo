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
exports.RestaurantCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateRestaurantArgs_1 = require("./args/AggregateRestaurantArgs");
const CreateManyRestaurantArgs_1 = require("./args/CreateManyRestaurantArgs");
const CreateRestaurantArgs_1 = require("./args/CreateRestaurantArgs");
const DeleteManyRestaurantArgs_1 = require("./args/DeleteManyRestaurantArgs");
const DeleteRestaurantArgs_1 = require("./args/DeleteRestaurantArgs");
const FindFirstRestaurantArgs_1 = require("./args/FindFirstRestaurantArgs");
const FindManyRestaurantArgs_1 = require("./args/FindManyRestaurantArgs");
const FindUniqueRestaurantArgs_1 = require("./args/FindUniqueRestaurantArgs");
const GroupByRestaurantArgs_1 = require("./args/GroupByRestaurantArgs");
const UpdateManyRestaurantArgs_1 = require("./args/UpdateManyRestaurantArgs");
const UpdateRestaurantArgs_1 = require("./args/UpdateRestaurantArgs");
const UpsertRestaurantArgs_1 = require("./args/UpsertRestaurantArgs");
const helpers_1 = require("../../../helpers");
const Restaurant_1 = require("../../../models/Restaurant");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateRestaurant_1 = require("../../outputs/AggregateRestaurant");
const RestaurantGroupBy_1 = require("../../outputs/RestaurantGroupBy");
let RestaurantCrudResolver = class RestaurantCrudResolver {
    async restaurant(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).restaurant.findUnique({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async findFirstRestaurant(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).restaurant.findFirst({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async restaurants(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).restaurant.findMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createRestaurant(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).restaurant.create({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createManyRestaurant(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).restaurant.createMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteRestaurant(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).restaurant.delete({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateRestaurant(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).restaurant.update({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteManyRestaurant(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).restaurant.deleteMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateManyRestaurant(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).restaurant.updateMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async upsertRestaurant(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).restaurant.upsert({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async aggregateRestaurant(ctx, info, args) {
        return helpers_1.getPrismaFromContext(ctx).restaurant.aggregate({
            ...args,
            ...helpers_1.transformFields(graphql_fields_1.default(info)),
        });
    }
    async groupByRestaurant(ctx, info, args) {
        const { count, avg, sum, min, max } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).restaurant.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Restaurant_1.Restaurant, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueRestaurantArgs_1.FindUniqueRestaurantArgs]),
    __metadata("design:returntype", Promise)
], RestaurantCrudResolver.prototype, "restaurant", null);
__decorate([
    TypeGraphQL.Query(_returns => Restaurant_1.Restaurant, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstRestaurantArgs_1.FindFirstRestaurantArgs]),
    __metadata("design:returntype", Promise)
], RestaurantCrudResolver.prototype, "findFirstRestaurant", null);
__decorate([
    TypeGraphQL.Query(_returns => [Restaurant_1.Restaurant], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyRestaurantArgs_1.FindManyRestaurantArgs]),
    __metadata("design:returntype", Promise)
], RestaurantCrudResolver.prototype, "restaurants", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Restaurant_1.Restaurant, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateRestaurantArgs_1.CreateRestaurantArgs]),
    __metadata("design:returntype", Promise)
], RestaurantCrudResolver.prototype, "createRestaurant", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyRestaurantArgs_1.CreateManyRestaurantArgs]),
    __metadata("design:returntype", Promise)
], RestaurantCrudResolver.prototype, "createManyRestaurant", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Restaurant_1.Restaurant, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteRestaurantArgs_1.DeleteRestaurantArgs]),
    __metadata("design:returntype", Promise)
], RestaurantCrudResolver.prototype, "deleteRestaurant", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Restaurant_1.Restaurant, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateRestaurantArgs_1.UpdateRestaurantArgs]),
    __metadata("design:returntype", Promise)
], RestaurantCrudResolver.prototype, "updateRestaurant", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyRestaurantArgs_1.DeleteManyRestaurantArgs]),
    __metadata("design:returntype", Promise)
], RestaurantCrudResolver.prototype, "deleteManyRestaurant", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyRestaurantArgs_1.UpdateManyRestaurantArgs]),
    __metadata("design:returntype", Promise)
], RestaurantCrudResolver.prototype, "updateManyRestaurant", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Restaurant_1.Restaurant, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertRestaurantArgs_1.UpsertRestaurantArgs]),
    __metadata("design:returntype", Promise)
], RestaurantCrudResolver.prototype, "upsertRestaurant", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateRestaurant_1.AggregateRestaurant, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateRestaurantArgs_1.AggregateRestaurantArgs]),
    __metadata("design:returntype", Promise)
], RestaurantCrudResolver.prototype, "aggregateRestaurant", null);
__decorate([
    TypeGraphQL.Query(_returns => [RestaurantGroupBy_1.RestaurantGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByRestaurantArgs_1.GroupByRestaurantArgs]),
    __metadata("design:returntype", Promise)
], RestaurantCrudResolver.prototype, "groupByRestaurant", null);
RestaurantCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Restaurant_1.Restaurant)
], RestaurantCrudResolver);
exports.RestaurantCrudResolver = RestaurantCrudResolver;
