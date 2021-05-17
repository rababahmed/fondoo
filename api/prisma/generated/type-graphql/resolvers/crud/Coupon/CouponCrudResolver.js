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
exports.CouponCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateCouponArgs_1 = require("./args/AggregateCouponArgs");
const CreateCouponArgs_1 = require("./args/CreateCouponArgs");
const CreateManyCouponArgs_1 = require("./args/CreateManyCouponArgs");
const DeleteCouponArgs_1 = require("./args/DeleteCouponArgs");
const DeleteManyCouponArgs_1 = require("./args/DeleteManyCouponArgs");
const FindFirstCouponArgs_1 = require("./args/FindFirstCouponArgs");
const FindManyCouponArgs_1 = require("./args/FindManyCouponArgs");
const FindUniqueCouponArgs_1 = require("./args/FindUniqueCouponArgs");
const GroupByCouponArgs_1 = require("./args/GroupByCouponArgs");
const UpdateCouponArgs_1 = require("./args/UpdateCouponArgs");
const UpdateManyCouponArgs_1 = require("./args/UpdateManyCouponArgs");
const UpsertCouponArgs_1 = require("./args/UpsertCouponArgs");
const helpers_1 = require("../../../helpers");
const Coupon_1 = require("../../../models/Coupon");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCoupon_1 = require("../../outputs/AggregateCoupon");
const CouponGroupBy_1 = require("../../outputs/CouponGroupBy");
let CouponCrudResolver = class CouponCrudResolver {
    async coupon(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).coupon.findUnique({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async findFirstCoupon(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).coupon.findFirst({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async coupons(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).coupon.findMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createCoupon(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).coupon.create({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createManyCoupon(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).coupon.createMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteCoupon(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).coupon.delete({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateCoupon(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).coupon.update({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteManyCoupon(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).coupon.deleteMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateManyCoupon(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).coupon.updateMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async upsertCoupon(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).coupon.upsert({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async aggregateCoupon(ctx, info, args) {
        return helpers_1.getPrismaFromContext(ctx).coupon.aggregate({
            ...args,
            ...helpers_1.transformFields(graphql_fields_1.default(info)),
        });
    }
    async groupByCoupon(ctx, info, args) {
        const { count, avg, sum, min, max } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).coupon.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Coupon_1.Coupon, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueCouponArgs_1.FindUniqueCouponArgs]),
    __metadata("design:returntype", Promise)
], CouponCrudResolver.prototype, "coupon", null);
__decorate([
    TypeGraphQL.Query(_returns => Coupon_1.Coupon, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstCouponArgs_1.FindFirstCouponArgs]),
    __metadata("design:returntype", Promise)
], CouponCrudResolver.prototype, "findFirstCoupon", null);
__decorate([
    TypeGraphQL.Query(_returns => [Coupon_1.Coupon], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyCouponArgs_1.FindManyCouponArgs]),
    __metadata("design:returntype", Promise)
], CouponCrudResolver.prototype, "coupons", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Coupon_1.Coupon, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateCouponArgs_1.CreateCouponArgs]),
    __metadata("design:returntype", Promise)
], CouponCrudResolver.prototype, "createCoupon", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyCouponArgs_1.CreateManyCouponArgs]),
    __metadata("design:returntype", Promise)
], CouponCrudResolver.prototype, "createManyCoupon", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Coupon_1.Coupon, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteCouponArgs_1.DeleteCouponArgs]),
    __metadata("design:returntype", Promise)
], CouponCrudResolver.prototype, "deleteCoupon", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Coupon_1.Coupon, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateCouponArgs_1.UpdateCouponArgs]),
    __metadata("design:returntype", Promise)
], CouponCrudResolver.prototype, "updateCoupon", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyCouponArgs_1.DeleteManyCouponArgs]),
    __metadata("design:returntype", Promise)
], CouponCrudResolver.prototype, "deleteManyCoupon", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyCouponArgs_1.UpdateManyCouponArgs]),
    __metadata("design:returntype", Promise)
], CouponCrudResolver.prototype, "updateManyCoupon", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Coupon_1.Coupon, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertCouponArgs_1.UpsertCouponArgs]),
    __metadata("design:returntype", Promise)
], CouponCrudResolver.prototype, "upsertCoupon", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateCoupon_1.AggregateCoupon, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateCouponArgs_1.AggregateCouponArgs]),
    __metadata("design:returntype", Promise)
], CouponCrudResolver.prototype, "aggregateCoupon", null);
__decorate([
    TypeGraphQL.Query(_returns => [CouponGroupBy_1.CouponGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByCouponArgs_1.GroupByCouponArgs]),
    __metadata("design:returntype", Promise)
], CouponCrudResolver.prototype, "groupByCoupon", null);
CouponCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Coupon_1.Coupon)
], CouponCrudResolver);
exports.CouponCrudResolver = CouponCrudResolver;
