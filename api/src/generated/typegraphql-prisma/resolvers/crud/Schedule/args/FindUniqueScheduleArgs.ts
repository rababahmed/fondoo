import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ScheduleWhereUniqueInput } from "../../../inputs/ScheduleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueScheduleArgs {
  @TypeGraphQL.Field(_type => ScheduleWhereUniqueInput, {
    nullable: false
  })
  where!: ScheduleWhereUniqueInput;
}
