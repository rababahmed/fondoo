import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerTokenCreateInput } from "../../../inputs/CustomerTokenCreateInput";
import { CustomerTokenUpdateInput } from "../../../inputs/CustomerTokenUpdateInput";
import { CustomerTokenWhereUniqueInput } from "../../../inputs/CustomerTokenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCustomerTokenArgs {
  @TypeGraphQL.Field(_type => CustomerTokenWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerTokenWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerTokenCreateInput, {
    nullable: false
  })
  create!: CustomerTokenCreateInput;

  @TypeGraphQL.Field(_type => CustomerTokenUpdateInput, {
    nullable: false
  })
  update!: CustomerTokenUpdateInput;
}
