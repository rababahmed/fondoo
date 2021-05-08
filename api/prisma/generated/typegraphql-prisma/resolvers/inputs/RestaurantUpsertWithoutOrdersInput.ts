import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RestaurantCreateWithoutOrdersInput } from "../inputs/RestaurantCreateWithoutOrdersInput";
import { RestaurantUpdateWithoutOrdersInput } from "../inputs/RestaurantUpdateWithoutOrdersInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RestaurantUpsertWithoutOrdersInput {
  @TypeGraphQL.Field(_type => RestaurantUpdateWithoutOrdersInput, {
    nullable: false
  })
  update!: RestaurantUpdateWithoutOrdersInput;

  @TypeGraphQL.Field(_type => RestaurantCreateWithoutOrdersInput, {
    nullable: false
  })
  create!: RestaurantCreateWithoutOrdersInput;
}
