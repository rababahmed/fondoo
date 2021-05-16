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
exports.UserTokenUncheckedUpdateManyWithoutUserInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const UserTokenCreateManyUserInputEnvelope_1 = require("../inputs/UserTokenCreateManyUserInputEnvelope");
const UserTokenCreateOrConnectWithoutUserInput_1 = require("../inputs/UserTokenCreateOrConnectWithoutUserInput");
const UserTokenCreateWithoutUserInput_1 = require("../inputs/UserTokenCreateWithoutUserInput");
const UserTokenScalarWhereInput_1 = require("../inputs/UserTokenScalarWhereInput");
const UserTokenUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/UserTokenUpdateManyWithWhereWithoutUserInput");
const UserTokenUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/UserTokenUpdateWithWhereUniqueWithoutUserInput");
const UserTokenUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/UserTokenUpsertWithWhereUniqueWithoutUserInput");
const UserTokenWhereUniqueInput_1 = require("../inputs/UserTokenWhereUniqueInput");
let UserTokenUncheckedUpdateManyWithoutUserInput = class UserTokenUncheckedUpdateManyWithoutUserInput {
};
__decorate([
    TypeGraphQL.Field(_type => [UserTokenCreateWithoutUserInput_1.UserTokenCreateWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserTokenUncheckedUpdateManyWithoutUserInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserTokenCreateOrConnectWithoutUserInput_1.UserTokenCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserTokenUncheckedUpdateManyWithoutUserInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserTokenUpsertWithWhereUniqueWithoutUserInput_1.UserTokenUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserTokenUncheckedUpdateManyWithoutUserInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserTokenCreateManyUserInputEnvelope_1.UserTokenCreateManyUserInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", UserTokenCreateManyUserInputEnvelope_1.UserTokenCreateManyUserInputEnvelope)
], UserTokenUncheckedUpdateManyWithoutUserInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserTokenWhereUniqueInput_1.UserTokenWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserTokenUncheckedUpdateManyWithoutUserInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserTokenWhereUniqueInput_1.UserTokenWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserTokenUncheckedUpdateManyWithoutUserInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserTokenWhereUniqueInput_1.UserTokenWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserTokenUncheckedUpdateManyWithoutUserInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserTokenWhereUniqueInput_1.UserTokenWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserTokenUncheckedUpdateManyWithoutUserInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserTokenUpdateWithWhereUniqueWithoutUserInput_1.UserTokenUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserTokenUncheckedUpdateManyWithoutUserInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserTokenUpdateManyWithWhereWithoutUserInput_1.UserTokenUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserTokenUncheckedUpdateManyWithoutUserInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserTokenScalarWhereInput_1.UserTokenScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserTokenUncheckedUpdateManyWithoutUserInput.prototype, "deleteMany", void 0);
UserTokenUncheckedUpdateManyWithoutUserInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], UserTokenUncheckedUpdateManyWithoutUserInput);
exports.UserTokenUncheckedUpdateManyWithoutUserInput = UserTokenUncheckedUpdateManyWithoutUserInput;
