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
exports.ProductCategoryUpdateManyWithoutRestaurantsInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ProductCategoryCreateManyRestaurantsInputEnvelope_1 = require("../inputs/ProductCategoryCreateManyRestaurantsInputEnvelope");
const ProductCategoryCreateOrConnectWithoutRestaurantsInput_1 = require("../inputs/ProductCategoryCreateOrConnectWithoutRestaurantsInput");
const ProductCategoryCreateWithoutRestaurantsInput_1 = require("../inputs/ProductCategoryCreateWithoutRestaurantsInput");
const ProductCategoryScalarWhereInput_1 = require("../inputs/ProductCategoryScalarWhereInput");
const ProductCategoryUpdateManyWithWhereWithoutRestaurantsInput_1 = require("../inputs/ProductCategoryUpdateManyWithWhereWithoutRestaurantsInput");
const ProductCategoryUpdateWithWhereUniqueWithoutRestaurantsInput_1 = require("../inputs/ProductCategoryUpdateWithWhereUniqueWithoutRestaurantsInput");
const ProductCategoryUpsertWithWhereUniqueWithoutRestaurantsInput_1 = require("../inputs/ProductCategoryUpsertWithWhereUniqueWithoutRestaurantsInput");
const ProductCategoryWhereUniqueInput_1 = require("../inputs/ProductCategoryWhereUniqueInput");
let ProductCategoryUpdateManyWithoutRestaurantsInput = class ProductCategoryUpdateManyWithoutRestaurantsInput {
};
__decorate([
    TypeGraphQL.Field(_type => [ProductCategoryCreateWithoutRestaurantsInput_1.ProductCategoryCreateWithoutRestaurantsInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ProductCategoryUpdateManyWithoutRestaurantsInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProductCategoryCreateOrConnectWithoutRestaurantsInput_1.ProductCategoryCreateOrConnectWithoutRestaurantsInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ProductCategoryUpdateManyWithoutRestaurantsInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProductCategoryUpsertWithWhereUniqueWithoutRestaurantsInput_1.ProductCategoryUpsertWithWhereUniqueWithoutRestaurantsInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ProductCategoryUpdateManyWithoutRestaurantsInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductCategoryCreateManyRestaurantsInputEnvelope_1.ProductCategoryCreateManyRestaurantsInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", ProductCategoryCreateManyRestaurantsInputEnvelope_1.ProductCategoryCreateManyRestaurantsInputEnvelope)
], ProductCategoryUpdateManyWithoutRestaurantsInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProductCategoryWhereUniqueInput_1.ProductCategoryWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ProductCategoryUpdateManyWithoutRestaurantsInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProductCategoryWhereUniqueInput_1.ProductCategoryWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ProductCategoryUpdateManyWithoutRestaurantsInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProductCategoryWhereUniqueInput_1.ProductCategoryWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ProductCategoryUpdateManyWithoutRestaurantsInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProductCategoryWhereUniqueInput_1.ProductCategoryWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ProductCategoryUpdateManyWithoutRestaurantsInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProductCategoryUpdateWithWhereUniqueWithoutRestaurantsInput_1.ProductCategoryUpdateWithWhereUniqueWithoutRestaurantsInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ProductCategoryUpdateManyWithoutRestaurantsInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProductCategoryUpdateManyWithWhereWithoutRestaurantsInput_1.ProductCategoryUpdateManyWithWhereWithoutRestaurantsInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ProductCategoryUpdateManyWithoutRestaurantsInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProductCategoryScalarWhereInput_1.ProductCategoryScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ProductCategoryUpdateManyWithoutRestaurantsInput.prototype, "deleteMany", void 0);
ProductCategoryUpdateManyWithoutRestaurantsInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ProductCategoryUpdateManyWithoutRestaurantsInput);
exports.ProductCategoryUpdateManyWithoutRestaurantsInput = ProductCategoryUpdateManyWithoutRestaurantsInput;
