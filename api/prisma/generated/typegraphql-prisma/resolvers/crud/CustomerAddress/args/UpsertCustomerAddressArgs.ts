import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerAddressCreateInput } from "../../../inputs/CustomerAddressCreateInput";
import { CustomerAddressUpdateInput } from "../../../inputs/CustomerAddressUpdateInput";
import { CustomerAddressWhereUniqueInput } from "../../../inputs/CustomerAddressWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCustomerAddressArgs {
  @TypeGraphQL.Field(_type => CustomerAddressWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerAddressWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerAddressCreateInput, {
    nullable: false
  })
  create!: CustomerAddressCreateInput;

  @TypeGraphQL.Field(_type => CustomerAddressUpdateInput, {
    nullable: false
  })
  update!: CustomerAddressUpdateInput;
}
