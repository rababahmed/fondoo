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
var RestaurantPlanWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantPlanWhereInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const BoolFilter_1 = require("../inputs/BoolFilter");
const FloatFilter_1 = require("../inputs/FloatFilter");
const RestaurantListRelationFilter_1 = require("../inputs/RestaurantListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let RestaurantPlanWhereInput = RestaurantPlanWhereInput_1 = class RestaurantPlanWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [RestaurantPlanWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RestaurantPlanWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RestaurantPlanWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RestaurantPlanWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RestaurantPlanWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RestaurantPlanWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], RestaurantPlanWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], RestaurantPlanWhereInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    __metadata("design:type", FloatFilter_1.FloatFilter)
], RestaurantPlanWhereInput.prototype, "price", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolFilter_1.BoolFilter)
], RestaurantPlanWhereInput.prototype, "isActive", void 0);
__decorate([
    TypeGraphQL.Field(_type => RestaurantListRelationFilter_1.RestaurantListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", RestaurantListRelationFilter_1.RestaurantListRelationFilter)
], RestaurantPlanWhereInput.prototype, "restaurants", void 0);
RestaurantPlanWhereInput = RestaurantPlanWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], RestaurantPlanWhereInput);
exports.RestaurantPlanWhereInput = RestaurantPlanWhereInput;
