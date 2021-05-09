import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RestaurantCreateWithoutUsersInput } from "../inputs/RestaurantCreateWithoutUsersInput";
import { RestaurantUpdateWithoutUsersInput } from "../inputs/RestaurantUpdateWithoutUsersInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RestaurantUpsertWithWhereUniqueWithoutUsersInput {
  @TypeGraphQL.Field(_type => RestaurantWhereUniqueInput, {
    nullable: false
  })
  where!: RestaurantWhereUniqueInput;

  @TypeGraphQL.Field(_type => RestaurantUpdateWithoutUsersInput, {
    nullable: false
  })
  update!: RestaurantUpdateWithoutUsersInput;

  @TypeGraphQL.Field(_type => RestaurantCreateWithoutUsersInput, {
    nullable: false
  })
  create!: RestaurantCreateWithoutUsersInput;
}
