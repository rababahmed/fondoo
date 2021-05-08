import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerAddressUpdateInput } from "../../../inputs/CustomerAddressUpdateInput";
import { CustomerAddressWhereUniqueInput } from "../../../inputs/CustomerAddressWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCustomerAddressArgs {
  @TypeGraphQL.Field(_type => CustomerAddressUpdateInput, {
    nullable: false
  })
  data!: CustomerAddressUpdateInput;

  @TypeGraphQL.Field(_type => CustomerAddressWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerAddressWhereUniqueInput;
}
