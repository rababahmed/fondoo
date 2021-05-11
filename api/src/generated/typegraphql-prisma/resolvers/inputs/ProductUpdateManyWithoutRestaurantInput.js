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
exports.ProductUpdateManyWithoutRestaurantInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ProductCreateManyRestaurantInputEnvelope_1 = require("../inputs/ProductCreateManyRestaurantInputEnvelope");
const ProductCreateOrConnectWithoutRestaurantInput_1 = require("../inputs/ProductCreateOrConnectWithoutRestaurantInput");
const ProductCreateWithoutRestaurantInput_1 = require("../inputs/ProductCreateWithoutRestaurantInput");
const ProductScalarWhereInput_1 = require("../inputs/ProductScalarWhereInput");
const ProductUpdateManyWithWhereWithoutRestaurantInput_1 = require("../inputs/ProductUpdateManyWithWhereWithoutRestaurantInput");
const ProductUpdateWithWhereUniqueWithoutRestaurantInput_1 = require("../inputs/ProductUpdateWithWhereUniqueWithoutRestaurantInput");
const ProductUpsertWithWhereUniqueWithoutRestaurantInput_1 = require("../inputs/ProductUpsertWithWhereUniqueWithoutRestaurantInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpdateManyWithoutRestaurantInput = class ProductUpdateManyWithoutRestaurantInput {
};
__decorate([
    TypeGraphQL.Field(_type => [ProductCreateWithoutRestaurantInput_1.ProductCreateWithoutRestaurantInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ProductUpdateManyWithoutRestaurantInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutRestaurantInput_1.ProductCreateOrConnectWithoutRestaurantInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ProductUpdateManyWithoutRestaurantInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProductUpsertWithWhereUniqueWithoutRestaurantInput_1.ProductUpsertWithWhereUniqueWithoutRestaurantInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ProductUpdateManyWithoutRestaurantInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductCreateManyRestaurantInputEnvelope_1.ProductCreateManyRestaurantInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", ProductCreateManyRestaurantInputEnvelope_1.ProductCreateManyRestaurantInputEnvelope)
], ProductUpdateManyWithoutRestaurantInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ProductUpdateManyWithoutRestaurantInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ProductUpdateManyWithoutRestaurantInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ProductUpdateManyWithoutRestaurantInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ProductUpdateManyWithoutRestaurantInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProductUpdateWithWhereUniqueWithoutRestaurantInput_1.ProductUpdateWithWhereUniqueWithoutRestaurantInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ProductUpdateManyWithoutRestaurantInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProductUpdateManyWithWhereWithoutRestaurantInput_1.ProductUpdateManyWithWhereWithoutRestaurantInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ProductUpdateManyWithoutRestaurantInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProductScalarWhereInput_1.ProductScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ProductUpdateManyWithoutRestaurantInput.prototype, "deleteMany", void 0);
ProductUpdateManyWithoutRestaurantInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ProductUpdateManyWithoutRestaurantInput);
exports.ProductUpdateManyWithoutRestaurantInput = ProductUpdateManyWithoutRestaurantInput;
