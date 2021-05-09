import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ScheduleAvgAggregate } from "../outputs/ScheduleAvgAggregate";
import { ScheduleCountAggregate } from "../outputs/ScheduleCountAggregate";
import { ScheduleMaxAggregate } from "../outputs/ScheduleMaxAggregate";
import { ScheduleMinAggregate } from "../outputs/ScheduleMinAggregate";
import { ScheduleSumAggregate } from "../outputs/ScheduleSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateSchedule {
  @TypeGraphQL.Field(_type => ScheduleCountAggregate, {
    nullable: true
  })
  count!: ScheduleCountAggregate | null;

  @TypeGraphQL.Field(_type => ScheduleAvgAggregate, {
    nullable: true
  })
  avg!: ScheduleAvgAggregate | null;

  @TypeGraphQL.Field(_type => ScheduleSumAggregate, {
    nullable: true
  })
  sum!: ScheduleSumAggregate | null;

  @TypeGraphQL.Field(_type => ScheduleMinAggregate, {
    nullable: true
  })
  min!: ScheduleMinAggregate | null;

  @TypeGraphQL.Field(_type => ScheduleMaxAggregate, {
    nullable: true
  })
  max!: ScheduleMaxAggregate | null;
}
