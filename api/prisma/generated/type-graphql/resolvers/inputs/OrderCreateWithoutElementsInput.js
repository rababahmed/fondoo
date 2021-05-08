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
exports.OrderCreateWithoutElementsInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const CustomerAddressCreateNestedOneWithoutOrderInput_1 = require("../inputs/CustomerAddressCreateNestedOneWithoutOrderInput");
const CustomerCreateNestedOneWithoutOrdersInput_1 = require("../inputs/CustomerCreateNestedOneWithoutOrdersInput");
const ProductCreateNestedManyWithoutOrderInput_1 = require("../inputs/ProductCreateNestedManyWithoutOrderInput");
const RestaurantCreateNestedOneWithoutOrdersInput_1 = require("../inputs/RestaurantCreateNestedOneWithoutOrdersInput");
let OrderCreateWithoutElementsInput = class OrderCreateWithoutElementsInput {
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], OrderCreateWithoutElementsInput.prototype, "charges", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], OrderCreateWithoutElementsInput.prototype, "total", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], OrderCreateWithoutElementsInput.prototype, "isAccepted", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], OrderCreateWithoutElementsInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], OrderCreateWithoutElementsInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => CustomerAddressCreateNestedOneWithoutOrderInput_1.CustomerAddressCreateNestedOneWithoutOrderInput, {
        nullable: false
    }),
    __metadata("design:type", CustomerAddressCreateNestedOneWithoutOrderInput_1.CustomerAddressCreateNestedOneWithoutOrderInput)
], OrderCreateWithoutElementsInput.prototype, "customerAddress", void 0);
__decorate([
    TypeGraphQL.Field(_type => RestaurantCreateNestedOneWithoutOrdersInput_1.RestaurantCreateNestedOneWithoutOrdersInput, {
        nullable: true
    }),
    __metadata("design:type", RestaurantCreateNestedOneWithoutOrdersInput_1.RestaurantCreateNestedOneWithoutOrdersInput)
], OrderCreateWithoutElementsInput.prototype, "restaurant", void 0);
__decorate([
    TypeGraphQL.Field(_type => CustomerCreateNestedOneWithoutOrdersInput_1.CustomerCreateNestedOneWithoutOrdersInput, {
        nullable: true
    }),
    __metadata("design:type", CustomerCreateNestedOneWithoutOrdersInput_1.CustomerCreateNestedOneWithoutOrdersInput)
], OrderCreateWithoutElementsInput.prototype, "customer", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutOrderInput_1.ProductCreateNestedManyWithoutOrderInput, {
        nullable: true
    }),
    __metadata("design:type", ProductCreateNestedManyWithoutOrderInput_1.ProductCreateNestedManyWithoutOrderInput)
], OrderCreateWithoutElementsInput.prototype, "product", void 0);
OrderCreateWithoutElementsInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], OrderCreateWithoutElementsInput);
exports.OrderCreateWithoutElementsInput = OrderCreateWithoutElementsInput;
