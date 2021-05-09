import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerTokenUpdateInput } from "../../../inputs/CustomerTokenUpdateInput";
import { CustomerTokenWhereUniqueInput } from "../../../inputs/CustomerTokenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCustomerTokenArgs {
  @TypeGraphQL.Field(_type => CustomerTokenUpdateInput, {
    nullable: false
  })
  data!: CustomerTokenUpdateInput;

  @TypeGraphQL.Field(_type => CustomerTokenWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerTokenWhereUniqueInput;
}
