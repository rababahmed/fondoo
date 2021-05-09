import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RestaurantWhereInput } from "../inputs/RestaurantWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RestaurantListRelationFilter {
  @TypeGraphQL.Field(_type => RestaurantWhereInput, {
    nullable: true
  })
  every?: RestaurantWhereInput | undefined;

  @TypeGraphQL.Field(_type => RestaurantWhereInput, {
    nullable: true
  })
  some?: RestaurantWhereInput | undefined;

  @TypeGraphQL.Field(_type => RestaurantWhereInput, {
    nullable: true
  })
  none?: RestaurantWhereInput | undefined;
}
