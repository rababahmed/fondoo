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
export class CustomerGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  firstName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lastName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  phone!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  restaurantId!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

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
