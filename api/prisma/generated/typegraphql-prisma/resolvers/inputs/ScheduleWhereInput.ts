import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { RestaurantRelationFilter } from "../inputs/RestaurantRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ScheduleWhereInput {
  @TypeGraphQL.Field(_type => [ScheduleWhereInput], {
    nullable: true
  })
  AND?: ScheduleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ScheduleWhereInput], {
    nullable: true
  })
  OR?: ScheduleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ScheduleWhereInput], {
    nullable: true
  })
  NOT?: ScheduleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  openingTime?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  closingTime?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  minDeliveryAmount?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  deliveryTime?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  takeawayTime?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => RestaurantRelationFilter, {
    nullable: true
  })
  Restaurant?: RestaurantRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  restaurantId?: StringNullableFilter | undefined;
}
