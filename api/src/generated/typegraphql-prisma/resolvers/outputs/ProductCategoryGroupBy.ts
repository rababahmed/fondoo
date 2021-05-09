import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCategoryCountAggregate } from "../outputs/ProductCategoryCountAggregate";
import { ProductCategoryMaxAggregate } from "../outputs/ProductCategoryMaxAggregate";
import { ProductCategoryMinAggregate } from "../outputs/ProductCategoryMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class ProductCategoryGroupBy {
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

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isActive!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isFeatured!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  restaurantId!: string;

  @TypeGraphQL.Field(_type => ProductCategoryCountAggregate, {
    nullable: true
  })
  count!: ProductCategoryCountAggregate | null;

  @TypeGraphQL.Field(_type => ProductCategoryMinAggregate, {
    nullable: true
  })
  min!: ProductCategoryMinAggregate | null;

  @TypeGraphQL.Field(_type => ProductCategoryMaxAggregate, {
    nullable: true
  })
  max!: ProductCategoryMaxAggregate | null;
}
