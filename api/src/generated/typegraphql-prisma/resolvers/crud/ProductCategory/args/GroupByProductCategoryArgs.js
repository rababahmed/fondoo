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
exports.GroupByProductCategoryArgs = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ProductCategoryOrderByInput_1 = require("../../../inputs/ProductCategoryOrderByInput");
const ProductCategoryScalarWhereWithAggregatesInput_1 = require("../../../inputs/ProductCategoryScalarWhereWithAggregatesInput");
const ProductCategoryWhereInput_1 = require("../../../inputs/ProductCategoryWhereInput");
const ProductCategoryScalarFieldEnum_1 = require("../../../../enums/ProductCategoryScalarFieldEnum");
let GroupByProductCategoryArgs = class GroupByProductCategoryArgs {
};
__decorate([
    TypeGraphQL.Field(_type => ProductCategoryWhereInput_1.ProductCategoryWhereInput, {
        nullable: true
    }),
    __metadata("design:type", ProductCategoryWhereInput_1.ProductCategoryWhereInput)
], GroupByProductCategoryArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProductCategoryOrderByInput_1.ProductCategoryOrderByInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], GroupByProductCategoryArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProductCategoryScalarFieldEnum_1.ProductCategoryScalarFieldEnum], {
        nullable: false
    }),
    __metadata("design:type", Array)
], GroupByProductCategoryArgs.prototype, "by", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductCategoryScalarWhereWithAggregatesInput_1.ProductCategoryScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    __metadata("design:type", ProductCategoryScalarWhereWithAggregatesInput_1.ProductCategoryScalarWhereWithAggregatesInput)
], GroupByProductCategoryArgs.prototype, "having", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], GroupByProductCategoryArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], GroupByProductCategoryArgs.prototype, "skip", void 0);
GroupByProductCategoryArgs = __decorate([
    TypeGraphQL.ArgsType()
], GroupByProductCategoryArgs);
exports.GroupByProductCategoryArgs = GroupByProductCategoryArgs;
