import { extendType, objectType } from "nexus";

export const ProductCategory = objectType({
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

export const ProductCategoryQuery = extendType({
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

export const ProductCategoryMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.crud.createOneProductCategory({ alias: "createProductCategory" });
    t.crud.updateOneProductCategory({ alias: "updateProductCategory" });
    t.crud.deleteOneProductCategory({ alias: "deleteProductCategory" });
  },
});
