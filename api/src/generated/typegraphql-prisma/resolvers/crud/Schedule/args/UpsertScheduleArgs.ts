import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ScheduleCreateInput } from "../../../inputs/ScheduleCreateInput";
import { ScheduleUpdateInput } from "../../../inputs/ScheduleUpdateInput";
import { ScheduleWhereUniqueInput } from "../../../inputs/ScheduleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertScheduleArgs {
  @TypeGraphQL.Field(_type => ScheduleWhereUniqueInput, {
    nullable: false
  })
  where!: ScheduleWhereUniqueInput;

  @TypeGraphQL.Field(_type => ScheduleCreateInput, {
    nullable: false
  })
  create!: ScheduleCreateInput;

  @TypeGraphQL.Field(_type => ScheduleUpdateInput, {
    nullable: false
  })
  update!: ScheduleUpdateInput;
}
