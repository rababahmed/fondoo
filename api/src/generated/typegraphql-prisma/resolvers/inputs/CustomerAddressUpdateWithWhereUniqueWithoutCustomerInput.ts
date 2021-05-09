import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerAddressUpdateWithoutCustomerInput } from "../inputs/CustomerAddressUpdateWithoutCustomerInput";
import { CustomerAddressWhereUniqueInput } from "../inputs/CustomerAddressWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CustomerAddressUpdateWithWhereUniqueWithoutCustomerInput {
  @TypeGraphQL.Field(_type => CustomerAddressWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerAddressWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerAddressUpdateWithoutCustomerInput, {
    nullable: false
  })
  data!: CustomerAddressUpdateWithoutCustomerInput;
}
