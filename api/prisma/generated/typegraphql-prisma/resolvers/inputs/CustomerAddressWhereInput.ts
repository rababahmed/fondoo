import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerRelationFilter } from "../inputs/CustomerRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { OrderListRelationFilter } from "../inputs/OrderListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CustomerAddressWhereInput {
  @TypeGraphQL.Field(_type => [CustomerAddressWhereInput], {
    nullable: true
  })
  AND?: CustomerAddressWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerAddressWhereInput], {
    nullable: true
  })
  OR?: CustomerAddressWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerAddressWhereInput], {
    nullable: true
  })
  NOT?: CustomerAddressWhereInput[] | undefined;

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
  streetAddress?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  city?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  postCode?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  country?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => CustomerRelationFilter, {
    nullable: true
  })
  Customer?: CustomerRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  customerId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => OrderListRelationFilter, {
    nullable: true
  })
  Order?: OrderListRelationFilter | undefined;
}
