import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerAddressAvgAggregate } from "../outputs/CustomerAddressAvgAggregate";
import { CustomerAddressCountAggregate } from "../outputs/CustomerAddressCountAggregate";
import { CustomerAddressMaxAggregate } from "../outputs/CustomerAddressMaxAggregate";
import { CustomerAddressMinAggregate } from "../outputs/CustomerAddressMinAggregate";
import { CustomerAddressSumAggregate } from "../outputs/CustomerAddressSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class CustomerAddressGroupBy {
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
  streetAddress!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  city!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  postCode!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  country!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  customerId!: number | null;

  @TypeGraphQL.Field(_type => CustomerAddressCountAggregate, {
    nullable: true
  })
  count!: CustomerAddressCountAggregate | null;

  @TypeGraphQL.Field(_type => CustomerAddressAvgAggregate, {
    nullable: true
  })
  avg!: CustomerAddressAvgAggregate | null;

  @TypeGraphQL.Field(_type => CustomerAddressSumAggregate, {
    nullable: true
  })
  sum!: CustomerAddressSumAggregate | null;

  @TypeGraphQL.Field(_type => CustomerAddressMinAggregate, {
    nullable: true
  })
  min!: CustomerAddressMinAggregate | null;

  @TypeGraphQL.Field(_type => CustomerAddressMaxAggregate, {
    nullable: true
  })
  max!: CustomerAddressMaxAggregate | null;
}
