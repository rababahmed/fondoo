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
exports.CustomerUpdateOneWithoutAddressesInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const CustomerCreateOrConnectWithoutAddressesInput_1 = require("../inputs/CustomerCreateOrConnectWithoutAddressesInput");
const CustomerCreateWithoutAddressesInput_1 = require("../inputs/CustomerCreateWithoutAddressesInput");
const CustomerUpdateWithoutAddressesInput_1 = require("../inputs/CustomerUpdateWithoutAddressesInput");
const CustomerUpsertWithoutAddressesInput_1 = require("../inputs/CustomerUpsertWithoutAddressesInput");
const CustomerWhereUniqueInput_1 = require("../inputs/CustomerWhereUniqueInput");
let CustomerUpdateOneWithoutAddressesInput = class CustomerUpdateOneWithoutAddressesInput {
};
__decorate([
    TypeGraphQL.Field(_type => CustomerCreateWithoutAddressesInput_1.CustomerCreateWithoutAddressesInput, {
        nullable: true
    }),
    __metadata("design:type", CustomerCreateWithoutAddressesInput_1.CustomerCreateWithoutAddressesInput)
], CustomerUpdateOneWithoutAddressesInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => CustomerCreateOrConnectWithoutAddressesInput_1.CustomerCreateOrConnectWithoutAddressesInput, {
        nullable: true
    }),
    __metadata("design:type", CustomerCreateOrConnectWithoutAddressesInput_1.CustomerCreateOrConnectWithoutAddressesInput)
], CustomerUpdateOneWithoutAddressesInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => CustomerUpsertWithoutAddressesInput_1.CustomerUpsertWithoutAddressesInput, {
        nullable: true
    }),
    __metadata("design:type", CustomerUpsertWithoutAddressesInput_1.CustomerUpsertWithoutAddressesInput)
], CustomerUpdateOneWithoutAddressesInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => CustomerWhereUniqueInput_1.CustomerWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", CustomerWhereUniqueInput_1.CustomerWhereUniqueInput)
], CustomerUpdateOneWithoutAddressesInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], CustomerUpdateOneWithoutAddressesInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], CustomerUpdateOneWithoutAddressesInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => CustomerUpdateWithoutAddressesInput_1.CustomerUpdateWithoutAddressesInput, {
        nullable: true
    }),
    __metadata("design:type", CustomerUpdateWithoutAddressesInput_1.CustomerUpdateWithoutAddressesInput)
], CustomerUpdateOneWithoutAddressesInput.prototype, "update", void 0);
CustomerUpdateOneWithoutAddressesInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], CustomerUpdateOneWithoutAddressesInput);
exports.CustomerUpdateOneWithoutAddressesInput = CustomerUpdateOneWithoutAddressesInput;
