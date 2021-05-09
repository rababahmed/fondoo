import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerScalarWhereInput } from "../inputs/CustomerScalarWhereInput";
import { CustomerUpdateManyMutationInput } from "../inputs/CustomerUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CustomerUpdateManyWithWhereWithoutRestaurantInput {
  @TypeGraphQL.Field(_type => CustomerScalarWhereInput, {
    nullable: false
  })
  where!: CustomerScalarWhereInput;

  @TypeGraphQL.Field(_type => CustomerUpdateManyMutationInput, {
    nullable: false
  })
  data!: CustomerUpdateManyMutationInput;
}
