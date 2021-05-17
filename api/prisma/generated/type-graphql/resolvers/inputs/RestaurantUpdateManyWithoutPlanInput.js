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
exports.RestaurantUpdateManyWithoutPlanInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const RestaurantCreateManyPlanInputEnvelope_1 = require("../inputs/RestaurantCreateManyPlanInputEnvelope");
const RestaurantCreateOrConnectWithoutPlanInput_1 = require("../inputs/RestaurantCreateOrConnectWithoutPlanInput");
const RestaurantCreateWithoutPlanInput_1 = require("../inputs/RestaurantCreateWithoutPlanInput");
const RestaurantScalarWhereInput_1 = require("../inputs/RestaurantScalarWhereInput");
const RestaurantUpdateManyWithWhereWithoutPlanInput_1 = require("../inputs/RestaurantUpdateManyWithWhereWithoutPlanInput");
const RestaurantUpdateWithWhereUniqueWithoutPlanInput_1 = require("../inputs/RestaurantUpdateWithWhereUniqueWithoutPlanInput");
const RestaurantUpsertWithWhereUniqueWithoutPlanInput_1 = require("../inputs/RestaurantUpsertWithWhereUniqueWithoutPlanInput");
const RestaurantWhereUniqueInput_1 = require("../inputs/RestaurantWhereUniqueInput");
let RestaurantUpdateManyWithoutPlanInput = class RestaurantUpdateManyWithoutPlanInput {
};
__decorate([
    TypeGraphQL.Field(_type => [RestaurantCreateWithoutPlanInput_1.RestaurantCreateWithoutPlanInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RestaurantUpdateManyWithoutPlanInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RestaurantCreateOrConnectWithoutPlanInput_1.RestaurantCreateOrConnectWithoutPlanInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RestaurantUpdateManyWithoutPlanInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RestaurantUpsertWithWhereUniqueWithoutPlanInput_1.RestaurantUpsertWithWhereUniqueWithoutPlanInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RestaurantUpdateManyWithoutPlanInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => RestaurantCreateManyPlanInputEnvelope_1.RestaurantCreateManyPlanInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", RestaurantCreateManyPlanInputEnvelope_1.RestaurantCreateManyPlanInputEnvelope)
], RestaurantUpdateManyWithoutPlanInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RestaurantWhereUniqueInput_1.RestaurantWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RestaurantUpdateManyWithoutPlanInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RestaurantWhereUniqueInput_1.RestaurantWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RestaurantUpdateManyWithoutPlanInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RestaurantWhereUniqueInput_1.RestaurantWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RestaurantUpdateManyWithoutPlanInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RestaurantWhereUniqueInput_1.RestaurantWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RestaurantUpdateManyWithoutPlanInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RestaurantUpdateWithWhereUniqueWithoutPlanInput_1.RestaurantUpdateWithWhereUniqueWithoutPlanInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RestaurantUpdateManyWithoutPlanInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RestaurantUpdateManyWithWhereWithoutPlanInput_1.RestaurantUpdateManyWithWhereWithoutPlanInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RestaurantUpdateManyWithoutPlanInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RestaurantScalarWhereInput_1.RestaurantScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RestaurantUpdateManyWithoutPlanInput.prototype, "deleteMany", void 0);
RestaurantUpdateManyWithoutPlanInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], RestaurantUpdateManyWithoutPlanInput);
exports.RestaurantUpdateManyWithoutPlanInput = RestaurantUpdateManyWithoutPlanInput;
