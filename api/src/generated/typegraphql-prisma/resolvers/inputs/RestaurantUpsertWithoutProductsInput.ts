import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RestaurantCreateWithoutProductsInput } from "../inputs/RestaurantCreateWithoutProductsInput";
import { RestaurantUpdateWithoutProductsInput } from "../inputs/RestaurantUpdateWithoutProductsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RestaurantUpsertWithoutProductsInput {
  @TypeGraphQL.Field(_type => RestaurantUpdateWithoutProductsInput, {
    nullable: false
  })
  update!: RestaurantUpdateWithoutProductsInput;

  @TypeGraphQL.Field(_type => RestaurantCreateWithoutProductsInput, {
    nullable: false
  })
  create!: RestaurantCreateWithoutProductsInput;
}
