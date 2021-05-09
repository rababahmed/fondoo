import * as TypeGraphQL from "type-graphql";

export enum ProductCategoryScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  name = "name",
  description = "description",
  image = "image",
  isActive = "isActive",
  isFeatured = "isFeatured",
  restaurantId = "restaurantId"
}
TypeGraphQL.registerEnumType(ProductCategoryScalarFieldEnum, {
  name: "ProductCategoryScalarFieldEnum",
  description: undefined,
});
