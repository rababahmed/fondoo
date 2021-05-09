import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartElementScalarWhereInput } from "../inputs/CartElementScalarWhereInput";
import { CartElementUpdateManyMutationInput } from "../inputs/CartElementUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CartElementUpdateManyWithWhereWithoutCustomerInput {
  @TypeGraphQL.Field(_type => CartElementScalarWhereInput, {
    nullable: false
  })
  where!: CartElementScalarWhereInput;

  @TypeGraphQL.Field(_type => CartElementUpdateManyMutationInput, {
    nullable: false
  })
  data!: CartElementUpdateManyMutationInput;
}
