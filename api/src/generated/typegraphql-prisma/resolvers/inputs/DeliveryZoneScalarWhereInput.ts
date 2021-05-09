import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumDeliveryFeeFilter } from "../inputs/EnumDeliveryFeeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DeliveryZoneScalarWhereInput {
  @TypeGraphQL.Field(_type => [DeliveryZoneScalarWhereInput], {
    nullable: true
  })
  AND?: DeliveryZoneScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeliveryZoneScalarWhereInput], {
    nullable: true
  })
  OR?: DeliveryZoneScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeliveryZoneScalarWhereInput], {
    nullable: true
  })
  NOT?: DeliveryZoneScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  restaurantId?: StringNullableFilter | undefined;
}
