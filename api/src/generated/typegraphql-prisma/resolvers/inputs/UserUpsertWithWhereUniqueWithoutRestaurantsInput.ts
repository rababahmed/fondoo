import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutRestaurantsInput } from "../inputs/UserCreateWithoutRestaurantsInput";
import { UserUpdateWithoutRestaurantsInput } from "../inputs/UserUpdateWithoutRestaurantsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithWhereUniqueWithoutRestaurantsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutRestaurantsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutRestaurantsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutRestaurantsInput, {
    nullable: false
  })
  create!: UserCreateWithoutRestaurantsInput;
}
