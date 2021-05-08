import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerCreateInput } from "../../../inputs/CustomerCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCustomerArgs {
  @TypeGraphQL.Field(_type => CustomerCreateInput, {
    nullable: false
  })
  data!: CustomerCreateInput;
}
