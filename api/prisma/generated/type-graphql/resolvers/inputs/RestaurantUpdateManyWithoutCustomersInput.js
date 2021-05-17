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
exports.RestaurantUpdateManyWithoutCustomersInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const RestaurantCreateOrConnectWithoutCustomersInput_1 = require("../inputs/RestaurantCreateOrConnectWithoutCustomersInput");
const RestaurantCreateWithoutCustomersInput_1 = require("../inputs/RestaurantCreateWithoutCustomersInput");
const RestaurantScalarWhereInput_1 = require("../inputs/RestaurantScalarWhereInput");
const RestaurantUpdateManyWithWhereWithoutCustomersInput_1 = require("../inputs/RestaurantUpdateManyWithWhereWithoutCustomersInput");
const RestaurantUpdateWithWhereUniqueWithoutCustomersInput_1 = require("../inputs/RestaurantUpdateWithWhereUniqueWithoutCustomersInput");
const RestaurantUpsertWithWhereUniqueWithoutCustomersInput_1 = require("../inputs/RestaurantUpsertWithWhereUniqueWithoutCustomersInput");
const RestaurantWhereUniqueInput_1 = require("../inputs/RestaurantWhereUniqueInput");
let RestaurantUpdateManyWithoutCustomersInput = class RestaurantUpdateManyWithoutCustomersInput {
};
__decorate([
    TypeGraphQL.Field(_type => [RestaurantCreateWithoutCustomersInput_1.RestaurantCreateWithoutCustomersInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RestaurantUpdateManyWithoutCustomersInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RestaurantCreateOrConnectWithoutCustomersInput_1.RestaurantCreateOrConnectWithoutCustomersInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RestaurantUpdateManyWithoutCustomersInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RestaurantUpsertWithWhereUniqueWithoutCustomersInput_1.RestaurantUpsertWithWhereUniqueWithoutCustomersInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RestaurantUpdateManyWithoutCustomersInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RestaurantWhereUniqueInput_1.RestaurantWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RestaurantUpdateManyWithoutCustomersInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RestaurantWhereUniqueInput_1.RestaurantWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RestaurantUpdateManyWithoutCustomersInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RestaurantWhereUniqueInput_1.RestaurantWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RestaurantUpdateManyWithoutCustomersInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RestaurantWhereUniqueInput_1.RestaurantWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RestaurantUpdateManyWithoutCustomersInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RestaurantUpdateWithWhereUniqueWithoutCustomersInput_1.RestaurantUpdateWithWhereUniqueWithoutCustomersInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RestaurantUpdateManyWithoutCustomersInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RestaurantUpdateManyWithWhereWithoutCustomersInput_1.RestaurantUpdateManyWithWhereWithoutCustomersInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RestaurantUpdateManyWithoutCustomersInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RestaurantScalarWhereInput_1.RestaurantScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RestaurantUpdateManyWithoutCustomersInput.prototype, "deleteMany", void 0);
RestaurantUpdateManyWithoutCustomersInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], RestaurantUpdateManyWithoutCustomersInput);
exports.RestaurantUpdateManyWithoutCustomersInput = RestaurantUpdateManyWithoutCustomersInput;
