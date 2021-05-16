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
exports.OrderUncheckedUpdateManyWithoutCustomerInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const OrderCreateManyCustomerInputEnvelope_1 = require("../inputs/OrderCreateManyCustomerInputEnvelope");
const OrderCreateOrConnectWithoutCustomerInput_1 = require("../inputs/OrderCreateOrConnectWithoutCustomerInput");
const OrderCreateWithoutCustomerInput_1 = require("../inputs/OrderCreateWithoutCustomerInput");
const OrderScalarWhereInput_1 = require("../inputs/OrderScalarWhereInput");
const OrderUpdateManyWithWhereWithoutCustomerInput_1 = require("../inputs/OrderUpdateManyWithWhereWithoutCustomerInput");
const OrderUpdateWithWhereUniqueWithoutCustomerInput_1 = require("../inputs/OrderUpdateWithWhereUniqueWithoutCustomerInput");
const OrderUpsertWithWhereUniqueWithoutCustomerInput_1 = require("../inputs/OrderUpsertWithWhereUniqueWithoutCustomerInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUncheckedUpdateManyWithoutCustomerInput = class OrderUncheckedUpdateManyWithoutCustomerInput {
};
__decorate([
    TypeGraphQL.Field(_type => [OrderCreateWithoutCustomerInput_1.OrderCreateWithoutCustomerInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderUncheckedUpdateManyWithoutCustomerInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutCustomerInput_1.OrderCreateOrConnectWithoutCustomerInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderUncheckedUpdateManyWithoutCustomerInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderUpsertWithWhereUniqueWithoutCustomerInput_1.OrderUpsertWithWhereUniqueWithoutCustomerInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderUncheckedUpdateManyWithoutCustomerInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderCreateManyCustomerInputEnvelope_1.OrderCreateManyCustomerInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", OrderCreateManyCustomerInputEnvelope_1.OrderCreateManyCustomerInputEnvelope)
], OrderUncheckedUpdateManyWithoutCustomerInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderUncheckedUpdateManyWithoutCustomerInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderUncheckedUpdateManyWithoutCustomerInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderUncheckedUpdateManyWithoutCustomerInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderUncheckedUpdateManyWithoutCustomerInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderUpdateWithWhereUniqueWithoutCustomerInput_1.OrderUpdateWithWhereUniqueWithoutCustomerInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderUncheckedUpdateManyWithoutCustomerInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderUpdateManyWithWhereWithoutCustomerInput_1.OrderUpdateManyWithWhereWithoutCustomerInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderUncheckedUpdateManyWithoutCustomerInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderScalarWhereInput_1.OrderScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderUncheckedUpdateManyWithoutCustomerInput.prototype, "deleteMany", void 0);
OrderUncheckedUpdateManyWithoutCustomerInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], OrderUncheckedUpdateManyWithoutCustomerInput);
exports.OrderUncheckedUpdateManyWithoutCustomerInput = OrderUncheckedUpdateManyWithoutCustomerInput;
