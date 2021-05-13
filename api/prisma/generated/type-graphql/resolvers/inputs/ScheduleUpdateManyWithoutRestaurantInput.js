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
exports.ScheduleUpdateManyWithoutRestaurantInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ScheduleCreateManyRestaurantInputEnvelope_1 = require("../inputs/ScheduleCreateManyRestaurantInputEnvelope");
const ScheduleCreateOrConnectWithoutRestaurantInput_1 = require("../inputs/ScheduleCreateOrConnectWithoutRestaurantInput");
const ScheduleCreateWithoutRestaurantInput_1 = require("../inputs/ScheduleCreateWithoutRestaurantInput");
const ScheduleScalarWhereInput_1 = require("../inputs/ScheduleScalarWhereInput");
const ScheduleUpdateManyWithWhereWithoutRestaurantInput_1 = require("../inputs/ScheduleUpdateManyWithWhereWithoutRestaurantInput");
const ScheduleUpdateWithWhereUniqueWithoutRestaurantInput_1 = require("../inputs/ScheduleUpdateWithWhereUniqueWithoutRestaurantInput");
const ScheduleUpsertWithWhereUniqueWithoutRestaurantInput_1 = require("../inputs/ScheduleUpsertWithWhereUniqueWithoutRestaurantInput");
const ScheduleWhereUniqueInput_1 = require("../inputs/ScheduleWhereUniqueInput");
let ScheduleUpdateManyWithoutRestaurantInput = class ScheduleUpdateManyWithoutRestaurantInput {
};
__decorate([
    TypeGraphQL.Field(_type => [ScheduleCreateWithoutRestaurantInput_1.ScheduleCreateWithoutRestaurantInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ScheduleUpdateManyWithoutRestaurantInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ScheduleCreateOrConnectWithoutRestaurantInput_1.ScheduleCreateOrConnectWithoutRestaurantInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ScheduleUpdateManyWithoutRestaurantInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ScheduleUpsertWithWhereUniqueWithoutRestaurantInput_1.ScheduleUpsertWithWhereUniqueWithoutRestaurantInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ScheduleUpdateManyWithoutRestaurantInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => ScheduleCreateManyRestaurantInputEnvelope_1.ScheduleCreateManyRestaurantInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", ScheduleCreateManyRestaurantInputEnvelope_1.ScheduleCreateManyRestaurantInputEnvelope)
], ScheduleUpdateManyWithoutRestaurantInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ScheduleWhereUniqueInput_1.ScheduleWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ScheduleUpdateManyWithoutRestaurantInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ScheduleWhereUniqueInput_1.ScheduleWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ScheduleUpdateManyWithoutRestaurantInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ScheduleWhereUniqueInput_1.ScheduleWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ScheduleUpdateManyWithoutRestaurantInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ScheduleWhereUniqueInput_1.ScheduleWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ScheduleUpdateManyWithoutRestaurantInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ScheduleUpdateWithWhereUniqueWithoutRestaurantInput_1.ScheduleUpdateWithWhereUniqueWithoutRestaurantInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ScheduleUpdateManyWithoutRestaurantInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ScheduleUpdateManyWithWhereWithoutRestaurantInput_1.ScheduleUpdateManyWithWhereWithoutRestaurantInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ScheduleUpdateManyWithoutRestaurantInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ScheduleScalarWhereInput_1.ScheduleScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ScheduleUpdateManyWithoutRestaurantInput.prototype, "deleteMany", void 0);
ScheduleUpdateManyWithoutRestaurantInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ScheduleUpdateManyWithoutRestaurantInput);
exports.ScheduleUpdateManyWithoutRestaurantInput = ScheduleUpdateManyWithoutRestaurantInput;
