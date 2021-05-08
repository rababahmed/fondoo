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
exports.FindFirstOrderElementArgs = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const OrderElementOrderByInput_1 = require("../../../inputs/OrderElementOrderByInput");
const OrderElementWhereInput_1 = require("../../../inputs/OrderElementWhereInput");
const OrderElementWhereUniqueInput_1 = require("../../../inputs/OrderElementWhereUniqueInput");
const OrderElementScalarFieldEnum_1 = require("../../../../enums/OrderElementScalarFieldEnum");
let FindFirstOrderElementArgs = class FindFirstOrderElementArgs {
};
__decorate([
    TypeGraphQL.Field(_type => OrderElementWhereInput_1.OrderElementWhereInput, {
        nullable: true
    }),
    __metadata("design:type", OrderElementWhereInput_1.OrderElementWhereInput)
], FindFirstOrderElementArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderElementOrderByInput_1.OrderElementOrderByInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], FindFirstOrderElementArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderElementWhereUniqueInput_1.OrderElementWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", OrderElementWhereUniqueInput_1.OrderElementWhereUniqueInput)
], FindFirstOrderElementArgs.prototype, "cursor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], FindFirstOrderElementArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], FindFirstOrderElementArgs.prototype, "skip", void 0);
__decorate([
    TypeGraphQL.Field(_type => [OrderElementScalarFieldEnum_1.OrderElementScalarFieldEnum], {
        nullable: true
    }),
    __metadata("design:type", Array)
], FindFirstOrderElementArgs.prototype, "distinct", void 0);
FindFirstOrderElementArgs = __decorate([
    TypeGraphQL.ArgsType()
], FindFirstOrderElementArgs);
exports.FindFirstOrderElementArgs = FindFirstOrderElementArgs;
