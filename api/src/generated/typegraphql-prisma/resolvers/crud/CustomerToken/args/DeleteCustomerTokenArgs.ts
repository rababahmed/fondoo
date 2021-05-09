import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerTokenWhereUniqueInput } from "../../../inputs/CustomerTokenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteCustomerTokenArgs {
  @TypeGraphQL.Field(_type => CustomerTokenWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerTokenWhereUniqueInput;
}
