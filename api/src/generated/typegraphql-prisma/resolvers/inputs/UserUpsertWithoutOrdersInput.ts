import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutOrdersInput } from "../inputs/UserCreateWithoutOrdersInput";
import { UserUpdateWithoutOrdersInput } from "../inputs/UserUpdateWithoutOrdersInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutOrdersInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutOrdersInput, {
    nullable: false
  })
  update!: UserUpdateWithoutOrdersInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutOrdersInput, {
    nullable: false
  })
  create!: UserCreateWithoutOrdersInput;
}
