import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateNestedOneWithoutCartInput } from "../inputs/CustomerCreateNestedOneWithoutCartInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CartElementCreateWithoutProductInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  quantity?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateNestedOneWithoutCartInput, {
    nullable: false
  })
  customer!: CustomerCreateNestedOneWithoutCartInput;
}
