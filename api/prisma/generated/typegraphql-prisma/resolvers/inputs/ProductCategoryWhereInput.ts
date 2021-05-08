import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { OrderElementListRelationFilter } from "../inputs/OrderElementListRelationFilter";
import { ProductListRelationFilter } from "../inputs/ProductListRelationFilter";
import { RestaurantRelationFilter } from "../inputs/RestaurantRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductCategoryWhereInput {
  @TypeGraphQL.Field(_type => [ProductCategoryWhereInput], {
    nullable: true
  })
  AND?: ProductCategoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCategoryWhereInput], {
    nullable: true
  })
  OR?: ProductCategoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCategoryWhereInput], {
    nullable: true
  })
  NOT?: ProductCategoryWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  image?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  isActive?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  isFeatured?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => RestaurantRelationFilter, {
    nullable: true
  })
  restaurants?: RestaurantRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  restaurantId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ProductListRelationFilter, {
    nullable: true
  })
  Product?: ProductListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => OrderElementListRelationFilter, {
    nullable: true
  })
  OrderElement?: OrderElementListRelationFilter | undefined;
}
