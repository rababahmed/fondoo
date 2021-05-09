import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerTokenAvgAggregate } from "../outputs/CustomerTokenAvgAggregate";
import { CustomerTokenCountAggregate } from "../outputs/CustomerTokenCountAggregate";
import { CustomerTokenMaxAggregate } from "../outputs/CustomerTokenMaxAggregate";
import { CustomerTokenMinAggregate } from "../outputs/CustomerTokenMinAggregate";
import { CustomerTokenSumAggregate } from "../outputs/CustomerTokenSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateCustomerToken {
  @TypeGraphQL.Field(_type => CustomerTokenCountAggregate, {
    nullable: true
  })
  count!: CustomerTokenCountAggregate | null;

  @TypeGraphQL.Field(_type => CustomerTokenAvgAggregate, {
    nullable: true
  })
  avg!: CustomerTokenAvgAggregate | null;

  @TypeGraphQL.Field(_type => CustomerTokenSumAggregate, {
    nullable: true
  })
  sum!: CustomerTokenSumAggregate | null;

  @TypeGraphQL.Field(_type => CustomerTokenMinAggregate, {
    nullable: true
  })
  min!: CustomerTokenMinAggregate | null;

  @TypeGraphQL.Field(_type => CustomerTokenMaxAggregate, {
    nullable: true
  })
  max!: CustomerTokenMaxAggregate | null;
}
