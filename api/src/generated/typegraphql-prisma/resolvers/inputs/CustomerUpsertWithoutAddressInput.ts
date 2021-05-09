import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateWithoutAddressInput } from "../inputs/CustomerCreateWithoutAddressInput";
import { CustomerUpdateWithoutAddressInput } from "../inputs/CustomerUpdateWithoutAddressInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CustomerUpsertWithoutAddressInput {
  @TypeGraphQL.Field(_type => CustomerUpdateWithoutAddressInput, {
    nullable: false
  })
  update!: CustomerUpdateWithoutAddressInput;

  @TypeGraphQL.Field(_type => CustomerCreateWithoutAddressInput, {
    nullable: false
  })
  create!: CustomerCreateWithoutAddressInput;
}
