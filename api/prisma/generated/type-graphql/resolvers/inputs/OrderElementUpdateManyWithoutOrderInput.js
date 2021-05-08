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
exports.OrderElementUpdateManyWithoutOrderInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const OrderElementCreateManyOrderInputEnvelope_1 = require("../inputs/OrderElementCreateManyOrderInputEnvelope");
const OrderElementCreateOrConnectWithoutOrderInput_1 = require("../inputs/OrderElementCreateOrConnectWithoutOrderInput");
const OrderElementCreateWithoutOrderInput_1 = require("../inputs/OrderElementCreateWithoutOrderInput");
const OrderElementScalarWhereInput_1 = require("../inputs/OrderElementScalarWhereInput");
const OrderElementUpdateManyWithWhereWithoutOrderInput_1 = require("../inputs/OrderElementUpdateManyWithWhereWithoutOrderInput");
const OrderElementUpdateWithWhereUniqueWithoutOrderInput_1 = require("../inputs/OrderElementUpdateWithWhereUniqueWithoutOrderInput");
const OrderElementUpsertWithWhereUniqueWithoutOrderInput_1 = require("../inputs/OrderElementUpsertWithWhereUniqueWithoutOrderInput");
const OrderElementWhereUniqueInput_1 = require("../inputs/OrderElementWhereUniqueInput");
let OrderElementUpdateManyWithoutOrderInput = class OrderElementUpdateManyWithoutOrderInput {
};
__decorate([
    TypeGraphQL.Field(_type => [OrderElementCreateWithoutOrderInput_1.OrderElementCreateWithoutOrderInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderElementUpdateManyWithoutOrderInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderElementCreateOrConnectWithoutOrderInput_1.OrderElementCreateOrConnectWithoutOrderInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderElementUpdateManyWithoutOrderInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderElementUpsertWithWhereUniqueWithoutOrderInput_1.OrderElementUpsertWithWhereUniqueWithoutOrderInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderElementUpdateManyWithoutOrderInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderElementCreateManyOrderInputEnvelope_1.OrderElementCreateManyOrderInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", OrderElementCreateManyOrderInputEnvelope_1.OrderElementCreateManyOrderInputEnvelope)
], OrderElementUpdateManyWithoutOrderInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderElementWhereUniqueInput_1.OrderElementWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderElementUpdateManyWithoutOrderInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderElementWhereUniqueInput_1.OrderElementWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderElementUpdateManyWithoutOrderInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderElementWhereUniqueInput_1.OrderElementWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderElementUpdateManyWithoutOrderInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderElementWhereUniqueInput_1.OrderElementWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderElementUpdateManyWithoutOrderInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderElementUpdateWithWhereUniqueWithoutOrderInput_1.OrderElementUpdateWithWhereUniqueWithoutOrderInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderElementUpdateManyWithoutOrderInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderElementUpdateManyWithWhereWithoutOrderInput_1.OrderElementUpdateManyWithWhereWithoutOrderInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderElementUpdateManyWithoutOrderInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderElementScalarWhereInput_1.OrderElementScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderElementUpdateManyWithoutOrderInput.prototype, "deleteMany", void 0);
OrderElementUpdateManyWithoutOrderInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], OrderElementUpdateManyWithoutOrderInput);
exports.OrderElementUpdateManyWithoutOrderInput = OrderElementUpdateManyWithoutOrderInput;
