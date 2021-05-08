import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ScheduleUpdateInput } from "../../../inputs/ScheduleUpdateInput";
import { ScheduleWhereUniqueInput } from "../../../inputs/ScheduleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateScheduleArgs {
  @TypeGraphQL.Field(_type => ScheduleUpdateInput, {
    nullable: false
  })
  data!: ScheduleUpdateInput;

  @TypeGraphQL.Field(_type => ScheduleWhereUniqueInput, {
    nullable: false
  })
  where!: ScheduleWhereUniqueInput;
}
