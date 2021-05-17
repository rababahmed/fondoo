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
exports.RestaurantUpdateManyWithoutUsersInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const RestaurantCreateOrConnectWithoutUsersInput_1 = require("../inputs/RestaurantCreateOrConnectWithoutUsersInput");
const RestaurantCreateWithoutUsersInput_1 = require("../inputs/RestaurantCreateWithoutUsersInput");
const RestaurantScalarWhereInput_1 = require("../inputs/RestaurantScalarWhereInput");
const RestaurantUpdateManyWithWhereWithoutUsersInput_1 = require("../inputs/RestaurantUpdateManyWithWhereWithoutUsersInput");
const RestaurantUpdateWithWhereUniqueWithoutUsersInput_1 = require("../inputs/RestaurantUpdateWithWhereUniqueWithoutUsersInput");
const RestaurantUpsertWithWhereUniqueWithoutUsersInput_1 = require("../inputs/RestaurantUpsertWithWhereUniqueWithoutUsersInput");
const RestaurantWhereUniqueInput_1 = require("../inputs/RestaurantWhereUniqueInput");
let RestaurantUpdateManyWithoutUsersInput = class RestaurantUpdateManyWithoutUsersInput {
};
__decorate([
    TypeGraphQL.Field(_type => [RestaurantCreateWithoutUsersInput_1.RestaurantCreateWithoutUsersInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RestaurantUpdateManyWithoutUsersInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RestaurantCreateOrConnectWithoutUsersInput_1.RestaurantCreateOrConnectWithoutUsersInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RestaurantUpdateManyWithoutUsersInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RestaurantUpsertWithWhereUniqueWithoutUsersInput_1.RestaurantUpsertWithWhereUniqueWithoutUsersInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RestaurantUpdateManyWithoutUsersInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RestaurantWhereUniqueInput_1.RestaurantWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RestaurantUpdateManyWithoutUsersInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RestaurantWhereUniqueInput_1.RestaurantWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RestaurantUpdateManyWithoutUsersInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RestaurantWhereUniqueInput_1.RestaurantWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RestaurantUpdateManyWithoutUsersInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RestaurantWhereUniqueInput_1.RestaurantWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RestaurantUpdateManyWithoutUsersInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RestaurantUpdateWithWhereUniqueWithoutUsersInput_1.RestaurantUpdateWithWhereUniqueWithoutUsersInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RestaurantUpdateManyWithoutUsersInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RestaurantUpdateManyWithWhereWithoutUsersInput_1.RestaurantUpdateManyWithWhereWithoutUsersInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RestaurantUpdateManyWithoutUsersInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RestaurantScalarWhereInput_1.RestaurantScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RestaurantUpdateManyWithoutUsersInput.prototype, "deleteMany", void 0);
RestaurantUpdateManyWithoutUsersInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], RestaurantUpdateManyWithoutUsersInput);
exports.RestaurantUpdateManyWithoutUsersInput = RestaurantUpdateManyWithoutUsersInput;
