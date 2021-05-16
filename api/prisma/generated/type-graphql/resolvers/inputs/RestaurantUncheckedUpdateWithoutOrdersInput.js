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
exports.RestaurantUncheckedUpdateWithoutOrdersInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const CustomerUncheckedUpdateManyWithoutRestaurantInput_1 = require("../inputs/CustomerUncheckedUpdateManyWithoutRestaurantInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const DeliveryZoneUncheckedUpdateManyWithoutRestaurantInput_1 = require("../inputs/DeliveryZoneUncheckedUpdateManyWithoutRestaurantInput");
const NullableBoolFieldUpdateOperationsInput_1 = require("../inputs/NullableBoolFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const ProductCategoryUncheckedUpdateManyWithoutRestaurantsInput_1 = require("../inputs/ProductCategoryUncheckedUpdateManyWithoutRestaurantsInput");
const ProductUncheckedUpdateManyWithoutRestaurantInput_1 = require("../inputs/ProductUncheckedUpdateManyWithoutRestaurantInput");
const ScheduleUncheckedUpdateManyWithoutRestaurantInput_1 = require("../inputs/ScheduleUncheckedUpdateManyWithoutRestaurantInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUncheckedUpdateManyWithoutRestaurantInput_1 = require("../inputs/UserUncheckedUpdateManyWithoutRestaurantInput");
let RestaurantUncheckedUpdateWithoutOrdersInput = class RestaurantUncheckedUpdateWithoutOrdersInput {
};
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], RestaurantUncheckedUpdateWithoutOrdersInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], RestaurantUncheckedUpdateWithoutOrdersInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], RestaurantUncheckedUpdateWithoutOrdersInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], RestaurantUncheckedUpdateWithoutOrdersInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], RestaurantUncheckedUpdateWithoutOrdersInput.prototype, "businessPhone", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], RestaurantUncheckedUpdateWithoutOrdersInput.prototype, "reservationPhone", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], RestaurantUncheckedUpdateWithoutOrdersInput.prototype, "url", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], RestaurantUncheckedUpdateWithoutOrdersInput.prototype, "address", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], RestaurantUncheckedUpdateWithoutOrdersInput.prototype, "city", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], RestaurantUncheckedUpdateWithoutOrdersInput.prototype, "postCode", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], RestaurantUncheckedUpdateWithoutOrdersInput.prototype, "country", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], RestaurantUncheckedUpdateWithoutOrdersInput.prototype, "currency", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], RestaurantUncheckedUpdateWithoutOrdersInput.prototype, "priceRange", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], RestaurantUncheckedUpdateWithoutOrdersInput.prototype, "diningStyle", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], RestaurantUncheckedUpdateWithoutOrdersInput.prototype, "vat", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], RestaurantUncheckedUpdateWithoutOrdersInput.prototype, "serviceCharge", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], RestaurantUncheckedUpdateWithoutOrdersInput.prototype, "hasParking", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], RestaurantUncheckedUpdateWithoutOrdersInput.prototype, "hasPartyFacilities", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], RestaurantUncheckedUpdateWithoutOrdersInput.prototype, "hasKidsZone", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], RestaurantUncheckedUpdateWithoutOrdersInput.prototype, "isTakeaway", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], RestaurantUncheckedUpdateWithoutOrdersInput.prototype, "isDelivery", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], RestaurantUncheckedUpdateWithoutOrdersInput.prototype, "isReservation", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], RestaurantUncheckedUpdateWithoutOrdersInput.prototype, "isOrdering", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], RestaurantUncheckedUpdateWithoutOrdersInput.prototype, "isAutoAcceptOrder", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], RestaurantUncheckedUpdateWithoutOrdersInput.prototype, "isAutoAcceptReservation", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], RestaurantUncheckedUpdateWithoutOrdersInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => ScheduleUncheckedUpdateManyWithoutRestaurantInput_1.ScheduleUncheckedUpdateManyWithoutRestaurantInput, {
        nullable: true
    }),
    __metadata("design:type", ScheduleUncheckedUpdateManyWithoutRestaurantInput_1.ScheduleUncheckedUpdateManyWithoutRestaurantInput)
], RestaurantUncheckedUpdateWithoutOrdersInput.prototype, "schedule", void 0);
__decorate([
    TypeGraphQL.Field(_type => DeliveryZoneUncheckedUpdateManyWithoutRestaurantInput_1.DeliveryZoneUncheckedUpdateManyWithoutRestaurantInput, {
        nullable: true
    }),
    __metadata("design:type", DeliveryZoneUncheckedUpdateManyWithoutRestaurantInput_1.DeliveryZoneUncheckedUpdateManyWithoutRestaurantInput)
], RestaurantUncheckedUpdateWithoutOrdersInput.prototype, "deliveryZones", void 0);
__decorate([
    TypeGraphQL.Field(_type => CustomerUncheckedUpdateManyWithoutRestaurantInput_1.CustomerUncheckedUpdateManyWithoutRestaurantInput, {
        nullable: true
    }),
    __metadata("design:type", CustomerUncheckedUpdateManyWithoutRestaurantInput_1.CustomerUncheckedUpdateManyWithoutRestaurantInput)
], RestaurantUncheckedUpdateWithoutOrdersInput.prototype, "customers", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductCategoryUncheckedUpdateManyWithoutRestaurantsInput_1.ProductCategoryUncheckedUpdateManyWithoutRestaurantsInput, {
        nullable: true
    }),
    __metadata("design:type", ProductCategoryUncheckedUpdateManyWithoutRestaurantsInput_1.ProductCategoryUncheckedUpdateManyWithoutRestaurantsInput)
], RestaurantUncheckedUpdateWithoutOrdersInput.prototype, "productCategory", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductUncheckedUpdateManyWithoutRestaurantInput_1.ProductUncheckedUpdateManyWithoutRestaurantInput, {
        nullable: true
    }),
    __metadata("design:type", ProductUncheckedUpdateManyWithoutRestaurantInput_1.ProductUncheckedUpdateManyWithoutRestaurantInput)
], RestaurantUncheckedUpdateWithoutOrdersInput.prototype, "products", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserUncheckedUpdateManyWithoutRestaurantInput_1.UserUncheckedUpdateManyWithoutRestaurantInput, {
        nullable: true
    }),
    __metadata("design:type", UserUncheckedUpdateManyWithoutRestaurantInput_1.UserUncheckedUpdateManyWithoutRestaurantInput)
], RestaurantUncheckedUpdateWithoutOrdersInput.prototype, "users", void 0);
RestaurantUncheckedUpdateWithoutOrdersInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], RestaurantUncheckedUpdateWithoutOrdersInput);
exports.RestaurantUncheckedUpdateWithoutOrdersInput = RestaurantUncheckedUpdateWithoutOrdersInput;
