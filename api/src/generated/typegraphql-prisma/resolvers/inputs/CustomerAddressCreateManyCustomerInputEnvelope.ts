import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerAddressCreateManyCustomerInput } from "../inputs/CustomerAddressCreateManyCustomerInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CustomerAddressCreateManyCustomerInputEnvelope {
  @TypeGraphQL.Field(_type => [CustomerAddressCreateManyCustomerInput], {
    nullable: false
  })
  data!: CustomerAddressCreateManyCustomerInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
