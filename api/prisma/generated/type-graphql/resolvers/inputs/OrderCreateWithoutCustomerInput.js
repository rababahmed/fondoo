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
exports.OrderCreateWithoutCustomerInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const CustomerAddressCreateNestedOneWithoutOrderInput_1 = require("../inputs/CustomerAddressCreateNestedOneWithoutOrderInput");
const OrderElementCreateNestedManyWithoutOrderInput_1 = require("../inputs/OrderElementCreateNestedManyWithoutOrderInput");
const ProductCreateNestedManyWithoutOrderInput_1 = require("../inputs/ProductCreateNestedManyWithoutOrderInput");
const RestaurantCreateNestedOneWithoutOrdersInput_1 = require("../inputs/RestaurantCreateNestedOneWithoutOrdersInput");
let OrderCreateWithoutCustomerInput = class OrderCreateWithoutCustomerInput {
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], OrderCreateWithoutCustomerInput.prototype, "charges", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], OrderCreateWithoutCustomerInput.prototype, "total", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], OrderCreateWithoutCustomerInput.prototype, "isAccepted", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], OrderCreateWithoutCustomerInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], OrderCreateWithoutCustomerInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderElementCreateNestedManyWithoutOrderInput_1.OrderElementCreateNestedManyWithoutOrderInput, {
        nullable: true
    }),
    __metadata("design:type", OrderElementCreateNestedManyWithoutOrderInput_1.OrderElementCreateNestedManyWithoutOrderInput)
], OrderCreateWithoutCustomerInput.prototype, "elements", void 0);
__decorate([
    TypeGraphQL.Field(_type => CustomerAddressCreateNestedOneWithoutOrderInput_1.CustomerAddressCreateNestedOneWithoutOrderInput, {
        nullable: false
    }),
    __metadata("design:type", CustomerAddressCreateNestedOneWithoutOrderInput_1.CustomerAddressCreateNestedOneWithoutOrderInput)
], OrderCreateWithoutCustomerInput.prototype, "customerAddress", void 0);
__decorate([
    TypeGraphQL.Field(_type => RestaurantCreateNestedOneWithoutOrdersInput_1.RestaurantCreateNestedOneWithoutOrdersInput, {
        nullable: true
    }),
    __metadata("design:type", RestaurantCreateNestedOneWithoutOrdersInput_1.RestaurantCreateNestedOneWithoutOrdersInput)
], OrderCreateWithoutCustomerInput.prototype, "restaurant", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutOrderInput_1.ProductCreateNestedManyWithoutOrderInput, {
        nullable: true
    }),
    __metadata("design:type", ProductCreateNestedManyWithoutOrderInput_1.ProductCreateNestedManyWithoutOrderInput)
], OrderCreateWithoutCustomerInput.prototype, "product", void 0);
OrderCreateWithoutCustomerInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], OrderCreateWithoutCustomerInput);
exports.OrderCreateWithoutCustomerInput = OrderCreateWithoutCustomerInput;
