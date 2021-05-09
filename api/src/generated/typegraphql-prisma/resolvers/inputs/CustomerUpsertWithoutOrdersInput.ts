import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateWithoutOrdersInput } from "../inputs/CustomerCreateWithoutOrdersInput";
import { CustomerUpdateWithoutOrdersInput } from "../inputs/CustomerUpdateWithoutOrdersInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CustomerUpsertWithoutOrdersInput {
  @TypeGraphQL.Field(_type => CustomerUpdateWithoutOrdersInput, {
    nullable: false
  })
  update!: CustomerUpdateWithoutOrdersInput;

  @TypeGraphQL.Field(_type => CustomerCreateWithoutOrdersInput, {
    nullable: false
  })
  create!: CustomerCreateWithoutOrdersInput;
}
