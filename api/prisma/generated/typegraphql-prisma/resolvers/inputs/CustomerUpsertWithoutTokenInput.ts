import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateWithoutTokenInput } from "../inputs/CustomerCreateWithoutTokenInput";
import { CustomerUpdateWithoutTokenInput } from "../inputs/CustomerUpdateWithoutTokenInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CustomerUpsertWithoutTokenInput {
  @TypeGraphQL.Field(_type => CustomerUpdateWithoutTokenInput, {
    nullable: false
  })
  update!: CustomerUpdateWithoutTokenInput;

  @TypeGraphQL.Field(_type => CustomerCreateWithoutTokenInput, {
    nullable: false
  })
  create!: CustomerCreateWithoutTokenInput;
}
