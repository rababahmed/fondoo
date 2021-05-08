import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ScheduleCreateWithoutRestaurantInput } from "../inputs/ScheduleCreateWithoutRestaurantInput";
import { ScheduleUpdateWithoutRestaurantInput } from "../inputs/ScheduleUpdateWithoutRestaurantInput";
import { ScheduleWhereUniqueInput } from "../inputs/ScheduleWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ScheduleUpsertWithWhereUniqueWithoutRestaurantInput {
  @TypeGraphQL.Field(_type => ScheduleWhereUniqueInput, {
    nullable: false
  })
  where!: ScheduleWhereUniqueInput;

  @TypeGraphQL.Field(_type => ScheduleUpdateWithoutRestaurantInput, {
    nullable: false
  })
  update!: ScheduleUpdateWithoutRestaurantInput;

  @TypeGraphQL.Field(_type => ScheduleCreateWithoutRestaurantInput, {
    nullable: false
  })
  create!: ScheduleCreateWithoutRestaurantInput;
}
