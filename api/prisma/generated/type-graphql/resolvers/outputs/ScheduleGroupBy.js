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
exports.ScheduleGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ScheduleAvgAggregate_1 = require("../outputs/ScheduleAvgAggregate");
const ScheduleCountAggregate_1 = require("../outputs/ScheduleCountAggregate");
const ScheduleMaxAggregate_1 = require("../outputs/ScheduleMaxAggregate");
const ScheduleMinAggregate_1 = require("../outputs/ScheduleMinAggregate");
const ScheduleSumAggregate_1 = require("../outputs/ScheduleSumAggregate");
let ScheduleGroupBy = class ScheduleGroupBy {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], ScheduleGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], ScheduleGroupBy.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], ScheduleGroupBy.prototype, "day", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], ScheduleGroupBy.prototype, "openingTime", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], ScheduleGroupBy.prototype, "closingTime", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], ScheduleGroupBy.prototype, "minDeliveryAmount", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], ScheduleGroupBy.prototype, "deliveryTime", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], ScheduleGroupBy.prototype, "takeawayTime", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], ScheduleGroupBy.prototype, "restaurantId", void 0);
__decorate([
    TypeGraphQL.Field(_type => ScheduleCountAggregate_1.ScheduleCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", ScheduleCountAggregate_1.ScheduleCountAggregate)
], ScheduleGroupBy.prototype, "count", void 0);
__decorate([
    TypeGraphQL.Field(_type => ScheduleAvgAggregate_1.ScheduleAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", ScheduleAvgAggregate_1.ScheduleAvgAggregate)
], ScheduleGroupBy.prototype, "avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => ScheduleSumAggregate_1.ScheduleSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", ScheduleSumAggregate_1.ScheduleSumAggregate)
], ScheduleGroupBy.prototype, "sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => ScheduleMinAggregate_1.ScheduleMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", ScheduleMinAggregate_1.ScheduleMinAggregate)
], ScheduleGroupBy.prototype, "min", void 0);
__decorate([
    TypeGraphQL.Field(_type => ScheduleMaxAggregate_1.ScheduleMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", ScheduleMaxAggregate_1.ScheduleMaxAggregate)
], ScheduleGroupBy.prototype, "max", void 0);
ScheduleGroupBy = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], ScheduleGroupBy);
exports.ScheduleGroupBy = ScheduleGroupBy;
