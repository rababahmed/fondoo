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
exports.RestaurantUpdateWithoutSchedulesInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const CustomerUpdateManyWithoutRestaurantsInput_1 = require("../inputs/CustomerUpdateManyWithoutRestaurantsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const DeliveryZoneUpdateManyWithoutRestaurantInput_1 = require("../inputs/DeliveryZoneUpdateManyWithoutRestaurantInput");
const NullableBoolFieldUpdateOperationsInput_1 = require("../inputs/NullableBoolFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const OrderItemUpdateManyWithoutRestaurantInput_1 = require("../inputs/OrderItemUpdateManyWithoutRestaurantInput");
const OrderUpdateManyWithoutRestaurantInput_1 = require("../inputs/OrderUpdateManyWithoutRestaurantInput");
const ProductCategoryUpdateManyWithoutRestaurantsInput_1 = require("../inputs/ProductCategoryUpdateManyWithoutRestaurantsInput");
const ProductUpdateManyWithoutRestaurantInput_1 = require("../inputs/ProductUpdateManyWithoutRestaurantInput");
const RestaurantPlanUpdateOneWithoutRestaurantsInput_1 = require("../inputs/RestaurantPlanUpdateOneWithoutRestaurantsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateManyWithoutRestaurantsInput_1 = require("../inputs/UserUpdateManyWithoutRestaurantsInput");
let RestaurantUpdateWithoutSchedulesInput = class RestaurantUpdateWithoutSchedulesInput {
};
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], RestaurantUpdateWithoutSchedulesInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], RestaurantUpdateWithoutSchedulesInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], RestaurantUpdateWithoutSchedulesInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], RestaurantUpdateWithoutSchedulesInput.prototype, "businessPhone", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], RestaurantUpdateWithoutSchedulesInput.prototype, "reservationPhone", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], RestaurantUpdateWithoutSchedulesInput.prototype, "url", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], RestaurantUpdateWithoutSchedulesInput.prototype, "cuisine", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], RestaurantUpdateWithoutSchedulesInput.prototype, "address", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], RestaurantUpdateWithoutSchedulesInput.prototype, "city", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], RestaurantUpdateWithoutSchedulesInput.prototype, "postCode", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], RestaurantUpdateWithoutSchedulesInput.prototype, "country", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], RestaurantUpdateWithoutSchedulesInput.prototype, "currency", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], RestaurantUpdateWithoutSchedulesInput.prototype, "priceRange", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], RestaurantUpdateWithoutSchedulesInput.prototype, "diningStyle", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], RestaurantUpdateWithoutSchedulesInput.prototype, "vat", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], RestaurantUpdateWithoutSchedulesInput.prototype, "serviceCharge", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], RestaurantUpdateWithoutSchedulesInput.prototype, "hasParkingFacilities", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], RestaurantUpdateWithoutSchedulesInput.prototype, "hasPartyFacilities", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], RestaurantUpdateWithoutSchedulesInput.prototype, "hasKidsZone", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], RestaurantUpdateWithoutSchedulesInput.prototype, "isTakeaway", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], RestaurantUpdateWithoutSchedulesInput.prototype, "isDelivery", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], RestaurantUpdateWithoutSchedulesInput.prototype, "isReservation", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], RestaurantUpdateWithoutSchedulesInput.prototype, "isAutoAcceptOrder", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], RestaurantUpdateWithoutSchedulesInput.prototype, "isAutoAcceptReservation", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], RestaurantUpdateWithoutSchedulesInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], RestaurantUpdateWithoutSchedulesInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => RestaurantPlanUpdateOneWithoutRestaurantsInput_1.RestaurantPlanUpdateOneWithoutRestaurantsInput, {
        nullable: true
    }),
    __metadata("design:type", RestaurantPlanUpdateOneWithoutRestaurantsInput_1.RestaurantPlanUpdateOneWithoutRestaurantsInput)
], RestaurantUpdateWithoutSchedulesInput.prototype, "plan", void 0);
__decorate([
    TypeGraphQL.Field(_type => DeliveryZoneUpdateManyWithoutRestaurantInput_1.DeliveryZoneUpdateManyWithoutRestaurantInput, {
        nullable: true
    }),
    __metadata("design:type", DeliveryZoneUpdateManyWithoutRestaurantInput_1.DeliveryZoneUpdateManyWithoutRestaurantInput)
], RestaurantUpdateWithoutSchedulesInput.prototype, "deliveryZones", void 0);
__decorate([
    TypeGraphQL.Field(_type => CustomerUpdateManyWithoutRestaurantsInput_1.CustomerUpdateManyWithoutRestaurantsInput, {
        nullable: true
    }),
    __metadata("design:type", CustomerUpdateManyWithoutRestaurantsInput_1.CustomerUpdateManyWithoutRestaurantsInput)
], RestaurantUpdateWithoutSchedulesInput.prototype, "customers", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderUpdateManyWithoutRestaurantInput_1.OrderUpdateManyWithoutRestaurantInput, {
        nullable: true
    }),
    __metadata("design:type", OrderUpdateManyWithoutRestaurantInput_1.OrderUpdateManyWithoutRestaurantInput)
], RestaurantUpdateWithoutSchedulesInput.prototype, "orders", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderItemUpdateManyWithoutRestaurantInput_1.OrderItemUpdateManyWithoutRestaurantInput, {
        nullable: true
    }),
    __metadata("design:type", OrderItemUpdateManyWithoutRestaurantInput_1.OrderItemUpdateManyWithoutRestaurantInput)
], RestaurantUpdateWithoutSchedulesInput.prototype, "orderItems", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductCategoryUpdateManyWithoutRestaurantsInput_1.ProductCategoryUpdateManyWithoutRestaurantsInput, {
        nullable: true
    }),
    __metadata("design:type", ProductCategoryUpdateManyWithoutRestaurantsInput_1.ProductCategoryUpdateManyWithoutRestaurantsInput)
], RestaurantUpdateWithoutSchedulesInput.prototype, "productCategory", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductUpdateManyWithoutRestaurantInput_1.ProductUpdateManyWithoutRestaurantInput, {
        nullable: true
    }),
    __metadata("design:type", ProductUpdateManyWithoutRestaurantInput_1.ProductUpdateManyWithoutRestaurantInput)
], RestaurantUpdateWithoutSchedulesInput.prototype, "products", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserUpdateManyWithoutRestaurantsInput_1.UserUpdateManyWithoutRestaurantsInput, {
        nullable: true
    }),
    __metadata("design:type", UserUpdateManyWithoutRestaurantsInput_1.UserUpdateManyWithoutRestaurantsInput)
], RestaurantUpdateWithoutSchedulesInput.prototype, "users", void 0);
RestaurantUpdateWithoutSchedulesInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], RestaurantUpdateWithoutSchedulesInput);
exports.RestaurantUpdateWithoutSchedulesInput = RestaurantUpdateWithoutSchedulesInput;
