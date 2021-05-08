import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderAvgAggregate } from "../outputs/OrderAvgAggregate";
import { OrderCountAggregate } from "../outputs/OrderCountAggregate";
import { OrderMaxAggregate } from "../outputs/OrderMaxAggregate";
import { OrderMinAggregate } from "../outputs/OrderMinAggregate";
import { OrderSumAggregate } from "../outputs/OrderSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateOrder {
  @TypeGraphQL.Field(_type => OrderCountAggregate, {
    nullable: true
  })
  count!: OrderCountAggregate | null;

  @TypeGraphQL.Field(_type => OrderAvgAggregate, {
    nullable: true
  })
  avg!: OrderAvgAggregate | null;

  @TypeGraphQL.Field(_type => OrderSumAggregate, {
    nullable: true
  })
  sum!: OrderSumAggregate | null;

  @TypeGraphQL.Field(_type => OrderMinAggregate, {
    nullable: true
  })
  min!: OrderMinAggregate | null;

  @TypeGraphQL.Field(_type => OrderMaxAggregate, {
    nullable: true
  })
  max!: OrderMaxAggregate | null;
}
