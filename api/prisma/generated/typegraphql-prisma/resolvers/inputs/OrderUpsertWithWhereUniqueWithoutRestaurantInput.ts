import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateWithoutRestaurantInput } from "../inputs/OrderCreateWithoutRestaurantInput";
import { OrderUpdateWithoutRestaurantInput } from "../inputs/OrderUpdateWithoutRestaurantInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderUpsertWithWhereUniqueWithoutRestaurantInput {
  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: false
  })
  where!: OrderWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderUpdateWithoutRestaurantInput, {
    nullable: false
  })
  update!: OrderUpdateWithoutRestaurantInput;

  @TypeGraphQL.Field(_type => OrderCreateWithoutRestaurantInput, {
    nullable: false
  })
  create!: OrderCreateWithoutRestaurantInput;
}
