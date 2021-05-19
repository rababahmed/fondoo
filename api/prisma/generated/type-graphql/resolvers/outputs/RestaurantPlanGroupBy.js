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
exports.RestaurantPlanGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const RestaurantPlanAvgAggregate_1 = require("../outputs/RestaurantPlanAvgAggregate");
const RestaurantPlanCountAggregate_1 = require("../outputs/RestaurantPlanCountAggregate");
const RestaurantPlanMaxAggregate_1 = require("../outputs/RestaurantPlanMaxAggregate");
const RestaurantPlanMinAggregate_1 = require("../outputs/RestaurantPlanMinAggregate");
const RestaurantPlanSumAggregate_1 = require("../outputs/RestaurantPlanSumAggregate");
let RestaurantPlanGroupBy = class RestaurantPlanGroupBy {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], RestaurantPlanGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], RestaurantPlanGroupBy.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    __metadata("design:type", Number)
], RestaurantPlanGroupBy.prototype, "price", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    __metadata("design:type", Boolean)
], RestaurantPlanGroupBy.prototype, "isActive", void 0);
__decorate([
    TypeGraphQL.Field(_type => RestaurantPlanCountAggregate_1.RestaurantPlanCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", RestaurantPlanCountAggregate_1.RestaurantPlanCountAggregate)
], RestaurantPlanGroupBy.prototype, "count", void 0);
__decorate([
    TypeGraphQL.Field(_type => RestaurantPlanAvgAggregate_1.RestaurantPlanAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", RestaurantPlanAvgAggregate_1.RestaurantPlanAvgAggregate)
], RestaurantPlanGroupBy.prototype, "avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => RestaurantPlanSumAggregate_1.RestaurantPlanSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", RestaurantPlanSumAggregate_1.RestaurantPlanSumAggregate)
], RestaurantPlanGroupBy.prototype, "sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => RestaurantPlanMinAggregate_1.RestaurantPlanMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", RestaurantPlanMinAggregate_1.RestaurantPlanMinAggregate)
], RestaurantPlanGroupBy.prototype, "min", void 0);
__decorate([
    TypeGraphQL.Field(_type => RestaurantPlanMaxAggregate_1.RestaurantPlanMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", RestaurantPlanMaxAggregate_1.RestaurantPlanMaxAggregate)
], RestaurantPlanGroupBy.prototype, "max", void 0);
RestaurantPlanGroupBy = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], RestaurantPlanGroupBy);
exports.RestaurantPlanGroupBy = RestaurantPlanGroupBy;