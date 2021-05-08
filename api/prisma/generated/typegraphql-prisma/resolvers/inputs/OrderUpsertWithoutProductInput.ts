import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateWithoutProductInput } from "../inputs/OrderCreateWithoutProductInput";
import { OrderUpdateWithoutProductInput } from "../inputs/OrderUpdateWithoutProductInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderUpsertWithoutProductInput {
  @TypeGraphQL.Field(_type => OrderUpdateWithoutProductInput, {
    nullable: false
  })
  update!: OrderUpdateWithoutProductInput;

  @TypeGraphQL.Field(_type => OrderCreateWithoutProductInput, {
    nullable: false
  })
  create!: OrderCreateWithoutProductInput;
}
