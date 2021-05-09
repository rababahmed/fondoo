import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { CartElementListRelationFilter } from "../inputs/CartElementListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumSpiceLevelFilter } from "../inputs/EnumSpiceLevelFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { OrderRelationFilter } from "../inputs/OrderRelationFilter";
import { ProductCategoryRelationFilter } from "../inputs/ProductCategoryRelationFilter";
import { RestaurantRelationFilter } from "../inputs/RestaurantRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductWhereInput {
  @TypeGraphQL.Field(_type => [ProductWhereInput], {
    nullable: true
  })
  AND?: ProductWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereInput], {
    nullable: true
  })
  OR?: ProductWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereInput], {
    nullable: true
  })
  NOT?: ProductWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  price?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumSpiceLevelFilter, {
    nullable: true
  })
  spiceLevel?: EnumSpiceLevelFilter | undefined;

  @TypeGraphQL.Field(_type => ProductCategoryRelationFilter, {
    nullable: true
  })
  category?: ProductCategoryRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  isPopular?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  isActive?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => RestaurantRelationFilter, {
    nullable: true
  })
  Restaurant?: RestaurantRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  restaurantId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => OrderRelationFilter, {
    nullable: true
  })
  Order?: OrderRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  orderId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => CartElementListRelationFilter, {
    nullable: true
  })
  CartElement?: CartElementListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  productCategoryId?: StringFilter | undefined;
}
