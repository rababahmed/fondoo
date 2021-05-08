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
exports.CustomerAddressGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const CustomerAddressAvgAggregate_1 = require("../outputs/CustomerAddressAvgAggregate");
const CustomerAddressCountAggregate_1 = require("../outputs/CustomerAddressCountAggregate");
const CustomerAddressMaxAggregate_1 = require("../outputs/CustomerAddressMaxAggregate");
const CustomerAddressMinAggregate_1 = require("../outputs/CustomerAddressMinAggregate");
const CustomerAddressSumAggregate_1 = require("../outputs/CustomerAddressSumAggregate");
let CustomerAddressGroupBy = class CustomerAddressGroupBy {
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], CustomerAddressGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], CustomerAddressGroupBy.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], CustomerAddressGroupBy.prototype, "streetAddress", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], CustomerAddressGroupBy.prototype, "city", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], CustomerAddressGroupBy.prototype, "postCode", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], CustomerAddressGroupBy.prototype, "country", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], CustomerAddressGroupBy.prototype, "customerId", void 0);
__decorate([
    TypeGraphQL.Field(_type => CustomerAddressCountAggregate_1.CustomerAddressCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", CustomerAddressCountAggregate_1.CustomerAddressCountAggregate)
], CustomerAddressGroupBy.prototype, "count", void 0);
__decorate([
    TypeGraphQL.Field(_type => CustomerAddressAvgAggregate_1.CustomerAddressAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", CustomerAddressAvgAggregate_1.CustomerAddressAvgAggregate)
], CustomerAddressGroupBy.prototype, "avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => CustomerAddressSumAggregate_1.CustomerAddressSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", CustomerAddressSumAggregate_1.CustomerAddressSumAggregate)
], CustomerAddressGroupBy.prototype, "sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => CustomerAddressMinAggregate_1.CustomerAddressMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", CustomerAddressMinAggregate_1.CustomerAddressMinAggregate)
], CustomerAddressGroupBy.prototype, "min", void 0);
__decorate([
    TypeGraphQL.Field(_type => CustomerAddressMaxAggregate_1.CustomerAddressMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", CustomerAddressMaxAggregate_1.CustomerAddressMaxAggregate)
], CustomerAddressGroupBy.prototype, "max", void 0);
CustomerAddressGroupBy = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], CustomerAddressGroupBy);
exports.CustomerAddressGroupBy = CustomerAddressGroupBy;
