import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RestaurantCreateWithoutScheduleInput } from "../inputs/RestaurantCreateWithoutScheduleInput";
import { RestaurantUpdateWithoutScheduleInput } from "../inputs/RestaurantUpdateWithoutScheduleInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RestaurantUpsertWithoutScheduleInput {
  @TypeGraphQL.Field(_type => RestaurantUpdateWithoutScheduleInput, {
    nullable: false
  })
  update!: RestaurantUpdateWithoutScheduleInput;

  @TypeGraphQL.Field(_type => RestaurantCreateWithoutScheduleInput, {
    nullable: false
  })
  create!: RestaurantCreateWithoutScheduleInput;
}
