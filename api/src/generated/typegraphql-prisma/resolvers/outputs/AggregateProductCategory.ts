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
export class AggregateProductCategory {
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
