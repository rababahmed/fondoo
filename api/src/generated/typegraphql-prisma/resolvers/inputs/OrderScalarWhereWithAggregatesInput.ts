import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { JsonWithAggregatesFilter } from "../inputs/JsonWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [OrderScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: OrderScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: OrderScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: OrderScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => JsonWithAggregatesFilter, {
    nullable: true
  })
  items?: JsonWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  coupon?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatWithAggregatesFilter, {
    nullable: true
  })
  deliveryCharges?: FloatWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatWithAggregatesFilter, {
    nullable: true
  })
  vat?: FloatWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatWithAggregatesFilter, {
    nullable: true
  })
  serviceCharge?: FloatWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatWithAggregatesFilter, {
    nullable: true
  })
  total?: FloatWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  isAccepted?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  restaurantId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  customerId?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  customerAddressId?: IntNullableWithAggregatesFilter | undefined;
}
