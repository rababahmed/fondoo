import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderElementAvgAggregate } from "../outputs/OrderElementAvgAggregate";
import { OrderElementCountAggregate } from "../outputs/OrderElementCountAggregate";
import { OrderElementMaxAggregate } from "../outputs/OrderElementMaxAggregate";
import { OrderElementMinAggregate } from "../outputs/OrderElementMinAggregate";
import { OrderElementSumAggregate } from "../outputs/OrderElementSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateOrderElement {
  @TypeGraphQL.Field(_type => OrderElementCountAggregate, {
    nullable: true
  })
  count!: OrderElementCountAggregate | null;

  @TypeGraphQL.Field(_type => OrderElementAvgAggregate, {
    nullable: true
  })
  avg!: OrderElementAvgAggregate | null;

  @TypeGraphQL.Field(_type => OrderElementSumAggregate, {
    nullable: true
  })
  sum!: OrderElementSumAggregate | null;

  @TypeGraphQL.Field(_type => OrderElementMinAggregate, {
    nullable: true
  })
  min!: OrderElementMinAggregate | null;

  @TypeGraphQL.Field(_type => OrderElementMaxAggregate, {
    nullable: true
  })
  max!: OrderElementMaxAggregate | null;
}
