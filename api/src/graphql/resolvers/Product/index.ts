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
    t.model.isPopular();
    t.model.isActive();
    t.model.ProductCategory();
    t.model.productCategoryId();
    t.model.Restaurant();
    t.model.restaurantId();
    t.model.OrderItem();
  },
});

export const ProductQuery = extendType({
  type: "Query",
  definition(t) {
    t.crud.product();
    t.crud.products();
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
