import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutTokenInput } from "../inputs/UserCreateWithoutTokenInput";
import { UserUpdateWithoutTokenInput } from "../inputs/UserUpdateWithoutTokenInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutTokenInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutTokenInput, {
    nullable: false
  })
  update!: UserUpdateWithoutTokenInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutTokenInput, {
    nullable: false
  })
  create!: UserCreateWithoutTokenInput;
}
