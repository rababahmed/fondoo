import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerAddressCreateInput } from "../../../inputs/CustomerAddressCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCustomerAddressArgs {
  @TypeGraphQL.Field(_type => CustomerAddressCreateInput, {
    nullable: false
  })
  data!: CustomerAddressCreateInput;
}
