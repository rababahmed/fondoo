import * as TypeGraphQL from "type-graphql";

export enum OrderElementScalarFieldEnum {
  id = "id",
  code = "code",
  name = "name",
  description = "description",
  image = "image",
  price = "price",
  addonText = "addonText",
  orderId = "orderId",
  productCategoryId = "productCategoryId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(OrderElementScalarFieldEnum, {
  name: "OrderElementScalarFieldEnum",
  description: undefined,
});
