import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumDeliveryFeeWithAggregatesFilter } from "../inputs/EnumDeliveryFeeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DeliveryZoneScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [DeliveryZoneScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: DeliveryZoneScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeliveryZoneScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: DeliveryZoneScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeliveryZoneScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: DeliveryZoneScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  zoneTitle?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  zonePostCode?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumDeliveryFeeWithAggregatesFilter, {
    nullable: true
  })
  deliveryFeeType?: EnumDeliveryFeeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  deliveryCharge?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  minDeliveryAmount?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  minDeliveryRadius?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  maxDeliveryRadius?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  restaurantId?: StringNullableWithAggregatesFilter | undefined;
}
