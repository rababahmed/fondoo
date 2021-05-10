import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderUpdateWithoutUserInput } from "../inputs/OrderUpdateWithoutUserInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: false
  })
  where!: OrderWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderUpdateWithoutUserInput, {
    nullable: false
  })
  data!: OrderUpdateWithoutUserInput;
}
