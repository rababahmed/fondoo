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
exports.RestaurantUncheckedCreateWithoutProductCategoryInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const CustomerUncheckedCreateNestedManyWithoutRestaurantInput_1 = require("../inputs/CustomerUncheckedCreateNestedManyWithoutRestaurantInput");
const DeliveryZoneUncheckedCreateNestedManyWithoutRestaurantInput_1 = require("../inputs/DeliveryZoneUncheckedCreateNestedManyWithoutRestaurantInput");
const OrderUncheckedCreateNestedManyWithoutRestaurantInput_1 = require("../inputs/OrderUncheckedCreateNestedManyWithoutRestaurantInput");
const ProductUncheckedCreateNestedManyWithoutRestaurantInput_1 = require("../inputs/ProductUncheckedCreateNestedManyWithoutRestaurantInput");
const ScheduleUncheckedCreateNestedManyWithoutRestaurantInput_1 = require("../inputs/ScheduleUncheckedCreateNestedManyWithoutRestaurantInput");
const UserUncheckedCreateNestedManyWithoutRestaurantInput_1 = require("../inputs/UserUncheckedCreateNestedManyWithoutRestaurantInput");
let RestaurantUncheckedCreateWithoutProductCategoryInput = class RestaurantUncheckedCreateWithoutProductCategoryInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantUncheckedCreateWithoutProductCategoryInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], RestaurantUncheckedCreateWithoutProductCategoryInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], RestaurantUncheckedCreateWithoutProductCategoryInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], RestaurantUncheckedCreateWithoutProductCategoryInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantUncheckedCreateWithoutProductCategoryInput.prototype, "businessPhone", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantUncheckedCreateWithoutProductCategoryInput.prototype, "reservationPhone", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantUncheckedCreateWithoutProductCategoryInput.prototype, "url", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantUncheckedCreateWithoutProductCategoryInput.prototype, "address", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantUncheckedCreateWithoutProductCategoryInput.prototype, "city", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantUncheckedCreateWithoutProductCategoryInput.prototype, "postCode", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantUncheckedCreateWithoutProductCategoryInput.prototype, "country", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantUncheckedCreateWithoutProductCategoryInput.prototype, "currency", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantUncheckedCreateWithoutProductCategoryInput.prototype, "priceRange", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantUncheckedCreateWithoutProductCategoryInput.prototype, "diningStyle", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantUncheckedCreateWithoutProductCategoryInput.prototype, "vat", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantUncheckedCreateWithoutProductCategoryInput.prototype, "serviceCharge", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], RestaurantUncheckedCreateWithoutProductCategoryInput.prototype, "hasParking", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], RestaurantUncheckedCreateWithoutProductCategoryInput.prototype, "hasPartyFacilities", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], RestaurantUncheckedCreateWithoutProductCategoryInput.prototype, "hasKidsZone", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], RestaurantUncheckedCreateWithoutProductCategoryInput.prototype, "isTakeaway", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], RestaurantUncheckedCreateWithoutProductCategoryInput.prototype, "isDelivery", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], RestaurantUncheckedCreateWithoutProductCategoryInput.prototype, "isReservation", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], RestaurantUncheckedCreateWithoutProductCategoryInput.prototype, "isOrdering", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], RestaurantUncheckedCreateWithoutProductCategoryInput.prototype, "isAutoAcceptOrder", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], RestaurantUncheckedCreateWithoutProductCategoryInput.prototype, "isAutoAcceptReservation", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], RestaurantUncheckedCreateWithoutProductCategoryInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => ScheduleUncheckedCreateNestedManyWithoutRestaurantInput_1.ScheduleUncheckedCreateNestedManyWithoutRestaurantInput, {
        nullable: true
    }),
    __metadata("design:type", ScheduleUncheckedCreateNestedManyWithoutRestaurantInput_1.ScheduleUncheckedCreateNestedManyWithoutRestaurantInput)
], RestaurantUncheckedCreateWithoutProductCategoryInput.prototype, "schedule", void 0);
__decorate([
    TypeGraphQL.Field(_type => DeliveryZoneUncheckedCreateNestedManyWithoutRestaurantInput_1.DeliveryZoneUncheckedCreateNestedManyWithoutRestaurantInput, {
        nullable: true
    }),
    __metadata("design:type", DeliveryZoneUncheckedCreateNestedManyWithoutRestaurantInput_1.DeliveryZoneUncheckedCreateNestedManyWithoutRestaurantInput)
], RestaurantUncheckedCreateWithoutProductCategoryInput.prototype, "deliveryZones", void 0);
__decorate([
    TypeGraphQL.Field(_type => CustomerUncheckedCreateNestedManyWithoutRestaurantInput_1.CustomerUncheckedCreateNestedManyWithoutRestaurantInput, {
        nullable: true
    }),
    __metadata("design:type", CustomerUncheckedCreateNestedManyWithoutRestaurantInput_1.CustomerUncheckedCreateNestedManyWithoutRestaurantInput)
], RestaurantUncheckedCreateWithoutProductCategoryInput.prototype, "customers", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderUncheckedCreateNestedManyWithoutRestaurantInput_1.OrderUncheckedCreateNestedManyWithoutRestaurantInput, {
        nullable: true
    }),
    __metadata("design:type", OrderUncheckedCreateNestedManyWithoutRestaurantInput_1.OrderUncheckedCreateNestedManyWithoutRestaurantInput)
], RestaurantUncheckedCreateWithoutProductCategoryInput.prototype, "orders", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductUncheckedCreateNestedManyWithoutRestaurantInput_1.ProductUncheckedCreateNestedManyWithoutRestaurantInput, {
        nullable: true
    }),
    __metadata("design:type", ProductUncheckedCreateNestedManyWithoutRestaurantInput_1.ProductUncheckedCreateNestedManyWithoutRestaurantInput)
], RestaurantUncheckedCreateWithoutProductCategoryInput.prototype, "products", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserUncheckedCreateNestedManyWithoutRestaurantInput_1.UserUncheckedCreateNestedManyWithoutRestaurantInput, {
        nullable: true
    }),
    __metadata("design:type", UserUncheckedCreateNestedManyWithoutRestaurantInput_1.UserUncheckedCreateNestedManyWithoutRestaurantInput)
], RestaurantUncheckedCreateWithoutProductCategoryInput.prototype, "users", void 0);
RestaurantUncheckedCreateWithoutProductCategoryInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], RestaurantUncheckedCreateWithoutProductCategoryInput);
exports.RestaurantUncheckedCreateWithoutProductCategoryInput = RestaurantUncheckedCreateWithoutProductCategoryInput;
