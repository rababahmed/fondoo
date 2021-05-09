import * as TypeGraphQL from "type-graphql";

export enum CustomerScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  firstName = "firstName",
  lastName = "lastName",
  email = "email",
  password = "password",
  phone = "phone",
  restaurantId = "restaurantId",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(CustomerScalarFieldEnum, {
  name: "CustomerScalarFieldEnum",
  description: undefined,
});
