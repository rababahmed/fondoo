import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ScheduleOrderByInput } from "../../../inputs/ScheduleOrderByInput";
import { ScheduleWhereInput } from "../../../inputs/ScheduleWhereInput";
import { ScheduleWhereUniqueInput } from "../../../inputs/ScheduleWhereUniqueInput";
import { ScheduleScalarFieldEnum } from "../../../../enums/ScheduleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class RestaurantScheduleArgs {
  @TypeGraphQL.Field(_type => ScheduleWhereInput, {
    nullable: true
  })
  where?: ScheduleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ScheduleOrderByInput], {
    nullable: true
  })
  orderBy?: ScheduleOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => ScheduleWhereUniqueInput, {
    nullable: true
  })
  cursor?: ScheduleWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ScheduleScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "openingTime" | "closingTime" | "minDeliveryAmount" | "deliveryTime" | "takeawayTime" | "restaurantId"> | undefined;
}
