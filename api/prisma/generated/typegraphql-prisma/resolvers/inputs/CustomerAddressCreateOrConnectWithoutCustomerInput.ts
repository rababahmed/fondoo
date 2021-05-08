import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerAddressCreateWithoutCustomerInput } from "../inputs/CustomerAddressCreateWithoutCustomerInput";
import { CustomerAddressWhereUniqueInput } from "../inputs/CustomerAddressWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CustomerAddressCreateOrConnectWithoutCustomerInput {
  @TypeGraphQL.Field(_type => CustomerAddressWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerAddressWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerAddressCreateWithoutCustomerInput, {
    nullable: false
  })
  create!: CustomerAddressCreateWithoutCustomerInput;
}
