"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCategoryMutation = exports.ProductCategoryQuery = exports.ProductCategory = void 0;
const nexus_1 = require("nexus");
const nexus_shield_1 = require("nexus-shield");
const isAuthenticated_1 = require("../../rules/isAuthenticated");
exports.ProductCategory = (0, nexus_1.objectType)({
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
        t.model.Product({
            filtering: true,
            ordering: true,
            pagination: true,
        });
        t.model.createdAt();
        t.model.updatedAt();
    },
});
exports.ProductCategoryQuery = (0, nexus_1.extendType)({
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
exports.ProductCategoryMutation = (0, nexus_1.extendType)({
    type: "Mutation",
    definition(t) {
        t.crud.createOneProductCategory({
            shield: (0, nexus_shield_1.or)((0, isAuthenticated_1.isAdmin)(), (0, isAuthenticated_1.isOwner)(), (0, isAuthenticated_1.isManager)()),
            alias: "createProductCategory",
        });
        t.crud.updateOneProductCategory({
            shield: (0, nexus_shield_1.or)((0, isAuthenticated_1.isAdmin)(), (0, isAuthenticated_1.isOwner)(), (0, isAuthenticated_1.isManager)()),
            alias: "updateProductCategory",
        });
        t.crud.deleteOneProductCategory({
            shield: (0, nexus_shield_1.or)((0, isAuthenticated_1.isAdmin)(), (0, isAuthenticated_1.isOwner)(), (0, isAuthenticated_1.isManager)()),
            alias: "deleteProductCategory",
        });
    },
});
//# sourceMappingURL=ProductCategory.js.map