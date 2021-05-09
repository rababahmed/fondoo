import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ScheduleCreateWithoutRestaurantInput } from "../inputs/ScheduleCreateWithoutRestaurantInput";
import { ScheduleWhereUniqueInput } from "../inputs/ScheduleWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ScheduleCreateOrConnectWithoutRestaurantInput {
  @TypeGraphQL.Field(_type => ScheduleWhereUniqueInput, {
    nullable: false
  })
  where!: ScheduleWhereUniqueInput;

  @TypeGraphQL.Field(_type => ScheduleCreateWithoutRestaurantInput, {
    nullable: false
  })
  create!: ScheduleCreateWithoutRestaurantInput;
}
