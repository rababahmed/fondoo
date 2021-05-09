import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerTokenCreateManyCustomerInput } from "../inputs/CustomerTokenCreateManyCustomerInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CustomerTokenCreateManyCustomerInputEnvelope {
  @TypeGraphQL.Field(_type => [CustomerTokenCreateManyCustomerInput], {
    nullable: false
  })
  data!: CustomerTokenCreateManyCustomerInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
