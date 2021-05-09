import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RestaurantUpdateWithoutUsersInput } from "../inputs/RestaurantUpdateWithoutUsersInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RestaurantUpdateWithWhereUniqueWithoutUsersInput {
  @TypeGraphQL.Field(_type => RestaurantWhereUniqueInput, {
    nullable: false
  })
  where!: RestaurantWhereUniqueInput;

  @TypeGraphQL.Field(_type => RestaurantUpdateWithoutUsersInput, {
    nullable: false
  })
  data!: RestaurantUpdateWithoutUsersInput;
}
