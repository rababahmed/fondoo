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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCategory = exports.ProductMutation = exports.ProductQuery = exports.Product = void 0;
const nexus_1 = require("nexus");
const nexus_shield_1 = require("nexus-shield");
const isAuthenticated_1 = require("../../rules/isAuthenticated");
exports.Product = nexus_1.objectType({
    name: "Product",
    definition(t) {
        t.model.id();
        t.model.name();
        t.model.description();
        t.model.image();
        t.model.price();
        t.model.spiceLevel();
        t.model.isPopular();
        t.model.isActive();
        t.model.ProductCategory();
        t.model.productCategoryId();
        t.model.Restaurant();
        t.model.restaurantId();
        t.model.OrderItem();
    },
});
exports.ProductQuery = nexus_1.extendType({
    type: "Query",
    definition(t) {
        t.crud.product();
        t.crud.products();
    },
});
exports.ProductMutation = nexus_1.extendType({
    type: "Mutation",
    definition(t) {
        t.crud.createOneProduct({
            shield: nexus_shield_1.or(isAuthenticated_1.isAdmin(), isAuthenticated_1.isOwner(), isAuthenticated_1.isManager()),
            alias: "createProduct",
        });
        t.crud.updateOneProduct({
            shield: nexus_shield_1.or(isAuthenticated_1.isAdmin(), isAuthenticated_1.isOwner(), isAuthenticated_1.isManager()),
            alias: "updateProduct",
        });
        t.crud.deleteOneProduct({
            shield: nexus_shield_1.or(isAuthenticated_1.isAdmin(), isAuthenticated_1.isOwner(), isAuthenticated_1.isManager()),
            alias: "deleteProduct",
        });
    },
});
exports.ProductCategory = __importStar(require("./ProductCategory"));
//# sourceMappingURL=index.js.map