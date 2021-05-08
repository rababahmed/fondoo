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
export class CustomerTokenGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  token!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  customerId!: number | null;

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
