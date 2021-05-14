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
exports.CustomerUpdateOneWithoutAddressInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const CustomerCreateOrConnectWithoutAddressInput_1 = require("../inputs/CustomerCreateOrConnectWithoutAddressInput");
const CustomerCreateWithoutAddressInput_1 = require("../inputs/CustomerCreateWithoutAddressInput");
const CustomerUpdateWithoutAddressInput_1 = require("../inputs/CustomerUpdateWithoutAddressInput");
const CustomerUpsertWithoutAddressInput_1 = require("../inputs/CustomerUpsertWithoutAddressInput");
const CustomerWhereUniqueInput_1 = require("../inputs/CustomerWhereUniqueInput");
let CustomerUpdateOneWithoutAddressInput = class CustomerUpdateOneWithoutAddressInput {
};
__decorate([
    TypeGraphQL.Field(_type => CustomerCreateWithoutAddressInput_1.CustomerCreateWithoutAddressInput, {
        nullable: true
    }),
    __metadata("design:type", CustomerCreateWithoutAddressInput_1.CustomerCreateWithoutAddressInput)
], CustomerUpdateOneWithoutAddressInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => CustomerCreateOrConnectWithoutAddressInput_1.CustomerCreateOrConnectWithoutAddressInput, {
        nullable: true
    }),
    __metadata("design:type", CustomerCreateOrConnectWithoutAddressInput_1.CustomerCreateOrConnectWithoutAddressInput)
], CustomerUpdateOneWithoutAddressInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => CustomerUpsertWithoutAddressInput_1.CustomerUpsertWithoutAddressInput, {
        nullable: true
    }),
    __metadata("design:type", CustomerUpsertWithoutAddressInput_1.CustomerUpsertWithoutAddressInput)
], CustomerUpdateOneWithoutAddressInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => CustomerWhereUniqueInput_1.CustomerWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", CustomerWhereUniqueInput_1.CustomerWhereUniqueInput)
], CustomerUpdateOneWithoutAddressInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], CustomerUpdateOneWithoutAddressInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], CustomerUpdateOneWithoutAddressInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => CustomerUpdateWithoutAddressInput_1.CustomerUpdateWithoutAddressInput, {
        nullable: true
    }),
    __metadata("design:type", CustomerUpdateWithoutAddressInput_1.CustomerUpdateWithoutAddressInput)
], CustomerUpdateOneWithoutAddressInput.prototype, "update", void 0);
CustomerUpdateOneWithoutAddressInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], CustomerUpdateOneWithoutAddressInput);
exports.CustomerUpdateOneWithoutAddressInput = CustomerUpdateOneWithoutAddressInput;
