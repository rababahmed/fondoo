import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateWithoutElementsInput } from "../inputs/OrderCreateWithoutElementsInput";
import { OrderUpdateWithoutElementsInput } from "../inputs/OrderUpdateWithoutElementsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderUpsertWithoutElementsInput {
  @TypeGraphQL.Field(_type => OrderUpdateWithoutElementsInput, {
    nullable: false
  })
  update!: OrderUpdateWithoutElementsInput;

  @TypeGraphQL.Field(_type => OrderCreateWithoutElementsInput, {
    nullable: false
  })
  create!: OrderCreateWithoutElementsInput;
}
