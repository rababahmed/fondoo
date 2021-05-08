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
exports.OrderUpdateInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const CustomerAddressUpdateOneRequiredWithoutOrderInput_1 = require("../inputs/CustomerAddressUpdateOneRequiredWithoutOrderInput");
const CustomerUpdateOneWithoutOrdersInput_1 = require("../inputs/CustomerUpdateOneWithoutOrdersInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const NullableBoolFieldUpdateOperationsInput_1 = require("../inputs/NullableBoolFieldUpdateOperationsInput");
const NullableIntFieldUpdateOperationsInput_1 = require("../inputs/NullableIntFieldUpdateOperationsInput");
const OrderElementUpdateManyWithoutOrderInput_1 = require("../inputs/OrderElementUpdateManyWithoutOrderInput");
const ProductUpdateManyWithoutOrderInput_1 = require("../inputs/ProductUpdateManyWithoutOrderInput");
const RestaurantUpdateOneWithoutOrdersInput_1 = require("../inputs/RestaurantUpdateOneWithoutOrdersInput");
let OrderUpdateInput = class OrderUpdateInput {
};
__decorate([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], OrderUpdateInput.prototype, "charges", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], OrderUpdateInput.prototype, "total", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], OrderUpdateInput.prototype, "isAccepted", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OrderUpdateInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OrderUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderElementUpdateManyWithoutOrderInput_1.OrderElementUpdateManyWithoutOrderInput, {
        nullable: true
    }),
    __metadata("design:type", OrderElementUpdateManyWithoutOrderInput_1.OrderElementUpdateManyWithoutOrderInput)
], OrderUpdateInput.prototype, "elements", void 0);
__decorate([
    TypeGraphQL.Field(_type => CustomerAddressUpdateOneRequiredWithoutOrderInput_1.CustomerAddressUpdateOneRequiredWithoutOrderInput, {
        nullable: true
    }),
    __metadata("design:type", CustomerAddressUpdateOneRequiredWithoutOrderInput_1.CustomerAddressUpdateOneRequiredWithoutOrderInput)
], OrderUpdateInput.prototype, "customerAddress", void 0);
__decorate([
    TypeGraphQL.Field(_type => RestaurantUpdateOneWithoutOrdersInput_1.RestaurantUpdateOneWithoutOrdersInput, {
        nullable: true
    }),
    __metadata("design:type", RestaurantUpdateOneWithoutOrdersInput_1.RestaurantUpdateOneWithoutOrdersInput)
], OrderUpdateInput.prototype, "restaurant", void 0);
__decorate([
    TypeGraphQL.Field(_type => CustomerUpdateOneWithoutOrdersInput_1.CustomerUpdateOneWithoutOrdersInput, {
        nullable: true
    }),
    __metadata("design:type", CustomerUpdateOneWithoutOrdersInput_1.CustomerUpdateOneWithoutOrdersInput)
], OrderUpdateInput.prototype, "customer", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductUpdateManyWithoutOrderInput_1.ProductUpdateManyWithoutOrderInput, {
        nullable: true
    }),
    __metadata("design:type", ProductUpdateManyWithoutOrderInput_1.ProductUpdateManyWithoutOrderInput)
], OrderUpdateInput.prototype, "product", void 0);
OrderUpdateInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], OrderUpdateInput);
exports.OrderUpdateInput = OrderUpdateInput;
