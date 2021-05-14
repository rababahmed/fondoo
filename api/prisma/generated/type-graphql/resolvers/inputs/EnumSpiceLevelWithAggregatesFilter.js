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
exports.EnumSpiceLevelWithAggregatesFilter = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const NestedEnumSpiceLevelFilter_1 = require("../inputs/NestedEnumSpiceLevelFilter");
const NestedEnumSpiceLevelWithAggregatesFilter_1 = require("../inputs/NestedEnumSpiceLevelWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const SpiceLevel_1 = require("../../enums/SpiceLevel");
let EnumSpiceLevelWithAggregatesFilter = class EnumSpiceLevelWithAggregatesFilter {
};
__decorate([
    TypeGraphQL.Field(_type => SpiceLevel_1.SpiceLevel, {
        nullable: true
    }),
    __metadata("design:type", String)
], EnumSpiceLevelWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SpiceLevel_1.SpiceLevel], {
        nullable: true
    }),
    __metadata("design:type", Array)
], EnumSpiceLevelWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SpiceLevel_1.SpiceLevel], {
        nullable: true
    }),
    __metadata("design:type", Array)
], EnumSpiceLevelWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedEnumSpiceLevelWithAggregatesFilter_1.NestedEnumSpiceLevelWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedEnumSpiceLevelWithAggregatesFilter_1.NestedEnumSpiceLevelWithAggregatesFilter)
], EnumSpiceLevelWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumSpiceLevelWithAggregatesFilter.prototype, "count", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedEnumSpiceLevelFilter_1.NestedEnumSpiceLevelFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedEnumSpiceLevelFilter_1.NestedEnumSpiceLevelFilter)
], EnumSpiceLevelWithAggregatesFilter.prototype, "min", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedEnumSpiceLevelFilter_1.NestedEnumSpiceLevelFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedEnumSpiceLevelFilter_1.NestedEnumSpiceLevelFilter)
], EnumSpiceLevelWithAggregatesFilter.prototype, "max", void 0);
EnumSpiceLevelWithAggregatesFilter = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], EnumSpiceLevelWithAggregatesFilter);
exports.EnumSpiceLevelWithAggregatesFilter = EnumSpiceLevelWithAggregatesFilter;
