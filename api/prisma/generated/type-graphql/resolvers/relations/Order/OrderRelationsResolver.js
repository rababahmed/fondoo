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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRelationsResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const Customer_1 = require("../../../models/Customer");
const CustomerAddress_1 = require("../../../models/CustomerAddress");
const Order_1 = require("../../../models/Order");
const OrderElement_1 = require("../../../models/OrderElement");
const Product_1 = require("../../../models/Product");
const Restaurant_1 = require("../../../models/Restaurant");
const OrderElementsArgs_1 = require("./args/OrderElementsArgs");
const OrderProductArgs_1 = require("./args/OrderProductArgs");
const helpers_1 = require("../../../helpers");
let OrderRelationsResolver = class OrderRelationsResolver {
    async elements(order, ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).order.findUnique({
            where: {
                id: order.id,
            },
        }).elements(args);
    }
    async customerAddress(order, ctx) {
        return helpers_1.getPrismaFromContext(ctx).order.findUnique({
            where: {
                id: order.id,
            },
        }).customerAddress({});
    }
    async restaurant(order, ctx) {
        return helpers_1.getPrismaFromContext(ctx).order.findUnique({
            where: {
                id: order.id,
            },
        }).restaurant({});
    }
    async customer(order, ctx) {
        return helpers_1.getPrismaFromContext(ctx).order.findUnique({
            where: {
                id: order.id,
            },
        }).customer({});
    }
    async product(order, ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).order.findUnique({
            where: {
                id: order.id,
            },
        }).product(args);
    }
};
__decorate([
    TypeGraphQL.FieldResolver(_type => [OrderElement_1.OrderElement], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Order_1.Order, Object, OrderElementsArgs_1.OrderElementsArgs]),
    __metadata("design:returntype", Promise)
], OrderRelationsResolver.prototype, "elements", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => CustomerAddress_1.CustomerAddress, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Order_1.Order, Object]),
    __metadata("design:returntype", Promise)
], OrderRelationsResolver.prototype, "customerAddress", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => Restaurant_1.Restaurant, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Order_1.Order, Object]),
    __metadata("design:returntype", Promise)
], OrderRelationsResolver.prototype, "restaurant", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => Customer_1.Customer, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Order_1.Order, Object]),
    __metadata("design:returntype", Promise)
], OrderRelationsResolver.prototype, "customer", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Product_1.Product], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Order_1.Order, Object, OrderProductArgs_1.OrderProductArgs]),
    __metadata("design:returntype", Promise)
], OrderRelationsResolver.prototype, "product", null);
OrderRelationsResolver = __decorate([
    TypeGraphQL.Resolver(_of => Order_1.Order)
], OrderRelationsResolver);
exports.OrderRelationsResolver = OrderRelationsResolver;
