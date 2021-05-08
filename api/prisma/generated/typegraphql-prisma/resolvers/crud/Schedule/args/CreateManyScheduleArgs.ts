import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ScheduleCreateManyInput } from "../../../inputs/ScheduleCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyScheduleArgs {
  @TypeGraphQL.Field(_type => [ScheduleCreateManyInput], {
    nullable: false
  })
  data!: ScheduleCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
