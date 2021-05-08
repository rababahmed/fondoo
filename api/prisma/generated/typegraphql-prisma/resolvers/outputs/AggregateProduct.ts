import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductAvgAggregate } from "../outputs/ProductAvgAggregate";
import { ProductCountAggregate } from "../outputs/ProductCountAggregate";
import { ProductMaxAggregate } from "../outputs/ProductMaxAggregate";
import { ProductMinAggregate } from "../outputs/ProductMinAggregate";
import { ProductSumAggregate } from "../outputs/ProductSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateProduct {
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
