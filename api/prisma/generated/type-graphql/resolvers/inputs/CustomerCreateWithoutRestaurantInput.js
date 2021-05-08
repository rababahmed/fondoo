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
exports.CustomerCreateWithoutRestaurantInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const CartElementCreateNestedManyWithoutCustomerInput_1 = require("../inputs/CartElementCreateNestedManyWithoutCustomerInput");
const CustomerAddressCreateNestedManyWithoutCustomerInput_1 = require("../inputs/CustomerAddressCreateNestedManyWithoutCustomerInput");
const CustomerTokenCreateNestedManyWithoutCustomerInput_1 = require("../inputs/CustomerTokenCreateNestedManyWithoutCustomerInput");
const OrderCreateNestedManyWithoutCustomerInput_1 = require("../inputs/OrderCreateNestedManyWithoutCustomerInput");
let CustomerCreateWithoutRestaurantInput = class CustomerCreateWithoutRestaurantInput {
};
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], CustomerCreateWithoutRestaurantInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], CustomerCreateWithoutRestaurantInput.prototype, "firstName", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], CustomerCreateWithoutRestaurantInput.prototype, "lastName", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], CustomerCreateWithoutRestaurantInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], CustomerCreateWithoutRestaurantInput.prototype, "password", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], CustomerCreateWithoutRestaurantInput.prototype, "phone", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], CustomerCreateWithoutRestaurantInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => CustomerTokenCreateNestedManyWithoutCustomerInput_1.CustomerTokenCreateNestedManyWithoutCustomerInput, {
        nullable: true
    }),
    __metadata("design:type", CustomerTokenCreateNestedManyWithoutCustomerInput_1.CustomerTokenCreateNestedManyWithoutCustomerInput)
], CustomerCreateWithoutRestaurantInput.prototype, "token", void 0);
__decorate([
    TypeGraphQL.Field(_type => CustomerAddressCreateNestedManyWithoutCustomerInput_1.CustomerAddressCreateNestedManyWithoutCustomerInput, {
        nullable: true
    }),
    __metadata("design:type", CustomerAddressCreateNestedManyWithoutCustomerInput_1.CustomerAddressCreateNestedManyWithoutCustomerInput)
], CustomerCreateWithoutRestaurantInput.prototype, "address", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderCreateNestedManyWithoutCustomerInput_1.OrderCreateNestedManyWithoutCustomerInput, {
        nullable: true
    }),
    __metadata("design:type", OrderCreateNestedManyWithoutCustomerInput_1.OrderCreateNestedManyWithoutCustomerInput)
], CustomerCreateWithoutRestaurantInput.prototype, "orders", void 0);
__decorate([
    TypeGraphQL.Field(_type => CartElementCreateNestedManyWithoutCustomerInput_1.CartElementCreateNestedManyWithoutCustomerInput, {
        nullable: true
    }),
    __metadata("design:type", CartElementCreateNestedManyWithoutCustomerInput_1.CartElementCreateNestedManyWithoutCustomerInput)
], CustomerCreateWithoutRestaurantInput.prototype, "cart", void 0);
CustomerCreateWithoutRestaurantInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], CustomerCreateWithoutRestaurantInput);
exports.CustomerCreateWithoutRestaurantInput = CustomerCreateWithoutRestaurantInput;
