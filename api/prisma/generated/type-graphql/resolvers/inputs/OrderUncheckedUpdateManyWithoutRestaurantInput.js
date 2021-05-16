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
exports.OrderUncheckedUpdateManyWithoutRestaurantInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const OrderCreateManyRestaurantInputEnvelope_1 = require("../inputs/OrderCreateManyRestaurantInputEnvelope");
const OrderCreateOrConnectWithoutRestaurantInput_1 = require("../inputs/OrderCreateOrConnectWithoutRestaurantInput");
const OrderCreateWithoutRestaurantInput_1 = require("../inputs/OrderCreateWithoutRestaurantInput");
const OrderScalarWhereInput_1 = require("../inputs/OrderScalarWhereInput");
const OrderUpdateManyWithWhereWithoutRestaurantInput_1 = require("../inputs/OrderUpdateManyWithWhereWithoutRestaurantInput");
const OrderUpdateWithWhereUniqueWithoutRestaurantInput_1 = require("../inputs/OrderUpdateWithWhereUniqueWithoutRestaurantInput");
const OrderUpsertWithWhereUniqueWithoutRestaurantInput_1 = require("../inputs/OrderUpsertWithWhereUniqueWithoutRestaurantInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUncheckedUpdateManyWithoutRestaurantInput = class OrderUncheckedUpdateManyWithoutRestaurantInput {
};
__decorate([
    TypeGraphQL.Field(_type => [OrderCreateWithoutRestaurantInput_1.OrderCreateWithoutRestaurantInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderUncheckedUpdateManyWithoutRestaurantInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutRestaurantInput_1.OrderCreateOrConnectWithoutRestaurantInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderUncheckedUpdateManyWithoutRestaurantInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderUpsertWithWhereUniqueWithoutRestaurantInput_1.OrderUpsertWithWhereUniqueWithoutRestaurantInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderUncheckedUpdateManyWithoutRestaurantInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderCreateManyRestaurantInputEnvelope_1.OrderCreateManyRestaurantInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", OrderCreateManyRestaurantInputEnvelope_1.OrderCreateManyRestaurantInputEnvelope)
], OrderUncheckedUpdateManyWithoutRestaurantInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderUncheckedUpdateManyWithoutRestaurantInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderUncheckedUpdateManyWithoutRestaurantInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderUncheckedUpdateManyWithoutRestaurantInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderUncheckedUpdateManyWithoutRestaurantInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderUpdateWithWhereUniqueWithoutRestaurantInput_1.OrderUpdateWithWhereUniqueWithoutRestaurantInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderUncheckedUpdateManyWithoutRestaurantInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderUpdateManyWithWhereWithoutRestaurantInput_1.OrderUpdateManyWithWhereWithoutRestaurantInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderUncheckedUpdateManyWithoutRestaurantInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderScalarWhereInput_1.OrderScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderUncheckedUpdateManyWithoutRestaurantInput.prototype, "deleteMany", void 0);
OrderUncheckedUpdateManyWithoutRestaurantInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], OrderUncheckedUpdateManyWithoutRestaurantInput);
exports.OrderUncheckedUpdateManyWithoutRestaurantInput = OrderUncheckedUpdateManyWithoutRestaurantInput;
