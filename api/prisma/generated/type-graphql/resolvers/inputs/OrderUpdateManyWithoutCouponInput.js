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
exports.OrderUpdateManyWithoutCouponInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const OrderCreateManyCouponInputEnvelope_1 = require("../inputs/OrderCreateManyCouponInputEnvelope");
const OrderCreateOrConnectWithoutCouponInput_1 = require("../inputs/OrderCreateOrConnectWithoutCouponInput");
const OrderCreateWithoutCouponInput_1 = require("../inputs/OrderCreateWithoutCouponInput");
const OrderScalarWhereInput_1 = require("../inputs/OrderScalarWhereInput");
const OrderUpdateManyWithWhereWithoutCouponInput_1 = require("../inputs/OrderUpdateManyWithWhereWithoutCouponInput");
const OrderUpdateWithWhereUniqueWithoutCouponInput_1 = require("../inputs/OrderUpdateWithWhereUniqueWithoutCouponInput");
const OrderUpsertWithWhereUniqueWithoutCouponInput_1 = require("../inputs/OrderUpsertWithWhereUniqueWithoutCouponInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUpdateManyWithoutCouponInput = class OrderUpdateManyWithoutCouponInput {
};
__decorate([
    TypeGraphQL.Field(_type => [OrderCreateWithoutCouponInput_1.OrderCreateWithoutCouponInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderUpdateManyWithoutCouponInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutCouponInput_1.OrderCreateOrConnectWithoutCouponInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderUpdateManyWithoutCouponInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderUpsertWithWhereUniqueWithoutCouponInput_1.OrderUpsertWithWhereUniqueWithoutCouponInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderUpdateManyWithoutCouponInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderCreateManyCouponInputEnvelope_1.OrderCreateManyCouponInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", OrderCreateManyCouponInputEnvelope_1.OrderCreateManyCouponInputEnvelope)
], OrderUpdateManyWithoutCouponInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderUpdateManyWithoutCouponInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderUpdateManyWithoutCouponInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderUpdateManyWithoutCouponInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderUpdateManyWithoutCouponInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderUpdateWithWhereUniqueWithoutCouponInput_1.OrderUpdateWithWhereUniqueWithoutCouponInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderUpdateManyWithoutCouponInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderUpdateManyWithWhereWithoutCouponInput_1.OrderUpdateManyWithWhereWithoutCouponInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderUpdateManyWithoutCouponInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderScalarWhereInput_1.OrderScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderUpdateManyWithoutCouponInput.prototype, "deleteMany", void 0);
OrderUpdateManyWithoutCouponInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], OrderUpdateManyWithoutCouponInput);
exports.OrderUpdateManyWithoutCouponInput = OrderUpdateManyWithoutCouponInput;
