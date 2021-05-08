import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerTokenScalarWhereInput } from "../inputs/CustomerTokenScalarWhereInput";
import { CustomerTokenUpdateManyMutationInput } from "../inputs/CustomerTokenUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CustomerTokenUpdateManyWithWhereWithoutCustomerInput {
  @TypeGraphQL.Field(_type => CustomerTokenScalarWhereInput, {
    nullable: false
  })
  where!: CustomerTokenScalarWhereInput;

  @TypeGraphQL.Field(_type => CustomerTokenUpdateManyMutationInput, {
    nullable: false
  })
  data!: CustomerTokenUpdateManyMutationInput;
}
