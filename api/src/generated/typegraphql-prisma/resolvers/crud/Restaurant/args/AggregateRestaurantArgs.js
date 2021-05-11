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
exports.AggregateRestaurantArgs = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const RestaurantOrderByInput_1 = require("../../../inputs/RestaurantOrderByInput");
const RestaurantWhereInput_1 = require("../../../inputs/RestaurantWhereInput");
const RestaurantWhereUniqueInput_1 = require("../../../inputs/RestaurantWhereUniqueInput");
let AggregateRestaurantArgs = class AggregateRestaurantArgs {
};
__decorate([
    TypeGraphQL.Field(_type => RestaurantWhereInput_1.RestaurantWhereInput, {
        nullable: true
    }),
    __metadata("design:type", RestaurantWhereInput_1.RestaurantWhereInput)
], AggregateRestaurantArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RestaurantOrderByInput_1.RestaurantOrderByInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AggregateRestaurantArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => RestaurantWhereUniqueInput_1.RestaurantWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", RestaurantWhereUniqueInput_1.RestaurantWhereUniqueInput)
], AggregateRestaurantArgs.prototype, "cursor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], AggregateRestaurantArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], AggregateRestaurantArgs.prototype, "skip", void 0);
AggregateRestaurantArgs = __decorate([
    TypeGraphQL.ArgsType()
], AggregateRestaurantArgs);
exports.AggregateRestaurantArgs = AggregateRestaurantArgs;
