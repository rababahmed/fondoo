import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { CustomerListRelationFilter } from "../inputs/CustomerListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DeliveryZoneListRelationFilter } from "../inputs/DeliveryZoneListRelationFilter";
import { OrderListRelationFilter } from "../inputs/OrderListRelationFilter";
import { ProductCategoryListRelationFilter } from "../inputs/ProductCategoryListRelationFilter";
import { ProductListRelationFilter } from "../inputs/ProductListRelationFilter";
import { ScheduleListRelationFilter } from "../inputs/ScheduleListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserListRelationFilter } from "../inputs/UserListRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RestaurantWhereInput {
  @TypeGraphQL.Field(_type => [RestaurantWhereInput], {
    nullable: true
  })
  AND?: RestaurantWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RestaurantWhereInput], {
    nullable: true
  })
  OR?: RestaurantWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RestaurantWhereInput], {
    nullable: true
  })
  NOT?: RestaurantWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  businessPhone?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  reservationPhone?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  url?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  address?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  city?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  postCode?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  country?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  currency?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  priceRange?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  diningStyle?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  vat?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  serviceCharge?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  hasParking?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  hasPartyFacilities?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  hasKidsZone?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  isTakeaway?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  isDelivery?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  isReservation?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  isOrdering?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  isAutoAcceptOrder?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  isAutoAcceptReservation?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => ProductListRelationFilter, {
    nullable: true
  })
  products?: ProductListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ScheduleListRelationFilter, {
    nullable: true
  })
  schedule?: ScheduleListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DeliveryZoneListRelationFilter, {
    nullable: true
  })
  deliveryZones?: DeliveryZoneListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CustomerListRelationFilter, {
    nullable: true
  })
  customers?: CustomerListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => OrderListRelationFilter, {
    nullable: true
  })
  orders?: OrderListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProductCategoryListRelationFilter, {
    nullable: true
  })
  productCategory?: ProductCategoryListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => UserListRelationFilter, {
    nullable: true
  })
  users?: UserListRelationFilter | undefined;
}
