import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RestaurantCreateWithoutProductCategoryInput } from "../inputs/RestaurantCreateWithoutProductCategoryInput";
import { RestaurantUpdateWithoutProductCategoryInput } from "../inputs/RestaurantUpdateWithoutProductCategoryInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RestaurantUpsertWithoutProductCategoryInput {
  @TypeGraphQL.Field(_type => RestaurantUpdateWithoutProductCategoryInput, {
    nullable: false
  })
  update!: RestaurantUpdateWithoutProductCategoryInput;

  @TypeGraphQL.Field(_type => RestaurantCreateWithoutProductCategoryInput, {
    nullable: false
  })
  create!: RestaurantCreateWithoutProductCategoryInput;
}
