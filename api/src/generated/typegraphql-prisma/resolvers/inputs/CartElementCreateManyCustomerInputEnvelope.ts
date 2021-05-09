import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartElementCreateManyCustomerInput } from "../inputs/CartElementCreateManyCustomerInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CartElementCreateManyCustomerInputEnvelope {
  @TypeGraphQL.Field(_type => [CartElementCreateManyCustomerInput], {
    nullable: false
  })
  data!: CartElementCreateManyCustomerInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
