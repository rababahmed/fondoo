import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  fullName = "fullName",
  username = "username",
  email = "email",
  password = "password",
  phone = "phone",
  role = "role",
  restaurantId = "restaurantId"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
