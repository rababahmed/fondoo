import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateWithoutCustomerAddressInput } from "../inputs/OrderCreateWithoutCustomerAddressInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderCreateOrConnectWithoutCustomerAddressInput {
  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: false
  })
  where!: OrderWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderCreateWithoutCustomerAddressInput, {
    nullable: false
  })
  create!: OrderCreateWithoutCustomerAddressInput;
}
