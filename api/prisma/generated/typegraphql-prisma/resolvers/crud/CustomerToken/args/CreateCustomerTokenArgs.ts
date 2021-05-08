import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerTokenCreateInput } from "../../../inputs/CustomerTokenCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCustomerTokenArgs {
  @TypeGraphQL.Field(_type => CustomerTokenCreateInput, {
    nullable: false
  })
  data!: CustomerTokenCreateInput;
}
