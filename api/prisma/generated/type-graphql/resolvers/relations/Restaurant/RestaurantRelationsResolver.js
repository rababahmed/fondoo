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
exports.RestaurantRelationsResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const Customer_1 = require("../../../models/Customer");
const DeliveryZone_1 = require("../../../models/DeliveryZone");
const Order_1 = require("../../../models/Order");
const OrderItem_1 = require("../../../models/OrderItem");
const Product_1 = require("../../../models/Product");
const ProductCategory_1 = require("../../../models/ProductCategory");
const Restaurant_1 = require("../../../models/Restaurant");
const RestaurantPlan_1 = require("../../../models/RestaurantPlan");
const Schedule_1 = require("../../../models/Schedule");
const User_1 = require("../../../models/User");
const RestaurantCustomersArgs_1 = require("./args/RestaurantCustomersArgs");
const RestaurantDeliveryZonesArgs_1 = require("./args/RestaurantDeliveryZonesArgs");
const RestaurantOrderItemsArgs_1 = require("./args/RestaurantOrderItemsArgs");
const RestaurantOrdersArgs_1 = require("./args/RestaurantOrdersArgs");
const RestaurantProductCategoryArgs_1 = require("./args/RestaurantProductCategoryArgs");
const RestaurantProductsArgs_1 = require("./args/RestaurantProductsArgs");
const RestaurantSchedulesArgs_1 = require("./args/RestaurantSchedulesArgs");
const RestaurantUsersArgs_1 = require("./args/RestaurantUsersArgs");
const helpers_1 = require("../../../helpers");
let RestaurantRelationsResolver = class RestaurantRelationsResolver {
    async plan(restaurant, ctx) {
        return helpers_1.getPrismaFromContext(ctx).restaurant.findUnique({
            where: {
                id: restaurant.id,
            },
        }).plan({});
    }
    async schedules(restaurant, ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).restaurant.findUnique({
            where: {
                id: restaurant.id,
            },
        }).schedules(args);
    }
    async deliveryZones(restaurant, ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).restaurant.findUnique({
            where: {
                id: restaurant.id,
            },
        }).deliveryZones(args);
    }
    async customers(restaurant, ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).restaurant.findUnique({
            where: {
                id: restaurant.id,
            },
        }).customers(args);
    }
    async orders(restaurant, ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).restaurant.findUnique({
            where: {
                id: restaurant.id,
            },
        }).orders(args);
    }
    async orderItems(restaurant, ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).restaurant.findUnique({
            where: {
                id: restaurant.id,
            },
        }).orderItems(args);
    }
    async productCategory(restaurant, ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).restaurant.findUnique({
            where: {
                id: restaurant.id,
            },
        }).productCategory(args);
    }
    async products(restaurant, ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).restaurant.findUnique({
            where: {
                id: restaurant.id,
            },
        }).products(args);
    }
    async users(restaurant, ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).restaurant.findUnique({
            where: {
                id: restaurant.id,
            },
        }).users(args);
    }
};
__decorate([
    TypeGraphQL.FieldResolver(_type => RestaurantPlan_1.RestaurantPlan, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Restaurant_1.Restaurant, Object]),
    __metadata("design:returntype", Promise)
], RestaurantRelationsResolver.prototype, "plan", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Schedule_1.Schedule], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Restaurant_1.Restaurant, Object, RestaurantSchedulesArgs_1.RestaurantSchedulesArgs]),
    __metadata("design:returntype", Promise)
], RestaurantRelationsResolver.prototype, "schedules", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [DeliveryZone_1.DeliveryZone], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Restaurant_1.Restaurant, Object, RestaurantDeliveryZonesArgs_1.RestaurantDeliveryZonesArgs]),
    __metadata("design:returntype", Promise)
], RestaurantRelationsResolver.prototype, "deliveryZones", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Customer_1.Customer], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Restaurant_1.Restaurant, Object, RestaurantCustomersArgs_1.RestaurantCustomersArgs]),
    __metadata("design:returntype", Promise)
], RestaurantRelationsResolver.prototype, "customers", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Order_1.Order], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Restaurant_1.Restaurant, Object, RestaurantOrdersArgs_1.RestaurantOrdersArgs]),
    __metadata("design:returntype", Promise)
], RestaurantRelationsResolver.prototype, "orders", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [OrderItem_1.OrderItem], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Restaurant_1.Restaurant, Object, RestaurantOrderItemsArgs_1.RestaurantOrderItemsArgs]),
    __metadata("design:returntype", Promise)
], RestaurantRelationsResolver.prototype, "orderItems", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [ProductCategory_1.ProductCategory], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Restaurant_1.Restaurant, Object, RestaurantProductCategoryArgs_1.RestaurantProductCategoryArgs]),
    __metadata("design:returntype", Promise)
], RestaurantRelationsResolver.prototype, "productCategory", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Product_1.Product], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Restaurant_1.Restaurant, Object, RestaurantProductsArgs_1.RestaurantProductsArgs]),
    __metadata("design:returntype", Promise)
], RestaurantRelationsResolver.prototype, "products", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [User_1.User], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Restaurant_1.Restaurant, Object, RestaurantUsersArgs_1.RestaurantUsersArgs]),
    __metadata("design:returntype", Promise)
], RestaurantRelationsResolver.prototype, "users", null);
RestaurantRelationsResolver = __decorate([
    TypeGraphQL.Resolver(_of => Restaurant_1.Restaurant)
], RestaurantRelationsResolver);
exports.RestaurantRelationsResolver = RestaurantRelationsResolver;
