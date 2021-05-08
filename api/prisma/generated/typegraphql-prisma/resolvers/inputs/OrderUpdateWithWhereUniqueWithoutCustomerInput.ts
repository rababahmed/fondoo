import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderUpdateWithoutCustomerInput } from "../inputs/OrderUpdateWithoutCustomerInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderUpdateWithWhereUniqueWithoutCustomerInput {
  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: false
  })
  where!: OrderWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderUpdateWithoutCustomerInput, {
    nullable: false
  })
  data!: OrderUpdateWithoutCustomerInput;
}
