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
exports.CartElementUpdateManyWithoutCustomerInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const CartElementCreateManyCustomerInputEnvelope_1 = require("../inputs/CartElementCreateManyCustomerInputEnvelope");
const CartElementCreateOrConnectWithoutCustomerInput_1 = require("../inputs/CartElementCreateOrConnectWithoutCustomerInput");
const CartElementCreateWithoutCustomerInput_1 = require("../inputs/CartElementCreateWithoutCustomerInput");
const CartElementScalarWhereInput_1 = require("../inputs/CartElementScalarWhereInput");
const CartElementUpdateManyWithWhereWithoutCustomerInput_1 = require("../inputs/CartElementUpdateManyWithWhereWithoutCustomerInput");
const CartElementUpdateWithWhereUniqueWithoutCustomerInput_1 = require("../inputs/CartElementUpdateWithWhereUniqueWithoutCustomerInput");
const CartElementUpsertWithWhereUniqueWithoutCustomerInput_1 = require("../inputs/CartElementUpsertWithWhereUniqueWithoutCustomerInput");
const CartElementWhereUniqueInput_1 = require("../inputs/CartElementWhereUniqueInput");
let CartElementUpdateManyWithoutCustomerInput = class CartElementUpdateManyWithoutCustomerInput {
};
__decorate([
    TypeGraphQL.Field(_type => [CartElementCreateWithoutCustomerInput_1.CartElementCreateWithoutCustomerInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CartElementUpdateManyWithoutCustomerInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CartElementCreateOrConnectWithoutCustomerInput_1.CartElementCreateOrConnectWithoutCustomerInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CartElementUpdateManyWithoutCustomerInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CartElementUpsertWithWhereUniqueWithoutCustomerInput_1.CartElementUpsertWithWhereUniqueWithoutCustomerInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CartElementUpdateManyWithoutCustomerInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => CartElementCreateManyCustomerInputEnvelope_1.CartElementCreateManyCustomerInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", CartElementCreateManyCustomerInputEnvelope_1.CartElementCreateManyCustomerInputEnvelope)
], CartElementUpdateManyWithoutCustomerInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CartElementWhereUniqueInput_1.CartElementWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CartElementUpdateManyWithoutCustomerInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CartElementWhereUniqueInput_1.CartElementWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CartElementUpdateManyWithoutCustomerInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CartElementWhereUniqueInput_1.CartElementWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CartElementUpdateManyWithoutCustomerInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CartElementWhereUniqueInput_1.CartElementWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CartElementUpdateManyWithoutCustomerInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CartElementUpdateWithWhereUniqueWithoutCustomerInput_1.CartElementUpdateWithWhereUniqueWithoutCustomerInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CartElementUpdateManyWithoutCustomerInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CartElementUpdateManyWithWhereWithoutCustomerInput_1.CartElementUpdateManyWithWhereWithoutCustomerInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CartElementUpdateManyWithoutCustomerInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CartElementScalarWhereInput_1.CartElementScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CartElementUpdateManyWithoutCustomerInput.prototype, "deleteMany", void 0);
CartElementUpdateManyWithoutCustomerInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], CartElementUpdateManyWithoutCustomerInput);
exports.CartElementUpdateManyWithoutCustomerInput = CartElementUpdateManyWithoutCustomerInput;
