import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateWithoutCartInput } from "../inputs/CustomerCreateWithoutCartInput";
import { CustomerUpdateWithoutCartInput } from "../inputs/CustomerUpdateWithoutCartInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CustomerUpsertWithoutCartInput {
  @TypeGraphQL.Field(_type => CustomerUpdateWithoutCartInput, {
    nullable: false
  })
  update!: CustomerUpdateWithoutCartInput;

  @TypeGraphQL.Field(_type => CustomerCreateWithoutCartInput, {
    nullable: false
  })
  create!: CustomerCreateWithoutCartInput;
}
