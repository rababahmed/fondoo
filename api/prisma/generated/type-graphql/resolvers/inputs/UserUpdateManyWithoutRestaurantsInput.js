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
exports.UserUpdateManyWithoutRestaurantsInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const UserCreateOrConnectWithoutRestaurantsInput_1 = require("../inputs/UserCreateOrConnectWithoutRestaurantsInput");
const UserCreateWithoutRestaurantsInput_1 = require("../inputs/UserCreateWithoutRestaurantsInput");
const UserScalarWhereInput_1 = require("../inputs/UserScalarWhereInput");
const UserUpdateManyWithWhereWithoutRestaurantsInput_1 = require("../inputs/UserUpdateManyWithWhereWithoutRestaurantsInput");
const UserUpdateWithWhereUniqueWithoutRestaurantsInput_1 = require("../inputs/UserUpdateWithWhereUniqueWithoutRestaurantsInput");
const UserUpsertWithWhereUniqueWithoutRestaurantsInput_1 = require("../inputs/UserUpsertWithWhereUniqueWithoutRestaurantsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateManyWithoutRestaurantsInput = class UserUpdateManyWithoutRestaurantsInput {
};
__decorate([
    TypeGraphQL.Field(_type => [UserCreateWithoutRestaurantsInput_1.UserCreateWithoutRestaurantsInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserUpdateManyWithoutRestaurantsInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutRestaurantsInput_1.UserCreateOrConnectWithoutRestaurantsInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserUpdateManyWithoutRestaurantsInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutRestaurantsInput_1.UserUpsertWithWhereUniqueWithoutRestaurantsInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserUpdateManyWithoutRestaurantsInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserUpdateManyWithoutRestaurantsInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserUpdateManyWithoutRestaurantsInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserUpdateManyWithoutRestaurantsInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserUpdateManyWithoutRestaurantsInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutRestaurantsInput_1.UserUpdateWithWhereUniqueWithoutRestaurantsInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserUpdateManyWithoutRestaurantsInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutRestaurantsInput_1.UserUpdateManyWithWhereWithoutRestaurantsInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserUpdateManyWithoutRestaurantsInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserScalarWhereInput_1.UserScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserUpdateManyWithoutRestaurantsInput.prototype, "deleteMany", void 0);
UserUpdateManyWithoutRestaurantsInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], UserUpdateManyWithoutRestaurantsInput);
exports.UserUpdateManyWithoutRestaurantsInput = UserUpdateManyWithoutRestaurantsInput;
