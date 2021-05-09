import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ScheduleUpdateManyMutationInput } from "../../../inputs/ScheduleUpdateManyMutationInput";
import { ScheduleWhereInput } from "../../../inputs/ScheduleWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyScheduleArgs {
  @TypeGraphQL.Field(_type => ScheduleUpdateManyMutationInput, {
    nullable: false
  })
  data!: ScheduleUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ScheduleWhereInput, {
    nullable: true
  })
  where?: ScheduleWhereInput | undefined;
}
