import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderUpdateWithoutCustomerAddressInput } from "../inputs/OrderUpdateWithoutCustomerAddressInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderUpdateWithWhereUniqueWithoutCustomerAddressInput {
  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: false
  })
  where!: OrderWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderUpdateWithoutCustomerAddressInput, {
    nullable: false
  })
  data!: OrderUpdateWithoutCustomerAddressInput;
}
