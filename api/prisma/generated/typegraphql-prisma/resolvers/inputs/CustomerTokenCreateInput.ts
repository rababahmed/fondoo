import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateNestedOneWithoutTokenInput } from "../inputs/CustomerCreateNestedOneWithoutTokenInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CustomerTokenCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  token!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateNestedOneWithoutTokenInput, {
    nullable: true
  })
  Customer?: CustomerCreateNestedOneWithoutTokenInput | undefined;
}
