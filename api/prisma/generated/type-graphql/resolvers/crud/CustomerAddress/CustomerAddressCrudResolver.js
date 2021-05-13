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
exports.CustomerAddressCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateCustomerAddressArgs_1 = require("./args/AggregateCustomerAddressArgs");
const CreateCustomerAddressArgs_1 = require("./args/CreateCustomerAddressArgs");
const CreateManyCustomerAddressArgs_1 = require("./args/CreateManyCustomerAddressArgs");
const DeleteCustomerAddressArgs_1 = require("./args/DeleteCustomerAddressArgs");
const DeleteManyCustomerAddressArgs_1 = require("./args/DeleteManyCustomerAddressArgs");
const FindFirstCustomerAddressArgs_1 = require("./args/FindFirstCustomerAddressArgs");
const FindManyCustomerAddressArgs_1 = require("./args/FindManyCustomerAddressArgs");
const FindUniqueCustomerAddressArgs_1 = require("./args/FindUniqueCustomerAddressArgs");
const GroupByCustomerAddressArgs_1 = require("./args/GroupByCustomerAddressArgs");
const UpdateCustomerAddressArgs_1 = require("./args/UpdateCustomerAddressArgs");
const UpdateManyCustomerAddressArgs_1 = require("./args/UpdateManyCustomerAddressArgs");
const UpsertCustomerAddressArgs_1 = require("./args/UpsertCustomerAddressArgs");
const helpers_1 = require("../../../helpers");
const CustomerAddress_1 = require("../../../models/CustomerAddress");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCustomerAddress_1 = require("../../outputs/AggregateCustomerAddress");
const CustomerAddressGroupBy_1 = require("../../outputs/CustomerAddressGroupBy");
let CustomerAddressCrudResolver = class CustomerAddressCrudResolver {
    async customerAddress(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).customerAddress.findUnique({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async findFirstCustomerAddress(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).customerAddress.findFirst({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async customerAddresses(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).customerAddress.findMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createCustomerAddress(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).customerAddress.create({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createManyCustomerAddress(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).customerAddress.createMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteCustomerAddress(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).customerAddress.delete({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateCustomerAddress(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).customerAddress.update({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteManyCustomerAddress(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).customerAddress.deleteMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateManyCustomerAddress(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).customerAddress.updateMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async upsertCustomerAddress(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).customerAddress.upsert({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async aggregateCustomerAddress(ctx, info, args) {
        return helpers_1.getPrismaFromContext(ctx).customerAddress.aggregate({
            ...args,
            ...helpers_1.transformFields(graphql_fields_1.default(info)),
        });
    }
    async groupByCustomerAddress(ctx, info, args) {
        const { count, avg, sum, min, max } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).customerAddress.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => CustomerAddress_1.CustomerAddress, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueCustomerAddressArgs_1.FindUniqueCustomerAddressArgs]),
    __metadata("design:returntype", Promise)
], CustomerAddressCrudResolver.prototype, "customerAddress", null);
__decorate([
    TypeGraphQL.Query(_returns => CustomerAddress_1.CustomerAddress, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstCustomerAddressArgs_1.FindFirstCustomerAddressArgs]),
    __metadata("design:returntype", Promise)
], CustomerAddressCrudResolver.prototype, "findFirstCustomerAddress", null);
__decorate([
    TypeGraphQL.Query(_returns => [CustomerAddress_1.CustomerAddress], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyCustomerAddressArgs_1.FindManyCustomerAddressArgs]),
    __metadata("design:returntype", Promise)
], CustomerAddressCrudResolver.prototype, "customerAddresses", null);
__decorate([
    TypeGraphQL.Mutation(_returns => CustomerAddress_1.CustomerAddress, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateCustomerAddressArgs_1.CreateCustomerAddressArgs]),
    __metadata("design:returntype", Promise)
], CustomerAddressCrudResolver.prototype, "createCustomerAddress", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyCustomerAddressArgs_1.CreateManyCustomerAddressArgs]),
    __metadata("design:returntype", Promise)
], CustomerAddressCrudResolver.prototype, "createManyCustomerAddress", null);
__decorate([
    TypeGraphQL.Mutation(_returns => CustomerAddress_1.CustomerAddress, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteCustomerAddressArgs_1.DeleteCustomerAddressArgs]),
    __metadata("design:returntype", Promise)
], CustomerAddressCrudResolver.prototype, "deleteCustomerAddress", null);
__decorate([
    TypeGraphQL.Mutation(_returns => CustomerAddress_1.CustomerAddress, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateCustomerAddressArgs_1.UpdateCustomerAddressArgs]),
    __metadata("design:returntype", Promise)
], CustomerAddressCrudResolver.prototype, "updateCustomerAddress", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyCustomerAddressArgs_1.DeleteManyCustomerAddressArgs]),
    __metadata("design:returntype", Promise)
], CustomerAddressCrudResolver.prototype, "deleteManyCustomerAddress", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyCustomerAddressArgs_1.UpdateManyCustomerAddressArgs]),
    __metadata("design:returntype", Promise)
], CustomerAddressCrudResolver.prototype, "updateManyCustomerAddress", null);
__decorate([
    TypeGraphQL.Mutation(_returns => CustomerAddress_1.CustomerAddress, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertCustomerAddressArgs_1.UpsertCustomerAddressArgs]),
    __metadata("design:returntype", Promise)
], CustomerAddressCrudResolver.prototype, "upsertCustomerAddress", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateCustomerAddress_1.AggregateCustomerAddress, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateCustomerAddressArgs_1.AggregateCustomerAddressArgs]),
    __metadata("design:returntype", Promise)
], CustomerAddressCrudResolver.prototype, "aggregateCustomerAddress", null);
__decorate([
    TypeGraphQL.Query(_returns => [CustomerAddressGroupBy_1.CustomerAddressGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByCustomerAddressArgs_1.GroupByCustomerAddressArgs]),
    __metadata("design:returntype", Promise)
], CustomerAddressCrudResolver.prototype, "groupByCustomerAddress", null);
CustomerAddressCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => CustomerAddress_1.CustomerAddress)
], CustomerAddressCrudResolver);
exports.CustomerAddressCrudResolver = CustomerAddressCrudResolver;
