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
exports.UpsertOrderArgs = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const OrderUncheckedCreateInput_1 = require("../../../inputs/OrderUncheckedCreateInput");
const OrderUncheckedUpdateInput_1 = require("../../../inputs/OrderUncheckedUpdateInput");
const OrderWhereUniqueInput_1 = require("../../../inputs/OrderWhereUniqueInput");
let UpsertOrderArgs = class UpsertOrderArgs {
};
__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    __metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], UpsertOrderArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderUncheckedCreateInput_1.OrderUncheckedCreateInput, {
        nullable: false
    }),
    __metadata("design:type", OrderUncheckedCreateInput_1.OrderUncheckedCreateInput)
], UpsertOrderArgs.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderUncheckedUpdateInput_1.OrderUncheckedUpdateInput, {
        nullable: false
    }),
    __metadata("design:type", OrderUncheckedUpdateInput_1.OrderUncheckedUpdateInput)
], UpsertOrderArgs.prototype, "update", void 0);
UpsertOrderArgs = __decorate([
    TypeGraphQL.ArgsType()
], UpsertOrderArgs);
exports.UpsertOrderArgs = UpsertOrderArgs;
