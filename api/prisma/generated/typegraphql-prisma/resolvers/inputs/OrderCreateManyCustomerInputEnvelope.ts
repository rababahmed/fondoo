import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateManyCustomerInput } from "../inputs/OrderCreateManyCustomerInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderCreateManyCustomerInputEnvelope {
  @TypeGraphQL.Field(_type => [OrderCreateManyCustomerInput], {
    nullable: false
  })
  data!: OrderCreateManyCustomerInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
