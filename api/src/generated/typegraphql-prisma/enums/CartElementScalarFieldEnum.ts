import * as TypeGraphQL from "type-graphql";

export enum CartElementScalarFieldEnum {
  id = "id",
  quantity = "quantity",
  customerId = "customerId",
  productId = "productId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(CartElementScalarFieldEnum, {
  name: "CartElementScalarFieldEnum",
  description: undefined,
});
