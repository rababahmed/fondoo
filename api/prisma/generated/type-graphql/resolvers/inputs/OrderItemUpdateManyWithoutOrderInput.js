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
exports.OrderItemUpdateManyWithoutOrderInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const OrderItemCreateManyOrderInputEnvelope_1 = require("../inputs/OrderItemCreateManyOrderInputEnvelope");
const OrderItemCreateOrConnectWithoutOrderInput_1 = require("../inputs/OrderItemCreateOrConnectWithoutOrderInput");
const OrderItemCreateWithoutOrderInput_1 = require("../inputs/OrderItemCreateWithoutOrderInput");
const OrderItemScalarWhereInput_1 = require("../inputs/OrderItemScalarWhereInput");
const OrderItemUpdateManyWithWhereWithoutOrderInput_1 = require("../inputs/OrderItemUpdateManyWithWhereWithoutOrderInput");
const OrderItemUpdateWithWhereUniqueWithoutOrderInput_1 = require("../inputs/OrderItemUpdateWithWhereUniqueWithoutOrderInput");
const OrderItemUpsertWithWhereUniqueWithoutOrderInput_1 = require("../inputs/OrderItemUpsertWithWhereUniqueWithoutOrderInput");
const OrderItemWhereUniqueInput_1 = require("../inputs/OrderItemWhereUniqueInput");
let OrderItemUpdateManyWithoutOrderInput = class OrderItemUpdateManyWithoutOrderInput {
};
__decorate([
    TypeGraphQL.Field(_type => [OrderItemCreateWithoutOrderInput_1.OrderItemCreateWithoutOrderInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderItemUpdateManyWithoutOrderInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderItemCreateOrConnectWithoutOrderInput_1.OrderItemCreateOrConnectWithoutOrderInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderItemUpdateManyWithoutOrderInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderItemUpsertWithWhereUniqueWithoutOrderInput_1.OrderItemUpsertWithWhereUniqueWithoutOrderInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderItemUpdateManyWithoutOrderInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderItemCreateManyOrderInputEnvelope_1.OrderItemCreateManyOrderInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", OrderItemCreateManyOrderInputEnvelope_1.OrderItemCreateManyOrderInputEnvelope)
], OrderItemUpdateManyWithoutOrderInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderItemWhereUniqueInput_1.OrderItemWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderItemUpdateManyWithoutOrderInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderItemWhereUniqueInput_1.OrderItemWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderItemUpdateManyWithoutOrderInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderItemWhereUniqueInput_1.OrderItemWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderItemUpdateManyWithoutOrderInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderItemWhereUniqueInput_1.OrderItemWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderItemUpdateManyWithoutOrderInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderItemUpdateWithWhereUniqueWithoutOrderInput_1.OrderItemUpdateWithWhereUniqueWithoutOrderInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderItemUpdateManyWithoutOrderInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderItemUpdateManyWithWhereWithoutOrderInput_1.OrderItemUpdateManyWithWhereWithoutOrderInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderItemUpdateManyWithoutOrderInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderItemScalarWhereInput_1.OrderItemScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderItemUpdateManyWithoutOrderInput.prototype, "deleteMany", void 0);
OrderItemUpdateManyWithoutOrderInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], OrderItemUpdateManyWithoutOrderInput);
exports.OrderItemUpdateManyWithoutOrderInput = OrderItemUpdateManyWithoutOrderInput;
