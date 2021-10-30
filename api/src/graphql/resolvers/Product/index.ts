import { extendType, objectType } from "nexus";
import { or } from "nexus-shield";
import { isAdmin, isManager, isOwner } from "../../rules/isAuthenticated";

export const Product = objectType({
  name: "Product",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.description();
    t.model.image();
    t.model.price();
    t.model.spiceLevel();
    t.model.isFeatured();
    t.model.isActive();
    t.model.productCategory();
    t.model.productCategoryId();
    t.model.restaurant();
    t.model.restaurantId();
    t.model.orderItems();
    t.model.createdAt();
    t.model.updatedAt();
  },
});

export const ProductQuery = extendType({
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

export const ProductMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.crud.createOneProduct({
      shield: or(isAdmin(), isOwner(), isManager()),
      alias: "createProduct",
    });
    t.crud.updateOneProduct({
      shield: or(isAdmin(), isOwner(), isManager()),
      alias: "updateProduct",
    });
    t.crud.deleteOneProduct({
      shield: or(isAdmin(), isOwner(), isManager()),
      alias: "deleteProduct",
    });
  },
});

export * as ProductCategory from "./ProductCategory";
