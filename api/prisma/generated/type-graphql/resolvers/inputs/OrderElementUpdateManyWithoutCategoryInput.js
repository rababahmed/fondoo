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
exports.OrderElementUpdateManyWithoutCategoryInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const OrderElementCreateManyCategoryInputEnvelope_1 = require("../inputs/OrderElementCreateManyCategoryInputEnvelope");
const OrderElementCreateOrConnectWithoutCategoryInput_1 = require("../inputs/OrderElementCreateOrConnectWithoutCategoryInput");
const OrderElementCreateWithoutCategoryInput_1 = require("../inputs/OrderElementCreateWithoutCategoryInput");
const OrderElementScalarWhereInput_1 = require("../inputs/OrderElementScalarWhereInput");
const OrderElementUpdateManyWithWhereWithoutCategoryInput_1 = require("../inputs/OrderElementUpdateManyWithWhereWithoutCategoryInput");
const OrderElementUpdateWithWhereUniqueWithoutCategoryInput_1 = require("../inputs/OrderElementUpdateWithWhereUniqueWithoutCategoryInput");
const OrderElementUpsertWithWhereUniqueWithoutCategoryInput_1 = require("../inputs/OrderElementUpsertWithWhereUniqueWithoutCategoryInput");
const OrderElementWhereUniqueInput_1 = require("../inputs/OrderElementWhereUniqueInput");
let OrderElementUpdateManyWithoutCategoryInput = class OrderElementUpdateManyWithoutCategoryInput {
};
__decorate([
    TypeGraphQL.Field(_type => [OrderElementCreateWithoutCategoryInput_1.OrderElementCreateWithoutCategoryInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderElementUpdateManyWithoutCategoryInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderElementCreateOrConnectWithoutCategoryInput_1.OrderElementCreateOrConnectWithoutCategoryInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderElementUpdateManyWithoutCategoryInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderElementUpsertWithWhereUniqueWithoutCategoryInput_1.OrderElementUpsertWithWhereUniqueWithoutCategoryInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderElementUpdateManyWithoutCategoryInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderElementCreateManyCategoryInputEnvelope_1.OrderElementCreateManyCategoryInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", OrderElementCreateManyCategoryInputEnvelope_1.OrderElementCreateManyCategoryInputEnvelope)
], OrderElementUpdateManyWithoutCategoryInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderElementWhereUniqueInput_1.OrderElementWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderElementUpdateManyWithoutCategoryInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderElementWhereUniqueInput_1.OrderElementWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderElementUpdateManyWithoutCategoryInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderElementWhereUniqueInput_1.OrderElementWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderElementUpdateManyWithoutCategoryInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderElementWhereUniqueInput_1.OrderElementWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderElementUpdateManyWithoutCategoryInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderElementUpdateWithWhereUniqueWithoutCategoryInput_1.OrderElementUpdateWithWhereUniqueWithoutCategoryInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderElementUpdateManyWithoutCategoryInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderElementUpdateManyWithWhereWithoutCategoryInput_1.OrderElementUpdateManyWithWhereWithoutCategoryInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderElementUpdateManyWithoutCategoryInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderElementScalarWhereInput_1.OrderElementScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], OrderElementUpdateManyWithoutCategoryInput.prototype, "deleteMany", void 0);
OrderElementUpdateManyWithoutCategoryInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], OrderElementUpdateManyWithoutCategoryInput);
exports.OrderElementUpdateManyWithoutCategoryInput = OrderElementUpdateManyWithoutCategoryInput;
