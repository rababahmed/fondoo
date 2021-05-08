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
exports.CustomerUpdateWithoutCartInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const CustomerAddressUpdateManyWithoutCustomerInput_1 = require("../inputs/CustomerAddressUpdateManyWithoutCustomerInput");
const CustomerTokenUpdateManyWithoutCustomerInput_1 = require("../inputs/CustomerTokenUpdateManyWithoutCustomerInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const OrderUpdateManyWithoutCustomerInput_1 = require("../inputs/OrderUpdateManyWithoutCustomerInput");
const RestaurantUpdateOneWithoutCustomersInput_1 = require("../inputs/RestaurantUpdateOneWithoutCustomersInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let CustomerUpdateWithoutCartInput = class CustomerUpdateWithoutCartInput {
};
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], CustomerUpdateWithoutCartInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CustomerUpdateWithoutCartInput.prototype, "firstName", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CustomerUpdateWithoutCartInput.prototype, "lastName", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CustomerUpdateWithoutCartInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CustomerUpdateWithoutCartInput.prototype, "password", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CustomerUpdateWithoutCartInput.prototype, "phone", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], CustomerUpdateWithoutCartInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => CustomerTokenUpdateManyWithoutCustomerInput_1.CustomerTokenUpdateManyWithoutCustomerInput, {
        nullable: true
    }),
    __metadata("design:type", CustomerTokenUpdateManyWithoutCustomerInput_1.CustomerTokenUpdateManyWithoutCustomerInput)
], CustomerUpdateWithoutCartInput.prototype, "token", void 0);
__decorate([
    TypeGraphQL.Field(_type => CustomerAddressUpdateManyWithoutCustomerInput_1.CustomerAddressUpdateManyWithoutCustomerInput, {
        nullable: true
    }),
    __metadata("design:type", CustomerAddressUpdateManyWithoutCustomerInput_1.CustomerAddressUpdateManyWithoutCustomerInput)
], CustomerUpdateWithoutCartInput.prototype, "address", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderUpdateManyWithoutCustomerInput_1.OrderUpdateManyWithoutCustomerInput, {
        nullable: true
    }),
    __metadata("design:type", OrderUpdateManyWithoutCustomerInput_1.OrderUpdateManyWithoutCustomerInput)
], CustomerUpdateWithoutCartInput.prototype, "orders", void 0);
__decorate([
    TypeGraphQL.Field(_type => RestaurantUpdateOneWithoutCustomersInput_1.RestaurantUpdateOneWithoutCustomersInput, {
        nullable: true
    }),
    __metadata("design:type", RestaurantUpdateOneWithoutCustomersInput_1.RestaurantUpdateOneWithoutCustomersInput)
], CustomerUpdateWithoutCartInput.prototype, "Restaurant", void 0);
CustomerUpdateWithoutCartInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], CustomerUpdateWithoutCartInput);
exports.CustomerUpdateWithoutCartInput = CustomerUpdateWithoutCartInput;
