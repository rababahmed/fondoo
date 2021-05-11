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
exports.AggregateSchedule = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ScheduleAvgAggregate_1 = require("../outputs/ScheduleAvgAggregate");
const ScheduleCountAggregate_1 = require("../outputs/ScheduleCountAggregate");
const ScheduleMaxAggregate_1 = require("../outputs/ScheduleMaxAggregate");
const ScheduleMinAggregate_1 = require("../outputs/ScheduleMinAggregate");
const ScheduleSumAggregate_1 = require("../outputs/ScheduleSumAggregate");
let AggregateSchedule = class AggregateSchedule {
};
__decorate([
    TypeGraphQL.Field(_type => ScheduleCountAggregate_1.ScheduleCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", ScheduleCountAggregate_1.ScheduleCountAggregate)
], AggregateSchedule.prototype, "count", void 0);
__decorate([
    TypeGraphQL.Field(_type => ScheduleAvgAggregate_1.ScheduleAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", ScheduleAvgAggregate_1.ScheduleAvgAggregate)
], AggregateSchedule.prototype, "avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => ScheduleSumAggregate_1.ScheduleSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", ScheduleSumAggregate_1.ScheduleSumAggregate)
], AggregateSchedule.prototype, "sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => ScheduleMinAggregate_1.ScheduleMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", ScheduleMinAggregate_1.ScheduleMinAggregate)
], AggregateSchedule.prototype, "min", void 0);
__decorate([
    TypeGraphQL.Field(_type => ScheduleMaxAggregate_1.ScheduleMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", ScheduleMaxAggregate_1.ScheduleMaxAggregate)
], AggregateSchedule.prototype, "max", void 0);
AggregateSchedule = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], AggregateSchedule);
exports.AggregateSchedule = AggregateSchedule;
