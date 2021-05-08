import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerTokenCreateManyInput } from "../../../inputs/CustomerTokenCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCustomerTokenArgs {
  @TypeGraphQL.Field(_type => [CustomerTokenCreateManyInput], {
    nullable: false
  })
  data!: CustomerTokenCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
