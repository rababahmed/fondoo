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
exports.DeliveryZoneCreateInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const RestaurantCreateNestedOneWithoutDeliveryZonesInput_1 = require("../inputs/RestaurantCreateNestedOneWithoutDeliveryZonesInput");
const DeliveryFee_1 = require("../../enums/DeliveryFee");
let DeliveryZoneCreateInput = class DeliveryZoneCreateInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], DeliveryZoneCreateInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], DeliveryZoneCreateInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], DeliveryZoneCreateInput.prototype, "zoneTitle", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], DeliveryZoneCreateInput.prototype, "zonePostCode", void 0);
__decorate([
    TypeGraphQL.Field(_type => DeliveryFee_1.DeliveryFee, {
        nullable: true
    }),
    __metadata("design:type", String)
], DeliveryZoneCreateInput.prototype, "deliveryFeeType", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], DeliveryZoneCreateInput.prototype, "deliveryCharge", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], DeliveryZoneCreateInput.prototype, "minDeliveryAmount", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], DeliveryZoneCreateInput.prototype, "minDeliveryRadius", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], DeliveryZoneCreateInput.prototype, "maxDeliveryRadius", void 0);
__decorate([
    TypeGraphQL.Field(_type => RestaurantCreateNestedOneWithoutDeliveryZonesInput_1.RestaurantCreateNestedOneWithoutDeliveryZonesInput, {
        nullable: true
    }),
    __metadata("design:type", RestaurantCreateNestedOneWithoutDeliveryZonesInput_1.RestaurantCreateNestedOneWithoutDeliveryZonesInput)
], DeliveryZoneCreateInput.prototype, "Restaurant", void 0);
DeliveryZoneCreateInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], DeliveryZoneCreateInput);
exports.DeliveryZoneCreateInput = DeliveryZoneCreateInput;
