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
exports.ScheduleCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateScheduleArgs_1 = require("./args/AggregateScheduleArgs");
const CreateManyScheduleArgs_1 = require("./args/CreateManyScheduleArgs");
const CreateScheduleArgs_1 = require("./args/CreateScheduleArgs");
const DeleteManyScheduleArgs_1 = require("./args/DeleteManyScheduleArgs");
const DeleteScheduleArgs_1 = require("./args/DeleteScheduleArgs");
const FindFirstScheduleArgs_1 = require("./args/FindFirstScheduleArgs");
const FindManyScheduleArgs_1 = require("./args/FindManyScheduleArgs");
const FindUniqueScheduleArgs_1 = require("./args/FindUniqueScheduleArgs");
const GroupByScheduleArgs_1 = require("./args/GroupByScheduleArgs");
const UpdateManyScheduleArgs_1 = require("./args/UpdateManyScheduleArgs");
const UpdateScheduleArgs_1 = require("./args/UpdateScheduleArgs");
const UpsertScheduleArgs_1 = require("./args/UpsertScheduleArgs");
const helpers_1 = require("../../../helpers");
const Schedule_1 = require("../../../models/Schedule");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateSchedule_1 = require("../../outputs/AggregateSchedule");
const ScheduleGroupBy_1 = require("../../outputs/ScheduleGroupBy");
let ScheduleCrudResolver = class ScheduleCrudResolver {
    async schedule(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).schedule.findUnique({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async findFirstSchedule(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).schedule.findFirst({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async schedules(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).schedule.findMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createSchedule(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).schedule.create({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createManySchedule(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).schedule.createMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteSchedule(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).schedule.delete({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateSchedule(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).schedule.update({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteManySchedule(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).schedule.deleteMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateManySchedule(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).schedule.updateMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async upsertSchedule(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).schedule.upsert({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async aggregateSchedule(ctx, info, args) {
        return helpers_1.getPrismaFromContext(ctx).schedule.aggregate({
            ...args,
            ...helpers_1.transformFields(graphql_fields_1.default(info)),
        });
    }
    async groupBySchedule(ctx, info, args) {
        const { count, avg, sum, min, max } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).schedule.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Schedule_1.Schedule, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueScheduleArgs_1.FindUniqueScheduleArgs]),
    __metadata("design:returntype", Promise)
], ScheduleCrudResolver.prototype, "schedule", null);
__decorate([
    TypeGraphQL.Query(_returns => Schedule_1.Schedule, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstScheduleArgs_1.FindFirstScheduleArgs]),
    __metadata("design:returntype", Promise)
], ScheduleCrudResolver.prototype, "findFirstSchedule", null);
__decorate([
    TypeGraphQL.Query(_returns => [Schedule_1.Schedule], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyScheduleArgs_1.FindManyScheduleArgs]),
    __metadata("design:returntype", Promise)
], ScheduleCrudResolver.prototype, "schedules", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Schedule_1.Schedule, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateScheduleArgs_1.CreateScheduleArgs]),
    __metadata("design:returntype", Promise)
], ScheduleCrudResolver.prototype, "createSchedule", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyScheduleArgs_1.CreateManyScheduleArgs]),
    __metadata("design:returntype", Promise)
], ScheduleCrudResolver.prototype, "createManySchedule", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Schedule_1.Schedule, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteScheduleArgs_1.DeleteScheduleArgs]),
    __metadata("design:returntype", Promise)
], ScheduleCrudResolver.prototype, "deleteSchedule", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Schedule_1.Schedule, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateScheduleArgs_1.UpdateScheduleArgs]),
    __metadata("design:returntype", Promise)
], ScheduleCrudResolver.prototype, "updateSchedule", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyScheduleArgs_1.DeleteManyScheduleArgs]),
    __metadata("design:returntype", Promise)
], ScheduleCrudResolver.prototype, "deleteManySchedule", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyScheduleArgs_1.UpdateManyScheduleArgs]),
    __metadata("design:returntype", Promise)
], ScheduleCrudResolver.prototype, "updateManySchedule", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Schedule_1.Schedule, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertScheduleArgs_1.UpsertScheduleArgs]),
    __metadata("design:returntype", Promise)
], ScheduleCrudResolver.prototype, "upsertSchedule", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateSchedule_1.AggregateSchedule, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateScheduleArgs_1.AggregateScheduleArgs]),
    __metadata("design:returntype", Promise)
], ScheduleCrudResolver.prototype, "aggregateSchedule", null);
__decorate([
    TypeGraphQL.Query(_returns => [ScheduleGroupBy_1.ScheduleGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByScheduleArgs_1.GroupByScheduleArgs]),
    __metadata("design:returntype", Promise)
], ScheduleCrudResolver.prototype, "groupBySchedule", null);
ScheduleCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Schedule_1.Schedule)
], ScheduleCrudResolver);
exports.ScheduleCrudResolver = ScheduleCrudResolver;
