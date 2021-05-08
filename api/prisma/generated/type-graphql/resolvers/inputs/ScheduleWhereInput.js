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
var ScheduleWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleWhereInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const RestaurantRelationFilter_1 = require("../inputs/RestaurantRelationFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let ScheduleWhereInput = ScheduleWhereInput_1 = class ScheduleWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [ScheduleWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ScheduleWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ScheduleWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ScheduleWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ScheduleWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ScheduleWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    __metadata("design:type", IntFilter_1.IntFilter)
], ScheduleWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ScheduleWhereInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ScheduleWhereInput.prototype, "openingTime", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ScheduleWhereInput.prototype, "closingTime", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], ScheduleWhereInput.prototype, "minDeliveryAmount", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ScheduleWhereInput.prototype, "deliveryTime", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ScheduleWhereInput.prototype, "takeawayTime", void 0);
__decorate([
    TypeGraphQL.Field(_type => RestaurantRelationFilter_1.RestaurantRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", RestaurantRelationFilter_1.RestaurantRelationFilter)
], ScheduleWhereInput.prototype, "Restaurant", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ScheduleWhereInput.prototype, "restaurantId", void 0);
ScheduleWhereInput = ScheduleWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ScheduleWhereInput);
exports.ScheduleWhereInput = ScheduleWhereInput;
