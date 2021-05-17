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
exports.RestaurantCreateWithoutOrdersInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const CustomerCreateNestedManyWithoutRestaurantsInput_1 = require("../inputs/CustomerCreateNestedManyWithoutRestaurantsInput");
const DeliveryZoneCreateNestedManyWithoutRestaurantInput_1 = require("../inputs/DeliveryZoneCreateNestedManyWithoutRestaurantInput");
const OrderItemCreateNestedManyWithoutRestaurantInput_1 = require("../inputs/OrderItemCreateNestedManyWithoutRestaurantInput");
const ProductCategoryCreateNestedManyWithoutRestaurantsInput_1 = require("../inputs/ProductCategoryCreateNestedManyWithoutRestaurantsInput");
const ProductCreateNestedManyWithoutRestaurantInput_1 = require("../inputs/ProductCreateNestedManyWithoutRestaurantInput");
const RestaurantPlanCreateNestedOneWithoutRestaurantsInput_1 = require("../inputs/RestaurantPlanCreateNestedOneWithoutRestaurantsInput");
const ScheduleCreateNestedManyWithoutRestaurantInput_1 = require("../inputs/ScheduleCreateNestedManyWithoutRestaurantInput");
const UserCreateNestedManyWithoutRestaurantsInput_1 = require("../inputs/UserCreateNestedManyWithoutRestaurantsInput");
let RestaurantCreateWithoutOrdersInput = class RestaurantCreateWithoutOrdersInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantCreateWithoutOrdersInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], RestaurantCreateWithoutOrdersInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], RestaurantCreateWithoutOrdersInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantCreateWithoutOrdersInput.prototype, "businessPhone", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantCreateWithoutOrdersInput.prototype, "reservationPhone", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantCreateWithoutOrdersInput.prototype, "url", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantCreateWithoutOrdersInput.prototype, "cuisine", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantCreateWithoutOrdersInput.prototype, "address", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantCreateWithoutOrdersInput.prototype, "city", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantCreateWithoutOrdersInput.prototype, "postCode", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantCreateWithoutOrdersInput.prototype, "country", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantCreateWithoutOrdersInput.prototype, "currency", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantCreateWithoutOrdersInput.prototype, "priceRange", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantCreateWithoutOrdersInput.prototype, "diningStyle", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantCreateWithoutOrdersInput.prototype, "vat", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantCreateWithoutOrdersInput.prototype, "serviceCharge", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], RestaurantCreateWithoutOrdersInput.prototype, "hasParkingFacilities", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], RestaurantCreateWithoutOrdersInput.prototype, "hasPartyFacilities", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], RestaurantCreateWithoutOrdersInput.prototype, "hasKidsZone", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], RestaurantCreateWithoutOrdersInput.prototype, "isTakeaway", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], RestaurantCreateWithoutOrdersInput.prototype, "isDelivery", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], RestaurantCreateWithoutOrdersInput.prototype, "isReservation", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], RestaurantCreateWithoutOrdersInput.prototype, "isAutoAcceptOrder", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], RestaurantCreateWithoutOrdersInput.prototype, "isAutoAcceptReservation", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], RestaurantCreateWithoutOrdersInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], RestaurantCreateWithoutOrdersInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => RestaurantPlanCreateNestedOneWithoutRestaurantsInput_1.RestaurantPlanCreateNestedOneWithoutRestaurantsInput, {
        nullable: true
    }),
    __metadata("design:type", RestaurantPlanCreateNestedOneWithoutRestaurantsInput_1.RestaurantPlanCreateNestedOneWithoutRestaurantsInput)
], RestaurantCreateWithoutOrdersInput.prototype, "plan", void 0);
__decorate([
    TypeGraphQL.Field(_type => ScheduleCreateNestedManyWithoutRestaurantInput_1.ScheduleCreateNestedManyWithoutRestaurantInput, {
        nullable: true
    }),
    __metadata("design:type", ScheduleCreateNestedManyWithoutRestaurantInput_1.ScheduleCreateNestedManyWithoutRestaurantInput)
], RestaurantCreateWithoutOrdersInput.prototype, "schedules", void 0);
__decorate([
    TypeGraphQL.Field(_type => DeliveryZoneCreateNestedManyWithoutRestaurantInput_1.DeliveryZoneCreateNestedManyWithoutRestaurantInput, {
        nullable: true
    }),
    __metadata("design:type", DeliveryZoneCreateNestedManyWithoutRestaurantInput_1.DeliveryZoneCreateNestedManyWithoutRestaurantInput)
], RestaurantCreateWithoutOrdersInput.prototype, "deliveryZones", void 0);
__decorate([
    TypeGraphQL.Field(_type => CustomerCreateNestedManyWithoutRestaurantsInput_1.CustomerCreateNestedManyWithoutRestaurantsInput, {
        nullable: true
    }),
    __metadata("design:type", CustomerCreateNestedManyWithoutRestaurantsInput_1.CustomerCreateNestedManyWithoutRestaurantsInput)
], RestaurantCreateWithoutOrdersInput.prototype, "customers", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderItemCreateNestedManyWithoutRestaurantInput_1.OrderItemCreateNestedManyWithoutRestaurantInput, {
        nullable: true
    }),
    __metadata("design:type", OrderItemCreateNestedManyWithoutRestaurantInput_1.OrderItemCreateNestedManyWithoutRestaurantInput)
], RestaurantCreateWithoutOrdersInput.prototype, "orderItems", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductCategoryCreateNestedManyWithoutRestaurantsInput_1.ProductCategoryCreateNestedManyWithoutRestaurantsInput, {
        nullable: true
    }),
    __metadata("design:type", ProductCategoryCreateNestedManyWithoutRestaurantsInput_1.ProductCategoryCreateNestedManyWithoutRestaurantsInput)
], RestaurantCreateWithoutOrdersInput.prototype, "productCategory", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutRestaurantInput_1.ProductCreateNestedManyWithoutRestaurantInput, {
        nullable: true
    }),
    __metadata("design:type", ProductCreateNestedManyWithoutRestaurantInput_1.ProductCreateNestedManyWithoutRestaurantInput)
], RestaurantCreateWithoutOrdersInput.prototype, "products", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedManyWithoutRestaurantsInput_1.UserCreateNestedManyWithoutRestaurantsInput, {
        nullable: true
    }),
    __metadata("design:type", UserCreateNestedManyWithoutRestaurantsInput_1.UserCreateNestedManyWithoutRestaurantsInput)
], RestaurantCreateWithoutOrdersInput.prototype, "users", void 0);
RestaurantCreateWithoutOrdersInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], RestaurantCreateWithoutOrdersInput);
exports.RestaurantCreateWithoutOrdersInput = RestaurantCreateWithoutOrdersInput;
