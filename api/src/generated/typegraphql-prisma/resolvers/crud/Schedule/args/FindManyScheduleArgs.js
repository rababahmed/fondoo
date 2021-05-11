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
exports.FindManyScheduleArgs = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ScheduleOrderByInput_1 = require("../../../inputs/ScheduleOrderByInput");
const ScheduleWhereInput_1 = require("../../../inputs/ScheduleWhereInput");
const ScheduleWhereUniqueInput_1 = require("../../../inputs/ScheduleWhereUniqueInput");
const ScheduleScalarFieldEnum_1 = require("../../../../enums/ScheduleScalarFieldEnum");
let FindManyScheduleArgs = class FindManyScheduleArgs {
};
__decorate([
    TypeGraphQL.Field(_type => ScheduleWhereInput_1.ScheduleWhereInput, {
        nullable: true
    }),
    __metadata("design:type", ScheduleWhereInput_1.ScheduleWhereInput)
], FindManyScheduleArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ScheduleOrderByInput_1.ScheduleOrderByInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], FindManyScheduleArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => ScheduleWhereUniqueInput_1.ScheduleWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", ScheduleWhereUniqueInput_1.ScheduleWhereUniqueInput)
], FindManyScheduleArgs.prototype, "cursor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], FindManyScheduleArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], FindManyScheduleArgs.prototype, "skip", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ScheduleScalarFieldEnum_1.ScheduleScalarFieldEnum], {
        nullable: true
    }),
    __metadata("design:type", Array)
], FindManyScheduleArgs.prototype, "distinct", void 0);
FindManyScheduleArgs = __decorate([
    TypeGraphQL.ArgsType()
], FindManyScheduleArgs);
exports.FindManyScheduleArgs = FindManyScheduleArgs;
