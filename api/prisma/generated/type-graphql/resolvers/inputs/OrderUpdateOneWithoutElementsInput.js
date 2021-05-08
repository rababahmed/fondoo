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
exports.OrderUpdateOneWithoutElementsInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const OrderCreateOrConnectWithoutElementsInput_1 = require("../inputs/OrderCreateOrConnectWithoutElementsInput");
const OrderCreateWithoutElementsInput_1 = require("../inputs/OrderCreateWithoutElementsInput");
const OrderUpdateWithoutElementsInput_1 = require("../inputs/OrderUpdateWithoutElementsInput");
const OrderUpsertWithoutElementsInput_1 = require("../inputs/OrderUpsertWithoutElementsInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUpdateOneWithoutElementsInput = class OrderUpdateOneWithoutElementsInput {
};
__decorate([
    TypeGraphQL.Field(_type => OrderCreateWithoutElementsInput_1.OrderCreateWithoutElementsInput, {
        nullable: true
    }),
    __metadata("design:type", OrderCreateWithoutElementsInput_1.OrderCreateWithoutElementsInput)
], OrderUpdateOneWithoutElementsInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderCreateOrConnectWithoutElementsInput_1.OrderCreateOrConnectWithoutElementsInput, {
        nullable: true
    }),
    __metadata("design:type", OrderCreateOrConnectWithoutElementsInput_1.OrderCreateOrConnectWithoutElementsInput)
], OrderUpdateOneWithoutElementsInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderUpsertWithoutElementsInput_1.OrderUpsertWithoutElementsInput, {
        nullable: true
    }),
    __metadata("design:type", OrderUpsertWithoutElementsInput_1.OrderUpsertWithoutElementsInput)
], OrderUpdateOneWithoutElementsInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderUpdateOneWithoutElementsInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], OrderUpdateOneWithoutElementsInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], OrderUpdateOneWithoutElementsInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderUpdateWithoutElementsInput_1.OrderUpdateWithoutElementsInput, {
        nullable: true
    }),
    __metadata("design:type", OrderUpdateWithoutElementsInput_1.OrderUpdateWithoutElementsInput)
], OrderUpdateOneWithoutElementsInput.prototype, "update", void 0);
OrderUpdateOneWithoutElementsInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], OrderUpdateOneWithoutElementsInput);
exports.OrderUpdateOneWithoutElementsInput = OrderUpdateOneWithoutElementsInput;
