import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerTokenWhereInput } from "../../../inputs/CustomerTokenWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCustomerTokenArgs {
  @TypeGraphQL.Field(_type => CustomerTokenWhereInput, {
    nullable: true
  })
  where?: CustomerTokenWhereInput | undefined;
}
