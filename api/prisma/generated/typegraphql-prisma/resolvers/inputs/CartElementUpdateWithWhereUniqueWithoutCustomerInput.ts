import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartElementUpdateWithoutCustomerInput } from "../inputs/CartElementUpdateWithoutCustomerInput";
import { CartElementWhereUniqueInput } from "../inputs/CartElementWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CartElementUpdateWithWhereUniqueWithoutCustomerInput {
  @TypeGraphQL.Field(_type => CartElementWhereUniqueInput, {
    nullable: false
  })
  where!: CartElementWhereUniqueInput;

  @TypeGraphQL.Field(_type => CartElementUpdateWithoutCustomerInput, {
    nullable: false
  })
  data!: CartElementUpdateWithoutCustomerInput;
}
