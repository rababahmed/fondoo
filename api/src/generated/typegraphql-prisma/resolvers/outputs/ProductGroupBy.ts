import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductAvgAggregate } from "../outputs/ProductAvgAggregate";
import { ProductCountAggregate } from "../outputs/ProductCountAggregate";
import { ProductMaxAggregate } from "../outputs/ProductMaxAggregate";
import { ProductMinAggregate } from "../outputs/ProductMinAggregate";
import { ProductSumAggregate } from "../outputs/ProductSumAggregate";
import { SpiceLevel } from "../../enums/SpiceLevel";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class ProductGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  price!: number | null;

  @TypeGraphQL.Field(_type => SpiceLevel, {
    nullable: false
  })
  spiceLevel!: "None" | "Mild" | "Medium" | "Hot" | "ExtraHot";

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isPopular!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isActive!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  restaurantId!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  orderId!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  productCategoryId!: string;

  @TypeGraphQL.Field(_type => ProductCountAggregate, {
    nullable: true
  })
  count!: ProductCountAggregate | null;

  @TypeGraphQL.Field(_type => ProductAvgAggregate, {
    nullable: true
  })
  avg!: ProductAvgAggregate | null;

  @TypeGraphQL.Field(_type => ProductSumAggregate, {
    nullable: true
  })
  sum!: ProductSumAggregate | null;

  @TypeGraphQL.Field(_type => ProductMinAggregate, {
    nullable: true
  })
  min!: ProductMinAggregate | null;

  @TypeGraphQL.Field(_type => ProductMaxAggregate, {
    nullable: true
  })
  max!: ProductMaxAggregate | null;
}
