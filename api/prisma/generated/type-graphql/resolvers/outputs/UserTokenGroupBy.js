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
exports.UserTokenGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const UserTokenCountAggregate_1 = require("../outputs/UserTokenCountAggregate");
const UserTokenMaxAggregate_1 = require("../outputs/UserTokenMaxAggregate");
const UserTokenMinAggregate_1 = require("../outputs/UserTokenMinAggregate");
let UserTokenGroupBy = class UserTokenGroupBy {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserTokenGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserTokenGroupBy.prototype, "token", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserTokenGroupBy.prototype, "provider", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], UserTokenGroupBy.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], UserTokenGroupBy.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserTokenGroupBy.prototype, "userId", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserTokenCountAggregate_1.UserTokenCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", UserTokenCountAggregate_1.UserTokenCountAggregate)
], UserTokenGroupBy.prototype, "count", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserTokenMinAggregate_1.UserTokenMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", UserTokenMinAggregate_1.UserTokenMinAggregate)
], UserTokenGroupBy.prototype, "min", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserTokenMaxAggregate_1.UserTokenMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", UserTokenMaxAggregate_1.UserTokenMaxAggregate)
], UserTokenGroupBy.prototype, "max", void 0);
UserTokenGroupBy = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], UserTokenGroupBy);
exports.UserTokenGroupBy = UserTokenGroupBy;
