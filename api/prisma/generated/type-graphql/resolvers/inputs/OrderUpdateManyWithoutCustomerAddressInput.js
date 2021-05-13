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
exports.OrderUpdateManyWithoutCustomerAddressInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const OrderCreateManyCustomerAddressInputEnvelope_1 = require("../inputs/OrderCreateManyCustomerAddressInputEnvelope");
const OrderCreateOrConnectWithoutCustomerAddressInput_1 = require("../inputs/OrderCreateOrConnectWithoutCustomerAddressInput");
const OrderCreateWithoutCustomerAddressInput_1 = require("../inputs/OrderCreateWithoutCustomerAddressInput");
const OrderScalarWhereInput_1 = require("../inputs/OrderScalarWhereInput");
const OrderUpdateManyWithWhereWithoutCustomerAddressInput_1 = require("../inputs/OrderUpdateManyWithWhereWithoutCustomerAddressInput");
const OrderUpdateWithWhereUniqueWithoutCustomerAddressInput_1 = require("../inputs/OrderUpdateWithWhereUniqueWithoutCustomerAddressInput");
const OrderUpsertWithWhereUniqueWithoutCustomerAddressInput_1 = require("../inputs/OrderUpsertWithWhereUniqueWithoutCustomerAddressInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUpdateManyWithoutCustomerAddressInput = class OrderUpdateManyWithoutCustomerAddressInput {
};
__decorate([
    TypeGraphQL.Field(_type => [OrderCreateWithoutCustomerAddressInput_1.OrderCreateWithoutCustomerAddressInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderUpdateManyWithoutCustomerAddressInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutCustomerAddressInput_1.OrderCreateOrConnectWithoutCustomerAddressInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderUpdateManyWithoutCustomerAddressInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderUpsertWithWhereUniqueWithoutCustomerAddressInput_1.OrderUpsertWithWhereUniqueWithoutCustomerAddressInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderUpdateManyWithoutCustomerAddressInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderCreateManyCustomerAddressInputEnvelope_1.OrderCreateManyCustomerAddressInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", OrderCreateManyCustomerAddressInputEnvelope_1.OrderCreateManyCustomerAddressInputEnvelope)
], OrderUpdateManyWithoutCustomerAddressInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderUpdateManyWithoutCustomerAddressInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderUpdateManyWithoutCustomerAddressInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderUpdateManyWithoutCustomerAddressInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderUpdateManyWithoutCustomerAddressInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderUpdateWithWhereUniqueWithoutCustomerAddressInput_1.OrderUpdateWithWhereUniqueWithoutCustomerAddressInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderUpdateManyWithoutCustomerAddressInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderUpdateManyWithWhereWithoutCustomerAddressInput_1.OrderUpdateManyWithWhereWithoutCustomerAddressInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderUpdateManyWithoutCustomerAddressInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderScalarWhereInput_1.OrderScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderUpdateManyWithoutCustomerAddressInput.prototype, "deleteMany", void 0);
OrderUpdateManyWithoutCustomerAddressInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], OrderUpdateManyWithoutCustomerAddressInput);
exports.OrderUpdateManyWithoutCustomerAddressInput = OrderUpdateManyWithoutCustomerAddressInput;