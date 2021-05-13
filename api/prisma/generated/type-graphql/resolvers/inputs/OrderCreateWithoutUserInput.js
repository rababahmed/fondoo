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
exports.OrderCreateWithoutUserInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const GraphQLScalars = __importStar(require("graphql-scalars"));
const client_1 = require("@prisma/client");
const CustomerAddressCreateNestedOneWithoutOrderInput_1 = require("../inputs/CustomerAddressCreateNestedOneWithoutOrderInput");
const CustomerCreateNestedOneWithoutOrdersInput_1 = require("../inputs/CustomerCreateNestedOneWithoutOrdersInput");
const RestaurantCreateNestedOneWithoutOrdersInput_1 = require("../inputs/RestaurantCreateNestedOneWithoutOrdersInput");
let OrderCreateWithoutUserInput = class OrderCreateWithoutUserInput {
};
__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
        nullable: false
    }),
    __metadata("design:type", Object)
], OrderCreateWithoutUserInput.prototype, "items", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], OrderCreateWithoutUserInput.prototype, "coupon", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    __metadata("design:type", Number)
], OrderCreateWithoutUserInput.prototype, "deliveryCharges", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    __metadata("design:type", Number)
], OrderCreateWithoutUserInput.prototype, "vat", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    __metadata("design:type", Number)
], OrderCreateWithoutUserInput.prototype, "serviceCharge", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    __metadata("design:type", Number)
], OrderCreateWithoutUserInput.prototype, "total", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    __metadata("design:type", Boolean)
], OrderCreateWithoutUserInput.prototype, "isAccepted", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], OrderCreateWithoutUserInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], OrderCreateWithoutUserInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => RestaurantCreateNestedOneWithoutOrdersInput_1.RestaurantCreateNestedOneWithoutOrdersInput, {
        nullable: false
    }),
    __metadata("design:type", RestaurantCreateNestedOneWithoutOrdersInput_1.RestaurantCreateNestedOneWithoutOrdersInput)
], OrderCreateWithoutUserInput.prototype, "restaurant", void 0);
__decorate([
    TypeGraphQL.Field(_type => CustomerCreateNestedOneWithoutOrdersInput_1.CustomerCreateNestedOneWithoutOrdersInput, {
        nullable: true
    }),
    __metadata("design:type", CustomerCreateNestedOneWithoutOrdersInput_1.CustomerCreateNestedOneWithoutOrdersInput)
], OrderCreateWithoutUserInput.prototype, "Customer", void 0);
__decorate([
    TypeGraphQL.Field(_type => CustomerAddressCreateNestedOneWithoutOrderInput_1.CustomerAddressCreateNestedOneWithoutOrderInput, {
        nullable: true
    }),
    __metadata("design:type", CustomerAddressCreateNestedOneWithoutOrderInput_1.CustomerAddressCreateNestedOneWithoutOrderInput)
], OrderCreateWithoutUserInput.prototype, "CustomerAddress", void 0);
OrderCreateWithoutUserInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], OrderCreateWithoutUserInput);
exports.OrderCreateWithoutUserInput = OrderCreateWithoutUserInput;