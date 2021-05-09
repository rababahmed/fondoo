import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerAddressScalarWhereInput } from "../inputs/CustomerAddressScalarWhereInput";
import { CustomerAddressUpdateManyMutationInput } from "../inputs/CustomerAddressUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CustomerAddressUpdateManyWithWhereWithoutCustomerInput {
  @TypeGraphQL.Field(_type => CustomerAddressScalarWhereInput, {
    nullable: false
  })
  where!: CustomerAddressScalarWhereInput;

  @TypeGraphQL.Field(_type => CustomerAddressUpdateManyMutationInput, {
    nullable: false
  })
  data!: CustomerAddressUpdateManyMutationInput;
}
