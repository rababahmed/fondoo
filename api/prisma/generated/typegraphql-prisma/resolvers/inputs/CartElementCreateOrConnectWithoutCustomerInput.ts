import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartElementCreateWithoutCustomerInput } from "../inputs/CartElementCreateWithoutCustomerInput";
import { CartElementWhereUniqueInput } from "../inputs/CartElementWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CartElementCreateOrConnectWithoutCustomerInput {
  @TypeGraphQL.Field(_type => CartElementWhereUniqueInput, {
    nullable: false
  })
  where!: CartElementWhereUniqueInput;

  @TypeGraphQL.Field(_type => CartElementCreateWithoutCustomerInput, {
    nullable: false
  })
  create!: CartElementCreateWithoutCustomerInput;
}
