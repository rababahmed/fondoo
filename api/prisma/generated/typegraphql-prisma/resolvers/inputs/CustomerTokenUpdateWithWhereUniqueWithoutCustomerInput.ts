import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerTokenUpdateWithoutCustomerInput } from "../inputs/CustomerTokenUpdateWithoutCustomerInput";
import { CustomerTokenWhereUniqueInput } from "../inputs/CustomerTokenWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CustomerTokenUpdateWithWhereUniqueWithoutCustomerInput {
  @TypeGraphQL.Field(_type => CustomerTokenWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerTokenWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerTokenUpdateWithoutCustomerInput, {
    nullable: false
  })
  data!: CustomerTokenUpdateWithoutCustomerInput;
}
