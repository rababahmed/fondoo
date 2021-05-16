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
exports.CustomerAddressUncheckedUpdateManyWithoutCustomerInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const CustomerAddressCreateManyCustomerInputEnvelope_1 = require("../inputs/CustomerAddressCreateManyCustomerInputEnvelope");
const CustomerAddressCreateOrConnectWithoutCustomerInput_1 = require("../inputs/CustomerAddressCreateOrConnectWithoutCustomerInput");
const CustomerAddressCreateWithoutCustomerInput_1 = require("../inputs/CustomerAddressCreateWithoutCustomerInput");
const CustomerAddressScalarWhereInput_1 = require("../inputs/CustomerAddressScalarWhereInput");
const CustomerAddressUpdateManyWithWhereWithoutCustomerInput_1 = require("../inputs/CustomerAddressUpdateManyWithWhereWithoutCustomerInput");
const CustomerAddressUpdateWithWhereUniqueWithoutCustomerInput_1 = require("../inputs/CustomerAddressUpdateWithWhereUniqueWithoutCustomerInput");
const CustomerAddressUpsertWithWhereUniqueWithoutCustomerInput_1 = require("../inputs/CustomerAddressUpsertWithWhereUniqueWithoutCustomerInput");
const CustomerAddressWhereUniqueInput_1 = require("../inputs/CustomerAddressWhereUniqueInput");
let CustomerAddressUncheckedUpdateManyWithoutCustomerInput = class CustomerAddressUncheckedUpdateManyWithoutCustomerInput {
};
__decorate([
    TypeGraphQL.Field(_type => [CustomerAddressCreateWithoutCustomerInput_1.CustomerAddressCreateWithoutCustomerInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CustomerAddressUncheckedUpdateManyWithoutCustomerInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CustomerAddressCreateOrConnectWithoutCustomerInput_1.CustomerAddressCreateOrConnectWithoutCustomerInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CustomerAddressUncheckedUpdateManyWithoutCustomerInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CustomerAddressUpsertWithWhereUniqueWithoutCustomerInput_1.CustomerAddressUpsertWithWhereUniqueWithoutCustomerInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CustomerAddressUncheckedUpdateManyWithoutCustomerInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => CustomerAddressCreateManyCustomerInputEnvelope_1.CustomerAddressCreateManyCustomerInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", CustomerAddressCreateManyCustomerInputEnvelope_1.CustomerAddressCreateManyCustomerInputEnvelope)
], CustomerAddressUncheckedUpdateManyWithoutCustomerInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CustomerAddressWhereUniqueInput_1.CustomerAddressWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CustomerAddressUncheckedUpdateManyWithoutCustomerInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CustomerAddressWhereUniqueInput_1.CustomerAddressWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CustomerAddressUncheckedUpdateManyWithoutCustomerInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CustomerAddressWhereUniqueInput_1.CustomerAddressWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CustomerAddressUncheckedUpdateManyWithoutCustomerInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CustomerAddressWhereUniqueInput_1.CustomerAddressWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CustomerAddressUncheckedUpdateManyWithoutCustomerInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CustomerAddressUpdateWithWhereUniqueWithoutCustomerInput_1.CustomerAddressUpdateWithWhereUniqueWithoutCustomerInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CustomerAddressUncheckedUpdateManyWithoutCustomerInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CustomerAddressUpdateManyWithWhereWithoutCustomerInput_1.CustomerAddressUpdateManyWithWhereWithoutCustomerInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CustomerAddressUncheckedUpdateManyWithoutCustomerInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CustomerAddressScalarWhereInput_1.CustomerAddressScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CustomerAddressUncheckedUpdateManyWithoutCustomerInput.prototype, "deleteMany", void 0);
CustomerAddressUncheckedUpdateManyWithoutCustomerInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], CustomerAddressUncheckedUpdateManyWithoutCustomerInput);
exports.CustomerAddressUncheckedUpdateManyWithoutCustomerInput = CustomerAddressUncheckedUpdateManyWithoutCustomerInput;
