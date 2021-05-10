import * as TypeGraphQL from "type-graphql";

export enum UserTokenScalarFieldEnum {
  id = "id",
  token = "token",
  provider = "provider",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  userId = "userId"
}
TypeGraphQL.registerEnumType(UserTokenScalarFieldEnum, {
  name: "UserTokenScalarFieldEnum",
  description: undefined,
});
