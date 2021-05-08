import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartElementAvgAggregate } from "../outputs/CartElementAvgAggregate";
import { CartElementCountAggregate } from "../outputs/CartElementCountAggregate";
import { CartElementMaxAggregate } from "../outputs/CartElementMaxAggregate";
import { CartElementMinAggregate } from "../outputs/CartElementMinAggregate";
import { CartElementSumAggregate } from "../outputs/CartElementSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateCartElement {
  @TypeGraphQL.Field(_type => CartElementCountAggregate, {
    nullable: true
  })
  count!: CartElementCountAggregate | null;

  @TypeGraphQL.Field(_type => CartElementAvgAggregate, {
    nullable: true
  })
  avg!: CartElementAvgAggregate | null;

  @TypeGraphQL.Field(_type => CartElementSumAggregate, {
    nullable: true
  })
  sum!: CartElementSumAggregate | null;

  @TypeGraphQL.Field(_type => CartElementMinAggregate, {
    nullable: true
  })
  min!: CartElementMinAggregate | null;

  @TypeGraphQL.Field(_type => CartElementMaxAggregate, {
    nullable: true
  })
  max!: CartElementMaxAggregate | null;
}
