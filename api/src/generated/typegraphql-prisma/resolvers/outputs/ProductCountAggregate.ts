import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class ProductCountAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  createdAt!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  name!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  description!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  image!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  price!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  spiceLevel!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  isPopular!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  isActive!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  productCategoryId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  restaurantId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  _all!: number;
}
