import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ScheduleScalarWhereInput } from "../inputs/ScheduleScalarWhereInput";
import { ScheduleUpdateManyMutationInput } from "../inputs/ScheduleUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ScheduleUpdateManyWithWhereWithoutRestaurantInput {
  @TypeGraphQL.Field(_type => ScheduleScalarWhereInput, {
    nullable: false
  })
  where!: ScheduleScalarWhereInput;

  @TypeGraphQL.Field(_type => ScheduleUpdateManyMutationInput, {
    nullable: false
  })
  data!: ScheduleUpdateManyMutationInput;
}
