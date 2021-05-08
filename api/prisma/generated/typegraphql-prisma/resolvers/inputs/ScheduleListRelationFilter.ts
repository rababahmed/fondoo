import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ScheduleWhereInput } from "../inputs/ScheduleWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ScheduleListRelationFilter {
  @TypeGraphQL.Field(_type => ScheduleWhereInput, {
    nullable: true
  })
  every?: ScheduleWhereInput | undefined;

  @TypeGraphQL.Field(_type => ScheduleWhereInput, {
    nullable: true
  })
  some?: ScheduleWhereInput | undefined;

  @TypeGraphQL.Field(_type => ScheduleWhereInput, {
    nullable: true
  })
  none?: ScheduleWhereInput | undefined;
}
