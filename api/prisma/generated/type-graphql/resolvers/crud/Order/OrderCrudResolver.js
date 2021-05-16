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
exports.OrderCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateOrderArgs_1 = require("./args/AggregateOrderArgs");
const CreateManyOrderArgs_1 = require("./args/CreateManyOrderArgs");
const CreateOrderArgs_1 = require("./args/CreateOrderArgs");
const DeleteManyOrderArgs_1 = require("./args/DeleteManyOrderArgs");
const DeleteOrderArgs_1 = require("./args/DeleteOrderArgs");
const FindFirstOrderArgs_1 = require("./args/FindFirstOrderArgs");
const FindManyOrderArgs_1 = require("./args/FindManyOrderArgs");
const FindUniqueOrderArgs_1 = require("./args/FindUniqueOrderArgs");
const GroupByOrderArgs_1 = require("./args/GroupByOrderArgs");
const UpdateManyOrderArgs_1 = require("./args/UpdateManyOrderArgs");
const UpdateOrderArgs_1 = require("./args/UpdateOrderArgs");
const UpsertOrderArgs_1 = require("./args/UpsertOrderArgs");
const helpers_1 = require("../../../helpers");
const Order_1 = require("../../../models/Order");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateOrder_1 = require("../../outputs/AggregateOrder");
const OrderGroupBy_1 = require("../../outputs/OrderGroupBy");
let OrderCrudResolver = class OrderCrudResolver {
    async order(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).order.findUnique({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async findFirstOrder(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).order.findFirst({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async orders(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).order.findMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createOrder(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).order.create({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createManyOrder(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).order.createMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteOrder(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).order.delete({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateOrder(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).order.update({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteManyOrder(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).order.deleteMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateManyOrder(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).order.updateMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async upsertOrder(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).order.upsert({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async aggregateOrder(ctx, info, args) {
        return helpers_1.getPrismaFromContext(ctx).order.aggregate({
            ...args,
            ...helpers_1.transformFields(graphql_fields_1.default(info)),
        });
    }
    async groupByOrder(ctx, info, args) {
        const { count, avg, sum, min, max } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).order.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Order_1.Order, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueOrderArgs_1.FindUniqueOrderArgs]),
    __metadata("design:returntype", Promise)
], OrderCrudResolver.prototype, "order", null);
__decorate([
    TypeGraphQL.Query(_returns => Order_1.Order, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstOrderArgs_1.FindFirstOrderArgs]),
    __metadata("design:returntype", Promise)
], OrderCrudResolver.prototype, "findFirstOrder", null);
__decorate([
    TypeGraphQL.Query(_returns => [Order_1.Order], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyOrderArgs_1.FindManyOrderArgs]),
    __metadata("design:returntype", Promise)
], OrderCrudResolver.prototype, "orders", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Order_1.Order, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateOrderArgs_1.CreateOrderArgs]),
    __metadata("design:returntype", Promise)
], OrderCrudResolver.prototype, "createOrder", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyOrderArgs_1.CreateManyOrderArgs]),
    __metadata("design:returntype", Promise)
], OrderCrudResolver.prototype, "createManyOrder", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Order_1.Order, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteOrderArgs_1.DeleteOrderArgs]),
    __metadata("design:returntype", Promise)
], OrderCrudResolver.prototype, "deleteOrder", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Order_1.Order, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateOrderArgs_1.UpdateOrderArgs]),
    __metadata("design:returntype", Promise)
], OrderCrudResolver.prototype, "updateOrder", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyOrderArgs_1.DeleteManyOrderArgs]),
    __metadata("design:returntype", Promise)
], OrderCrudResolver.prototype, "deleteManyOrder", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyOrderArgs_1.UpdateManyOrderArgs]),
    __metadata("design:returntype", Promise)
], OrderCrudResolver.prototype, "updateManyOrder", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Order_1.Order, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertOrderArgs_1.UpsertOrderArgs]),
    __metadata("design:returntype", Promise)
], OrderCrudResolver.prototype, "upsertOrder", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateOrder_1.AggregateOrder, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateOrderArgs_1.AggregateOrderArgs]),
    __metadata("design:returntype", Promise)
], OrderCrudResolver.prototype, "aggregateOrder", null);
__decorate([
    TypeGraphQL.Query(_returns => [OrderGroupBy_1.OrderGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByOrderArgs_1.GroupByOrderArgs]),
    __metadata("design:returntype", Promise)
], OrderCrudResolver.prototype, "groupByOrder", null);
OrderCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Order_1.Order)
], OrderCrudResolver);
exports.OrderCrudResolver = OrderCrudResolver;
