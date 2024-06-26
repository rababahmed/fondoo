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
exports.CustomerRelationsResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const Customer_1 = require("../../../models/Customer");
const CustomerAddress_1 = require("../../../models/CustomerAddress");
const CustomerToken_1 = require("../../../models/CustomerToken");
const Order_1 = require("../../../models/Order");
const Restaurant_1 = require("../../../models/Restaurant");
const CustomerAddressesArgs_1 = require("./args/CustomerAddressesArgs");
const CustomerOrdersArgs_1 = require("./args/CustomerOrdersArgs");
const CustomerRestaurantsArgs_1 = require("./args/CustomerRestaurantsArgs");
const CustomerTokenArgs_1 = require("./args/CustomerTokenArgs");
const helpers_1 = require("../../../helpers");
let CustomerRelationsResolver = class CustomerRelationsResolver {
    async token(customer, ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).customer.findUnique({
            where: {
                id: customer.id,
            },
        }).token(args);
    }
    async addresses(customer, ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).customer.findUnique({
            where: {
                id: customer.id,
            },
        }).addresses(args);
    }
    async orders(customer, ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).customer.findUnique({
            where: {
                id: customer.id,
            },
        }).orders(args);
    }
    async restaurants(customer, ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).customer.findUnique({
            where: {
                id: customer.id,
            },
        }).restaurants(args);
    }
};
__decorate([
    TypeGraphQL.FieldResolver(_type => [CustomerToken_1.CustomerToken], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Customer_1.Customer, Object, CustomerTokenArgs_1.CustomerTokenArgs]),
    __metadata("design:returntype", Promise)
], CustomerRelationsResolver.prototype, "token", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [CustomerAddress_1.CustomerAddress], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Customer_1.Customer, Object, CustomerAddressesArgs_1.CustomerAddressesArgs]),
    __metadata("design:returntype", Promise)
], CustomerRelationsResolver.prototype, "addresses", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Order_1.Order], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Customer_1.Customer, Object, CustomerOrdersArgs_1.CustomerOrdersArgs]),
    __metadata("design:returntype", Promise)
], CustomerRelationsResolver.prototype, "orders", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Restaurant_1.Restaurant], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Customer_1.Customer, Object, CustomerRestaurantsArgs_1.CustomerRestaurantsArgs]),
    __metadata("design:returntype", Promise)
], CustomerRelationsResolver.prototype, "restaurants", null);
CustomerRelationsResolver = __decorate([
    TypeGraphQL.Resolver(_of => Customer_1.Customer)
], CustomerRelationsResolver);
exports.CustomerRelationsResolver = CustomerRelationsResolver;
