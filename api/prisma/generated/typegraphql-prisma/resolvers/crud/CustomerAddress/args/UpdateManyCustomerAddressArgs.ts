import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerAddressUpdateManyMutationInput } from "../../../inputs/CustomerAddressUpdateManyMutationInput";
import { CustomerAddressWhereInput } from "../../../inputs/CustomerAddressWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCustomerAddressArgs {
  @TypeGraphQL.Field(_type => CustomerAddressUpdateManyMutationInput, {
    nullable: false
  })
  data!: CustomerAddressUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CustomerAddressWhereInput, {
    nullable: true
  })
  where?: CustomerAddressWhereInput | undefined;
}
