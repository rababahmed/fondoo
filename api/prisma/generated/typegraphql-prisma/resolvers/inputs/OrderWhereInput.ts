import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { CustomerAddressRelationFilter } from "../inputs/CustomerAddressRelationFilter";
import { CustomerRelationFilter } from "../inputs/CustomerRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { OrderElementListRelationFilter } from "../inputs/OrderElementListRelationFilter";
import { ProductListRelationFilter } from "../inputs/ProductListRelationFilter";
import { RestaurantRelationFilter } from "../inputs/RestaurantRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderWhereInput {
  @TypeGraphQL.Field(_type => [OrderWhereInput], {
    nullable: true
  })
  AND?: OrderWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereInput], {
    nullable: true
  })
  OR?: OrderWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereInput], {
    nullable: true
  })
  NOT?: OrderWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => OrderElementListRelationFilter, {
    nullable: true
  })
  elements?: OrderElementListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  charges?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  total?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  isAccepted?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => CustomerAddressRelationFilter, {
    nullable: true
  })
  customerAddress?: CustomerAddressRelationFilter | undefined;

  @TypeGraphQL.Field(_type => RestaurantRelationFilter, {
    nullable: true
  })
  restaurant?: RestaurantRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  restaurantId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => CustomerRelationFilter, {
    nullable: true
  })
  customer?: CustomerRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  customerId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => ProductListRelationFilter, {
    nullable: true
  })
  product?: ProductListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  customerAddressId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
