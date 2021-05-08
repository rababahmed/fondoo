import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerAddressWhereUniqueInput } from "../../../inputs/CustomerAddressWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteCustomerAddressArgs {
  @TypeGraphQL.Field(_type => CustomerAddressWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerAddressWhereUniqueInput;
}
