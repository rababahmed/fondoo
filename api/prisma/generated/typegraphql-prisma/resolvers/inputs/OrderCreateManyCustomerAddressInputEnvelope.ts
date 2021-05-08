import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateManyCustomerAddressInput } from "../inputs/OrderCreateManyCustomerAddressInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderCreateManyCustomerAddressInputEnvelope {
  @TypeGraphQL.Field(_type => [OrderCreateManyCustomerAddressInput], {
    nullable: false
  })
  data!: OrderCreateManyCustomerAddressInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
