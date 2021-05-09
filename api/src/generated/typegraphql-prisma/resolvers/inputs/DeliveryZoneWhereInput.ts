import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumDeliveryFeeFilter } from "../inputs/EnumDeliveryFeeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { RestaurantRelationFilter } from "../inputs/RestaurantRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DeliveryZoneWhereInput {
  @TypeGraphQL.Field(_type => [DeliveryZoneWhereInput], {
    nullable: true
  })
  AND?: DeliveryZoneWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeliveryZoneWhereInput], {
    nullable: true
  })
  OR?: DeliveryZoneWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeliveryZoneWhereInput], {
    nullable: true
  })
  NOT?: DeliveryZoneWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  zoneTitle?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  zonePostCode?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumDeliveryFeeFilter, {
    nullable: true
  })
  deliveryFeeType?: EnumDeliveryFeeFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  deliveryCharge?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  minDeliveryAmount?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  minDeliveryRadius?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  maxDeliveryRadius?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => RestaurantRelationFilter, {
    nullable: true
  })
  Restaurant?: RestaurantRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  restaurantId?: StringNullableFilter | undefined;
}
