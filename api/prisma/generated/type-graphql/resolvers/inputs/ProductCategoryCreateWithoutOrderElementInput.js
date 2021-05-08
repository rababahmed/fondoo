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
exports.ProductCategoryCreateWithoutOrderElementInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ProductCreateNestedManyWithoutCategoryInput_1 = require("../inputs/ProductCreateNestedManyWithoutCategoryInput");
const RestaurantCreateNestedOneWithoutProductCategoryInput_1 = require("../inputs/RestaurantCreateNestedOneWithoutProductCategoryInput");
let ProductCategoryCreateWithoutOrderElementInput = class ProductCategoryCreateWithoutOrderElementInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], ProductCategoryCreateWithoutOrderElementInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], ProductCategoryCreateWithoutOrderElementInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], ProductCategoryCreateWithoutOrderElementInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], ProductCategoryCreateWithoutOrderElementInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], ProductCategoryCreateWithoutOrderElementInput.prototype, "image", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], ProductCategoryCreateWithoutOrderElementInput.prototype, "isActive", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], ProductCategoryCreateWithoutOrderElementInput.prototype, "isFeatured", void 0);
__decorate([
    TypeGraphQL.Field(_type => RestaurantCreateNestedOneWithoutProductCategoryInput_1.RestaurantCreateNestedOneWithoutProductCategoryInput, {
        nullable: false
    }),
    __metadata("design:type", RestaurantCreateNestedOneWithoutProductCategoryInput_1.RestaurantCreateNestedOneWithoutProductCategoryInput)
], ProductCategoryCreateWithoutOrderElementInput.prototype, "restaurants", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutCategoryInput_1.ProductCreateNestedManyWithoutCategoryInput, {
        nullable: true
    }),
    __metadata("design:type", ProductCreateNestedManyWithoutCategoryInput_1.ProductCreateNestedManyWithoutCategoryInput)
], ProductCategoryCreateWithoutOrderElementInput.prototype, "Product", void 0);
ProductCategoryCreateWithoutOrderElementInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ProductCategoryCreateWithoutOrderElementInput);
exports.ProductCategoryCreateWithoutOrderElementInput = ProductCategoryCreateWithoutOrderElementInput;
