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
export class ScheduleGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  openingTime!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  closingTime!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  minDeliveryAmount!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  deliveryTime!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  takeawayTime!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  restaurantId!: string | null;

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
