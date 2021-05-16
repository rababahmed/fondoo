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
exports.CustomerUncheckedCreateWithoutRestaurantInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const CustomerAddressUncheckedCreateNestedManyWithoutCustomerInput_1 = require("../inputs/CustomerAddressUncheckedCreateNestedManyWithoutCustomerInput");
const CustomerTokenUncheckedCreateNestedManyWithoutCustomerInput_1 = require("../inputs/CustomerTokenUncheckedCreateNestedManyWithoutCustomerInput");
const OrderUncheckedCreateNestedManyWithoutCustomerInput_1 = require("../inputs/OrderUncheckedCreateNestedManyWithoutCustomerInput");
let CustomerUncheckedCreateWithoutRestaurantInput = class CustomerUncheckedCreateWithoutRestaurantInput {
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], CustomerUncheckedCreateWithoutRestaurantInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], CustomerUncheckedCreateWithoutRestaurantInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], CustomerUncheckedCreateWithoutRestaurantInput.prototype, "firstName", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], CustomerUncheckedCreateWithoutRestaurantInput.prototype, "lastName", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], CustomerUncheckedCreateWithoutRestaurantInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], CustomerUncheckedCreateWithoutRestaurantInput.prototype, "password", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], CustomerUncheckedCreateWithoutRestaurantInput.prototype, "phone", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], CustomerUncheckedCreateWithoutRestaurantInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => CustomerTokenUncheckedCreateNestedManyWithoutCustomerInput_1.CustomerTokenUncheckedCreateNestedManyWithoutCustomerInput, {
        nullable: true
    }),
    __metadata("design:type", CustomerTokenUncheckedCreateNestedManyWithoutCustomerInput_1.CustomerTokenUncheckedCreateNestedManyWithoutCustomerInput)
], CustomerUncheckedCreateWithoutRestaurantInput.prototype, "token", void 0);
__decorate([
    TypeGraphQL.Field(_type => CustomerAddressUncheckedCreateNestedManyWithoutCustomerInput_1.CustomerAddressUncheckedCreateNestedManyWithoutCustomerInput, {
        nullable: true
    }),
    __metadata("design:type", CustomerAddressUncheckedCreateNestedManyWithoutCustomerInput_1.CustomerAddressUncheckedCreateNestedManyWithoutCustomerInput)
], CustomerUncheckedCreateWithoutRestaurantInput.prototype, "address", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderUncheckedCreateNestedManyWithoutCustomerInput_1.OrderUncheckedCreateNestedManyWithoutCustomerInput, {
        nullable: true
    }),
    __metadata("design:type", OrderUncheckedCreateNestedManyWithoutCustomerInput_1.OrderUncheckedCreateNestedManyWithoutCustomerInput)
], CustomerUncheckedCreateWithoutRestaurantInput.prototype, "orders", void 0);
CustomerUncheckedCreateWithoutRestaurantInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], CustomerUncheckedCreateWithoutRestaurantInput);
exports.CustomerUncheckedCreateWithoutRestaurantInput = CustomerUncheckedCreateWithoutRestaurantInput;
