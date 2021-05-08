import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ScheduleCreateInput } from "../../../inputs/ScheduleCreateInput";

@TypeGraphQL.ArgsType()
export class CreateScheduleArgs {
  @TypeGraphQL.Field(_type => ScheduleCreateInput, {
    nullable: false
  })
  data!: ScheduleCreateInput;
}
