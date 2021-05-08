import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ScheduleOrderByInput } from "../../../inputs/ScheduleOrderByInput";
import { ScheduleScalarWhereWithAggregatesInput } from "../../../inputs/ScheduleScalarWhereWithAggregatesInput";
import { ScheduleWhereInput } from "../../../inputs/ScheduleWhereInput";
import { ScheduleScalarFieldEnum } from "../../../../enums/ScheduleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByScheduleArgs {
  @TypeGraphQL.Field(_type => ScheduleWhereInput, {
    nullable: true
  })
  where?: ScheduleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ScheduleOrderByInput], {
    nullable: true
  })
  orderBy?: ScheduleOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [ScheduleScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "openingTime" | "closingTime" | "minDeliveryAmount" | "deliveryTime" | "takeawayTime" | "restaurantId">;

  @TypeGraphQL.Field(_type => ScheduleScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ScheduleScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
