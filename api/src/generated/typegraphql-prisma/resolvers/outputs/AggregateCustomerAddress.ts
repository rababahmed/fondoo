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
export class AggregateCustomerAddress {
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
