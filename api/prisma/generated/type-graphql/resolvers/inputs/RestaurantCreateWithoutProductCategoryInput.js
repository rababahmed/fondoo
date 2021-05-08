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
exports.RestaurantCreateWithoutProductCategoryInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const CustomerCreateNestedManyWithoutRestaurantInput_1 = require("../inputs/CustomerCreateNestedManyWithoutRestaurantInput");
const DeliveryZoneCreateNestedManyWithoutRestaurantInput_1 = require("../inputs/DeliveryZoneCreateNestedManyWithoutRestaurantInput");
const OrderCreateNestedManyWithoutRestaurantInput_1 = require("../inputs/OrderCreateNestedManyWithoutRestaurantInput");
const ProductCreateNestedManyWithoutRestaurantInput_1 = require("../inputs/ProductCreateNestedManyWithoutRestaurantInput");
const ScheduleCreateNestedManyWithoutRestaurantInput_1 = require("../inputs/ScheduleCreateNestedManyWithoutRestaurantInput");
const UserCreateNestedManyWithoutRestaurantsInput_1 = require("../inputs/UserCreateNestedManyWithoutRestaurantsInput");
let RestaurantCreateWithoutProductCategoryInput = class RestaurantCreateWithoutProductCategoryInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantCreateWithoutProductCategoryInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], RestaurantCreateWithoutProductCategoryInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], RestaurantCreateWithoutProductCategoryInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], RestaurantCreateWithoutProductCategoryInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantCreateWithoutProductCategoryInput.prototype, "businessPhone", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantCreateWithoutProductCategoryInput.prototype, "reservationPhone", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantCreateWithoutProductCategoryInput.prototype, "url", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantCreateWithoutProductCategoryInput.prototype, "address", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantCreateWithoutProductCategoryInput.prototype, "city", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantCreateWithoutProductCategoryInput.prototype, "postCode", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantCreateWithoutProductCategoryInput.prototype, "country", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantCreateWithoutProductCategoryInput.prototype, "currency", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantCreateWithoutProductCategoryInput.prototype, "priceRange", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantCreateWithoutProductCategoryInput.prototype, "diningStyle", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantCreateWithoutProductCategoryInput.prototype, "vat", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RestaurantCreateWithoutProductCategoryInput.prototype, "serviceCharge", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], RestaurantCreateWithoutProductCategoryInput.prototype, "hasParking", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], RestaurantCreateWithoutProductCategoryInput.prototype, "hasPartyFacilities", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], RestaurantCreateWithoutProductCategoryInput.prototype, "hasKidsZone", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], RestaurantCreateWithoutProductCategoryInput.prototype, "isTakeaway", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], RestaurantCreateWithoutProductCategoryInput.prototype, "isDelivery", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], RestaurantCreateWithoutProductCategoryInput.prototype, "isReservation", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], RestaurantCreateWithoutProductCategoryInput.prototype, "isOrdering", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], RestaurantCreateWithoutProductCategoryInput.prototype, "isAutoAcceptOrder", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], RestaurantCreateWithoutProductCategoryInput.prototype, "isAutoAcceptReservation", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], RestaurantCreateWithoutProductCategoryInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutRestaurantInput_1.ProductCreateNestedManyWithoutRestaurantInput, {
        nullable: true
    }),
    __metadata("design:type", ProductCreateNestedManyWithoutRestaurantInput_1.ProductCreateNestedManyWithoutRestaurantInput)
], RestaurantCreateWithoutProductCategoryInput.prototype, "products", void 0);
__decorate([
    TypeGraphQL.Field(_type => ScheduleCreateNestedManyWithoutRestaurantInput_1.ScheduleCreateNestedManyWithoutRestaurantInput, {
        nullable: true
    }),
    __metadata("design:type", ScheduleCreateNestedManyWithoutRestaurantInput_1.ScheduleCreateNestedManyWithoutRestaurantInput)
], RestaurantCreateWithoutProductCategoryInput.prototype, "schedule", void 0);
__decorate([
    TypeGraphQL.Field(_type => DeliveryZoneCreateNestedManyWithoutRestaurantInput_1.DeliveryZoneCreateNestedManyWithoutRestaurantInput, {
        nullable: true
    }),
    __metadata("design:type", DeliveryZoneCreateNestedManyWithoutRestaurantInput_1.DeliveryZoneCreateNestedManyWithoutRestaurantInput)
], RestaurantCreateWithoutProductCategoryInput.prototype, "deliveryZones", void 0);
__decorate([
    TypeGraphQL.Field(_type => CustomerCreateNestedManyWithoutRestaurantInput_1.CustomerCreateNestedManyWithoutRestaurantInput, {
        nullable: true
    }),
    __metadata("design:type", CustomerCreateNestedManyWithoutRestaurantInput_1.CustomerCreateNestedManyWithoutRestaurantInput)
], RestaurantCreateWithoutProductCategoryInput.prototype, "customers", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderCreateNestedManyWithoutRestaurantInput_1.OrderCreateNestedManyWithoutRestaurantInput, {
        nullable: true
    }),
    __metadata("design:type", OrderCreateNestedManyWithoutRestaurantInput_1.OrderCreateNestedManyWithoutRestaurantInput)
], RestaurantCreateWithoutProductCategoryInput.prototype, "orders", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedManyWithoutRestaurantsInput_1.UserCreateNestedManyWithoutRestaurantsInput, {
        nullable: true
    }),
    __metadata("design:type", UserCreateNestedManyWithoutRestaurantsInput_1.UserCreateNestedManyWithoutRestaurantsInput)
], RestaurantCreateWithoutProductCategoryInput.prototype, "users", void 0);
RestaurantCreateWithoutProductCategoryInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], RestaurantCreateWithoutProductCategoryInput);
exports.RestaurantCreateWithoutProductCategoryInput = RestaurantCreateWithoutProductCategoryInput;
