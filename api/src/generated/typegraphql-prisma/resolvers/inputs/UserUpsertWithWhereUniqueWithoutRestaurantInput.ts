import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutRestaurantInput } from "../inputs/UserCreateWithoutRestaurantInput";
import { UserUpdateWithoutRestaurantInput } from "../inputs/UserUpdateWithoutRestaurantInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithWhereUniqueWithoutRestaurantInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutRestaurantInput, {
    nullable: false
  })
  update!: UserUpdateWithoutRestaurantInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutRestaurantInput, {
    nullable: false
  })
  create!: UserCreateWithoutRestaurantInput;
}
