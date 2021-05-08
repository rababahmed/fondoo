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
exports.CartElementCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateCartElementArgs_1 = require("./args/AggregateCartElementArgs");
const CreateCartElementArgs_1 = require("./args/CreateCartElementArgs");
const CreateManyCartElementArgs_1 = require("./args/CreateManyCartElementArgs");
const DeleteCartElementArgs_1 = require("./args/DeleteCartElementArgs");
const DeleteManyCartElementArgs_1 = require("./args/DeleteManyCartElementArgs");
const FindFirstCartElementArgs_1 = require("./args/FindFirstCartElementArgs");
const FindManyCartElementArgs_1 = require("./args/FindManyCartElementArgs");
const FindUniqueCartElementArgs_1 = require("./args/FindUniqueCartElementArgs");
const GroupByCartElementArgs_1 = require("./args/GroupByCartElementArgs");
const UpdateCartElementArgs_1 = require("./args/UpdateCartElementArgs");
const UpdateManyCartElementArgs_1 = require("./args/UpdateManyCartElementArgs");
const UpsertCartElementArgs_1 = require("./args/UpsertCartElementArgs");
const helpers_1 = require("../../../helpers");
const CartElement_1 = require("../../../models/CartElement");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCartElement_1 = require("../../outputs/AggregateCartElement");
const CartElementGroupBy_1 = require("../../outputs/CartElementGroupBy");
let CartElementCrudResolver = class CartElementCrudResolver {
    async cartElement(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).cartElement.findUnique({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async findFirstCartElement(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).cartElement.findFirst({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async cartElements(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).cartElement.findMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createCartElement(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).cartElement.create({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createManyCartElement(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).cartElement.createMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteCartElement(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).cartElement.delete({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateCartElement(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).cartElement.update({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteManyCartElement(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).cartElement.deleteMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateManyCartElement(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).cartElement.updateMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async upsertCartElement(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).cartElement.upsert({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async aggregateCartElement(ctx, info, args) {
        return helpers_1.getPrismaFromContext(ctx).cartElement.aggregate({
            ...args,
            ...helpers_1.transformFields(graphql_fields_1.default(info)),
        });
    }
    async groupByCartElement(ctx, info, args) {
        const { count, avg, sum, min, max } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).cartElement.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => CartElement_1.CartElement, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueCartElementArgs_1.FindUniqueCartElementArgs]),
    __metadata("design:returntype", Promise)
], CartElementCrudResolver.prototype, "cartElement", null);
__decorate([
    TypeGraphQL.Query(_returns => CartElement_1.CartElement, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstCartElementArgs_1.FindFirstCartElementArgs]),
    __metadata("design:returntype", Promise)
], CartElementCrudResolver.prototype, "findFirstCartElement", null);
__decorate([
    TypeGraphQL.Query(_returns => [CartElement_1.CartElement], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyCartElementArgs_1.FindManyCartElementArgs]),
    __metadata("design:returntype", Promise)
], CartElementCrudResolver.prototype, "cartElements", null);
__decorate([
    TypeGraphQL.Mutation(_returns => CartElement_1.CartElement, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateCartElementArgs_1.CreateCartElementArgs]),
    __metadata("design:returntype", Promise)
], CartElementCrudResolver.prototype, "createCartElement", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyCartElementArgs_1.CreateManyCartElementArgs]),
    __metadata("design:returntype", Promise)
], CartElementCrudResolver.prototype, "createManyCartElement", null);
__decorate([
    TypeGraphQL.Mutation(_returns => CartElement_1.CartElement, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteCartElementArgs_1.DeleteCartElementArgs]),
    __metadata("design:returntype", Promise)
], CartElementCrudResolver.prototype, "deleteCartElement", null);
__decorate([
    TypeGraphQL.Mutation(_returns => CartElement_1.CartElement, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateCartElementArgs_1.UpdateCartElementArgs]),
    __metadata("design:returntype", Promise)
], CartElementCrudResolver.prototype, "updateCartElement", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyCartElementArgs_1.DeleteManyCartElementArgs]),
    __metadata("design:returntype", Promise)
], CartElementCrudResolver.prototype, "deleteManyCartElement", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyCartElementArgs_1.UpdateManyCartElementArgs]),
    __metadata("design:returntype", Promise)
], CartElementCrudResolver.prototype, "updateManyCartElement", null);
__decorate([
    TypeGraphQL.Mutation(_returns => CartElement_1.CartElement, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertCartElementArgs_1.UpsertCartElementArgs]),
    __metadata("design:returntype", Promise)
], CartElementCrudResolver.prototype, "upsertCartElement", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateCartElement_1.AggregateCartElement, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateCartElementArgs_1.AggregateCartElementArgs]),
    __metadata("design:returntype", Promise)
], CartElementCrudResolver.prototype, "aggregateCartElement", null);
__decorate([
    TypeGraphQL.Query(_returns => [CartElementGroupBy_1.CartElementGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByCartElementArgs_1.GroupByCartElementArgs]),
    __metadata("design:returntype", Promise)
], CartElementCrudResolver.prototype, "groupByCartElement", null);
CartElementCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => CartElement_1.CartElement)
], CartElementCrudResolver);
exports.CartElementCrudResolver = CartElementCrudResolver;
