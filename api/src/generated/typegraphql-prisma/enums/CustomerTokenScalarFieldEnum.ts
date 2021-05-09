import * as TypeGraphQL from "type-graphql";

export enum CustomerTokenScalarFieldEnum {
  id = "id",
  token = "token",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  customerId = "customerId"
}
TypeGraphQL.registerEnumType(CustomerTokenScalarFieldEnum, {
  name: "CustomerTokenScalarFieldEnum",
  description: undefined,
});
