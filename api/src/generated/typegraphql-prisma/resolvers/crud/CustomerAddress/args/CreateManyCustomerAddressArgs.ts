import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerAddressCreateManyInput } from "../../../inputs/CustomerAddressCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCustomerAddressArgs {
  @TypeGraphQL.Field(_type => [CustomerAddressCreateManyInput], {
    nullable: false
  })
  data!: CustomerAddressCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
