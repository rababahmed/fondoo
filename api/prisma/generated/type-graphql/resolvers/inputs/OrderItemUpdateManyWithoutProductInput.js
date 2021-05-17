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
exports.OrderItemUpdateManyWithoutProductInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const OrderItemCreateManyProductInputEnvelope_1 = require("../inputs/OrderItemCreateManyProductInputEnvelope");
const OrderItemCreateOrConnectWithoutProductInput_1 = require("../inputs/OrderItemCreateOrConnectWithoutProductInput");
const OrderItemCreateWithoutProductInput_1 = require("../inputs/OrderItemCreateWithoutProductInput");
const OrderItemScalarWhereInput_1 = require("../inputs/OrderItemScalarWhereInput");
const OrderItemUpdateManyWithWhereWithoutProductInput_1 = require("../inputs/OrderItemUpdateManyWithWhereWithoutProductInput");
const OrderItemUpdateWithWhereUniqueWithoutProductInput_1 = require("../inputs/OrderItemUpdateWithWhereUniqueWithoutProductInput");
const OrderItemUpsertWithWhereUniqueWithoutProductInput_1 = require("../inputs/OrderItemUpsertWithWhereUniqueWithoutProductInput");
const OrderItemWhereUniqueInput_1 = require("../inputs/OrderItemWhereUniqueInput");
let OrderItemUpdateManyWithoutProductInput = class OrderItemUpdateManyWithoutProductInput {
};
__decorate([
    TypeGraphQL.Field(_type => [OrderItemCreateWithoutProductInput_1.OrderItemCreateWithoutProductInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderItemUpdateManyWithoutProductInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderItemCreateOrConnectWithoutProductInput_1.OrderItemCreateOrConnectWithoutProductInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderItemUpdateManyWithoutProductInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderItemUpsertWithWhereUniqueWithoutProductInput_1.OrderItemUpsertWithWhereUniqueWithoutProductInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderItemUpdateManyWithoutProductInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderItemCreateManyProductInputEnvelope_1.OrderItemCreateManyProductInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", OrderItemCreateManyProductInputEnvelope_1.OrderItemCreateManyProductInputEnvelope)
], OrderItemUpdateManyWithoutProductInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderItemWhereUniqueInput_1.OrderItemWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderItemUpdateManyWithoutProductInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderItemWhereUniqueInput_1.OrderItemWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderItemUpdateManyWithoutProductInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderItemWhereUniqueInput_1.OrderItemWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderItemUpdateManyWithoutProductInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderItemWhereUniqueInput_1.OrderItemWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderItemUpdateManyWithoutProductInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderItemUpdateWithWhereUniqueWithoutProductInput_1.OrderItemUpdateWithWhereUniqueWithoutProductInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderItemUpdateManyWithoutProductInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderItemUpdateManyWithWhereWithoutProductInput_1.OrderItemUpdateManyWithWhereWithoutProductInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderItemUpdateManyWithoutProductInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderItemScalarWhereInput_1.OrderItemScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderItemUpdateManyWithoutProductInput.prototype, "deleteMany", void 0);
OrderItemUpdateManyWithoutProductInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], OrderItemUpdateManyWithoutProductInput);
exports.OrderItemUpdateManyWithoutProductInput = OrderItemUpdateManyWithoutProductInput;
