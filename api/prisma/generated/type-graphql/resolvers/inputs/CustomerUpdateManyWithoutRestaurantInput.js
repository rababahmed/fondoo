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
exports.CustomerUpdateManyWithoutRestaurantInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const CustomerCreateManyRestaurantInputEnvelope_1 = require("../inputs/CustomerCreateManyRestaurantInputEnvelope");
const CustomerCreateOrConnectWithoutRestaurantInput_1 = require("../inputs/CustomerCreateOrConnectWithoutRestaurantInput");
const CustomerCreateWithoutRestaurantInput_1 = require("../inputs/CustomerCreateWithoutRestaurantInput");
const CustomerScalarWhereInput_1 = require("../inputs/CustomerScalarWhereInput");
const CustomerUpdateManyWithWhereWithoutRestaurantInput_1 = require("../inputs/CustomerUpdateManyWithWhereWithoutRestaurantInput");
const CustomerUpdateWithWhereUniqueWithoutRestaurantInput_1 = require("../inputs/CustomerUpdateWithWhereUniqueWithoutRestaurantInput");
const CustomerUpsertWithWhereUniqueWithoutRestaurantInput_1 = require("../inputs/CustomerUpsertWithWhereUniqueWithoutRestaurantInput");
const CustomerWhereUniqueInput_1 = require("../inputs/CustomerWhereUniqueInput");
let CustomerUpdateManyWithoutRestaurantInput = class CustomerUpdateManyWithoutRestaurantInput {
};
__decorate([
    TypeGraphQL.Field(_type => [CustomerCreateWithoutRestaurantInput_1.CustomerCreateWithoutRestaurantInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CustomerUpdateManyWithoutRestaurantInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CustomerCreateOrConnectWithoutRestaurantInput_1.CustomerCreateOrConnectWithoutRestaurantInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CustomerUpdateManyWithoutRestaurantInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CustomerUpsertWithWhereUniqueWithoutRestaurantInput_1.CustomerUpsertWithWhereUniqueWithoutRestaurantInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CustomerUpdateManyWithoutRestaurantInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => CustomerCreateManyRestaurantInputEnvelope_1.CustomerCreateManyRestaurantInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", CustomerCreateManyRestaurantInputEnvelope_1.CustomerCreateManyRestaurantInputEnvelope)
], CustomerUpdateManyWithoutRestaurantInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CustomerWhereUniqueInput_1.CustomerWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CustomerUpdateManyWithoutRestaurantInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CustomerWhereUniqueInput_1.CustomerWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CustomerUpdateManyWithoutRestaurantInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CustomerWhereUniqueInput_1.CustomerWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CustomerUpdateManyWithoutRestaurantInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CustomerWhereUniqueInput_1.CustomerWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CustomerUpdateManyWithoutRestaurantInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CustomerUpdateWithWhereUniqueWithoutRestaurantInput_1.CustomerUpdateWithWhereUniqueWithoutRestaurantInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CustomerUpdateManyWithoutRestaurantInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CustomerUpdateManyWithWhereWithoutRestaurantInput_1.CustomerUpdateManyWithWhereWithoutRestaurantInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CustomerUpdateManyWithoutRestaurantInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CustomerScalarWhereInput_1.CustomerScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CustomerUpdateManyWithoutRestaurantInput.prototype, "deleteMany", void 0);
CustomerUpdateManyWithoutRestaurantInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], CustomerUpdateManyWithoutRestaurantInput);
exports.CustomerUpdateManyWithoutRestaurantInput = CustomerUpdateManyWithoutRestaurantInput;
