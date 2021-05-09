import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerAddressWhereInput } from "../../../inputs/CustomerAddressWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCustomerAddressArgs {
  @TypeGraphQL.Field(_type => CustomerAddressWhereInput, {
    nullable: true
  })
  where?: CustomerAddressWhereInput | undefined;
}
