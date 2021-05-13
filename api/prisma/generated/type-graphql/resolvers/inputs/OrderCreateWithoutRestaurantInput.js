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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateWithoutRestaurantInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const GraphQLScalars = __importStar(require("graphql-scalars"));
const client_1 = require("@prisma/client");
const CustomerAddressCreateNestedOneWithoutOrderInput_1 = require("../inputs/CustomerAddressCreateNestedOneWithoutOrderInput");
const CustomerCreateNestedOneWithoutOrdersInput_1 = require("../inputs/CustomerCreateNestedOneWithoutOrdersInput");
const UserCreateNestedOneWithoutOrdersInput_1 = require("../inputs/UserCreateNestedOneWithoutOrdersInput");
let OrderCreateWithoutRestaurantInput = class OrderCreateWithoutRestaurantInput {
};
__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
        nullable: false
    }),
    __metadata("design:type", Object)
], OrderCreateWithoutRestaurantInput.prototype, "items", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], OrderCreateWithoutRestaurantInput.prototype, "coupon", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    __metadata("design:type", Number)
], OrderCreateWithoutRestaurantInput.prototype, "deliveryCharges", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    __metadata("design:type", Number)
], OrderCreateWithoutRestaurantInput.prototype, "vat", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    __metadata("design:type", Number)
], OrderCreateWithoutRestaurantInput.prototype, "serviceCharge", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    __metadata("design:type", Number)
], OrderCreateWithoutRestaurantInput.prototype, "total", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    __metadata("design:type", Boolean)
], OrderCreateWithoutRestaurantInput.prototype, "isAccepted", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], OrderCreateWithoutRestaurantInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], OrderCreateWithoutRestaurantInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutOrdersInput_1.UserCreateNestedOneWithoutOrdersInput, {
        nullable: false
    }),
    __metadata("design:type", UserCreateNestedOneWithoutOrdersInput_1.UserCreateNestedOneWithoutOrdersInput)
], OrderCreateWithoutRestaurantInput.prototype, "user", void 0);
__decorate([
    TypeGraphQL.Field(_type => CustomerCreateNestedOneWithoutOrdersInput_1.CustomerCreateNestedOneWithoutOrdersInput, {
        nullable: true
    }),
    __metadata("design:type", CustomerCreateNestedOneWithoutOrdersInput_1.CustomerCreateNestedOneWithoutOrdersInput)
], OrderCreateWithoutRestaurantInput.prototype, "Customer", void 0);
__decorate([
    TypeGraphQL.Field(_type => CustomerAddressCreateNestedOneWithoutOrderInput_1.CustomerAddressCreateNestedOneWithoutOrderInput, {
        nullable: true
    }),
    __metadata("design:type", CustomerAddressCreateNestedOneWithoutOrderInput_1.CustomerAddressCreateNestedOneWithoutOrderInput)
], OrderCreateWithoutRestaurantInput.prototype, "CustomerAddress", void 0);
OrderCreateWithoutRestaurantInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], OrderCreateWithoutRestaurantInput);
exports.OrderCreateWithoutRestaurantInput = OrderCreateWithoutRestaurantInput;