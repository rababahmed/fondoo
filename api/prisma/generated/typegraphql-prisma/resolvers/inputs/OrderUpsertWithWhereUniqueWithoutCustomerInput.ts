import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateWithoutCustomerInput } from "../inputs/OrderCreateWithoutCustomerInput";
import { OrderUpdateWithoutCustomerInput } from "../inputs/OrderUpdateWithoutCustomerInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderUpsertWithWhereUniqueWithoutCustomerInput {
  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: false
  })
  where!: OrderWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderUpdateWithoutCustomerInput, {
    nullable: false
  })
  update!: OrderUpdateWithoutCustomerInput;

  @TypeGraphQL.Field(_type => OrderCreateWithoutCustomerInput, {
    nullable: false
  })
  create!: OrderCreateWithoutCustomerInput;
}
