import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ScheduleUpdateWithoutRestaurantInput } from "../inputs/ScheduleUpdateWithoutRestaurantInput";
import { ScheduleWhereUniqueInput } from "../inputs/ScheduleWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ScheduleUpdateWithWhereUniqueWithoutRestaurantInput {
  @TypeGraphQL.Field(_type => ScheduleWhereUniqueInput, {
    nullable: false
  })
  where!: ScheduleWhereUniqueInput;

  @TypeGraphQL.Field(_type => ScheduleUpdateWithoutRestaurantInput, {
    nullable: false
  })
  data!: ScheduleUpdateWithoutRestaurantInput;
}
