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
exports.RestaurantUpdateOneWithoutCustomersInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const RestaurantCreateOrConnectWithoutCustomersInput_1 = require("../inputs/RestaurantCreateOrConnectWithoutCustomersInput");
const RestaurantUncheckedCreateWithoutCustomersInput_1 = require("../inputs/RestaurantUncheckedCreateWithoutCustomersInput");
const RestaurantUncheckedUpdateWithoutCustomersInput_1 = require("../inputs/RestaurantUncheckedUpdateWithoutCustomersInput");
const RestaurantUpsertWithoutCustomersInput_1 = require("../inputs/RestaurantUpsertWithoutCustomersInput");
const RestaurantWhereUniqueInput_1 = require("../inputs/RestaurantWhereUniqueInput");
let RestaurantUpdateOneWithoutCustomersInput = class RestaurantUpdateOneWithoutCustomersInput {
};
__decorate([
    TypeGraphQL.Field(_type => RestaurantUncheckedCreateWithoutCustomersInput_1.RestaurantUncheckedCreateWithoutCustomersInput, {
        nullable: true
    }),
    __metadata("design:type", RestaurantUncheckedCreateWithoutCustomersInput_1.RestaurantUncheckedCreateWithoutCustomersInput)
], RestaurantUpdateOneWithoutCustomersInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => RestaurantCreateOrConnectWithoutCustomersInput_1.RestaurantCreateOrConnectWithoutCustomersInput, {
        nullable: true
    }),
    __metadata("design:type", RestaurantCreateOrConnectWithoutCustomersInput_1.RestaurantCreateOrConnectWithoutCustomersInput)
], RestaurantUpdateOneWithoutCustomersInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => RestaurantUpsertWithoutCustomersInput_1.RestaurantUpsertWithoutCustomersInput, {
        nullable: true
    }),
    __metadata("design:type", RestaurantUpsertWithoutCustomersInput_1.RestaurantUpsertWithoutCustomersInput)
], RestaurantUpdateOneWithoutCustomersInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => RestaurantWhereUniqueInput_1.RestaurantWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", RestaurantWhereUniqueInput_1.RestaurantWhereUniqueInput)
], RestaurantUpdateOneWithoutCustomersInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], RestaurantUpdateOneWithoutCustomersInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], RestaurantUpdateOneWithoutCustomersInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => RestaurantUncheckedUpdateWithoutCustomersInput_1.RestaurantUncheckedUpdateWithoutCustomersInput, {
        nullable: true
    }),
    __metadata("design:type", RestaurantUncheckedUpdateWithoutCustomersInput_1.RestaurantUncheckedUpdateWithoutCustomersInput)
], RestaurantUpdateOneWithoutCustomersInput.prototype, "update", void 0);
RestaurantUpdateOneWithoutCustomersInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], RestaurantUpdateOneWithoutCustomersInput);
exports.RestaurantUpdateOneWithoutCustomersInput = RestaurantUpdateOneWithoutCustomersInput;
