"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCategoryMutation = exports.ProductCategoryQuery = exports.ProductCategory = void 0;
const nexus_1 = require("nexus");
const nexus_shield_1 = require("nexus-shield");
const isAuthenticated_1 = require("../../rules/isAuthenticated");
exports.ProductCategory = nexus_1.objectType({
    name: "ProductCategory",
    definition(t) {
        t.model.id();
        t.model.name();
        t.model.description();
        t.model.image();
        t.model.isActive();
        t.model.isFeatured();
        t.model.restaurants();
        t.model.restaurantId();
        t.model.Product();
    },
});
exports.ProductCategoryQuery = nexus_1.extendType({
    type: "Query",
    definition(t) {
        t.crud.productCategory();
        t.crud.productCategories({
            filtering: true,
            ordering: true,
            pagination: true,
        });
    },
});
exports.ProductCategoryMutation = nexus_1.extendType({
    type: "Mutation",
    definition(t) {
        t.crud.createOneProductCategory({
            shield: nexus_shield_1.or(isAuthenticated_1.isAdmin(), isAuthenticated_1.isOwner(), isAuthenticated_1.isManager()),
            alias: "createProductCategory",
        });
        t.crud.updateOneProductCategory({
            shield: nexus_shield_1.or(isAuthenticated_1.isAdmin(), isAuthenticated_1.isOwner(), isAuthenticated_1.isManager()),
            alias: "updateProductCategory",
        });
        t.crud.deleteOneProductCategory({
            shield: nexus_shield_1.or(isAuthenticated_1.isAdmin(), isAuthenticated_1.isOwner(), isAuthenticated_1.isManager()),
            alias: "deleteProductCategory",
        });
    },
});
//# sourceMappingURL=ProductCategory.js.map