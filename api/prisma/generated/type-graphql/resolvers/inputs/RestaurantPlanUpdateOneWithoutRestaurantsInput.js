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
exports.RestaurantPlanUpdateOneWithoutRestaurantsInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const RestaurantPlanCreateOrConnectWithoutRestaurantsInput_1 = require("../inputs/RestaurantPlanCreateOrConnectWithoutRestaurantsInput");
const RestaurantPlanCreateWithoutRestaurantsInput_1 = require("../inputs/RestaurantPlanCreateWithoutRestaurantsInput");
const RestaurantPlanUpdateWithoutRestaurantsInput_1 = require("../inputs/RestaurantPlanUpdateWithoutRestaurantsInput");
const RestaurantPlanUpsertWithoutRestaurantsInput_1 = require("../inputs/RestaurantPlanUpsertWithoutRestaurantsInput");
const RestaurantPlanWhereUniqueInput_1 = require("../inputs/RestaurantPlanWhereUniqueInput");
let RestaurantPlanUpdateOneWithoutRestaurantsInput = class RestaurantPlanUpdateOneWithoutRestaurantsInput {
};
__decorate([
    TypeGraphQL.Field(_type => RestaurantPlanCreateWithoutRestaurantsInput_1.RestaurantPlanCreateWithoutRestaurantsInput, {
        nullable: true
    }),
    __metadata("design:type", RestaurantPlanCreateWithoutRestaurantsInput_1.RestaurantPlanCreateWithoutRestaurantsInput)
], RestaurantPlanUpdateOneWithoutRestaurantsInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => RestaurantPlanCreateOrConnectWithoutRestaurantsInput_1.RestaurantPlanCreateOrConnectWithoutRestaurantsInput, {
        nullable: true
    }),
    __metadata("design:type", RestaurantPlanCreateOrConnectWithoutRestaurantsInput_1.RestaurantPlanCreateOrConnectWithoutRestaurantsInput)
], RestaurantPlanUpdateOneWithoutRestaurantsInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => RestaurantPlanUpsertWithoutRestaurantsInput_1.RestaurantPlanUpsertWithoutRestaurantsInput, {
        nullable: true
    }),
    __metadata("design:type", RestaurantPlanUpsertWithoutRestaurantsInput_1.RestaurantPlanUpsertWithoutRestaurantsInput)
], RestaurantPlanUpdateOneWithoutRestaurantsInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => RestaurantPlanWhereUniqueInput_1.RestaurantPlanWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", RestaurantPlanWhereUniqueInput_1.RestaurantPlanWhereUniqueInput)
], RestaurantPlanUpdateOneWithoutRestaurantsInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], RestaurantPlanUpdateOneWithoutRestaurantsInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], RestaurantPlanUpdateOneWithoutRestaurantsInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => RestaurantPlanUpdateWithoutRestaurantsInput_1.RestaurantPlanUpdateWithoutRestaurantsInput, {
        nullable: true
    }),
    __metadata("design:type", RestaurantPlanUpdateWithoutRestaurantsInput_1.RestaurantPlanUpdateWithoutRestaurantsInput)
], RestaurantPlanUpdateOneWithoutRestaurantsInput.prototype, "update", void 0);
RestaurantPlanUpdateOneWithoutRestaurantsInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], RestaurantPlanUpdateOneWithoutRestaurantsInput);
exports.RestaurantPlanUpdateOneWithoutRestaurantsInput = RestaurantPlanUpdateOneWithoutRestaurantsInput;
