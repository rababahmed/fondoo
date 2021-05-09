import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RestaurantWhereInput } from "../inputs/RestaurantWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RestaurantRelationFilter {
  @TypeGraphQL.Field(_type => RestaurantWhereInput, {
    nullable: true
  })
  is?: RestaurantWhereInput | undefined;

  @TypeGraphQL.Field(_type => RestaurantWhereInput, {
    nullable: true
  })
  isNot?: RestaurantWhereInput | undefined;
}
