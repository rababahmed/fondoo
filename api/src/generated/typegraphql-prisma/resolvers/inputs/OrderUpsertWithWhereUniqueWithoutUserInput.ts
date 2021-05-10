import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateWithoutUserInput } from "../inputs/OrderCreateWithoutUserInput";
import { OrderUpdateWithoutUserInput } from "../inputs/OrderUpdateWithoutUserInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: false
  })
  where!: OrderWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderUpdateWithoutUserInput, {
    nullable: false
  })
  update!: OrderUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => OrderCreateWithoutUserInput, {
    nullable: false
  })
  create!: OrderCreateWithoutUserInput;
}
