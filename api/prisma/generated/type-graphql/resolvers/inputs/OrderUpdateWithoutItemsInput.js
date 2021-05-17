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
exports.OrderUpdateWithoutItemsInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const CouponUpdateOneWithoutOrdersInput_1 = require("../inputs/CouponUpdateOneWithoutOrdersInput");
const CustomerUpdateOneWithoutOrdersInput_1 = require("../inputs/CustomerUpdateOneWithoutOrdersInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const FloatFieldUpdateOperationsInput_1 = require("../inputs/FloatFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const RestaurantUpdateOneRequiredWithoutOrdersInput_1 = require("../inputs/RestaurantUpdateOneRequiredWithoutOrdersInput");
let OrderUpdateWithoutItemsInput = class OrderUpdateWithoutItemsInput {
};
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], OrderUpdateWithoutItemsInput.prototype, "address", void 0);
__decorate([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], OrderUpdateWithoutItemsInput.prototype, "discount", void 0);
__decorate([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], OrderUpdateWithoutItemsInput.prototype, "deliveryCharges", void 0);
__decorate([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], OrderUpdateWithoutItemsInput.prototype, "vat", void 0);
__decorate([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], OrderUpdateWithoutItemsInput.prototype, "serviceCharge", void 0);
__decorate([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], OrderUpdateWithoutItemsInput.prototype, "total", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], OrderUpdateWithoutItemsInput.prototype, "isAccepted", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OrderUpdateWithoutItemsInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OrderUpdateWithoutItemsInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => CouponUpdateOneWithoutOrdersInput_1.CouponUpdateOneWithoutOrdersInput, {
        nullable: true
    }),
    __metadata("design:type", CouponUpdateOneWithoutOrdersInput_1.CouponUpdateOneWithoutOrdersInput)
], OrderUpdateWithoutItemsInput.prototype, "Coupon", void 0);
__decorate([
    TypeGraphQL.Field(_type => RestaurantUpdateOneRequiredWithoutOrdersInput_1.RestaurantUpdateOneRequiredWithoutOrdersInput, {
        nullable: true
    }),
    __metadata("design:type", RestaurantUpdateOneRequiredWithoutOrdersInput_1.RestaurantUpdateOneRequiredWithoutOrdersInput)
], OrderUpdateWithoutItemsInput.prototype, "restaurant", void 0);
__decorate([
    TypeGraphQL.Field(_type => CustomerUpdateOneWithoutOrdersInput_1.CustomerUpdateOneWithoutOrdersInput, {
        nullable: true
    }),
    __metadata("design:type", CustomerUpdateOneWithoutOrdersInput_1.CustomerUpdateOneWithoutOrdersInput)
], OrderUpdateWithoutItemsInput.prototype, "Customer", void 0);
OrderUpdateWithoutItemsInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], OrderUpdateWithoutItemsInput);
exports.OrderUpdateWithoutItemsInput = OrderUpdateWithoutItemsInput;
