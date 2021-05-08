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
export class OrderGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  charges!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  total!: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isAccepted!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  restaurantId!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  customerId!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  customerAddressId!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

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
