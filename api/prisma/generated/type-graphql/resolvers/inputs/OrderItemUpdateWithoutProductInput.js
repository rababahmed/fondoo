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
exports.OrderItemUpdateWithoutProductInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumSpiceLevelFieldUpdateOperationsInput_1 = require("../inputs/EnumSpiceLevelFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const OrderUpdateOneWithoutItemsInput_1 = require("../inputs/OrderUpdateOneWithoutItemsInput");
const RestaurantUpdateOneWithoutOrderItemsInput_1 = require("../inputs/RestaurantUpdateOneWithoutOrderItemsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let OrderItemUpdateWithoutProductInput = class OrderItemUpdateWithoutProductInput {
};
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], OrderItemUpdateWithoutProductInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], OrderItemUpdateWithoutProductInput.prototype, "quantity", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], OrderItemUpdateWithoutProductInput.prototype, "total", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnumSpiceLevelFieldUpdateOperationsInput_1.EnumSpiceLevelFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", EnumSpiceLevelFieldUpdateOperationsInput_1.EnumSpiceLevelFieldUpdateOperationsInput)
], OrderItemUpdateWithoutProductInput.prototype, "spiceLevel", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OrderItemUpdateWithoutProductInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OrderItemUpdateWithoutProductInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderUpdateOneWithoutItemsInput_1.OrderUpdateOneWithoutItemsInput, {
        nullable: true
    }),
    __metadata("design:type", OrderUpdateOneWithoutItemsInput_1.OrderUpdateOneWithoutItemsInput)
], OrderItemUpdateWithoutProductInput.prototype, "Order", void 0);
__decorate([
    TypeGraphQL.Field(_type => RestaurantUpdateOneWithoutOrderItemsInput_1.RestaurantUpdateOneWithoutOrderItemsInput, {
        nullable: true
    }),
    __metadata("design:type", RestaurantUpdateOneWithoutOrderItemsInput_1.RestaurantUpdateOneWithoutOrderItemsInput)
], OrderItemUpdateWithoutProductInput.prototype, "Restaurant", void 0);
OrderItemUpdateWithoutProductInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], OrderItemUpdateWithoutProductInput);
exports.OrderItemUpdateWithoutProductInput = OrderItemUpdateWithoutProductInput;
