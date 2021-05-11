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
exports.ProductUpdateManyWithoutProductCategoryInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ProductCreateManyProductCategoryInputEnvelope_1 = require("../inputs/ProductCreateManyProductCategoryInputEnvelope");
const ProductCreateOrConnectWithoutProductCategoryInput_1 = require("../inputs/ProductCreateOrConnectWithoutProductCategoryInput");
const ProductCreateWithoutProductCategoryInput_1 = require("../inputs/ProductCreateWithoutProductCategoryInput");
const ProductScalarWhereInput_1 = require("../inputs/ProductScalarWhereInput");
const ProductUpdateManyWithWhereWithoutProductCategoryInput_1 = require("../inputs/ProductUpdateManyWithWhereWithoutProductCategoryInput");
const ProductUpdateWithWhereUniqueWithoutProductCategoryInput_1 = require("../inputs/ProductUpdateWithWhereUniqueWithoutProductCategoryInput");
const ProductUpsertWithWhereUniqueWithoutProductCategoryInput_1 = require("../inputs/ProductUpsertWithWhereUniqueWithoutProductCategoryInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpdateManyWithoutProductCategoryInput = class ProductUpdateManyWithoutProductCategoryInput {
};
__decorate([
    TypeGraphQL.Field(_type => [ProductCreateWithoutProductCategoryInput_1.ProductCreateWithoutProductCategoryInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ProductUpdateManyWithoutProductCategoryInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutProductCategoryInput_1.ProductCreateOrConnectWithoutProductCategoryInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ProductUpdateManyWithoutProductCategoryInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProductUpsertWithWhereUniqueWithoutProductCategoryInput_1.ProductUpsertWithWhereUniqueWithoutProductCategoryInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ProductUpdateManyWithoutProductCategoryInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductCreateManyProductCategoryInputEnvelope_1.ProductCreateManyProductCategoryInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", ProductCreateManyProductCategoryInputEnvelope_1.ProductCreateManyProductCategoryInputEnvelope)
], ProductUpdateManyWithoutProductCategoryInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ProductUpdateManyWithoutProductCategoryInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ProductUpdateManyWithoutProductCategoryInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ProductUpdateManyWithoutProductCategoryInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ProductUpdateManyWithoutProductCategoryInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProductUpdateWithWhereUniqueWithoutProductCategoryInput_1.ProductUpdateWithWhereUniqueWithoutProductCategoryInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ProductUpdateManyWithoutProductCategoryInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProductUpdateManyWithWhereWithoutProductCategoryInput_1.ProductUpdateManyWithWhereWithoutProductCategoryInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ProductUpdateManyWithoutProductCategoryInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProductScalarWhereInput_1.ProductScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ProductUpdateManyWithoutProductCategoryInput.prototype, "deleteMany", void 0);
ProductUpdateManyWithoutProductCategoryInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ProductUpdateManyWithoutProductCategoryInput);
exports.ProductUpdateManyWithoutProductCategoryInput = ProductUpdateManyWithoutProductCategoryInput;
