import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ScheduleCreateManyRestaurantInput } from "../inputs/ScheduleCreateManyRestaurantInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ScheduleCreateManyRestaurantInputEnvelope {
  @TypeGraphQL.Field(_type => [ScheduleCreateManyRestaurantInput], {
    nullable: false
  })
  data!: ScheduleCreateManyRestaurantInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
