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
exports.Product = (0, nexus_1.objectType)({
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
        t.model.productCategory();
        t.model.productCategoryId();
        t.model.restaurant();
        t.model.restaurantId();
        t.model.orderItems();
    },
});
exports.ProductQuery = (0, nexus_1.extendType)({
    type: "Query",
    definition(t) {
        t.crud.product();
        t.crud.products({
            filtering: true,
            ordering: true,
            pagination: true,
        });
    },
});
exports.ProductMutation = (0, nexus_1.extendType)({
    type: "Mutation",
    definition(t) {
        t.crud.createOneProduct({
            shield: (0, nexus_shield_1.or)((0, isAuthenticated_1.isAdmin)(), (0, isAuthenticated_1.isOwner)(), (0, isAuthenticated_1.isManager)()),
            alias: "createProduct",
        });
        t.crud.updateOneProduct({
            shield: (0, nexus_shield_1.or)((0, isAuthenticated_1.isAdmin)(), (0, isAuthenticated_1.isOwner)(), (0, isAuthenticated_1.isManager)()),
            alias: "updateProduct",
        });
        t.crud.deleteOneProduct({
            shield: (0, nexus_shield_1.or)((0, isAuthenticated_1.isAdmin)(), (0, isAuthenticated_1.isOwner)(), (0, isAuthenticated_1.isManager)()),
            alias: "deleteProduct",
        });
    },
});
exports.ProductCategory = __importStar(require("./ProductCategory"));
//# sourceMappingURL=index.js.map