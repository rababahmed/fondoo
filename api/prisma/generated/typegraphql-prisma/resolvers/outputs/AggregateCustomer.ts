import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerAvgAggregate } from "../outputs/CustomerAvgAggregate";
import { CustomerCountAggregate } from "../outputs/CustomerCountAggregate";
import { CustomerMaxAggregate } from "../outputs/CustomerMaxAggregate";
import { CustomerMinAggregate } from "../outputs/CustomerMinAggregate";
import { CustomerSumAggregate } from "../outputs/CustomerSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateCustomer {
  @TypeGraphQL.Field(_type => CustomerCountAggregate, {
    nullable: true
  })
  count!: CustomerCountAggregate | null;

  @TypeGraphQL.Field(_type => CustomerAvgAggregate, {
    nullable: true
  })
  avg!: CustomerAvgAggregate | null;

  @TypeGraphQL.Field(_type => CustomerSumAggregate, {
    nullable: true
  })
  sum!: CustomerSumAggregate | null;

  @TypeGraphQL.Field(_type => CustomerMinAggregate, {
    nullable: true
  })
  min!: CustomerMinAggregate | null;

  @TypeGraphQL.Field(_type => CustomerMaxAggregate, {
    nullable: true
  })
  max!: CustomerMaxAggregate | null;
}
