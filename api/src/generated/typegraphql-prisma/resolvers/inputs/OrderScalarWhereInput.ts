import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { JsonFilter } from "../inputs/JsonFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderScalarWhereInput {
  @TypeGraphQL.Field(_type => [OrderScalarWhereInput], {
    nullable: true
  })
  AND?: OrderScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderScalarWhereInput], {
    nullable: true
  })
  OR?: OrderScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderScalarWhereInput], {
    nullable: true
  })
  NOT?: OrderScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => JsonFilter, {
    nullable: true
  })
  items?: JsonFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  coupon?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  deliveryCharges?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  vat?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  serviceCharge?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  total?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  isAccepted?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  restaurantId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  customerId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  customerAddressId?: IntNullableFilter | undefined;
}
