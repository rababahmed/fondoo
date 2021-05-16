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
exports.CustomerCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateCustomerArgs_1 = require("./args/AggregateCustomerArgs");
const CreateCustomerArgs_1 = require("./args/CreateCustomerArgs");
const CreateManyCustomerArgs_1 = require("./args/CreateManyCustomerArgs");
const DeleteCustomerArgs_1 = require("./args/DeleteCustomerArgs");
const DeleteManyCustomerArgs_1 = require("./args/DeleteManyCustomerArgs");
const FindFirstCustomerArgs_1 = require("./args/FindFirstCustomerArgs");
const FindManyCustomerArgs_1 = require("./args/FindManyCustomerArgs");
const FindUniqueCustomerArgs_1 = require("./args/FindUniqueCustomerArgs");
const GroupByCustomerArgs_1 = require("./args/GroupByCustomerArgs");
const UpdateCustomerArgs_1 = require("./args/UpdateCustomerArgs");
const UpdateManyCustomerArgs_1 = require("./args/UpdateManyCustomerArgs");
const UpsertCustomerArgs_1 = require("./args/UpsertCustomerArgs");
const helpers_1 = require("../../../helpers");
const Customer_1 = require("../../../models/Customer");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCustomer_1 = require("../../outputs/AggregateCustomer");
const CustomerGroupBy_1 = require("../../outputs/CustomerGroupBy");
let CustomerCrudResolver = class CustomerCrudResolver {
    async findUniqueCustomer(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).customer.findUnique({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async findFirstCustomer(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).customer.findFirst({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async findManyCustomer(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).customer.findMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createCustomer(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).customer.create({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createManyCustomer(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).customer.createMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteCustomer(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).customer.delete({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateCustomer(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).customer.update({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteManyCustomer(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).customer.deleteMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateManyCustomer(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).customer.updateMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async upsertCustomer(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).customer.upsert({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async aggregateCustomer(ctx, info, args) {
        return helpers_1.getPrismaFromContext(ctx).customer.aggregate({
            ...args,
            ...helpers_1.transformFields(graphql_fields_1.default(info)),
        });
    }
    async groupByCustomer(ctx, info, args) {
        const { count, avg, sum, min, max } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).customer.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Customer_1.Customer, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueCustomerArgs_1.FindUniqueCustomerArgs]),
    __metadata("design:returntype", Promise)
], CustomerCrudResolver.prototype, "findUniqueCustomer", null);
__decorate([
    TypeGraphQL.Query(_returns => Customer_1.Customer, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstCustomerArgs_1.FindFirstCustomerArgs]),
    __metadata("design:returntype", Promise)
], CustomerCrudResolver.prototype, "findFirstCustomer", null);
__decorate([
    TypeGraphQL.Query(_returns => [Customer_1.Customer], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyCustomerArgs_1.FindManyCustomerArgs]),
    __metadata("design:returntype", Promise)
], CustomerCrudResolver.prototype, "findManyCustomer", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Customer_1.Customer, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateCustomerArgs_1.CreateCustomerArgs]),
    __metadata("design:returntype", Promise)
], CustomerCrudResolver.prototype, "createCustomer", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyCustomerArgs_1.CreateManyCustomerArgs]),
    __metadata("design:returntype", Promise)
], CustomerCrudResolver.prototype, "createManyCustomer", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Customer_1.Customer, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteCustomerArgs_1.DeleteCustomerArgs]),
    __metadata("design:returntype", Promise)
], CustomerCrudResolver.prototype, "deleteCustomer", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Customer_1.Customer, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateCustomerArgs_1.UpdateCustomerArgs]),
    __metadata("design:returntype", Promise)
], CustomerCrudResolver.prototype, "updateCustomer", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyCustomerArgs_1.DeleteManyCustomerArgs]),
    __metadata("design:returntype", Promise)
], CustomerCrudResolver.prototype, "deleteManyCustomer", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyCustomerArgs_1.UpdateManyCustomerArgs]),
    __metadata("design:returntype", Promise)
], CustomerCrudResolver.prototype, "updateManyCustomer", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Customer_1.Customer, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertCustomerArgs_1.UpsertCustomerArgs]),
    __metadata("design:returntype", Promise)
], CustomerCrudResolver.prototype, "upsertCustomer", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateCustomer_1.AggregateCustomer, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateCustomerArgs_1.AggregateCustomerArgs]),
    __metadata("design:returntype", Promise)
], CustomerCrudResolver.prototype, "aggregateCustomer", null);
__decorate([
    TypeGraphQL.Query(_returns => [CustomerGroupBy_1.CustomerGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByCustomerArgs_1.GroupByCustomerArgs]),
    __metadata("design:returntype", Promise)
], CustomerCrudResolver.prototype, "groupByCustomer", null);
CustomerCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Customer_1.Customer)
], CustomerCrudResolver);
exports.CustomerCrudResolver = CustomerCrudResolver;
