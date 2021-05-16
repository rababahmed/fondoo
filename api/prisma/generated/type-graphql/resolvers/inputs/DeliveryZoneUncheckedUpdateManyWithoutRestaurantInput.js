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
exports.DeliveryZoneUncheckedUpdateManyWithoutRestaurantInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const DeliveryZoneCreateManyRestaurantInputEnvelope_1 = require("../inputs/DeliveryZoneCreateManyRestaurantInputEnvelope");
const DeliveryZoneCreateOrConnectWithoutRestaurantInput_1 = require("../inputs/DeliveryZoneCreateOrConnectWithoutRestaurantInput");
const DeliveryZoneCreateWithoutRestaurantInput_1 = require("../inputs/DeliveryZoneCreateWithoutRestaurantInput");
const DeliveryZoneScalarWhereInput_1 = require("../inputs/DeliveryZoneScalarWhereInput");
const DeliveryZoneUpdateManyWithWhereWithoutRestaurantInput_1 = require("../inputs/DeliveryZoneUpdateManyWithWhereWithoutRestaurantInput");
const DeliveryZoneUpdateWithWhereUniqueWithoutRestaurantInput_1 = require("../inputs/DeliveryZoneUpdateWithWhereUniqueWithoutRestaurantInput");
const DeliveryZoneUpsertWithWhereUniqueWithoutRestaurantInput_1 = require("../inputs/DeliveryZoneUpsertWithWhereUniqueWithoutRestaurantInput");
const DeliveryZoneWhereUniqueInput_1 = require("../inputs/DeliveryZoneWhereUniqueInput");
let DeliveryZoneUncheckedUpdateManyWithoutRestaurantInput = class DeliveryZoneUncheckedUpdateManyWithoutRestaurantInput {
};
__decorate([
    TypeGraphQL.Field(_type => [DeliveryZoneCreateWithoutRestaurantInput_1.DeliveryZoneCreateWithoutRestaurantInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DeliveryZoneUncheckedUpdateManyWithoutRestaurantInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DeliveryZoneCreateOrConnectWithoutRestaurantInput_1.DeliveryZoneCreateOrConnectWithoutRestaurantInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DeliveryZoneUncheckedUpdateManyWithoutRestaurantInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DeliveryZoneUpsertWithWhereUniqueWithoutRestaurantInput_1.DeliveryZoneUpsertWithWhereUniqueWithoutRestaurantInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DeliveryZoneUncheckedUpdateManyWithoutRestaurantInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => DeliveryZoneCreateManyRestaurantInputEnvelope_1.DeliveryZoneCreateManyRestaurantInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", DeliveryZoneCreateManyRestaurantInputEnvelope_1.DeliveryZoneCreateManyRestaurantInputEnvelope)
], DeliveryZoneUncheckedUpdateManyWithoutRestaurantInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DeliveryZoneWhereUniqueInput_1.DeliveryZoneWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DeliveryZoneUncheckedUpdateManyWithoutRestaurantInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DeliveryZoneWhereUniqueInput_1.DeliveryZoneWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DeliveryZoneUncheckedUpdateManyWithoutRestaurantInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DeliveryZoneWhereUniqueInput_1.DeliveryZoneWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DeliveryZoneUncheckedUpdateManyWithoutRestaurantInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DeliveryZoneWhereUniqueInput_1.DeliveryZoneWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DeliveryZoneUncheckedUpdateManyWithoutRestaurantInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DeliveryZoneUpdateWithWhereUniqueWithoutRestaurantInput_1.DeliveryZoneUpdateWithWhereUniqueWithoutRestaurantInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DeliveryZoneUncheckedUpdateManyWithoutRestaurantInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DeliveryZoneUpdateManyWithWhereWithoutRestaurantInput_1.DeliveryZoneUpdateManyWithWhereWithoutRestaurantInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DeliveryZoneUncheckedUpdateManyWithoutRestaurantInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DeliveryZoneScalarWhereInput_1.DeliveryZoneScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DeliveryZoneUncheckedUpdateManyWithoutRestaurantInput.prototype, "deleteMany", void 0);
DeliveryZoneUncheckedUpdateManyWithoutRestaurantInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], DeliveryZoneUncheckedUpdateManyWithoutRestaurantInput);
exports.DeliveryZoneUncheckedUpdateManyWithoutRestaurantInput = DeliveryZoneUncheckedUpdateManyWithoutRestaurantInput;
