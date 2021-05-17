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
exports.DeliveryZoneGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const DeliveryZoneAvgAggregate_1 = require("../outputs/DeliveryZoneAvgAggregate");
const DeliveryZoneCountAggregate_1 = require("../outputs/DeliveryZoneCountAggregate");
const DeliveryZoneMaxAggregate_1 = require("../outputs/DeliveryZoneMaxAggregate");
const DeliveryZoneMinAggregate_1 = require("../outputs/DeliveryZoneMinAggregate");
const DeliveryZoneSumAggregate_1 = require("../outputs/DeliveryZoneSumAggregate");
const DeliveryFee_1 = require("../../enums/DeliveryFee");
let DeliveryZoneGroupBy = class DeliveryZoneGroupBy {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], DeliveryZoneGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], DeliveryZoneGroupBy.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], DeliveryZoneGroupBy.prototype, "zoneTitle", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], DeliveryZoneGroupBy.prototype, "zonePostCode", void 0);
__decorate([
    TypeGraphQL.Field(_type => DeliveryFee_1.DeliveryFee, {
        nullable: false
    }),
    __metadata("design:type", String)
], DeliveryZoneGroupBy.prototype, "deliveryFeeType", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], DeliveryZoneGroupBy.prototype, "deliveryCharge", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], DeliveryZoneGroupBy.prototype, "minDeliveryAmount", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], DeliveryZoneGroupBy.prototype, "minDeliveryRadius", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], DeliveryZoneGroupBy.prototype, "maxDeliveryRadius", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], DeliveryZoneGroupBy.prototype, "restaurantId", void 0);
__decorate([
    TypeGraphQL.Field(_type => DeliveryZoneCountAggregate_1.DeliveryZoneCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", DeliveryZoneCountAggregate_1.DeliveryZoneCountAggregate)
], DeliveryZoneGroupBy.prototype, "count", void 0);
__decorate([
    TypeGraphQL.Field(_type => DeliveryZoneAvgAggregate_1.DeliveryZoneAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", DeliveryZoneAvgAggregate_1.DeliveryZoneAvgAggregate)
], DeliveryZoneGroupBy.prototype, "avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => DeliveryZoneSumAggregate_1.DeliveryZoneSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", DeliveryZoneSumAggregate_1.DeliveryZoneSumAggregate)
], DeliveryZoneGroupBy.prototype, "sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => DeliveryZoneMinAggregate_1.DeliveryZoneMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", DeliveryZoneMinAggregate_1.DeliveryZoneMinAggregate)
], DeliveryZoneGroupBy.prototype, "min", void 0);
__decorate([
    TypeGraphQL.Field(_type => DeliveryZoneMaxAggregate_1.DeliveryZoneMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", DeliveryZoneMaxAggregate_1.DeliveryZoneMaxAggregate)
], DeliveryZoneGroupBy.prototype, "max", void 0);
DeliveryZoneGroupBy = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], DeliveryZoneGroupBy);
exports.DeliveryZoneGroupBy = DeliveryZoneGroupBy;
