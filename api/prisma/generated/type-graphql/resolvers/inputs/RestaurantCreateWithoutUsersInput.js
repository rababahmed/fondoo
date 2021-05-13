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
exports.RestaurantCreateWithoutUsersInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const CustomerCreateNestedManyWithoutRestaurantInput_1 = require("../inputs/CustomerCreateNestedManyWithoutRestaurantInput");
const DeliveryZoneCreateNestedManyWithoutRestaurantInput_1 = require("../inputs/DeliveryZoneCreateNestedManyWithoutRestaurantInput");
const OrderCreateNestedManyWithoutRestaurantInput_1 = require("../inputs/OrderCreateNestedManyWithoutRestaurantInput");
const ProductCategoryCreateNestedManyWithoutRestaurantsInput_1 = require("../inputs/ProductCategoryCreateNestedManyWithoutRestaurantsInput");
const ProductCreateNestedManyWithoutRestaurantInput_1 = require("../inputs/ProductCreateNestedManyWithoutRestaurantInput");
const ScheduleCreateNestedManyWithoutRestaurantInput_1 = require("../inputs/ScheduleCreateNestedManyWithoutRestaurantInput");
let RestaurantCreateWithoutUsersInput = class RestaurantCreateWithoutUsersInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantCreateWithoutUsersInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], RestaurantCreateWithoutUsersInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], RestaurantCreateWithoutUsersInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], RestaurantCreateWithoutUsersInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantCreateWithoutUsersInput.prototype, "businessPhone", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantCreateWithoutUsersInput.prototype, "reservationPhone", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantCreateWithoutUsersInput.prototype, "url", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantCreateWithoutUsersInput.prototype, "address", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantCreateWithoutUsersInput.prototype, "city", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantCreateWithoutUsersInput.prototype, "postCode", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantCreateWithoutUsersInput.prototype, "country", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantCreateWithoutUsersInput.prototype, "currency", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantCreateWithoutUsersInput.prototype, "priceRange", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantCreateWithoutUsersInput.prototype, "diningStyle", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantCreateWithoutUsersInput.prototype, "vat", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantCreateWithoutUsersInput.prototype, "serviceCharge", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], RestaurantCreateWithoutUsersInput.prototype, "hasParking", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], RestaurantCreateWithoutUsersInput.prototype, "hasPartyFacilities", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], RestaurantCreateWithoutUsersInput.prototype, "hasKidsZone", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], RestaurantCreateWithoutUsersInput.prototype, "isTakeaway", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], RestaurantCreateWithoutUsersInput.prototype, "isDelivery", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], RestaurantCreateWithoutUsersInput.prototype, "isReservation", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], RestaurantCreateWithoutUsersInput.prototype, "isOrdering", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], RestaurantCreateWithoutUsersInput.prototype, "isAutoAcceptOrder", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], RestaurantCreateWithoutUsersInput.prototype, "isAutoAcceptReservation", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], RestaurantCreateWithoutUsersInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => ScheduleCreateNestedManyWithoutRestaurantInput_1.ScheduleCreateNestedManyWithoutRestaurantInput, {
        nullable: true
    }),
    __metadata("design:type", ScheduleCreateNestedManyWithoutRestaurantInput_1.ScheduleCreateNestedManyWithoutRestaurantInput)
], RestaurantCreateWithoutUsersInput.prototype, "schedule", void 0);
__decorate([
    TypeGraphQL.Field(_type => DeliveryZoneCreateNestedManyWithoutRestaurantInput_1.DeliveryZoneCreateNestedManyWithoutRestaurantInput, {
        nullable: true
    }),
    __metadata("design:type", DeliveryZoneCreateNestedManyWithoutRestaurantInput_1.DeliveryZoneCreateNestedManyWithoutRestaurantInput)
], RestaurantCreateWithoutUsersInput.prototype, "deliveryZones", void 0);
__decorate([
    TypeGraphQL.Field(_type => CustomerCreateNestedManyWithoutRestaurantInput_1.CustomerCreateNestedManyWithoutRestaurantInput, {
        nullable: true
    }),
    __metadata("design:type", CustomerCreateNestedManyWithoutRestaurantInput_1.CustomerCreateNestedManyWithoutRestaurantInput)
], RestaurantCreateWithoutUsersInput.prototype, "customers", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderCreateNestedManyWithoutRestaurantInput_1.OrderCreateNestedManyWithoutRestaurantInput, {
        nullable: true
    }),
    __metadata("design:type", OrderCreateNestedManyWithoutRestaurantInput_1.OrderCreateNestedManyWithoutRestaurantInput)
], RestaurantCreateWithoutUsersInput.prototype, "orders", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductCategoryCreateNestedManyWithoutRestaurantsInput_1.ProductCategoryCreateNestedManyWithoutRestaurantsInput, {
        nullable: true
    }),
    __metadata("design:type", ProductCategoryCreateNestedManyWithoutRestaurantsInput_1.ProductCategoryCreateNestedManyWithoutRestaurantsInput)
], RestaurantCreateWithoutUsersInput.prototype, "productCategory", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutRestaurantInput_1.ProductCreateNestedManyWithoutRestaurantInput, {
        nullable: true
    }),
    __metadata("design:type", ProductCreateNestedManyWithoutRestaurantInput_1.ProductCreateNestedManyWithoutRestaurantInput)
], RestaurantCreateWithoutUsersInput.prototype, "products", void 0);
RestaurantCreateWithoutUsersInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], RestaurantCreateWithoutUsersInput);
exports.RestaurantCreateWithoutUsersInput = RestaurantCreateWithoutUsersInput;
