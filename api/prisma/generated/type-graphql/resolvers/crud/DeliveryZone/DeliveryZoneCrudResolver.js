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
exports.DeliveryZoneCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateDeliveryZoneArgs_1 = require("./args/AggregateDeliveryZoneArgs");
const CreateDeliveryZoneArgs_1 = require("./args/CreateDeliveryZoneArgs");
const CreateManyDeliveryZoneArgs_1 = require("./args/CreateManyDeliveryZoneArgs");
const DeleteDeliveryZoneArgs_1 = require("./args/DeleteDeliveryZoneArgs");
const DeleteManyDeliveryZoneArgs_1 = require("./args/DeleteManyDeliveryZoneArgs");
const FindFirstDeliveryZoneArgs_1 = require("./args/FindFirstDeliveryZoneArgs");
const FindManyDeliveryZoneArgs_1 = require("./args/FindManyDeliveryZoneArgs");
const FindUniqueDeliveryZoneArgs_1 = require("./args/FindUniqueDeliveryZoneArgs");
const GroupByDeliveryZoneArgs_1 = require("./args/GroupByDeliveryZoneArgs");
const UpdateDeliveryZoneArgs_1 = require("./args/UpdateDeliveryZoneArgs");
const UpdateManyDeliveryZoneArgs_1 = require("./args/UpdateManyDeliveryZoneArgs");
const UpsertDeliveryZoneArgs_1 = require("./args/UpsertDeliveryZoneArgs");
const helpers_1 = require("../../../helpers");
const DeliveryZone_1 = require("../../../models/DeliveryZone");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateDeliveryZone_1 = require("../../outputs/AggregateDeliveryZone");
const DeliveryZoneGroupBy_1 = require("../../outputs/DeliveryZoneGroupBy");
let DeliveryZoneCrudResolver = class DeliveryZoneCrudResolver {
    async deliveryZone(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).deliveryZone.findUnique({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async findFirstDeliveryZone(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).deliveryZone.findFirst({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deliveryZones(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).deliveryZone.findMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createDeliveryZone(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).deliveryZone.create({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createManyDeliveryZone(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).deliveryZone.createMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteDeliveryZone(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).deliveryZone.delete({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateDeliveryZone(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).deliveryZone.update({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteManyDeliveryZone(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).deliveryZone.deleteMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateManyDeliveryZone(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).deliveryZone.updateMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async upsertDeliveryZone(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).deliveryZone.upsert({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async aggregateDeliveryZone(ctx, info, args) {
        return helpers_1.getPrismaFromContext(ctx).deliveryZone.aggregate({
            ...args,
            ...helpers_1.transformFields(graphql_fields_1.default(info)),
        });
    }
    async groupByDeliveryZone(ctx, info, args) {
        const { count, avg, sum, min, max } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).deliveryZone.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => DeliveryZone_1.DeliveryZone, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueDeliveryZoneArgs_1.FindUniqueDeliveryZoneArgs]),
    __metadata("design:returntype", Promise)
], DeliveryZoneCrudResolver.prototype, "deliveryZone", null);
__decorate([
    TypeGraphQL.Query(_returns => DeliveryZone_1.DeliveryZone, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstDeliveryZoneArgs_1.FindFirstDeliveryZoneArgs]),
    __metadata("design:returntype", Promise)
], DeliveryZoneCrudResolver.prototype, "findFirstDeliveryZone", null);
__decorate([
    TypeGraphQL.Query(_returns => [DeliveryZone_1.DeliveryZone], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyDeliveryZoneArgs_1.FindManyDeliveryZoneArgs]),
    __metadata("design:returntype", Promise)
], DeliveryZoneCrudResolver.prototype, "deliveryZones", null);
__decorate([
    TypeGraphQL.Mutation(_returns => DeliveryZone_1.DeliveryZone, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateDeliveryZoneArgs_1.CreateDeliveryZoneArgs]),
    __metadata("design:returntype", Promise)
], DeliveryZoneCrudResolver.prototype, "createDeliveryZone", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyDeliveryZoneArgs_1.CreateManyDeliveryZoneArgs]),
    __metadata("design:returntype", Promise)
], DeliveryZoneCrudResolver.prototype, "createManyDeliveryZone", null);
__decorate([
    TypeGraphQL.Mutation(_returns => DeliveryZone_1.DeliveryZone, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteDeliveryZoneArgs_1.DeleteDeliveryZoneArgs]),
    __metadata("design:returntype", Promise)
], DeliveryZoneCrudResolver.prototype, "deleteDeliveryZone", null);
__decorate([
    TypeGraphQL.Mutation(_returns => DeliveryZone_1.DeliveryZone, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateDeliveryZoneArgs_1.UpdateDeliveryZoneArgs]),
    __metadata("design:returntype", Promise)
], DeliveryZoneCrudResolver.prototype, "updateDeliveryZone", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyDeliveryZoneArgs_1.DeleteManyDeliveryZoneArgs]),
    __metadata("design:returntype", Promise)
], DeliveryZoneCrudResolver.prototype, "deleteManyDeliveryZone", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyDeliveryZoneArgs_1.UpdateManyDeliveryZoneArgs]),
    __metadata("design:returntype", Promise)
], DeliveryZoneCrudResolver.prototype, "updateManyDeliveryZone", null);
__decorate([
    TypeGraphQL.Mutation(_returns => DeliveryZone_1.DeliveryZone, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertDeliveryZoneArgs_1.UpsertDeliveryZoneArgs]),
    __metadata("design:returntype", Promise)
], DeliveryZoneCrudResolver.prototype, "upsertDeliveryZone", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateDeliveryZone_1.AggregateDeliveryZone, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateDeliveryZoneArgs_1.AggregateDeliveryZoneArgs]),
    __metadata("design:returntype", Promise)
], DeliveryZoneCrudResolver.prototype, "aggregateDeliveryZone", null);
__decorate([
    TypeGraphQL.Query(_returns => [DeliveryZoneGroupBy_1.DeliveryZoneGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByDeliveryZoneArgs_1.GroupByDeliveryZoneArgs]),
    __metadata("design:returntype", Promise)
], DeliveryZoneCrudResolver.prototype, "groupByDeliveryZone", null);
DeliveryZoneCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => DeliveryZone_1.DeliveryZone)
], DeliveryZoneCrudResolver);
exports.DeliveryZoneCrudResolver = DeliveryZoneCrudResolver;
