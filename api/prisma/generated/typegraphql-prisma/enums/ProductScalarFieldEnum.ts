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
  restaurantId = "restaurantId",
  orderId = "orderId",
  productCategoryId = "productCategoryId"
}
TypeGraphQL.registerEnumType(ProductScalarFieldEnum, {
  name: "ProductScalarFieldEnum",
  description: undefined,
});
