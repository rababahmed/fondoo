import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerAddressWhereUniqueInput } from "../../../inputs/CustomerAddressWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCustomerAddressArgs {
  @TypeGraphQL.Field(_type => CustomerAddressWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerAddressWhereUniqueInput;
}
