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
exports.OrderElementCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateOrderElementArgs_1 = require("./args/AggregateOrderElementArgs");
const CreateManyOrderElementArgs_1 = require("./args/CreateManyOrderElementArgs");
const CreateOrderElementArgs_1 = require("./args/CreateOrderElementArgs");
const DeleteManyOrderElementArgs_1 = require("./args/DeleteManyOrderElementArgs");
const DeleteOrderElementArgs_1 = require("./args/DeleteOrderElementArgs");
const FindFirstOrderElementArgs_1 = require("./args/FindFirstOrderElementArgs");
const FindManyOrderElementArgs_1 = require("./args/FindManyOrderElementArgs");
const FindUniqueOrderElementArgs_1 = require("./args/FindUniqueOrderElementArgs");
const GroupByOrderElementArgs_1 = require("./args/GroupByOrderElementArgs");
const UpdateManyOrderElementArgs_1 = require("./args/UpdateManyOrderElementArgs");
const UpdateOrderElementArgs_1 = require("./args/UpdateOrderElementArgs");
const UpsertOrderElementArgs_1 = require("./args/UpsertOrderElementArgs");
const helpers_1 = require("../../../helpers");
const OrderElement_1 = require("../../../models/OrderElement");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateOrderElement_1 = require("../../outputs/AggregateOrderElement");
const OrderElementGroupBy_1 = require("../../outputs/OrderElementGroupBy");
let OrderElementCrudResolver = class OrderElementCrudResolver {
    async orderElement(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).orderElement.findUnique({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async findFirstOrderElement(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).orderElement.findFirst({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async orderElements(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).orderElement.findMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createOrderElement(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).orderElement.create({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createManyOrderElement(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).orderElement.createMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteOrderElement(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).orderElement.delete({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateOrderElement(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).orderElement.update({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteManyOrderElement(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).orderElement.deleteMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateManyOrderElement(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).orderElement.updateMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async upsertOrderElement(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).orderElement.upsert({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async aggregateOrderElement(ctx, info, args) {
        return helpers_1.getPrismaFromContext(ctx).orderElement.aggregate({
            ...args,
            ...helpers_1.transformFields(graphql_fields_1.default(info)),
        });
    }
    async groupByOrderElement(ctx, info, args) {
        const { count, avg, sum, min, max } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).orderElement.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => OrderElement_1.OrderElement, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueOrderElementArgs_1.FindUniqueOrderElementArgs]),
    __metadata("design:returntype", Promise)
], OrderElementCrudResolver.prototype, "orderElement", null);
__decorate([
    TypeGraphQL.Query(_returns => OrderElement_1.OrderElement, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstOrderElementArgs_1.FindFirstOrderElementArgs]),
    __metadata("design:returntype", Promise)
], OrderElementCrudResolver.prototype, "findFirstOrderElement", null);
__decorate([
    TypeGraphQL.Query(_returns => [OrderElement_1.OrderElement], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyOrderElementArgs_1.FindManyOrderElementArgs]),
    __metadata("design:returntype", Promise)
], OrderElementCrudResolver.prototype, "orderElements", null);
__decorate([
    TypeGraphQL.Mutation(_returns => OrderElement_1.OrderElement, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateOrderElementArgs_1.CreateOrderElementArgs]),
    __metadata("design:returntype", Promise)
], OrderElementCrudResolver.prototype, "createOrderElement", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyOrderElementArgs_1.CreateManyOrderElementArgs]),
    __metadata("design:returntype", Promise)
], OrderElementCrudResolver.prototype, "createManyOrderElement", null);
__decorate([
    TypeGraphQL.Mutation(_returns => OrderElement_1.OrderElement, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteOrderElementArgs_1.DeleteOrderElementArgs]),
    __metadata("design:returntype", Promise)
], OrderElementCrudResolver.prototype, "deleteOrderElement", null);
__decorate([
    TypeGraphQL.Mutation(_returns => OrderElement_1.OrderElement, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateOrderElementArgs_1.UpdateOrderElementArgs]),
    __metadata("design:returntype", Promise)
], OrderElementCrudResolver.prototype, "updateOrderElement", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyOrderElementArgs_1.DeleteManyOrderElementArgs]),
    __metadata("design:returntype", Promise)
], OrderElementCrudResolver.prototype, "deleteManyOrderElement", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyOrderElementArgs_1.UpdateManyOrderElementArgs]),
    __metadata("design:returntype", Promise)
], OrderElementCrudResolver.prototype, "updateManyOrderElement", null);
__decorate([
    TypeGraphQL.Mutation(_returns => OrderElement_1.OrderElement, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertOrderElementArgs_1.UpsertOrderElementArgs]),
    __metadata("design:returntype", Promise)
], OrderElementCrudResolver.prototype, "upsertOrderElement", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateOrderElement_1.AggregateOrderElement, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateOrderElementArgs_1.AggregateOrderElementArgs]),
    __metadata("design:returntype", Promise)
], OrderElementCrudResolver.prototype, "aggregateOrderElement", null);
__decorate([
    TypeGraphQL.Query(_returns => [OrderElementGroupBy_1.OrderElementGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByOrderElementArgs_1.GroupByOrderElementArgs]),
    __metadata("design:returntype", Promise)
], OrderElementCrudResolver.prototype, "groupByOrderElement", null);
OrderElementCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => OrderElement_1.OrderElement)
], OrderElementCrudResolver);
exports.OrderElementCrudResolver = OrderElementCrudResolver;
