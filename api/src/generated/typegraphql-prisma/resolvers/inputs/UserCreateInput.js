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
exports.UserCreateInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const OrderCreateNestedManyWithoutUserInput_1 = require("../inputs/OrderCreateNestedManyWithoutUserInput");
const RestaurantCreateNestedOneWithoutUsersInput_1 = require("../inputs/RestaurantCreateNestedOneWithoutUsersInput");
const UserTokenCreateNestedManyWithoutUserInput_1 = require("../inputs/UserTokenCreateNestedManyWithoutUserInput");
const Role_1 = require("../../enums/Role");
let UserCreateInput = class UserCreateInput {
};
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], UserCreateInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateInput.prototype, "fullName", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateInput.prototype, "username", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateInput.prototype, "password", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserCreateInput.prototype, "phone", void 0);
__decorate([
    TypeGraphQL.Field(_type => Role_1.Role, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserCreateInput.prototype, "role", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserTokenCreateNestedManyWithoutUserInput_1.UserTokenCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    __metadata("design:type", UserTokenCreateNestedManyWithoutUserInput_1.UserTokenCreateNestedManyWithoutUserInput)
], UserCreateInput.prototype, "token", void 0);
__decorate([
    TypeGraphQL.Field(_type => RestaurantCreateNestedOneWithoutUsersInput_1.RestaurantCreateNestedOneWithoutUsersInput, {
        nullable: true
    }),
    __metadata("design:type", RestaurantCreateNestedOneWithoutUsersInput_1.RestaurantCreateNestedOneWithoutUsersInput)
], UserCreateInput.prototype, "Restaurant", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderCreateNestedManyWithoutUserInput_1.OrderCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    __metadata("design:type", OrderCreateNestedManyWithoutUserInput_1.OrderCreateNestedManyWithoutUserInput)
], UserCreateInput.prototype, "orders", void 0);
UserCreateInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], UserCreateInput);
exports.UserCreateInput = UserCreateInput;
