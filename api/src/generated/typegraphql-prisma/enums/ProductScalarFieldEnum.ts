import * as TypeGraphQL from "type-graphql";

export enum ProductScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  name = "name",
  description = "description",
  image = "image",
  price = "price",
  spiceLevel = "spiceLevel",
  isPopular = "isPopular",
  isActive = "isActive",
  productCategoryId = "productCategoryId",
  restaurantId = "restaurantId"
}
TypeGraphQL.registerEnumType(ProductScalarFieldEnum, {
  name: "ProductScalarFieldEnum",
  description: undefined,
});
