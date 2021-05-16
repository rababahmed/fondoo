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
exports.CustomerUncheckedUpdateWithoutRestaurantInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const CustomerAddressUncheckedUpdateManyWithoutCustomerInput_1 = require("../inputs/CustomerAddressUncheckedUpdateManyWithoutCustomerInput");
const CustomerTokenUncheckedUpdateManyWithoutCustomerInput_1 = require("../inputs/CustomerTokenUncheckedUpdateManyWithoutCustomerInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const OrderUncheckedUpdateManyWithoutCustomerInput_1 = require("../inputs/OrderUncheckedUpdateManyWithoutCustomerInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let CustomerUncheckedUpdateWithoutRestaurantInput = class CustomerUncheckedUpdateWithoutRestaurantInput {
};
__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], CustomerUncheckedUpdateWithoutRestaurantInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], CustomerUncheckedUpdateWithoutRestaurantInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CustomerUncheckedUpdateWithoutRestaurantInput.prototype, "firstName", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CustomerUncheckedUpdateWithoutRestaurantInput.prototype, "lastName", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CustomerUncheckedUpdateWithoutRestaurantInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CustomerUncheckedUpdateWithoutRestaurantInput.prototype, "password", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CustomerUncheckedUpdateWithoutRestaurantInput.prototype, "phone", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], CustomerUncheckedUpdateWithoutRestaurantInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => CustomerTokenUncheckedUpdateManyWithoutCustomerInput_1.CustomerTokenUncheckedUpdateManyWithoutCustomerInput, {
        nullable: true
    }),
    __metadata("design:type", CustomerTokenUncheckedUpdateManyWithoutCustomerInput_1.CustomerTokenUncheckedUpdateManyWithoutCustomerInput)
], CustomerUncheckedUpdateWithoutRestaurantInput.prototype, "token", void 0);
__decorate([
    TypeGraphQL.Field(_type => CustomerAddressUncheckedUpdateManyWithoutCustomerInput_1.CustomerAddressUncheckedUpdateManyWithoutCustomerInput, {
        nullable: true
    }),
    __metadata("design:type", CustomerAddressUncheckedUpdateManyWithoutCustomerInput_1.CustomerAddressUncheckedUpdateManyWithoutCustomerInput)
], CustomerUncheckedUpdateWithoutRestaurantInput.prototype, "address", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderUncheckedUpdateManyWithoutCustomerInput_1.OrderUncheckedUpdateManyWithoutCustomerInput, {
        nullable: true
    }),
    __metadata("design:type", OrderUncheckedUpdateManyWithoutCustomerInput_1.OrderUncheckedUpdateManyWithoutCustomerInput)
], CustomerUncheckedUpdateWithoutRestaurantInput.prototype, "orders", void 0);
CustomerUncheckedUpdateWithoutRestaurantInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], CustomerUncheckedUpdateWithoutRestaurantInput);
exports.CustomerUncheckedUpdateWithoutRestaurantInput = CustomerUncheckedUpdateWithoutRestaurantInput;
