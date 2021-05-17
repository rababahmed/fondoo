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
exports.OrderItemCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateOrderItemArgs_1 = require("./args/AggregateOrderItemArgs");
const CreateManyOrderItemArgs_1 = require("./args/CreateManyOrderItemArgs");
const CreateOrderItemArgs_1 = require("./args/CreateOrderItemArgs");
const DeleteManyOrderItemArgs_1 = require("./args/DeleteManyOrderItemArgs");
const DeleteOrderItemArgs_1 = require("./args/DeleteOrderItemArgs");
const FindFirstOrderItemArgs_1 = require("./args/FindFirstOrderItemArgs");
const FindManyOrderItemArgs_1 = require("./args/FindManyOrderItemArgs");
const FindUniqueOrderItemArgs_1 = require("./args/FindUniqueOrderItemArgs");
const GroupByOrderItemArgs_1 = require("./args/GroupByOrderItemArgs");
const UpdateManyOrderItemArgs_1 = require("./args/UpdateManyOrderItemArgs");
const UpdateOrderItemArgs_1 = require("./args/UpdateOrderItemArgs");
const UpsertOrderItemArgs_1 = require("./args/UpsertOrderItemArgs");
const helpers_1 = require("../../../helpers");
const OrderItem_1 = require("../../../models/OrderItem");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateOrderItem_1 = require("../../outputs/AggregateOrderItem");
const OrderItemGroupBy_1 = require("../../outputs/OrderItemGroupBy");
let OrderItemCrudResolver = class OrderItemCrudResolver {
    async orderItem(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).orderItem.findUnique({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async findFirstOrderItem(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).orderItem.findFirst({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async orderItems(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).orderItem.findMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createOrderItem(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).orderItem.create({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createManyOrderItem(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).orderItem.createMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteOrderItem(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).orderItem.delete({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateOrderItem(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).orderItem.update({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteManyOrderItem(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).orderItem.deleteMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateManyOrderItem(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).orderItem.updateMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async upsertOrderItem(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).orderItem.upsert({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async aggregateOrderItem(ctx, info, args) {
        return helpers_1.getPrismaFromContext(ctx).orderItem.aggregate({
            ...args,
            ...helpers_1.transformFields(graphql_fields_1.default(info)),
        });
    }
    async groupByOrderItem(ctx, info, args) {
        const { count, avg, sum, min, max } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).orderItem.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => OrderItem_1.OrderItem, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueOrderItemArgs_1.FindUniqueOrderItemArgs]),
    __metadata("design:returntype", Promise)
], OrderItemCrudResolver.prototype, "orderItem", null);
__decorate([
    TypeGraphQL.Query(_returns => OrderItem_1.OrderItem, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstOrderItemArgs_1.FindFirstOrderItemArgs]),
    __metadata("design:returntype", Promise)
], OrderItemCrudResolver.prototype, "findFirstOrderItem", null);
__decorate([
    TypeGraphQL.Query(_returns => [OrderItem_1.OrderItem], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyOrderItemArgs_1.FindManyOrderItemArgs]),
    __metadata("design:returntype", Promise)
], OrderItemCrudResolver.prototype, "orderItems", null);
__decorate([
    TypeGraphQL.Mutation(_returns => OrderItem_1.OrderItem, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateOrderItemArgs_1.CreateOrderItemArgs]),
    __metadata("design:returntype", Promise)
], OrderItemCrudResolver.prototype, "createOrderItem", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyOrderItemArgs_1.CreateManyOrderItemArgs]),
    __metadata("design:returntype", Promise)
], OrderItemCrudResolver.prototype, "createManyOrderItem", null);
__decorate([
    TypeGraphQL.Mutation(_returns => OrderItem_1.OrderItem, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteOrderItemArgs_1.DeleteOrderItemArgs]),
    __metadata("design:returntype", Promise)
], OrderItemCrudResolver.prototype, "deleteOrderItem", null);
__decorate([
    TypeGraphQL.Mutation(_returns => OrderItem_1.OrderItem, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateOrderItemArgs_1.UpdateOrderItemArgs]),
    __metadata("design:returntype", Promise)
], OrderItemCrudResolver.prototype, "updateOrderItem", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyOrderItemArgs_1.DeleteManyOrderItemArgs]),
    __metadata("design:returntype", Promise)
], OrderItemCrudResolver.prototype, "deleteManyOrderItem", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyOrderItemArgs_1.UpdateManyOrderItemArgs]),
    __metadata("design:returntype", Promise)
], OrderItemCrudResolver.prototype, "updateManyOrderItem", null);
__decorate([
    TypeGraphQL.Mutation(_returns => OrderItem_1.OrderItem, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertOrderItemArgs_1.UpsertOrderItemArgs]),
    __metadata("design:returntype", Promise)
], OrderItemCrudResolver.prototype, "upsertOrderItem", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateOrderItem_1.AggregateOrderItem, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateOrderItemArgs_1.AggregateOrderItemArgs]),
    __metadata("design:returntype", Promise)
], OrderItemCrudResolver.prototype, "aggregateOrderItem", null);
__decorate([
    TypeGraphQL.Query(_returns => [OrderItemGroupBy_1.OrderItemGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByOrderItemArgs_1.GroupByOrderItemArgs]),
    __metadata("design:returntype", Promise)
], OrderItemCrudResolver.prototype, "groupByOrderItem", null);
OrderItemCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => OrderItem_1.OrderItem)
], OrderItemCrudResolver);
exports.OrderItemCrudResolver = OrderItemCrudResolver;
