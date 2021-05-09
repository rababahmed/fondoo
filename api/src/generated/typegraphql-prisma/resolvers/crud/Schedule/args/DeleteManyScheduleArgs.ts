import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ScheduleWhereInput } from "../../../inputs/ScheduleWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyScheduleArgs {
  @TypeGraphQL.Field(_type => ScheduleWhereInput, {
    nullable: true
  })
  where?: ScheduleWhereInput | undefined;
}
