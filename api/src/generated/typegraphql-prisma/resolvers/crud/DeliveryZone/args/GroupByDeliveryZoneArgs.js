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
exports.GroupByDeliveryZoneArgs = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const DeliveryZoneOrderByInput_1 = require("../../../inputs/DeliveryZoneOrderByInput");
const DeliveryZoneScalarWhereWithAggregatesInput_1 = require("../../../inputs/DeliveryZoneScalarWhereWithAggregatesInput");
const DeliveryZoneWhereInput_1 = require("../../../inputs/DeliveryZoneWhereInput");
const DeliveryZoneScalarFieldEnum_1 = require("../../../../enums/DeliveryZoneScalarFieldEnum");
let GroupByDeliveryZoneArgs = class GroupByDeliveryZoneArgs {
};
__decorate([
    TypeGraphQL.Field(_type => DeliveryZoneWhereInput_1.DeliveryZoneWhereInput, {
        nullable: true
    }),
    __metadata("design:type", DeliveryZoneWhereInput_1.DeliveryZoneWhereInput)
], GroupByDeliveryZoneArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DeliveryZoneOrderByInput_1.DeliveryZoneOrderByInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], GroupByDeliveryZoneArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DeliveryZoneScalarFieldEnum_1.DeliveryZoneScalarFieldEnum], {
        nullable: false
    }),
    __metadata("design:type", Array)
], GroupByDeliveryZoneArgs.prototype, "by", void 0);
__decorate([
    TypeGraphQL.Field(_type => DeliveryZoneScalarWhereWithAggregatesInput_1.DeliveryZoneScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    __metadata("design:type", DeliveryZoneScalarWhereWithAggregatesInput_1.DeliveryZoneScalarWhereWithAggregatesInput)
], GroupByDeliveryZoneArgs.prototype, "having", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], GroupByDeliveryZoneArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], GroupByDeliveryZoneArgs.prototype, "skip", void 0);
GroupByDeliveryZoneArgs = __decorate([
    TypeGraphQL.ArgsType()
], GroupByDeliveryZoneArgs);
exports.GroupByDeliveryZoneArgs = GroupByDeliveryZoneArgs;
