import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { OrderRelationFilter } from "../inputs/OrderRelationFilter";
import { ProductCategoryRelationFilter } from "../inputs/ProductCategoryRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderElementWhereInput {
  @TypeGraphQL.Field(_type => [OrderElementWhereInput], {
    nullable: true
  })
  AND?: OrderElementWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderElementWhereInput], {
    nullable: true
  })
  OR?: OrderElementWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderElementWhereInput], {
    nullable: true
  })
  NOT?: OrderElementWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  code?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  image?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  price?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ProductCategoryRelationFilter, {
    nullable: true
  })
  category?: ProductCategoryRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  addonText?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => OrderRelationFilter, {
    nullable: true
  })
  Order?: OrderRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  orderId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  productCategoryId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
