import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerTokenUpdateManyMutationInput } from "../../../inputs/CustomerTokenUpdateManyMutationInput";
import { CustomerTokenWhereInput } from "../../../inputs/CustomerTokenWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCustomerTokenArgs {
  @TypeGraphQL.Field(_type => CustomerTokenUpdateManyMutationInput, {
    nullable: false
  })
  data!: CustomerTokenUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CustomerTokenWhereInput, {
    nullable: true
  })
  where?: CustomerTokenWhereInput | undefined;
}
