import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RestaurantCreateWithoutCustomersInput } from "../inputs/RestaurantCreateWithoutCustomersInput";
import { RestaurantUpdateWithoutCustomersInput } from "../inputs/RestaurantUpdateWithoutCustomersInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RestaurantUpsertWithoutCustomersInput {
  @TypeGraphQL.Field(_type => RestaurantUpdateWithoutCustomersInput, {
    nullable: false
  })
  update!: RestaurantUpdateWithoutCustomersInput;

  @TypeGraphQL.Field(_type => RestaurantCreateWithoutCustomersInput, {
    nullable: false
  })
  create!: RestaurantCreateWithoutCustomersInput;
}
